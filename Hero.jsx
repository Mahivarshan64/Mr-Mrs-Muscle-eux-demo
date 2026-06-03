/* eslint-disable */
/* global React, Button, Icon_ArrowRight, Icon_Play, Icon_Star, Icon_Sparkles */
// Hero section.
// - Trust badge above headline
// - Massive uppercase display headline
// - Subhead + dual CTAs
// - Right-side decorative stack (hatched placeholder image + stats)

function HatchedImage({ label, height = "100%", accent = false }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height,
      minHeight: 200,
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--surface-1)",
    }}>
      {/* hatch fill */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('./assets/hatch.svg')",
        backgroundSize: "40px 40px",
        opacity: 0.6,
      }} />
      {/* corner tick */}
      {accent && (
        <div style={{
          position: "absolute", top: 16, left: 16,
          padding: "4px 8px",
          fontFamily: "var(--font-mono)",
          fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
          background: "var(--accent)", color: "var(--fg-on-accent)",
        }}>
          PLACEHOLDER
        </div>
      )}
      {/* label */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--fg3)",
        fontFamily: "var(--font-mono)",
        fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        minHeight: "calc(100vh - var(--nav-h) - 60px)", /* leaving room for ticker */
        display: "flex",
        alignItems: "center",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: "var(--max-w)",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
          gap: 64,
          alignItems: "center",
        }} className="mmm-hero-grid">
          {/* Left: content */}
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 104px)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              textWrap: "balance",
            }}>
              Transform your lifestyle.
              <br />
              <span style={{ color: "var(--accent)" }}>Unleash</span> your inner beast.
            </h1>

            <p style={{
              marginTop: 24,
              fontSize: 20,
              color: "var(--fg2)",
              lineHeight: 1.5,
              maxWidth: 560,
            }}>
              Bengaluru's premier unisex fitness hub for strength, community, and life‑changing results.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconRight={<Icon_ArrowRight size={18} />} onClick={() => window.navigateTo('Pricing')}>
                Get Started Now
              </Button>
              <Button variant="secondary" size="lg" iconLeft={<Icon_Play size={16} />} onClick={() => window.navigateTo('Gallery')}>
                Explore Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right: image stack — parallax container */}
          <div data-parallax="0.15" style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 12,
            height: "clamp(400px, 60vh, 540px)",
          }}>
            <div style={{ gridRow: "1 / span 2", position: "relative", overflow: "hidden", borderRadius: 12 }}>
              <img src="./assets/hero_free_weights_1780130628705.png" alt="Free Weights" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,0.8), transparent 50%)" }} />
            </div>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
              <img src="./assets/hero_cardio_1780130650972.png" alt="Cardio Zone" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,0.8), transparent 50%)" }} />
            </div>
            <div style={{
              background: "var(--accent)",
              color: "var(--fg-on-accent)",
              padding: 20,
              borderRadius: 12,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                <Icon_Sparkles size={14} />
                Member Pulse
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900, fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 0.9, letterSpacing: "-0.02em",
                }}>97%</div>
                <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>
                  hit their goal in 12 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Tape Stats */}
      <div style={{
        width: "100%",
        background: "var(--accent)",
        color: "var(--fg-on-accent)",
        padding: "16px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 24px",
          flexWrap: "wrap",
          gap: 24,
        }}>
          {[
            { v: "222",    l: "Google Reviews" },
            { v: "24/7",   l: "Coach Support" },
            { v: "15+",    l: "Years Strong" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900, fontSize: 32, lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>{s.v}</div>
              <div style={{
                fontSize: 12, fontWeight: 800,
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.HatchedImage = HatchedImage;

