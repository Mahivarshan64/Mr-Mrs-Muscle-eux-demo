/* eslint-disable */
/* global React, Button, Icon_Clock, Icon_MapPin, Icon_Phone, Icon_ArrowRight, Icon_Dumbbell, Icon_Instagram, Icon_Facebook, Icon_Youtube */
// Location & Hours split section + footer.

const HOURS = [
  { day: "Monday — Friday", time: "05:30 — 00:00" },
  { day: "Saturday",        time: "06:00 — 00:00" },
  { day: "Sunday",          time: "06:00 — 00:00" },
];

const PEAK = [
  { label: "Morning peak", time: "06:00 — 09:00" },
  { label: "Evening peak", time: "18:00 — 21:00" },
];

function HoursColumn() {
  return (
    <div style={{
      padding: 32,
      background: "var(--surface-1)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      height: "100%",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <Icon_Clock size={20} stroke="var(--accent)" />
        <span className="eyebrow" style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent)",
        }}>Hours of Operation</span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900, fontSize: 32, lineHeight: 1, letterSpacing: "-0.01em",
        textTransform: "uppercase",
      }}>
        Closes Daily at <span style={{ color: "var(--accent)" }}>12:00 AM</span>
      </h3>

      <div style={{ marginTop: 28, display: "grid", gap: 10 }}>
        {HOURS.map((h) => (
          <div key={h.day} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid var(--border-subtle)",
          }}>
            <span style={{ color: "var(--fg2)", fontSize: 14 }}>{h.day}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--fg1)" }}>
              {h.time}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "var(--fg3)",
          marginBottom: 12,
        }}>Peak Hours · plan your visit</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {PEAK.map((p) => (
            <div key={p.label} style={{
              padding: 16,
              background: "var(--surface-2)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 8,
            }}>
              <div style={{ fontSize: 12, color: "var(--fg3)", marginBottom: 6 }}>{p.label}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 500, color: "var(--accent)" }}>
                {p.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div style={{
      padding: 32,
      background: "var(--accent)",
      color: "var(--fg-on-accent)",
      borderRadius: 12,
      height: "100%",
      display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32,
    }}>
      <div>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: 24,
        }}>
          · Visit us
        </div>

        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900, fontSize: 40, lineHeight: 0.95,
          letterSpacing: "-0.02em", textTransform: "uppercase",
          color: "var(--fg-on-accent)",
        }}>
          Train where Richmond Town gets stronger.
        </h3>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        <div style={{ display: "flex", gap: 14 }}>
          <div style={{
            width: 36, height: 36, flexShrink: 0,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "var(--fg-on-accent)", color: "var(--accent)",
            borderRadius: 8,
          }}>
            <Icon_MapPin size={18} />
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>
            1st floor, 18/1, Alexandria St,<br />
            above royal mart supermarket, near Richmond Park,<br />
            Richmond Town, Bengaluru, Karnataka 560025
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          <div style={{
            width: 36, height: 36, flexShrink: 0,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "var(--fg-on-accent)", color: "var(--accent)",
            borderRadius: 8,
          }}>
            <Icon_Phone size={18} />
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 500, lineHeight: 1.7 }}>
            097395 40008
          </div>
        </div>
      </div>

      <Button variant="secondary" size="lg" iconRight={<Icon_ArrowRight size={18} />}
              onClick={() => window.navigateTo('Contact')}
              style={{
                background: "var(--fg-on-accent)", color: "var(--accent)",
                borderColor: "var(--fg-on-accent)",
              }}>
        Get Directions
      </Button>
    </div>
  );
}

function LocationSection() {
  return (
    <section id="schedule" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div data-reveal="" style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow" style={{
            fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          }}>
            · Location &amp; Hours
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
            textWrap: "balance",
          }}>
            Find us. Plan your session.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }} className="mmm-split-grid">
          <div data-reveal="">
            <HoursColumn />
          </div>
          <div data-reveal="" data-reveal-delay="120">
            <ContactColumn />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const linkStyle = {
    color: "var(--fg2)", textDecoration: "none", fontSize: 14,
    transition: "color var(--dur-micro) var(--ease-out)",
  };
  const socialBtn = {
    width: 40, height: 40,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    border: "1px solid var(--border)", borderRadius: 8,
    background: "var(--surface-1)", color: "var(--fg2)",
    cursor: "pointer", transition: "all var(--dur-micro) var(--ease-out)",
  };

  return (
    <footer id="footer" style={{ padding: "64px 24px 32px", background: "var(--canvas)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) repeat(3, minmax(0, 1fr))",
          gap: 48, paddingBottom: 48,
          borderBottom: "1px solid var(--border-subtle)",
        }} className="mmm-footer-grid">
          {/* brand */}
          <div>
            <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--fg1)" }}>
              <span style={{
                width: 36, height: 36, borderRadius: 6,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "var(--surface-2)", border: "1px solid var(--border)",
                color: "var(--accent)",
              }}>
                <Icon_Dumbbell size={20} />
              </span>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 20, textTransform: "uppercase", letterSpacing: "0.01em",
              }}>Raw Fitness</span>
            </a>
            <p style={{ marginTop: 16, color: "var(--fg2)", fontSize: 14, lineHeight: 1.6, maxWidth: 360 }}>
              Bengaluru's premier unisex fitness hub for strength, community, and life‑changing results.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              <button style={socialBtn} aria-label="Instagram"><Icon_Instagram size={18} /></button>
              <button style={socialBtn} aria-label="Facebook"><Icon_Facebook size={18} /></button>
              <button style={socialBtn} aria-label="YouTube"><Icon_Youtube size={18} /></button>
            </div>
          </div>

          <FooterColumn title="Train" links={["Personalized Training", "Diet Plans", "Cardio Zone", "CrossFit"]} />
          <FooterColumn title="Visit"  links={["Location", "Contact", "Virtual Tour"]} />
          <FooterColumn title="Members" links={["Join the Elite", "Member Login", "Refer a Friend", "FAQ"]} />
        </div>

        <div style={{
          paddingTop: 24,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, flexWrap: "wrap",
        }}>
          <div style={{ color: "var(--fg3)", fontSize: 13 }}>
            © 2026 Raw Fitness. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ ...linkStyle, color: "var(--fg3)", fontSize: 13 }}>Privacy</a>
            <a href="#" style={{ ...linkStyle, color: "var(--fg3)", fontSize: 13 }}>Terms</a>
            <a href="#" style={{ ...linkStyle, color: "var(--fg3)", fontSize: 13 }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  const mapLinkToPage = (l) => {
    const p = l.toLowerCase();
    if (p.includes("location") || p.includes("contact") || p.includes("faq")) return "Contact";
    if (p.includes("pricing") || p.includes("join")) return "Pricing";
    if (p.includes("gallery") || p.includes("tour")) return "Gallery";
    return "Home";
  };
  return (
    <div>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
        textTransform: "uppercase", color: "var(--fg3)", marginBottom: 16,
      }}>{title}</div>
      <div style={{ display: "grid", gap: 10 }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => { e.preventDefault(); window.navigateTo(mapLinkToPage(l)); }} style={{
            color: "var(--fg2)", textDecoration: "none", fontSize: 14,
            transition: "color var(--dur-micro) var(--ease-out)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg2)"}>
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}

window.LocationSection = LocationSection;
window.Footer = Footer;
window.HoursColumn = HoursColumn;
window.ContactColumn = ContactColumn;
