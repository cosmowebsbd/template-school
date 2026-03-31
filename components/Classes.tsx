"use client";
import { siteConfig } from "@/config/site";

export default function Classes() {
  return (
    <section id="classes" style={{ padding: "7rem 5%", background: "var(--color-bg2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.72rem", color: "#1B4F8A",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem",
          }}>Academic Program</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, color: "var(--color-text)",
          }}>Classes We Offer</h2>
          <div style={{ width: "40px", height: "2px", background: "#1B4F8A", margin: "1.2rem auto 0" }} />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {siteConfig.classes.map((cls, i) => (
            <div key={i} style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px", padding: "2rem",
              borderTop: "3px solid #1B4F8A",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(27,79,138,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <p style={{
                fontSize: "0.72rem", color: "#1B4F8A",
                letterSpacing: "0.15em", textTransform: "uppercase",
                marginBottom: "0.5rem", fontWeight: 500,
              }}>{cls.grades}</p>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem", fontWeight: 500,
                color: "var(--color-text)", marginBottom: "0.8rem",
              }}>{cls.level}</h3>
              <p style={{
                fontSize: "0.85rem", color: "var(--color-muted)",
                lineHeight: 1.7, marginBottom: "1.2rem", fontWeight: 300,
              }}>{cls.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cls.subjects.map((sub, j) => (
                  <span key={j} style={{
                    background: "rgba(27,79,138,0.08)",
                    color: "#1B4F8A", fontSize: "0.72rem",
                    padding: "0.25rem 0.7rem", borderRadius: "50px",
                    fontWeight: 500,
                  }}>{sub}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}