import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" style={{
      padding: "7rem 5%", background: "var(--color-bg)",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "5rem", alignItems: "center",
      maxWidth: "1200px", margin: "0 auto",
    }} className="about-grid">
      <div style={{
        position: "relative", aspectRatio: "4/5",
        borderRadius: "4px", overflow: "hidden",
        background: "var(--color-bg2)",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg, #E8E4DA, #D4CCBA)",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "rgba(0,0,0,0.1)" }}>☕</span>
        </div>
      </div>
      <div>
        <p style={{
          fontSize: "0.72rem", fontWeight: 400,
          color: "var(--color-accent)", letterSpacing: "0.2em",
          textTransform: "uppercase", marginBottom: "1rem",
        }}>Our Story</p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 400, lineHeight: 1.15,
          marginBottom: "1.5rem", color: "var(--color-text)",
        }}>{siteConfig.aboutTitle}</h2>
        <div style={{ width: "40px", height: "1px", background: "var(--color-accent)", marginBottom: "1.5rem" }} />
        <p style={{
          fontSize: "0.95rem", fontWeight: 300,
          color: "var(--color-muted)", lineHeight: 1.9, marginBottom: "2rem",
        }}>{siteConfig.aboutText}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {[
            { icon: "📍", label: siteConfig.address },
            { icon: "🕐", label: siteConfig.openHours },
            { icon: "📞", label: siteConfig.phone },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", fontSize: "0.85rem", color: "var(--color-muted)" }}>
              <span style={{ fontSize: "0.9rem", marginTop: "0.1rem" }}>{item.icon}</span>
              <span style={{ fontWeight: 300, lineHeight: 1.5 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}