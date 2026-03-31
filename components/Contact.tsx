"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", guests: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   const msg = `Hello ${siteConfig.name}! I am interested in admission.%0A%0AStudent Name: ${form.name}%0AParent Phone: ${form.phone}%0AClass Interested: ${form.guests}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%", padding: "0.85rem 1rem",
    border: "1px solid var(--color-border)", borderRadius: "4px",
    background: "var(--color-bg)", color: "var(--color-text)",
    fontSize: "0.9rem", fontFamily: "var(--font-body)",
    fontWeight: 300, outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "7rem 5%", background: "var(--color-bg2)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 400, color: "var(--color-accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Apply Now</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--color-text)" }}>Map</h2>
          <div style={{ width: "40px", height: "1px", background: "var(--color-accent)", margin: "1.2rem auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          <div style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, marginBottom: "1.5rem", color: "var(--color-text)" }}>Admission Enquiry</h3>
            {sent && (
              <div style={{ background: "rgba(200,169,110,0.1)", border: "1px solid var(--color-accent)", borderRadius: "4px", padding: "0.8rem 1rem", marginBottom: "1.2rem", fontSize: "0.85rem", color: "var(--color-accent)" }}>
                ✓ Redirecting to WhatsApp...
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                </div>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Phone *</label>
                  <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+880 17..." style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Date *</label>
                  <input name="date" type="date" required value={form.date} onChange={handleChange} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                </div>
                <div>
                  <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Guests *</label>
                  <select name="guests" required value={form.guests} onChange={handleChange} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--color-border)")}>
                    <option value="">Select</option>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>)}
                    <option value="9+">9+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any special requests..." rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
              </div>
              <button type="submit" style={{
                background: "var(--color-accent)", color: "#fff", border: "none",
                padding: "0.95rem", borderRadius: "4px", fontSize: "0.85rem",
                fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
                cursor: "pointer", fontFamily: "var(--font-body)", transition: "opacity 0.2s", marginTop: "0.5rem",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                Send via WhatsApp →
              </button>
            </form>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-border)", aspectRatio: "16/10" }}>
              <iframe src={siteConfig.googleMapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "1.8rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, marginBottom: "1.2rem", color: "var(--color-text)" }}>Contact Info</h3>
              {[
                { icon: "📍", label: "Address", value: siteConfig.address },
                { icon: "📞", label: "Phone", value: siteConfig.phone },
                { icon: "✉️", label: "Email", value: siteConfig.email },
                { icon: "🕐", label: "Hours", value: siteConfig.openHours },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", padding: "0.8rem 0", borderBottom: i < 3 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--color-accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.label}</p>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", fontWeight: 300 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </section>
  );
}