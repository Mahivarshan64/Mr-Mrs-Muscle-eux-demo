/* eslint-disable */
/* global React, Button, Icon_Dumbbell, Icon_Menu, Icon_X, Icon_ArrowRight */
// Sticky navbar with glassmorphism blur.
// Becomes more opaque on scroll.

function Navbar({ activeLink = "Features", onLinkClick = () => {} }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Home", "Pricing", "Gallery", "About", "Contact"];
  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    height: "var(--nav-h)",
    background: scrolled ? "rgba(11, 11, 11, 0.78)" : "rgba(11, 11, 11, 0.45)",
    backdropFilter: "blur(16px) saturate(140%)",
    WebkitBackdropFilter: "blur(16px) saturate(140%)",
    borderBottom: `1px solid ${scrolled ? "var(--border)" : "var(--border-subtle)"}`,
    transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
  };

  return (
    <header style={navStyle}>
      <div style={{
        maxWidth: "var(--max-w)",
        height: "100%",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
      }}>
        {/* Brand */}
        <a href="#top" style={{
          display: "flex", alignItems: "center", gap: 12,
          textDecoration: "none", color: "var(--fg1)",
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36, borderRadius: 6,
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--accent)",
          }}>
            <Icon_Dumbbell size={20} />
          </span>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900, fontSize: 18, letterSpacing: "0.01em",
            textTransform: "uppercase", lineHeight: 1,
          }}>
            Raw Fitness
          </span>
        </a>

        {/* Desktop links */}
        <nav style={{
          display: "flex", alignItems: "center", gap: 4,
          // hidden on mobile via media query — handled inline:
        }} className="mmm-desktop-nav">
          {links.map((l) => {
            const active = l === activeLink;
            return (
              <a key={l} href={`#${l.toLowerCase()}`}
                 onClick={(e) => { e.preventDefault(); onLinkClick(l); }}
                 style={{
                   padding: "8px 14px",
                   fontSize: 13,
                   fontWeight: 600,
                   color: active ? "var(--fg1)" : "var(--fg2)",
                   textDecoration: "none",
                   letterSpacing: "0.01em",
                   position: "relative",
                   transition: "color var(--dur-micro) var(--ease-out)",
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.color = "var(--fg1)"}
                 onMouseLeave={(e) => e.currentTarget.style.color = active ? "var(--fg1)" : "var(--fg2)"}>
                {l}
                {active && (
                  <span style={{
                    position: "absolute",
                    left: 14, right: 14, bottom: 2,
                    height: 2, background: "var(--accent)",
                  }} />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="mmm-desktop-nav">
            <Button size="md" variant="primary" iconRight={<Icon_ArrowRight size={16} />} onClick={() => window.navigateTo('Pricing')}>
              Join the Elite
            </Button>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="mmm-mobile-only"
            aria-label="Toggle menu"
            style={{
              display: "none",
              width: 44, height: 44,
              alignItems: "center", justifyContent: "center",
              background: "var(--surface-1)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              color: "var(--fg1)",
              cursor: "pointer",
            }}>
            {mobileOpen ? <Icon_X size={20} /> : <Icon_Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute",
          top: "var(--nav-h)", left: 0, right: 0,
          background: "rgba(11, 11, 11, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          padding: 16,
        }}>
          <div style={{ display: "grid", gap: 4 }}>
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                 onClick={(e) => { e.preventDefault(); setMobileOpen(false); onLinkClick(l); }}
                 style={{
                   padding: "14px 16px",
                   color: "var(--fg1)",
                   fontWeight: 600,
                   fontSize: 15,
                   textDecoration: "none",
                   border: "1px solid var(--border-subtle)",
                   borderRadius: 8,
                   background: "var(--surface-1)",
                 }}>
                {l}
              </a>
            ))}
            <div style={{ marginTop: 8 }}>
              <Button size="lg" variant="primary" fullWidth
                      iconRight={<Icon_ArrowRight size={18} />}
                      onClick={() => { setMobileOpen(false); window.navigateTo('Pricing'); }}>
                Join the Elite
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

window.Navbar = Navbar;
