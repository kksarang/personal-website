
export const materialTopics = [
    // FLUTTER TOPICS
    {
        slug: 'widget-lifecycle',
        title: 'Widget Lifecycle',
        description: 'Deep dive into initState, didUpdateWidget, and dispose with visual examples.',
        category: 'Flutter',
        iconName: 'Layers',
        color: 'indigo',
        lastUpdated: 'Jan 10, 2026',
        difficulty: 'Intermediate',
        readTime: '10 min read',
        sections: [
            {
                type: 'text',
                title: 'Introduction',
                content: 'Understanding the lifecycle of a StatefulWidget is crucial for managing resources, API calls, and animations. The lifecycle dictates how a widget is built, updated, and destroyed.'
            },
            {
                type: 'code',
                title: 'The Lifecycle Map',
                language: 'dart',
                content: 'Here is the typical order of execution for a StatefulWidget:',
                code: `class LifecycleDemo extends StatefulWidget {
  @override
  _LifecycleDemoState createState() => _LifecycleDemoState();
}

class _LifecycleDemoState extends State<LifecycleDemo> {
  @override
  void initState() {
    super.initState();
    print("1. initState: Called once when widget is inserted into tree.");
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print("2. didChangeDependencies: Called after initState or when inherited widget changes.");
  }

  @override
  Widget build(BuildContext context) {
    print("3. build: Called to render the UI.");
    return Container();
  }

  @override
  void dispose() {
    print("4. dispose: Called when widget is permanently removed.");
    super.dispose();
  }
}`
            },
            {
                type: 'text',
                title: 'Best Practices',
                content: 'Always unsubscribe from streams and controllers in the `dispose` method to prevent memory leaks. API calls should generally be triggered in `initState`.'
            }
        ]
    },
    {
        slug: 'state-management',
        title: 'State Management',
        description: 'Comparison of Provider, Riverpod, and Bloc with code samples.',
        category: 'Flutter',
        iconName: 'Database',
        color: 'indigo',
        lastUpdated: 'Jan 08, 2026',
        difficulty: 'Advanced',
        readTime: '15 min read',
        sections: [
            {
                type: 'text',
                title: 'Why State Management?',
                content: 'As apps grow, passing data via callbacks and constructors (prop drilling) becomes unmanageable. State management solutions decouple business logic from UI code.'
            },
            {
                type: 'code',
                title: 'Riverpod Example',
                language: 'dart',
                content: 'Riverpod is a modern compile-safe rewrite of Provider. Here is a simple counter provider:',
                code: `// 1. Create a provider
final counterProvider = StateProvider<int>((ref) => 0);

// 2. Consume in UI
class CounterPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Watch the value
    final count = ref.watch(counterProvider);

    return Scaffold(
      body: Center(child: Text('$count')),
      floatingActionButton: FloatingActionButton(
        // Read and modify
        onPressed: () => ref.read(counterProvider.notifier).state++,
        child: Icon(Icons.add),
      ),
    );
  }
}`
            }
        ]
    },
    {
        slug: 'clean-architecture',
        title: 'Clean Architecture',
        description: 'Folder structure, domain layer, data layer, and presentation logic separation.',
        category: 'Flutter',
        iconName: 'Layers',
        color: 'indigo',
        lastUpdated: 'Dec 25, 2025',
        difficulty: 'Expert',
        readTime: '20 min read',
        sections: [
            {
                type: 'text',
                title: 'The Layers',
                content: 'Clean Architecture divides the project into three main layers: Presentation, Domain, and Data. Dependencies only point inwards.'
            },
            {
                type: 'code',
                title: 'Folder Structure',
                language: 'text',
                content: 'A typical scalable folder structure looks like this:',
                code: `lib/
├── core/              # Type definitions, failures, usecases
│   ├── error/
│   └── usecases/
├── features/          # Feature-based separation
│   ├── auth/
│   │   ├── data/
│   │   │   ├── datasources/
│   │   │   ├── models/
│   │   │   └── repositories/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── usecases/
│   │   └── presentation/
│   │       ├── bloc/
│   │       └── pages/
└── main.dart`
            }
        ]
    },
    {
        slug: 'responsive-ui',
        title: 'Responsive UI',
        description: 'Handling multiple screen sizes using MediaQuery and LayoutBuilder.',
        category: 'Flutter',
        iconName: 'Smartphone',
        color: 'indigo',
        lastUpdated: 'Jan 02, 2026',
        difficulty: 'Beginner',
        readTime: '8 min read',
        sections: [
            {
                type: 'text',
                title: 'MediaQuery vs LayoutBuilder',
                content: 'Use `MediaQuery` for full-screen decisions (e.g., "is this a tablet?"). Use `LayoutBuilder` for component-level responsiveness (e.g., "how much space does this widget have parent?").'
            },
            {
                type: 'code',
                title: 'Responsive Builder Pattern',
                language: 'dart',
                content: 'A helper widget to switch layouts easily:',
                code: `class ResponsiveLayout extends StatelessWidget {
  final Widget mobile;
  final Widget tablet;
  final Widget desktop;

  const ResponsiveLayout({
    required this.mobile,
    required this.tablet,
    required this.desktop,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1100) {
          return desktop;
        } else if (constraints.maxWidth >= 650) {
          return tablet;
        } else {
          return mobile;
        }
      },
    );
  }
}`
            }
        ]
    },


    // ANDROID TOPICS
    {
        slug: 'activity-lifecycle',
        title: 'Activity Lifecycle',
        description: 'Understanding the core Android lifecycle events and restoring state.',
        category: 'Android',
        iconName: 'Smartphone',
        color: 'green',
        lastUpdated: 'Jan 10, 2026',
        difficulty: 'Beginner',
        readTime: '12 min read',
        sections: [
            {
                type: 'text',
                title: 'The 7 Callbacks',
                content: 'Android Activities cycle through: onCreate, onStart, onResume (Active), onPause, onStop, onRestart, and onDestroy.'
            },
            {
                type: 'code',
                title: 'Kotlin Lifecycle Logging',
                language: 'kotlin',
                content: 'It is useful to log these events to understand user flow:',
                code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("TAG", "onCreate: UI Setup")
    }

    override fun onResume() {
        super.onResume()
        Log.d("TAG", "onResume: User interacting")
    }

    override fun onPause() {
        super.onPause()
        Log.d("TAG", "onPause: Semi-background / Losing focus")
    }
}`
            }
        ]
    },
    {
        slug: 'mvvm-architecture',
        title: 'MVVM Architecture',
        description: 'Implementing Model-View-ViewModel with ViewModel and LiveData/Flow.',
        category: 'Android',
        iconName: 'Layers',
        color: 'green',
        lastUpdated: 'Jan 05, 2026',
        difficulty: 'Intermediate',
        readTime: '15 min read',
        sections: [
            {
                type: 'text',
                title: 'Separation of Concerns',
                content: 'MVVM separates the UI (Activity/Fragment) from the data logic. The ViewModel holds the state and survives configuration changes (like rotation).'
            },
            {
                type: 'code',
                title: 'ViewModel with StateFlow',
                language: 'kotlin',
                content: 'Modern Android apps use StateFlow instead of LiveData for reactive UI updates.',
                code: `class UserViewModel(private val repository: UserRepository) : ViewModel() {

    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    fun fetchUser() {
        viewModelScope.launch {
            try {
                val user = repository.getUser()
                _uiState.value = UiState.Success(user)
            } catch (e: Exception) {
                _uiState.value = UiState.Error(e.message)
            }
        }
    }
}`
            }
        ]
    },
    {
        slug: 'coroutines-flow',
        title: 'Coroutines & Flow',
        description: 'Asynchronous programming best practices in Kotlin.',
        category: 'Android',
        iconName: 'Zap',
        color: 'green',
        lastUpdated: 'Dec 20, 2025',
        difficulty: 'Advanced',
        readTime: '20 min read',
        sections: [
            {
                type: 'text',
                title: 'Suspending Functions',
                content: 'Coroutines allow writing async code sequentially. `suspend` functions can suspend execution without blocking the main thread.'
            },
            {
                type: 'code',
                title: 'Flow Basics',
                language: 'kotlin',
                content: 'Flow is a cold stream of data that emits values sequentially.',
                code: `fun simpleFlow(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100) // Simulate work
        emit(i) // Emit value
    }
}

// Collecting
lifecycleScope.launch {
    simpleFlow().collect { value -> 
        println(value) 
    }
}`
            }
        ]
    },
    {
        slug: 'dependency-injection',
        title: 'Dependency Injection',
        description: 'Setting up Hilt/Dagger for scalable Android applications.',
        category: 'Android',
        iconName: 'Box',
        color: 'green',
        lastUpdated: 'Jan 01, 2026',
        difficulty: 'Expert',
        readTime: '25 min read',
        sections: [
            {
                type: 'text',
                title: 'Why Hilt?',
                content: 'Hilt is built on top of Dagger to simplify dependency injection in Android. It provides standard components and scopes.'
            },
            {
                type: 'code',
                title: 'Hilt Module Setup',
                language: 'kotlin',
                content: 'Providing singletons like Retrofit or Database instances:',
                code: `@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @Provides
    @Singleton
    fun provideRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl("https://api.example.com")
            .build()
    }
}`
            }
        ]
    }
];
