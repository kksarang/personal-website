export const caseStudies = [
    {
        slug: 'expenser-app',
        title: 'Expenser - Enterprise Grade Financial Tracking',
        subtitle: 'A scalable, offline-first expense tracking solution used by 10k+ users.',
        category: 'Fintech Mobile Application',
        industry: 'Finance & Productivity',
        status: 'Live on Play Store',
        heroImage: 'gradient-indigo', // Abstract representation
        color: 'indigo',

        // Section 1: Introduction
        intro: {
            problem: "Traditional expense trackers were either too simple (lacking analytics) or too complex (requiring accounting knowledge). Users needed a daily-driver app that was fast, worked offline, and provided actionable insights.",
            solution: "We built Expenser as a 'Daily-First' application. Instead of forcing users into complex ledgers, we centered the experience around 'Daily Spending', with powerful aggregations happening in the background."
        },

        // Section 2: Business & Technical Problems
        challenges: [
            {
                title: 'Offline-First Reliability',
                description: 'Users often add expenses on the go with poor connectivity. The app needed to handle local writes and sync silently when online.',
                icon: 'Cloud'
            },
            {
                title: 'Complex Recurrence Logic',
                description: 'Handling "Every 2nd Tuesday" or "Last Friday of month" recurring subscriptions required a custom robust scheduling engine.',
                icon: 'Zap'
            },
            {
                title: 'Data privacy & Security',
                description: 'Financial data is sensitive. We needed encryption at rest and secure token management for cloud sync.',
                icon: 'Lock'
            }
        ],

        // Section 3: My Role
        role: {
            title: 'Mobile Architecture Lead',
            responsibilities: [
                'Designed the local-first database schema (SQLite/Drift).',
                'Implemented the Repository Pattern to abstract data sources.',
                'Managed the Google Play Store release tracks (Alpha -> Prod).',
                'Led the migration from Provider to Riverpod for better testability.'
            ]
        },

        // Section 4: Play Store / Console
        storeDetails: {
            appName: 'Expenser: Budget & Expense',
            downloads: '10,000+',
            rating: '4.8',
            reviews: '500+',
            releaseDate: 'Oct 2023',
            link: '#'
        },

        // Section 5: Tech Stack
        techStack: [
            { name: 'Flutter', type: 'Framework' },
            { name: 'Dart', type: 'Language' },
            { name: 'Firebase', type: 'Backend' },
            { name: 'Riverpod', type: 'State' },
            { name: 'SQLite', type: 'Local DB' },
            { name: 'Codemagic', type: 'CI/CD' }
        ],

        // Section 6: Key Features
        features: [
            {
                title: 'Smart Dashboards',
                desc: 'Real-time calculation of daily budgets vs actuals.',
                icon: 'PieChart'
            },
            {
                title: 'Split Bill Engine',
                desc: 'Advanced algorithm to handle uneven splits among groups.',
                icon: 'Users'
            },
            {
                title: 'Automated Backups',
                desc: 'Silent background sync to Google Drive.',
                icon: 'Database'
            }
        ]
    },

    {
        slug: 'split-expense-flow',
        title: 'Split Flow - Collaborative Bill Management',
        subtitle: 'Redefining how groups share expenses with a guided user experience.',
        category: 'Social Utility',
        industry: 'Social & Productivity',
        status: 'Internal Beta',
        heroImage: 'gradient-purple',
        color: 'purple',

        intro: {
            problem: "Splitting bills is awkward. Existing apps made it feel like a transaction. We wanted it to feel like a collaboration.",
            solution: "A step-by-step 'Wizard' interface that guides the user through who paid, who owes what, and settles debts instantly."
        },

        challenges: [
            {
                title: 'Dynamic Form State',
                description: 'Managing the state of a multi-step form where previous steps affect future options (e.g. removing a user in step 2 should clear their split in step 3).',
                icon: 'Layers'
            }
        ],

        role: {
            title: 'Senior Flutter Developer',
            responsibilities: [
                'Built the core wizard state machine.',
                'Implemented deep linking for sharing splits via WhatsApp.',
                'Optimized list performance for large groups.'
            ]
        },

        storeDetails: {
            appName: 'Split Flow',
            downloads: 'Internal',
            rating: 'N/A',
            reviews: 'N/A',
            releaseDate: 'Pending',
            link: '#'
        },

        techStack: [
            { name: 'Flutter', type: 'Framework' },
            { name: 'Bloc', type: 'State' },
            { name: 'Supabase', type: 'Backend' }
        ],

        features: [
            {
                title: 'Wizard Flow',
                desc: 'Guided step-by-step split creation.',
                icon: 'CheckCircle'
            },
            {
                title: 'Smart Suggestions',
                desc: 'Suggests recently drafted groups.',
                icon: 'Users'
            }
        ]
    }
];
