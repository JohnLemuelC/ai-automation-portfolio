"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const WA = "https://wa.me/+639761172117?text=Hi+John%21+I+saw+your+portfolio+and+I%27d+like+to+discuss+a+project.";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const timer = setTimeout(() => {
      els.forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 120));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 2rem 4rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div className="hero-layout" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "5rem", alignItems: "center" }}>

          {/* ── Text ── */}
          <div>
            <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <span className="status-dot" />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#E74C3C" }}>
                Available for Projects
              </span>
            </div>

            <h1
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.08,
                color: "#F0F0F0",
                marginBottom: "1.25rem",
              }}
            >
              Automation &amp; AI<br />
              Systems <span style={{ color: "#E74C3C" }}>Engineer.</span>
            </h1>

            <p
              className="reveal reveal-delay-2"
              style={{ color: "#888", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: "480px" }}
            >
              Hi, I&apos;m <strong style={{ color: "#F0F0F0", fontWeight: 600 }}>John Lemuel</strong> — building workflow automations,
              AI agents, and marketing systems that eliminate manual work and
              drive measurable outcomes.
            </p>

            {/* Role tags */}
            <div className="reveal reveal-delay-2" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.25rem" }}>
              {["N8N & Zapier", "AI Agent Builder", "Google Ads MCP", "Marketing Ops", "Web Apps"].map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </div>

            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#automation" className="btn-red">View My Work</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Me</a>
            </div>
          </div>

          {/* ── Headshot ── */}
          <div className="reveal reveal-delay-2 hero-img-wrap">
            <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
              {/* Red accent square behind */}
              <div style={{
                position: "absolute",
                bottom: "-14px",
                right: "-14px",
                width: "100px",
                height: "100px",
                borderRadius: "12px",
                background: "#E74C3C",
                opacity: 0.85,
                zIndex: 0,
              }} />
              <div style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "#141414",
                aspectRatio: "4/5",
              }}>
                <img
                  src={imgSrc("headshot.png")}
                  alt="John Lemuel Culinares"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-img-wrap {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
