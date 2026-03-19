"use client";

import Image from "next/image";
import { imgSrc } from "../lib/imgSrc";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project+with+you.";

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
        justifyContent: "center",
        padding: "8rem 2rem 4rem",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "760px", width: "100%", animation: "fadeInUp 0.8s ease-out" }}>

        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1rem",
            background: "rgba(192, 57, 43, 0.1)",
            border: "1px solid rgba(192, 57, 43, 0.3)",
            borderRadius: "50px",
            fontSize: "0.75rem",
            color: "var(--red-light)",
            fontWeight: 600,
            letterSpacing: "1px",
            marginBottom: "2rem",
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
              flexShrink: 0,
            }}
          />
          Available for Projects
        </div>

        {/* Headshot */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                position: "absolute",
                inset: "-14px",
                borderRadius: "50%",
                border: "2px solid rgba(192, 57, 43, 0.25)",
                animation: "float 8s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-28px",
                borderRadius: "50%",
                border: "1px solid rgba(0, 212, 255, 0.12)",
                animation: "float 10s ease-in-out infinite reverse",
              }}
            />
            <Image
              src={imgSrc("headshot.png")}
              alt="John Lemuel Culinares"
              width={220}
              height={220}
              style={{
                borderRadius: "50%",
                border: "3px solid rgba(192, 57, 43, 0.5)",
                boxShadow:
                  "0 0 50px rgba(192, 57, 43, 0.2), 0 0 80px rgba(0, 212, 255, 0.08)",
                animation: "float 6s ease-in-out infinite",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
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
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--text-muted)",
            marginBottom: "1.75rem",
            fontWeight: 300,
          }}
        >
          Transforming Manual Work into{" "}
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>
            Automated Systems
          </strong>
        </p>

        {/* Role tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap" as const,
            gap: "0.6rem",
            justifyContent: "center",
            marginBottom: "1.75rem",
          }}
        >
          {roles.map((role) => (
            <span
              key={role}
              style={{
                padding: "0.4rem 0.9rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "50px",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                fontWeight: 500,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--highlight)";
                e.currentTarget.style.color = "var(--highlight)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {role}
            </span>
          ))}
        </div>

        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "2.25rem",
            fontSize: "1rem",
            maxWidth: "520px",
            margin: "0 auto 2.25rem",
          }}
        >
          Automation-driven professional with 4+ years building reliable
          systems — from AI-powered tools to full marketing pipelines that
          drive measurable outcomes.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
          <a href="#automation" className="btn btn-primary">
            View My Work
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp Me
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
