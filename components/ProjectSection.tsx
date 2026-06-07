import { projects } from "@/constants/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" style={{ backgroundColor: "#f5f0e8" }} className="w-full ">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-8 " style={{ borderColor: "#e8e0d0" }}>
          <h2
          
            className="leading-tight tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 3vw, 3.5rem)", fontWeight: 700, color: "#1a1a1a" }}
          >
            Projects
          </h2>
          <a
            href="https://github.com/RizaldyCondino"
            className="mt-4 md:mt-0 text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: "#1a1a1a" }}
          >
            View all work ↗
          </a>
        </div>

        {/* Projects — stacked rows */}
        <div className="flex flex-col divide-y" style={{ borderColor: "#e8e0d0" }}>
          {projects.map((project, i) => (
  <ProjectCard key={project.id} project={project} index={i} />
))}
        </div>

      </div>
    </section>
  );
}