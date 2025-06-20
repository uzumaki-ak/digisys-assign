"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  image: string;
  technologies: string[];
  visitLink: string;
}

const projects: Project[] = [
  {
    id: "protool",
    title: "Protool",
    dateRange: "February 24, 2022 - Now",
    description:
      "An all-in-one web and app development company offering advanced chatbot workflows, website development, and digital marketing services",
    image: "./images/dashboard.jpg",
    technologies: ["React", "Next.js", "TailwindCSS", "Prisma"],
    visitLink: "#",
  },
  {
    id: "zenhostify",
    title: "Zenhostify",
    dateRange: "March 15, 2023 - December 2023",
    description:
      "A modern hosting provider offering shared, WordPress, reseller, and cloud hosting with WHMCS integration and an affiliate system.",
    image: "./images/dashboard.jpg",
    technologies: ["React", "TailwindCSS", "Next.js", "Prisma"],
    visitLink: "#",
  },
  {
    id: "GitREpoHelper",
    title: "GitREpoHelper",
    dateRange: "June 15, 2024 - December 2023",
    description:
      "A modern hosting provider offering shared, WordPress, reseller, and cloud hosting with WHMCS integration and an affiliate system.",
    image: "./images/dashboard.jpg",
    technologies: ["React", "TailwindCSS", "Next.js", "Prisma"],
    visitLink: "#",
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-400 text-sm mb-4">{project.dateRange}</p>
        <p className="text-gray-300 text-base leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Project Image/Mockup */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-6 overflow-hidden">
        <div className="relative">
          {/* Browser mockup frame */}
          <div className="bg-gray-700 rounded-t-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Website content area */}
          <div className="bg-white rounded-b-lg min-h-[400px] relative overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} Dashboard`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = "none";
                (e.currentTarget
                  .nextElementSibling as HTMLElement)!.style.display = "flex";
              }}
            />
            {/* Fallback content if image fails to load */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🖼️</div>
                <p>Project Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Visit Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
        <ExternalLink size={16} />
        Visit website
      </button>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">My Work.</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            I have been programming for 7 years and have worked on numerous
            projects. Below are some of my latest projects; you can find more on
            my GitHub profile.
          </p>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
