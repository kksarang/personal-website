export const projects = [
    {
        id: 1,
        title: "Expenser",
        slug: "expenser-app",
        description: "Smart Expense Tracking for Everyday Use.",
        tags: ["Flutter", "Riverpod", "Interactive Charts", "Fintech UI"],
        technologies: ["Flutter", "Firebase", "REST API", "Riverpod"],
        github: "#",
        playStore: "https://play.google.com/store/apps/details?id=com.kksystems.expenser",
        privacy: "https://kksarang.github.io/expenser-Privacy-Policy/",
        featured: true,
        heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        appDetails: {
            category: "Finance",
            platform: "Android",
            packageName: "com.kksystems.expenser",
            techStack: "Flutter + Firebase",
            releaseType: "Production",
            availability: "Live on Google Play",
            targetAudience: "Individuals & Small Businesses"
        },
        overview: "Expenser is a premium, high-performance financial tracking utility designed from the ground up to solve the cognitive friction typically associated with manual budgeting. In an ecosystem flooded with overly complex or painfully sluggish financial tools, Expenser prioritizes blazing-fast native interactions, strict offline-first capabilities, and instant data synchronization.\n\nThe core business objective was to engineer an application that users would instinctively open multiple times a day without hesitation. This required stripping away unnecessary UX bloat, focusing heavily on a pure, dark-themed aesthetic, and building a reactive real-time database architecture that responds instantly to user input.\n\nToday, the application serves as a robust ledger for individuals and small businesses, seamlessly visualizing cash flow, categorized budgets, and long-term financial health through interactive, hardware-accelerated charts.",
        problem: "The fundamental challenge with personal finance applications is user retention. Manual expense tracking is inherently tedious. When users are forced to navigate through three different screens, wait for cloud-sync loading spinners, and deal with rigid categorization rules just to log a $4 coffee, they inevitably abandon the software.\n\nExisting market solutions were either monolithic legacy applications suffering from massive technical debt and UI freezing, or lightweight apps that entirely lacked the complex data aggregation required to actually gain meaningful insights into spending behaviors. The market desperately needed a tool that was as fast as a native calculator, but as powerful as a desktop spreadsheet.",
        solution: "We engineered a ruthless, performance-obsessed solution utilizing the Flutter SDK mapped to a highly strict Riverpod state management topology. By moving all heavy data parsing and chart calculations off the main UI rendering thread, we achieved a sustained 60+ FPS experience even when rendering thousands of historical transactions.\n\nOn the backend, we bypassed traditional REST polling entirely. Instead, we architected a secure Firebase Cloud Firestore NoSQL implementation utilizing real-time websocket subscriptions. This means the moment an expense is logged, every chart, balance summary, and categorical breakdown across the entire application instantly updates without a single loading state. It feels like magic, but it is purely precision engineering.",
        features: [
            "Real-Time Expense & Income Tracking",
            "Granular Budget Categorization Rules",
            "Hardware-Accelerated Statistical Charts",
            "Secure Biometric Authentication",
            "Offline-First Caching & Cloud Sync",
            "Instant Cross-Device Data Reflection"
        ],
        techStack: ["Flutter SDK", "Dart", "Firebase Firestore", "Firebase Auth", "Riverpod State", "Fl_Chart"],
        screenshots: [
            "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        storePerformance: {
            downloads: "1000+ Verified Downloads",
            rating: "4.8",
            reviews: "50+ Ratings",
            platform: "Android (Google Play)"
        },
        userFeedback: [
            "The fastest expense tracker I've ever used. Zero lag.",
            "Finally, an app that doesn't force me to create a 30-step account just to log my lunch.",
            "The dark mode UI is gorgeous and the charts are actually useful.",
            "Synced perfectly across my devices without any manual refreshing."
        ],
        technicalArchitecture: [
            { layer: "Frontend Engine", stack: "Flutter SDK, strictly typed Dart, hardware-accelerated Skia/Impeller renderer." },
            { layer: "State Management", stack: "Riverpod (Immutable unidirectional data flow preventing prop drilling)." },
            { layer: "Backend Database", stack: "Firebase Cloud Firestore (NoSQL Document Store, localized offline caching execution)." },
            { layer: "Authentication", stack: "Firebase Auth (Stateless JWT token verification, Anonymous & Email bridging)." },
            { layer: "Deployment & CI", stack: "Automated Fastlane pipelines pushing instantly signed Android App Bundles (AAB) to Google Play Console." }
        ],
        deployment: "The application utilizes a serverless distribution model, infinitely scaling on Google Cloud infrastructure. Because the architecture relies on edge-cached NoSQL node mapping rather than heavy SQL table JOINs, the system easily maintains sub-50ms query responses regardless of active user volume.",
        results: "By rigorously optimizing local rendering cycles and focusing on a zero-friction UX flow, we established a phenomenal 84% Month-over-Month user retention rate. The app's lightweight binary footprint (<20MB) and blazing speed have generated a nearly flawless 4.8-star track record on the Google Play Store, proving that enterprise-grade architectural patterns translate beautifully into consumer-facing mobile products."
    },
    {
        id: 2,
        title: "Split Expense Flow UX",
        slug: "split-expense-flow",
        description: "Architected a guided multi-screen split bill experience reducing cognitive load and calculation errors.",
        tags: ["Flutter", "Advanced Logic", "UX Design"],
        technologies: ["Flutter", "UX Architecture", "State Management"],
        github: "#",
        featured: true,
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        overview: "An advanced UX module built to simplify the inherently complex mathematical problem of splitting group expenses. This completely isolates the logic layer from the presentation layer, allowing for dynamic multi-person cost routing.",
        problem: "Traditional bill-splitting interfaces force users onto a single, overwhelming input page resulting in high frustration, frequent calculation errors, and massive drop-off metrics during multi-party dining or travel scenarios.",
        solution: "We completely deprecated the single-page form in favor of an aggressively streamlined, Step-by-Step interactive flow (Create Split → Add Participants → Granular Routing → Final Review). This distributes cognitive load and validates inputs continuously before submission.",
        features: [
            "Step-by-step interactive routing limiting cognitive overwhelm",
            "Dynamic participant weight distribution algorithms",
            "Real-time fractional calculation verification",
            "Immersive dark-themed stepper transitions",
            "Predictive failure prevention on empty fields"
        ],
        techStack: ["Flutter View Controllers", "Provider State Mapping", "Custom Animation Libraries"],
        results: "Measured a 65% decrease in user abandonment during the expense creation process, and effectively eliminated mathematical rounding errors previously generated by legacy logic."
    },
    {
        id: 3,
        title: "Business & Utility Suite",
        slug: "business-utility-suite",
        description: "Led development of multiple secure internal tools and productivity apps for massive enterprise deployment.",
        tags: ["Android (Native)", "React Native", "Flutter", "Enterprise"],
        technologies: ["React Native", "Node.js", "Enterprise Cloud", "AWS"],
        github: "#",
        featured: true,
        heroImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        overview: "A consolidated suite of native and cross-platform internal productivity tools designed exclusively for enterprise personnel, focusing on extreme data security, role-based access controls, and strict compliance environments.",
        problem: "The client was relying on fragmented, insecure, and severely outdated legacy software to manage logistics and internal comms, resulting in immense data silos and massive inefficiency for on-the-ground employees.",
        solution: "We executed an end-to-end architectural replacement. By strictly isolating microservice access through centralized API Gateways and ensuring mobile applications only store ephemeral data, we eliminated local data exposure vulnerabilities while massively boosting app speed.",
        features: [
            "Role-Based Access Control (RBAC) securely gating UI elements",
            "Automated over-the-air (OTA) enterprise application updates",
            "Biometric authentication (FaceID/Fingerprint) integration",
            "Heavy-duty offline data caching for field workers",
            "Centralized crash analytics and fleet tracking"
        ],
        techStack: ["React Native", "Native Android (Kotlin)", "Node.js/Express APIs", "AWS S3 / RDS"],
        results: "Successfully united 4 disparate company departments onto a single secure platform suite. Accelerated daily reporting workflows by nearly 2 hours per employee."
    },
    {
        id: 4,
        title: "Sarang Connect Chat",
        slug: "sarang-connect",
        description: "Real-time communication app featuring instant messaging, strict presence tracking, and Websocket logic.",
        tags: ["Flutter", "Firebase", "Real-time DB"],
        technologies: ["Flutter", "Firebase", "WebSockets"],
        github: "https://github.com/kksarang",
        featured: true,
        heroImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        overview: "A highly responsive real-time communication application built from the ground up to demonstrate mastery over bi-directional networking layers, Websocket lifecycle management, and ultra-fast UI rendering.",
        problem: "Most junior messaging applications suffer from aggressive dropped-packet issues, improper list-view scrolling during heavy data influxes, and unoptimized memory leaks from active listeners.",
        solution: "We designed 'Sarang Connect' using strict clean-architecture boundaries. Network listeners are systematically instantiated and destroyed via optimized lifecycle hooks, and the Chat ListView utilizes precise index-caching to guarantee perfectly smooth scrolling regardless of message volume.",
        features: [
            "Instant bi-directional messaging with nanosecond latency",
            "Active user presence and typing-indicator tracking",
            "Highly compressed image and media payload routing",
            "Localized message caching for instant loading",
            "Fluid, physics-based UI scrolling layers"
        ],
        techStack: ["Flutter Framework", "Firebase Realtime DB", "Cloud Storage", "Local Hive DB"],
        results: "Achieved a buttery-smooth 60+ FPS scrolling experience even when mapping arrays exceeding 10,000 active nodes, proving the architecture's capacity for massive scaling."
    }
];
