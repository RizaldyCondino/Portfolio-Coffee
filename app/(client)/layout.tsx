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
  icons: {
    icon: "/Images/remove2.png",
  },
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
        <section id="home" className=" border-b ">
          {children}
        </section>

        <section id="about" className="py-15 border-b ">
          <LifeGrid />
        </section>

        <section id="projects" className="py-15 border-b">
          <ProjectsSection />
        </section>

        <section id="contact" className="py-15 border-b">
          <ContactSection />
        </section>
      </main>

      <SmallFooter />
    </>
  );
}
