import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "@/components/Navbar";
import { LifeGrid } from "@/components/LifeGrid";
import { ProjectsSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { SmallFooter } from "@/components/SmallFooter";

export const metadata: Metadata = {
  title: "Rizaldy | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />

      <main>
        <section id="home" className="min-h-screen py-8">
          {children}
        </section>

        <section id="about" className="min-h-screen">
          <LifeGrid />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <ProjectsSection />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>

      <SmallFooter />
    </>
  );
}