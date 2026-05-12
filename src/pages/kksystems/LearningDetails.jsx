import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    BookOpenCheck,
    BriefcaseBusiness,
    CalendarClock,
    CheckCircle2,
    Clock3,
    Code2,
    Cpu,
    Database,
    ExternalLink,
    Figma,
    GitBranch,
    HelpCircle,
    Layers3,
    ListChecks,
    Network,
    PlayCircle,
    Server,
    Smartphone,
    Sparkles,
    Star,
    Target,
    Terminal,
    Users,
    Code,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import HexenityPageShell from '../../components/KkSystems/HexenityPageShell';
import { learningTopics } from '../../data/learning';
import { learningDetailsContent, learningMegaChapters } from '../../data/learningCatalog';
import { mobileLearningExperienceData } from '../../data/mobileLearningExperience';

export default function LearningDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const topic = learningTopics.find((item) => item.slug === id);
    const detail = topic ? learningDetailsContent[topic.slug] : null;
    const megaChapters = topic ? learningMegaChapters[topic.slug] || [] : [];
    const seo = detail?.seo || null;
    const faqForSchema = detail?.faqs || [];
    const isMobileExperience = topic?.slug === 'mobile-development';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (!seo || isMobileExperience) return undefined;

        if (seo.title) {
            document.title = seo.title;
        }

        if (seo.description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', seo.description);
        }

        if (seo.keywords?.length) {
            let keywordsMeta = document.querySelector('meta[name="keywords"]');
            if (!keywordsMeta) {
                keywordsMeta = document.createElement('meta');
                keywordsMeta.setAttribute('name', 'keywords');
                document.head.appendChild(keywordsMeta);
            }
            keywordsMeta.setAttribute('content', seo.keywords.join(', '));
        }

        const schemaId = `learning-faq-schema-${id}`;
        if (faqForSchema.length) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqForSchema.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            };

            let schemaTag = document.getElementById(schemaId);
            if (!schemaTag) {
                schemaTag = document.createElement('script');
                schemaTag.id = schemaId;
                schemaTag.setAttribute('type', 'application/ld+json');
                document.head.appendChild(schemaTag);
            }
            schemaTag.textContent = JSON.stringify(faqSchema);
        }

        return () => {
            const existing = document.getElementById(schemaId);
            if (existing) existing.remove();
        };
    }, [seo, faqForSchema, id, isMobileExperience]);

    const sections = useMemo(() => {
        if (!topic) return [];
        const topicDetail = learningDetailsContent[topic.slug] || {};
        const baseSections = [];

        if (topicDetail.hero) baseSections.push({ id: 'hero-section', label: 'Course Hero' });
        baseSections.push({ id: 'overview', label: 'Overview' });
        if (topicDetail.whatIsMobileDevelopment) baseSections.push({ id: 'what-is-mobile', label: 'What is Mobile App Dev' });
        if (topicDetail.whatIsWebDevelopment) baseSections.push({ id: 'what-is-web', label: 'What is Web Development' });
        if (topicDetail.technologiesCovered?.length) baseSections.push({ id: 'technologies-covered', label: 'Technologies Covered' });
        if (topicDetail.toolsPlatforms?.length) baseSections.push({ id: 'tools-platforms', label: 'Tools and Platforms' });
        baseSections.push({ id: 'modules', label: 'Modules' });
        if (topicDetail.roadmapLevels?.length) baseSections.push({ id: 'roadmap-levels', label: 'Level Roadmap' });
        baseSections.push({ id: 'roadmap', label: 'Roadmap Timeline' });
        if (topicDetail.caseStudies?.length) baseSections.push({ id: 'case-studies', label: 'Campaign Case Studies' });
        if (topicDetail.spotlights?.length) baseSections.push({ id: 'spotlights', label: 'Spotlights' });
        baseSections.push({ id: 'projects', label: 'Real Projects' });
        if (topicDetail.careerOpportunities?.length) baseSections.push({ id: 'career-opportunities', label: 'Career Opportunities' });
        if (topicDetail.whyLearnHexenity?.length) baseSections.push({ id: 'why-hexenity', label: 'Why Hexenity' });
        if (topicDetail.uiSuggestions) baseSections.push({ id: 'ui-suggestions', label: 'UI Suggestions' });
        baseSections.push({ id: 'interview', label: 'Interview Prep' });
        baseSections.push({ id: 'faq', label: 'FAQ' });
        if (topicDetail.cta) baseSections.push({ id: 'cta-section', label: 'Enroll / Contact' });

        if (learningMegaChapters[topic.slug]?.length) {
            baseSections.splice(6, 0, { id: 'chapter-index', label: 'Chapter Index' });
        }
        if (learningDetailsContent[topic.slug]?.androidSyllabus?.length) {
            baseSections.splice(6, 0, { id: 'syllabus', label: 'Syllabus Index' });
        }
        if (learningDetailsContent[topic.slug]?.mobileTutorialTracks?.length) {
            baseSections.splice(7, 0, { id: 'tutorial-tracks', label: 'Mobile Tracks' });
        }
        return baseSections;
    }, [topic]);

    if (!topic) {
        return (
            <HexenityPageShell
                badge="Learning Detail"
                title="Topic Not Found"
                subtitle="This learning topic does not exist."
                backLabel="Back to Learning"
                onBack={() => navigate('/hexenity/learning')}
            />
        );
    }

    const introText = detail?.intro || topic.fresherOverview || topic.overview || topic.description;
    const introBlocks = introText.split('\n\n').filter(Boolean);
    const modules = detail?.modules || [];
    const roadmap = detail?.roadmap || [];
    const projects = detail?.practiceProjects || topic.realWorldPractice || [];
    const interviewQuestions = detail?.interviewQuestions || [];
    const faqs = detail?.faqs || [];
    const resources = detail?.resources || [];
    const mobileTutorialTracks = detail?.mobileTutorialTracks || [];
    const androidSyllabus = detail?.androidSyllabus || [];
    const hero = detail?.hero || null;
    const mobileDefinition = detail?.whatIsMobileDevelopment || null;
    const webDefinition = detail?.whatIsWebDevelopment || null;
    const technologiesCovered = detail?.technologiesCovered || [];
    const roadmapLevels = detail?.roadmapLevels || [];
    const careerOpportunities = detail?.careerOpportunities || [];
    const toolsPlatforms = detail?.toolsPlatforms || [];
    const caseStudies = detail?.caseStudies || [];
    const spotlights = detail?.spotlights || [];
    const whyLearnHexenity = detail?.whyLearnHexenity || [];
    const uiSuggestions = detail?.uiSuggestions || null;
    const cta = detail?.cta || null;

    if (isMobileExperience) {
        return (
            <HexenityPageShell
                badge="Learning Detail"
                title={topic.title}
                subtitle={topic.description}
                backLabel="Back to Learning"
                onBack={() => navigate('/hexenity/learning')}
            >
                <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
                    <div className="space-y-8">
                        {topic.visualImage ? (
                            <section className="premium-surface overflow-hidden rounded-3xl border border-white/10">
                                <TopicBannerImage src={topic.visualImage} alt={`${topic.title} topic banner`} title={topic.title} />
                            </section>
                        ) : null}
                        <MobileLearningExperience navigate={navigate} />
                    </div>

                    <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
                        <section className="premium-surface rounded-2xl p-5">
                            <p className="text-xs uppercase tracking-[0.13em] text-indigo-300">Quick actions</p>
                            <div className="mt-3 space-y-2">
                                <button
                                    type="button"
                                    onClick={() => navigate('/hexenity/learning/practice')}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-emerald-100 transition hover:bg-emerald-500/25"
                                >
                                    <PlayCircle className="h-3.5 w-3.5" />
                                    Try Live Practice
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/hexenity/contact')}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500"
                                >
                                    Contact Hexenity
                                </button>
                            </div>
                        </section>

                        <section className="premium-surface rounded-2xl p-5">
                            <p className="text-xs uppercase tracking-[0.13em] text-indigo-300">Further resources</p>
                            <div className="mt-3 space-y-2">
                                {(detail?.resources || []).slice(0, 8).map((resource) => (
                                    <a
                                        key={resource.url}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-indigo-300/30 hover:text-indigo-100"
                                    >
                                        <span>{resource.label}</span>
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    </aside>
                </div>
            </HexenityPageShell>
        );
    }

    return (
        <HexenityPageShell
            badge="Learning Detail"
            title={topic.title}
            subtitle={topic.description}
            backLabel="Back to Learning"
            onBack={() => navigate('/hexenity/learning')}
        >
            <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
                <div className="space-y-8">
                    {topic.visualImage ? (
                        <section className="premium-surface overflow-hidden rounded-3xl border border-white/10">
                            <TopicBannerImage src={topic.visualImage} alt={`${topic.title} topic banner`} title={topic.title} />
                        </section>
                    ) : null}

                    {hero ? (
                        <section id="hero-section" className="premium-surface gradient-stroke rounded-3xl p-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-indigo-300">Course Hero</p>
                            <h2 className="mt-2 text-3xl font-black text-white">{hero.headline}</h2>
                            <p className="mt-3 text-lg text-slate-200">{hero.subtitle}</p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300">{hero.careerDescription}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {(hero.badges || []).map((badge) => (
                                    <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
                                        {badge}
                                    </span>
                                ))}
                                {hero.duration ? (
                                    <span className="rounded-full border border-indigo-300/35 bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-100">
                                        Duration: {hero.duration}
                                    </span>
                                ) : null}
                            </div>
                            {hero.stats?.length ? (
                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    {hero.stats.map((stat) => (
                                        <div
                                            key={`${stat.label}-${stat.value}`}
                                            className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-center"
                                        >
                                            <p className="text-2xl font-black text-white">{stat.value}</p>
                                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            <div className="mt-5 flex flex-wrap gap-3">
                                {hero.primaryCtaLabel ? (
                                    <button
                                        type="button"
                                        onClick={() => navigate(hero.primaryCtaPath || '/hexenity/contact')}
                                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500"
                                    >
                                        {hero.primaryCtaLabel}
                                    </button>
                                ) : null}
                                {hero.secondaryCtaLabel ? (
                                    <button
                                        type="button"
                                        onClick={() => navigate(hero.secondaryCtaPath || '/hexenity/learning/practice')}
                                        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-emerald-100 transition hover:bg-emerald-500/25"
                                    >
                                        <PlayCircle className="h-3.5 w-3.5" />
                                        {hero.secondaryCtaLabel}
                                    </button>
                                ) : null}
                            </div>
                        </section>
                    ) : null}

                    <section id="overview" className="premium-surface gradient-stroke rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                            Topic overview
                        </h2>
                        <div className="mt-4 space-y-3 text-slate-300">
                            {introBlocks.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        {detail?.whyImportant?.length ? (
                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                {detail.whyImportant.map((point) => (
                                    <div key={point} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                        {point}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </section>

                    {webDefinition ? (
                        <section id="what-is-web" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                                What is web development?
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">{webDefinition.overview}</p>
                            {webDefinition.disciplines?.length ? (
                                <div className="mt-5 grid gap-4 md:grid-cols-3">
                                    {webDefinition.disciplines.map((discipline) => (
                                        <article key={discipline.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                            <p className="font-semibold text-white">{discipline.title}</p>
                                            <p className="mt-2 text-sm text-slate-300">{discipline.detail}</p>
                                        </article>
                                    ))}
                                </div>
                            ) : null}
                            {webDefinition.realWorldApplications?.length ? (
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Real-world applications</p>
                                    <ul className="mt-2 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                                        {webDefinition.realWorldApplications.map((item) => (
                                            <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                            {webDefinition.industryDemand ? (
                                <p className="mt-5 rounded-xl border border-indigo-300/25 bg-indigo-500/10 p-4 text-sm text-slate-200">
                                    {webDefinition.industryDemand}
                                </p>
                            ) : null}
                        </section>
                    ) : null}

                    {mobileDefinition ? (
                        <section id="what-is-mobile" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                                What is mobile app development?
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-300">{mobileDefinition.overview}</p>
                            {mobileDefinition.ecosystems?.length ? (
                                <div className="mt-5 grid gap-4 md:grid-cols-3">
                                    {mobileDefinition.ecosystems.map((ecosystem) => (
                                        <article key={ecosystem.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                            <p className="font-semibold text-white">{ecosystem.title}</p>
                                            <p className="mt-2 text-sm text-slate-300">{ecosystem.detail}</p>
                                        </article>
                                    ))}
                                </div>
                            ) : null}
                            {mobileDefinition.realWorldUseCases?.length ? (
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Real-world use cases</p>
                                    <ul className="mt-2 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                                        {mobileDefinition.realWorldUseCases.map((useCase) => (
                                            <li key={useCase} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                                {useCase}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                            {mobileDefinition.industryDemand ? (
                                <p className="mt-5 rounded-xl border border-indigo-300/25 bg-indigo-500/10 p-4 text-sm text-slate-200">
                                    {mobileDefinition.industryDemand}
                                </p>
                            ) : null}
                        </section>
                    ) : null}

                    {detail?.prerequisites?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <ListChecks className="h-6 w-6 text-indigo-300" />
                                Prerequisites
                            </h2>
                            <div className="mt-5 grid gap-3 md:grid-cols-2">
                                {detail.prerequisites.map((item) => (
                                    <div key={item} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {technologiesCovered.length ? (
                        <section id="technologies-covered" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Code2 className="h-6 w-6 text-indigo-300" />
                                Technologies covered
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {technologiesCovered.map((technology) => (
                                    <article key={technology.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-lg font-semibold text-white">{technology.name}</p>
                                        <p className="mt-2 text-sm text-slate-300">{technology.description}</p>
                                        {technology.whyItMatters ? (
                                            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-indigo-200">{technology.whyItMatters}</p>
                                        ) : null}
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {toolsPlatforms.length ? (
                        <section id="tools-platforms" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Terminal className="h-6 w-6 text-indigo-300" />
                                Tools and platforms
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {toolsPlatforms.map((tool) => (
                                    <article key={tool.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="font-semibold text-white">{tool.name}</p>
                                        <p className="mt-2 text-sm text-slate-300">{tool.description}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section id="modules" className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Layers3 className="h-6 w-6 text-indigo-300" />
                            Detailed modules
                        </h2>
                        <div className="mt-5 space-y-4">
                            {modules.map((module) => (
                                <article key={module.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                                    <p className="mt-2 text-sm text-slate-300">{module.summary}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {module.topics.map((item) => (
                                            <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    {module.lessons?.length ? (
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Lessons included</p>
                                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                                {module.lessons.map((lesson) => (
                                                    <li key={lesson}>- {lesson}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                    {module.practicalTasks?.length ? (
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Practical tasks</p>
                                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                                {module.practicalTasks.map((task) => (
                                                    <li key={task}>- {task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                    {module.realWorldExercises?.length ? (
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Real-world exercises</p>
                                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                                {module.realWorldExercises.map((exercise) => (
                                                    <li key={exercise}>- {exercise}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                    {module.assignments?.length ? (
                                        <div className="mt-4">
                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-300">Assignments</p>
                                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                                {module.assignments.map((assignment) => (
                                                    <li key={assignment}>- {assignment}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </section>

                    {megaChapters.length ? (
                        <section id="chapter-index" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Layers3 className="h-6 w-6 text-indigo-300" />
                                Complete chapter index
                            </h2>
                            <p className="mt-2 text-sm text-slate-300">
                                Full study map for this topic: follow these chapters in order for structured progress.
                            </p>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {megaChapters.map((chapter) => (
                                    <article key={chapter.section} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <h3 className="text-base font-semibold text-white">{chapter.section}</h3>
                                        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                                            {chapter.items.map((item) => (
                                                <li key={item}>- {item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {androidSyllabus.length ? (
                        <section id="syllabus" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Layers3 className="h-6 w-6 text-indigo-300" />
                                Android complete syllabus index
                            </h2>
                            <p className="mt-2 text-sm text-slate-300">
                                A structured progression from beginner setup to advanced implementation and publishing.
                            </p>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {androidSyllabus.map((block) => (
                                    <article key={block.section} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <h3 className="text-base font-semibold text-white">{block.section}</h3>
                                        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                                            {block.topics.map((topicItem) => (
                                                <li key={topicItem}>- {topicItem}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {mobileTutorialTracks.length ? (
                        <section id="tutorial-tracks" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                                Mobile learning tracks
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-3">
                                {mobileTutorialTracks.map((track) => (
                                    <article key={track.track} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-sm font-semibold text-white">{track.track}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {track.items.map((item) => (
                                                <span key={item} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {topic.techStack?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Code2 className="h-6 w-6 text-indigo-300" />
                                Technology stack
                            </h2>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {topic.techStack.map((stack) => (
                                    <div key={stack.category} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.12em] text-indigo-300">{stack.category}</p>
                                        <p className="mt-1 text-slate-200">{stack.tools}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {roadmapLevels.length ? (
                        <section id="roadmap-levels" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <CalendarClock className="h-6 w-6 text-indigo-300" />
                                Learning roadmap by level
                            </h2>
                            <div className="mt-5 space-y-4">
                                {roadmapLevels.map((level) => (
                                    <article key={level.level} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <p className="text-lg font-semibold text-white">{level.level}</p>
                                            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                                                {level.duration}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Topics</p>
                                        <ul className="mt-2 grid gap-1 text-sm text-slate-300 md:grid-cols-2">
                                            {level.topics.map((item) => (
                                                <li key={item}>- {item}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Mini projects</p>
                                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                            {level.miniProjects.map((item) => (
                                                <li key={item}>- {item}</li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Skills learned</p>
                                        <ul className="mt-2 grid gap-1 text-sm text-slate-300 md:grid-cols-2">
                                            {level.skillsLearned.map((item) => (
                                                <li key={item}>- {item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section id="roadmap" className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <CalendarClock className="h-6 w-6 text-indigo-300" />
                            Step-by-step roadmap
                        </h2>
                        <div className="mt-5 space-y-3">
                            {roadmap.map((phase) => (
                                <article key={phase.phase} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-xs uppercase tracking-[0.12em] text-indigo-300">{phase.phase}</p>
                                    <p className="mt-1 font-semibold text-white">{phase.focus}</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                        {phase.deliverables.map((deliverable) => (
                                            <li key={deliverable}>- {deliverable}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    {caseStudies.length ? (
                        <section id="case-studies" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BriefcaseBusiness className="h-6 w-6 text-indigo-300" />
                                Campaign case studies
                            </h2>
                            <div className="mt-5 space-y-4">
                                {caseStudies.map((study) => (
                                    <article key={study.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-lg font-semibold text-white">{study.title}</p>
                                        {study.challenge ? <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-200">Challenge:</span> {study.challenge}</p> : null}
                                        {study.strategy ? <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-200">Strategy:</span> {study.strategy}</p> : null}
                                        {study.channels?.length ? (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {study.channels.map((channel) => (
                                                    <span key={channel} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
                                                        {channel}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}
                                        {study.outcomes?.length ? (
                                            <ul className="mt-3 space-y-1 text-sm text-slate-200">
                                                {study.outcomes.map((outcome) => (
                                                    <li key={outcome} className="flex items-start gap-2">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                                        <span>{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {spotlights.length ? (
                        <section id="spotlights" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Sparkles className="h-6 w-6 text-indigo-300" />
                                Spotlight tracks
                            </h2>
                            <div className="mt-5 space-y-6">
                                {spotlights.map((block) => (
                                    <article key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-lg font-semibold text-white">{block.title}</p>
                                        {block.description ? (
                                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.description}</p>
                                        ) : null}
                                        {block.items?.length ? (
                                            <ul className="mt-4 grid gap-2 text-sm text-slate-200 md:grid-cols-2">
                                                {block.items.map((item) => (
                                                    <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section id="projects" className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <BriefcaseBusiness className="h-6 w-6 text-indigo-300" />
                            Real live practice section
                        </h2>
                        <div className="mt-5 space-y-4">
                            {projects.map((project) => (
                                <article key={project.name || project.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-semibold text-white">{project.name || project.title}</h3>
                                        {project.level ? (
                                            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                                                {project.level}
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-2 text-sm text-slate-300">{project.goal || project.description}</p>
                                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                                        {(project.features || project.deliverables || []).map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {project.techUsed?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.techUsed.map((tech) => (
                                                <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </section>

                    {careerOpportunities.length ? (
                        <section id="career-opportunities" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BriefcaseBusiness className="h-6 w-6 text-indigo-300" />
                                Career opportunities
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {careerOpportunities.map((career) => (
                                    <article key={career.role} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <p className="text-lg font-semibold text-white">{career.role}</p>
                                        <p className="mt-2 text-sm text-slate-300">{career.description}</p>
                                        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-indigo-200">Salary range: {career.salaryRange}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-emerald-200">Remote opportunities: {career.remoteOpportunities}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {whyLearnHexenity.length ? (
                        <section id="why-hexenity" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <BookOpenCheck className="h-6 w-6 text-indigo-300" />
                                Why learn with Hexenity
                            </h2>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {whyLearnHexenity.map((item) => (
                                    <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="font-semibold text-white">{item.title}</p>
                                        <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {uiSuggestions ? (
                        <section id="ui-suggestions" className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Sparkles className="h-6 w-6 text-indigo-300" />
                                UI and layout suggestions
                            </h2>
                            {uiSuggestions.designDirection ? (
                                <p className="mt-4 text-sm leading-relaxed text-slate-300">{uiSuggestions.designDirection}</p>
                            ) : null}
                            {uiSuggestions.animationSuggestions?.length ? (
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Animation suggestions</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                        {uiSuggestions.animationSuggestions.map((item) => (
                                            <li key={item}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                            {uiSuggestions.iconIdeas?.length ? (
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Icon ideas</p>
                                    <ul className="mt-2 grid gap-1 text-sm text-slate-300 md:grid-cols-2">
                                        {uiSuggestions.iconIdeas.map((item) => (
                                            <li key={item}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                            {uiSuggestions.responsiveLayoutSuggestions?.length ? (
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Responsive layout suggestions</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                        {uiSuggestions.responsiveLayoutSuggestions.map((item) => (
                                            <li key={item}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </section>
                    ) : null}

                    {topic.codeExamples?.length ? (
                        <section className="premium-surface rounded-3xl p-7">
                            <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                                <Terminal className="h-6 w-6 text-indigo-300" />
                                Code examples
                            </h2>
                            <div className="mt-5 space-y-4">
                                {topic.codeExamples.map((example) => (
                                    <article key={example.title} className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                        <div className="border-b border-white/10 bg-white/5 px-4 py-3">
                                            <p className="font-semibold text-white">{example.title}</p>
                                            <p className="text-sm text-slate-300">{example.description}</p>
                                        </div>
                                        <pre className="overflow-x-auto p-4 text-sm text-slate-200">
                                            <code>{example.code}</code>
                                        </pre>
                                    </article>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section id="interview" className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <Clock3 className="h-6 w-6 text-indigo-300" />
                            Interview preparation
                        </h2>
                        <div className="mt-5 space-y-3">
                            {interviewQuestions.map((question) => (
                                <div key={question} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                    {question}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="faq" className="premium-surface rounded-3xl p-7">
                        <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-white">
                            <HelpCircle className="h-6 w-6 text-indigo-300" />
                            Frequently asked questions
                        </h2>
                        <div className="mt-5 space-y-3">
                            {faqs.map((item) => (
                                <article key={item.question} className="rounded-xl border border-white/10 bg-white/5 p-4">
                                    <p className="font-semibold text-white">{item.question}</p>
                                    <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    {cta ? (
                        <section id="cta-section" className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white">{cta.headline}</h2>
                            <p className="mx-auto mt-3 max-w-3xl text-slate-200">{cta.text}</p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                {cta.primaryLabel ? (
                                    <button
                                        type="button"
                                        onClick={() => navigate(cta.primaryPath || '/hexenity/contact')}
                                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                                    >
                                        {cta.primaryLabel}
                                    </button>
                                ) : null}
                                {cta.secondaryLabel ? (
                                    <button
                                        type="button"
                                        onClick={() => navigate(cta.secondaryPath || '/hexenity/learning/practice')}
                                        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
                                    >
                                        {cta.secondaryLabel}
                                    </button>
                                ) : null}
                            </div>
                        </section>
                    ) : null}
                </div>

                <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
                    <section className="premium-surface rounded-2xl p-5">
                        <p className="text-xs uppercase tracking-[0.13em] text-indigo-300">Topic metadata</p>
                        <div className="mt-3 space-y-2 text-sm text-slate-300">
                            <p>Level: <span className="font-semibold text-white">{detail?.level || 'Structured track'}</span></p>
                            <p>Read time: <span className="font-semibold text-white">{detail?.readTime || '10 min'}</span></p>
                            <p>Updated: <span className="font-semibold text-white">{detail?.updatedOn || '2026'}</span></p>
                        </div>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/learning/practice')}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-emerald-100 transition hover:bg-emerald-500/25"
                        >
                            <PlayCircle className="h-3.5 w-3.5" />
                            Try Real-Time Code
                        </button>
                    </section>

                    <section className="premium-surface rounded-2xl p-5">
                        <p className="text-xs uppercase tracking-[0.13em] text-indigo-300">In this guide</p>
                        <div className="mt-3 space-y-2">
                            {sections.map((section) => (
                                <a key={section.id} href={`#${section.id}`} className="block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-indigo-300/30 hover:text-indigo-100">
                                    {section.label}
                                </a>
                            ))}
                        </div>
                    </section>

                    {resources.length ? (
                        <section className="premium-surface rounded-2xl p-5">
                            <p className="text-xs uppercase tracking-[0.13em] text-indigo-300">Further resources</p>
                            <div className="mt-3 space-y-2">
                                {resources.map((resource) => (
                                    <a
                                        key={resource.url}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-indigo-300/30 hover:text-indigo-100"
                                    >
                                        <span>{resource.label}</span>
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section className="rounded-2xl border border-indigo-300/25 bg-indigo-500/15 p-5">
                        <p className="text-sm font-semibold text-white">Need guided implementation?</p>
                        <p className="mt-2 text-sm text-slate-200">Discuss your learning roadmap or project build with Hexenity.</p>
                        <button
                            onClick={() => navigate('/hexenity/contact')}
                            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-indigo-500"
                        >
                            Contact Hexenity
                        </button>
                    </section>
                </aside>
            </div>
        </HexenityPageShell>
    );
}

function MobileLearningExperience({ navigate }) {
    const [activeModeId, setActiveModeId] = useState(mobileLearningExperienceData.modes[0]?.id || 'beginner');
    const [activeFaq, setActiveFaq] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const activeMode = mobileLearningExperienceData.modes.find((mode) => mode.id === activeModeId) || mobileLearningExperienceData.modes[0];
    const testimonials = mobileLearningExperienceData.testimonials || [];

    useEffect(() => {
        if (!testimonials.length) return undefined;
        const timer = window.setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4500);
        return () => window.clearInterval(timer);
    }, [testimonials.length]);

    useEffect(() => {
        if (mobileLearningExperienceData.seo?.title) {
            document.title = mobileLearningExperienceData.seo.title;
        }
        if (mobileLearningExperienceData.seo?.description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', mobileLearningExperienceData.seo.description);
        }

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: (mobileLearningExperienceData.faqs || []).map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        };

        const schemaId = 'mobile-learning-faq-schema';
        let schemaTag = document.getElementById(schemaId);
        if (!schemaTag) {
            schemaTag = document.createElement('script');
            schemaTag.id = schemaId;
            schemaTag.setAttribute('type', 'application/ld+json');
            document.head.appendChild(schemaTag);
        }
        schemaTag.textContent = JSON.stringify(faqSchema);

        return () => {
            const existing = document.getElementById(schemaId);
            if (existing) existing.remove();
        };
    }, []);

    const handleQuickOption = (option) => {
        if (option.actionType === 'mode') {
            setActiveModeId(option.target);
            const panel = document.getElementById('mode-panel');
            if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        if (option.actionType === 'navigate') {
            navigate(option.target);
            return;
        }
        if (option.actionType === 'scroll') {
            const element = document.getElementById(option.target);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="space-y-8 pb-20 md:pb-0">
            <section className="premium-surface gradient-stroke rounded-3xl p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-indigo-300">Academy learning mode</p>
                <h1 className="mt-2 text-4xl font-black leading-tight text-white">{mobileLearningExperienceData.title}</h1>
                <p className="mt-3 text-base leading-relaxed text-slate-200">{mobileLearningExperienceData.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {mobileLearningExperienceData.conversionBadges.map((badge) => (
                        <span key={badge} className="rounded-full border border-indigo-300/25 bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
                            {badge}
                        </span>
                    ))}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {mobileLearningExperienceData.quickOptions.map((option) => (
                        <motion.button
                            key={option.id}
                            type="button"
                            whileHover={{ y: -2 }}
                            onClick={() => handleQuickOption(option)}
                            className="rounded-xl border border-white/10 bg-white/5 p-4 text-left shadow-[0_0_0_1px_rgba(99,102,241,0.08)] transition hover:border-indigo-300/30 hover:bg-white/10"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{option.label}</p>
                            <p className="mt-1 text-sm text-slate-300">{option.description}</p>
                        </motion.button>
                    ))}
                </div>
            </section>

            <section id="learning-stats" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Learning stats</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mobileLearningExperienceData.stats.map((item, index) => (
                        <AnimatedStatCard key={item.label} stat={item} index={index} />
                    ))}
                </div>
            </section>

            <section id="roadmap-timeline" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Interactive learning roadmap</h2>
                <p className="mt-2 text-sm text-slate-300">Beginner to production-ready timeline with skills, projects, duration, and outcomes.</p>
                <div className="mt-6 space-y-4">
                    {mobileLearningExperienceData.roadmapTimeline.map((step, index) => (
                        <motion.article
                            key={step.id}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: index * 0.05 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                        >
                            <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-indigo-400/80 to-cyan-400/80" />
                            <div className="flex flex-wrap items-center justify-between gap-2 pl-3">
                                <p className="text-lg font-semibold text-white">{step.level}</p>
                                <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                                    {step.duration}
                                </span>
                            </div>
                            <div className="mt-3 pl-3">
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900/70">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${step.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 grid gap-4 pl-3 md:grid-cols-3">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Skills</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                        {step.skills.map((item) => (
                                            <li key={item}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Projects</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                        {step.projects.map((item) => (
                                            <li key={item}>- {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Outcome</p>
                                    <p className="mt-2 text-sm text-slate-300">{step.outcomes}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="mode-panel" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Choose your learning option</h2>
                <p className="mt-2 text-sm text-slate-300">Switch between levels for focused content instead of endless scrolling.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {mobileLearningExperienceData.modes.map((mode) => (
                        <button
                            key={mode.id}
                            type="button"
                            onClick={() => setActiveModeId(mode.id)}
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                activeMode.id === mode.id
                                    ? 'border-indigo-300/45 bg-indigo-500/20 text-indigo-100'
                                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-indigo-300/30 hover:text-indigo-100'
                            }`}
                        >
                            {mode.label}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.article
                        key={activeMode.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-xl font-semibold text-white">{activeMode.label}</p>
                            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                                {activeMode.duration}
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-slate-300">{activeMode.overview}</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Topics</p>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                    {activeMode.topics.map((item) => (
                                        <li key={item}>- {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Mini projects</p>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                    {activeMode.miniProjects.map((item) => (
                                        <li key={item}>- {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Skills learned</p>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                    {activeMode.skillsLearned.map((item) => (
                                        <li key={item}>- {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.article>
                </AnimatePresence>
            </section>

            <section id="what-you-build" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">What you will build</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {mobileLearningExperienceData.whatYouWillBuild.map((project) => (
                        <motion.article
                            key={project.name}
                            whileHover={{ y: -3 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-indigo-300/30"
                        >
                            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-slate-900/60 to-cyan-900/30 p-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">Preview Mockup</p>
                                <p className="mt-1 text-sm text-slate-300">{project.previewMockup}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                                <p className="text-lg font-semibold text-white">{project.name}</p>
                                <span className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                                    {project.difficulty}
                                </span>
                            </div>
                            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">Features</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                {project.features.map((feature) => (
                                    <li key={feature}>- {feature}</li>
                                ))}
                            </ul>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="tech-stack" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Tech stack grid</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mobileLearningExperienceData.techStackGrid.map((item) => (
                        <motion.article
                            key={item.name}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_0_0_1px_rgba(99,102,241,0.08)] transition hover:border-indigo-300/35"
                        >
                            <div className="flex items-center gap-2">
                                <TechIcon icon={item.icon} />
                                <p className="text-base font-semibold text-white">{item.name}</p>
                            </div>
                            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="career-panel" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Career outcomes</h2>
                <p className="mt-2 text-sm text-slate-300">Job roles, salary bands, freelance opportunities, startup scope, and remote hiring potential.</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {mobileLearningExperienceData.careers.map((career) => (
                        <article key={career.role} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="font-semibold text-white">{career.role}</p>
                            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-indigo-200">Salary: {career.salary}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-emerald-200">{career.remote}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="mentor-section" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Mentor and industry section</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {mobileLearningExperienceData.mentorIndustry.map((mentor) => (
                        <article key={mentor.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="font-semibold text-white">{mentor.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-indigo-200">{mentor.role}</p>
                            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-emerald-200">{mentor.experience}</p>
                            <p className="mt-3 text-sm text-slate-300">{mentor.background}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Premium testimonials</h2>
                {testimonials.length ? (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={testimonials[activeTestimonial].name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-300/35 bg-indigo-500/15 text-sm font-semibold text-indigo-100">
                                        {testimonials[activeTestimonial].avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-1">
                                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, index) => (
                                        <Star key={`${testimonials[activeTestimonial].name}-${index}`} className="h-4 w-4 fill-amber-300 text-amber-300" />
                                    ))}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">{testimonials[activeTestimonial].story}</p>
                            </motion.article>
                        </AnimatePresence>
                        <div className="mt-4 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200"
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                ) : null}
            </section>

            <section id="course-features" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Course features</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {mobileLearningExperienceData.courseFeatures.map((feature) => (
                        <div key={feature} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                            {feature}
                        </div>
                    ))}
                </div>
            </section>

            <section id="learning-experience" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">{mobileLearningExperienceData.learningExperience.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{mobileLearningExperienceData.learningExperience.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {mobileLearningExperienceData.learningExperience.points.map((point) => (
                        <li key={point} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                            {point}
                        </li>
                    ))}
                </ul>
            </section>

            <section id="faq-panel" className="premium-surface rounded-3xl p-7">
                <h2 className="text-2xl font-bold text-white">Professional FAQ</h2>
                <div className="mt-4 space-y-2">
                    {mobileLearningExperienceData.faqs.map((item, index) => (
                        <article key={item.question} className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <button
                                type="button"
                                onClick={() => setActiveFaq((prev) => (prev === index ? -1 : index))}
                                className="w-full text-left text-sm font-semibold text-white"
                            >
                                {item.question}
                            </button>
                            {activeFaq === index ? <p className="mt-2 text-sm text-slate-300">{item.answer}</p> : null}
                        </article>
                    ))}
                </div>
            </section>

            <section id="cta-panel" className="rounded-3xl border border-indigo-300/25 bg-indigo-500/15 p-7 text-center">
                <h2 className="text-3xl font-bold text-white">{mobileLearningExperienceData.finalCta.headline}</h2>
                <p className="mt-3 text-slate-200">{mobileLearningExperienceData.finalCta.subtext}</p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity/contact')}
                        className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        {mobileLearningExperienceData.finalCta.primaryLabel}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity/contact')}
                        className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/15"
                    >
                        {mobileLearningExperienceData.finalCta.secondaryLabel}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/hexenity')}
                        className="rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
                    >
                        {mobileLearningExperienceData.finalCta.tertiaryLabel}
                    </button>
                </div>
            </section>

            <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
                <div className="rounded-2xl border border-indigo-300/35 bg-[rgba(10,15,31,0.92)] p-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                        >
                            {mobileLearningExperienceData.stickyCta.primaryLabel}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/hexenity/contact')}
                            className="rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100"
                        >
                            {mobileLearningExperienceData.stickyCta.secondaryLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnimatedStatCard({ stat, index }) {
    const [count, setCount] = useState(0);
    const Icon = getStatIcon(stat.icon);

    useEffect(() => {
        const durationMs = 900;
        const steps = 30;
        const stepValue = stat.value / steps;
        let currentStep = 0;
        const timer = window.setInterval(() => {
            currentStep += 1;
            const next = Math.min(stat.value, Math.round(stepValue * currentStep));
            setCount(next);
            if (currentStep >= steps) {
                window.clearInterval(timer);
            }
        }, durationMs / steps);
        return () => window.clearInterval(timer);
    }, [stat.value]);

    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_0_0_1px_rgba(99,102,241,0.08)] transition hover:border-indigo-300/35"
        >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-200">
                <Icon className="h-4 w-4" />
            </div>
            <p className="mt-3 text-3xl font-black text-white">
                {count}
                {stat.suffix}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">{stat.label}</p>
        </motion.article>
    );
}

function TechIcon({ icon }) {
    const Icon = getTechIcon(icon);
    return <Icon className="h-4 w-4 text-indigo-200" />;
}

function getStatIcon(iconKey) {
    const map = {
        users: Users,
        briefcase: BriefcaseBusiness,
        cpu: Cpu,
        target: Target,
    };
    return map[iconKey] || Target;
}

function getTechIcon(iconKey) {
    const map = {
        smartphone: Smartphone,
        code: Code,
        database: Database,
        network: Network,
        server: Server,
        git: GitBranch,
        figma: Figma,
    };
    return map[iconKey] || Code2;
}

function TopicBannerImage({ src, alt, title }) {
    const [failed, setFailed] = React.useState(false);

    if (failed) {
        return (
            <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-indigo-900/50 via-slate-900/60 to-cyan-900/40 md:h-72">
                <p className="px-6 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">{title}</p>
            </div>
        );
    }

    return <img src={src} alt={alt} className="h-56 w-full object-cover md:h-72" loading="lazy" onError={() => setFailed(true)} />;
}
