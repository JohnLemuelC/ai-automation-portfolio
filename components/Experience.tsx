"use client";

import { useEffect, useRef } from "react";

const timeline = [
  { date: "2025 – Present", title: "AI Automation & Systems Support", company: "Contract / Project-Based", desc: "Building KPI hubs, N8N workflows, AI agents, and MCP servers. Contributing to AdLlama (Google Ads AI platform). Deploying event-driven automations with error handling and Slack/Discord alerting.", accent: true },
  { date: "2024 – 2025", title: "Marketing Associate", company: "Synergy Data Investments (Remote)", desc: "200+ investor-facing assets, automated email journeys, 28 investor deals. Built ops automations improving on-time delivery to 91%.", accent: false },
  { date: "2024 – 2025", title: "Customer Success Associate", company: "SDI Living (Remote)", desc: "90% CSAT, 22% increase in call show-up rates. Managed ~20 daily inquiries with <1-hour first response. CRM data cleanup cutting duplicates by 40%.", accent: false },
  { date: "2023 – 2024", title: "Customer Service Associate / Case Manager", company: "PeakSupport (Remote, BPO)", desc: "60 tickets/day across chat, email, and phone. 92% SLA, 94% CSAT. Authored macros and SOPs reducing AHT by 18%.", accent: false },
  { date: "2022 – 2023", title: "Marketing Assistant", company: "Metalkin Australia (Remote)", desc: "Facebook ad campaigns generating 168 leads, 54 booked meetings, 5 closed deals. Weekly performance and budget reports.", accent: false },
  { date: "2021 – 2022", title: "Digital Marketing Support", company: "Aljay Agro-Industrial Solutions (Remote)", desc: "Event-led campaigns averaging 95 sign-ups. Profile visits up 65%, branded search volume up 28%.", accent: false },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Career</span>
          <h2 className="section-heading">Work Experience</h2>
        </div>

        <div style={{ maxWidth: "760px" }}>
          {timeline.map((item, i) => (
            <div
              key={item.title + item.date}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.5rem",
                paddingBottom: i < timeline.length - 1 ? "2.25rem" : 0,
                borderBottom: i < timeline.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                marginBottom: i < timeline.length - 1 ? "2.25rem" : 0,
              }}
            >
              <div style={{ paddingTop: "0.15rem" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: item.accent ? "#E74C3C" : "#555", letterSpacing: "0.02em" }}>{item.date}</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "0.98rem", letterSpacing: "-0.01em", marginBottom: "0.2rem" }}>{item.title}</h3>
                <p style={{ color: "#666", fontSize: "0.82rem", marginBottom: "0.5rem", fontWeight: 500 }}>{item.company}</p>
                <p style={{ color: "#888", fontSize: "0.83rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .experience-row { grid-template-columns: 1fr !important; gap: 0.4rem !important; }
        }
      `}</style>
    </section>
  );
}
