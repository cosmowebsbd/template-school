import { siteConfig } from "@/config/site";

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "7rem 5%", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 400, color: "var(--color-accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Visual Story</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--color-text)" }}>Gallery</h2>
          <div style={{ width: "40px", height: "1px", background: "var(--color-accent)", margin: "1.2rem auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }} className="gallery-grid">
          {siteConfig.galleryImages.map((img, i) => (
            <div key={i} style={{
              borderRadius: "4px", overflow: "hidden",
              aspectRatio: i === 0 || i === 3 ? "4/5" : "4/3",
              position: "relative", cursor: "zoom-in",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `hsl(${40 + i * 15}, 20%, ${88 - i * 3}%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", opacity: 0.2 }}>
                  {["🍽️","☕","🌿","🍳","🥗","✨"][i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}