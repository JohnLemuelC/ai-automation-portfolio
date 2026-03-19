"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const tools = [
  { src: imgSrc("tool-gsuite.png"), name: "Google Workspace" },
  { src: imgSrc("tool-microsoft.png"), name: "Microsoft 365" },
  { src: imgSrc("tool-slack.jpg"), name: "Slack" },
  { src: imgSrc("tool-discord.png"), name: "Discord" },
  { src: imgSrc("tool-basecamp.jpg"), name: "Basecamp" },
  { src: imgSrc("tool-monday.png"), name: "Monday.com" },
  { src: imgSrc("tool-salesforce.png"), name: "Salesforce" },
  { src: imgSrc("tool-mailchimp.png"), name: "Mailchimp" },
  { src: imgSrc("tool-meta.png"), name: "Meta Business" },
  { src: imgSrc("tool-respondio.png"), name: "Respond.io" },
  { src: imgSrc("tool-canva.png"), name: "Canva" },
  { src: imgSrc("tool-photoshop.png"), name: "Photoshop" },
  { src: imgSrc("tool-capcut.jpg"), name: "CapCut" },
  { src: imgSrc("tool-wordpress.png"), name: "WordPress" },
  { src: imgSrc("tool-htmlcss.png"), name: "HTML/CSS" },
  { src: imgSrc("tool-guesty.png"), name: "Guesty" },
  { src: imgSrc("tool-airbnb.png"), name: "Airbnb" },
  { src: imgSrc("tool-booking.png"), name: "Booking.com" },
  { src: imgSrc("Retell-AI-Logo.png"), name: "Retell AI" },
  { src: imgSrc("unbounce-logo.png"), name: "Unbounce" },
  { src: imgSrc("Calendly.png"), name: "Calendly" },
  { src: imgSrc("Wrike_logo_2020.png"), name: "Wrike" },
  { src: imgSrc("Outlook.com-Logo.wine.png"), name: "Outlook" },
];

export default function Tools() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 30)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Tech Stack</span>
          <h2 className="section-heading">Tools I Work With</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Software and platforms I use daily</p>
        </div>

        <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1rem" }}>
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
              style={{
                padding: "1.25rem 0.75rem",
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.6rem",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(231,76,60,0.4)";
                e.currentTarget.style.transform = "translateY(-3px)";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) { img.style.filter = "none"; img.style.opacity = "1"; }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) { img.style.filter = "brightness(0) invert(1)"; img.style.opacity = "0.55"; }
              }}
            >
              <img
                src={tool.src}
                alt={tool.name}
                style={{ width: "36px", height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.55, transition: "all 0.2s ease" }}
              />
              <span style={{ fontSize: "0.68rem", color: "#666", textAlign: "center", lineHeight: 1.3, fontWeight: 500 }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) { .tools-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 640px) { .tools-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 400px) { .tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
