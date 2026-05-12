import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Play, RotateCcw } from 'lucide-react';
import { allPracticeTemplates, codePlaygroundTemplates } from '../../data/learningPlayground';

function useTemplateKey() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const requested = params.get('template');
    return requested && codePlaygroundTemplates[requested] ? requested : 'html';
}

export default function LearningLiveCode() {
    const navigate = useNavigate();
    const templateKey = useTemplateKey();
    const template = codePlaygroundTemplates[templateKey];

    const [htmlCode, setHtmlCode] = useState(template.html || '');
    const [cssCode, setCssCode] = useState(template.css || '');
    const [jsCode, setJsCode] = useState(template.js || '');
    const [sourceCode, setSourceCode] = useState(template.code || '');
    const [consoleOutput, setConsoleOutput] = useState(template.defaultOutput || 'Click Run to see output.');
    const [renderToken, setRenderToken] = useState(0);

    useEffect(() => {
        setHtmlCode(template.html || '');
        setCssCode(template.css || '');
        setJsCode(template.js || '');
        setSourceCode(template.code || '');
        setConsoleOutput(template.defaultOutput || 'Click Run to see output.');
        setRenderToken((value) => value + 1);
    }, [templateKey]);

    const srcDoc = useMemo(() => {
        return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>${cssCode}</style>
</head>
<body>
${htmlCode}
<script>
try {
${jsCode}
} catch (error) {
  const pre = document.createElement('pre');
  pre.style.color = 'red';
  pre.innerText = error?.message || String(error);
  document.body.appendChild(pre);
}
</script>
</body>
</html>`;
    }, [htmlCode, cssCode, jsCode, renderToken]);

    const resetToTemplate = () => {
        setHtmlCode(template.html || '');
        setCssCode(template.css || '');
        setJsCode(template.js || '');
        setSourceCode(template.code || '');
        setConsoleOutput(template.defaultOutput || 'Click Run to see output.');
        setRenderToken((value) => value + 1);
    };

    const runCurrentCode = () => {
        if (template.runtime === 'web') {
            setRenderToken((value) => value + 1);
            return;
        }
        setConsoleOutput(deriveConsoleOutput(template.key, sourceCode, template.defaultOutput));
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0A1020] pt-24 text-white">
            <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-xs uppercase tracking-[0.14em] text-indigo-200">Try it yourself</p>
                            <h1 className="mt-1 text-3xl font-black">{template.title} Live Playground</h1>
                            <p className="mt-1 text-sm text-slate-300">
                                {template.runtime === 'web'
                                    ? 'Edit code on the left and run to preview instantly.'
                                    : 'Edit code and run in console-style practice mode.'}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={runCurrentCode}
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
                            >
                                <Play className="h-4 w-4" />
                                {template.runtime === 'web' ? 'Run Code' : 'Run Console'}
                            </button>
                            <button
                                type="button"
                                onClick={resetToTemplate}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-indigo-300/35 hover:text-indigo-100"
                            >
                                <RotateCcw className="h-4 w-4" />
                                Reset
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/hexenity/learning/practice')}
                                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-indigo-300/35 hover:text-indigo-100"
                            >
                                Back to Practice
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">Switch language</p>
                    <div className="flex flex-wrap gap-2">
                        {allPracticeTemplates.map((entry) => (
                            <button
                                key={entry.key}
                                type="button"
                                onClick={() => navigate(`/hexenity/learning/practice/live?template=${entry.key}`)}
                                className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                    entry.key === template.key
                                        ? 'border-emerald-300/40 bg-emerald-500/20 text-emerald-100'
                                        : 'border-white/15 bg-white/5 text-slate-200 hover:border-indigo-300/35 hover:text-indigo-100'
                                }`}
                            >
                                {entry.title}
                            </button>
                        ))}
                    </div>
                </section>

                {template.runtime === 'web' ? (
                    <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-4">
                            <CodePanel title="HTML" value={htmlCode} onChange={setHtmlCode} />
                            <CodePanel title="CSS" value={cssCode} onChange={setCssCode} />
                            <CodePanel title="JavaScript" value={jsCode} onChange={setJsCode} />
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">Preview</p>
                            <iframe
                                title="Learning live code preview"
                                srcDoc={srcDoc}
                                className="h-[70vh] w-full rounded-xl border border-white/10 bg-white"
                                sandbox="allow-scripts allow-modals"
                            />
                        </div>
                    </section>
                ) : (
                    <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                        <CodePanel title={`${template.title} Code`} value={sourceCode} onChange={setSourceCode} className="h-[60vh]" />
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">Console output</p>
                            <pre className="h-[60vh] overflow-auto rounded-xl border border-white/10 bg-[#0b1328] p-4 font-mono text-sm text-emerald-200">
                                <code>{consoleOutput}</code>
                            </pre>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

function CodePanel({ title, value, onChange, className = 'h-44' }) {
    return (
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">{title}</p>
            <textarea
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={`${className} w-full resize-y rounded-xl border border-white/10 bg-[#0b1328] p-3 font-mono text-sm text-slate-100 outline-none focus:border-indigo-300/35`}
                spellCheck={false}
            />
        </article>
    );
}

function deriveConsoleOutput(languageKey, source, fallback) {
    if (languageKey === 'sql') {
        if (/select\s+/i.test(source)) return 'Query OK\nRows returned: 3';
        if (/insert|update|delete/i.test(source)) return 'Query OK\nRows affected: 1';
    }

    const patterns = {
        dart: /print\((['"`])([\s\S]*?)\1\)/g,
        python: /print\((['"`])([\s\S]*?)\1\)/g,
        javascript: /console\.log\((['"`])([\s\S]*?)\1\)/g,
        typescript: /console\.log\((['"`])([\s\S]*?)\1\)/g,
        java: /System\.out\.println\((['"`])([\s\S]*?)\1\)/g,
        c: /printf\((['"`])([\s\S]*?)\1/g,
        cpp: /cout\s*<<\s*(['"`])([\s\S]*?)\1/g,
    };

    const regex = patterns[languageKey];
    if (!regex) return fallback || 'Program executed.';

    const lines = [];
    let match = regex.exec(source);
    while (match) {
        lines.push(match[2].replace(/\\n/g, '\n'));
        match = regex.exec(source);
    }

    if (!lines.length) return fallback || 'Program executed.';
    return lines.join('\n');
}
