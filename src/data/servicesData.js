export const servicesData = {
    "mobile-app-development": {
        title: "Mobile App Development",
        overview: "We design and engineer premium mobile products for founders, enterprises, and growth teams with structured execution from product strategy to launch and post-launch scale.",
        techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Node.js", "Firebase", "Supabase", "AWS"],
        toolingStack: ["Android Studio", "Xcode", "VS Code", "Firebase Console", "Postman", "Figma", "Jira", "GitHub Actions"],
        typesTitle: "Mobile Product Categories We Deliver",
        types: [
            "Consumer-grade Mobile Products",
            "Enterprise Operations Apps",
            "Marketplace & Booking Platforms",
            "E-Commerce & D2C Mobile Commerce",
            "Field-force and Internal Team Apps",
            "Startup MVP to Scale-ready Architecture",
            "Subscription and Community Platforms"
        ],
        processTitle: "Mobile Product Delivery Workflow",
        process: [
            { step: "Product Discovery", desc: "We align on business objective, target user segments, success metrics, and scope boundaries before execution begins." },
            { step: "UX Architecture", desc: "Information architecture, user flows, and wireframes are validated for conversion, usability, and retention." },
            { step: "UI Design System", desc: "A clean, brand-ready mobile interface system is prepared with reusable components and interaction states." },
            { step: "Engineering Build", desc: "Frontend, backend integration, data architecture, and environment setup are executed in sprint-based delivery cycles." },
            { step: "QA and Device Validation", desc: "Manual and automated QA, regression checks, performance profiling, and real-device testing are completed." },
            { step: "Store Launch and Release Governance", desc: "We manage App Store and Play Store submissions, policy compliance, release notes, and phased rollout." },
            { step: "Scale and Support", desc: "Post-launch analytics review, iteration planning, and long-term support governance are maintained with your team." }
        ],
        deliveryModes: [
            {
                mode: "Native Build",
                useCase: "Best for performance-critical products, deep device feature usage, and enterprise security requirements.",
                stack: "Swift (iOS), Kotlin (Android)"
            },
            {
                mode: "Cross-platform Build",
                useCase: "Best for faster time-to-market and single-codebase delivery while maintaining quality UX across platforms.",
                stack: "Flutter or React Native"
            },
            {
                mode: "Hybrid Product Strategy",
                useCase: "Best when core journeys require native performance while secondary modules can move faster using shared layers.",
                stack: "Native modules + cross-platform core"
            },
            {
                mode: "MVP to Scale Path",
                useCase: "Best for startups launching quickly with a roadmap to enterprise-grade architecture.",
                stack: "Cross-platform MVP + modular backend"
            }
        ],
        executionModel: [
            {
                stage: "UX and Product Stage",
                focus: "User journey mapping, wireframes, prioritization, and milestone definition.",
                deliverables: "PRD draft, feature map, screen flow"
            },
            {
                stage: "UI and Design Stage",
                focus: "Brand-consistent component system, app screens, and interactive prototypes.",
                deliverables: "Design system, clickable prototype, handoff specs"
            },
            {
                stage: "Development Stage",
                focus: "Architecture setup, API integration, feature implementation, and sprint reviews.",
                deliverables: "Sprint releases, source code, staging builds"
            },
            {
                stage: "QA and Reliability Stage",
                focus: "Functional testing, device matrix validation, crash analysis, and performance improvements.",
                deliverables: "QA reports, bug log, acceptance checklist"
            },
            {
                stage: "Launch and Handover Stage",
                focus: "Store deployment, access transfer, documentation, and support readiness.",
                deliverables: "Published app, handover docs, support plan"
            }
        ],
        workingModes: [
            {
                title: "Dedicated Product Squad",
                detail: "A focused cross-functional team from Hexenity drives discovery, design, development, QA, and release under one delivery lead.",
                bestFit: "Founders and teams that need end-to-end ownership"
            },
            {
                title: "Co-build with Internal Team",
                detail: "We integrate with your existing product or engineering team and handle high-priority modules, quality gates, and release management.",
                bestFit: "Organizations scaling internal delivery capacity"
            },
            {
                title: "Build-Operate-Transfer (BOT)",
                detail: "Hexenity builds and stabilizes the mobile product, then transitions processes, documentation, and operational ownership to your team.",
                bestFit: "Companies planning long-term in-house operations"
            },
            {
                title: "MVP Fast-track Mode",
                detail: "An accelerated scope-to-launch model for market validation with roadmap clarity for version-two scale architecture.",
                bestFit: "Startups validating product-market fit quickly"
            }
        ],
        architectureModel: {
            summary: "Our mobile architecture prioritizes long-term maintainability, release safety, and measurable product performance across iOS and Android ecosystems.",
            layers: [
                {
                    name: "Experience Layer",
                    detail: "UI components, design system standards, responsive states, accessibility rules, and mobile interaction behavior."
                },
                {
                    name: "Application Layer",
                    detail: "Feature modules, business logic orchestration, offline sync handling, and role-based interaction controls."
                },
                {
                    name: "Integration Layer",
                    detail: "Secure API contracts, third-party services, payments, push notifications, and analytics event pipelines."
                },
                {
                    name: "Data and Security Layer",
                    detail: "Data modeling, authentication controls, encrypted storage, and backend governance for compliance-ready operations."
                },
                {
                    name: "Release and Observability Layer",
                    detail: "CI/CD automation, crash monitoring, performance dashboards, QA gates, and release rollback safeguards."
                }
            ]
        },
        statusGovernance: [
            {
                title: "Weekly Executive Status Update",
                detail: "Sprint outcomes, milestone completion, open risks, and next-priority decisions are shared with clear accountability.",
                cadence: "Weekly"
            },
            {
                title: "Build and QA Progress Dashboard",
                detail: "Feature readiness, defect trends, build health, and release confidence are tracked through transparent progress indicators.",
                cadence: "2-3 times per week"
            },
            {
                title: "Milestone Acceptance Review",
                detail: "Each milestone is reviewed against scope, quality standards, and business outcomes before sign-off and transition.",
                cadence: "Per milestone"
            },
            {
                title: "Post-launch Stability Monitoring",
                detail: "Crash rates, performance metrics, user feedback, and iteration priorities are monitored immediately after release.",
                cadence: "First 2-4 weeks post-launch"
            }
        ],
        timeline: [
            "MVP Launch – 4 to 6 Weeks",
            "Growth-ready Product – 8 to 12 Weeks",
            "Enterprise Mobile Platform – 12+ Weeks"
        ],
        timelineNote: "(Timeline is defined after scope, integrations, and compliance requirements are finalized.)",
        whatYouGet: [
            "Architecture planning with scale-readiness",
            "Mobile-first design system and UX flows",
            "Secure API and backend integration",
            "CI/CD-ready build and release process",
            "Documented source code and deployment checklist",
            "Post-launch support and optimization roadmap"
        ],
        clientBenefits: [
            "Faster product launch cycles with predictable milestone execution.",
            "Higher user retention through structured UX and performance optimization.",
            "Lower delivery risk with QA governance and release control.",
            "Clear ownership model with transparent reporting and collaboration."
        ],
        salesImpact: [
            "Improved conversion from mobile-first purchase and onboarding flows.",
            "Higher repeat revenue through stronger app stability and engagement loops.",
            "Better upsell opportunities using analytics-driven feature iteration.",
            "Stronger brand trust that supports enterprise and premium customer acquisition."
        ],
        clientCollaboration: [
            "Weekly sprint reviews with clear progress and blockers",
            "Dedicated communication channel for rapid decision-making",
            "Milestone approvals for scope control and predictability",
            "Access transparency for repository, builds, and QA status"
        ],
        growthSupport: [
            "App Store Optimization basics (listing quality and positioning)",
            "Analytics instrumentation for activation and retention tracking",
            "Event funnel setup for product and marketing teams",
            "Feature iteration roadmap based on user behavior insights"
        ],
        faqs: [
            { q: "How do you decide between native and cross-platform?", a: "We evaluate business timeline, budget, feature depth, performance expectations, and long-term scale requirements, then recommend the right mode with clear trade-offs." },
            { q: "Can you manage UI, development, QA, and launch end-to-end?", a: "Yes. Our delivery model covers product strategy, UX/UI, engineering, QA, release governance, and post-launch support under one execution framework." },
            { q: "How can clients contribute to a better mobile product outcome?", a: "Fast decision cycles, clear business priorities, domain inputs, and timely review feedback help us accelerate delivery quality and reduce rework risk." }
        ]
    },
    "website-development": {
        title: "Website Development",
        overview: "We develop modern, responsive, and SEO-optimized websites tailored to your business goals.",
        techStack: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "WordPress"],
        typesTitle: "Types of Websites",
        types: [
            "Business Websites",
            "Portfolio Websites",
            "E-Commerce Websites",
            "Landing Pages",
            "Custom Web Applications",
            "Admin Dashboards"
        ],
        processTitle: "Website Development Process",
        process: [
            { step: "Requirement & Planning", desc: "We begin by diagnosing your business objectives, target audience demographics, and core functional needs." },
            { step: "Wireframe & Structure", desc: "Creating the skeletal framework of the website, establishing core navigation paths, and planning content hierarchy." },
            { step: "UI Design", desc: "Elevating the wireframes into pixel-perfect, premium-grade mockups with strategic color palettes and micro-interactions." },
            { step: "Development", desc: "Translating the designs into clean, semantic, and highly performant code with robust API and CMS integrations." },
            { step: "SEO Optimization", desc: "Applying advanced on-page SEO best practices natively into the HTML structure to ensure maximum discoverability." },
            { step: "Testing & Deployment", desc: "Conducting extensive cross-browser styling and load testing before securely migrating the site to your live host." }
        ],
        timeline: [
            "Basic Website – 1 to 2 Weeks",
            "Business Website – 2 to 4 Weeks",
            "Custom Web App – 5+ Weeks"
        ],
        timelineNote: "",
        whatYouGet: [
            "Responsive Design",
            "Fast Loading Speed",
            "SEO-Friendly Structure",
            "CMS Integration (Optional)",
            "Hosting & Deployment Support"
        ],
        clientBenefits: [
            "Professional digital presence aligned to brand and business goals.",
            "Improved user trust with clean, fast, and secure web experience.",
            "Operational simplicity through manageable CMS and scalable codebase.",
            "Reduced maintenance overhead with structured deployment standards."
        ],
        salesImpact: [
            "Higher inquiry-to-lead conversion through optimized landing journeys.",
            "Increased organic visibility from SEO-friendly site architecture.",
            "Better campaign performance due to faster load times and UX clarity.",
            "Improved checkout or booking completion rates for growth-focused funnels."
        ],
        faqs: [
            { q: "Will my website be mobile-friendly and responsive?", a: "Yes, every website we build is 100% responsive and strictly optimized to look stunning on mobile, tablet, and desktop screens." },
            { q: "Is basic SEO included in the development?", a: "Yes, we implement technical on-page SEO best practices natively into the code to ensure better search engine rankings from day one." },
            { q: "Can I update the website content myself?", a: "We can integrate easy-to-use CMS (Content Management Systems) so you can seamlessly update text, images, and blogs without deep technical knowledge." }
        ]
    },
    "ui-ux-design": {
        title: "UI/UX & Design",
        overview: "We design intuitive digital experiences that improve engagement and usability.",
        techStack: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer", "Miro"],
        typesTitle: "Our Design Services",
        types: [
            "UI Strategy & Consultation",
            "Wireframing & Prototyping",
            "Mobile App Design",
            "Web Interface Design",
            "Logo Design",
            "Brand Identity Creation",
            "Social Media Creatives"
        ],
        processTitle: "Design Process",
        process: [
            { step: "Research & Analysis", desc: "Studying direct competitors and user psychology models to uncover what drives maximum interaction for your niche." },
            { step: "Wireframe Creation", desc: "Drafting the foundational blueprint for screen layouts focusing entirely on layout flow over aesthetics." },
            { step: "Visual Design", desc: "Injecting brand personality through bespoke typography, whitespace manipulation, and modern UI patterns like glassmorphism." },
            { step: "Prototype Testing", desc: "Transforming static designs into clickable, interactive prototypes to validate assumptions before engineering starts." },
            { step: "Final Design Delivery", desc: "Exporting organized design files alongside robust style guides and asset libraries for seamless developer handoff." }
        ],
        timeline: [
            "Logo Design – 3 to 5 Days",
            "UI Design (App/Web) – 1 to 3 Weeks",
            "Full Brand Identity – 2 to 4 Weeks"
        ],
        timelineNote: "",
        whatYouGet: [
            "High-Fidelity Mockups",
            "Interactive Prototypes",
            "Design System Guidelines",
            "Exported Assets",
            "Source Files (Figma)"
        ],
        clientBenefits: [
            "Clear product direction with documented UX decisions and interaction logic.",
            "Consistent brand expression across mobile, web, and marketing touchpoints.",
            "Faster development handoff through structured design systems.",
            "Reduced rework by validating user flows before engineering begins."
        ],
        salesImpact: [
            "Higher conversion through frictionless journeys and stronger CTA placement.",
            "Better onboarding completion with simplified interaction patterns.",
            "Increased customer confidence from premium interface quality.",
            "Improved campaign outcomes by aligning visuals with buyer intent."
        ],
        faqs: [
            { q: "How many design revisions do you offer?", a: "We believe in collaborative design. We offer multiple revision cycles during the wireframing and initial UI phases to ensure the final product aligns perfectly with your vision." },
            { q: "Do you design for both web and mobile platforms?", a: "Yes, we construct comprehensive, responsive design systems that cover everything from vertical mobile app screens to intricate web dashboards." },
            { q: "Will I receive the original source files?", a: "Absolutely. Upon completion, we hand over all organized source files (typically Figma) along with exported transparent assets and rigid style guides." }
        ]
    },
    "logo-design-branding": {
        title: "Logo Design & Brand Identity",
        overview: "We craft distinctive logo systems and brand identity foundations that help businesses look premium, memorable, and trusted across every channel.",
        techStack: ["Adobe Illustrator", "Figma", "Photoshop", "Brand Strategy Framework", "Typography Systems"],
        typesTitle: "Brand Identity Services",
        types: [
            "Primary Logo Design",
            "Secondary / Alternate Logo Variants",
            "Icon and Monogram Systems",
            "Typography and Color Direction",
            "Brand Usage Guidelines",
            "Social and Digital Brand Asset Kit"
        ],
        processTitle: "Logo and Branding Workflow",
        process: [
            { step: "Brand Discovery", desc: "Understand your market, audience psychology, positioning, and business personality before concept creation." },
            { step: "Creative Direction", desc: "Define design territory including visual tone, style references, typography direction, and symbolic language." },
            { step: "Concept Exploration", desc: "Create multiple professional logo directions with rationale connected to brand strategy and market differentiation." },
            { step: "Refinement and Validation", desc: "Iterate on selected concepts with alignment reviews to finalize proportion, spacing, and visual clarity." },
            { step: "Identity System Build", desc: "Develop logo variants, color system, typography hierarchy, and usage framework for consistent deployment." },
            { step: "Asset Delivery", desc: "Deliver production-ready files with clear usage guidelines for digital, print, and marketing teams." }
        ],
        timeline: [
            "Express Identity Pack – 5 to 7 Days",
            "Professional Brand Kit – 1 to 2 Weeks",
            "Full Identity + Guidelines – 2 to 3 Weeks"
        ],
        timelineNote: "(Timeline depends on revision cycles and scope depth.)",
        whatYouGet: [
            "Primary + secondary logo variations",
            "Color palette and typography recommendations",
            "Scalable vector and web-ready exports",
            "Brand usage and spacing guidelines",
            "Social profile and presentation-ready logo pack"
        ],
        clientBenefits: [
            "Stronger first impression and trust with a premium visual identity.",
            "Consistent branding across digital products, campaigns, and sales materials.",
            "Clear differentiation from competitors in crowded markets.",
            "Faster creative execution with reusable brand assets and standards."
        ],
        salesImpact: [
            "Improved lead confidence during first brand interaction.",
            "Higher campaign performance through consistent visual identity.",
            "Better conversion support from stronger professional perception.",
            "Greater recall value that improves repeat engagement and referrals."
        ],
        faqs: [
            { q: "Can you design a logo that fits both digital and print usage?", a: "Yes. We deliver scalable vector formats and usage standards so your logo performs correctly across websites, social media, packaging, and print assets." },
            { q: "Do you provide multiple concept options?", a: "Yes. We provide curated concept directions and refine the selected route into a final production-ready identity." },
            { q: "Will I receive all source files and brand guidelines?", a: "Absolutely. Final delivery includes editable source files, export packs, and clear usage guidelines for your internal or external teams." }
        ]
    },
    "social-media-marketing": {
        title: "Social Media Marketing",
        overview: "We help businesses grow their brand presence and engagement across social platforms.",
        techStack: ["Meta Business Suite", "Hootsuite", "Canva", "Adobe Premiere", "Analytics"],
        typesTitle: "Platforms We Manage",
        types: [
            "Instagram",
            "Facebook",
            "LinkedIn",
            "YouTube (Optional)"
        ],
        processTitle: "Our Social Media Strategy Process",
        process: [
            { step: "Brand Analysis", desc: "Auditing current social presence and identifying key differentiating factors to highlight across online channels." },
            { step: "Content Planning", desc: "Curating a comprehensive monthly content calendar that perfectly aligns with your promotional cycle and goals." },
            { step: "Creative Design", desc: "Designing thumb-stopping visuals, carousels, and video snippets tailored to network-specific algorithmic preferences." },
            { step: "Posting & Scheduling", desc: "Deploying content at statistically optimal times using advanced automation and publishing tools." },
            { step: "Engagement Monitoring", desc: "Proactively managing community feedback, sparking conversations, and fostering loyalty." },
            { step: "Performance Tracking", desc: "Synthesizing data into actionable monthly reports demonstrating audience growth and key demographic shifts." }
        ],
        timeline: [
            "Minimum Strategy Plan – 1 Month",
            "Growth Campaign – 3 Months+"
        ],
        timelineNote: "",
        whatYouGet: [
            "Monthly Content Calendar",
            "Professional Post Designs",
            "Growth Strategy",
            "Engagement Reports",
            "Audience Insights"
        ],
        clientBenefits: [
            "Consistent brand visibility with platform-specific content execution.",
            "Stronger audience trust through regular communication and community handling.",
            "Improved content planning through data-backed topic and format strategy.",
            "Greater operational clarity with monthly reporting and decision insights."
        ],
        salesImpact: [
            "Increased inbound leads through targeted social funnel campaigns.",
            "Better conversion from social traffic with creative and offer alignment.",
            "Higher remarketing efficiency using audience behavior signals.",
            "Improved customer lifetime value through engagement-led retention programs."
        ],
        faqs: [
            { q: "Which social media platforms do you manage?", a: "We primarily focus on high-engagement networks like Instagram, Facebook, and LinkedIn, rigorously tailoring our content strategy to match the unique audience on each platform." },
            { q: "Do you create the posts, graphics, and videos?", a: "Yes, our in-house creative design team crafts all graphics, carousels, and video snippets required for your monthly content calendar." },
            { q: "How do you actively measure campaign success?", a: "We track key performance indicators (KPIs) like engagement rate, follower growth, organic reach, and ultimately, outbound link conversions, delivering highly transparent monthly reports." }
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        overview: "We provide data-driven marketing strategies focused on conversions and measurable growth.",
        techStack: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "Ahrefs", "Mailchimp"],
        typesTitle: "Digital Marketing Services",
        types: [
            "SEO (Search Engine Optimization)",
            "Google Ads Campaigns",
            "Meta Ads (Facebook & Instagram Ads)",
            "Lead Generation Campaigns",
            "Conversion Optimization"
        ],
        processTitle: "Digital Marketing Workflow",
        process: [
            { step: "Market & Competitor Research", desc: "Dissecting competitor ad strategies and keyword targeting grids to identify unexploited market opportunities." },
            { step: "Strategy Planning", desc: "Allocating media budgets across primary channels with a sole mathematical focus on maximizing Return on Ad Spend (ROAS)." },
            { step: "Campaign Setup", desc: "Building the digital infrastructure including tracking pixels, conversion funnels, and dynamic ad creatives." },
            { step: "A/B Testing", desc: "Running multivariate tests pitting headlines, visuals, and targeting arrays against one another to identify peak performers." },
            { step: "Optimization", desc: "Cruelly cutting underperforming ad sets and scaling budgets aggressively into highly profitable audiences." },
            { step: "Analytics & Reporting", desc: "Delivering fully transparent dashboards showcasing real-time Cost Per Lead (CPL) and Customer Acquisition metrics." }
        ],
        timeline: [
            "SEO – 3 to 6 Months (Minimum)",
            "Paid Ads – 1 Month+",
            "Lead Campaigns – Ongoing Optimization"
        ],
        timelineNote: "",
        whatYouGet: [
            "ROI-Focused Campaign Strategy",
            "Transparent Reporting",
            "Performance Analytics",
            "Conversion Tracking Setup",
            "Scalable Growth Plan"
        ],
        clientBenefits: [
            "Measurable growth model with clear channel accountability and budget discipline.",
            "Faster optimization cycles through real-time campaign performance monitoring.",
            "Reduced wasted spend with data-backed audience and keyword targeting.",
            "Executive-level visibility via transparent reporting and growth planning."
        ],
        salesImpact: [
            "Higher qualified lead volume through precision targeting and funnel optimization.",
            "Lower cost-per-acquisition by scaling top-performing campaigns only.",
            "Improved sales closure with high-intent traffic and better conversion journeys.",
            "Compounding revenue growth from integrated SEO + paid media strategy."
        ],
        faqs: [
            { q: "How quickly can I securely see results from digital marketing?", a: "Paid advertising pipelines (Google/Meta Ads) can generate high-intent leads within days. Organic strategies like SEO generally take 3-6 months to show significant compounding growth." },
            { q: "What is your core approach to paid advertising?", a: "We utilize highly targeted, hyper-specific data-driven campaigns focused exclusively on maximizing your Return on Ad Spend (ROAS) rather than just generating vanity clicks." },
            { q: "Do you handle all campaign adjustments and daily optimizations?", a: "Yes, we continuously monitor multi-channel performance, running mathematical A/B tests on ad creatives and adjusting targeting parameters daily to ensure absolute peak efficiency." }
        ]
    },
    "erp-development": {
        title: "ERP Development",
        overview: "We build custom Enterprise Resource Planning (ERP) systems designed to automate your business operations and maximize efficiency.",
        techStack: ["React.js", "Node.js", "PostgreSQL", "AWS", "Docker", "Python"],
        typesTitle: "ERP Modules We Specialize In",
        types: [
            "Inventory & Supply Chain Management",
            "Human Resource Management (HRM)",
            "Customer Relationship Management (CRM)",
            "Financial & Accounting Systems",
            "Project & Task Management",
            "Production & Manufacturing Control",
            "Custom Business Intelligence Dashboards"
        ],
        processTitle: "Our ERP Development Process",
        process: [
            { step: "Discovery & Business Audit", desc: "We perform a deep-dive audit of your current analog or legacy digital workflows to identify automation bottlenecks." },
            { step: "Architecture Design", desc: "Drafting a secure, multi-tenant database schema and scalable system architecture tailored to your specific logic." },
            { step: "Module Development", desc: "Building core modules iteratively with a focus on data integrity, high-load performance, and user permission layers." },
            { step: "Integration & API Setup", desc: "Seamlessly connecting the ERP with your existing tools, payment gateways, and third-party logistics providers." },
            { step: "Security hardening & QA", desc: "Rigorous penetration testing and data validation to ensure enterprise-grade security for your corporate data." },
            { step: "Training & Deployment", desc: "We manage the rollout across your organization and provide hands-on training for your staff and admins." }
        ],
        timeline: [
            "MVP ERP Core – 6 to 8 Weeks",
            "Standard Enterprise Suite – 10 to 14 Weeks",
            "Advanced Multi-Vertical System – 16+ Weeks"
        ],
        timelineNote: "(ERP timelines depend heavily on the number of custom modules required.)",
        whatYouGet: [
            "Custom Modular Architecture",
            "Role-Based Access Control (RBAC)",
            "Real-Time Data Analytics",
            "Automated reporting Engines",
            "Full System Documentation",
            "Admin & Staff Training"
        ],
        clientBenefits: [
            "Unified operations across departments with cleaner process governance.",
            "Higher team productivity through workflow automation and reduced manual effort.",
            "Improved decision quality from centralized real-time data visibility.",
            "Long-term system reliability with secure architecture and governance controls."
        ],
        salesImpact: [
            "Better pipeline management through integrated CRM and lead lifecycle tracking.",
            "Faster quote-to-order turnaround with streamlined internal workflows.",
            "Improved revenue forecasting from consolidated operational and sales data.",
            "Higher retention through more reliable service delivery and customer response cycles."
        ],
        faqs: [
            { q: "Can the ERP be integrated with our existing software?", a: "Yes, we build our ERPs with a robust API-first approach, allowing seamless integration with your existing CRMs, accounting software, and external services." },
            { q: "Is the data secure within the custom ERP?", a: "Security is our highest priority for enterprise systems. We implement multi-layered encryption, secure authentication, and regular security audits to protect your business data." },
            { q: "Do you offer post-deployment maintenance?", a: "Absolutely. We provide dedicated support packages for system scaling, security updates, and new module additions as your business grows." }
        ]
    }
};
