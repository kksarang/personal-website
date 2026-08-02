import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock3, Filter, GraduationCap, PlayCircle, Search, Sparkles } from 'lucide-react';
import EnitexaPageShell from '../../components/KkSystems/EnitexaPageShell';
import { learningTopics } from '../../data/learning';
import { learningCategorySections, learningDetailsContent, learningMegaChapters } from '../../data/learningCatalog';
import { allPracticeTemplates } from '../../data/learningPlayground';

export default function Learning() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [imageErrors, setImageErrors] = useState({});

    const categories = useMemo(() => {
        return learningCategorySections
            .map((category) => ({
                ...category,
                topics: category.topicSlugs
                    .map((slug) => learningTopics.find((topic) => topic.slug === slug))
                    .filter(Boolean),
            }))
            .filter((category) => category.topics.length > 0);
    }, []);

    const allTopics = useMemo(() => learningTopics, []);

    const filteredTopics = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return allTopics.filter((topic) => {
            const inCategory =
                activeCategory === 'all' ||
                learningCategorySections
                    .find((category) => category.id === activeCategory)
                    ?.topicSlugs.includes(topic.slug);
            const matchesQuery =
                !normalizedQuery ||
                topic.title.toLowerCase().includes(normalizedQuery) ||
                topic.description.toLowerCase().includes(normalizedQuery) ||
                topic.technologies?.some((tech) => tech.toLowerCase().includes(normalizedQuery));
            return inCategory && matchesQuery;
        });
    }, [allTopics, activeCategory, query]);

    return (
        <EnitexaPageShell
            badge="Learning Hub"
            title="A detailed learning portal for freshers and working developers"
            subtitle="Browse structured materials, roadmap-driven guides, real project practice, and interview-focused preparation across mobile, web, backend, cloud, AI, and security."
            backLabel="Back to Home"
            onBack={() => navigate('/enitexa.ai')}
        >
            <div className="space-y-8">
                <section className="premium-surface gradient-stroke rounded-3xl p-7">
                    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                        <div>
                            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200">
                                <GraduationCap className="h-3.5 w-3.5" />
                                Learning Library
                            </p>
                            <h2 className="mt-3 pf-display text-3xl font-bold text-white">Find a complete path, not just random notes</h2>
                            <p className="mt-3 max-w-3xl text-slate-300">
                                Every topic page includes beginner explanation, why/when to learn, modules, roadmap, real-world projects, interview questions, and FAQ blocks.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em]">
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">{allTopics.length} detailed topics</span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">Beginner to advanced</span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">Real project roadmap</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => navigate('/enitexa.ai/learning/practice')}
                                className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100 transition hover:bg-emerald-500/25"
                            >
                                <PlayCircle className="h-3.5 w-3.5" />
                                Try Live Code Now
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div className="relative">
                                <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search topic, technology, skill..."
                                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white outline-none transition focus:border-indigo-300/40"
                                />
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-300">
                                    <Filter className="h-3.5 w-3.5" />
                                    Filter by track
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setActiveCategory('all')}
                                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                            activeCategory === 'all'
                                                ? 'border-indigo-300/45 bg-indigo-400/20 text-indigo-100'
                                                : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-300/30 hover:text-indigo-100'
                                        }`}
                                    >
                                        All
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                                activeCategory === category.id
                                                    ? 'border-indigo-300/45 bg-indigo-400/20 text-indigo-100'
                                                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-300/30 hover:text-indigo-100'
                                            }`}
                                        >
                                            {category.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 pf-display text-2xl font-bold text-white">
                        <PlayCircle className="h-6 w-6 text-emerald-300" />
                        Live coding practice
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                        Start quick practice directly from the Learning page. Choose language and open live try mode.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {allPracticeTemplates.map((template) => (
                            <button
                                key={template.key}
                                type="button"
                                onClick={() => navigate(`/enitexa.ai/learning/practice/live?template=${template.key}`)}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:border-emerald-300/35 hover:text-emerald-100"
                            >
                                {template.title}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => navigate('/enitexa.ai/learning/practice')}
                            className="rounded-full border border-emerald-300/35 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100 transition hover:bg-emerald-500/25"
                        >
                            Open Full Practice Hub
                        </button>
                    </div>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 pf-display text-2xl font-bold text-white">
                        <BookOpen className="h-6 w-6 text-indigo-300" />
                        Explore learning tracks
                    </h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {categories.map((category) => (
                            <article key={category.id} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-300/30">
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-300">{category.title}</p>
                                <p className="mt-2 text-base leading-7 text-slate-200">{category.description}</p>
                                <p className="mt-4 text-sm text-slate-300">
                                    Includes: {category.topics.map((topic) => topic.title).join(', ')}
                                </p>
                                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-400">{category.topics.length} detailed topic(s)</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="space-y-5">
                    {categories.map((category) => (
                        <article key={category.id} id={`study-${category.id}`} className="premium-surface rounded-3xl p-7">
                            <h3 className="pf-display text-2xl font-bold text-white">{category.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{category.description}</p>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {category.topics.map((topic) => {
                                    const deepContent = learningDetailsContent[topic.slug];
                                    const chapterCount = learningMegaChapters[topic.slug]?.length || 0;
                                    const previewText = buildTopicPreview(topic, deepContent);
                                    const previewModules = deepContent?.modules?.slice(0, 3) || [];
                                    return (
                                        <button
                                            key={topic.slug}
                                            onClick={() => navigate(`/enitexa.ai/learning/${topic.slug}`)}
                                            className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-300/30 text-left transition hover:border-indigo-300/40 hover:bg-white/10"
                                        >
                                            <p className="pf-display text-2xl font-bold text-white">{topic.title}</p>
                                            <p className="mt-2 text-base leading-7 text-slate-200">{previewText}</p>
                                            {previewModules.length ? (
                                                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                                                    {previewModules.map((module) => (
                                                        <li key={module.title}>- {module.title}</li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">
                                                {deepContent?.readTime || '10 min'} | {deepContent?.level || 'Structured'} | {chapterCount} chapter sections
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">
                                                Open Track
                                                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 pf-display text-2xl font-bold text-white">
                        <Sparkles className="h-6 w-6 text-indigo-300" />
                        Big detailed learning view
                    </h2>
                    <p className="mt-2 text-base leading-7 text-slate-200">
                        If scrolling feels fast, use this section to quickly understand each topic with large text, module highlights, and direct open buttons.
                    </p>
                    <div className="mt-6 space-y-4">
                        {filteredTopics.slice(0, 6).map((topic) => {
                            const deepContent = learningDetailsContent[topic.slug];
                            const previewModules = deepContent?.modules?.slice(0, 3) || [];
                            return (
                                <article key={topic.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <p className="pf-display text-2xl font-bold text-white">{topic.title}</p>
                                    <p className="mt-2 text-base leading-7 text-slate-200">{buildTopicPreview(topic, deepContent)}</p>
                                    {previewModules.length ? (
                                        <div className="mt-4 grid gap-2 md:grid-cols-2">
                                            {previewModules.map((module) => (
                                                <div key={module.title} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200">
                                                    {module.title}
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/enitexa.ai/learning/${topic.slug}`)}
                                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/15 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-500/25"
                                    >
                                        Open Detailed Guide
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="premium-surface rounded-3xl p-7">
                    <h2 className="inline-flex items-center gap-2 pf-display text-2xl font-bold text-white">
                        <Sparkles className="h-6 w-6 text-indigo-300" />
                        Detailed learning materials
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">Open any topic to get structured modules, roadmap, practical implementation, interview prep, and FAQs.</p>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {filteredTopics.map((topic) => {
                            const deepContent = learningDetailsContent[topic.slug];
                            const hasImage = topic.visualImage && !imageErrors[topic.slug];
                            return (
                                <button
                                    key={topic.slug}
                                    onClick={() => navigate(`/enitexa.ai/learning/${topic.slug}`)}
                                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:border-indigo-300/40 hover:bg-white/10"
                                >
                                    {hasImage ? (
                                        <img
                                            src={topic.visualImage}
                                            alt={topic.title}
                                            className="h-40 w-full object-cover"
                                            loading="lazy"
                                            onError={() => {
                                                setImageErrors((prev) => ({ ...prev, [topic.slug]: true }));
                                            }}
                                        />
                                    ) : (
                                        <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-indigo-900/50 via-slate-900/60 to-cyan-900/40">
                                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">{topic.title}</p>
                                        </div>
                                    )}
                                    <div className="p-5">
                                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
                                            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-slate-300">
                                                {deepContent?.level || 'Structured track'}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-slate-400">
                                                <Clock3 className="h-3.5 w-3.5" />
                                                {deepContent?.readTime || '10 min'}
                                            </span>
                                        </div>
                                        <p className="mt-3 pf-display text-2xl font-bold text-white">{topic.title}</p>
                                        <p className="mt-2 text-base leading-7 text-slate-200">{buildTopicPreview(topic, deepContent)}</p>
                                        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-400">
                                            {(deepContent?.modules?.length || 0)} modules | {(deepContent?.practiceProjects?.length || 0)} practice project(s)
                                        </p>
                                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-200">
                                            Open Detailed Guide
                                            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                        {!filteredTopics.length ? (
                            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-300/30 text-sm text-slate-300 md:col-span-2">
                                No topics matched this search/filter. Try another keyword or select "All".
                            </div>
                        ) : null}
                    </div>
                </section>
            </div>
        </EnitexaPageShell>
    );
}

function buildTopicPreview(topic, detail) {
    const source = topic.fresherOverview || detail?.intro || topic.description || '';
    const firstParagraph = source.split('\n\n')[0]?.trim() || source;
    if (firstParagraph.length <= 240) return firstParagraph;
    return `${firstParagraph.slice(0, 240).trim()}...`;
}
