"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "../lib/imgSrc";

const agents = [
  { image: imgSrc("Google Ads MCP Server.png"), title: "Google Ads MCP Server", desc: "MCP server enabling AI assistants (Claude, ChatGPT) to natively query and manage Google Ads accounts — campaigns, keywords, search terms — through natural language.", tags: ["MCP", "Google Ads API", "Python", "AI"], badge: "Open Source", badgeColor: "#22c55e" },
  { image: imgSrc("Claude Code.png"), title: "AdLlama — AI Ads Platform", desc: "Contributing to AdLlama, a Next.js + Python platform for managing Google Ads through a Claude-powered chat interface. Built the Keyword Planner API integration and Ad Copy Validation layer.", tags: ["Next.js", "Python", "Claude API", "Google Ads"], badge: "Contributor", badgeColor: "#E74C3C" },
  { image: imgSrc("Retell-AI-Logo.png"), title: "Slack Ad Script Reviewer", desc: "A Slack bot that automatically reviews ad scripts — checking compliance, tone, CTA strength, and brand voice using AI analysis.", tags: ["Slack API", "Node.js", "AI Review", "Automation"], badge: "In Progress", badgeColor: "#f59e0b" },
  { image: imgSrc("Google Ads MCP Server.png"), title: "Google Ads Agent (Chat)", desc: "Conversational AI agent connecting to live Google Ads data — fetches performance, suggests optimizations, generates keyword ideas through natural dialogue.", tags: ["AI Agent", "Google Ads", "Chat", "Analytics"], badge: "Live", badgeColor: "#22c55e" },
  { image: imgSrc("Gemini_Generated_Image_330ieb330ieb330i.png"), title: "Ad Writing GPT", desc: "Custom GPT trained on high-performing ad copy patterns. Generates platform-specific ads with character count enforcement, CTA optimization, and brand voice matching.", tags: ["GPT", "Copywriting", "Google Ads", "Meta Ads"], badge: "Active", badgeColor: "#22c55e" },
  { image: imgSrc("Gemini_Generated_Image_dcpnjzdcpnjzdcpn.png"), title: "Basecamp AI Agent", desc: "Zapier-powered agent monitoring Basecamp activity, summarizing discussions via ChatGPT, and posting daily briefings to Slack — keeping remote teams aligned.", tags: ["Basecamp", "Zapier", "ChatGPT", "Slack"], badge: "Active", badgeColor: "#22c55e" },
];

export default function AIAgents() {
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
    <section id="ai-agents" ref={ref} style={{ padding: "6rem 0" }}>
      <div className="section-wrap">

        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">AI Agents &amp; Tools</span>
          <h2 className="section-heading">AI-Powered Projects</h2>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.4rem" }}>Agents, MCP servers, and AI tools I&apos;ve built or contributed to</p>
        </div>

        <div className="agents-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {agents.map((a, i) => (
            <div key={a.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <div
                className="card"
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                {/* Colored top bar based on badge */}
                <div style={{ height: "3px", background: a.badgeColor, opacity: 0.7 }} />
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Icon + badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{
                      width: "44px", height: "44px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden", flexShrink: 0,
                    }}>
                      <img src={a.image} alt={a.title} style={{ width: "28px", height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
                    </div>
                    <span style={{
                      padding: "0.2rem 0.65rem",
                      background: `${a.badgeColor}18`,
                      border: `1px solid ${a.badgeColor}40`,
                      borderRadius: "4px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: a.badgeColor,
                      letterSpacing: "0.05em",
                    }}>{a.badge}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.65, flex: 1, marginBottom: "1rem" }}>{a.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {a.tags.map((t) => <span key={t} className="tag" style={{ fontSize: "0.68rem" }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .agents-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .agents-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
