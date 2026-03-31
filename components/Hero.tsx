import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #1a1a14 0%, #2d2a1e 50%, #1a1a14 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "1px", height: "120px",
        background: "linear-gradient(to bottom, transparent, var(--color-accent))",
      }} />
      <div style={{ position: "relative", padding: "8rem 5% 5rem", maxWidth: "800px" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 400,
          color: "var(--color-accent)", letterSpacing: "0.2em",
          textTransform: "uppercase", marginBottom: "1.5rem",
          animation: "fadeUp 0.7s ease 0.1s both",
        }}>{siteConfig.heroLabel}</p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 300, color: "#F5F0E8",
          lineHeight: 1.05, marginBottom: "1.5rem",
          animation: "fadeUp 0.7s ease 0.2s both",
        }}>{siteConfig.name}</h1>
        <div style={{
          width: "60px", height: "1px",
          background: "var(--color-accent)",
          margin: "0 auto 1.5rem",
          animation: "fadeIn 0.7s ease 0.3s both",
        }} />
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          fontWeight: 300, color: "rgba(245,240,232,0.7)",
          lineHeight: 1.8, marginBottom: "2.5rem",
          animation: "fadeUp 0.7s ease 0.4s both",
        }}>{siteConfig.tagline}</p>
        <div style={{
          display: "flex", gap: "1rem",
          justifyContent: "center", flexWrap: "wrap",
          animation: "fadeUp 0.7s ease 0.5s both",
        }}>
          <a href="#menu" style={{
            background: "var(--color-accent)", color: "#1a1a14",
            padding: "0.9rem 2.2rem", borderRadius: "50px",
            fontSize: "0.85rem", fontWeight: 500,
            textDecoration: "none", letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>View Menu</a>
          <a href="#contact" style={{
            border: "1px solid rgba(200,169,110,0.4)",
            color: "rgba(245,240,232,0.85)",
            padding: "0.9rem 2.2rem", borderRadius: "50px",
            fontSize: "0.85rem", fontWeight: 400,
            textDecoration: "none", letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>Find Us</a>
        </div>
        <p style={{
          marginTop: "3rem", fontSize: "0.78rem",
          color: "rgba(245,240,232,0.4)", letterSpacing: "0.1em",
          animation: "fadeIn 0.7s ease 0.7s both",
        }}>{siteConfig.openHours}</p>
      </div>
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
      }}>
        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</p>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, var(--color-accent), transparent)",
        }} />
      </div>
    </section>
  );
}