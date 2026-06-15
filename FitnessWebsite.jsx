import { useState } from "react";

const NAV_LINKS = ["Home", "Services", "Pricing", "Testimonials", "Contact"];

const SERVICES = [
  { icon: "🏋️", title: "Strength Training", desc: "Build muscle, increase power. Our expert trainers guide every rep." },
  { icon: "🧘", title: "Yoga & Mindfulness", desc: "Balance your body and mind with daily yoga sessions." },
  { icon: "🔥", title: "HIIT Cardio", desc: "Burn fat fast with high-intensity interval training." },
  { icon: "🥊", title: "Boxing & MMA", desc: "Fight-ready workouts for all fitness levels." },
  { icon: "🚴", title: "Cycling Studio", desc: "High-energy indoor cycling to push your limits." },
  { icon: "🥗", title: "Nutrition Coaching", desc: "Eat right, perform better. Custom meal plans included." },
];

const PLANS = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    features: ["3 sessions/week", "Locker access", "Basic nutrition guide"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    features: ["Unlimited sessions", "Personal trainer (2x/week)", "Nutrition coaching", "Body assessment"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹3,499",
    period: "/month",
    features: ["Everything in Pro", "Daily PT sessions", "Custom meal plan", "Priority booking", "Supplement kit"],
    highlight: false,
  },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Lost 18 kg in 5 months", quote: "IronPulse changed my life. The trainers are phenomenal and the energy here is unmatched!", avatar: "PS" },
  { name: "Rahul Verma", role: "Marathon runner", quote: "From zero to 42 km — couldn't have done it without the cardio and nutrition team here.", avatar: "RV" },
  { name: "Neha Kapoor", role: "Yoga enthusiast", quote: "The yoga sessions are deeply transformative. I feel stronger and calmer every single day.", avatar: "NK" },
];

export default function FitnessWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0a0a0a", color: "#f0f0f0", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #222", padding: "0 5%", display: "flex",
        alignItems: "center", justifyContent: "space-between", height: 64
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: -1, color: "#fff" }}>IRON</span>
          <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: -1, color: "#e63946" }}>PULSE</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setActiveNav(link)}
              style={{
                color: activeNav === link ? "#e63946" : "#aaa",
                textDecoration: "none", fontSize: 14, fontWeight: 600,
                letterSpacing: 1, textTransform: "uppercase",
                transition: "color 0.2s"
              }}>{link}</a>
          ))}
        </div>

        <button style={{
          background: "#e63946", color: "#fff", border: "none",
          padding: "10px 22px", borderRadius: 4, fontWeight: 700,
          fontSize: 13, cursor: "pointer", letterSpacing: 1
        }}>JOIN NOW</button>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }}
          className="hamburger">☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "#111", padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => { setActiveNav(link); setMenuOpen(false); }}
              style={{ color: "#fff", textDecoration: "none", fontSize: 16, fontWeight: 600 }}>{link}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "100px 5% 60px",
        background: "linear-gradient(135deg, #0a0a0a 60%, #1a0608 100%)",
        position: "relative", overflow: "hidden"
      }}>
        {/* Background accent */}
        <div style={{
          position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: 680, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block", background: "#e63946", color: "#fff",
            fontSize: 11, fontWeight: 800, letterSpacing: 3, padding: "6px 16px",
            borderRadius: 2, marginBottom: 24, textTransform: "uppercase"
          }}>No. 1 Fitness Studio in Delhi</div>

          <h1 style={{
            fontSize: "clamp(42px, 7vw, 82px)", fontWeight: 900,
            lineHeight: 1.05, margin: "0 0 24px",
            letterSpacing: -2
          }}>
            FORGE YOUR<br />
            <span style={{ color: "#e63946" }}>STRONGEST</span><br />
            SELF.
          </h1>

          <p style={{ fontSize: 18, color: "#888", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            World-class trainers. Science-backed programming. A community that refuses to quit. Your transformation starts today.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button style={{
              background: "#e63946", color: "#fff", border: "none",
              padding: "16px 36px", borderRadius: 4, fontWeight: 800,
              fontSize: 15, cursor: "pointer", letterSpacing: 1,
              transition: "transform 0.15s"
            }}
              onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.target.style.transform = "scale(1)"}>
              START FREE TRIAL →
            </button>
            <button style={{
              background: "transparent", color: "#fff",
              border: "2px solid #333", padding: "16px 36px",
              borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: "pointer"
            }}>
              VIEW PROGRAMS
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 60, flexWrap: "wrap" }}>
            {[["5000+", "Members"], ["98%", "Satisfaction"], ["12", "Expert Trainers"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 34, fontWeight: 900, color: "#fff", letterSpacing: -1 }}>{num}</div>
                <div style={{ fontSize: 12, color: "#666", textTransform: "uppercase", letterSpacing: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 5%", background: "#0f0f0f" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#e63946", fontSize: 12, fontWeight: 800, letterSpacing: 4, marginBottom: 12 }}>WHAT WE OFFER</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, margin: 0, letterSpacing: -1 }}>
            Train Harder.<br />Live Better.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24
        }}>
          {SERVICES.map(s => (
            <div key={s.title} style={{
              background: "#161616", border: "1px solid #222",
              borderRadius: 8, padding: 32,
              transition: "border-color 0.2s, transform 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#e63946"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#222"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 10px", color: "#fff" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "100px 5%", background: "#0a0a0a" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#e63946", fontSize: 12, fontWeight: 800, letterSpacing: 4, marginBottom: 12 }}>MEMBERSHIP</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, margin: 0, letterSpacing: -1 }}>Simple Pricing</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24, maxWidth: 960, margin: "0 auto"
        }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{
              background: plan.highlight ? "#e63946" : "#161616",
              border: plan.highlight ? "none" : "1px solid #222",
              borderRadius: 8, padding: "40px 32px",
              position: "relative",
              transform: plan.highlight ? "scale(1.04)" : "scale(1)"
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#fff", color: "#e63946", fontSize: 11, fontWeight: 900,
                  letterSpacing: 2, padding: "5px 18px", borderRadius: 20
                }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 3, color: plan.highlight ? "rgba(255,255,255,0.7)" : "#666", marginBottom: 8 }}>
                {plan.name.toUpperCase()}
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 32 }}>
                <span style={{ fontSize: 48, fontWeight: 900, lineHeight: 1, color: "#fff" }}>{plan.price}</span>
                <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.6)" : "#555", marginBottom: 8 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {plan.features.map(f => (
                  <li key={f} style={{
                    fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.9)" : "#aaa",
                    padding: "8px 0", borderBottom: `1px solid ${plan.highlight ? "rgba(255,255,255,0.15)" : "#1e1e1e"}`,
                    display: "flex", alignItems: "center", gap: 10
                  }}>
                    <span style={{ color: plan.highlight ? "#fff" : "#e63946", fontWeight: 800 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button style={{
                width: "100%", padding: "14px", borderRadius: 4,
                border: plan.highlight ? "2px solid #fff" : "2px solid #e63946",
                background: "transparent",
                color: plan.highlight ? "#fff" : "#e63946",
                fontWeight: 800, fontSize: 14, cursor: "pointer", letterSpacing: 1,
                transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.target.style.background = plan.highlight ? "#fff" : "#e63946"; e.target.style.color = plan.highlight ? "#e63946" : "#fff"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = plan.highlight ? "#fff" : "#e63946"; }}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "100px 5%", background: "#0f0f0f" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#e63946", fontSize: 12, fontWeight: 800, letterSpacing: 4, marginBottom: 12 }}>SUCCESS STORIES</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, margin: 0, letterSpacing: -1 }}>Real People.<br />Real Results.</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24, maxWidth: 1000, margin: "0 auto"
        }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{
              background: "#161616", border: "1px solid #222",
              borderRadius: 8, padding: 32
            }}>
              <div style={{ fontSize: 36, color: "#e63946", fontWeight: 900, marginBottom: 16, lineHeight: 1 }}>"</div>
              <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#e63946", display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#fff"
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#666" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#e63946", fontSize: 12, fontWeight: 800, letterSpacing: 4, marginBottom: 12 }}>GET IN TOUCH</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: -1 }}>Start Today.</h2>
          <p style={{ color: "#666", fontSize: 16, marginBottom: 48 }}>Book a free consultation or drop us a message. We'll get back within 24 hours.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
            {[
              { label: "Your Name", key: "name", type: "text", placeholder: "Rahul Kumar" },
              { label: "Email Address", key: "email", type: "email", placeholder: "rahul@email.com" },
            ].map(field => (
              <div key={field.key}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#666", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                  style={{
                    width: "100%", padding: "14px 16px", background: "#161616",
                    border: "1px solid #222", borderRadius: 4, color: "#fff",
                    fontSize: 15, outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={e => e.target.style.borderColor = "#e63946"}
                  onBlur={e => e.target.style.borderColor = "#222"}
                />
              </div>
            ))}

            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#666", letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
              <textarea
                placeholder="Tell us about your fitness goals..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                style={{
                  width: "100%", padding: "14px 16px", background: "#161616",
                  border: "1px solid #222", borderRadius: 4, color: "#fff",
                  fontSize: 15, outline: "none", resize: "vertical", boxSizing: "border-box",
                  fontFamily: "inherit"
                }}
                onFocus={e => e.target.style.borderColor = "#e63946"}
                onBlur={e => e.target.style.borderColor = "#222"}
              />
            </div>

            <button onClick={handleSubmit} style={{
              background: "#e63946", color: "#fff", border: "none",
              padding: "16px", borderRadius: 4, fontWeight: 800,
              fontSize: 15, cursor: "pointer", letterSpacing: 1,
              transition: "opacity 0.2s"
            }}
              onMouseEnter={e => e.target.style.opacity = "0.9"}
              onMouseLeave={e => e.target.style.opacity = "1"}>
              {submitted ? "✓ MESSAGE SENT!" : "SEND MESSAGE"}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#080808", borderTop: "1px solid #1a1a1a",
        padding: "40px 5%", textAlign: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 16 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>IRON</span>
          <span style={{ fontSize: 20, fontWeight: 900, color: "#e63946" }}>PULSE</span>
        </div>
        <p style={{ color: "#444", fontSize: 13, margin: "0 0 8px" }}>
          📍 Plot 42, Sector 18, Gurugram · 📞 +91 98765 43210 · 📧 hello@ironpulse.in
        </p>
        <p style={{ color: "#333", fontSize: 12, margin: 0 }}>© 2026 IronPulse Fitness. All rights reserved.</p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
}
