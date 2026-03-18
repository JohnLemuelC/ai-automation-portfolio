"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "200+", label: "Assets Created" },
  { number: "62%", label: "Faster Production" },
  { number: "70K", label: "FB Likes Grown" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll, .animate-fade-left, .animate-fade-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">About Me</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Building Systems That{" "}
            <span className="gradient-text-red">Scale</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Text */}
          <div className="animate-fade-left">
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              I specialize in building automation systems that eliminate
              repetitive tasks and create operational efficiency. From multi-step
              N8N workflows to AI-powered tools, I transform complex manual
              processes into streamlined, reliable systems.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              Currently contributing to{" "}
              <strong style={{ color: "var(--highlight)" }}>AdLlama</strong> — an
              AI-powered Google Ads management platform — while also building
              custom automation tools and AI agents for various clients.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              Known for calm execution, clear communication, and delivering
              practical solutions in fast-moving remote teams. Google certified
              in Analytics and Ads Search.
            </p>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" as const }}>
              <a
                href="mailto:j.culinares06@gmail.com"
                className="btn btn-primary"
                style={{ fontSize: "0.9rem" }}
              >
                Work With Me
              </a>
              <a
                href="https://linkedin.com/in/john-lemuel-culinares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "0.9rem" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-right"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "1.75rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--red-light)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(192, 57, 43, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--highlight)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.number}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
