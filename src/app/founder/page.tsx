"use client";

import React from "react";
import { Linkedin, Instagram, Twitter, ExternalLink } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  description?: string;
  gridSize: "small" | "medium" | "large";
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "JAMES YONG",
    role: "CREATIVE TECHNOLOGIST",
    image: "./images/luffy.webp",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
    description: "Visionary leader driving innovation and creative solutions",
    gridSize: "medium",
  },
  {
    id: "cto",
    name: "FRANCISO WORKIKA",
    role: "VIDEO EDITOR/MOTION DESIGNER",
    image: "./images/naruto.jpg",
    linkedin: "#",
    instagram: "#",
    description: "Expert in visual storytelling and motion graphics",
    gridSize: "large",
  },
  {
    id: "designer",
    name: "VICKI BARWELL",
    role: "EXECUTIVE PRODUCER",
    image: "./images/luffy.webp",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
    description: "Strategic producer ensuring project excellence",
    gridSize: "medium",
  },
  {
    id: "developer",
    name: "ADDIE HAO",
    role: "SENIOR ART DIRECTOR",
    image: "./images/naruto.jpg",
    linkedin: "#",
    instagram: "#",
    description: "Creative director with keen eye for aesthetics",
    gridSize: "small",
  },
  {
    id: "manager",
    name: "ALEXIS DE ZEVE",
    role: "HEAD OF BUSINESS DEVELOPMENT",
    image: "./images/luffy.webp",
    linkedin: "#",
    instagram: "#",
    twitter: "#",
    description: "Strategic business growth and partnerships",
    gridSize: "medium",
  },
  {
    id: "studio",
    name: "ROS SUNDERMANN",
    role: "STUDIO MANAGER",
    image: "./images/naruto.jpg",
    linkedin: "#",
    instagram: "#",
    description: "Operations excellence and team coordination",
    gridSize: "small",
  },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const getGridClasses = () => {
    switch (member.gridSize) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getImageHeight = () => {
    switch (member.gridSize) {
      case "large":
        return "h-96 md:h-full";
      case "medium":
        return "h-80 md:h-full";
      case "small":
        return "h-64 md:h-full";
      default:
        return "h-64 md:h-full";
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${getGridClasses()}`}
    >
      {/* Background Image */}
      <div className={`relative ${getImageHeight()} overflow-hidden`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#374151"/>
                <text x="200" y="200" text-anchor="middle" dy="0.3em" fill="#9CA3AF" font-family="Arial" font-size="20">
                  ${member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </text>
              </svg>
            `)}`;
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg mb-1 tracking-wide">
              {member.name}
            </h3>
            <p className="text-gray-300 text-sm font-medium mb-3 tracking-wider">
              {member.role}
            </p>

            {/* Description - appears on hover */}
            {member.description && (
              <p className="text-gray-400 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {member.description}
              </p>
            )}

            {/* Social Links */}
            <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-blue-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={16} className="text-white" />
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Instagram size={16} className="text-white" />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-blue-400 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Twitter size={16} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Founder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Meet the Team.
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            The creative minds and technical experts behind our innovative
            solutions. Each member brings unique expertise and passion to
            deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation and creativity.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
