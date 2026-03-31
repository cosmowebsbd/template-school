"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Menu", "Gallery", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.2rem 5%",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(250,250,247,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
      transition: "all 0.4s ease",
    }}>
      <a href="#" style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.5rem", fontWeight: 500,
        color: scrolled ? "var(--color-text)" : "#fff",
        textDecoration: "none", letterSpacing: "0.05em",
        transition: "color 0.3s",
      }}>
        {siteConfig.name}
      </a>

      <ul style={{
        display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center",
      }} className="hidden md:flex">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem", fontWeight: 400,
              color: scrolled ? "var(--color-muted)" : "rgba(255,255,255,0.85)",
              textDecoration: "none", letterSpacing: "0.08em",
              textTransform: "uppercase", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "var(--color-muted)" : "rgba(255,255,255,0.85)")}
            >{link}</a>
          </li>
        ))}
        <li>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" style={{
            background: "var(--color-accent)", color: "#fff",
            padding: "0.5rem 1.3rem", borderRadius: "50px",
            fontSize: "0.82rem", fontWeight: 500,
            textDecoration: "none", letterSpacing: "0.05em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >Reserve</a>
        </li>
      </ul>

      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        background: "none", border: "none", cursor: "pointer",
        color: scrolled ? "var(--color-text)" : "#fff",
        fontSize: "1.5rem", padding: "0.3rem",
      }} className="md:hidden">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0,
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.5rem 5%",
          display: "flex", flexDirection: "column", gap: "1.2rem",
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem", color: "var(--color-text)",
                textDecoration: "none", letterSpacing: "0.05em",
              }}>
              {link}
            </a>
          ))}
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" style={{
            background: "var(--color-accent)", color: "#fff",
            padding: "0.7rem 1.5rem", borderRadius: "50px",
            fontSize: "0.9rem", textDecoration: "none",
            textAlign: "center", fontWeight: 500,
          }}>
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
}