// ============================================================
// portfolioData.js — Centralized configuration for Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Progya Biswas",
  firstName: "Progya",
  brandName: "Progya Biswas",
  title: "BTECH Student | AI and Robotics Engineer",
  location: "India",
  phone: "+91 9903545853",
  emails: {
    primary: "progya.biswas@gmail.com",
    secondary: "progya.biswas@gmail.com",
  },
  summary:
    "Passionate about technology, data and creative problem solving — building skills across programming, analytics and digital projects.",
  resumeUrl: "/Progya_Biswas_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Progya-Biswas",
  linkedin: "https://www.linkedin.com/in/progya-paromita-biswas-440a96365/",
  instagram: "https://instagram.com/",
};

export const heroContent = {
  greeting: "Hello, I'm",
  titleHighlight: "BTECH Student | AI and Robotics Engineer",
  subtitle:
    "I’m passionate about technology, data and creative problem solving — building skills across programming, analytics and digital projects.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Progya_Biswas_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Progya Biswas</span>, a BTECH student with an interest in technology, data and problem-solving. I enjoy working on creative digital projects and continuously developing my technical and analytical skills.`,
  techStack: ["Python", "SQL", "MS Excel", "Power BI"],
};


export const skillsContent = {
  badge: "Engineering Domains",

  heading: "Exploring the intersection of intelligence, machines & space.",

  description:
    "Exploring robotics, artificial intelligence, and aerospace through autonomous systems, intelligent algorithms, and advanced engineering technologies.",

  cards: [
    {
      number: "01",
      title: "ROBOTICS",
      subtitle: "Building Autonomous Machines",
      text:
        "Developing robotic systems that perceive, understand, and interact with their environment through autonomous navigation, simulation, and computer vision.",

      icon: "🤖",

      skills: [
        "ROS 2",
        "Gazebo",
        "RViz",
        "SLAM",
        "Nav2",
        "OpenCV",
        "Robot Kinematics"
      ],

      tag: "SENSING · NAVIGATION · CONTROL"
    },

    {
      number: "02",
      title: "ARTIFICIAL INTELLIGENCE",
      subtitle: "Creating Intelligent Systems",
      text:
        "Exploring machine intelligence through deep learning, reinforcement learning, computer vision, and AI-driven decision-making systems.",

      icon: "🧠",

      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative AI",
        "LangGraph",
        "LLMs"
      ],

      tag: "LEARNING · REASONING · INTELLIGENCE"
    },

    {
      number: "03",
      title: "AEROSPACE",
      subtitle: "Engineering Beyond Earth",
      text:
        "Exploring aerospace technologies through rocketry, flight systems, telemetry, embedded systems, and autonomous space applications.",

      icon: "🚀",

      skills: [
        "Rocket Systems",
        "Flight Dynamics",
        "Telemetry",
        "Embedded Systems",
        "CanSat",
        "Sensor Integration",
        "Trajectory Analysis"
      ],

      tag: "FLIGHT · PROPULSION · EXPLORATION"
    }
  ],

  endText: "Beyond the Horizon!"
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

// export const Achievements = {
//   badge: "MY ACHIEVEMENTS",

//   heading: "Milestones, Recognition & Growth",

//   description:
//     "A collection of competitions, leadership experiences, sports achievements, and academic activities that have shaped my growth beyond the classroom.",

//   categories: [
//     {
//       title: "Competitions & Case Challenges",

//       description:
//         "Participated in competitive events that strengthened my problem-solving, analytical thinking, teamwork, and decision-making abilities.",

//       stats: "Multiple Competitions",

//       icon: "🏆",

//       images: [
//         "/achievements/case-craft.jpg",
//         "/achievements/pgdav-admania.jpg",
//         "/achievements/iitm-treasure-hunt.jpg"
//       ]
//     },

//     {
//       title: "Sports & Teamwork",

//       description:
//         "Actively participated in college sports while developing teamwork, leadership, discipline, and a competitive mindset.",

//       stats: "Winner & Runner Up",

//       icon: "🏅",

//       images: [
//         "/achievements/sportify.jpg",
//         "/achievements/athleema.jpg"
//       ]
//     },

//     {
//       title: "Ideathons & Innovation",

//       description:
//         "Explored innovative ideas through ideathons and technology-focused challenges, turning problems into practical solutions.",

//       stats: "Innovation & Problem Solving",

//       icon: "💡",

//       images: [
//         "/achievements/aravalli-ideathon.jpg",
//         "/achievements/jaypee-manthan.jpg"
//       ]
//     },

//     {
//       title: "Leadership & Events",

//       description:
//         "Contributed to planning, coordinating, and managing college events while working with teams and handling responsibilities.",

//       stats: "Event Coordination",

//       icon: "🎯",

//       images: [
//         "/achievements/event-coordination.jpg",
//         "/achievements/student-of-the-year.jpg",
//         "/achievements/asbic-conference.jpg"
//       ]
//     }
//   ]
// };

// export const contentCreation = Achievements;



// ================= LEADERSHIP =================

export const leadershipList = [
  {
    title: "Sound Energy Harvesting System using Piezo Sensors",
    duration: "January 2026 – February 2026",
    role: "Team Lead",
    badge: "TEAM LEAD",
    organization: "2-Member Team",
    description:
      "Conceived the project idea and led a 2-member team to develop a piezoelectric energy harvesting system that converts ambient sound vibrations into usable electrical energy for low-power applications.",
    link: "",
  },
  {
    title: "Reinforcement Learning-Based Robot Navigation",
    duration: "February 2026 – April 2026",
    role: "Team Lead",
    badge: "TEAM LEAD",
    organization: "Robotics Lab, VIT Vellore",
    description:
      "Led a 3-member research team under faculty guidance to develop a reinforcement learning-based multi-robot navigation system, coordinating research activities, technical implementation, and team collaboration.",
    link: "YOUR_ROBOTICS_PROJECT_LINK_HERE",
  },
  {
    title: "CookBook Web Application",
    duration: "February 2026 – April 2026",
    role: "Team Lead",
    badge: "TEAM LEAD",
    organization: "4-Member Team",
    description:
      "Led a 4-member team in designing and developing a responsive recipe-sharing web application using ReactJS. Coordinated frontend development and backend integration while building interactive features for recipe sharing and community engagement.",
    link: "YOUR_COOKBOOK_PROJECT_LINK_HERE",
  },
];


// ================= COORDINATION =================
// export const coordinationList = [
//   {
//     title: "Student of the Year 2025 & 2026",
//     role: "Event Coordinator",
//     badge: "EVENT COORDINATOR",
//     description:
//       "Coordinated event activities, participant communication, scheduling, and on-ground execution to ensure the event ran smoothly."
//   },
//   {
//     title: "Athleema 2025 & 2026",
//     role: "Event Coordinator",
//     badge: "EVENT COORDINATOR",
//     description:
//       "Coordinated sports event activities including Volleyball, Basketball, and Kabaddi, managing participants, schedules, team communication, and on-ground operations."
//   },
//   {
//     title: "ASBIC Conference 2025",
//     role: "Event Coordinator",
//     badge: "EVENT COORDINATOR",
//     description:
//       "Supported the coordination and execution of the ASBIC Conference by managing responsibilities, communication, and event activities."
//   },
//   {
//     title: "Ecobiz 2025",
//     role: "Event Coordinator",
//     badge: "EVENT COORDINATOR",
//     description:
//       "Coordinated event activities and team responsibilities while ensuring effective communication and smooth execution throughout the event."
//   },
//   {
//     title: "Hidden Quest",
//     role: "Event Coordinator",
//     badge: "EVENT COORDINATOR",
//     description:
//       "Coordinated team activities during Hidden Quest, managing responsibilities, communication, and on-ground execution to ensure smooth participation."
//   }
// ];


// Internships Data
export const researchProjectsList = [
  {
    duration: "May 2025 – Present",
    role: "Research & Development Project",
    organization:
      "Comparative Analysis of Transfer Learning Models with Explainable AI for Nail Disease Classification",
    skills: [
      "Deep Learning",
      "Transfer Learning",
      "Medical Image Classification",
      "Explainable AI",
      "Model Evaluation",
      "Bias Analysis",
    ],
    tech: [
      "Python",
      "PyTorch",
      "ResNet-50",
      "VGG16",
      "DenseNet-121",
      "ConvNeXt-Tiny",
      "Vision Transformer",
      "DINOv2",
      "Grad-CAM",
      "Attention Rollout",
    ],
    description:
      "Evaluated six pretrained architectures across frozen, partially fine-tuned, and fully fine-tuned strategies for 13-class nail disease classification using 1,008 images and grouped stratified 5-fold cross-validation. Achieved 88.1% accuracy and 0.857 Macro-F1 with fully fine-tuned DINOv2. Applied Grad-CAM and Attention Rollout for model interpretability and potential classification bias analysis.",
    paperLink: "https://www.ijert.org/comparative-analysis-of-transfer-learning-models-with-explainable-ai-for-automated-nail-disease-classification-ijertv15is101250",
  },
  {
    duration: "February 2026 – April 2026",
    role: "Research Paper | Robotics Lab, VIT Vellore",
    organization: "Reinforcement Learning-Based Multi-Robot Navigation",
    skills: [
      "Reinforcement Learning",
      "Autonomous Navigation",
      "Multi-Robot Systems",
      "Sensor Fusion",
      "Real-Time Communication",
    ],
    tech: [
      "Python",
      "ROS2",
      "Gazebo",
      "DQN",
      "PPO",
      "Jetson Nano",
      "RPLiDAR",
      "Waveshare Robot Chassis",
    ],
    description:
      "Implemented autonomous mobile robot navigation using DQN and PPO reinforcement learning. Integrated a Waveshare robot chassis, Jetson Nano, RPLiDAR, and camera modules with ROS2/Gazebo, designing the sensor fusion and real-time communication architecture.",
    paperLink: "https://drive.google.com/drive/u/1/folders/1zQCSclO7UL6KF_BS09xibblT4YuwjUTI?usp=sharing",
  },
  {
    duration: "August 2026 – Present",
    role: "Research & Development Project",
    organization: "Energy-Aware Parallel Computation of SHAP Explanations",
    skills: [
      "Explainable AI",
      "Parallel Computing",
      "Performance Benchmarking",
      "Energy Efficiency",
      "CPU Scheduling",
      "Experimental Analysis",
    ],
    tech: [
      "Python",
      "SHAP",
      "CodeCarbon",
      "Multiprocessing",
      "Threading",
      "Joblib",
      "Ray",
      "XGBoost",
      "Scikit-learn",
    ],
    description:
      "Benchmarked Serial, Multiprocessing, Threading, Joblib, and Ray strategies for TreeSHAP and KernelSHAP, completing 972 runs across 324 configurations with CPU time and energy measured using CodeCarbon. Analyzed workload-dependent time-energy trade-offs across Random Forest, XGBoost, SVM-RBF, and Logistic Regression to generate time-optimal, energy-optimal, and balanced CPU scheduling recommendations.",
    paperLink: "https://drive.google.com/drive/u/1/folders/1GyE6dWZVX0ie2az27glyGNOmpFrqjFbk",
  },
  {
    duration: "January 2026 – Present",
    role: "Research & Development Project",
    organization: "Real-Time Distance Estimation using Monocular Vision",
    skills: [
      "Computer Vision",
      "Monocular Depth Estimation",
      "Object Distance Estimation",
      "Real-Time Inference",
      "Assistive Technology",
    ],
    tech: [
      "Python",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
      "RGB Camera",
    ],
    description:
      "Developed a system that estimates object distance in real time from a single RGB camera using monocular depth and distance estimation algorithms. Optimized the inference pipeline for real-time performance. Research paper submitted to IEEE ICAITPR 2026 and currently under review.",
    paperLink: "https://drive.google.com/drive/u/1/folders/1unpyNidT2Zs83YNTc_CkUhb8Z95O7TME",
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
    id: "robot-navigation",
    number: "01",
    badge: "🚀 Research Project",
    title: "Reinforcement Learning-Based Multi-Robot Navigation",
    description:
      "Developed an autonomous multi-robot navigation system using Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO). Integrated Waveshare robot chassis, Jetson Nano, RPLiDAR, and camera modules with ROS 2 and Gazebo, implementing sensor fusion and real-time communication architecture.",
    techTags: [
      "Python",
      "Reinforcement Learning",
      "DQN",
      "PPO",
      "ROS 2",
      "Gazebo",
      "Jetson Nano",
      "RPLiDAR",
      "Sensor Fusion"
    ],
    links: {
      github: "https://github.com/Progya-Biswas/Autonomous-Navigation-of-Robot-using-Reinforcement-Learning",
      demo: null,
    },
    isFlagship: true,
  },

  {
    id: "HorizonEye",
    number: "02",
    badge: "🛰️ Aerospace Project",
    title: "HorizonEye — Vision-Based Horizon Detection & Height Estimation",
    description:
      "Developed a camera-based flight perception system using sky-ground segmentation, Otsu thresholding, and horizon line fitting to estimate aircraft roll and horizon dip angle. Implemented camera and spherical-Earth geometry to estimate flight altitude using Python, OpenCV, and NumPy.",
    techTags: [
      "Python",
      "OpenCV",
      "NumPy",
      "Computer Vision",
      "Image Processing",
      "Otsu Thresholding",
      "Horizon Detection",
      "Flight Perception"
    ],
    links: {
      github: "https://github.com/Progya-Biswas/HorizonEye",
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "monocular-distance",
    number: "03",
    badge: "🔬 Research Project",
    title: "Real-Time Distance Estimation using Monocular Vision",
    description:
      "Developed a real-time object distance estimation system using a single RGB camera and monocular depth estimation algorithms. Optimized the inference pipeline for real-time performance, with potential applications in autonomous systems and assistive technology for visually impaired individuals. Research paper submitted to IEEE ICAITPR 2026 and currently under review.",
    techTags: [
      "Python",
      "Computer Vision",
      "Monocular Vision",
      "Depth Estimation",
      "Image Processing",
      "Real-Time Systems"
    ],
    links: {
      github: "https://github.com/Progya-Biswas/Real-Time-Distance-Estimation-using-Monocular-Vision",
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "nail-disease-classification",
    number: "04",
    badge: "🧠 AI & Research",
    title: "Comparative Analysis of Transfer Learning Models with Explainable AI for Automated Nail Disease Classification ",
    description:
      "Conducted a comparative study of six pretrained architectures—ResNet-50, VGG16, DenseNet-121, ConvNeXt-Tiny, ViT-B/16, and DINOv2—for 13-class nail disease classification using 1,008 images and grouped stratified 5-fold cross-validation. Achieved 88.1% accuracy and 0.857 Macro-F1 with fully fine-tuned DINOv2. Applied Grad-CAM and Attention Rollout for model interpretability and potential classification bias analysis.",
    techTags: [
      "Python",
      "Deep Learning",
      "Transfer Learning",
      "DINOv2",
      "ResNet-50",
      "Vision Transformers",
      "Grad-CAM",
      "Explainable AI",
      "Computer Vision"
    ],
    links: {
      github: "https://github.com/Progya-Biswas/Analysis-of-Transfer-Learning-Models-with-Explainable-AI-for-Automated-Nail-Disease-Classification",
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "energy-aware-shap",
    number: "05",
    badge: "⚡ Research Project",
    title: "Energy-Aware Parallel Computation of SHAP Explanations",
    description:
      "Benchmarked Serial, Multiprocessing, Threading, Joblib, and Ray execution strategies for TreeSHAP and KernelSHAP, completing 972 runs across 324 configurations. Measured CPU time and energy consumption using CodeCarbon and analyzed workload-dependent trade-offs across Random Forest, XGBoost, SVM-RBF, and Logistic Regression to develop time-optimal, energy-optimal, and balanced CPU scheduling recommendations.",
    techTags: [
      "Python",
      "SHAP",
      "Explainable AI",
      "Multiprocessing",
      "Threading",
      "Joblib",
      "Ray",
      "XGBoost",
      "CodeCarbon"
    ],
    links: {
      github: "https://github.com/Progya-Biswas/Energy-Aware-Parallel-Computation-of-SHAP-Explanations",
      demo: null,
    },
    isFlagship: false,
  },

  {
    id: "sound-energy-harvesting",
    number: "06",
    badge: "🔋 Engineering Project",
    title: "Sound Energy Harvesting System using Piezo Sensors",
    description:
      "Designed a piezoelectric energy harvesting system to convert ambient sound vibrations into usable electrical energy for low-power applications. Implemented energy storage and power optimization circuits to improve energy utilization and overall system efficiency.",
    techTags: [
      "Piezoelectric Sensors",
      "Embedded Systems",
      "Energy Harvesting",
      "Circuit Design",
      "Power Optimization",
      "Energy Storage"
    ],
    links: {
      github: "",
      demo: null,
    },
    isFlagship: false,
  },
];


export const certificates = {
  featured: [
    {
      name: "Comparative Analysis of Transfer Learning Models with Explainable AI",
      issuer: "IJERT",
      year: "2026",
      icon: "📄",
    },
  ],
};

export const education = {
  degree: "BTECH - Bachelor of Technology",
  institution: "College",
  cgpa: "8.5",
  graduation: "2027",
  twelfth: "12th Science",
  tenth: "10th ICSE",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Problem Solving",
    "Python · SQL · Power BI",
    "Creative Digital Projects",
  ],
  credential: "BTECH Student",
  copyright: `© ${new Date().getFullYear()} Progya Biswas | Built with React`,
};

// Contact & Email Configuration
export const contactConfig = {
  recipientEmail: "progya.biswas2004@gmail.com",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};