const MODE_CONTEXT = {
  Assistant: 'general delivery support',
  'Dev Helper': 'engineering implementation support',
  'Logic Engine': 'system logic and workflow support',
  Analytics: 'growth and performance support',
};

const SUPPORT_PLAYBOOKS = {
  build: {
    title: 'Build Playbook',
    focus: [
      'Clarify business objective and primary user journey',
      'Define scope tiers: MVP, V1, and scale roadmap',
      'Create architecture baseline and milestone schedule',
    ],
    output: [
      'Delivery roadmap with 2-week sprint checkpoints',
      'Feature priority matrix (must-have / should-have / later)',
      'Technical risk register and mitigation actions',
    ],
  },
  fix: {
    title: 'Fix Playbook',
    focus: [
      'Reproduce issue with exact steps and environment',
      'Identify root cause (logic, integration, infra, UI)',
      'Patch with rollback-safe deployment plan',
    ],
    output: [
      'Root cause summary and permanent remediation',
      'Patch checklist + QA validation matrix',
      'Post-fix monitoring and regression guardrails',
    ],
  },
  analyze: {
    title: 'Analysis Playbook',
    focus: [
      'Map business KPI to product/system signals',
      'Compare baseline vs target outcome',
      'Convert findings into prioritized experiments',
    ],
    output: [
      'KPI dashboard structure and event tracking plan',
      'Bottleneck analysis for conversion/retention',
      '90-day optimization recommendations',
    ],
  },
};

const containsAny = (text, words) => words.some((word) => text.includes(word));

const inferIntent = (input) => {
  const text = input.toLowerCase();
  if (text.startsWith('/build')) return 'build';
  if (text.startsWith('/fix')) return 'fix';
  if (text.startsWith('/analyze')) return 'analyze';

  if (containsAny(text, ['bug', 'error', 'issue', 'broken', 'fix'])) return 'fix';
  if (containsAny(text, ['kpi', 'metrics', 'analyze', 'analysis', 'report', 'funnel'])) return 'analyze';
  return 'build';
};

const stripCommand = (input) => {
  const trimmed = input.trim();
  if (!trimmed.startsWith('/')) return trimmed;
  const parts = trimmed.split(' ');
  return parts.slice(1).join(' ').trim();
};

const bullets = (items) => items.map((item) => `- ${item}`).join('\n');

export const generateEnitexaAiResponse = ({ input, mode }) => {
  const intent = inferIntent(input);
  const commandContext = stripCommand(input);
  const playbook = SUPPORT_PLAYBOOKS[intent];
  const modeContext = MODE_CONTEXT[mode] || MODE_CONTEXT.Assistant;

  const contextLine = commandContext
    ? `Context received: "${commandContext}".`
    : 'No specific context was provided, so I am returning a strong default support plan.';

  return {
    title: `${playbook.title} (${mode})`,
    text: [
      `I will support this as ${modeContext}.`,
      contextLine,
      '',
      'Immediate focus:',
      bullets(playbook.focus),
      '',
      'Professional output you can execute:',
      bullets(playbook.output),
      '',
      'Next step: reply with project domain + timeline + team size and I will return a sprint-ready action plan.',
    ].join('\n'),
  };
};

export const ENITEXA_AI_SUGGESTIONS = [
  '/build Create MVP roadmap for a B2B dashboard platform',
  '/fix Login flow crashes on Android 14 after update',
  '/analyze Why conversion is low on landing page traffic',
  'Create architecture plan for AI + automation for local business',
  'Generate development support checklist for enterprise mobile app',
];
