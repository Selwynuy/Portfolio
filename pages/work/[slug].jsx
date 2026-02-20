import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeft, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { getProjectBySlug, getAllProjectSlugs } from "../../data/projects";

const ProjectDetail = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return (
      <div className="min-h-screen bg-primary/30 py-32 text-center">
        <div className="container mx-auto">
          <h2 className="h2 mb-4">Project not found</h2>
          <Link href="/work" className="text-accent hover:underline">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-primary/30 py-32">
      <Circles />
      <div className="container mx-auto px-4 pb-20">
        {/* back button */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-x-2 text-white/60 hover:text-accent transition-colors duration-300"
          >
            <BsArrowLeft />
            <span>Back to projects</span>
          </Link>
        </motion.div>

        {/* hero section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-12"
        >
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden border border-white/10 mb-8">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="h1 mb-2">{project.title}</h1>
              <p className="text-white/60 text-lg">{project.description}</p>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-accent transition-all duration-300"
                >
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300"
                >
                  <BsBoxArrowUpRight />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* main content */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:col-span-2 space-y-8"
          >
            {/* description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">About this project</h2>
              <p className="text-white/70 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-x-3 text-white/70">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* sidebar */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="space-y-6"
          >
            {/* tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-white/70 border border-white/10 bg-white/5 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* category */}
            {project.category && (
              <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <p className="text-white/70">{project.category}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    props: {
      project: project || null,
    },
  };
}

export default ProjectDetail;
