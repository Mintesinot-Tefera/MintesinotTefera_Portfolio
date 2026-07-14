// Central content for the portfolio. Edit values here to update the site.

export const profile = {
  name: "Mintesinot Tefera",
  role: "Software Engineer",
  tagline:
    "Backend-focused Software Engineer building scalable systems and AI-driven applications.",
  summary:
    "Software Engineer with 4+ years of experience specializing in backend systems and scalable application development, with a growing focus on machine learning systems and AI-driven applications. I build and integrate backend services that power intelligent products, and I have a strong interest in data-driven systems and applied AI research.",
  location: "Kigali, Rwanda",
  email: "mintetefera26@gmail.com",
  phone: "+250 796 698 299",
  github: "https://github.com/Mintesinot-Tefera",
  githubHandle: "Mintesinot-Tefera",
  linkedin: "https://www.linkedin.com/in/mintesinot-tefera-0a2043197",
  linkedinHandle: "mintesinot-tefera",
  education: {
    degree: "BSc in Software Engineering",
    school: "Bahir Dar University",
  },
  // Drop your PDF here as /public/Mintesinot-Tefera-CV.pdf to enable the download button.
  resume: "/Mintesinot-Tefera-CV.pdf",
  // Replace with your own Formspree form ID (https://formspree.io) to receive messages.
  formspreeId: "mnjkleza",
};

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Live products" },
];

export const skills = [
  {
    group: "Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "Java",
      "C++",
      "Dart",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Litestar", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    group: "Tools & Cloud",
    items: ["Docker", "Git", "AWS", "CI/CD"],
  },
  {
    group: "Foundations",
    items: ["API Design", "System Design", "Cloud Fundamentals"],
  },
];

export const experience = [
  {
    role: "AI Trainer — LLM Evaluation & Systems",
    company: "Anthropic (Claude)",
    location: "Remote",
    period: "Feb 2026 – Present",
    points: [
      "Design and evaluate prompts to improve the behavior, reliability, and safety of large language models in real-world scenarios.",
      "Contribute to training workflows by analyzing model outputs and refining responses for accuracy, coherence, and alignment.",
      "Apply software-engineering scenarios to enhance model performance on coding and system-design tasks.",
    ],
  },
  {
    role: "Backend Developer",
    company: "A2SV (Africa to Silicon Valley)",
    location: "Kigali, Rwanda",
    period: "Aug 2024 – Present",
    points: [
      "Developed and maintained scalable backend services for AI-driven applications (AfroChat), supporting real-time and intelligent features.",
      "Designed RESTful APIs and optimized system performance for high-traffic use cases.",
      "Built systems integrating AI components for efficient data processing and model interaction.",
      "Collaborated with cross-functional teams to deliver reliable, production-ready software.",
    ],
  },
  {
    role: "Junior IS Officer",
    company: "Commercial Bank of Ethiopia",
    location: "Addis Ababa, Ethiopia",
    period: "Apr 2023 – Mar 2025",
    points: [
      "Maintained and monitored critical financial systems to ensure high availability and performance.",
      "Diagnosed and resolved system issues, reducing downtime and improving operational efficiency.",
      "Supported secure and reliable data handling within banking infrastructure.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Dan Energy R&D",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2022 – Apr 2023",
    points: [
      "Designed and developed internal and external software systems.",
      "Contributed to scalable and maintainable application architectures.",
    ],
  },
];

export const projects = [
  {
    name: "Flavor Haven",
    type: "Restaurant Web App",
    description:
      "A modern restaurant platform with menu browsing, online ordering, and secure checkout — integrating both Stripe and Paypack for payments, backed by a PostgreSQL database and a responsive, brand-driven interface.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Paypack"],
    live: "https://flavorhavenrestaurant.onrender.com/",
    featured: true,
  },
  {
    name: "Job Board",
    type: "Recruitment Platform",
    description:
      "A job-listing platform where employers post openings and seekers browse and apply. Includes search and filtering, job management, and a clean application flow.",
    tags: ["React", "Node.js", "MongoDB", "Auth"],
    live: "https://jobboard-client-0rkt.onrender.com/",
    featured: true,
  },
  {
    name: "TenderHub",
    type: "Procurement / Bidding Platform",
    description:
      "A tender bidding platform where organizations publish procurement opportunities and vendors submit competitive bids, with structured listings and a streamlined bidding workflow.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    live: "https://tenderhub-frontend.onrender.com/",
    featured: true,
  },
  {
    name: "AfroChat",
    type: "AI Chat Platform · A2SV",
    description:
      "A production AI-supported chat platform built at A2SV (Africa to Silicon Valley). As a full-stack developer, I build React.js front-end features and Litestar (Python) backend services on Google Cloud, integrating multiple AI tools and APIs with a focus on scalability and performance.",
    tags: ["React.js", "Litestar", "GCP", "AI Integration"],
    live: "https://afrochat.app/",
  },
  {
    name: "E-Commerce Platform",
    type: "Full-Stack Application",
    description:
      "A full-stack store with product management, cart, checkout, and Stripe payment integration, built on a scalable backend architecture.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    live: null,
  },
  {
    name: "RoomieFinder",
    type: "Matching Web App",
    description:
      "A platform that matches roommates using user preferences, with filtering, search, and interaction features for a smooth discovery experience.",
    tags: ["React", "Node.js", "Matching", "Search"],
    live: null,
  },
];

export const certifications = [
  "Google Cybersecurity Certificate",
  "AWS Cloud Technical Essentials",
  "MongoDB Certification",
  "IBM DevOps Fundamentals",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
