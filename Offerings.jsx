/* eslint-disable */
/* global React, Icon_Dumbbell, Icon_Apple, Icon_Heart, Icon_Users, Icon_ArrowRight */
// Core Offerings — 4-card interactive grid.
// Hover: card raises 2px, border lights to accent, icon background flips to lime.

const OFFERINGS = [
  {
    icon: "dumbbell",
    title: "Personalized Training",
    blurb: "Dedicated 1-on-1 coaching focusing on strict form, technique, and accountability.",
    benefits: ["Customized workout plans", "Form correction & injury prevention", "Accountability & motivation"],
    included: "Weekly check-ins, app access, 1-on-1 sessions",
    price: "₹8,000",
    tag: "01 · Strength",
  },
  {
    icon: "apple",
    title: "Tailored Diet Plans",
    blurb: "Custom structured nutrition blueprints to fuel recovery and accelerate muscle growth.",
    benefits: ["Macro-calculated meal plans", "Supplementation guidance", "Weekly adjustments"],
    included: "Recipe guide, direct chat with nutritionist, body composition tracking",
    price: "₹3,000",
    tag: "02 · Nutrition",
  },
  {
    icon: "heart",
    title: "Cardio & Endurance",
    blurb: "A high-tech cardio zone packed with state-of-the-art endurance machinery.",
    benefits: ["Heart rate zone training", "HIIT & steady state protocols", "Increased stamina"],
    included: "Treadmills, rowers, assault bikes, heart rate monitors",
    price: "₹2,000",
    tag: "03 · Conditioning",
  },
  {
    icon: "users",
    title: "CrossFit & Functional",
    blurb: "High-intensity, community-driven functional training zones.",
    benefits: ["Full body conditioning", "Community-led motivation", "Olympic weightlifting basics"],
    included: "Group classes, specialized equipment, open gym access",
    price: "₹4,500",
    tag: "04 · Community",
  },
];

function OfferingIcon({ name, active }) {
  const color = active ? "var(--fg-on-accent)" : "var(--accent)";
  const bg = active ? "var(--accent)" : "var(--surface-2)";
  const border = active ? "var(--accent)" : "var(--border)";
  const props = { size: 28, stroke: color, strokeWidth: 2 };
  const map = {
    dumbbell: <Icon_Dumbbell size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    apple:    <Icon_Apple size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    heart:    <Icon_Heart size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
    users:    <Icon_Users size={props.size} stroke={props.stroke} strokeWidth={props.strokeWidth} />,
  };
  return (
    <div style={{
      width: 64, height: 64,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: bg, border: `1px solid ${border}`,
      borderRadius: 12,
      transition: "all var(--dur-base) var(--ease-out)",
      flexShrink: 0
    }}>
      {map[name]}
    </div>
  );
}

function OfferingCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: 32,
        background: "var(--surface-1)",
        border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 16,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 48px -20px rgba(204, 255, 0, 0.18)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
        display: "flex", flexDirection: "column", gap: 24,
        height: "100%",
        boxSizing: "border-box"
      }}>
      
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <OfferingIcon name={item.icon} active={hover} />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
          color: hover ? "var(--accent)" : "var(--fg3)",
          textTransform: "uppercase",
          transition: "color var(--dur-base) var(--ease-out)",
        }}>{item.tag}</span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800, fontSize: 26, lineHeight: 1.1,
          letterSpacing: "-0.01em", textTransform: "uppercase",
          color: "var(--fg1)", marginBottom: 12
        }}>
          {item.title}
        </h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--fg2)" }}>
          {item.blurb}
        </p>
      </div>

      <div style={{ padding: "20px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--fg1)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Key Benefits</div>
        <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "grid", gap: 8, marginBottom: 20 }}>
          {item.benefits.map(b => (
            <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--fg2)" }}>
              <span style={{ color: "var(--accent)", marginTop: 2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--fg1)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>What's Included</div>
        <div style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.5 }}>{item.included}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--fg3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Starting From</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, color: "var(--fg1)", lineHeight: 1 }}>{item.price}</div>
        </div>
        
        <button style={{
          background: hover ? "var(--accent)" : "transparent",
          color: hover ? "var(--fg-on-accent)" : "var(--fg1)",
          border: `1px solid ${hover ? "var(--accent)" : "var(--border)"}`,
          padding: "10px 16px", borderRadius: 8,
          fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em",
          display: "inline-flex", alignItems: "center", gap: 8,
          cursor: "pointer", transition: "all var(--dur-base) var(--ease-out)"
        }} onClick={() => window.navigateTo('Pricing')}>
          Learn More
          <Icon_ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Offerings() {
  return (
    <section id="features" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 32, marginBottom: 48, flexWrap: "wrap",
        }}>
          <div data-reveal="" style={{ maxWidth: 720 }}>
            <div className="eyebrow" style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
            }}>
              · Core Offerings
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
              textWrap: "balance",
            }}>
              Everything you need to build the body you want.
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 16, color: "var(--fg2)", lineHeight: 1.55 }}>
            Four pillars, one programme. Mix and match — every member gets a coach who tunes the plan to your goals.
          </p>
        </div>

        <div className="mmm-bento-grid">
          {OFFERINGS.map((o, i) => (
            <div key={o.title} className={`mmm-bento-card-${i}`} data-reveal="" data-reveal-delay={String(i * 110)}>
              <OfferingCard item={o} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Offerings = Offerings;
window.OfferingCard = OfferingCard;
