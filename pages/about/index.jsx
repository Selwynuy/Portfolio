import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CertsCarousel from "../../components/CertsCarousel";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Next.js Web Development",
        info: "Modern frontend + practical full-stack tooling.",
        icons: [SiNextdotjs, FaReact, FaJs, FaHtml5, FaCss3, SiFramer, FaWordpress],
        groups: [
          {
            title: "Frontend",
            items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "Backend & DB",
            items: ["Supabase", "PostgreSQL", "Django", "Python"],
          },
          {
            title: "APIs & Integrations",
            items: ["Google Gemini API", "GitHub"],
          },
        ],
      },
      {
        title: "Cybersecurity",
        info: "Web, network, and host-level testing with strong fundamentals.",
        groups: [
          {
            title: "Fundamentals",
            items: ["Linux", "Network Security", "Cryptography"],
          },
          {
            title: "Web App Security",
            items: [
              "OWASP Top 10",
              "SQL Injection (SQLi)",
              "Cross-Site Scripting (XSS)",
              "Server-Side Template Injection (SSTI)",
              "CSRF (Cross-Site Request Forgery)",
            ],
          },
          {
            title: "Offensive Testing",
            items: [
              "VAPT",
              "Web Application Penetration Testing",
              "Privilege Escalation",
              "OSINT",
              "Burp Suite",
            ],
          },
          {
            title: "Blue Team & Research",
            items: [
              "Advanced Persistent Threat (APT) Analysis",
              "Digital Forensics",
              "Dark Web Operations",
              "Bug Bounty",
              "Capture The Flag",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Next.js Web Developer — Freelance",
        stage: "2020 - Present",
      },
      {
        title: "Vulnerability Assesment & Penetration Tester Intern — Black Bear Securities",
        stage: "February 2026 - Present",
      },
    ],
  },
  {
    title: "certs",
    info: [
      {
        title: "CAPT",
        info: "Certified Associate Penetration Tester",
        credential: "HV-CAPT-54X6OLSD",
        stage: "Jan 2026",
        site: "Hackviser",
        category: "Security",
        image: "/certs/capt.png",
      },
      {
        title: "CJWPT",
        info: "Certified Junior Web Penetration Tester",
        credential: "4152-4848-3417-3533",
        stage: "Jan 2026",
        site: "Hack & Fix",
        category: "Security",
        image: "/certs/cjwpt.png",
      },
      {
        title: "BTLJ",
        info: "Blue Team Junior Analyst",
        credential: "839343794",
        stage: "Jan 2026",
        site: "Security Blue Team",
        category: "Security",
        image: "/certs/btlj.png",
      },
      {
        title: "CPPS",
        info: "Certified Phishing Prevention Specialist",
        credential: "6272-6231-6194-5612",
        stage: "Dec 2025",
        site: "Hack & Fix",
        category: "Security",
        image: "/certs/cpps.png",
      },
      {
        title: "Introduction to Bug Bounty",
        credential: "a8bf7657dede93c2",
        stage: "Dec 2025",
        site: "Red Team Leaders",
        category: "Security",
        image: "/certs/bug-bounty.png",
      },
      {
        title: "CCSC",
        info: "Certified Career Starter Certification",
        credential: "2912-3000-4058-3482",
        stage: "Dec 2025",
        site: "Hack & Fix",
        category: "General",
        image: "/certs/ccsc.png",
      },
      // Add DevOps/CI-CD certs here too (category: "DevOps")
      // {
      //   title: "Your CI/CD Cert",
      //   info: "Short description",
      //   credential: "ID",
      //   stage: "MMM YYYY",
      //   site: "Issuer",
      //   category: "DevOps",
      //   image: "/certs/your-cicd-cert.png",
      // },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Mindanao State University - General Santos City Campus",
        course: "Bachelor of Science in Information Technology",
        stage: "2022-Present",
        gpa: "1.54",
        category: "Education",
        image: "/certs/msu.png",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [skillTab, setSkillTab] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building <span className="text-accent">fast</span>,{" "}
            <span className="text-accent">secure</span> web experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m Selwyn Uy — a Next.js web developer and penetration tester. I
            ship clean, responsive UIs, build reliable APIs, and approach every
            feature with a security-first mindset (threat modeling, input
            validation, auth/session hardening, and practical testing).
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years building for the web.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clients I've worked with.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Web projects shipped.
                </div>
              </div>

              {/* certs */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Security & web certs.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => { setIndex(itemI); setSkillTab(0); }}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start w-full">
            {aboutData[index].title === "certs" ? (
              <CertsCarousel certs={aboutData[index].info} />
            ) : aboutData[index].title === "education" ? (
              <div className="flex flex-col gap-y-4 w-full">
                {aboutData[index].info.map((edu, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[420px] mx-auto xl:mx-0 bg-[rgba(65,47,123,0.15)] rounded-xl border border-white/10 overflow-hidden"
                  >
                    {/* banner image */}
                    <div className="w-full h-[180px] bg-white/5 border-b border-white/10 flex items-center justify-center overflow-hidden">
                      {edu.image ? (
                        <Image
                          src={edu.image}
                          alt={edu.title}
                          width={420}
                          height={180}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-[13px] text-white/25 text-center px-4 leading-relaxed">
                          {edu.title}
                        </span>
                      )}
                    </div>

                    {/* details */}
                    <div className="p-5 flex flex-col gap-y-1">
                      <div className="text-white font-semibold text-[15px] leading-snug">
                        {edu.title}
                      </div>
                      {edu.course && (
                        <div className="text-[13px] text-white/60">
                          {edu.course}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-x-3 text-[11px] text-white/40 mt-1">
                        {edu.stage && <span>{edu.stage}</span>}
                        {edu.gpa && <span>• GPA: {edu.gpa}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : aboutData[index].title === "skills" ? (
              <div className="w-full flex flex-col gap-y-4">
                {/* inner skill tabs */}
                <div className="flex gap-x-2">
                  {aboutData[index].info.map((role, roleI) => (
                    <button
                      key={roleI}
                      onClick={() => setSkillTab(roleI)}
                      className={`px-3 py-1 text-sm rounded-md border transition-all duration-200 ${
                        skillTab === roleI
                          ? "border-accent text-accent bg-accent/10"
                          : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/70"
                      }`}
                    >
                      {role.title}
                    </button>
                  ))}
                </div>

                {/* active role content */}
                {(() => {
                  const role = aboutData[index].info[skillTab];
                  return (
                    <div className="w-full flex flex-col gap-y-3">
                      {/* subtitle */}
                      <p className="text-[12px] text-white/40">{role.info}</p>

                      {/* icons row (Next.js Developer only) */}
                      {role.icons?.length ? (
                        <div className="flex gap-x-3 flex-wrap gap-y-2">
                          {role.icons.map((Icon, i) => (
                            <div key={i} className="text-xl text-white/70">
                              <Icon />
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {/* grouped chips — scrollable */}
                      <div className="max-h-[330px] overflow-y-auto overflow-x-hidden pr-2 flex flex-col gap-y-4 scrollbar-thin">
                        {role.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-2">
                              {group.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[11px] text-white/70 border border-white/10 bg-white/5 px-2 py-[3px] rounded-md break-words max-w-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* experience (and any other plain-list tab) */
              <div className="flex flex-col gap-y-3 w-full">
                {aboutData[index].info.map((item, itemI) => (
                  <div
                    key={itemI}
                    className="w-full bg-[rgba(65,47,123,0.15)] border border-white/10 rounded-xl pl-4 pr-5 py-4 border-l-2 border-l-accent"
                  >
                    {/* date badge */}
                    {item.stage && (
                      <span className="inline-block text-[10px] uppercase tracking-widest text-accent/80 bg-accent/10 border border-accent/20 rounded px-2 py-[2px] mb-2">
                        {item.stage}
                      </span>
                    )}

                    {/* role / title */}
                    <div className="text-white font-semibold text-[14px] leading-snug">
                      {item.title}
                    </div>

                    {/* sub-info (course, description, etc) */}
                    {(item.info || item.course) && (
                      <div className="text-[12px] text-white/50 mt-1">
                        {item.info ?? item.course}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
