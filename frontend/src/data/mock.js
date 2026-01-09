export const portfolioData = {
  personal: {
    name: "Tummapudi Sambasiva Rao",
    title: "Full Stack Developer",
    roles: ["Python Developer", "Web Developer", "ML Enthusiast", "Problem Solver"],
    email: "srao71099@gmail.com",
    phone: "+91 91773 84427",
    github: "https://github.com/Sunny22110010324",
    linkedin: "https://www.linkedin.com/in/sambasiva-rao",
    location: "Andhra Pradesh, India",
    bio: "Driven and motivated computer science student pursuing a Bachelor's degree at SRM University AP. Passionate about technology, problem-solving, and continuous learning. Strong ability to work in a team, manage time efficiently, and meet deadlines. Proficient in Python, web development and Machine Learning Algorithms.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    resumeUrl: "https://customer-assets.emergentagent.com/job_ae1b4e82-d971-48ba-9891-d96350a734dd/artifacts/qzsqpqu4_MY%20RESUME.pdf"
  },

  skills: {
    programming: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "PHP", level: 70 }
    ],
    frameworks: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "FastAPI", level: 70 },
      { name: "Vue.js", level: 65 }
    ],
    tools: [
      { name: "MySQL", level: 85 },
      { name: "Git/GitHub", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 75 },
      { name: "Dialogflow", level: 70 }
    ],
    ml: [
      { name: "XGBoost", level: 75 },
      { name: "Scikit-learn", level: 80 },
      { name: "ARIMA", level: 70 },
      { name: "NLP", level: 75 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Image Steganography GUI",
      description: "A Python-based GUI application for image steganography with password protection and text-to-speech decoding. Features secure encoding/decoding with pixel-level manipulation using Pillow and NumPy.",
      techStack: ["Python", "Tkinter", "Pillow", "NumPy", "pyttsx3"],
      github: "https://github.com/Sunny22110010324/Image-Steganography-GUI-",
      demo: null,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Performance Dashboard",
      description: "High-performance real-time dashboard built with Vue 3 and TypeScript. Features responsive design and efficient data visualization for monitoring system metrics.",
      techStack: ["Vue 3", "TypeScript", "JavaScript"],
      github: "https://github.com/Sunny22110010324/performance-dashboard",
      demo: null,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Interactive Bézier Curve",
      description: "Interactive visualization of Bézier curves with live mathematics and physics display. Educational tool demonstrating curve mathematics in real-time.",
      techStack: ["JavaScript", "HTML Canvas", "CSS"],
      github: "https://github.com/Sunny22110010324/bezier-curve",
      demo: null,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "QueueCTL - Job Queue System",
      description: "Background job queue system CLI built with Python. Efficient task management system for handling asynchronous operations and background processes.",
      techStack: ["Python", "CLI", "Queue Management"],
      github: "https://github.com/Sunny22110010324/queuectl",
      demo: null,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Cyber Security Intern",
      company: "Edunet Foundation",
      duration: "Jun 2024 - July 2024",
      description: "Worked on a cyber security project focused on image steganography. Gained hands-on experience in data encryption, image processing, and secure communication. Developed and implemented algorithms to conceal and retrieve sensitive information within digital images.",
      achievements: [
        "Implemented secure data embedding algorithms",
        "Developed encryption/decryption mechanisms",
        "Enhanced image processing techniques"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      institution: "SRM University AP",
      duration: "2022 - 2026",
      status: "Pursuing"
    },
    {
      id: 2,
      degree: "Class 12th (BIE AP)",
      institution: "Sri Chaitanya Junior College",
      duration: "2022",
      score: "75.3%"
    },
    {
      id: 3,
      degree: "Class 10th (SSC)",
      institution: "Sri Chaitanya Techno School",
      duration: "2020",
      score: "96%"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      year: "2024"
    },
    {
      id: 2,
      name: "Blockchain Workshop",
      issuer: "Certified",
      year: "2024"
    }
  ]
};