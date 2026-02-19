export const projects = [
  {
    slug: "penethodix",
    title: "Penethodix",
    thumbnail: "/Penethodix_Thumbnail.png",
    description: "A modern Next.js application built with cutting-edge features and best practices.",
    longDescription: "Penethodix is a full-stack Next.js application that demonstrates modern web development practices. Built with performance and user experience in mind.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive design",
      "Modern UI/UX",
      "Performance optimized",
      "SEO friendly",
    ],
    githubUrl: "https://github.com/Selwynuy",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "puhon",
    title: "Puhon",
    thumbnail: "/Puhon_thumbnail.png",
    description: "A Next.js project showcasing clean architecture and modern design patterns.",
    longDescription: "Puhon is built with Next.js, focusing on clean code architecture and maintainable design patterns. The project demonstrates best practices in modern web development.",
    techStack: ["Next.js", "React", "JavaScript", "CSS"],
    features: [
      "Clean architecture",
      "Modern design",
      "Scalable structure",
      "User-friendly interface",
    ],
    githubUrl: "https://github.com/Selwynuy",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "selvis",
    title: "Selvis",
    thumbnail: "/Selvis_thumbnail.png",
    description: "A Next.js application with advanced features and seamless user experience.",
    longDescription: "Selvis is a comprehensive Next.js application that showcases advanced features and provides a seamless user experience across all devices.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Advanced features",
      "Cross-platform compatibility",
      "Optimized performance",
      "Intuitive interface",
    ],
    githubUrl: "https://github.com/Selwynuy",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "kopikuys",
    title: "Kopikuys",
    thumbnail: "/Kopikuys_thumbnail.png",
    description: "A Next.js project with modern features and excellent user experience.",
    longDescription: "Kopikuys is a Next.js application that combines modern web technologies with excellent user experience design, creating an engaging and functional platform.",
    techStack: ["Next.js", "React", "JavaScript", "CSS"],
    features: [
      "Modern design",
      "User-friendly",
      "Fast loading",
      "Responsive layout",
    ],
    githubUrl: "https://github.com/Selwynuy",
    liveUrl: null,
    category: "Web Development",
  },
  {
    slug: "image-text-speech",
    title: "Image Text Speech",
    thumbnail: "/Image_Text_Speech_thumbnail.png",
    description: "A Next.js application that processes images, extracts text, and converts to speech.",
    longDescription: "Image Text Speech is an innovative Next.js application that combines image processing, OCR (Optical Character Recognition), and text-to-speech capabilities. Users can upload images, extract text from them, and convert the extracted text into speech.",
    techStack: ["Next.js", "React", "TypeScript", "AI/ML APIs"],
    features: [
      "Image upload and processing",
      "OCR text extraction",
      "Text-to-speech conversion",
      "Real-time processing",
    ],
    githubUrl: "https://github.com/Selwynuy",
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
