export const codePlaygroundTemplates = {
  html: {
    key: "html",
    title: "HTML",
    subtitle: "The language for building web pages",
    runtime: "web",
    accent: "bg-emerald-500",
    backgroundClass: "bg-[#D9EEE1]",
    topicSlug: "frontend-architecture",
    html: `<h1 id="title">Hello from Enitexa.Ai Learning</h1>
<p>Create structure using headings, paragraphs, buttons, forms, and lists.</p>
<button onclick="document.getElementById('title').innerText = 'Great! You just edited HTML'">Click me</button>`,
    css: `body { font-family: Arial, sans-serif; padding: 16px; }
h1 { color: #0f172a; }`,
    js: `console.log("HTML track loaded");`,
  },
  css: {
    key: "css",
    title: "CSS",
    subtitle: "The language for styling web pages",
    runtime: "web",
    accent: "bg-[#282A35]",
    backgroundClass: "bg-[#FFF4A3]",
    topicSlug: "frontend-architecture",
    html: `<h1>Style this heading</h1>
<p>Change colors, spacing, fonts, and layout in the CSS panel.</p>
<div class="card">Sample card block</div>`,
    css: `body { font-family: Verdana, sans-serif; padding: 16px; background: #f8fafc; }
h1 { color: #111827; }
.card { margin-top: 10px; padding: 14px; border-radius: 10px; background: #e2e8f0; }`,
    js: `console.log("CSS track loaded");`,
  },
  javascript: {
    key: "javascript",
    title: "JavaScript",
    subtitle: "The language for programming web pages",
    runtime: "web",
    accent: "bg-emerald-500",
    backgroundClass: "bg-[#282A35]",
    topicSlug: "frontend-architecture",
    html: `<h2 id="demo">Try JavaScript interaction</h2>
<button id="btn">Run action</button>`,
    css: `body { font-family: Inter, sans-serif; padding: 18px; background: #0f172a; color: #fff; }
button { background: #10b981; border: none; color: white; padding: 10px 14px; border-radius: 8px; cursor: pointer; }`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  const demo = document.getElementById("demo");
  demo.style.color = "#22d3ee";
  demo.innerText = "JavaScript changed this text!";
});`,
  },
  typescript: {
    key: "typescript",
    title: "TypeScript",
    subtitle: "Typed JavaScript for scalable apps",
    runtime: "console",
    accent: "bg-blue-600",
    backgroundClass: "bg-[#EAF2FF]",
    topicSlug: "frontend-architecture",
    code: `type User = { name: string; role: string };

const currentUser: User = { name: "Sarang", role: "Developer" };
console.log(\`Hello \${currentUser.name}, role: \${currentUser.role}\`);`,
    defaultOutput: "Hello Sarang, role: Developer",
  },
  dart: {
    key: "dart",
    title: "Dart",
    subtitle: "Core language for Flutter apps",
    runtime: "console",
    accent: "bg-cyan-600",
    backgroundClass: "bg-[#E8FCFF]",
    topicSlug: "mobile-development",
    code: `void main() {
  print("Hello from Dart");
  final skills = ["Widgets", "State", "API"];
  print("Topics: \${skills.join(", ")}");
}`,
    defaultOutput: "Hello from Dart\nTopics: Widgets, State, API",
  },
  c: {
    key: "c",
    title: "C",
    subtitle: "Low-level systems programming",
    runtime: "console",
    accent: "bg-slate-700",
    backgroundClass: "bg-[#EEF2F7]",
    topicSlug: "backend-engineering",
    code: `#include <stdio.h>

int main() {
  printf("Hello from C\\n");
  return 0;
}`,
    defaultOutput: "Hello from C",
  },
  cpp: {
    key: "cpp",
    title: "C++",
    subtitle: "High-performance object-oriented language",
    runtime: "console",
    accent: "bg-indigo-700",
    backgroundClass: "bg-[#EEF2FF]",
    topicSlug: "backend-engineering",
    code: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++" << endl;
  return 0;
}`,
    defaultOutput: "Hello from C++",
  },
  java: {
    key: "java",
    title: "Java",
    subtitle: "Enterprise backend and Android language",
    runtime: "console",
    accent: "bg-orange-600",
    backgroundClass: "bg-[#FFF2EA]",
    topicSlug: "backend-engineering",
    code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Java");
  }
}`,
    defaultOutput: "Hello from Java",
  },
  python: {
    key: "python",
    title: "Python",
    subtitle: "Fast scripting, backend, and AI language",
    runtime: "console",
    accent: "bg-yellow-600",
    backgroundClass: "bg-[#FFF9E6]",
    topicSlug: "ai-ml-integration",
    code: `name = "Enitexa.Ai Learner"
print("Hello", name)
print("Python practice ready")`,
    defaultOutput: "Hello Enitexa.Ai Learner\nPython practice ready",
  },
  sql: {
    key: "sql",
    title: "SQL",
    subtitle: "Database querying language",
    runtime: "console",
    accent: "bg-emerald-700",
    backgroundClass: "bg-[#E9FFF5]",
    topicSlug: "cloud-databases",
    code: `SELECT name, role
FROM students
WHERE score >= 80
ORDER BY score DESC;`,
    defaultOutput: "Query OK\nRows returned: 3",
  },
};

export const practiceShowcaseSections = [
  { template: "html", ctaLabel: "Learn HTML", topicSlug: "frontend-architecture" },
  { template: "css", ctaLabel: "Learn CSS", topicSlug: "frontend-architecture" },
  { template: "javascript", ctaLabel: "Learn JavaScript", topicSlug: "frontend-architecture" },
];

export const allPracticeTemplates = [
  "html",
  "css",
  "javascript",
  "typescript",
  "dart",
  "c",
  "cpp",
  "java",
  "python",
  "sql",
].map((key) => codePlaygroundTemplates[key]);
