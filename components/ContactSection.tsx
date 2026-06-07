"use client";
import { Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';
import { ComposeModal } from "./ComposeModal";
import { useState } from "react";

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

/* ── CONTACT CARD ── */
function ContactCard({
  icon,
  title,
  description,
  action,
  href,
  target = "_blank",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
  target?: string;
}) {
  return (
    
    <a  href={href}
      target={target}
      rel="noopener noreferrer"
      className="group rounded-sm border p-8 flex flex-col gap-6 transition-all hover:-translate-y-0.5 hover:shadow-xl"
      style={{ borderColor: BORDER, backgroundColor: CREAM }}
    >
      <div className="w-12 h-12 rounded-full border flex items-center justify-center"
           style={{ borderColor: BORDER }}>
        {icon}
      </div>

      <div>
        <h3
          className="text-2xl font-semibold mb-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: INK,
          }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#5a5148" }}>
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t flex items-center justify-between"
           style={{ borderColor: BORDER }}>
        <span className="text-sm font-medium group-hover:text-orange-700 transition-colors"
              style={{ color: ORANGE }}>
          {action} →
        </span>
      </div>
    </a>
  );
}

/* ── MAIN CONTACT SECTION ── */
export function ContactSection() {
  const [showCompose, setShowCompose] = useState(false);
  return (
    
    <section id="contact" style={{ backgroundColor: "#f5f0e8" }} className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <Tag>Get In Touch</Tag>
          <h2
            className="leading-tight tracking-tight mt-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.25rem, 3vw, 3.75rem)",
              fontWeight: 700,
              color: INK,
            }}
          >
            Let's build something <Highlight>together</Highlight>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#5a5148" }}>
            I'm currently open to new opportunities and interesting projects.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
        onClick={() => setShowCompose(true)}
        className="group rounded-sm border p-8 flex flex-col gap-6 transition-all hover:-translate-y-0.5 hover:shadow-xl text-left w-full"
        style={{ borderColor: BORDER, backgroundColor: CREAM }}
      >
        <div className="w-12 h-12 rounded-full border flex items-center justify-center"
             style={{ borderColor: BORDER }}>
          <Mail size={28} style={{ color: ORANGE }} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: INK }}>
            Email
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#5a5148" }}>
            Feel free to reach out if you have any questions or just want to say hi.
          </p>
        </div>
        <div className="mt-auto pt-6 border-t flex items-center justify-between"
             style={{ borderColor: BORDER }}>
          <span className="text-sm font-medium" style={{ color: ORANGE }}>
            Send me an email →
          </span>
        </div>
      </button>

      {showCompose && <ComposeModal open={showCompose} onClose={() => setShowCompose(false)} />}

          <ContactCard
            icon={<FaLinkedin size={28} style={{ color: ORANGE }} />}
            title="LinkedIn"
            description="Connect with me professionally. I love meeting other developers."
            action="Connect on LinkedIn"
            href="https://www.linkedin.com/in/rizaldy-condino-b24b3a20b"
          />

          <ContactCard
            icon={<SiGithub size={28} style={{ color: ORANGE }} />}
            title="GitHub"
            description="Check out my projects and contributions."
            action="Visit GitHub"
            href="https://github.com/RizaldyCondino"
          />

          {/* Location Card */}
          <div
            className="lg:col-span-3 mt-6 rounded-sm border p-8"
            style={{ borderColor: BORDER, backgroundColor: CREAM }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4">
                  <MapPin size={32} style={{ color: ORANGE }} />
                  <div>
                    <Tag>Based In</Tag>
                    <p className="text-2xl font-semibold mt-1" style={{ color: INK }}>
                      San Jose del Monte, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 md:h-auto md:w-px flex-1" />

              <p className="text-sm leading-relaxed max-w-md" style={{ color: "#5a5148" }}>
                Open to <Highlight>remote opportunities</Highlight> worldwide and local collaborations in the Philippines.
                Currently available for full-time roles and freelance projects.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}