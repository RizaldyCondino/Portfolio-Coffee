"use client"
import { Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ORANGE = "#bf5220";
const CREAM = "#f5f0e8";
const BORDER = "#e0d8cc";
const MUTED = "#9e9080";
const INK = "#1a1a1a";

export function SmallFooter() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: CREAM,
        borderColor: BORDER,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side - Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <MapPin size={18} style={{ color: ORANGE }} />
              <span className="text-sm" style={{ color: "#5a5148" }}>
                San Jose del Monte, Philippines
              </span>
            </div>

            <p className="text-[10px] text-center md:text-left" style={{ color: MUTED }}>
              © {new Date().getFullYear()} Rizaldy Condino. All Rights Reserved.
            </p>
          </div>

          {/* Center - Social Links with Tooltips */}
          <TooltipProvider>
            <div className="flex items-center gap-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/RizaldyCondino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-700 transition-colors p-2 -m-2 rounded-full hover:bg-white/70"
                    style={{ color: INK }}
                  >
                    <SiGithub size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/rizaldy-condino-b24b3a20b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-700 transition-colors p-2 -m-2 rounded-full hover:bg-white/70"
                    style={{ color: INK }}
                  >
                    <FaLinkedin size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:rizaldycondino07@gmail.com"
                    className="hover:text-orange-700 transition-colors p-2 -m-2 rounded-full hover:bg-white/70"
                    style={{ color: INK }}
                  >
                    <Mail size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email Me</p>
                </TooltipContent>
              </Tooltip>

             
            </div>
          </TooltipProvider>

          {/* Right Side - Email & Phone */}
          <div className="flex flex-col items-center md:items-end gap-1 text-sm">
            <a
              href="mailto:rizaldycondino07@gmail.com"
              className="hover:underline transition-all"
              style={{ color: "#5a5148" }}
            >
              rizaldycondino07@gmail.com
            </a>
            
            {/* Replace with your actual number */}
            <a
             
              className=" transition-all text-sm mt-1"
              style={{ color: "#5a5148" }}
            >
              +63 930 3817388
            </a>

            <div className="flex items-center gap-1.5 text-xs mt-3" style={{ color: MUTED }}>
              <span>Made with</span>
              <span style={{ color: ORANGE }}>♥</span>
              <span>in the Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}