"use client";

import Image from "next/image";

const roles = [
  "Automation Engineering",
  "N8N & Zapier",
  "AI Agent Builder",
  "Marketing Systems",
  "Web App Development",
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 0 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Text */}
          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                background: "rgba(192, 57, 43, 0.1)",
                border: "1px solid rgba(192, 57, 43, 0.3)",
                borderRadius: "50px",
                fontSize: "0.8rem",
                color: "var(--red-light)",
                fontWeight: 600,
                letterSpacing: "1px",
                marginBottom: "1.5rem",
                textTransform: "uppercase" as const,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--red-light)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Available for Projects
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "3.5rem",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Hello, I&apos;m{" "}
              <span className="gradient-text">John!</span>
            </h1>

            <p
              style={{
                fontSize: "1.3rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                fontWeight: 300,
              }}
            >
              Transforming Manual Work into{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Automated Systems
              </strong>
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              {roles.map((role) => (
                <span
                  key={role}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    color: "var(--accent-light)",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--highlight)";
                    e.currentTarget.style.color = "var(--highlight)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--accent-light)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "2rem",
                fontSize: "1rem",
                maxWidth: "480px",
              }}
            >
              Automation-driven professional with 4+ years building reliable
              systems — from AI-powered tools to full marketing pipelines that
              drive measurable outcomes.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <a href="#automation" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeInRight 1s ease-out 0.3s both",
            }}
            className="hero-image-wrapper"
          >
            <div style={{ position: "relative" }}>
              {/* Red ring accent */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "50%",
                  border: "2px solid rgba(192, 57, 43, 0.25)",
                  animation: "float 8s ease-in-out infinite",
                }}
              />
              {/* Cyan ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-24px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  animation: "float 10s ease-in-out infinite reverse",
                }}
              />
              <Image
                src="/images/headshot.png"
                alt="John Lemuel Culinares"
                width={350}
                height={350}
                style={{
                  borderRadius: "50%",
                  border: "4px solid var(--accent-light)",
                  boxShadow:
                    "0 0 60px rgba(44, 116, 179, 0.3), 0 0 100px rgba(192, 57, 43, 0.1)",
                  animation: "float 6s ease-in-out infinite",
                  objectFit: "cover",
                  transition: "all 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 80px rgba(0, 212, 255, 0.4), 0 0 120px rgba(192, 57, 43, 0.2)";
                  e.currentTarget.style.borderColor = "var(--highlight)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 60px rgba(44, 116, 179, 0.3), 0 0 100px rgba(192, 57, 43, 0.1)";
                  e.currentTarget.style.borderColor = "var(--accent-light)";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-image-wrapper {
            order: -1;
          }
          .hero-grid h1 {
            font-size: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            text-align: center;
          }
          .hero-grid > div:first-child > div:nth-child(4) {
            justify-content: center;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
