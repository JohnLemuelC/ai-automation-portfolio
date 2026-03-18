"use client";

import { useEffect, useRef } from "react";

const timeline = [
  {
    date: "2025 – Present",
    title: "AI Automation & Systems Support",
    company: "Contract / Project-Based",
    description:
      "Building KPI hubs, N8N workflows, AI agents, and MCP servers. Contributing to AdLlama (Google Ads AI platform). Deploying event-driven automations with error handling and Slack/Discord alerting.",
    accent: "red",
  },
  {
    date: "2024 – 2025",
    title: "Marketing Associate",
    company: "Synergy Data Investments (Remote)",
    description:
      "200+ investor-facing assets, automated email journeys, 28 investor deals. Built ops automations improving on-time delivery to 91%.",
    accent: "cyan",
  },
  {
    date: "2024 – 2025",
    title: "Customer Success Associate",
    company: "SDI Living (Remote)",
    description:
      "90% CSAT, 22% increase in call show-up rates. Managed ~20 daily inquiries with <1-hour first response. CRM data cleanup cutting duplicates by 40%.",
    accent: "cyan",
  },
  {
    date: "2023 – 2024",
    title: "Customer Service Associate / Case Manager",
    company: "PeakSupport (Remote, BPO)",
    description:
      "60 tickets/day across chat, email, and phone. 92% SLA, 94% CSAT. Authored macros and SOPs reducing AHT by 18%.",
    accent: "cyan",
  },
  {
    date: "2022 – 2023",
    title: "Marketing Assistant",
    company: "Metalkin Australia (Remote)",
    description:
      "Facebook ad campaigns generating 168 leads, 54 booked meetings, 5 closed deals. Built weekly performance and budget reports.",
    accent: "cyan",
  },
  {
    date: "2021 – 2022",
    title: "Digital Marketing Support",
    company: "Aljay Agro-Industrial Solutions (Remote)",
    description:
      "Event-led campaigns averaging 95 sign-ups. Increased profile visits by 65% and branded search volume by 28%.",
    accent: "cyan",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-fade-left").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 150);
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
      id="experience"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="animate-fade-left"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">Career</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Work Experience
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--red-light) 0%, var(--highlight) 30%, var(--accent-light) 70%, var(--border) 100%)",
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={item.title + item.date}
              className="animate-fade-left"
              style={{
                position: "relative",
                paddingLeft: "60px",
                paddingBottom: i < timeline.length - 1 ? "3rem" : 0,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(10px)";
                const dot = e.currentTarget.querySelector(".timeline-dot") as HTMLElement;
                if (dot) {
                  dot.style.background = item.accent === "red" ? "var(--red-light)" : "var(--highlight)";
                  dot.style.boxShadow =
                    item.accent === "red"
                      ? "0 0 0 8px rgba(192, 57, 43, 0.15)"
                      : "0 0 0 8px rgba(0, 212, 255, 0.15)";
                  dot.style.transform = "scale(1.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                const dot = e.currentTarget.querySelector(".timeline-dot") as HTMLElement;
                if (dot) {
                  dot.style.background = "var(--accent-light)";
                  dot.style.boxShadow = "none";
                  dot.style.transform = "scale(1)";
                }
              }}
            >
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "5px",
                  width: "18px",
                  height: "18px",
                  background: "var(--accent-light)",
                  borderRadius: "50%",
                  border: "3px solid var(--bg-dark)",
                  transition: "all 0.3s ease",
                }}
              />

              <div
                style={{
                  fontSize: "0.85rem",
                  color: item.accent === "red" ? "var(--red-light)" : "var(--highlight)",
                  fontWeight: 600,
                  marginBottom: "0.35rem",
                }}
              >
                {item.date}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.2rem",
                  transition: "color 0.3s ease",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "0.6rem" }}>
                {item.company}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
