import { projects } from "@/constants/data";
import { ProjectCard } from "./ProjectCard"; // Adjust this path as needed

export function ProjectsSection() {
  return (
    <section style={{ backgroundColor: "#f5f0e8" }} className="w-full ">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b pb-8 mb-12" style={{ borderColor: "#e8e0d0" }}>
          <h2 
            className="leading-tight tracking-tight max-w-2xl" 
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 3vw, 3.5rem)", fontWeight: 700 }}
          >
            <span style={{ color: "#1a1a1a" }}>Projects</span>
          </h2>
          <a 
            href="https://github.com/RizaldyCondino" 
            className="mt-4 md:mt-0 text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: "#1a1a1a" }}
          >
            View all work ↗
          </a>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}