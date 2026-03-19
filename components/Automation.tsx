"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { imgSrc } from "../lib/imgSrc";

const n8nProjects = [
  {
    image: imgSrc("n8n-workflows.png"),
    title: "N8N Blog Automation System",
    description:
      "A comprehensive 5-workflow system automating the entire blog creation pipeline — keyword research to WordPress publishing. Includes AI-powered topic generation, outline creation, draft writing, human review queue, and auto-publishing.",
    tags: ["N8N", "OpenAI", "Google Sheets", "WordPress"],
    featured: true,
  },
  {
    image: imgSrc("n8n-video.png"),
    title: "Video Production Workflow",
    description:
      "N8N backend workflow powering video automation — file processing, AI audio generation, and status tracking.",
    tags: ["N8N", "AI Audio", "Render API"],
  },
  {
    image: imgSrc("apps-script.png"),
    title: "KPI Data Manager",
    description:
      "Google Apps Script system aggregating KPIs from LinkedIn, Meta, Bing, and StackAdapt into a single Sheets dashboard with Discord notifications.",
    tags: ["Apps Script", "APIs", "Discord", "Google Sheets"],
  },
];

const zapierWorkflows = [
  {
    image: imgSrc("zapier-facebook-sheets-email.png"),
    title: "Facebook Lead Capture Pipeline",
    description: "Captures Facebook Lead Ads, logs to Google Sheets, sends email notifications.",
    apps: ["Facebook Lead Ads", "Google Sheets", "Email"],
  },
  {
    image: imgSrc("zapier-linkedin-hubspot.png"),
    title: "LinkedIn Ads → HubSpot CRM",
    description: "Routes LinkedIn leads through email notification, creates HubSpot engagement records.",
    apps: ["LinkedIn Ads", "Email", "HubSpot"],
  },
  {
    image: imgSrc("zapier-basecamp-chatgpt-slack.png"),
    title: "AI Comment Summarizer",
    description: "ChatGPT processes Basecamp comments and sends summaries to Slack.",
    apps: ["Basecamp", "ChatGPT", "Slack"],
  },
  {
    image: imgSrc("zapier-leadconnector-zoom.png"),
    title: "Pipeline → Webinar Registration",
    description: "Auto-registers contacts for Zoom webinars on pipeline stage change.",
    apps: ["LeadConnector", "Zoom"],
  },
  {
    image: imgSrc("zapier-gumroad-leadconnector.png"),
    title: "Purchase → CRM Contact Sync",
    description: "Syncs Gumroad purchases to LeadConnector, creates contact records.",
    apps: ["Gumroad", "LeadConnector"],
  },
  {
    image: imgSrc("zapier-linkedin-email.png"),
    title: "LinkedIn Lead Alert",
    description: "Instant email notification for new LinkedIn Lead Gen Form responses.",
    apps: ["LinkedIn Ads", "Email"],
  },
];

function N8NCard({ project }: { project: (typeof n8nProjects)[0] }) {
  if (project.featured) {
    return (
      <div
        className="card"
        style={{
          gridColumn: "span 2",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "300px",
            objectFit: "cover",
            objectPosition: "top",
            borderRight: "1px solid var(--border)",
          }}
        />
        <div
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "var(--bg-card)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
            {project.tags.map((t) => (
              <span key={t} className="tag-cyan">{t}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={220}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          objectPosition: "top",
          borderBottom: "1px solid var(--border)",
          transition: "transform 0.5s ease",
        }}
      />
      <div style={{ padding: "1.5rem", background: "var(--bg-card)" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          {project.title}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
          {project.tags.map((t) => (
            <span key={t} className="tag-cyan">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ZapierCard({ item }: { item: (typeof zapierWorkflows)[0] }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-light)";
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(44, 116, 179, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={220}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          objectPosition: "center",
          borderBottom: "1px solid var(--border)",
          background: "#fafafa",
        }}
      />
      <div style={{ padding: "1.25rem" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>
          {item.title}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.5 }}>
          {item.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem", marginTop: "0.75rem" }}>
          {item.apps.map((a) => (
            <span key={a} className="tag-orange">{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Automation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("animated"), i * 100);
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
      id="automation"
      ref={ref}
      style={{ padding: "6rem 0", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* N8N Section */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">N8N & Google Apps Script</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5rem", fontWeight: 700 }}>
            Workflow Automation
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Custom workflows automating business processes end-to-end
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            marginBottom: "6rem",
          }}
          className="n8n-grid"
        >
          {n8nProjects.map((p) => (
            <div key={p.title} className="animate-on-scroll">
              <N8NCard project={p} />
            </div>
          ))}
        </div>

        {/* Zapier Section */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Zapier Integrations</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5rem", fontWeight: 700 }}>
            Connected Workflows
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Lead capture, CRM updates, and team notifications
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="zapier-grid"
        >
          {zapierWorkflows.map((item) => (
            <div key={item.title} className="animate-on-scroll">
              <ZapierCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .zapier-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .n8n-grid { grid-template-columns: 1fr !important; }
          .n8n-grid > div > .card[style*="span 2"] {
            grid-column: span 1 !important;
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .zapier-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
