import { Terminal, Smartphone, Database, Layers, Code2 } from 'lucide-react';

export const learningData = [
    {
        slug: 'flutter-advanced-architecture',
        title: 'Flutter Advanced Architecture',
        description: 'Master clean architecture, SOLID principles, and scalable app structure in Flutter.',
        level: 'Advanced',
        duration: '15 Lessons',
        icon: Smartphone,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        overview: 'This comprehensive course dives deep into architecting large-scale Flutter applications. We move beyond the basics of widgets and state management to explore maintainable code structures, separation of concerns, and testing strategies.',
        modules: [
            { title: 'The Layers of Clean Architecture', duration: '45 min', status: 'Completed' },
            { title: 'Implementing Domain Layer', duration: '60 min', status: 'Locked' },
            { title: 'Data Layer & Repositories', duration: '55 min', status: 'Locked' },
            { title: 'Presentation Layer & State', duration: '50 min', status: 'Locked' },
            { title: 'Dependency Injection with GetIt', duration: '40 min', status: 'Locked' },
        ],
        techStack: ['Flutter', 'Dart', 'Riverpod', 'Freezed'],
        whatYouWillLearn: [
            'Implement Clean Architecture from scratch',
            'Manage complex state with Riverpod',
            'Write unit and widget tests',
            'Handle errors and data mapping'
        ]
    },
    {
        slug: 'react-native-bridging',
        title: 'React Native Bridging',
        description: 'Learn how to communicate between JavaScript and Native Android/iOS code.',
        level: 'Intermediate',
        duration: '10 Lessons',
        icon: Layers,
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
        overview: 'Unlock the full potential of React Native by learning how to bridge native modules. This course covers the JSI, TurboModules, and the legacy bridge, empowering you to specific platform features.',
        modules: [
            { title: 'Understanding the Bridge', duration: '30 min', status: 'Completed' },
            { title: 'Writing Android Native Modules', duration: '55 min', status: 'Locked' },
            { title: 'Writing iOS Native Modules', duration: '55 min', status: 'Locked' },
            { title: 'JSI & TurboModules Intro', duration: '45 min', status: 'Locked' },
        ],
        techStack: ['React Native', 'Kotlin', 'Swift', 'JSI'],
        whatYouWillLearn: [
            'Create custom Native Modules',
            'Pass data between JS and Native',
            'Optimize performance with JSI',
            'Debug native crashes'
        ]
    },
    {
        slug: 'android-jetpack-compose',
        title: 'Modern Android with Compose',
        description: 'Transition from XML to the modern declarative UI toolkit for Android.',
        level: 'Intermediate',
        duration: '20 Lessons',
        icon: Terminal,
        color: 'text-green-500',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        overview: 'Jetpack Compose is the future of Android UI. This course takes you through the paradigm shift of declarative UI, state hoisting, and side effects in Compose, enabling you to build beautiful apps faster.',
        modules: [
            { title: 'Thinking in Compose', duration: '40 min', status: 'Completed' },
            { title: 'State Hoisting Patterns', duration: '50 min', status: 'Locked' },
            { title: 'Composition Locals', duration: '35 min', status: 'Locked' },
            { title: 'Animation APIs', duration: '60 min', status: 'Locked' },
        ],
        techStack: ['Kotlin', 'Jetpack Compose', 'Material 3'],
        whatYouWillLearn: [
            'Build complex UIs with Composables',
            'Manage state effectively',
            'Migrate existing Views to Compose',
            'Create custom themes and animations'
        ]
    }
];
