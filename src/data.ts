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
    role: 'Senior Frontend Developer',
    company: 'Tech Innovators',
    period: '2023 - Present',
    responsibilities: [
      'Architected and implemented scalable frontend applications using React.js and Next.js.',
      'Led the migration of legacy applications to modern React architecture, improving performance by 40%.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
      'Collaborated closely with designers and product managers to deliver seamless user experiences.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Digital Solutions Inc.',
    period: '2021 - 2023',
    responsibilities: [
      'Developed responsive single-page applications focused on data visualization.',
      'Integrated RESTful APIs and managed complex application state using Redux Toolkit.',
      'Implemented robust CI/CD pipelines to automate testing and deployment processes.',
      'Optimized application performance through code splitting and lazy loading.'
    ],
    technologies: ['React', 'JavaScript', 'Redux Toolkit', 'Material UI', 'Jest'],
  },
  {
    id: 'exp-3',
    role: 'Junior Frontend Developer',
    company: 'WebCraft Agency',
    period: '2020 - 2021',
    responsibilities: [
      'Built pixel-perfect UI components from Figma designs.',
      'Maintained and added features to existing client projects.',
      'Participated in daily stand-ups and agile sprint planning sessions.'
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Ant Design'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'smart-folder-application',
    title: 'Online Security Training Dashboard',
    description: 'Developed a responsive admin dashboard for an online security training platform, enabling course management, student enrollment tracking, support ticket handling, financial analytics, and real-time performance monitoring. Built with a focus on usability, scalability, and data-driven decision making. As well as developed a real-time virtual classroom experience using Zoom Video SDK and Firebase, enabling instructors and students to join live training sessions, communicate through class chat, manage attendance, and handle classroom interactions seamlessly within a secure online learning environment.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop',
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
        requirements: ['Manage online security training courses and student enrollments.', 'Enable administrators to manage classes, certifications, and training records.', 'Support role-based access for administrators, instructors, support agents, and students.', 'Generate financial reports for payments, refunds, and revenue tracking.'],
        goals: ['Centralize training operations into a single management platform.', 'Improve visibility into student progress and course completion rates.', 'Reduce administrative effort through automated reporting and analytics.', 'Enhance support efficiency with integrated ticketing and live chat systems.'],
        scope: 'The project included course management, student enrollment tracking, analytics dashboards, support ticket handling, live chat monitoring, financial reporting, and role-based access control.',
      },
      contributions: [
        'UI Development',
        'API Integration',
        'State Management',
        'Performance Optimization',
        'Responsive Design',
        'Code Architecture'
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
        { title: 'Lesson Management', description: 'Display scheduled lessons, session durations, completion status, and learning progress.' },
      ],
      challenges: [
        {
          challenge: 'Managing and displaying large volumes of student and course data efficiently.',
          solution: 'Implemented server-side pagination, filtering, and optimized API integration strategies.',
          result: 'Improved dashboard performance and reduced page load times.'
        },
        {
          challenge: 'Complex state synchronization across multiple tabs.',
          solution: 'Utilized Broadcast Channel API and React Query for cross-tab state syncing.',
          result: 'Users experience real-time updates without manual refreshes.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
      ],
      results: [
        { metric: 'Performance', value: '+40%' },
        { metric: 'Load Time', value: '< 1.2s' },
        { metric: 'User Engagement', value: '+25%' },
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
    title: 'E-learning Platform',
    description: 'A comprehensive online learning platform featuring video courses, interactive quizzes, and real-time progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      slug: 'e-learning-platform',
      category: 'EdTech Web Application',
      duration: '4 Months',
      role: 'Senior Frontend Developer',
      status: 'Completed',
      overview: {
        problem: 'The client needed a modern, scalable platform to host their educational content and manage student progress.',
        requirements: ['Video streaming integration', 'Progress tracking and quiz engine', 'Payment gateway integration'],
        goals: ['Launch minimum viable product in 4 months', 'Support up to 5k concurrent users', 'Ensure High Accessibility (WCAG 2.1)'],
        scope: 'Frontend development, UI/UX implementation, checkout flow, and video player customization.',
      },
      contributions: [
        'UI Development',
        'API Integration',
        'State Management',
        'Accessible Design'
      ],
      techStackCategories: [
        { title: 'Frontend', technologies: ['Next.js', 'React.js', 'TypeScript'] },
        { title: 'State Management', technologies: ['React Query', 'Zustand'] },
        { title: 'UI Libraries', technologies: ['Tailwind CSS', 'Radix UI'] },
        { title: 'Tools', technologies: ['Stripe', 'Vercel'] }
      ],
      features: [
        { title: 'Course Player', description: 'Custom video player with bookmarking and speed controls.' },
        { title: 'Interactive Quizzes', description: 'Real-time grading and detailed feedback.' },
        { title: 'Student Dashboard', description: 'Analytics on learning progress and certificiations.' },
      ],
      challenges: [
        {
          challenge: 'Ensuring seamless video playback across different devices and network conditions.',
          solution: 'Implemented adaptive bitrate streaming support and custom caching strategies.',
          result: 'Reduced buffering times by 30% for mobile users.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop'
      ],
      results: [
        { metric: 'Active Students', value: '10k+' },
        { metric: 'Course Completion', value: '+15%' },
      ],
      lessonsLearned: [
        'Integrating with third-party payment providers like Stripe.',
        'Building highly accessible custom video controls.'
      ]
    }
  },
  {
    id: 'proj-3',
    slug: 'finance-tracker-mobile',
    title: 'Finance Tracker Mobile',
    description: 'A cross-platform mobile application for personal expense tracking, featuring dynamic charts and budget alerts.',
    technologies: ['React Native', 'Expo', 'Zustand', 'React Native Reanimated'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      slug: 'finance-tracker-mobile',
      category: 'FinTech Mobile Application',
      duration: '3 Months',
      role: 'Frontend Developer',
      status: 'Completed',
      overview: {
        problem: 'Users needed a simple, fast, on-the-go way to track their daily expenses and view intuitive summaries without complex banking integrations.',
        requirements: ['Cross-platform mobile app', 'Offline-first capabilities', 'Smooth animations and charts'],
        goals: ['Achieve 60fps animations', 'Local storage persistence'],
        scope: 'Mobile frontend architecture, UI development, and local database integration.',
      },
      contributions: [
        'Mobile UI Development',
        'State Management',
        'Animations',
        'Offline Storage Integration'
      ],
      techStackCategories: [
        { title: 'Mobile', technologies: ['React Native', 'Expo', 'TypeScript'] },
        { title: 'State & Storage', technologies: ['Zustand', 'AsyncStorage'] },
        { title: 'Animations & UI', technologies: ['Reanimated', 'Skia'] }
      ],
      features: [
        { title: 'Expense Logging', description: 'Fast, minimal-tap interface for adding expenses.' },
        { title: 'Interactive Charts', description: 'Monthly summaries visualized with rich, interactive charts.' },
        { title: 'Budget Alerts', description: 'Custom thresholds that trigger local push notifications.' },
      ],
      challenges: [
        {
          challenge: 'Rendering complex interactive charts at 60fps on low-end Android devices.',
          solution: 'Utilized React Native Skia and Reanimated 3 for native-driven UI updates.',
          result: 'Maintained 60fps across the majority of testing devices.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop'
      ],
      results: [
        { metric: 'App Rating', value: '4.8' },
        { metric: 'Daily Active Users', value: '5k+' },
      ],
      lessonsLearned: [
        'Deep dive into React Native Skia for high-performance graphics.',
        'Managing offline-first architectures effectively.'
      ]
    }
  },
  {
    id: 'proj-4',
    slug: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'A web interface for generating images from text prompts using AI models, featuring a gallery and prompt history.',
    technologies: ['React', 'Tailwind CSS', 'React Query', 'REST APIs'],
    imageUrl: 'https://images.unsplash.com/photo-1620689408018-d65e90d8a417?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      slug: 'ai-image-generator',
      category: 'AI Tool / Web Application',
      duration: '2 Months',
      role: 'Frontend Developer',
      status: 'Completed',
      overview: {
        problem: 'Provides an accessible, consumer-friendly interface to powerful generative AI models.',
        requirements: ['Real-time generation feedback', 'Gallery of past generations', 'Responsive layout'],
        goals: ['Sleek, dark-mode focused UI', 'Low latency perceived performance'],
        scope: 'Frontend UI layout, API integration with third-party AI generation services.',
      },
      contributions: [
        'UI Development',
        'API Integration',
        'State Management'
      ],
      techStackCategories: [
        { title: 'Frontend', technologies: ['React.js', 'TypeScript'] },
        { title: 'State Management', technologies: ['React Query'] },
        { title: 'UI Libraries', technologies: ['Tailwind CSS', 'Material UI'] }
      ],
      features: [
        { title: 'Text-to-Image Generation', description: 'Clean interface for inputting prompts and selecting visual styles.' },
        { title: 'History Gallery', description: 'Infinite scrolling gallery of user-generated images.' },
      ],
      challenges: [
        {
          challenge: 'Handling long polling / streaming responses from AI generation APIs.',
          solution: 'Implemented robust error handling and loading skeletons while maintaining connection state.',
          result: 'Smooth user experience during 10-15s generation wait times.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1620689408018-d65e90d8a417?q=80&w=2070&auto=format&fit=crop'
      ],
      results: [
        { metric: 'Generations', value: '100k+' },
      ],
      lessonsLearned: [
        'Handling asynchronous, long-running REST API requests.',
        'Creating engaging loading states.'
      ]
    }
  },
];
