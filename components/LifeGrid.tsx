import TechStackMarquee from "./TechStackMarquee";

const ORANGE = "#bf5220";
const CREAM = "#f5f0e8";
const BORDER = "#e0d8cc";
const MUTED = "#9e9080";
const INK = "#1a1a1a";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs tracking-widest uppercase"
      style={{ color: MUTED }}
    >
      {children}
    </span>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span style={{ color: ORANGE }}>{children}</span>;
}

/* ── WORK card ── */
function WorkCard() {
  return (
    <div
      className="flex-1 rounded-sm border p-6 flex flex-col gap-4"
      style={{ borderColor: BORDER, backgroundColor: CREAM }}
    >
      <Tag>Dream Role</Tag>
      <h2
        className="leading-snug"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.35rem",
          fontWeight: 600,
          color: INK,
        }}
      >
        Junior Full Stack Developer
      </h2>

      <p className="text-sm leading-relaxed" style={{ color: "#5a5148" }}>
        Passionate about building <Highlight>modern, performant web applications</Highlight>{" "}
        that deliver exceptional user experiences. Currently developing production-ready 
        projects while mastering full-stack development.
      </p>

      <div className="mt-2 text-sm" style={{ color: "#5a5148" }}>
        <strong>Current Focus:</strong>
        <ul className="list-disc list-inside mt-1.5 space-y-1 text-sm">
          <li>Building full-stack apps with <Highlight>Next.js 15</Highlight> &amp; TypeScript</li>
          <li>Modern UI/UX with Tailwind + shadcn/ui</li>
          <li>Backend with Node.js, Express &amp; PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}

/* ── LEARNING card ── */
/* ── LEARNING card ── */
function LearningCard() {
  return (
    <div
      className="flex-1 rounded-sm border p-6 flex flex-col gap-4"
      style={{ borderColor: BORDER, backgroundColor: CREAM }}
    >
      <Tag>Currently Learning</Tag>
      <h2
        className="leading-snug"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.35rem",
          fontWeight: 600,
          color: INK,
        }}
      >
        React, TypeScript &amp; AI
      </h2>

      <p className="text-sm leading-relaxed" style={{ color: "#5a5148" }}>
        Deep diving into the modern React ecosystem while exploring Artificial Intelligence. 
        Passionate about building intelligent, AI-powered web applications that combine 
        great user experience with smart functionality.
      </p>

      <div className="mt-3">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: MUTED }}>
          FOCUS AREAS
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
            Next.js App Router
          </span>
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
            TypeScript Patterns
          </span>
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
            Server Components
          </span>
         
          <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
            Database Design
          </span>

           <span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: BORDER }}>
            AI Integration
          </span>
          
        </div>
      </div>

      <div className="mt-2 pt-3 border-t" style={{ borderColor: BORDER }}>
        <p className="text-xs leading-relaxed" style={{ color: "#5a5148" }}>
          Currently experimenting with <Highlight>AI-powered features</Highlight> like
          intelligent search for my Ecommerce.
        </p>
      </div>
    </div>
  );
}

/* ── TECH STACK card (Full Width) ── */
function TechStackCard() {
  return (
    <div
      className="rounded-sm border p-8 flex flex-col"
      style={{ borderColor: BORDER, backgroundColor: CREAM }}
    >
      <div className="flex flex-col md:flex-row md:items-end gap-3 mb-6">
        <div>
          <h3
            className="leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.75rem",
              fontWeight: 600,
              color: INK,
            }}
          >
            Tech Stack
          </h3>
          <p className="text-sm mt-1" style={{ color: ORANGE }}>
            Languages • Frameworks • Tools
          </p>
        </div>
      </div>

      <div className="flex-1 py-4">
        <TechStackMarquee compact={true} speed={30} />
      </div>

      <div className="pt-6 border-t mt-auto" style={{ borderColor: BORDER }}>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#5a5148" }}>
          Always exploring new technologies and improving my craft. Currently 
          focused on building scalable full-stack applications with modern tools.
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: MUTED }}>
          <span>🇵🇭</span>
          <span>San Jose del Monte, Philippines</span>
        </div>
      </div>
    </div>
  );
}

/* ── GRID ── */
export function LifeGrid() {
  return (
    <section id="about" style={{ backgroundColor: "#f5f0e8" }} className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10  flex flex-col gap-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <h2 
            className="leading-tight tracking-tight" 
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: "clamp(2.25rem, 3vw, 3.75rem)", 
              fontWeight: 700,
              color: INK
            }}
          >
            About Me
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#5a5148" }}>
            A self-taught Full Stack Developer.
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WorkCard />
          <LearningCard />
        </div>

        {/* Full width Tech Stack at the bottom */}
        <TechStackCard />

      </div>
    </section>
  );
}