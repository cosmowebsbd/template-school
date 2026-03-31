import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a14", color: "rgba(245,240,232,0.6)", padding: "3rem 5%" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "#F5F0E8", marginBottom: "0.3rem" }}>{siteConfig.name}</p>
          <p style={{ fontSize: "0.78rem", fontWeight: 300 }}>{siteConfig.address}</p>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {siteConfig.facebook && (
            <a href={siteConfig.facebook} target="_blank" style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.82rem", textDecoration: "none" }}>Facebook</a>
          )}
          {siteConfig.instagram && (
            <a href={siteConfig.instagram} target="_blank" style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.82rem", textDecoration: "none" }}>Instagram</a>
          )}
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.82rem", textDecoration: "none" }}>WhatsApp</a>
        </div>
        <p style={{ fontSize: "0.75rem", fontWeight: 300 }}>
          © {new Date().getFullYear()} {siteConfig.name} · Built by{" "}
          <a href="https://cosmowebs.com" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>CosmoWebs</a>
        </p>
      </div>
    </footer>
  );
}