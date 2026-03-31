import { siteConfig } from "@/config/site";

export default function Stats() {
  return (
    <section style={{
      background: "#1B4F8A",
      padding: "3rem 5%",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem", textAlign: "center",
      }} className="stats-grid">
        {siteConfig.stats.map((stat, i) => (
          <div key={i}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem", fontWeight: 600,
              color: "#fff", lineHeight: 1,
              marginBottom: "0.5rem",
            }}>{stat.number}</p>
            <p style={{
              fontSize: "0.8rem", color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>{stat.label}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}