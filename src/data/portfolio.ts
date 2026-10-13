import type {
  NavLink,
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  SoftSkillItem,
  SocialLink,
} from "@/types";

export const personal = {
  name: "Delwin Dcruz",
  initials: "DD",
  role: "Full Stack Developer",
  tagline:
    "I build responsive digital experiences and reliable backend systems using Java, Spring Boot, React, Next.js, TypeScript and MySQL.",
  availability: "Open to Full Stack, Java Developer and Software Developer opportunities.",
  location: "Ernakulam, Kerala, India",
  currentRole: "Full Stack Developer at Portfolix Tech",
  focus: "Full-stack and Java development",
  email: "delwindcruz299@gmail.com",
  github: "https://github.com/DelwinDcruz",
  githubHandle: "github.com/DelwinDcruz",
  linkedin: "#", // TODO: replace with your LinkedIn profile URL
  resumePath: "/resume/Delwin-Dcruz-Resume.pdf",
  profileImage: "/images/delwin-profile.jpg",
  summary:
    "Aspiring Software Developer with a strong foundation in Core Java, Spring Boot, and Oracle SQL. Experienced in building RESTful APIs, designing web applications with Spring MVC, and implementing Spring Boot Security. Hands-on with Maven for dependency management and MySQL for database design. Currently building a full-stack production platform used to manage feature roadmaps and user feedback.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroTech: string[] = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "MySQL",
  "Tailwind CSS",
  "Prisma",
  "REST APIs",
  "Git",
];

export const floatingBadges: string[] = ["Java", "React", "Spring Boot", "Next.js"];

export const aboutPoints: string[] = [
  "Building complete frontend and backend applications",
  "Developing responsive, accessible interfaces",
  "Designing and integrating RESTful APIs",
  "Working with Java and Spring Boot for backend systems",
  "Developing React and Next.js applications",
  "Database design and persistence with MySQL and Prisma",
  "Authentication and role-based access control",
  "API testing and debugging with Postman",
  "Collaborating with teams across the stack",
  "Mentoring junior contributors",
];

export const aboutInfo = [
  { label: "Location", value: personal.location },
  { label: "Current Role", value: personal.currentRole },
  { label: "Main Focus", value: personal.focus },
  { label: "Availability", value: "Open to opportunities" },
];

export const experience: ExperienceItem[] = [
  {
    id: "portfolix",
    role: "Full Stack Developer",
    company: "Portfolix Tech",
    period: "Apr 2026 – Present",
    summary:
      "Developing and maintaining responsive, production-ready web applications end-to-end, from frontend interfaces to backend services and database integration.",
    frontend: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Reusable components & responsive layouts",
      "Form handling & state management",
    ],
    backend: [
      "Next.js API routes",
      "Node.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "CRUD operations & data validation",
      "Roadmap publishing & voting",
      "Image uploads & persistence",
    ],
    extras: [
      "Admin dashboard development",
      "API testing & debugging with Postman",
      "Git & GitHub workflow",
      "Mentoring junior contributors on React structure, API design and team workflow",
    ],
  },
  {
    id: "inmakes",
    role: "Java Development Intern",
    company: "Inmakes Infotech Pvt. Ltd.",
    period: "Nov 2025 – Apr 2026",
    summary:
      "Developed backend applications and supported end-to-end web application delivery alongside senior developers.",
    backend: ["Core Java", "JDBC", "Hibernate ORM", "Spring Boot"],
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    extras: ["Debugging & performance optimization during code reviews"],
  },
  
  {
    id: "qspiders",
    role: "Java Full Stack Developer Trainee",
    company: "QSpiders",
    period: "",
    summary:
      "Completed Java Full Stack Development training, strengthening practical skills in Java programming, database connectivity, backend development, and web technologies through hands-on exercises and projects.",
    backend: [
      "Core Java",
      "OOP Concepts",
      "JDBC",
      "SQL",
      "Hibernate ORM",
      "Spring Boot",
    ],
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
    ],
    extras: [
      "Hands-on coding exercises and debugging",
      "Database operations and CRUD implementation",
      "Full-stack application development practice",
    ],
  },
  
{
  id: "btech",
  role: "B.Tech in Electrical & Electronics Engineering",
  company: "PRIST University, Thanjavur",
  period: "",
  summary:
    "Completed a Bachelor of Technology in Electrical and Electronics Engineering, developing a strong foundation in engineering principles, analytical thinking, problem-solving, and technical concepts. Later expanded my skills into software development, Java programming, database management, and full-stack web application development.",
  extras: [
    "Strong analytical and problem-solving skills",
    "Transitioned into software development through practical training and projects",
    "Built technical skills in Java, Spring Boot, SQL, and web technologies",
  ],
},
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL","Next.js"],
  },
  {
    id: "backend",
    title: "Java & Backend",
    items: [
      "Core Java (OOP, Collections, Multithreading)",
      "JDBC",
      "Hibernate",
      "JPA",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "REST API Development",
      "Node.js",
      "Next.js API Routes",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
      "Component-Based UI",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MySQL", "Oracle SQL", "CRUD Operations", "Joins & Indexing", "Prisma ORM"],
  },
  {
    id: "security",
    title: "Security",
    items: ["Authentication", "Authorization", "Spring Security", "JWT", "Role-Based Access Control"],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "GitHub", "Maven", "Postman", "JUnit"],
  },
];

export const projects: ProjectItem[] = [
  
{
  id: "anesthesia-success-point",
  title: "Anesthesia Success Point",
  description:
    "A responsive educational website designed for anesthesia students and healthcare professionals, providing learning resources, study materials, and educational content through a user-friendly interface.",
  tech: [
    "Next.js",
    "React.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
  ],
  features: [
    "Responsive design for desktop and mobile devices",
    "Organized educational content and study resources",
    "User-friendly navigation and interface",
    "Dedicated sections for anesthesia learning materials",
    "Optimized page performance and accessibility",
  ],
  image: "/images/projects/anesthesia-success-point.png",
  githubUrl: "#", // Replace with your GitHub repository URL
  liveUrl: "https://anesthesiasuccesspoint.com", // Replace with your website URL
},
  
  {
    id: "roadmap-platform",
    title: "Public Roadmap & Suggestion Management System",
    description:
      "A full-stack public roadmap and feature-suggestion platform with user-facing pages for browsing, voting, and idea submission, plus a complete admin workflow.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL"],
    features: [
      "Public roadmap browsing & voting",
      "Feature suggestion submission",
      "Admin dashboard for review & publishing",
      "Roadmap image uploads",
      "Status transitions & CRUD API routes",
    ],
    image: "/images/projects/roadmap-platform.png",
    githubUrl: "#", // TODO: replace with your project's GitHub repository URL
    liveUrl: "#", // TODO: replace with your project's live demo URL
  },
  {
    id: "bank-management",
    title: "Bank Management System",
    description:
      "A high-performance bank management system built to handle transactions, accounts, and user roles with secure, persistent data handling.",
    tech: ["Spring Boot", "Hibernate", "JPA", "MySQL", "Spring Security", "HTML", "CSS", "Thymeleaf", "RESTful APIs"],
    features: [
      "Account & transaction management",
      "User-role management",
      "Secure authentication",
      "Role-based access control",
      "Hibernate & JPA persistence",
    ],
    image: "/images/projects/bank-management.png",
    githubUrl: "#", // TODO: replace with your project's GitHub repository URL
    liveUrl: "#", // TODO: replace with your project's live demo URL
  },

];

export const education: EducationItem[] = [
  {
    id: "prist",
    institution: "PRIST University, Thanjavur",
    degree: "B.Tech",
    period: "2020 – 2024",
    detail: "",
  },
  {
    id: "jspiders",
    institution: "JSpiders \u2014 Java Training and Development Center",
    degree: "Java Full Stack Training",
    points: ["Core Java", "J2EE", "SQL", "Web Technologies", "Spring Framework"],
  },
  {
    id: "inmakes",
    institution: "Inmakes Infotech Pvt. Ltd.",
    degree: "Java Development Internship",
    period: "Internship",
    detail: "Completion Certificate Awarded",
    points: ["Java", "Spring Boot", "MySQL", "REST APIs", "Maven"],
  },
];

export const certifications: CertificationItem[] = [
  { id: "jspiders-cert", title: "Java Full Stack Developer Course", issuer: "JSpiders" },
  { id: "inmakes-cert", title: "Java Development Internship Completion", issuer: "Inmakes Infotech Pvt. Ltd." },
  { id: "cefr-cert", title: "CEFR B2 Certified", issuer: "British Council EnglishScore Skill Test" },
];

export const softSkills: SoftSkillItem[] = [
  { id: "problem-solving", title: "Problem-Solving", description: "Critical thinking to break down and resolve complex technical issues." },
  { id: "collaboration", title: "Team Collaboration", description: "Working closely with cross-functional teams to ship reliable software." },
  { id: "communication", title: "Communication", description: "Clear, concise communication with teammates and stakeholders." },
  { id: "time-management", title: "Time Management", description: "Prioritizing tasks to consistently meet delivery timelines." },
  { id: "adaptability", title: "Adaptability", description: "Quick to learn new technologies and adjust to changing requirements." },
  { id: "leadership", title: "Leadership", description: "Taking ownership of tasks and guiding outcomes end-to-end." },
  { id: "mentoring", title: "Mentoring", description: "Guiding junior contributors on React structure, API design and workflow." },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personal.github, icon: "github" },
  { label: "LinkedIn", href: personal.linkedin, icon: "linkedin" }, // TODO: replace with your LinkedIn URL
  { label: "Email", href: `mailto:${personal.email}`, icon: "mail" },
];

export const volunteer = {
  title: "National Service Scheme (NSS) Volunteer",
  description:
    "Engaged in community service activities, demonstrating commitment to social responsibility and teamwork.",
};
