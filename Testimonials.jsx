/* eslint-disable */
/* global React, Icon_Star, Icon_Quote, Icon_ChevronLeft, Icon_ChevronRight */
// Testimonials carousel — 2 cards visible on desktop, paged with arrows.

const TESTIMONIALS = [
  {
    body: "This gym has completely changed my lifestyle. The trainers are very supportive, knowledgeable, and always motivate us to push beyond our limits. Highly recommended for anyone serious about fitness!",
    author: "Sri Ram",
    role: "Member · 2 years",
    rating: 5,
  },
  {
    body: "Excellent atmosphere, high-quality equipment, and professional trainers. Perfect ambiance for workouts, cardio, and CrossFit. Best place for workout freaks to train with like-minded people.",
    author: "Verified Member",
    role: "Google Review",
    rating: 5,
  },
  {
    body: "The coaching here is genuinely different — strict on form, generous with their time. I've added 22kg to my deadlift in eight weeks and I'm not stopping.",
    author: "Anitha P.",
    role: "Member · 6 months",
    rating: 5,
  },
  {
    body: "I've been to many gyms in Trichy, but the community here is unmatched. It feels like a family where everyone is pushing you to be your absolute best version.",
    author: "Karthik R.",
    role: "Member · 1 year",
    rating: 5,
  },
  {
    body: "The personalized diet plans and training sessions were exactly what I needed. I lost 15kg in 4 months and my energy levels have never been this high. Phenomenal!",
    author: "Sneha M.",
    role: "Member · 8 months",
    rating: 5,
  },
  {
    body: "World-class facilities and hygiene is top-notch. They sanitize equipment regularly and the trainers ensure you are always safe while lifting heavy. Highly recommended.",
    author: "Vikram S.",
    role: "Google Review",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon_Star key={i} size={16} stroke="var(--accent)" fill="var(--accent)" strokeWidth={1.5} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <article style={{
      position: "relative",
      padding: 32,
      background: "var(--surface-1)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      display: "flex", flexDirection: "column", gap: 20,
      height: "100%",
    }}>
      <Icon_Quote size={28} stroke="var(--accent)" strokeWidth={2} />
      <p style={{
        margin: 0,
        fontSize: 17,
        lineHeight: 1.55,
        color: "var(--fg1)",
        flex: 1,
      }}>
        &ldquo;{t.body}&rdquo;
      </p>
      <div style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: 18,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
      }}>
        <div>
          <div style={{ fontWeight: 700, color: "var(--fg1)", fontSize: 15 }}>{t.author}</div>
          <div style={{ fontSize: 12, color: "var(--fg3)", marginTop: 2, letterSpacing: "0.04em" }}>{t.role}</div>
        </div>
        <Stars count={t.rating} />
      </div>
    </article>
  );
}

function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 880);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = TESTIMONIALS.length;
  const max = Math.max(0, total - (isMobile ? 1 : 2));

  // Ensure idx doesn't exceed new max when resizing from desktop to mobile and back
  React.useEffect(() => {
    if (idx > max) setIdx(max);
  }, [max, idx]);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(max, i + 1));

  const shift = isMobile ? "calc(100% + 16px)" : "calc(50% + 8px)";
  const basis = isMobile ? "100%" : "calc(50% - 8px)";

  return (
    <section id="testimonials" style={{
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
              · Reviews
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95,
              letterSpacing: "-0.02em", textTransform: "uppercase",
              marginBottom: 24,
            }}>
              {/* eslint-disable-next-line react/jsx-no-literals */}
              Real members. Real transformations.
            </h2>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={prev} disabled={idx === 0} style={arrowBtn(idx === 0)}>
              <Icon_ChevronLeft size={20} />
            </button>
            <button onClick={next} disabled={idx === max} style={arrowBtn(idx === max)}>
              <Icon_ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: 16,
            transform: `translateX(calc(${-idx} * ${shift}))`,
            transition: "transform var(--dur-entrance) var(--ease-out)",
          }} className="mmm-testimonial-track">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ flex: `0 0 ${basis}`, minWidth: 0 }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div style={{ display: "flex", gap: 6, marginTop: 24, justifyContent: "center" }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Page ${i + 1}`}
              style={{
                width: i === idx ? 24 : 8, height: 8,
                background: i === idx ? "var(--accent)" : "var(--border-hot)",
                border: "none", borderRadius: 4, cursor: "pointer",
                transition: "all var(--dur-base) var(--ease-out)",
                padding: 0,
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function arrowBtn(disabled) {
  return {
    width: 44, height: 44,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: "var(--surface-1)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    color: disabled ? "var(--fg3)" : "var(--fg1)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all var(--dur-micro) var(--ease-out)",
  };
}

window.Testimonials = Testimonials;
window.TestimonialCard = TestimonialCard;
window.Stars = Stars;
