"use client";

import { useEffect, useRef } from "react";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project.";

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "200+", label: "Assets Created" },
  { number: "62%", label: "Faster Production" },
  { number: "91%", label: "On-Time Delivery" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading">Building Systems That Scale</h2>
        </div>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Text */}
          <div className="reveal reveal-delay-1">
            <p style={{ color: "#888", marginBottom: "1.25rem", fontSize: "1rem", lineHeight: 1.8 }}>
              I specialize in automation systems that eliminate repetitive tasks and create operational
              efficiency — from multi-step N8N workflows to AI-powered tools that transform complex
              manual processes into streamlined, reliable systems.
            </p>
            <p style={{ color: "#888", marginBottom: "1.25rem", fontSize: "1rem", lineHeight: 1.8 }}>
              Currently contributing to{" "}
              <strong style={{ color: "#F0F0F0" }}>AdLlama</strong> — an AI-powered Google Ads
              management platform — while also building custom AI agents and automation tools for clients.
            </p>
            <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.8 }}>
              Known for calm execution, clear communication, and practical solutions in fast-moving
              remote teams. Google certified in Analytics and Ads Search.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-red">Work With Me</a>
              <a
                href="https://linkedin.com/in/john-lemuel-culinares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-2">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "1.5rem",
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(231,76,60,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                >
                  <div className="metric-number" style={{ color: "#E74C3C", marginBottom: "0.3rem" }}>{s.number}</div>
                  <div style={{ color: "#666", fontSize: "0.82rem", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
