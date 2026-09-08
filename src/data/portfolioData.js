// ============================================================
// portfolioData.js — Centralized configuration for Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Shruti Mishra",
  firstName: "Shruti",
  brandName: "Shruti Mishra",
  title: "BCA Student | Aspiring Data Analyst",
  location: "India",
  phone: "+91 99396-08743",
  emails: {
    primary: "shrutimi2006@gmail.com",
    secondary: "shrutimi2006@gmail.com",
  },
  summary:
    "Passionate about technology, data and creative problem solving — building skills across programming, analytics and digital projects.",
  resumeUrl: "/Shruti_Mishra_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/mishrashruti22",
  linkedin: "https://www.linkedin.com/in/shruti-mishra-b61372335",
  instagram: "https://instagram.com/",
};

export const heroContent = {
  greeting: "Hello, I'm",
  titleHighlight: "BCA Student | Aspiring Data Analyst",
  subtitle:
    "I’m passionate about technology, data and creative problem solving — building skills across programming, analytics and digital projects.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Shruti_Mishra_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shruti Mishra</span>, a BCA student with an interest in technology, data and problem-solving. I enjoy working on creative digital projects and continuously developing my technical and analytical skills.`,
  techStack: ["Python", "SQL", "MS Excel", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Collect",
      text: "Gather relevant data from reliable sources to understand the problem and define the right inputs.",
    },
    {
      number: "02",
      title: "Clean",
      text: "Transform raw, inconsistent data into accurate, structured, and analysis-ready datasets.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Explore the data to uncover patterns, trends, relationships, and meaningful insights.",
    },
    {
      number: "04",
      title: "Visualize",
      text: "Turn insights into clear charts, dashboards, and compelling visual stories that support better decisions.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "DATA ANALYSIS",
      description: "Turning data into meaningful insights and decisions.",
      icon: "▥",
      skills: ["Python", "SQL", "MS Excel", "Power BI", "Data Analysis", "Data Visualization"]
    },
    {
      title: "PROGRAMMING",
      description: "Building logic and solving problems with code.",
      icon: "</>",
      skills: ["Python", "C", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "DATABASES",
      description: "Working with structured data and database systems.",
      icon: "◉",
      skills: ["MySQL", "SQL", "Database Management", "DBMS"]
    },
    {
      title: "DATA TOOLS",
      description: "Using tools to analyze, organize and present data.",
      icon: "▤",
      skills: ["MS Excel", "Power BI", "Data Visualization", "Data Reporting"]
    },
    {
      title: "CORE CONCEPTS",
      description: "Strong fundamentals for analytical problem-solving.",
      icon: "⚙",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Problem Solving"]
    },
    {
      title: "DEVELOPMENT",
      description: "Supporting technical skills for building applications.",
      icon: "⌘",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Git & GitHub"]
    }
  ]
};

// Achievements Data

export const Achievements = {
  badge: "MY ACHIEVEMENTS",

  heading: "Milestones, Recognition & Growth",

  description:
    "A collection of competitions, leadership experiences, sports achievements, and academic activities that have shaped my growth beyond the classroom.",

  categories: [
    {
      title: "Competitions & Case Challenges",

      description:
        "Participated in competitive events that strengthened my problem-solving, analytical thinking, teamwork, and decision-making abilities.",

      stats: "Multiple Competitions",

      icon: "🏆",

      images: [
        "/achievements/case-craft.jpg",
        "/achievements/pgdav-admania.jpg",
        "/achievements/iitm-treasure-hunt.jpg"
      ]
    },

    {
      title: "Sports & Teamwork",

      description:
        "Actively participated in college sports while developing teamwork, leadership, discipline, and a competitive mindset.",

      stats: "Winner & Runner Up",

      icon: "🏅",

      images: [
        "/achievements/sportify.jpg",
        "/achievements/athleema.jpg"
      ]
    },

    {
      title: "Ideathons & Innovation",

      description:
        "Explored innovative ideas through ideathons and technology-focused challenges, turning problems into practical solutions.",

      stats: "Innovation & Problem Solving",

      icon: "💡",

      images: [
        "/achievements/aravalli-ideathon.jpg",
        "/achievements/jaypee-manthan.jpg"
      ]
    },

    {
      title: "Leadership & Events",

      description:
        "Contributed to planning, coordinating, and managing college events while working with teams and handling responsibilities.",

      stats: "Event Coordination",

      icon: "🎯",

      images: [
        "/achievements/event-coordination.jpg",
        "/achievements/student-of-the-year.jpg",
        "/achievements/asbic-conference.jpg"
      ]
    }
  ]
};

export const contentCreation = Achievements;



// ================= LEADERSHIP =================
export const leadershipList = [
  {
    title: "ASBIC Conference",
    role: "Team Lead",
    badge: "TEAM LEAD",
    description:
      "Led the team during the ASBIC Conference, coordinating responsibilities, communication, and execution to ensure smooth participation."
  },
  {
    title: "Technocrats",
    role: "Team Lead",
    badge: "TEAM LEAD",
    description:
      "Led and coordinated team activities within Technocrats, managing collaboration and ensuring responsibilities were completed effectively."
  },
  {
    title: "Webweave",
    role: "Team Lead",
    badge: "TEAM LEAD",
    description:
      "Coordinated the team throughout Webweave, facilitating task distribution, communication, and collaborative execution."
  },
  {
    title: "IITM Treasure Hunt",
    role: "Team Leader",
    badge: "TEAM LEADER",
    description:
      "Led the team through the IITM Treasure Hunt, coordinating strategy, decision-making, and teamwork under time constraints."
  },
  {
    title: "Aravalli Ideathon",
    role: "Team Lead",
    badge: "TEAM LEAD",
    description:
      "Led the team during the Aravalli Ideathon, coordinating ideas, responsibilities, and collaborative problem-solving."
  }
];

// ================= COORDINATION =================
export const coordinationList = [
  {
    title: "Student of the Year 2025 & 2026",
    role: "Event Coordinator",
    badge: "EVENT COORDINATOR",
    description:
      "Coordinated event activities, participant communication, scheduling, and on-ground execution to ensure the event ran smoothly."
  },
  {
    title: "Athleema 2025 & 2026",
    role: "Event Coordinator",
    badge: "EVENT COORDINATOR",
    description:
      "Coordinated sports event activities including Volleyball, Basketball, and Kabaddi, managing participants, schedules, team communication, and on-ground operations."
  },
  {
    title: "ASBIC Conference 2025",
    role: "Event Coordinator",
    badge: "EVENT COORDINATOR",
    description:
      "Supported the coordination and execution of the ASBIC Conference by managing responsibilities, communication, and event activities."
  },
  {
    title: "Ecobiz 2025",
    role: "Event Coordinator",
    badge: "EVENT COORDINATOR",
    description:
      "Coordinated event activities and team responsibilities while ensuring effective communication and smooth execution throughout the event."
  },
  {
    title: "Hidden Quest",
    role: "Event Coordinator",
    badge: "EVENT COORDINATOR",
    description:
      "Coordinated team activities during Hidden Quest, managing responsibilities, communication, and on-ground execution to ensure smooth participation."
  }
];


// Internships Data
export const internshipsList = [
  {
    duration: "June 2026 – Present",
    role: "Brand & Growth Associate Intern",
    organization: "Appexigo Technologies",
    skills: [
      "Brand Communication",
      "Content Strategy",
      "Social Media Management",
      "Growth Marketing",
      "Digital Marketing",
    ],
    tech: [
      "Canva",
      "Adobe Express",
      "LinkedIn",
      "Content Marketing",
    ],
  },
  {
    duration: "November 2025 – December 2025",
    role: "Python Developer Intern",
    organization: "Hexsoftwares",
    skills: [
      "Python Programming",
      "Problem Solving",
      "Application Development",
      "Programming Fundamentals",
    ],
    tech: [
      "Python",
      "GitHub",
    ],
  },
  {
    duration: "June 2025 – August 2025",
    role: "E-mail Marketing Intern",
    organization: "Soniak Organico Greens",
    skills: [
      "Email Campaign Management",
      "Content Creation",
      "Audience Engagement",
      "Email Marketing",
      "Digital Communication",
    ],
    tech: [
      "Email Marketing",
      "Content Strategy",
      "Digital Marketing",
    ],
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks or automation tools." },
  { name: "Creativity", icon: "🎨", desc: "Blending aesthetic design with data presentation to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing BCA studies, event hosting, and developing robust platforms." }
];

export const projects = [
  {
    id: "foodmesh",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "FoodMesh",
    description:
      "FoodMesh — An enterprise-grade multi-tenant restaurant management and food ordering SaaS platform inspired by UrbanPiper. It enables restaurants to manage multiple outlets, menus, inventory, customers, staff, and orders through a scalable architecture with secure authentication, role-based access control, and real-time operations. Built with React, Next.js, NestJS, PostgreSQL, Redis, Kafka, Elasticsearch, Docker, Kubernetes, and AWS.",
    techTags: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Elasticsearch",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    links: {
      github: "https://github.com/ersamirsingh/UrbanPiper",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "karigar",
    number: "02",
    badge: null,
    title: "Karigar",
    description:
      "A platform connecting local skilled workers with customers, featuring real-time search, worker profiles, and booking management with full database integration.",
    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      github: "",
      frontendDemo: "https://karigar-frontend.onrender.com",
      backendApi: "https://karigar-zny2.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "sentiment-analysis",
    number: "03",
    badge: null,
    title: "AI-Powered Sentiment Analysis",
    description:
      "A full-stack web application that analyzes citizen feedback using Artificial Intelligence to classify sentiments as positive, negative, or neutral. Features a responsive React frontend, a Node.js backend, MongoDB for data storage, and n8n automation for workflow orchestration — enabling real-time insights and efficient feedback management.",
    techTags: ["React", "Node.js", "MongoDB", "n8n", "AI/ML", "REST API"],
    links: {
      github: "#",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "BCA – Bachelor of Computer Applications",
  institution: "College",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science",
  tenth: "10th CBSE",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Problem Solving",
    "Python · SQL · Power BI",
    "Creative Digital Projects",
  ],
  credential: "BCA Student",
  copyright: `© ${new Date().getFullYear()} Shruti Mishra | Built with React`,
};

// Contact & Email Configuration
export const contactConfig = {
  recipientEmail: "shrutimi2006@gmail.com",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};