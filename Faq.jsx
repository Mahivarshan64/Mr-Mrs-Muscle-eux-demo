/* eslint-disable */
/* global React */

function Faq() {
  const faqs = [
    {
      q: "Do I need prior experience to join?",
      a: "Not at all. Our trainers will assess your current fitness level and build a tailored program that safely progresses as you build strength and endurance."
    },
    {
      q: "Are the nutrition plans flexible?",
      a: "Yes. We believe the best diet is one you can stick to. We adjust your macros and meal options weekly based on your feedback and progress."
    },
    {
      q: "Can I switch between class types?",
      a: "Absolutely! Our memberships allow you to mix personalized training with CrossFit and Cardio sessions, keeping your routine fresh and effective."
    },
    {
      q: "Is there support outside of gym hours?",
      a: "Every member gets app access with 24/7 direct messaging to their dedicated coach for questions, form checks, or motivation."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section id="faq" style={{
      padding: "96px 24px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-1)",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div data-reveal="" className="eyebrow" style={{
          fontSize: 13, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--accent)", marginBottom: 12,
          textAlign: "center"
        }}>
          · Questions? ·
        </div>
        <h2 data-reveal="" data-reveal-delay="80" style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(32px, 4vw, 56px)",
          lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase",
          textWrap: "balance",
          textAlign: "center",
          marginBottom: 48
        }}>
          Frequently Asked
        </h2>

        <div data-reveal="" data-reveal-delay="160" style={{ display: "grid", gap: 16 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                transition: "all var(--dur-base) var(--ease-out)",
              }}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "24px",
                    background: "transparent", border: "none",
                    color: "var(--fg1)", cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700 }}>{faq.q}</span>
                  <span style={{ 
                    fontSize: 24, fontWeight: 300, color: "var(--accent)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform var(--dur-base) var(--ease-out)",
                    display: "inline-block"
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "all var(--dur-base) var(--ease-out)",
                  padding: isOpen ? "0 24px 24px" : "0 24px",
                }}>
                  <p style={{ margin: 0, color: "var(--fg2)", fontSize: 15, lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Faq = Faq;
