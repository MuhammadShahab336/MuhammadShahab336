import { Project, SkillCategory, Experience } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Expo'],
  },
  {
    title: 'State & Data fetching',
    skills: ['Redux Toolkit', 'React Query', 'Zustand', 'Context API'],
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Ant Design', 'Material UI', 'Framer Motion', 'Styled Components'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'CI/CD', 'Vite', 'Webpack', 'REST APIs', 'GraphQL', 'Jest'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    company: 'Coderchaps',
    period: 'Dec 2025 - Present',
    responsibilities: [
      'Led frontend development of a large-scale training platform serving 2,000+ active users using React.js and Next.js.',
      'Improved application performance by 40% using Next.js SSR and optimized data fetching strategies.',
      'Reduced redundant API requests by 35% through TanStack React Query caching and server-state management.',
      'Integrated Amazon IVS, Firebase, and Zoom Video SDK to support 500+ concurrent viewers across live training sessions.',
      'Built and scaled core modules including course management, virtual classrooms, ticketing systems, dashboards, and reporting tools.',
      'Reduced feature development time by 25% through reusable TypeScript-based component architecture.',
      'Collaborated with designers, backend engineers, and stakeholders to deliver multiple production releases on schedule.',
      'Mentored junior developers through code reviews and architectural guidance, reducing frontend defects by 20%.'
    ],
    technologies: ['React.js (Vite)', 'Next.js', 'NextAuth', 'Redux Toolkit', 'React Query', 'Ant Design', 'Firebase', 'Zoom Video SDK UI Toolkit', 'Amazon IVS', 'REST APIs'],
  },
  {
    id: 'exp-2',
    role: 'Web Developer',
    company: 'O3 Interfaces',
    period: 'Sep 2024 – Dec 2025',
    responsibilities: [
      'Built and maintained the UBL website using Next.js, Tailwind CSS, and Directus CMS.',
      'Reduced content publishing time by 40% through implementation of a headless CMS architecture.',
      'Developed high-performance ATM interface screens using HTML, CSS, and JavaScript.',
      'Collaborated with cross-functional teams to deliver scalable frontend solutions and improve release efficiency.'
    ],
    technologies: ['Next.js', 'JavaScript', 'TailwindCss', 'Directus CMS',],
  },
  {
    id: 'exp-3',
    role: 'Senior Frontend Developer',
    company: 'Technottix',
    period: 'Sep 2020 – Aug 2024',
    responsibilities: [
      'Developed scalable React.js and Next.js applications as part of a frontend engineering team.',
      'Improved page load performance by 30% using code splitting, lazy loading, memoization, and rendering optimizations.',
      'Implemented state management solutions using Redux and Context API.',
      'Built reusable component libraries that reduced development time by 25%.',
      'Implemented React Query and RTK Query, reducing redundant API calls and improving application responsiveness.',
      'Developed complex form workflows using React Hook Form and Ant Design Forms.',
      'Established frontend development standards and architectural best practices.',
      'Mentored junior engineers and conducted code reviews to improve code quality and maintainability.'
    ],
    technologies: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'React Bootstrap', 'React Query', 'Redux Toolkit'],
  },
  {
    id: 'exp-4',
    role: 'Junior Frontend Developer',
    company: 'CFE Solutions',
    period: 'Dec 2022 – Dec 2023',
    responsibilities: [
      'Developed core SmartFolder application features using React.js, Redux, and Ant Design.',
      'Integrated REST APIs and optimized asynchronous data handling using Redux Toolkit.',
      'Built responsive, cross-browser compatible interfaces and reusable UI components.',
      'Implemented complex form workflows and validation systems to improve data accuracy.'
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Ant Design', 'Redux', 'createAsyncThunk'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'smart-folder-application',
    title: 'Online Security Training Dashboard',
    description: 'Developed a responsive admin dashboard for an online security training platform, enabling course management, student enrollment tracking, support ticket handling, financial analytics, and real-time performance monitoring. Built with a focus on usability, scalability, and data-driven decision making. As well as developed a real-time virtual classroom experience using Zoom Video SDK and Firebase, enabling instructors and students to join live training sessions, communicate through class chat, manage attendance, and handle classroom interactions seamlessly within a secure online learning environment.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
    imageUrl: '/images/dashboard.png',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      slug: 'smart-folder-application',
      category: 'Enterprise Web Application',
      duration: '6 Months',
      role: 'Lead Frontend Developer',
      status: 'Completed',
      overview: {
        problem: 'The training organization needed a centralized platform to manage courses, track student progress, handle support requests, and monitor financial performance. Existing processes were fragmented across multiple tools, making reporting and administration inefficient.',
        requirements: [
          'Manage online security training courses and student enrollments.', 'Enable administrators to manage classes, certifications, and training records.', 'Support role-based access for administrators, instructors, support agents, and students.', 'Generate financial reports for payments, refunds, and revenue tracking.',
          'Conduct instructor-led security training sessions online.', 'Support real-time communication between instructors and students.', 'Track attendance and participation during live classes.', 'Enable seamless handling of student re-entry and late join requests.'
        ],
        goals: [
          'Centralize training operations into a single management platform.', 'Improve visibility into student progress and course completion rates.', 'Reduce administrative effort through automated reporting and analytics.', 'Enhance support efficiency with integrated ticketing and live chat systems.',
          'Replace traditional classroom interactions with a digital learning environment.', 'Improve student engagement through real-time communication.', 'Reduce administrative effort in attendance tracking.', 'Deliver a seamless virtual training experience.', 'Increase accessibility for remote learners.'
        ],
        scope: 'The project included course management, student enrollment tracking, analytics dashboards, support ticket handling, live chat monitoring, financial reporting, and role-based access control.',
      },
      contributions: [
        'UI Development',
        'API Integration',
        'State Management',
        'Performance Optimization',
        'Responsive Design',
        'Code Architecture',
        'Integrated Zoom Video SDK and Zoom Video SDK UI Toolkit.',
        'Implemented session joining and meeting management workflows.',
        'Developed real-time classroom chat functionality using Firebase.',
        'Built lesson scheduling and progress tracking interfaces.',
        'Created responsive UI components for virtual classroom management.',
        'Optimized real-time data synchronization and user experience.'
      ],
      techStackCategories: [
        {
          title: 'Frontend',
          technologies: ['React.js', 'Next.js', 'TypeScript']
        },
        {
          title: 'State Management',
          technologies: ['Redux Toolkit', 'React Query']
        },
        {
          title: 'UI Libraries',
          technologies: ['Tailwind CSS', 'Framer Motion']
        },
        {
          title: 'Tools',
          technologies: ['Git', 'GitHub', 'CI/CD']
        }
      ],
      features: [
        { title: 'Course Management ', description: 'Create, organize, and manage security training courses, classes, and learning materials from a centralized dashboard.' },
        { title: 'Student Enrollment Tracking', description: 'Monitor student registrations, course enrollments, learning progress, and completion status in real time.' },
        { title: 'Financial Reporting', description: 'View revenue, payments, refunds, and financial summaries through comprehensive reporting dashboards.' },
        { title: 'User & Role Management', description: 'Control access with role-based permissions for administrators, instructors, support staff, accountants.' },
        { title: 'Live Virtual Classroom', description: 'Join and host real-time training sessions powered by Zoom Video SDK with integrated video, audio, and screen sharing capabilities.' },
        { title: 'Real-Time Class Chat', description: 'Enable instant communication between instructors and students through live classroom messaging.' },
        { title: 'Attendance Tracking', description: 'Monitor participant join and leave activities automatically during live sessions.' },
        { title: 'Lesson Management', description: 'Display scheduled lessons, session durations, completion status, and learning progress.' },
        { title: 'Re-Entry Requests', description: 'Allow students to request rejoining sessions after disconnections or accidental exits.' },
        { title: 'Late Join Requests', description: 'Manage late attendance requests with instructor approval workflows.' },
        { title: 'Firebase Real-Time Updates', description: 'Synchronize classroom activities instantly across all participants using Firebase.' },
        { title: 'Responsive Learning Experience', description: 'Deliver a consistent classroom experience across desktop and mobile devices.' },
      ],
      challenges: [
        {
          challenge: 'Managing and displaying large volumes of student and course data efficiently.',
          solution: 'Implemented server-side pagination, filtering, and optimized API integration strategies.',
          result: 'Improved dashboard performance and reduced page load times.'
        },
        {
          challenge: 'Managing real-time classroom interactions without page refreshes.',
          solution: 'Integrated Firebase Realtime Database to synchronize chat messages, attendance updates, and classroom events instantly.',
          result: 'Delivered a smooth real-time learning experience for instructors and students.'
        },
        {
          challenge: 'Embedding a video conferencing solution directly into the learning platform.',
          solution: 'Integrated Zoom Video SDK and UI Toolkit to provide native video meeting capabilities within the application.',
          result: 'Enabled seamless live training sessions without requiring users to leave the platform.'
        },
        {
          challenge: 'Ensuring smooth performance for large lists of chat messages',
          solution: 'implemented react-virtuoso (<Virtuoso />) to efficiently render long, dynamic lists (such as chat messages) using virtualized scrolling for better performance and reduced memory usage.',
          result: 'optimized performance even under heavy chat activity.'
        }
      ],
      gallery: [
        '/images/dashboard.png',
        '/images/students.png',
        '/images/active-courses.png',
        '/images/course-detail.png',
      ],
      results: [
        { metric: 'Real-Time Responsiveness', value: '+60%', description: 'Instant updates for chat, attendance, and classroom events without page refreshes.' },
        { metric: 'UI Interaction Latency', value: '< 1.5s', description: 'Optimized rendering of large chat and activity lists using virtualization (react-virtuoso).' },
        { metric: 'Support & Manual Tracking Effort', value: '-50%', description: 'Reduced administrative workload through automated attendance and activity tracking.' }
      ],
      lessonsLearned: [
        'Advanced React rendering optimization techniques.',
        'Working with complex drag-and-drop state machines.',
        'Importance of robust TypeScript typing in large codebases.'
      ]
    }
  },
  {
    id: 'proj-2',
    slug: 'e-learning-platform',
    title: 'E-Learning & Virtual Training Platform',
    description: 'A modern online learning platform that enables students to enroll in courses, attend live virtual classes, interact with instructors, and track learning progress through a dashboard.',
    technologies: ['Next.js', 'Prisma', 'Braintree', 'React Query', 'Amazon IVS Player SDK'],
    imageUrl: '/images/home-page.png',
    liveUrl: 'https://platform.floridaonlinesecuritytraining.com',
    githubUrl: '#',
    details: {
      slug: 'e-learning-platform',
      category: 'EdTech Web Application',
      duration: '4 Months',
      role: 'Senior Frontend Developer',
      status: 'Completed',
      overview: {
        problem: 'The client needed a scalable digital learning platform that could deliver self-paced courses, live virtual training sessions, and instructor-led programs while providing a seamless learning experience across desktop and mobile devices.',
        requirements: [
          'Course catalog with advanced search and filtering', 
          'Instructor management and profile pages', 
          'Student dashboard with enrolled courses and upcoming classes',
          'Virtual classroom integration for live sessions',
          'Progress tracking and course completion certificates',
          'Authentication only for students',
          'Mobile-friendly and accessible user experience'
        ],
        goals: [
          'Deliver a scalable learning experience for thousands of students', 
          'Increase student engagement through live virtual classes',
          'Provide real-time visibility into learning progress',
          'Maintain WCAG 2.1 accessibility standards',
          'Optimize performance across web and mobile devices'
        ],
        scope: 'Frontend architecture, responsive UI development, dashboard implementation, virtual classroom integration, course management workflows, and learning progress tracking.',
      },
      contributions: [
        'Frontend Development',
        'Dashboard Implementation',
        'API Integration',
        'Performance Optimization',
        'Accessibility',
        'Video Streaming Integration'
      ],
      techStackCategories: [
        { title: 'Frontend', technologies: ['Next.js', 'NextAuth.js'] },
        { title: 'State Management', technologies: ['React Query'] },
        { title: 'UI Libraries', technologies: ['Tailwind CSS', 'Amazon IVS Player SDK'] },
        { title: 'Tools', technologies: ['Braintree', 'Vercel'] }
      ],
      features: [
        { title: 'Live Virtual Classes', description: 'Integrated Amazon IVS Player for low-latency live video streaming, enabling students to attend instructor-led virtual classes directly within the platform.' },
        { title: 'Upcoming Classes', description: 'Students can view scheduled live sessions and join classes from their dashboard' },
        { title: 'Student Dashboard', description: 'Personalized dashboard showing active courses, learning progress, certificates, and upcoming classes.' },
        { title: 'Progress Tracking', description: 'Track course completion status, completed lessons, quiz results, and certifications.' },
        { title: 'Authentication', description: 'Secure login using nextauth.js only for Students.' },
      ],
      challenges: [
        {
          challenge: 'Ensuring stable low-latency live streaming while providing a seamless user experience across different browsers and devices.',
          solution: 'Integrated Amazon IVS Player SDK with custom event listeners, loading states, error handling, and adaptive playback strategies to improve stream reliability.',
          result: 'Improved live class engagement through low-latency streaming, Reduced stream interruption issues with enhanced error handling, Delivered a consistent viewing experience across desktop and mobile platforms.'
        },
        {
          challenge: 'Rendering thousands of chat messages during live classes without impacting application performance.',
          solution: 'Implemented message virtualization using @tanstack/react-virtual, ensuring only visible messages were rendered while preserving smooth scrolling and responsiveness.',
          result: 'Significantly reduced rendering overhead and delivered a scalable real-time chat experience for virtual classrooms.'
        }
      ],
      gallery: [
        '/images/home-page.png',
        '/images/instructor-page.png',
        '/images/dashboard-page.png',
        '/images/certificate-page.png',
        '/images/exam-page.png',
        '/images/virtual-class-meeting.png',
        '/images/vitual-class.png'
      ],
      results: [
        { metric: 'Faster Chat Rendering Performance', value: '30%' },
        { metric: 'Reduction in Unnecessary API Requests', value: '40%' },
        { metric: 'Virtual Classroom Uptime', value: '99.9%' },
      ],
      lessonsLearned: [
        'Integrating with third-party payment providers like Stripe.',
        'Building highly accessible custom video controls.'
      ]
    }
  },
  // {
  //   id: 'proj-3',
  //   slug: 'finance-tracker-mobile',
  //   title: 'Finance Tracker Mobile',
  //   description: 'A cross-platform mobile application for personal expense tracking, featuring dynamic charts and budget alerts.',
  //   technologies: ['React Native', 'Expo', 'Zustand', 'React Native Reanimated'],
  //   imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   details: {
  //     slug: 'finance-tracker-mobile',
  //     category: 'FinTech Mobile Application',
  //     duration: '3 Months',
  //     role: 'Frontend Developer',
  //     status: 'Completed',
  //     overview: {
  //       problem: 'Users needed a simple, fast, on-the-go way to track their daily expenses and view intuitive summaries without complex banking integrations.',
  //       requirements: ['Cross-platform mobile app', 'Offline-first capabilities', 'Smooth animations and charts'],
  //       goals: ['Achieve 60fps animations', 'Local storage persistence'],
  //       scope: 'Mobile frontend architecture, UI development, and local database integration.',
  //     },
  //     contributions: [
  //       'Mobile UI Development',
  //       'State Management',
  //       'Animations',
  //       'Offline Storage Integration'
  //     ],
  //     techStackCategories: [
  //       { title: 'Mobile', technologies: ['React Native', 'Expo', 'TypeScript'] },
  //       { title: 'State & Storage', technologies: ['Zustand', 'AsyncStorage'] },
  //       { title: 'Animations & UI', technologies: ['Reanimated', 'Skia'] }
  //     ],
  //     features: [
  //       { title: 'Expense Logging', description: 'Fast, minimal-tap interface for adding expenses.' },
  //       { title: 'Interactive Charts', description: 'Monthly summaries visualized with rich, interactive charts.' },
  //       { title: 'Budget Alerts', description: 'Custom thresholds that trigger local push notifications.' },
  //     ],
  //     challenges: [
  //       {
  //         challenge: 'Rendering complex interactive charts at 60fps on low-end Android devices.',
  //         solution: 'Utilized React Native Skia and Reanimated 3 for native-driven UI updates.',
  //         result: 'Maintained 60fps across the majority of testing devices.'
  //       }
  //     ],
  //     gallery: [
  //       'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop'
  //     ],
  //     results: [
  //       { metric: 'App Rating', value: '4.8' },
  //       { metric: 'Daily Active Users', value: '5k+' },
  //     ],
  //     lessonsLearned: [
  //       'Deep dive into React Native Skia for high-performance graphics.',
  //       'Managing offline-first architectures effectively.'
  //     ]
  //   }
  // },
  // {
  //   id: 'proj-4',
  //   slug: 'ai-image-generator',
  //   title: 'AI Image Generator',
  //   description: 'A web interface for generating images from text prompts using AI models, featuring a gallery and prompt history.',
  //   technologies: ['React', 'Tailwind CSS', 'React Query', 'REST APIs'],
  //   imageUrl: 'https://images.unsplash.com/photo-1620689408018-d65e90d8a417?q=80&w=2070&auto=format&fit=crop',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   details: {
  //     slug: 'ai-image-generator',
  //     category: 'AI Tool / Web Application',
  //     duration: '2 Months',
  //     role: 'Frontend Developer',
  //     status: 'Completed',
  //     overview: {
  //       problem: 'Provides an accessible, consumer-friendly interface to powerful generative AI models.',
  //       requirements: ['Real-time generation feedback', 'Gallery of past generations', 'Responsive layout'],
  //       goals: ['Sleek, dark-mode focused UI', 'Low latency perceived performance'],
  //       scope: 'Frontend UI layout, API integration with third-party AI generation services.',
  //     },
  //     contributions: [
  //       'UI Development',
  //       'API Integration',
  //       'State Management'
  //     ],
  //     techStackCategories: [
  //       { title: 'Frontend', technologies: ['React.js', 'TypeScript'] },
  //       { title: 'State Management', technologies: ['React Query'] },
  //       { title: 'UI Libraries', technologies: ['Tailwind CSS', 'Material UI'] }
  //     ],
  //     features: [
  //       { title: 'Text-to-Image Generation', description: 'Clean interface for inputting prompts and selecting visual styles.' },
  //       { title: 'History Gallery', description: 'Infinite scrolling gallery of user-generated images.' },
  //     ],
  //     challenges: [
  //       {
  //         challenge: 'Handling long polling / streaming responses from AI generation APIs.',
  //         solution: 'Implemented robust error handling and loading skeletons while maintaining connection state.',
  //         result: 'Smooth user experience during 10-15s generation wait times.'
  //       }
  //     ],
  //     gallery: [
  //       'https://images.unsplash.com/photo-1620689408018-d65e90d8a417?q=80&w=2070&auto=format&fit=crop'
  //     ],
  //     results: [
  //       { metric: 'Generations', value: '100k+' },
  //     ],
  //     lessonsLearned: [
  //       'Handling asynchronous, long-running REST API requests.',
  //       'Creating engaging loading states.'
  //     ]
  //   }
  // },
];
