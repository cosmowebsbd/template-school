"use client";
import { siteConfig } from "@/config/site";

export default function Facilities() {
  return (
    <section id="facilities" style={{ padding: "7rem 5%", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.72rem", color: "#1B4F8A",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem",
          }}>Our Campus</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "var(--color-text)",
          }}>World Class Facilities</h2>
          <div style={{ width: "40px", height: "2px", background: "#1B4F8A", margin: "1.2rem auto 0" }} />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}>
          {siteConfig.facilities.map((fac, i) => (
            <div key={i} style={{
              background: "var(--color-bg2)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px", padding: "1.8rem",
              textAlign: "center",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#1B4F8A";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{fac.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem", fontWeight: 500,
                color: "var(--color-text)", marginBottom: "0.5rem",
              }}>{fac.name}</h3>
              <p style={{
                fontSize: "0.82rem", color: "var(--color-muted)",
                lineHeight: 1.6, fontWeight: 300,
              }}>{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}