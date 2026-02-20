export const projects = [
  {
    slug: "penethodix",
    title: "Penethodix",
    thumbnail: "/Penethodix_Thumbnail.png",
    description: "A state-aware penetration testing notebook for organizing engagements, tracking targets, and documenting findings.",
    longDescription: "Penethodix is a comprehensive penetration testing management platform that helps security professionals organize engagements, track targets and ports, document findings with markdown support, and receive intelligent suggestions based on detected services. Features include real-time synchronization, auto-save functionality, a knowledge base with export/import, and a rule-based suggestion engine that provides context-aware recommendations during security assessments.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Radix UI", "React Hook Form", "Zod", "Recharts"],
    features: [
      "Engagement management with phase tracking",
      "Target and port tracking with service detection",
      "Markdown findings editor with auto-save",
      "Intelligent rule-based suggestions",
      "Knowledge base with export/import",
      "Real-time synchronization",
    ],
    githubUrl: "https://github.com/Selwynuy/Penethodix",
    liveUrl: "https://penethodix.vercel.app/",
    category: "Security",
  },
  {
    slug: "puhon",
    title: "Puhon",
    thumbnail: "/Puhon_thumbnail.png",
    description: "AI-powered career assessment platform with personalized job path recommendations for students.",
    longDescription: "Puhon is an AI-powered career guidance platform that helps students discover their ideal career paths through comprehensive assessments. The system uses multi-module assessments with Likert scale and multiple-choice questions to generate an 8-dimensional trait vector, then uses cosine similarity matching to recommend personalized career paths. Features include optional Google Gemini AI integration for natural rationale generation, academic grade tracking, job path exploration with salary ranges, scholarship browsing, and milestone tracking.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "NextAuth", "Google Gemini API", "Radix UI"],
    features: [
      "Comprehensive career assessment",
      "AI-powered personalized recommendations",
      "Trait vector matching algorithm",
      "Job path exploration with detailed info",
      "Academic grade tracking",
      "Scholarship and college browsing",
    ],
    githubUrl: "https://github.com/Selwynuy/Puhon",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "selvis",
    title: "Selvis",
    thumbnail: "/Selvis_thumbnail.png",
    description: "A data visualization dashboard built with Next.js and Recharts for interactive analytics.",
    longDescription: "Selvis is a modern data visualization application that provides interactive dashboards and analytics. Built with Next.js and Recharts, it offers responsive charts, real-time data updates, and an intuitive interface for exploring and analyzing data across various metrics and dimensions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts"],
    features: [
      "Interactive data visualization",
      "Multiple chart types",
      "Responsive dashboard design",
      "Real-time data updates",
      "Modern UI components",
      "Cross-platform compatibility",
    ],
    githubUrl: "https://github.com/Selwynuy/SelVis",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "kopikuys",
    title: "Kopikuys",
    thumbnail: "/Kopikuys_thumbnail.png",
    description: "A modern coffee franchise website with interactive menu displays and franchise information.",
    longDescription: "Kopikuys is a premium coffee franchise website showcasing 7 signature drink series, branch locations across Luzon and Visayas, and comprehensive franchise information. The site features smooth Framer Motion animations, an interactive menu carousel with touch gestures, branch location finder, and detailed franchise package information including the ₱88,888 franchise offering.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive menu carousel with 7 series",
      "Branch location finder (20+ locations)",
      "Franchise information and packages",
      "Smooth animations with Framer Motion",
      "Touch gesture navigation",
      "Responsive design",
    ],
    githubUrl: "https://github.com/Selwynuy/Kopikuys",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "image-text-speech",
    title: "Image Text Speech",
    thumbnail: "/Image_Text_Speech_thumbnail.png",
    description: "An OCR-powered application that extracts text from images and converts it to speech.",
    longDescription: "Image Text Speech is a React application that combines optical character recognition (OCR) with text-to-speech capabilities. Users can upload images containing text, extract the text using Tesseract.js OCR engine, and convert the extracted text into speech. The application provides a seamless workflow for processing images, recognizing text, and generating audio output.",
    techStack: ["React", "TypeScript", "Tesseract.js", "Web Speech API"],
    features: [
      "Image upload and processing",
      "OCR text extraction with Tesseract.js",
      "Text-to-speech conversion",
      "Real-time text recognition",
      "Browser-based processing",
    ],
    githubUrl: "https://github.com/Selwynuy/Image-to-TTS-to-Speech-Recognition",
    liveUrl: null,
    category: "Web Development",
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = () => {
  return projects.map((project) => project.slug);
};
