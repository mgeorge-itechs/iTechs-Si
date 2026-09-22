import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Handshake, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { partnerCategories } from "@/data/partners";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary) / 0.3) 0%, transparent 70%), hsl(var(--navy-deep))",
            }}
          />
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative container mx-auto text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
              <Handshake className="w-3 h-3 text-electric" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                Technology Partners
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-5">
              Powered by{" "}
              <span className="gradient-gold-text">
                Global Technology Leaders
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              iTechs collaborates with global technology providers to deliver
              reliable and scalable solutions across multiple industries. These
              partnerships enable the company to integrate best-in-class
              technologies into its solutions and provide clients with advanced
              technology ecosystems.
            </p>
          </div>
        </section>

        {/* Value props */}
        <section className="pb-12 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe2,
                  title: "Global Reach",
                  desc: "Strategic alliances with the world's leading technology vendors.",
                },
                {
                  icon: ShieldCheck,
                  title: "Certified Expertise",
                  desc: "Accredited engineers across networking, security, and infrastructure.",
                },
                {
                  icon: Sparkles,
                  title: "Best-in-Class",
                  desc: "Curated ecosystem of industry-leading platforms and technologies.",
                },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-6 rounded-xl border border-border shadow-card"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: "hsl(var(--gold) / 0.1)",
                        border: "1px solid hsl(var(--gold) / 0.25)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner categories */}
        <section className="py-16 relative">
          <div className="container mx-auto space-y-16">
            {partnerCategories.map((cat) => (
              <div key={cat.title}>
                <div className="mb-8 max-w-2xl">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cat.partners.map((p) => (
                    <div
                      key={p.name}
                      className="group aspect-[4/3] rounded-xl border border-border flex flex-col items-center justify-center p-0 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-card"
                      style={{
                        background:
                          "linear-gradient(145deg, hsl(0, 0%, 97%), hsl(0, 0%, 91%))",
                      }}
                    >
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display =
                              "none";
                          }}
                        />
                      )}
                      {/* <span className="font-display font-semibold text-sm md:text-base text-foreground/80 group-hover:text-gold transition-colors">
                        {p.name}
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 relative">
          <div className="container mx-auto">
            <div
              className="rounded-2xl border border-border p-10 md:p-14 text-center"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 0%, hsl(var(--electric) / 0.15) 0%, transparent 70%), linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
              }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Become a Technology Partner
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Are you a technology vendor looking to expand into Egypt and the
                Middle East? Partner with iTechs Group to bring your solutions
                to the region's most ambitious projects.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded text-sm font-semibold font-display"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
                  color: "hsl(var(--navy-deep))",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
