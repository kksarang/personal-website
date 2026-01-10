import React, { useState } from 'react';
import {
    Code2, Smartphone, Layers, Copy, Check, Terminal,
    ArrowRight, BookOpen, Database, Globe, Cpu, Moon, Sun, Zap, Box
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { materialTopics } from '../../data/materialTopics';

// Icon mapping helper
const ICON_MAP = {
    Layers: Layers,
    Smartphone: Smartphone,
    Database: Database,
    Zap: Zap,
    Box: Box
};

const CodeSnippetDecoration = ({ code, className }) => (
    <div className={`absolute p-4 rounded-xl bg-gray-900/90 border border-white/10 shadow-2xl backdrop-blur-sm pointer-events-none select-none ${className}`}>
        <div className="flex space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <pre className="font-mono text-xs text-indigo-300">
            <code>{code}</code>
        </pre>
    </div>
);

const TopicCard = ({ title, description, iconName, color, tags, slug }) => {
    const navigate = useNavigate();
    const Icon = ICON_MAP[iconName] || Layers;

    return (
        <div onClick={() => navigate(`/learning/materials/${slug}`)} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-${color}-500/10 transition-colors`}></div>

            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={`p-3 rounded-xl bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="p-2 rounded-full bg-gray-50 dark:bg-slate-700 text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags && tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md border border-gray-100 dark:border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const LearningMaterials = () => {
    // Filter topics from the shared data file
    const flutterData = materialTopics.filter(t => t.category === 'Flutter');
    const androidData = materialTopics.filter(t => t.category === 'Android');

    const [activeTab, setActiveTab] = useState('flutter');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-sans transition-colors duration-300">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
                </div>

                {/* Floating Code Decorations */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    <CodeSnippetDecoration
                        className="top-40 right-[10%] opacity-60 rotate-3 animate-float-slow"
                        code={`void main() {\n  runApp(MyApp());\n}`}
                    />
                    <CodeSnippetDecoration
                        className="bottom-20 left-[5%] opacity-40 -rotate-3 animate-float-slower"
                        code={`fun onCreate() {\n  super.onCreate()\n}`}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8 border border-indigo-100 dark:border-indigo-500/20">
                        <Terminal className="w-4 h-4 mr-2" />
                        Developer Resources
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                        Mobile App <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                            Development Materials
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                        Production-ready concepts, real-world functions, and detailed guides for <span className="font-semibold text-gray-900 dark:text-white">Flutter</span> and <span className="font-semibold text-gray-900 dark:text-white">Native Android</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => document.getElementById('flutter')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center justify-center">
                            <Layers className="w-5 h-5 mr-3" />
                            Explore Flutter
                        </button>
                        <button onClick={() => document.getElementById('android')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all flex items-center justify-center">
                            <Smartphone className="w-5 h-5 mr-3" />
                            Explore Android
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Flutter Section */}
            <section id="flutter" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Layers className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Flutter Development</h2>
                        <p className="text-gray-500 dark:text-gray-400">Architectural patterns and widget mastery</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {flutterData.map((topic, idx) => (
                        <TopicCard key={idx} {...topic} tags={[topic.difficulty, topic.readTime]} />
                    ))}
                </div>
            </section>

            {/* 3. Android Section */}
            <section id="android" className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Native Android</h2>
                            <p className="text-gray-500 dark:text-gray-400">Kotlin, Jetpack, and platform internals</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {androidData.map((topic, idx) => (
                            <TopicCard key={idx} {...topic} tags={[topic.difficulty, topic.readTime]} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Function Writing Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
                        <Code2 className="w-4 h-4 mr-2" />
                        Code Library
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Common Functions & Utilities</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                        Production-ready snippets I use in almost every project. Optimized, tested, and copy-paste ready.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-100 dark:border-slate-700">
                        <button
                            onClick={() => setActiveTab('flutter')}
                            className={`flex-1 py-6 text-center font-bold text-lg transition-colors flex items-center justify-center ${activeTab === 'flutter' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            <Layers className="w-5 h-5 mr-3" />
                            Flutter Utils
                        </button>
                        <button
                            onClick={() => setActiveTab('android')}
                            className={`flex-1 py-6 text-center font-bold text-lg transition-colors flex items-center justify-center ${activeTab === 'android' ? 'text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-900/10' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            <Smartphone className="w-5 h-5 mr-3" />
                            Android Utils
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 bg-gray-900 text-gray-300 font-mono text-sm overflow-x-auto">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <button className="flex items-center text-xs font-sans text-gray-400 hover:text-white transition-colors">
                                <Copy className="w-4 h-4 mr-2" />
                                Copy to Clipboard
                            </button>
                        </div>

                        {activeTab === 'flutter' ? (
                            <pre>
                                {`// 1. Email Validator
String? validateEmail(String? value) {
  if (value == null || value.isEmpty) return 'Email is required';
  final emailRegex = RegExp(r'^[^@]+@[^@]+\\.[^@]+');
  if (!emailRegex.hasMatch(value)) return 'Enter a valid email';
  return null;
}

// 2. Custom Date Formatter
String formatDate(DateTime date) {
  return "\${date.day}/\${date.month}/\${date.year}"; 
}

// 3. Network Checker (Riverpod)
final networkProvider = StreamProvider<bool>((ref) {
  return Connectivity().onConnectivityChanged.map((status) {
    return status != ConnectivityResult.none;
  });
});`}
                            </pre>
                        ) : (
                            <pre>
                                {`// 1. Extension Function for View Visibility
fun View.visible() {
    this.visibility = View.VISIBLE
}

fun View.gone() {
    this.visibility = View.GONE
}

// 2. Safe API Call Wrapper
suspend fun <T> safeApiCall(apiCall: suspend () -> Response<T>): Resource<T> {
    return try {
        val response = apiCall()
        if (response.isSuccessful) {
            val body = response.body()
            if (body != null) Resource.Success(body)
            else Resource.Error("Empty Body")
        } else {
            Resource.Error("Error Code: \${response.code()}")
        }
    } catch (e: Exception) {
        Resource.Error(e.message ?: "Unknown Error")
    }
}`}
                            </pre>
                        )}
                    </div>
                </div>
            </section>

            <div className="h-20"></div>
        </div>
    );
};

export default LearningMaterials;
