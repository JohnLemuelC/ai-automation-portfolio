"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-scale").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 40);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tools"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="animate-scale"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">Tech Stack</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Tools I Work With
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Software and platforms I use daily
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
          }}
          className="tools-grid"
        >
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="animate-scale"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                minHeight: "110px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--highlight)";
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 212, 255, 0.2)";
                const img = e.currentTarget.querySelector("img") as HTMLElement;
                if (img) {
                  img.style.filter = "none";
                  img.style.opacity = "1";
                  img.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                const img = e.currentTarget.querySelector("img") as HTMLElement;
                if (img) {
                  img.style.filter = "brightness(0) invert(1)";
                  img.style.opacity = "0.7";
                  img.style.transform = "scale(1)";
                }
              }}
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={80}
                height={50}
                style={{
                  maxWidth: "70px",
                  maxHeight: "45px",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.7,
                  transition: "all 0.4s ease",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginTop: "0.65rem",
                  textAlign: "center",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
