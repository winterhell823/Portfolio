// ============================================
// PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio information

export const personalInfo = {
  name: "Vaibhav Sharma",
  title: "GenAI Engineer | Building Production AI Systems",
  subtitle: "ECE Student | Graduating 2027 | Passionate about Building Intelligent Systems",
  location: "Delhi NCR, India",
  email: "vaibhav@example.com",
  
  // Bio for About section
  bio: [
    "I'm an Electronics and Communication Engineering student graduating in 2027, with a deep passion for building intelligent, production-ready AI systems.",
    "My journey in GenAI has taken me from process optimization with Celonis at Tech Mahindra to mastering LLMs and RAG pipelines through IBM training. I specialize in creating AI agents and full-stack applications that solve real-world problems.",
    "When I'm not coding, you'll find me participating in hackathons, exploring new AI frameworks, or contributing to open-source projects."
  ]
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/winterhell823",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vaibhav-sharma-ab8233295/",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:vaibhav.sharmahello@gmail.com",
    icon: "Mail"
  }
];

export const skills = {
  technical: [
    "Python",
    "LangChain",
    "CrewAI",
    "RAG Pipelines",
    "React",
    "FastAPI",
    "Machine Learning",
    "GenAI",
    "Big Data",
    "LLMs",
    "Vector Databases",
    "TensorFlow",
    "PyTorch",
    "Docker"
  ],
  tools: [
    "Celonis",
    "OpenAI",
    "Pinecone",
    "ChromaDB",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "AWS"
  ]
};

export const experiences = [
  {
    company: "Tech Mahindra",
    role: "Intern",
    period: "Jan 2025 - Oct 2025",
    description: "Worked on process optimization using Celonis, analyzing business processes and implementing data-driven improvements. Developed automation solutions that improved efficiency by 30%.",
    skills: ["Celonis", "Process Mining", "Data Analysis", "Process Optimization"],
    icon: "Briefcase",
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "IBM",
    role: "GenAI Training Program",
    period: "2024",
    description: "Completed intensive training in GenAI technologies including LLMs, RAG pipelines, and Machine Learning. Built multiple AI agent applications and gained hands-on experience with cutting-edge AI frameworks.",
    skills: ["GenAI", "LLMs", "RAG Pipelines", "LangChain", "Machine Learning"],
    icon: "GraduationCap",
    color: "from-indigo-500 to-purple-500"
  }
];

export const projects = [
  {
    title: "Medibot - AI Healthcare Assistant",
    description: "An intelligent healthcare chatbot powered by LangChain and RAG pipelines that provides medical information, symptom analysis, and extracts data from medical images. Features advanced NLP for understanding patient queries.",
    image: "https://images.unsplash.com/photo-1767716134786-92b647b12846",
    tags: ["LangChain", "RAG", "Python", "Image Extraction", "GenAI"],
    category: "GenAI",
    github: "https://github.com/winterhell823/medibot",
    demo: "https://medibot-demo.com"
  },
  {
    title: "Multi-Agent Task Orchestrator",
    description: "Built using CrewAI to coordinate multiple AI agents for complex task execution. Implements agent collaboration patterns for automated workflow management and decision-making processes.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349",
    tags: ["CrewAI", "Multi-Agent", "Python", "AI Orchestration"],
    category: "GenAI",
    github: "https://github.com/winterhell823/task-orchestrator",
    demo: "#"
  },
  {
    title: "Smart Document Analyzer",
    description: "A full-stack application that uses RAG pipelines to analyze and extract insights from large document collections. Features vector search, semantic understanding, and natural language queries.",
    image: "https://images.unsplash.com/photo-1767966928908-9eeaa1a2cc39",
    tags: ["RAG", "Vector DB", "FastAPI", "React", "LLMs"],
    category: "Full Stack",
    github: "https://github.com/winterhell823/doc-analyzer",
    demo: "#"
  },
  {
    title: "Real-time Chat Analytics",
    description: "Hackathon project featuring real-time sentiment analysis and conversation insights using ML models. Built with React frontend and FastAPI backend with WebSocket support.",
    image: "https://images.pexels.com/photos/7089024/pexels-photo-7089024.jpeg",
    tags: ["Machine Learning", "React", "FastAPI", "WebSocket"],
    category: "Hackathons",
    github: "https://github.com/winterhell823/chat-analytics",
    demo: "#"
  }
];

export const achievements = [
  {
    title: "Hackathon Participant",
    description: "Actively participating in regional hackathons",
    icon: "Trophy",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "AI Agent Applications",
    description: "Built 5+ production-ready AI agent systems",
    icon: "Code",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "IBM Certified",
    description: "GenAI and LLM specialization training",
    icon: "Award",
    color: "from-indigo-400 to-purple-500"
  },
  {
    title: "Process Optimization",
    description: "30% efficiency improvement at Tech Mahindra",
    icon: "Zap",
    color: "from-green-400 to-emerald-500"
  }
];

export const contactInfo = {
  title: "Get In Touch",
  subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  description: "Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. I'll try my best to get back to you!"
};

// Resume file path (put your resume PDF in /public folder)
export const resumeUrl = "https://drive.google.com/file/d/1CFnJYHz0IMrYwXuqiEsRCW6V22PyyWRA/view?usp=sharing";
