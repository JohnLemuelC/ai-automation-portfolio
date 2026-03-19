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
      <Nav />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Automation />
        <hr className="divider" />
        <AIAgents />
        <hr className="divider" />
        <WebApps />
        <hr className="divider" />
        <Marketing />
        <hr className="divider" />
        <Results />
        <hr className="divider" />
        <Tools />
        <hr className="divider" />
        <Certifications />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Contact />
      </main>
      <footer style={{
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        color: "#505050",
        fontSize: "0.8rem",
      }}>
        <p>© 2025 John Lemuel Culinares — Built with Next.js</p>
      </footer>
    </>
  );
}
