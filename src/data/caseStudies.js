export const caseStudies = [
    {
        slug: 'expenser-app',
        title: 'Expenser - Enterprise Grade Financial Tracking',
        subtitle: 'A scalable, offline-first expense tracking solution used by 10k+ users.',
        oneLineValue: 'Empowering users to take control of their financial health through intelligent, offline-first tracking.',
        category: 'Fintech Mobile Application',
        industry: 'Finance & Productivity',
        status: 'Live on Play Store',
        heroImage: 'gradient-indigo',
        color: 'indigo',

        // Identity Badges (Hero)
        badges: ['Offline First', 'Secure', 'Analytics', '10k+ Users'],

        // Section 2: Deep Introduction
        detailedIntro: {
            title: 'Redefining Personal Finance Management',
            story: "In a market saturated with complex accounting software and overly simple note-taking apps, Expenser was born from a personal need: a balanced tool that respects the user's time. We realized that for an expense tracker to be effective, it must be faster than the act of spending itself. The goal was not just to record numbers, but to change financial behavior through frictionless interaction and immediate feedback."
        },

        // Section 3: Business & Technical Analysis
        businessAnalysis: {
            problem: "Traditional expense trackers failed in two key areas: Latency and Connectivity. Users often make purchases in areas with poor signal, and waiting for a cloud sync blocks the UI. Additionally, privacy concerns around financial data made users hesitant to trust cloud-only solutions.",
            solution: "We engineered a 'Local-First' architecture using SQLite. All data is persisted instantly on the device, ensuring zero-latency interactions. Background workers handle cloud synchronization only when optimal, guaranteeing data integrity without compromising the user experience.",
            impact: "This approach reduced the 'Time-to-Log' metric by 60%, resulting in higher sustained user engagement over 3 months compared to competitor benchmarks."
        },

        challenges: [
            {
                title: 'Offline-First Synchronization',
                description: 'Designing a conflict-resolution strategy for multi-device sync without a central authority during offline edits.',
                icon: 'Cloud',
                solution: 'Implemented a Last-Write-Wins (LWW) strategy with vector clocks for edge cases, ensuring data consistency eventually.'
            },
            {
                title: 'Complex Recurrence Scheduling',
                description: 'Users needed flexible recurring payments (e.g., "Every 2nd Tuesday") which standard cron-jobs couldn\'t handle efficiently on-device.',
                icon: 'Zap',
                solution: 'Built a custom Dart-based scheduling engine that projects future instances without cluttering the database.'
            },
            {
                title: 'Data Privacy at Scale',
                description: 'Ensuring GDPR compliance and secure encryption for thousands of users without performance degradation.',
                icon: 'Lock',
                solution: 'Utilized SQLCipher for database encryption and secure hardware-backed storage for encryption keys.'
            }
        ],

        // Section 4: Role & Ownership
        role: {
            title: 'Mobile Architecture Lead',
            summary: 'I led the end-to-end mobile development lifecycle, making critical architectural decisions and establishing engineering standards for the team.',
            responsibilities: [
                'Architected the local-first implementation using SQLite and Drift.',
                'Designed the reactive state management layer with Riverpod.',
                'Managed the CI/CD pipeline (Codemagic) for automated testing and deployment.',
                'Mentored junior developers on clean code practices and Dart optimization.'
            ]
        },

        // Section 5 & 6: Play Store & Console
        storeDetails: {
            appName: 'Expenser: Budget & Expense',
            packageName: 'com.sarang.expenser',
            downloads: '10,000+',
            rating: '4.8',
            reviews: '500+',
            releaseDate: 'Oct 2023',
            link: 'https://play.google.com/store',
            version: '2.4.1',
            lastUpdate: 'Jan 2025'
        },

        playStoreShowcase: {
            featureHighlights: [
                'Dark Mode Support',
                'Biometric Security',
                'CSV/PDF Export',
                'Custom Budget Cycles'
            ],
            screenshots: [
                '/assets/screenshots/expenser_1.png',
                '/assets/screenshots/expenser_2.png',
                '/assets/screenshots/expenser_3.png'
            ] // Note: Actual images need to be added later
        },

        // Section 7: Features Deep Dive
        features: [
            {
                title: 'Smart Dashboards',
                desc: 'Real-time aggregated views of spending vs budget, updated instantly as transactions are added.',
                icon: 'PieChart'
            },
            {
                title: 'Intelligent Split Bill',
                desc: 'Algorithms to handle complex group expenses, ensuring fair division and settled debts.',
                icon: 'Users'
            },
            {
                title: 'Automated Cloud Backup',
                desc: 'Silent, encrypted background synchronization to Google Drive for data safety.',
                icon: 'Database'
            },
            {
                title: 'Predictive Analytics',
                desc: 'Forecasting future spending based on historical data patterns.',
                icon: 'Activity'
            }
        ],

        // Section 8: Tech Stack
        techStack: [
            { name: 'Flutter', type: 'Framework', icon: 'Flutter' },
            { name: 'Dart', type: 'Language', icon: 'Code' },
            { name: 'Firebase', type: 'Backend', icon: 'Firebase' },
            { name: 'Riverpod', type: 'State Management', icon: 'Layers' },
            { name: 'SQLite', type: 'Local Database', icon: 'Database' },
            { name: 'Codemagic', type: 'CI/CD Service', icon: 'Server' }
        ],

        architectureDetails: {
            pattern: 'MVVM + Clean Architecture',
            stateManagement: 'Riverpod (Reactive)',
            navigation: 'GoRouter (Type-safe)',
            testing: 'Integration Tests & Unit Tests (80% coverage)'
        },

        // Section 10: Results
        results: {
            technical: [
                '99.9% Crash-free users',
                '< 200ms App startup time',
                '60fps consistent UI rendering'
            ],
            business: [
                '4.8 Star Average Rating',
                '15% Month-over-Month User Growth',
                'Featured in "Top Productivity" localized list'
            ]
        }
    },

    {
        slug: 'split-expense-flow',
        title: 'Split Flow - Collaborative Social Finance',
        subtitle: 'Redefining group expense management with a guided, collaborative user experience.',
        oneLineValue: 'Removing the friction from social payments through intuitive design and smart logic.',
        category: 'Social Utility',
        industry: 'Social & Productivity',
        status: 'Internal Beta',
        heroImage: 'gradient-purple',
        color: 'purple',

        badges: ['Social Graph', 'Real-time', 'Complex Logic'],

        detailedIntro: {
            title: 'Socializing Financial Transactions',
            story: "Splitting bills is inherently social, yet most apps treat it as a cold transaction. Split Flow was designed to bridge this gap, turning the awkward 'who owes what' conversation into a transparent, collaborative, and even enjoyable process."
        },

        businessAnalysis: {
            problem: "The cognitive load of splitting bills among large groups with varying shares is high. Existing tools required manual entry that was prone to error. Users wanted a system that could 'guide' them through the math.",
            solution: "We developed a 'Wizard-based' interface that breaks down the complexity into digestible steps. By incorporating a state machine for the form flow, we ensure that users can never enter an invalid state.",
            impact: "Internal testing showed a 50% reduction in time taken to settle a 10-person dinner bill compared to standard calculator apps."
        },

        challenges: [
            {
                title: 'Multi-Step Form State Management',
                description: 'Managing dependencies between steps (e.g., removing a user in step 2 must invalidate splits in step 3).',
                icon: 'Layers',
                solution: 'Utilized a finite state machine pattern within the BLoC architecture to strictly enforce valid transitions and data integrity.'
            },
            {
                title: 'Deep Linking for Invitations',
                description: 'Seamlessly onboarding new users who receive a split link via WhatsApp.',
                icon: 'Share',
                solution: 'Implemented Firebase Dynamic Links to auto-navigate users to the specific expense group upon install.'
            }
        ],

        role: {
            title: 'Senior Flutter Developer',
            summary: 'Focused on the core logic engine and the "Wizard" UI component, ensuring a seamless user journey.',
            responsibilities: [
                'Built the complex forms logic algorithm.',
                'Implemented deep linking capabilities.',
                'Optimized UI performance for large lists of contacts.'
            ]
        },

        storeDetails: {
            appName: 'Split Flow',
            packageName: 'com.sarang.splitflow',
            downloads: 'Internal',
            rating: 'N/A',
            reviews: 'N/A',
            releaseDate: 'Pending',
            link: 'https://play.google.com/store',
            version: '0.9.0 (Beta)',
            lastUpdate: 'Feb 2025'
        },

        playStoreShowcase: {
            featureHighlights: [
                'Wizard Creation Flow',
                'WhatsApp Integration',
                'Smart Suggestions',
                'Instant Settlement'
            ],
            screenshots: [] // Placeholders
        },

        features: [
            {
                title: 'Wizard Flow',
                desc: 'A guided, step-by-step interface for creating complex splits without confusion.',
                icon: 'CheckCircle'
            },
            {
                title: 'Smart Group Suggestions',
                desc: 'Predicts which group of friends you are with based on location and history.',
                icon: 'Users'
            },
            {
                title: 'Dynamic Deep Links',
                desc: 'Share a link to instantly add friends to a bill, even if they don\'t have the app yet.',
                icon: 'Link'
            }
        ],

        techStack: [
            { name: 'Flutter', type: 'Framework', icon: 'Flutter' },
            { name: 'Dart', type: 'Language', icon: 'Code' },
            { name: 'Supabase', type: 'Backend', icon: 'Database' },
            { name: 'Bloc', type: 'State Management', icon: 'Layers' },
        ],

        architectureDetails: {
            pattern: 'Clean Architecture',
            stateManagement: 'BLoC (Business Logic Component)',
            navigation: 'Navigator 2.0',
            testing: 'Widget Tests'
        },

        results: {
            technical: [
                'Zero-state inconsistency bugs',
                '100% accurate split calculations',
            ],
            business: [
                'High adoption rate among beta tester groups',
                'Positive feedback on UI simplicity'
            ]
        }
    }
];
