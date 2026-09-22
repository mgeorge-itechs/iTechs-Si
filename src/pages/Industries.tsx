import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { industries } from "@/data/industries";

const Industries = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
              <Building2 className="w-3 h-3 text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
                Industries We Serve
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-5">
              Technology for{" "}
              <span className="gradient-gold-text">Every Sector</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From luxury hospitality and government smart cities to large-scale
              real estate, infrastructure, and education — iTechs Group delivers
              sector-specific expertise tailored to the unique demands of each
              industry.
            </p>
          </div>
        </section>

        {/* Industries grid */}
        <section className="pb-24 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isGold = ind.accent === "gold";
                return (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className="group relative p-7 rounded-xl border border-border card-hover shadow-card flex flex-col"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{
                        background: isGold
                          ? "hsl(var(--gold) / 0.1)"
                          : "hsl(var(--electric) / 0.1)",
                        border: `1px solid ${
                          isGold
                            ? "hsl(var(--gold) / 0.25)"
                            : "hsl(var(--electric) / 0.25)"
                        }`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color: isGold
                            ? "hsl(var(--gold))"
                            : "hsl(var(--electric))",
                        }}
                      />
                    </div>
                    <h2 className="font-display font-semibold text-lg text-foreground mb-3">
                      {ind.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {ind.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: isGold
                              ? "hsl(var(--gold) / 0.08)"
                              : "hsl(var(--electric) / 0.08)",
                            color: isGold
                              ? "hsl(var(--gold))"
                              : "hsl(var(--electric))",
                            border: `1px solid ${
                              isGold
                                ? "hsl(var(--gold) / 0.2)"
                                : "hsl(var(--electric) / 0.2)"
                            }`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold font-display"
                      style={{
                        color: isGold
                          ? "hsl(var(--gold))"
                          : "hsl(var(--electric))",
                      }}
                    >
                      Explore industry
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
