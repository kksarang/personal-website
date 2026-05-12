/** Premium Hexenity learning track payloads (React + Tailwind data layer). */

export const HEXENITY_PREMIUM_AI_DETAIL = {
  updatedOn: "May 2026",
  readTime: "36 min",
  level: "Beginner to Advanced",
  seo: {
    title: "AI Development Learning Program | Hexenity",
    description:
      "Futuristic AI engineering track: ML fundamentals, deep learning, LLMs, agents, chatbots, prompt engineering, TensorFlow, PyTorch, OpenAI APIs, automation, and AI SaaS deployment.",
    keywords: [
      "AI development course",
      "LLM applications learning",
      "prompt engineering training",
      "PyTorch TensorFlow roadmap",
      "AI agents deployment",
      "generative AI career path",
    ],
  },
  hero: {
    headline: "Neural Futures Lab — AI Development Learning for Builders Who Ship",
    subtitle:
      "From classical ML intuition to autonomous agents and deployable AI SaaS — engineered as a startup-grade curriculum with measurable outcomes.",
    careerDescription:
      "Train like an AI product engineer: rigorous fundamentals, lab workflows, evaluation discipline, security-aware prompting, and production deployment patterns that survive real traffic and budgets.",
    duration: "18 to 28 weeks",
    badges: ["Futurist Curriculum", "Labs + Portfolio", "Agent-Native", "Deployable AI"],
    stats: [
      { label: "Learners coached", value: "2.4k+" },
      { label: "Capstone launches", value: "180+" },
      { label: "Avg. portfolio depth", value: "6 projects" },
    ],
    primaryCtaLabel: "Start AI Track",
    primaryCtaPath: "/hexenity/contact",
    secondaryCtaLabel: "Try Live Python Practice",
    secondaryCtaPath: "/hexenity/learning/practice?lang=python",
  },
  intro:
    "Artificial Intelligence is no longer an isolated research lane — it is product infrastructure. Modern AI builders blend statistical intuition, neural architectures, tooling mastery, LLM orchestration, agent workflows, and disciplined deployment.\n\nHexenity teaches AI development as an integrated engineering discipline: grounded fundamentals, reproducible notebooks, validated prompts, observable inference pipelines, and shipping constraints such as latency, token economics, guardrails, and compliance-aware logging.",
  whyImportant: [
    "Every category-leading SaaS roadmap now reserves capacity for reasoning, retrieval, summarization, or autonomous workflows.",
    "Employers hire builders who reason about evaluation, observability, and failure modes — not demo-only integrations.",
    "Generative AI compounds with classic ML: hybrid systems win in production.",
    "Deployment literacy (GPU basics, containers, batch jobs) differentiates seniors from tutorial graduates.",
  ],
  prerequisites: [
    "Comfortable programming in Python (or willingness to accelerate with guided labs)",
    "Linear algebra intuition (vectors, matrices) at a practical level",
    "Basic probability and descriptive statistics",
    "API and JSON fluency for OpenAI-style endpoints",
    "Git workflow fundamentals for experiment tracking",
  ],
  technologiesCovered: [
    {
      name: "Introduction to AI",
      description:
        "Map supervised, unsupervised, and reinforcement paradigms; understand data leakage, bias, evaluation loops, and responsible release checklists.",
      whyItMatters: "Sets correct mental models before jumping to black-box APIs",
    },
    {
      name: "Machine Learning Fundamentals",
      description:
        "Feature design, train/val/test splits, cross-validation, regularization, classic models, and metric selection for imbalanced datasets.",
      whyItMatters: "Classical ML remains the backbone of tabular and cost-sensitive systems",
    },
    {
      name: "Deep Learning",
      description:
        "Optimization landscapes, activation choices, depth vs width trade-offs, sequence modeling intuition, and practical mini-batch training hygiene.",
      whyItMatters: "Unlocks neural approaches powering CV and NLP stacks",
    },
    {
      name: "Neural Networks",
      description:
        "Fully connected nets, convolutional intuition, recurrence basics, parameter budgets, initialization, dropout, and gradient monitoring.",
      whyItMatters: "Foundation for designing tractable architectures",
    },
    {
      name: "Generative AI",
      description:
        "Latent spaces, diffusion intuition at builder depth, guardrails, watermarking considerations, and controlled diversity sampling.",
      whyItMatters: "Positions you for creative/synthetic workloads responsibly",
    },
    {
      name: "LLM Applications",
      description:
        "Context budgeting, structured outputs, tool calling patterns, retrieval augmentation, reranking heuristics, and latency-aware UX.",
      whyItMatters: "Modern assistant UX demands grounded and measurable responses",
    },
    {
      name: "AI Chatbot Development",
      description:
        "Stateful conversations, escalation flows, citation UX, moderation tiers, analytics hooks, and multilingual tone controls.",
      whyItMatters: "Highest-demand GenAI surface across support and commerce",
    },
    {
      name: "Prompt Engineering",
      description:
        "System prompts, dynamic exemplars, constraint layering, refusal tuning, evaluation suites, and regression tests for prompts-as-code.",
      whyItMatters: "Treat prompts like released artifacts with versioning discipline",
    },
    {
      name: "Computer Vision",
      description:
        "Image pipelines, augmentation strategy, detection vs segmentation framing, labeling pitfalls, and edge deployment considerations.",
      whyItMatters: "Retail, robotics, security, and medical workflows rely on CV stacks",
    },
    {
      name: "Natural Language Processing",
      description:
        "Tokenization realities, embeddings, classification vs extraction tasks, multilingual pitfalls, and offline evaluation corpora.",
      whyItMatters: "Essential complement to pure transformer prompting",
    },
    {
      name: "Python for AI",
      description:
        "NumPy fluency, pandas hygiene, typing for pipelines, packaging experiments, profiling hotspots, and reproducible environments.",
      whyItMatters: "Python is the lingua franca of ML tooling",
    },
    {
      name: "TensorFlow",
      description:
        "Graph execution intuition, tf.data pipelines, SavedModel exports, TF Serving basics, and GPU-aware batching experiments.",
      whyItMatters: "Enterprise deployments frequently standardize on TF ecosystems",
    },
    {
      name: "PyTorch",
      description:
        "Autograd mindset, Lightning-style structuring, checkpointing, CUDA workflows, ONNX exports for portability experiments.",
      whyItMatters: "Dominant framework for research-to-production prototypes",
    },
    {
      name: "OpenAI APIs",
      description:
        "Chat completions, embeddings endpoints, assistants patterns, streaming UX, usage dashboards, and resilient backoff logic.",
      whyItMatters: "Accelerates shipped assistants when paired with evaluation glue",
    },
    {
      name: "AI Automation",
      description:
        "Trigger/action pipelines, workflow orchestration, human approvals, audit trails, and observability for autonomous chains.",
      whyItMatters: "Operational AI without governance creates outage classes",
    },
    {
      name: "AI SaaS Development",
      description:
        "Multi-tenant inference isolation, metering/billing hooks, dataset tenancy boundaries, privacy tiers, and rollout toggles.",
      whyItMatters: "Turning models into recurring revenue demands platform discipline",
    },
  ],
  toolsPlatforms: [
    { name: "VS Code / Jupyter Lab", description: "Notebook-driven experimentation paired with linted modules for reproducibility." },
    { name: "Weights & Biases / MLflow-style logs", description: "Experiment lineage, artifact registry discipline, comparison dashboards." },
    { name: "Docker + GPU-ready images", description: "Portable training and inference containers across staging and production." },
    { name: "Vector databases", description: "Pinecone, Qdrant, Milvus, or pgvector patterns for retrieval-heavy assistants." },
    { name: "OpenAI Platform / Anthropic APIs", description: "Hosted frontier models with streaming and structured-output modes." },
    { name: "Hugging Face Hub", description: "Model cards, tokenizer parity checks, and responsible artifact reuse." },
  ],
  roadmapLevels: [
    {
      level: "Beginner — Foundations",
      duration: "Weeks 1-5",
      topics: ["Python scientific stack", "ML workflow hygiene", "Intro neural nets", "Baseline evaluations", "Notebook → module refactor"],
      miniProjects: ["Classifier on curated tabular data", "Embedding explorer mini-app"],
      skillsLearned: ["Metric literacy", "Data splitting discipline", "Baseline-first mindset"],
    },
    {
      level: "Intermediate — Deep stacks",
      duration: "Weeks 6-11",
      topics: ["CNN/NLP essentials", "Transfer learning patterns", "PyTorch training loops", "TensorFlow export experiments", "Prompt + retrieval MVP"],
      miniProjects: ["Vision tagging assistant", "NER extraction microservice"],
      skillsLearned: ["Gradient debugging", "Checkpoint strategy", "Grounded prompting patterns"],
    },
    {
      level: "Advanced — Agents & products",
      duration: "Weeks 12-18",
      topics: ["Multi-step agents", "Tool orchestration", "Safety filters", "Streaming UX", "Evaluation harness design"],
      miniProjects: ["Ops copilot with tools + approvals", "Voice-aware FAQ bot prototype"],
      skillsLearned: ["Planner reliability patterns", "Latency budgeting", "Moderation layering"],
    },
    {
      level: "Production — Deploy & monetize",
      duration: "Weeks 19-28",
      topics: ["Batch vs realtime inference", "Autoscaling queues", "Observability + drift alerts", "Cost governance", "Compliance-aware logging"],
      miniProjects: ["GPU-backed inference container", "Metered AI SaaS tier rollout"],
      skillsLearned: ["SLI-style AI uptime thinking", "FinOps for inference", "Tenant-safe architecture"],
    },
  ],
  modules: [
    {
      title: "Module 01 — AI Atlas Orientation",
      summary: "Navigate AI disciplines with engineering pragmatism.",
      topics: ["AI vs ML vs DL maps", "Responsible AI pillars", "Experiment hygiene"],
      lessons: ["Capability taxonomy lecture", "Risk register workshop"],
      practicalTasks: ["Publish experiment README template"],
      realWorldExercises: ["Audit a public model card for gaps"],
      assignments: ["Write AI ethics brief for hypothetical health assistant"],
    },
    {
      title: "Module 02 — Classical ML Velocity",
      summary: "Ship trustworthy baselines before exotic architectures.",
      topics: ["Bias/variance intuition", "Cross-validation strategy", "Metric traps"],
      lessons: ["Scikit-learn pipelines deep dive"],
      practicalTasks: ["Build leakage-proof preprocessing pipeline"],
      realWorldExercises: ["Win back recall on fraud-lite dataset"],
      assignments: ["Deliver baseline vs tuned comparison memo"],
    },
    {
      title: "Module 03 — Neural Bootcamp",
      summary: "Train stable nets with modern debugging habits.",
      topics: ["Activations", "Optimizers", "Schedules", "Regularization"],
      lessons: ["Manual backprop intuition lab"],
      practicalTasks: ["Implement mini autograd toy"],
      realWorldExercises: ["Stabilize diverging run via gradient clips"],
      assignments: ["Notebook → typed training module refactor"],
    },
    {
      title: "Module 04 — Deep CV Lab",
      summary: "Image stacks with augmentation and deployment foresight.",
      topics: ["Convolutions", "Augment policy design", "Export contracts"],
      lessons: ["TorchVision transfer workshop"],
      practicalTasks: ["Train classifier with progressive resizing"],
      realWorldExercises: ["Optimize inference batch for CPU fallback"],
      assignments: ["Ship ONNX export checklist"],
    },
    {
      title: "Module 05 — NLP Signal Processing",
      summary: "Token realities beyond naive splitting.",
      topics: ["Embeddings", "Chunking strategies", "Multilingual pitfalls"],
      lessons: ["Contrast bag-of-words vs dense vectors"],
      practicalTasks: ["Build lightweight semantic search CLI"],
      realWorldExercises: ["Tune chunk overlap for retrieval quality"],
      assignments: ["Document failure cases for hallucination hotfix"],
    },
    {
      title: "Module 06 — TensorFlow Industrialization",
      summary: "Enterprise-friendly training and serving experiments.",
      topics: ["tf.data", "SavedModel", "Batching ergonomics"],
      lessons: ["TFProfiler reading session"],
      practicalTasks: ["Convert PyTorch checkpoint to TF pipeline (conceptual dual track)"],
      realWorldExercises: ["Serve model via lightweight HTTP wrapper"],
      assignments: ["Draft multi-stage Dockerfile for training"],
    },
    {
      title: "Module 07 — PyTorch Research-to-Prod",
      summary: "Fast iteration without chaos in notebooks.",
      topics: ["Lightning habits", "Mixed precision guards", "Checkpoint diffing"],
      lessons: ["Profiler-driven step reduction"],
      practicalTasks: ["Parameter-efficient fine-tune pilot"],
      realWorldExercises: ["Freeze layer ablation hour"],
      assignments: ["Write reproducibility manifest (seed, deps, hardware)"],
    },
    {
      title: "Module 08 — Generative Systems Studio",
      summary: "Controlled creativity with measurable variance.",
      topics: ["Sampling knobs", "Safety filters", "Creative QA loops"],
      lessons: ["Human preference evaluation framing"],
      practicalTasks: ["Curate moderation lexicon starter"],
      realWorldExercises: ["Implement toxicity escalation ladder"],
      assignments: ["Publish diversity vs coherence grid evaluation"],
    },
    {
      title: "Module 09 — LLM Application Fabric",
      summary: "Treat LLMs like microservices with contracts.",
      topics: ["Structured outputs", "Routing cheaper models", "Fallback ladders"],
      lessons: ["JSON schema adherence drills"],
      practicalTasks: ["Build typed response validator middleware"],
      realWorldExercises: ["Latency-match competitor UX"],
      assignments: ["Draft SLA sheet for assistant endpoints"],
    },
    {
      title: "Module 10 — Prompt Architecture",
      summary: "Prompts as versioned artifacts.",
      topics: ["Dynamic exemplars", "Regression suites", "Localization offsets"],
      lessons: ["Prompt diff review ritual"],
      practicalTasks: ["Snapshot golden conversations"],
      realWorldExercises: ["Ship nightly prompt regression CI stub"],
      assignments: ["Author prompt changelog policy"],
    },
    {
      title: "Module 11 — Conversational Agents UX",
      summary: "Stateful bots that escalate gracefully.",
      topics: ["Memory tiers", "Human-in-loop escalations", "Analytics instrumentation"],
      lessons: ["Conversation funnel instrumentation"],
      practicalTasks: ["Wire sentiment-aware routing stub"],
      realWorldExercises: ["Craft multilingual fallback flows"],
      assignments: ["Dashboard mock for containment KPIs"],
    },
    {
      title: "Module 12 — AI Automation Lines",
      summary: "Glue autonomous workflows without silent failures.",
      topics: ["DAG orchestration", "Retries vs compensation", "Audit trails"],
      lessons: ["Compare workflow engines"],
      practicalTasks: ["Implement approval gates"],
      realWorldExercises: ["Simulate poisoned trigger mitigation"],
      assignments: ["Author rollback playbook"],
    },
    {
      title: "Module 13 — OpenAI Platform Mastery",
      summary: "Streaming, batches, embeddings economics.",
      topics: ["Usage dashboards", "Batch APIs", "Caching embeddings"],
      lessons: ["Cost envelope spreadsheet modeling"],
      practicalTasks: ["Build streaming skeleton UI"],
      realWorldExercises: ["Throttle per-tenant budgets"],
      assignments: ["Define red/yellow budget alert rules"],
    },
    {
      title: "Module 14 — Agentic Orchestration",
      summary: "Multi-tool agents with observability-first design.",
      topics: ["Planner limits", "Sandboxing tools", "Trace export"],
      lessons: ["Agent failure taxonomy"],
      practicalTasks: ["Sequence tool call with rollback"],
      realWorldExercises: ["Trace-to-Slack incident card"],
      assignments: ["Design least-privilege tool schema"],
    },
    {
      title: "Module 15 — Deploying AI SaaS",
      summary: "Tenant boundaries, metering, rollout safety.",
      topics: ["Feature flags for models", "Shadow traffic", "Canary releases"],
      lessons: ["GPU autoscaling intuition"],
      practicalTasks: ["Blue/green inference cutover diagram"],
      realWorldExercises: ["Privacy review for logs"],
      assignments: ["Draft data processing agreement appendix"],
    },
  ],
  roadmap: [
    { phase: "Weeks 1-5", focus: "Foundations & baselines", deliverables: ["Python stack fluency", "ML workflow template", "Ethics checklist"] },
    { phase: "Weeks 6-11", focus: "Deep learning + NLP/CV pilots", deliverables: ["Torch + TF labs", "Retrieval MVP", "Evaluation suite v1"] },
    { phase: "Weeks 12-18", focus: "LLM products + automation", deliverables: ["Assistant UX", "Agent workflow", "Streaming service"] },
    { phase: "Weeks 19-28", focus: "Production + monetization", deliverables: ["Containerized inference", "Metering hooks", "Observability stack"] },
  ],
  caseStudies: [
    {
      title: "RAG Copilot reducing L1 support load",
      challenge: "Docs scattered; answers untrustworthy.",
      strategy: "Hybrid sparse+dense retrieval, reranker, human feedback loop.",
      channels: ["OpenAI APIs", "pgvector", "Queue workers"],
      outcomes: ["41% containment rate in 6 weeks", "Median response <2.1s", "CSAT +0.34"],
    },
    {
      title: "Vision QA for manufacturing line",
      challenge: "False accepts expensive; edge latency tight.",
      strategy: "Pruned CNN student + calibrated thresholds + on-device batching experiments.",
      channels: ["PyTorch", "TensorRT-style path exploration", "Docker edge"],
      outcomes: ["Recall 0.92 at fixed precision target", "Offline eval harness for weekly drift"],
    },
    {
      title: "Metered AI SaaS beta",
      challenge: "Spiky usage; noisy neighbor risk.",
      strategy: "Per-tenant queues, token budgets, shadow model for cheap prefilter.",
      channels: ["Kubernetes", "Redis", "OpenAI batch + cache"],
      outcomes: ["95p latency cut 38%", "Gross margin protected in first billing cycle"],
    },
  ],
  spotlights: [
    {
      title: "AI startup idea bank (build + validate)",
      description: "Structured ideation prompts for founders pairing narrow data with clear distribution.",
      items: [
        "Vertical legal clause explainer with human review",
        "Inventory shrink CV copilot for mid-market retail",
        "Clinical admin scribe with on-device fallback",
        "Field-service knowledge agent with offline cache",
        "Supply chain anomaly bot on tabular + sensor fusion",
      ],
    },
    {
      title: "AI agent systems blueprint",
      description: "Architecture patterns for planners, tool registries, memory, and tracing.",
      items: [
        "Least-privilege tool manifests",
        "Planner max-depth + kill switches",
        "Human approval for financial writes",
        "Trace spans per tool invocation",
        "Compensation flows for partial failures",
      ],
    },
    {
      title: "AI deployment runway",
      description: "Production path from notebook to measurable service.",
      items: [
        "Container contracts for batch vs realtime",
        "GPU pool planning spreadsheet",
        "Dataset snapshot + model card gate",
        "Shadow + canary inference toggles",
        "Runbook: rollback to last known-good weights",
      ],
    },
  ],
  practiceProjects: [
    {
      name: "Grounded Enterprise Assistant (RAG)",
      level: "Intermediate",
      goal: "Ship doc-grounded assistant with citations and eval hooks.",
      features: ["Hybrid retrieval", "Human feedback capture", "Latency-slashed rerank"],
      techUsed: ["Python", "OpenAI APIs", "pgvector", "FastAPI"],
    },
    {
      name: "Multimodal Support Triage Bot",
      level: "Advanced",
      goal: "Blend text + lightweight vision for ticket understanding.",
      features: ["Moderation layers", "Escalation routing", "Streaming UI"],
      techUsed: ["PyTorch", "OpenAI vision patterns", "Redis", "Docker"],
    },
    {
      name: "AI Agent Operations Console",
      level: "Advanced",
      goal: "Operator-grade UI for traces, approvals, and replays.",
      features: ["Trace export", "Approval queue", "Replay sandbox"],
      techUsed: ["Python", "Temporal-style patterns", "WebSockets"],
    },
    {
      name: "AI SaaS Starter (metered inference)",
      level: "Production",
      goal: "Multi-tenant inference with budgets and audit logging.",
      features: ["Tenant isolation", "Usage metering", "Canary models"],
      techUsed: ["Node or FastAPI", "Stripe-style hooks", "K8s-ready container"],
    },
    {
      name: "Edge-friendly CV Inspector",
      level: "Intermediate",
      goal: "Optimize model for CPU/GPU swing deployments.",
      features: ["Quantization experiments", "Batching harness", "Regression image set"],
      techUsed: ["TensorFlow or PyTorch", "ONNX", "Docker"],
    },
  ],
  careerOpportunities: [
    {
      role: "AI Engineer",
      description: "End-to-end intelligent features: data, modeling hooks, APIs, evaluation, and rollout.",
      salaryRange: "INR 8L–32L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "ML Engineer",
      description: "Own training pipelines, feature stores, deployment, monitoring, and performance SLOs.",
      salaryRange: "INR 9L–35L+ / year",
      remoteOpportunities: "High",
    },
    {
      role: "Prompt Engineer",
      description: "Curate prompt systems, eval sets, localization, safety tuning, and regression governance.",
      salaryRange: "INR 6L–22L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "AI Product Developer",
      description: "Bridge UX, data science, and backend to ship cohesive AI-first product surfaces.",
      salaryRange: "INR 10L–38L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "AI Automation Specialist",
      description: "Design reliable automations with human gates, auditing, and resilient orchestration.",
      salaryRange: "INR 7L–26L+ / year",
      remoteOpportunities: "Very High",
    },
  ],
  whyLearnHexenity: [
    { title: "Futurist product standards", detail: "Curriculum mirrors shipping AI teams, not isolated Kaggle trophies." },
    { title: "Evaluation-first culture", detail: "Every milestone ties to measurable quality, latency, and cost envelopes." },
    { title: "Portfolio gravity", detail: "Capstones read like Series A-ready product case studies." },
    { title: "Mentored execution", detail: "You get architecture reviews that harden retrieval, agents, and deployment." },
  ],
  uiSuggestions: {
    designDirection:
      "Render as a neo-glass neural command deck: obsidian base, aurora gradients (electric violet → cyan), micro-grid parallax, and floating glass cards with 1px luminous edges. Use monospace accents for metrics and warm white for long-form readability.",
    animationSuggestions: [
      "Hero: slow radial glow + subtle starfield drift (pointer-parallax max 8px).",
      "Scroll: staggered opacity/translate on module cards (IntersectionObserver).",
      "Stats: count-up on first view with reduced-motion fallback.",
      "Section dividers: animated gradient strokes (CSS keyframes, no heavy blur).",
      "Spotlight pills: hover spring (Framer Motion stiffness 220, damping 24).",
    ],
    iconIdeas: ["Brain-circuit glyphs", "Constellation nodes", "Hex mesh", "Orbital rings", "GPU die abstraction"],
    responsiveLayoutSuggestions: [
      "Desktop: asymmetric bento with hero left, stats right; mobile: stack stats as horizontal snap carousel.",
      "Modules: accordion for small screens with persistent progress chips.",
      "Spotlights: swipeable deck on mobile with progress dots.",
    ],
  },
  interviewQuestions: [
    "How do you detect and mitigate data leakage in ML datasets?",
    "Compare fine-tuning vs RAG — when do you combine them?",
    "How do you evaluate an LLM feature before and after launch?",
    "What is your strategy for handling OpenAI rate limits and retries?",
    "How do you secure tool-calling agents against prompt injection?",
  ],
  faqs: [
    {
      question: "Do I need a GPU from day one?",
      answer:
        "No. Early modules use modest models and cloud notebooks. Advanced weeks benefit from cloud GPU credits or a local mid-tier card for iteration speed.",
    },
    {
      question: "Is math-heavy linear algebra mandatory upfront?",
      answer:
        "We teach just-in-time math with geometric intuition and code. Deeper proofs are optional enrichment, not blockers.",
    },
    {
      question: "Will I build agents or only use chat APIs?",
      answer: "Both. You will ship API-only features and graduate to orchestrated agents with guardrails.",
    },
    {
      question: "Can this help freelancers pitch AI retainers?",
      answer: "Yes. Capstones include ROI narratives, evaluation dashboards, and deployment runbooks ideal for proposals.",
    },
    {
      question: "How do you teach responsible AI?",
      answer: "Bias checks, logging strategy, human review touchpoints, and explicit failure mode tables are embedded per module.",
    },
  ],
  cta: {
    headline: "Initialize your AI engineering trajectory with Hexenity",
    text: "Book a roadmap session and align your capstone to a career vector: AI engineer, ML engineer, or product-facing AI builder.",
    primaryLabel: "Book AI Intake Call",
    primaryPath: "/hexenity/contact",
    secondaryLabel: "Email learning goals",
    secondaryPath: "/hexenity/contact",
  },
  resources: [
    { label: "PyTorch tutorials", url: "https://pytorch.org/tutorials/" },
    { label: "TensorFlow guides", url: "https://www.tensorflow.org/learn" },
    { label: "OpenAI docs", url: "https://platform.openai.com/docs/guides/text-generation" },
    { label: "Hugging Face course", url: "https://huggingface.co/learn" },
    { label: "Papers With Code", url: "https://paperswithcode.com/" },
  ],
};

export const HEXENITY_PREMIUM_UI_DETAIL = {
  updatedOn: "May 2026",
  readTime: "34 min",
  level: "Beginner to Advanced",
  seo: {
    title: "UI/UX Design Learning Program | Hexenity",
    description:
      "Premium UI/UX design education: research, wireframes, systems, typography, color, psychology, accessibility, Figma mastery, prototyping, micro-interactions, portfolio, and remote career prep.",
    keywords: [
      "UI UX course",
      "Figma design system training",
      "UX research learning",
      "accessibility design career",
      "remote UX jobs",
    ],
  },
  hero: {
    headline: "Signal & Story — UI/UX Design Learning for Premium Product Interfaces",
    subtitle:
      "Design with systems thinking, humane psychology, and craft-level visual execution for web, mobile, and SaaS surfaces.",
    careerDescription:
      "Build fluency across research → structure → visual language → motion → validation → handoff. Graduate with redesign case studies, dashboard depth, ecommerce craft, and a portfolio engineered for recruiters and freelance briefs.",
    duration: "14 to 22 weeks",
    badges: ["Creative Systems", "Accessibility First", "Portfolio Grade", "Remote Ready"],
    stats: [
      { label: "Design critiques", value: "90+" },
      { label: "Case studies shipped", value: "4+" },
      { label: "Tooling stack", value: "5 apps" },
    ],
    primaryCtaLabel: "Start UI/UX Track",
    primaryCtaPath: "/hexenity/contact",
    secondaryCtaLabel: "Download project brief samples",
    secondaryCtaPath: "/hexenity/contact",
  },
  intro:
    "UI/UX design is where business strategy becomes felt experience. Hexenity trains designers who can think in systems: research rigor, IA clarity, expressive typography, measurable usability, inclusive patterns, and prototypes that persuade stakeholders.\n\nThis track fuses classic human factors with modern product velocity—Figma-native workflows, design tokens ready for Tailwind/React teams, motion literacy for delight without distraction, and portfolio narratives that prove judgment under constraints.",
  whyImportant: [
    "Differentiated UX directly lifts activation, retention, and pricing power.",
    "Design systems accelerate engineering throughput and reduce rework.",
    "Accessibility expands reach and protects brands from costly compliance gaps.",
    "Remote-first hiring rewards designers who communicate intent crisply async.",
  ],
  prerequisites: [
    "Curiosity about human behavior and friction removal",
    "Willingness to conduct lightweight interviews/usability sessions",
    "Baseline visual taste (refined through drills)",
    "Laptop capable of running Figma smoothly",
    "English readability for international stakeholders (recommended)",
  ],
  technologiesCovered: [
    {
      name: "UI/UX fundamentals",
      description: "Gestalt principles, affordances, progressive disclosure, cognitive load budgeting, and hierarchy-first layouts.",
      whyItMatters: "Foundation for every downstream artifact",
    },
    {
      name: "User research",
      description: "Sampling bias awareness, interview scripts, thematic coding, Jobs-to-be-Done snapshots, and insight → action loops.",
      whyItMatters: "Prevents beautiful but irrelevant screens",
    },
    {
      name: "Wireframing",
      description: "Low-fi speed, annotated flows, edge-case states, and collaborative sketch rituals before hi-fi polish.",
      whyItMatters: "Cheap iteration saves expensive redesign",
    },
    {
      name: "Design systems",
      description: "Token architecture, component states, naming contracts, governance, and versioning with engineering partners.",
      whyItMatters: "Scale and speed for product orgs",
    },
    {
      name: "Typography",
      description: "Scale ratios, pairing, optical balance, tabular figures in dashboards, and variable font opportunities.",
      whyItMatters: "Typography is the invisible performance layer of UI",
    },
    {
      name: "Color theory",
      description: "Perceptual uniformity, semantic color roles, dark mode pitfalls, contrast for WCAG, and brand stretch tests.",
      whyItMatters: "Accessibility and emotion hinge on disciplined palettes",
    },
    {
      name: "UX psychology",
      description: "Hick, Fitts, peak-end rule, cognitive biases in forms, ethical nudges vs dark patterns.",
      whyItMatters: "Predictable human behavior informs layout and copy",
    },
    {
      name: "Mobile-first design",
      description: "Thumb reach, touch targets, adaptive navigation, offline states, and performance-aware media decisions.",
      whyItMatters: "Majority traffic is mobile across categories",
    },
    {
      name: "Responsive design",
      description: "Fluid grids, breakpoint strategy, container queries mindset, content priority stack for narrow widths.",
      whyItMatters: "One design language must breathe on all viewports",
    },
    {
      name: "Figma mastery",
      description: "Auto layout v3 discipline, variables + modes, dev-ready specs, branching workflows, library publishing.",
      whyItMatters: "Industry default for collaborative product design",
    },
    {
      name: "Prototyping",
      description: "Scenario-based prototypes, conditional flows, motion studies, stakeholder test scripts.",
      whyItMatters: "De-risks engineering by proving behavior early",
    },
    {
      name: "User flow design",
      description: "Happy path + recovery paths, dead ends elimination, progressive permissioning, funnel analytics alignment.",
      whyItMatters: "Flows encode business logic visually",
    },
    {
      name: "Micro-interactions",
      description: "Feedback latency budgets, easing literacy, purposeful motion hierarchy, reduced-motion counterparts.",
      whyItMatters: "Micro-moments communicate quality and trust",
    },
    {
      name: "Accessibility",
      description: "WCAG-oriented patterns, focus order, live region strategy, VoiceOver/TalkBack walkthroughs, color independence.",
      whyItMatters: "Inclusive design is professional design",
    },
    {
      name: "Portfolio creation",
      description: "ARC storytelling, constraints callouts, before/after metrics, process visibility, artifact selection.",
      whyItMatters: "Proof of judgment wins interviews and clients",
    },
  ],
  toolsPlatforms: [
    { name: "Figma", description: "Systems, prototyping, dev mode handoff—core daily driver." },
    { name: "Adobe XD", description: "Component states and coediting workflows for legacy enterprise teams." },
    { name: "Photoshop", description: "Bitmap craft, photo compositing, marketing asset refinement." },
    { name: "Illustrator", description: "Vector brand marks, scalable iconography, precise geometric illustration." },
    { name: "Framer", description: "Production-feeling interactive sites—bridge design ↔ deployed motion." },
  ],
  roadmapLevels: [
    {
      level: "Beginner — Seeing like a designer",
      duration: "Weeks 1-4",
      topics: ["Visual hierarchy drills", "Research lite", "Wireframe sprint", "Critique vocabulary"],
      miniProjects: ["Landing critique teardown", "Low-fi onboarding remake"],
      skillsLearned: ["Observation", "Annotation", "Hierarchy instinct"],
    },
    {
      level: "Intermediate — Systems & polish",
      duration: "Weeks 5-9",
      topics: ["Design tokens", "Mobile-first layouts", "Advanced components", "Micro-interactions"],
      miniProjects: ["Mobile banking UX uplift", "Design system starter kit"],
      skillsLearned: ["Token naming", "Component taxonomy", "Motion rationale"],
    },
    {
      level: "Advanced — Validation & narrative",
      duration: "Weeks 10-15",
      topics: ["Usability testing", "Analytics-informed UX", "Portfolio arcs", "Accessibility audits"],
      miniProjects: ["Heuristic overhaul case study", "Accessible ecommerce PDP"],
      skillsLearned: ["Experiment design", "Insight synthesis", "Audit reporting"],
    },
    {
      level: "Production — Portfolio & pitch",
      duration: "Weeks 16-22",
      topics: ["Stakeholder storytelling", "Freelance scoping", "Design QA with engineers", "Personal brand"],
      miniProjects: ["SaaS dashboard redesign portfolio piece", "Client-ready proposal deck"],
      skillsLearned: ["Negotiation", "Design ops hygiene", "Portfolio packaging"],
    },
  ],
  modules: [
    {
      title: "Module 01 — Taste Calibration Lab",
      summary: "Train eyes through structured critiques.",
      topics: ["Hierarchy scans", "Spacing rhythm", "Copy + layout symbiosis"],
      lessons: ["Speed critique 20/20 format"],
      practicalTasks: ["Redline a popular app screen with annotations"],
      realWorldExercises: ["A/B rationale writeup"],
      assignments: ["Personal taste manifesto (1 page)"],
    },
    {
      title: "Module 02 — Human Insight Sprint",
      summary: "Lightweight research that decides direction.",
      topics: ["Interview basics", "Affinity mapping", "JTBD snapshots"],
      lessons: ["Bias checklist workshop"],
      practicalTasks: ["5-interview thematic synthesis"],
      realWorldExercises: ["Insight → opportunity backlog"],
      assignments: ["Research readout deck"],
    },
    {
      title: "Module 03 — Wireframe Velocity",
      summary: "Think in flows before pixels.",
      topics: ["Task prioritization", "Edge-case hunting", "Collaborative sketch"],
      lessons: ["Crazy 8 warmups"],
      practicalTasks: ["3-route signup overhaul wires"],
      realWorldExercises: ["Annotated wireframe FigJam board"],
      assignments: ["Submit annotated wires + assumptions log"],
    },
    {
      title: "Module 04 — UI Mathematics",
      summary: "Spacing, grid, and responsive logic.",
      topics: ["8pt rhythm extension", "Breakpoint philosophy", "Container mindset"],
      lessons: ["Optical alignment corrections"],
      practicalTasks: ["Responsive hero exploration set"],
      realWorldExercises: ["Density variants for SaaS table"],
      assignments: ["Responsive spec annotations"],
    },
    {
      title: "Module 05 — Typography Orchestra",
      summary: "Readable, expressive type stacks.",
      topics: ["Scale tokens", "Dashboard numerics", "Localization spacing buffers"],
      lessons: ["Pairing tension exercises"],
      practicalTasks: ["Build modular type ramp"],
      realWorldExercises: ["Long-form readability audit"],
      assignments: ["Typography rationale doc"],
    },
    {
      title: "Module 06 — Color Intelligence",
      summary: "Semantic palettes that survive dark mode.",
      topics: ["Perceptual ramps", "Status semantics", "Contrast proofs"],
      lessons: ["OKLCH mindset primer"],
      practicalTasks: ["Dual-theme palette kit"],
      realWorldExercises: ["Heatmap accessibility fix"],
      assignments: ["Palette regression screenshots"],
    },
    {
      title: "Module 07 — Psychology Guardrails",
      summary: "Persuasion without deception.",
      topics: ["Friction placement", "Ethical urgency", "Defaults literacy"],
      lessons: ["Dark pattern spotting drill"],
      practicalTasks: ["Rewrite manipulative microcopy ethically"],
      realWorldExercises: ["Ethics reflection memo"],
      assignments: ["Ethics redesign proposal"],
    },
    {
      title: "Module 08 — Mobile-first Craft",
      summary: "Thumb ergonomics + adaptive IA.",
      topics: ["Reach zones", "Bottom sheets vs modals", "Gesture affordances"],
      lessons: ["Thumb trace overlays"],
      practicalTasks: ["Navigation pattern alternatives"],
      realWorldExercises: ["Thumb QA video capture"],
      assignments: ["Mobile heuristic scorecard"],
    },
    {
      title: "Module 09 — Responsive Orchestration",
      summary: "Coherent scaling stories.",
      topics: ["Content choreography", "Adaptive imagery", "Density breakpoints"],
      lessons: ["Priority stacking exercises"],
      practicalTasks: ["Three breakpoint fidelity pass"],
      realWorldExercises: ["Engineering pairing notes"],
      assignments: ["Responsive QA checklist"],
    },
    {
      title: "Module 10 — Figma Systems Forge",
      summary: "Libraries engineers trust.",
      topics: ["Variables & modes", "Component slots", "Lint rituals"],
      lessons: ["Branch merge hygiene"],
      practicalTasks: ["Publish mini library"],
      realWorldExercises: ["Dev mode inspection pilot"],
      assignments: ["System changelog"],
    },
    {
      title: "Module 11 — Prototype Cinema",
      summary: "Stakeholder-ready narrative prototypes.",
      topics: ["Conditional flows", "Motion cues", "Usability scripts"],
      lessons: ["Scenario boarding"],
      practicalTasks: ["High-fi prototype + tasks"],
      realWorldExercises: ["Remote usability session"],
      assignments: ["Insights → iteration backlog"],
    },
    {
      title: "Module 12 — Micro-interaction Poetry",
      summary: "Purposeful delight.",
      topics: ["Easing curves", "Physics metaphors", "Reduced-motion twins"],
      lessons: ["Timing rehearsal timer drills"],
      practicalTasks: ["Button lifecycle motion study"],
      realWorldExercises: ["Framer micro-site stub"],
      assignments: ["Motion guidelines snippet"],
    },
    {
      title: "Module 13 — Accessibility Forge",
      summary: "Ship inclusive defaults.",
      topics: ["Keyboard-first QA", "Screen reader scripting", "Live regions"],
      lessons: ["WCAG quick audit"],
      practicalTasks: ["Fix focus traps"],
      realWorldExercises: ["VoiceOver recorded journey"],
      assignments: ["Accessibility statement draft"],
    },
    {
      title: "Module 14 — Portfolio Observatory",
      summary: "Curate proof of judgment.",
      topics: ["ARC storytelling", "Metric honesty", "Artifact pruning"],
      lessons: ["Portfolio teardown swaps"],
      practicalTasks: ["Case study hero rewrite"],
      realWorldExercises: ["Peer critique rotation"],
      assignments: ["Publish portfolio v1"],
    },
    {
      title: "Module 15 — Career Launch Grid",
      summary: "Remote + freelance readiness.",
      topics: ["Salary benchmarking", "Scoped proposals", "Async critique etiquette"],
      lessons: ["Interview whiteboard empathy"],
      practicalTasks: ["Rate card draft"],
      realWorldExercises: ["Live stakeholder storytelling rehearsal"],
      assignments: ["Outbound outreach experiment (ethical)"],
    },
  ],
  roadmap: [
    { phase: "Weeks 1-4", focus: "Foundations + research lite", deliverables: ["Annotated teardown", "Wireflow v1"] },
    { phase: "Weeks 5-9", focus: "Systems + craft", deliverables: ["Mini design system", "Responsive ecommerce slice"] },
    { phase: "Weeks 10-15", focus: "Validation + accessibility", deliverables: ["Case study draft", "Audit remediation"] },
    { phase: "Weeks 16-22", focus: "Portfolio + market motion", deliverables: ["Portfolio launch", "Freelance starter kit"] },
  ],
  caseStudies: [
    {
      title: "App redesign — cluttered analytics mobile experience",
      challenge: "Users abandoned weekly reports due to overload.",
      strategy: "JTBD interviews → IA flattening → modular cards + progressive disclosure.",
      channels: ["Figma prototypes", "Remote usability"],
      outcomes: ["Task success +27%", "Time-on-task −18%", "NPS +11 pts pilot"],
    },
    {
      title: "SaaS dashboard clarity overhaul",
      challenge: "Power users loved density; newcomers bounced.",
      strategy: "Adaptive density presets + onboarding checklist overlay.",
      channels: ["Design tokens", "Engineering pairing"],
      outcomes: ["Activation +14%", "Support tickets −9%"],
    },
    {
      title: "Ecommerce PDP trust uplift",
      challenge: "Discount fatigue eroded premium perception.",
      strategy: "Typography hierarchy reset + ethical urgency placement + accessibility fixes.",
      channels: ["Photoshop hero imagery", "Figma specs"],
      outcomes: ["Mobile ATC +6.8%", "Contrast violations eliminated"],
    },
  ],
  practiceProjects: [
    {
      name: "Cross-platform habit tracker redesign",
      level: "Intermediate",
      goal: "Ship cohesive mobile + desktop flows.",
      features: ["JTBD synthesis", "Responsive specs", "Motion rationale"],
      techUsed: ["Figma", "FigJam"],
    },
    {
      name: "SaaS billing UX clarity sprint",
      level: "Advanced",
      goal: "Reduce hesitation at upgrade.",
      features: ["Transparent pricing anatomy", "Edge-case refunds UX"],
      techUsed: ["Figma", "Prototype usability"],
    },
    {
      name: "Accessibility uplift for ecommerce PDP",
      level: "Intermediate",
      goal: "WCAG-oriented remediation story.",
      features: ["Contrast proofs", "Keyboard path fixes"],
      techUsed: ["Figma", "Accessibility checklist"],
    },
    {
      name: "Framer marketing mini-site",
      level: "Advanced",
      goal: "Translate brand tokens into deployed-feeling motion.",
      features: ["Scroll choreography", "Reduced-motion toggle"],
      techUsed: ["Framer", "Illustrator accents"],
    },
  ],
  careerOpportunities: [
    {
      role: "Product Designer",
      description: "Own flows for core surfaces from discovery through QA.",
      salaryRange: "INR 7L–28L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "UX Researcher (hybrid IC)",
      description: "Blend research ops with lightweight UI synthesis.",
      salaryRange: "INR 8L–26L+ / year",
      remoteOpportunities: "High",
    },
    {
      role: "Design Systems Specialist",
      description: "Codify tokens, components, governance with engineers.",
      salaryRange: "INR 10L–32L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "Freelance UI/UX Consultant",
      description: "Scoped engagements: audits, redesign spikes, prototype sprint leadership.",
      salaryRange: "Project ₹75k–8L+ depending on scope",
      remoteOpportunities: "Global",
    },
  ],
  spotlights: [
    {
      title: "Freelancing opportunities",
      description: "Packaged offers designers can sell with crisp boundaries.",
      items: ["72-hour UX audit + loom walkthrough", "Design system spike for Seed-stage SaaS", "Marketing site Framer build sprint"],
    },
    {
      title: "Remote design careers map",
      description: "Signals hiring managers evaluate in async portfolios.",
      items: ["Constraint storytelling", "Systems maturity signals", "Stakeholder narrative clips", "Timezone etiquette patterns"],
    },
  ],
  whyLearnHexenity: [
    { title: "Premium critique bench", detail: "Weekly structured critiques sharpen rationale under friendly pressure." },
    { title: "Engineering handshake fluency", detail: "Specs align with Tailwind/React mental models devs actually ship." },
    { title: "Ethics-forward persuasion", detail: "Psychology lessons exclude manipulative dark patterns." },
    { title: "Portfolio-grade artifacts", detail: "Graduate with measurable redesign narratives." },
  ],
  uiSuggestions: {
    designDirection:
      "Think editorial × kinetic UI: oversized serif accents for headings, neo-grotesk body, pastel aurora washes masked behind frosted panels. Cards lift with chromatic edge-light responsive to hover proximity.",
    animationSuggestions: [
      "Scroll-linked hue rotation on abstract gradient meshes (CSS variables).",
      "Case studies: staggered mask reveals using clip-path polygons.",
      "Micro-parallax on floating device frames max ±12px.",
      "Toolkit logos: orbital hover orbit (slow CSS rotate).",
      "Reduced-motion: swap to opacity-only fades.",
    ],
    iconIdeas: ["Bezier compass", "Golden ratio spiral", "Eyetrace glyph", "Pixel orchid motif"],
    responsiveLayoutSuggestions: [
      "Tablet: dual-column case studies with sticky insight rail.",
      "Mobile: collapsible module timelines as vertical stepped timeline.",
      "Tools grid switches to horizontal marquee on small screens.",
    ],
  },
  interviewQuestions: [
    "Walk me through a redesign where constraints drove creativity.",
    "How do you prioritize UX issues when analytics disagree with qualitative insights?",
    "Describe how you collaborate with engineers during implementation QA.",
    "What is your accessibility testing ritual?",
    "How do you document motion for developers?",
  ],
  faqs: [
    {
      question: "Do I need Adobe Creative Cloud?",
      answer:
        "Core track centers on Figma. Photoshop/Illustrator modules support marketing-grade polish and icon stacks—trial periods suffice for intensives.",
    },
    {
      question: "Is this only for aspiring full-time designers?",
      answer:
        "No. Freelancers get proposal templates, scoping drills, and pricing sanity checks alongside remote hiring prep.",
    },
    {
      question: "Will engineers benefit?",
      answer:
        "Yes—developers leveling into design-aware frontend roles gain vocabulary for critique and specification discipline.",
    },
    {
      question: "How portfolio-ready are projects?",
      answer:
        "Each major milestone maps to portfolio-ready artifacts with metrics placeholders you validate via usability tests.",
    },
  ],
  cta: {
    headline: "Craft interfaces that feel inevitable — train with Hexenity",
    text: "Bring your ambition (startup, freelance, or enterprise transfer). We'll align modules to your portfolio goals.",
    primaryLabel: "Book Design Track Review",
    primaryPath: "/hexenity/contact",
    secondaryLabel: "Share portfolio link",
    secondaryPath: "/hexenity/contact",
  },
  resources: [
    { label: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002051613-Get-started" },
    { label: "WCAG overview", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
    { label: "Laws of UX", url: "https://lawsofux.com/" },
    { label: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/" },
  ],
};

export const HEXENITY_PREMIUM_WEB_DETAIL = {
  updatedOn: "May 2026",
  readTime: "38 min",
  level: "Beginner to Production",
  seo: {
    title: "Web Development Learning Program | Hexenity",
    description:
      "Premium web development curriculum: HTML to deployment, React, Next.js, Node, databases, auth, Git, Docker basics, performance — beginner through production.",
    keywords: [
      "full stack web development course",
      "MERN stack learning",
      "Next.js React training",
      "web developer career roadmap",
    ],
  },
  hero: {
    headline: "Orbital Stack — Full-Spectrum Web Development for Builders Who Deploy",
    subtitle:
      "Master the modern browser-to-database arc with startup-grade discipline: readable foundations, scalable architecture, measurable performance, and shipping rituals.",
    careerDescription:
      "Hexenity trains web engineers who own outcomes—not tutorials. You'll traverse semantic HTML roots through typed React surfaces, pragmatic backends, resilient databases, deployment pipelines, and observability-minded launches.",
    duration: "20 to 30 weeks",
    badges: ["Beginner → Production", "Portfolio Dense", "Ship Weekly Mindset"],
    stats: [
      { label: "Portfolio builds guided", value: "850+" },
      { label: "Production deploy drills", value: "Weekly" },
      { label: "Stack breadth", value: "16 cores" },
    ],
    primaryCtaLabel: "Start Web Track",
    primaryCtaPath: "/hexenity/contact",
    secondaryCtaLabel: "Open Live Code Lab",
    secondaryCtaPath: "/hexenity/learning/practice",
  },
  whatIsWebDevelopment: {
    overview:
      "Web development is the discipline of crafting networked experiences accessible through browsers and hybrid shells. It spans crafting resilient interfaces (frontend), trustworthy services (backend), integrated authentication and storage (full stack), plus operational excellence once traffic arrives.",
    disciplines: [
      {
        title: "Frontend Development",
        detail:
          "Translates design intent into durable DOM/CSS architectures, hydration-aware React trees, accessibility-first interactions, and Core Web Vitals discipline.",
      },
      {
        title: "Backend Development",
        detail:
          "Encodes business rules, integrates databases and caches, exposes APIs with contracts, authentication flows, rate limits, and operational safeguards.",
      },
      {
        title: "Full Stack Development",
        detail:
          "Bridges UX fidelity with durable persistence—owns vertical slices from schema migrations to optimistic UI patterns—critical for startups validating velocity.",
      },
    ],
    realWorldApplications: [
      "Streaming commerce storefronts with personalization",
      "Realtime SaaS dashboards + RBAC admin consoles",
      "Booking platforms orchestrating calendars + payments",
      "Developer portals combining docs + authenticated Sandboxes",
      "Social/community feeds blending SSR + incremental hydration",
      "Edge-deployed marketing stacks tied to experimentation SDKs",
    ],
    industryDemand:
      "Demand for engineers fluent across HTML/CSS fundamentals through typed React + Node deployments continues to accelerate—especially for ICs who optimize cumulative UX latency and collaborate cleanly via Git-backed workflows.",
  },
  intro:
    "Web platforms reward engineers who harmonize UX polish with systemic reliability. Hexenity teaches intentional layering: semantics before shortcuts, typed boundaries before scaling pains, instrumentation before guessing, and incremental releases before risky big bangs.\n\nYou'll assemble a ladder of commits—from static empathy layouts through authenticated dashboards—to showcase velocity and judgment recruiters recognize instantly.",
  whyImportant: [
    "Browser surfaces remain the widest distribution channel for B2B and B2C innovation.",
    "Companies prize engineers who compress full-stack iteration loops responsibly.",
    "Performance and accessibility literacy differentiate seniors early.",
    "Git-backed collaboration signals professionalism from day one.",
  ],
  prerequisites: [
    "Logical thinking comfort",
    "Computer literacy + willingness to live in VS Code terminal panels",
    "High-school algebra mindset for CSS grid/flex puzzles",
    "Commitment to iterative debugging without rage-quitting tabs",
  ],
  technologiesCovered: [
    {
      name: "HTML5",
      description:
        "Semantic landmarks, accessible forms, media strategies, progressive enhancement hooks—foundation before frameworks.",
      whyItMatters: "Semantics unlock SEO + accessibility synergies",
    },
    {
      name: "CSS3",
      description:
        "Layout mastery with Grid/Flex, responsive intrinsic sizing, layered animations mindful of prefers-reduced-motion.",
      whyItMatters: "CSS architecture predicts maintenance cost",
    },
    {
      name: "JavaScript",
      description:
        "Event loop literacy, modular ES modules, async flows, fetch ergonomics, defensive DOM scripting.",
      whyItMatters: "Universal substrate beneath React & Node patterns",
    },
    {
      name: "TypeScript",
      description:
        "Structural typing for props/API payloads, narrowing discipline, generics at API boundaries.",
      whyItMatters: "Scales teams without silent runtime regressions",
    },
    {
      name: "React.js",
      description:
        "Component modeling, hooks lifecycle intuition, suspense-aware fetching patterns, memo discipline.",
      whyItMatters: "Dominant UI paradigm for modern SPAs",
    },
    {
      name: "Next.js",
      description:
        "App Router mental models, hybrid rendering strategies, streaming boundaries, deployment ergonomics.",
      whyItMatters: "Production-grade defaults accelerate shipped UX",
    },
    {
      name: "Node.js",
      description:
        "Event-driven IO, module boundaries, ecosystem tooling awareness—gateway to pragmatic backends.",
      whyItMatters: "Unified JS cognitive load across stack",
    },
    {
      name: "Express.js",
      description:
        "Middleware pipelines, routers, validation layering, centralized error envelopes.",
      whyItMatters: "Fast path to credible REST services",
    },
    {
      name: "MongoDB",
      description:
        "Document modeling trade-offs, indexing strategies, aggregation introductions.",
      whyItMatters: "Flexible schemas accelerate prototyped iterations",
    },
    {
      name: "MySQL",
      description:
        "Relational modeling, joins, transactions, normalization guardrails.",
      whyItMatters: "Financial/reporting workloads favor relational truths",
    },
    {
      name: "REST APIs",
      description:
        "Resource semantics, versioning posture, pagination idioms, idempotency hints.",
      whyItMatters: "Still canonical integration lingua franca",
    },
    {
      name: "Authentication",
      description:
        "Sessions vs JWT strategies, refresh flows, OAuth-lite familiarity, RBAC layering.",
      whyItMatters: "Trust boundaries anchor product integrity",
    },
    {
      name: "Git & GitHub",
      description:
        "Branch hygiene, meaningful commits, PR etiquette, CODEOWNERS mindfulness.",
      whyItMatters: "Collaboration throughput predictor",
    },
    {
      name: "Deployment",
      description:
        "Preview URLs, env layering, rollback drills, Docker basics bridging parity gaps.",
      whyItMatters: "Ideas monetize only after reproducible releases",
    },
    {
      name: "Responsive Design",
      description:
        "Mobile-first choreography, adaptive imagery, container-aware layouts.",
      whyItMatters: "Traffic skew mobile-first globally",
    },
    {
      name: "Performance Optimization",
      description:
        "Bundle budgeting, caching tiers, profiling waterfalls, incremental enhancement tactics.",
      whyItMatters: "Latency compounds into revenue & retention deltas",
    },
  ],
  toolsPlatforms: [
    { name: "VS Code", description: "Extensions for ESLint, Prettier, Tailwind, REST snippets." },
    { name: "GitHub", description: "Issues → PR loops, Actions glimpses for CI intuition." },
    { name: "Postman", description: "Contract debugging before wiring anxious frontend fetch calls." },
    { name: "Figma", description: "Readable specs—spacing tokens align with Tailwind scales." },
    { name: "Vercel", description: "Preview environments & edge routing familiarity." },
    { name: "Netlify", description: "Jamstack hosting patterns + edge functions intros." },
    { name: "Docker basics", description: "Portable backend packaging closing dev/prod parity gaps." },
  ],
  roadmapLevels: [
    {
      level: "Beginner — Web roots",
      duration: "Weeks 1-5",
      topics: ["Semantic HTML/CSS", "Accessible components", "JS DOM + modules", "Git basics"],
      miniProjects: ["Static marketing page", "Interactive FAQ widget"],
      skillsLearned: ["Layout fluency", "Commit discipline", "Baseline a11y"],
    },
    {
      level: "Intermediate — Component era",
      duration: "Weeks 6-11",
      topics: ["React mental model", "TypeScript fundamentals", "Data fetching patterns", "Forms + validation"],
      miniProjects: ["Dashboard shell", "Auth-gated SPA slice"],
      skillsLearned: ["State hygiene", "Typed props", "API error UX"],
    },
    {
      level: "Advanced — Full stack synthesis",
      duration: "Weeks 12-18",
      topics: ["Express services", "MongoDB/MySQL modeling", "Auth flows", "Docker intro"],
      miniProjects: ["REST marketplace backend", "Role-based admin UI"],
      skillsLearned: ["Schema iteration", "RBAC layering", "Container parity"],
    },
    {
      level: "Production — Ship & observe",
      duration: "Weeks 19-30",
      topics: ["Next.js SSR/ISR intuition", "Performance audits", "Deployment pipelines", "Monitoring mindset"],
      miniProjects: ["Production-minded capstone deploy"],
      skillsLearned: ["Rollback readiness", "Observability hooks", "Perf storytelling"],
    },
  ],
  modules: [
    {
      title: "Module 01 — Semantic Terrain",
      summary: "HTML as structured intent.",
      topics: ["Landmarks", "Forms & validation hints", "SEO empathy"],
      lessons: ["Accessibility tree mini clinic"],
      practicalTasks: ["Rebuild chaotic markup semantically"],
      realWorldExercises: ["Lighthouse accessibility baseline capture"],
      assignments: ["Semantic diff checklist"],
    },
    {
      title: "Module 02 — Layout Laboratory",
      summary: "CSS architecture sans chaos.",
      topics: ["Grid/Flex interplay", "Fluid spacing scales", "Dark/light parity"],
      lessons: ["Modern reset rationale"],
      practicalTasks: ["Responsive marketing hero trio"],
      realWorldExercises: ["CLS mitigation drill"],
      assignments: ["CSS architecture README"],
    },
    {
      title: "Module 03 — JavaScript Signal Flow",
      summary: "Predictable async UX.",
      topics: ["Promises & fetch", "Error envelopes", "Modules"],
      lessons: ["Event loop tracer simulation"],
      practicalTasks: ["Weather widget with graceful degradation"],
      realWorldExercises: ["Race condition patch narrative"],
      assignments: ["Async refactor PR notes"],
    },
    {
      title: "Module 04 — TypeScript Guardrails",
      summary: "Make invalid states harder.",
      topics: ["Narrowing", "Interfaces vs types", "Utility patterns"],
      lessons: ["Strict mode rationale"],
      practicalTasks: ["Typed fetch mapper"],
      realWorldExercises: ["Eliminate lingering any hotspots"],
      assignments: ["TS adoption incremental plan"],
    },
    {
      title: "Module 05 — React Composition Forge",
      summary: "Hooks-driven clarity.",
      topics: ["Effects discipline", "Memo boundaries", "Suspense teaser"],
      lessons: ["Strict concurrent mindset primer"],
      practicalTasks: ["Convert legacy class mindset diagram"],
      realWorldExercises: ["Eliminate redundant renders profiling"],
      assignments: ["Component taxonomy RFC"],
    },
    {
      title: "Module 06 — Next.js Orbital Entry",
      summary: "Hybrid rendering literacy.",
      topics: ["Layouts & nested routing", "Streaming skeleton UX", "Edge caching intuition"],
      lessons: ["SSR vs CSR trade memo"],
      practicalTasks: ["Blog + MDX lite exploration"],
      realWorldExercises: ["Perf compare CSR vs SSR slice"],
      assignments: ["Rendering decision matrix"],
    },
    {
      title: "Module 07 — Express Service Core",
      summary: "Predictable REST ergonomics.",
      topics: ["Middleware ordering", "Validation schemas", "Pagination contracts"],
      lessons: ["Error taxonomy workshop"],
      practicalTasks: ["Resource versioning spike"],
      realWorldExercises: ["Rate-limit narrative"],
      assignments: ["OpenAPI-lite sketch"],
    },
    {
      title: "Module 08 — Mongo Modeling Atlas",
      summary: "Documents that evolve safely.",
      topics: ["Embedding vs referencing", "Indexing basics", "Aggregation teaser"],
      lessons: ["Migration mindset"],
      practicalTasks: ["Model churn simulation"],
      realWorldExercises: ["Explain aggregation pipeline verbally"],
      assignments: ["Schema evolution journal"],
    },
    {
      title: "Module 09 — MySQL Relational Spine",
      summary: "Integrity-first persistence.",
      topics: ["Normalization trade-offs", "Join strategies", "Transactions primer"],
      lessons: ["Slow query detective hunt"],
      practicalTasks: ["Reporting query optimization"],
      realWorldExercises: ["Integrity constraint storytelling"],
      assignments: ["ERD artifact"],
    },
    {
      title: "Module 10 — Authentication Continuum",
      summary: "Sessions & tokens responsibly.",
      topics: ["JWT rotation sketch", "OAuth metaphor map", "RBAC layering"],
      lessons: ["Threat modeling lite"],
      practicalTasks: ["Secure cookie lab reflection"],
      realWorldExercises: ["Logout everywhere UX"],
      assignments: ["Auth ADR"],
    },
    {
      title: "Module 11 — REST Integration Fabric",
      summary: "Contracts engineers honor.",
      topics: ["Idempotency keys intro", "Version negotiation", "Bulk endpoints caution"],
      lessons: ["Consumer-driven contract anecdote"],
      practicalTasks: ["Paginated infinite scroll pairing"],
      realWorldExercises: ["Breaking change communication drill"],
      assignments: ["Contract changelog template"],
    },
    {
      title: "Module 12 — Git Collaboration Cosmos",
      summary: "Readable history wins disputes.",
      topics: ["Branch strategies", "Meaningful commits", "Conflict choreography"],
      lessons: ["Cherry-pick caution tales"],
      practicalTasks: ["PR description makeover"],
      realWorldExercises: ["Revert vs rollback scenario"],
      assignments: ["Team conventions doc"],
    },
    {
      title: "Module 13 — Deployment Launch Grid",
      summary: "Ship without holding breath.",
      topics: ["Env layering", "Preview URLs", "Rollback rehearsals"],
      lessons: ["Canary metaphor"],
      practicalTasks: ["Vercel/Netlify preview ritual"],
      realWorldExercises: ["Incident-ready checklist"],
      assignments: ["Deploy runbook"],
    },
    {
      title: "Module 14 — Responsive Performance Forge",
      summary: "Motion & speed empathy.",
      topics: ["Image pipelines", "Lazy boundaries", "Prefetch etiquette"],
      lessons: ["Core Web Vitals storytelling"],
      practicalTasks: ["Bundle shrink sprint"],
      realWorldExercises: ["Field vs lab metric reconciliation"],
      assignments: ["Perf retro memo"],
    },
    {
      title: "Module 15 — Docker Baseline Capsule",
      summary: "Close parity gaps pragmatically.",
      topics: ["Dockerfile anatomy", "Compose dev ergonomics", "Image slimming gestures"],
      lessons: ["Rootless mindset teaser"],
      practicalTasks: ["Containerize Express API"],
      realWorldExercises: ["Prod vs dev drift audit"],
      assignments: ["Container README"],
    },
  ],
  roadmap: [
    { phase: "Weeks 1-5", focus: "HTML/CSS/JS foundations", deliverables: ["Accessible landing page", "Git workflow fluency"] },
    { phase: "Weeks 6-11", focus: "React + TypeScript velocity", deliverables: ["Dashboard SPA", "Typed API integration"] },
    { phase: "Weeks 12-18", focus: "Backend + persistence", deliverables: ["REST API service", "Auth slice"] },
    { phase: "Weeks 19-30", focus: "Production synthesis", deliverables: ["Deployed capstone", "Perf case study"] },
  ],
  caseStudies: [
    {
      title: "SSR commerce uplift — hydration latency trimmed",
      challenge: "SEO-critical PDP routes shipped bloated JS hurting mobile LCP.",
      strategy: "Selective SSR + skeleton streaming + image pipeline downgrade path.",
      channels: ["Next.js", "Edge CDN", "Performance profiling"],
      outcomes: ["Mobile LCP −31%", "Bounce rate −9% on PDP cohort"],
    },
    {
      title: "Auth refactor — session clarity across SPA + API",
      challenge: "Opaque 401 storms confusing users during token expiry.",
      strategy: "Explicit refresh choreography + centralized API client interceptors.",
      channels: ["Express", "JWT rotation sketch", "React Query patterns"],
      outcomes: ["Support tickets −14%", "Auth-related churn −6% measured proxy"],
    },
  ],
  practiceProjects: [
    {
      name: "Ecommerce Platform",
      level: "Advanced",
      goal: "Catalog, cart, checkout UX + inventory-aware backend sketches.",
      features: ["Stripe-ready placeholders", "SSR-friendly PDP experiments"],
      techUsed: ["Next.js", "MongoDB", "Express"],
    },
    {
      name: "SaaS Dashboard",
      level: "Intermediate",
      goal: "RBAC-aware analytics workspace.",
      features: ["Chart sandbox", "Invitation flows"],
      techUsed: ["React", "TypeScript", "REST"],
    },
    {
      name: "CRM System",
      level: "Advanced",
      goal: "Lead pipelines + activity timelines.",
      features: ["Bulk CSV import UX", "Audit logs"],
      techUsed: ["React", "MySQL", "Express"],
    },
    {
      name: "Social Media Platform",
      level: "Production-oriented",
      goal: "Feeds + optimistic interactions.",
      features: ["Realtime teaser hooks", "Moderation stubs"],
      techUsed: ["Next.js", "WebSockets intro", "MongoDB"],
    },
    {
      name: "Booking System",
      level: "Intermediate",
      goal: "Calendar conflicts + reminders narrative.",
      features: ["Timezone UX", "Email hooks placeholders"],
      techUsed: ["React", "Node", "REST"],
    },
    {
      name: "Admin Dashboard",
      level: "Intermediate",
      goal: "Operational visibility patterns.",
      features: ["Role panels", "Bulk actions caution UX"],
      techUsed: ["React", "TypeScript", "REST"],
    },
  ],
  careerOpportunities: [
    {
      role: "Frontend Developer",
      description: "Own UI fidelity, accessibility, performance tuning across SPAs.",
      salaryRange: "INR 6L–22L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "Backend Developer",
      description: "Design resilient APIs + persistence layers powering client surfaces.",
      salaryRange: "INR 7L–26L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "Full Stack Developer",
      description: "Deliver vertical slices bridging UX polish + durable services.",
      salaryRange: "INR 8L–30L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "React Developer",
      description: "Deep specialization in component ecosystems + client architecture.",
      salaryRange: "INR 7L–28L+ / year",
      remoteOpportunities: "Very High",
    },
    {
      role: "MERN Stack Developer",
      description: "Mongo + Express + React + Node iteration loops—startup staple.",
      salaryRange: "INR 7L–27L+ / year",
      remoteOpportunities: "Very High",
    },
  ],
  whyLearnHexenity: [
    { title: "Real projects weekly cadence", detail: "Momentum beats sporadic tutorials—shipping becomes reflex." },
    { title: "Industry mentorship lenses", detail: "Reviews emphasize readability, observability, and narrative commits." },
    { title: "Startup-oriented training", detail: "Scopes mimic constrained runway decisions—not textbook fluff." },
    { title: "Freelancing guidance", detail: "Packaging deployments + concise demos wins retainers." },
    { title: "Portfolio velocity", detail: "Every milestone enlarges recruiter-visible artifact depth." },
  ],
  uiSuggestions: {
    designDirection:
      "Orbital HUD metaphor: layered glass panels over deep navy void, cyan orbital accents tracing scroll depth, monospace telemetry for durations/skills counters.",
    animationSuggestions: [
      "Hero orbit ring rotates 360° once per scroll segment (slow CSS keyframes).",
      "Technology grid uses staggerChildren via Framer Motion on viewport enter.",
      "Roadmap timeline draws SVG stroke dashoffset reveal.",
      "Module accordion springs lightly—respect prefers-reduced-motion.",
      "Deploy-themed CTA pulses subtle emerald glow every 8s.",
    ],
    iconIdeas: ["Globe lattice", "Terminal prism", "Ship rocket contour", "Branch graph glyph"],
    responsiveLayoutSuggestions: [
      "Desktop split hero vs stats bento; mobile stats horizontal snap.",
      "Roadmap collapses into stepped vertical connectors.",
      "Projects become carousel with swipe hints.",
    ],
  },
  interviewQuestions: [
    "Explain hydration mismatches you’ve prevented.",
    "How do you balance SSR vs CSR for a dashboard-heavy product?",
    "Walk through securing cookies vs bearer tokens.",
    "Describe diagnosing a CLS regression.",
    "How would you shard Mongo collections vs normalize MySQL?",
  ],
  faqs: [
    {
      question: "Is MERN mandatory if I prefer PostgreSQL?",
      answer:
        "No—relational variants swap cleanly. Concepts emphasize transferable modeling + API discipline.",
    },
    {
      question: "Will we deploy publicly?",
      answer:
        "Yes—students ship preview URLs with rollback rehearsals to cement operational maturity.",
    },
    {
      question: "Can beginners truly finish?",
      answer:
        "Pacing tiers adjust milestones; foundational modules gate advanced complexity responsibly.",
    },
    {
      question: "Do you cover freelancing?",
      answer:
        "Proposal templates + scope narratives complement technical drills—ideal for indie consultants.",
    },
  ],
  cta: {
    headline: "Ignite your web engineering trajectory — ship with Hexenity",
    text: "Schedule an intake so we align modules with your hiring target or freelance niche.",
    primaryLabel: "Book Web Track Session",
    primaryPath: "/hexenity/contact",
    secondaryLabel: "Compare curriculum stacks",
    secondaryPath: "/hexenity/contact",
  },
  resources: [
    { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    { label: "React Docs", url: "https://react.dev/" },
    { label: "Next.js Docs", url: "https://nextjs.org/docs" },
    { label: "Node.js Docs", url: "https://nodejs.org/en/docs" },
    { label: "MongoDB University", url: "https://learn.mongodb.com/" },
    { label: "MySQL Docs", url: "https://dev.mysql.com/doc/" },
  ],
};

export const HEXENITY_PREMIUM_AI_MEGA = [
  {
    section: "Neural Foundations",
    items: [
      "AI landscape orientation & ethics checkpoints",
      "ML fundamentals & baseline-first experimentation",
      "Neural nets intuition + debugging unstable training",
      "Evaluation metrics tied to business KPIs",
      "Notebook hygiene → reproducible Python modules",
    ],
  },
  {
    section: "Deep Learning Stack",
    items: [
      "CNN workflows & augmentation strategies",
      "Sequence modeling essentials",
      "Transfer learning guardrails",
      "PyTorch iteration loops & profiling",
      "TensorFlow industrial patterns & exports",
    ],
  },
  {
    section: "Generative & Language Intelligence",
    items: [
      "Generative AI mental models & guardrails",
      "LLM applications architecture patterns",
      "Prompt engineering lifecycle",
      "Chatbot UX & escalation semantics",
      "RAG retrieval tuning lab sequence",
    ],
  },
  {
    section: "Agents, Automation & SaaS",
    items: [
      "Agent planners + least-privilege tools",
      "AI automation orchestration",
      "OpenAI API reliability patterns",
      "AI SaaS tenancy & metering sketches",
      "Deployment GPU/CPU strategies overview",
    ],
  },
  {
    section: "Career Launchpad",
    items: [
      "Portfolio narratives for AI engineers",
      "Interview drills for ML vs AI roles",
      "Cost/latency trade storytelling",
      "Responsible AI disclosure templates",
      "Capstone demo rehearsal checklist",
    ],
  },
];

export const HEXENITY_PREMIUM_UI_MEGA = [
  {
    section: "Discovery & Structure",
    items: ["Research rituals", "Wireframe acceleration", "Flow diagrams & funnel alignment", "Information architecture labs"],
  },
  {
    section: "Visual & Systems Craft",
    items: ["Typography systems", "Color & semantic ramps", "Design tokens & libraries", "Micro-interactions"],
  },
  {
    section: "Platforms & Responsiveness",
    items: ["Mobile-first ergonomics", "Responsive choreography", "Cross-device prototyping"],
  },
  {
    section: "Tools Mastery",
    items: ["Figma advanced workflows", "Adobe XD collaborative rituals", "Photoshop polish passes", "Illustrator vector discipline", "Framer storytelling sites"],
  },
  {
    section: "Validation & Careers",
    items: ["Accessibility audits", "Portfolio packaging", "Freelance proposals", "Remote interview rituals"],
  },
];

export const HEXENITY_PREMIUM_WEB_MEGA = [
  {
    section: "Browser Foundations",
    items: ["HTML5 semantics", "CSS architecture", "Responsive layouts", "Accessibility fundamentals"],
  },
  {
    section: "Application Layer",
    items: ["JavaScript mastery path", "TypeScript adoption", "React composition", "Next.js rendering literacy"],
  },
  {
    section: "Services & Data",
    items: ["Node + Express APIs", "MongoDB modeling", "MySQL relational flows", "REST contracts"],
  },
  {
    section: "Security & Collaboration",
    items: ["Authentication strategies", "Git/GitHub workflows", "PR craftsmanship"],
  },
  {
    section: "Shipping & Speed",
    items: ["Deployment pipelines", "Docker basics", "Performance optimization", "Observability mindset"],
  },
];
