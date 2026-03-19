"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const n8n = [
  {
    image: imgSrc("n8n-workflows.png"),
    title: "N8N Blog Automation System",
    desc: "5-workflow system automating the entire blog pipeline — keyword research to WordPress publishing. AI topic generation, outline creation, draft writing, review queue, and auto-publishing.",
    tags: ["N8N", "OpenAI", "Google Sheets", "WordPress"],
    featured: true,
  },
  {
    image: imgSrc("n8n-video.png"),
    title: "Video Production Workflow",
    desc: "N8N backend powering video automation — file processing, AI audio generation, and status tracking.",
    tags: ["N8N", "AI Audio", "Render API"],
  },
  {
    image: imgSrc("apps-script.png"),
    title: "KPI Data Manager",
    desc: "Google Apps Script aggregating KPIs from LinkedIn, Meta, Bing, and StackAdapt into a single Sheets dashboard with Discord notifications.",
    tags: ["Apps Script", "APIs", "Discord", "Google Sheets"],
  },
];

const zapier = [
  { image: imgSrc("zapier-facebook-sheets-email.png"), title: "Facebook Lead Capture", desc: "Captures Facebook Lead Ads, logs to Google Sheets, sends email notifications.", apps: ["Facebook Lead Ads", "Google Sheets", "Email"] },
  { image: imgSrc("zapier-linkedin-hubspot.png"), title: "LinkedIn → HubSpot CRM", desc: "Routes LinkedIn leads via email, creates HubSpot engagement records.", apps: ["LinkedIn Ads", "Email", "HubSpot"] },
  { image: imgSrc("zapier-basecamp-chatgpt-slack.png"), title: "AI Comment Summarizer", desc: "ChatGPT processes Basecamp comments and sends summaries to Slack.", apps: ["Basecamp", "ChatGPT", "Slack"] },
  { image: imgSrc("zapier-leadconnector-zoom.png"), title: "Pipeline → Webinar Reg.", desc: "Auto-registers contacts for Zoom webinars on pipeline stage change.", apps: ["LeadConnector", "Zoom"] },
  { image: imgSrc("zapier-gumroad-leadconnector.png"), title: "Purchase → CRM Sync", desc: "Syncs Gumroad purchases to LeadConnector, creates contact records.", apps: ["Gumroad", "LeadConnector"] },
  { image: imgSrc("zapier-linkedin-email.png"), title: "LinkedIn Lead Alert", desc: "Instant email notification for new LinkedIn Lead Gen Form responses.", apps: ["LinkedIn Ads", "Email"] },
];

export default function Automation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="automation" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        {/* N8N */}
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">N8N &amp; Google Apps Script</span>
          <h2 className="section-heading">Workflow Automation</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Custom workflows automating business processes end-to-end</p>
        </div>

        {/* Featured N8N card */}
        <div className="reveal reveal-delay-1" style={{ marginBottom: "1.5rem" }}>
          <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} data-featured="true">
            <div style={{ overflow: "hidden", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <img
                src={n8n[0].image}
                alt={n8n[0].title}
                style={{ width: "100%", height: "100%", minHeight: "280px", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{n8n[0].title}</h3>
              <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{n8n[0].desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {n8n[0].tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="n8n-sub" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "5rem" }}>
          {n8n.slice(1).map((p, i) => (
            <div key={p.title} className={`reveal reveal-delay-${i + 2}`}>
              <div className="card">
                <img src={p.image} alt={p.title} style={{ width: "100%", height: "200px", objectFit: "cover", objectPosition: "top", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block" }} />
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em", marginBottom: "0.4rem" }}>{p.title}</h3>
                  <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zapier */}
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Zapier Integrations</span>
          <h2 className="section-heading">Connected Workflows</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Lead capture, CRM updates, and team notifications</p>
        </div>

        <div className="zapier-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {zapier.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="card">
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover", objectPosition: "center", background: "#fafafa", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block" }} />
                <div style={{ padding: "1.1rem" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "-0.01em", marginBottom: "0.35rem" }}>{item.title}</h3>
                  <p style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{item.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {item.apps.map((a) => <span key={a} className="tag" style={{ color: "#E74C3C", borderColor: "rgba(231,76,60,0.2)", background: "rgba(231,76,60,0.06)" }}>{a}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-featured="true"] { grid-template-columns: 1fr !important; }
          .n8n-sub { grid-template-columns: 1fr !important; }
          .zapier-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .zapier-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
