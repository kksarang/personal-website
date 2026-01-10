import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    ArrowLeft, Clock, Calendar, ChevronRight,
    Layers, Smartphone, Database, Zap, Box, Copy, Check
} from 'lucide-react';
import { materialTopics } from '../../data/materialTopics';

// Icon mapping
const ICON_MAP = {
    Layers: Layers,
    Smartphone: Smartphone,
    Database: Database,
    Zap: Zap,
    Box: Box
};

const MaterialDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const topic = materialTopics.find(t => t.slug === slug);

    useEffect(() => {
        if (!topic) {
            navigate('/learning/materials');
        } else {
            window.scrollTo(0, 0);
        }
    }, [slug, topic, navigate]);

    if (!topic) return null;

    const Icon = ICON_MAP[topic.iconName] || Layers;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-sans transition-colors duration-300 pt-20">

            {/* Breadcrumbs & Back */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Link to="/learning/materials" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Materials
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>Developer Resources</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className={topic.category === 'Flutter' ? 'text-indigo-500' : 'text-green-500'}>{topic.category}</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-gray-900 dark:text-white font-medium">{topic.title}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    {/* Sidebar / Table of Contents (Desktop) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <nav className="sticky top-24 space-y-2">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 pl-3">On this Page</h4>
                            {topic.sections.map((section, idx) => (
                                <a
                                    key={idx}
                                    href={`#section-${idx}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(`section-${idx}`).scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-lg transition-colors"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Main Content */}
                    <article className="lg:col-span-9 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-8 md:p-12">

                        {/* Header */}
                        <header className="mb-12 border-b border-gray-100 dark:border-slate-700 pb-8">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className={`p-3 rounded-xl bg-${topic.color}-50 dark:bg-${topic.color}-900/20 text-${topic.color}-600 dark:text-${topic.color}-400`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        {topic.title}
                                    </h1>
                                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Updated {topic.lastUpdated}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {topic.readTime}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-medium bg-${topic.color}-50 dark:bg-${topic.color}-900/20 text-${topic.color}-600 dark:text-${topic.color}-400 border border-${topic.color}-100 dark:border-${topic.color}-900/30`}>
                                            {topic.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {topic.description}
                            </p>
                        </header>

                        {/* Sections */}
                        <div className="space-y-12">
                            {topic.sections.map((section, idx) => (
                                <section key={idx} id={`section-${idx}`} className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {section.title}
                                    </h2>

                                    {section.type === 'text' && (
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.type === 'code' && (
                                        <div className="space-y-4">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                            <div className="relative group">
                                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => navigator.clipboard.writeText(section.code)}
                                                        className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors"
                                                        title="Copy code"
                                                    >
                                                        <Copy className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <pre className="p-6 bg-gray-900 rounded-xl overflow-x-auto border border-gray-800">
                                                    <code className={`language-${section.language} font-mono text-sm text-indigo-100`}>
                                                        {section.code}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
};

export default MaterialDetail;
