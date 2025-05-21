import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPython,
  FaAws,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiPostgresql,
  SiGooglecloud,
  SiOracle,
  SiGradle,
  SiSpringboot,
  SiPostman,
  SiLiquibase,
  SiTeamcity,
  SiHibernate,
  SiSwift,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tabs = ["Skills", "Achievements", "Co-curricular"];

const tabContent = {
  Skills: [
    { name: "Java", icon: <FaJava className="text-orange-600 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-3xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-3xl" /> },
    { name: "SQL", icon: <SiPostgresql className="text-blue-700 text-3xl" /> },
    { name: "Oracle", icon: <SiOracle className="text-red-700 text-3xl" /> },
    { name: "Hibernate", icon: <SiHibernate className="text-gray-600 text-3xl" /> },
    { name: "Gradle", icon: <SiGradle className="text-green-500 text-3xl" /> },
    { name: "Liquibase", icon: <SiLiquibase className="text-blue-600 text-3xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" /> },
    { name: "TeamCity", icon: <SiTeamcity className="text-indigo-500 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-600 text-3xl" /> },
    { name: "GCP", icon: <SiGooglecloud className="text-blue-500 text-3xl" /> },
    { name: "VS Code", icon: <VscVscode className="text-indigo-500 text-3xl" /> },
    { name: "SwiftUI", icon: <SiSwift className="text-orange-400 text-3xl" /> },
  ],
  "Co-curricular": [
    {
      title: "Hackathons & Competitions",
      subtitle: "Participated in inter-collegiate and corporate hackathons",
    },
    {
      title: "Teaching Assistant",
      subtitle: "Grader for CSCI 571 Web Technologies at USC",
    },
     {
      title: "Student Worker",
      subtitle: "Student Assisstant at USC ITS Learning Environment",
    },
    {
      title: "Community Involvement",
      subtitle: "Volunteered at university developer meetups and coding workshops",
    },
  ],
  Achievements: [
    {
      title: "Gold Medalist",
      subtitle: "Cummins Meritorious Student Award – Computer Engineering",
    },
    {
      title: "Rising Star & Spotlight Awards",
      subtitle: "Recognized by Deutsche Bank for outstanding performance",
    },
    {
      title: "1st Prize – Project Competitions",
      subtitle:
        "Tech Srujan (Cummins College), Veritas BTech, ASPIRE 2K22 (PES Modern College)",
    },
    {
      title: "Top 5 Rank – USC",
      subtitle: "CSCI 571 Web Technologies (430+ students) under Prof. Marco Papa",
    },
    {
      title: "IEEE Publication",
      subtitle: "'Serverless Data Protection in Cloud' – ISCON 2023",
    },
  ],
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          &lt; Ski<span className="text-sky-400">lls /&gt;</span>
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeTab === tab
                  ? "bg-sky-400 text-white"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Skills" ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 text-center">
            {tabContent[activeTab].map((item, key) => (
              <div key={key} className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border border-border bg-card hover:border-sky-400 transition-all duration-300 shadow-sm group-hover:scale-105">
                  {item.icon}
                </div>
                <span className="text-xs text-foreground font-medium group-hover:text-sky-400 transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tabContent[activeTab].map((item, key) => (
              <div
                key={key}
  className="bg-card border rounded-lg p-5 shadow-sm hover:border-sky-400 transition-colors"
              >
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
