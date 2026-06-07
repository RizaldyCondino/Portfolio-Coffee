import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Project {
  id: string | number;
  image: string;
  video?: string;
  title: string;
  client: string;
  year: string | number;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-10 group">
      {/* Image — left side */}
      <div className="relative md:w-[55%] shrink-0 overflow-hidden rounded-sm">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        )}

        {/* Badge overlay
  <div
    className="absolute bottom-3.5 left-3.5 flex items-center gap-2 bg-white px-3 py-1.5 text-[10px] tracking-widest uppercase font-semibold"
    style={{ color: "#1a1a1a" }}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#bf5220] shrink-0" />
    {project.title} · {project.year}
  </div> */}
      </div>

      {/* Content — right side */}
      <div className="flex flex-col flex-1 pt-1">
        {/* Meta */}
        <div
          className="flex gap-2 text-[10px] tracking-widest uppercase font-medium mb-4"
          style={{ color: "#9e9080" }}
        >
          <span>{project.id}</span>
          <span>—</span>
          <span>{project.client || "Full-Stack"}</span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold tracking-tight leading-snug mb-4"
          style={{
            color: "#1a1a1a",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider font-semibold px-2 py-1 border"
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

        {/* Links */}
        <div
          className="flex items-center gap-5 pt-4 border-t text-[10px] tracking-widest uppercase font-semibold"
          style={{ borderColor: "#e0d8cc" }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "#7a6f65" }}
            >
              <SiGithub size={14} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "#bf5220" }}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
