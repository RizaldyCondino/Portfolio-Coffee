import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Project {
  id: string | number;
  image: string;
  title: string;
  client: string;
  year: string | number;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="flex flex-col group cursor-pointer border rounded-sm overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl"
      style={{ borderColor: "#e0d8cc" }}
    >
      {/* Project Card Image Container - Moved to absolute top */}
      <div className="w-full h-56 overflow-hidden will-change-transform">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-5 flex-grow">
        {/* Project Meta Info */}
        <div
          className="flex justify-between items-start text-[10px] tracking-widest uppercase mb-3 font-medium"
          style={{ color: "#9e9080" }}
        >
          <div className="flex gap-2">
            <span>{project.id}</span>
            <span>—</span>
            <span className="max-w-[180px] break-words">{project.client}</span>
          </div>
          <span className="shrink-0 text-right ml-2">{project.year}</span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold tracking-tight mb-3 leading-snug"
          style={{ color: "#1a1a1a", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-grow"
          style={{ color: "#7a6f65" }}
        >
          {project.description}
        </p>

        {/* Tags Group */}
        <div className="flex flex-wrap gap-2 mt-auto mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider font-semibold px-2 py-1 border rounded-sm"
              style={{
                borderColor: "#e8e0d0",
                color: "#7a6f65",
                backgroundColor: "rgba(232, 224, 208, 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links (GitHub & Live Demo) */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#e0d8cc] text-[10px] tracking-widest uppercase font-semibold">
          <TooltipProvider>
            {project.githubUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                    style={{ color: "#7a6f65" }}
                  >
                    <SiGithub size={14} />
                    <span>GitHub</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View source code on GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}

            {project.liveDemoUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                    style={{ color: "#bf5220" }}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open live project demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}