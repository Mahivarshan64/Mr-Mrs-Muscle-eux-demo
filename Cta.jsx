/* eslint-disable */
/* global React, Button, Icon_ArrowRight */

function Cta() {
  return (
    <section style={{
      padding: "120px 24px",
      background: "var(--canvas)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative background gradients */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120%", height: "120%",
        background: "radial-gradient(circle at center, rgba(204, 255, 0, 0.08) 0%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div data-reveal="" style={{
        maxWidth: 800, margin: "0 auto",
        textAlign: "center", position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <div className="eyebrow" style={{
          fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 16,
        }}>
          · Your Transformation Awaits ·
        </div>
        
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(42px, 6vw, 84px)",
          lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          color: "var(--fg1)",
          marginBottom: 24
        }}>
          Ready to build the <span style={{ color: "var(--accent)" }}>ultimate</span> version of you?
        </h2>
        
        <p style={{ fontSize: 18, color: "var(--fg2)", lineHeight: 1.5, marginBottom: 40, maxWidth: 600 }}>
          Join the elite community at Raw Fitness. Get your tailored plan today and start seeing results tomorrow.
        </p>
        
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" iconRight={<Icon_ArrowRight size={18} />} onClick={() => window.navigateTo('Contact')}>
            Claim Your Spot
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.navigateTo('Pricing')}>
            View Membership Plans
          </Button>
        </div>
      </div>
    </section>
  );
}

window.Cta = Cta;
