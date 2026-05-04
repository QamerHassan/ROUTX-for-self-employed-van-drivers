import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import StatsBar from "./components/StatsBar";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <Clients />
      <StatsBar />
      <Services />
      <WhyUs />
      
      {/* Testimonial Section - Simple inline */}
      <section className="section-padding" style={{ background: "var(--off-white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="section-badge">Testimonials</div>
          <h2 className="section-title">What Our <span className="text-orange">Clients Say</span></h2>
          <div className="orange-divider" style={{ margin: "24px auto" }}></div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: 30,
            marginTop: 50
          }}>
            {[
              { name: "John Smith", role: "Business Owner", text: "ROUTX handled our office move with incredible efficiency. Not a single item was damaged, and they were ahead of schedule." },
              { name: "Sarah Williams", role: "Residential Client", text: "The man with a van service was exactly what I needed. Friendly driver and very reasonable prices. Highly recommended!" },
              { name: "David Brown", role: "E-commerce Seller", text: "Their courier service is top-notch. My customers love the live tracking, and I love the reliability of their deliveries." }
            ].map((t, i) => (
              <div key={i} className="testimonial-card animate-fade-up" style={{ animationDelay: `${i * 0.15}s`, textAlign: "left" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} width="16" height="16" fill="var(--orange)" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ color: "var(--text-dark)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--navy)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-gray)" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section section-padding" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }} className="animate-fade-up">
          <h2 className="section-title-white" style={{ marginBottom: 24 }}>Ready to Get Started?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem", marginBottom: 40 }}>
            Join thousands of satisfied customers who trust ROUTX LOGISTICS LTD for their delivery needs.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary" style={{ padding: "16px 40px" }}>Get a Free Quote Now</a>
            <a href="#services" className="btn-secondary" style={{ padding: "16px 40px" }}>View Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
