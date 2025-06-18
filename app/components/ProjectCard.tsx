"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  organizationUrl?: string;
  packageUrl?: string;
  proposalUrl?: string;
  figmaUrl?: string;
  features: string[];
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  demoUrl,
  organizationUrl,
  packageUrl,
  proposalUrl,
  figmaUrl,
  features,
  image,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-full min-h-[400px] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]" 
        style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-gray-800 rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-48">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain bg-black"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {githubUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </Button>
                )}
                {liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                {organizationUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Organization
                    </a>
                  </Button>
                )}
                {packageUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={packageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Package
                    </a>
                  </Button>
                )}
                {proposalUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={proposalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Proposal
                    </a>
                  </Button>
                )}
                {figmaUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href={figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Figma
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full [backface-visibility:hidden] bg-gray-800 rounded-xl p-6 overflow-y-auto" 
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="space-y-6">
            {features && features.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-700 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {githubUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Watch Demo
                  </a>
                </Button>
              )}
              {organizationUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Organization
                  </a>
                </Button>
              )}
              {packageUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={packageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Package
                  </a>
                </Button>
              )}
              {proposalUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={proposalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Proposal
                  </a>
                </Button>
              )}
              {figmaUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  asChild
                >
                  <a
                    href={figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Figma
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 