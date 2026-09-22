import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Globe, Shield } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    detail: "10 Amin Zaki, Ard Elgolf, Nasr City,Cairo, Egypt",
    sub: "Serving Egypt & the Middle East",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+20 2 2418 0290",
    sub: "Sun – Thu, 9am – 6pm (EET)",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@itechs-group.com",
    sub: "We respond within 24 hours",
  },
];

const reasons = [
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Our team responds to every inquiry within 24 hours, ensuring your project moves forward without delay.",
  },
  {
    icon: Globe,
    title: "Regional Expertise",
    desc: "Deep understanding of the Middle East's regulatory, environmental, and infrastructure landscape.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    desc: "15+ years of delivering mission-critical systems for government, banking, and enterprise clients.",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary) / 0.3) 0%, transparent 70%), hsl(var(--navy-deep))",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.4), transparent)",
            }}
          />
          <div className="relative container mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                Contact Us
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Let's Build Something{" "}
              <span className="gradient-gold-text">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're planning a smart city, securing your network, or
              modernizing your data center — our experts are ready to help.
            </p>
          </div>
        </section>

        {/* Quick contact cards */}
        <section className="relative py-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactCards.map(({ icon: Icon, title, detail, sub }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border p-6 text-center transition-all duration-300 hover:border-electric/40 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "hsl(var(--electric) / 0.1)",
                      border: "1px solid hsl(var(--electric) / 0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/90">
                    {detail}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form (reused component) */}
        <ContactSection />

        {/* Why reach out */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative container mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
              Why Work With{" "}
              <span className="gradient-gold-text">iTechs Group</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "hsl(var(--gold) / 0.1)",
                      border: "1px solid hsl(var(--gold) / 0.2)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
