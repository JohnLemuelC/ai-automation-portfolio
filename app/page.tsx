import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Automation from "@/components/Automation";
import AIAgents from "@/components/AIAgents";
import WebApps from "@/components/WebApps";
import Marketing from "@/components/Marketing";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import Results from "@/components/Results";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      <Nav />
      <main>
        <Hero />
        <About />
        <Automation />
        <AIAgents />
        <WebApps />
        <Marketing />
        <Tools />
        <Certifications />
        <Results />
        <Experience />
        <Contact />
      </main>

      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(44, 116, 179, 0.3)",
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p>
          © 2025 John Lemuel Culinares.{" "}
          <span style={{ color: "var(--red-light)" }}>Built with Next.js.</span>{" "}
          Passionate about automation.
        </p>
      </footer>
    </>
  );
}
