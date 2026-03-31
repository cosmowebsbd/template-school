"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Menu() {
  const [active, setActive] = useState(0);
  const current = siteConfig.menuCategories[active];

  return (
    <section id="menu" style={{ padding: "7rem 5%", background: "var(--color-bg2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.72rem", fontWeight: 400, color: "var(--color-accent)",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem",
          }}>What We Serve</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--color-text)" }}>Our Menu</h2>
          <div style={{ width: "40px", height: "1px", background: "var(--color-accent)", margin: "1.2rem auto 0" }} />
        </div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          {siteConfig.menuCategories.map((cat, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: "0.6rem 1.5rem", borderRadius: "50px",
              border: i === active ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
              background: i === active ? "var(--color-accent)" : "transparent",
              color: i === active ? "#fff" : "var(--color-muted)",
              fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.05em",
              cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-body)",
            }}>{cat.category}</button>
          ))}
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px", background: "var(--color-border)",
          border: "1px solid var(--color-border)", borderRadius: "8px", overflow: "hidden",
        }}>
          {current.items.map((item, i) => (
            <div key={i} style={{
              background: "var(--color-bg)", padding: "1.8rem",
              display: "flex", flexDirection: "column", gap: "0.5rem", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-bg2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--color-bg)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.3 }}>{item.name}</h3>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 500, color: "var(--color-accent)", whiteSpace: "nowrap", flexShrink: 0 }}>{item.price}</span>
              </div>
              <p style={{ fontSize: "0.83rem", fontWeight: 300, color: "var(--color-muted)", lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.78rem", color: "var(--color-muted)", letterSpacing: "0.05em" }}>
          All prices inclusive of VAT · Seasonal menu items may vary
        </p>
      </div>
    </section>
  );
}