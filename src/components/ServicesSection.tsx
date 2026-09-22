import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { solutions } from "@/data/solutions";

const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="relative container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
            <Zap className="w-3 h-3 text-electric" />
            <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
              SI Solutions
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Comprehensive{" "}
            <span className="gradient-gold-text">Technology Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            iTechs delivers integrated technology solutions designed to support
            modern infrastructure, improve operational efficiency, and enhance
            security across complex environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((service, i) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";
            return (
              <Link
                to={`/solutions/${service.slug}`}
                key={service.slug}
                className="group relative p-7 rounded-xl border border-border card-hover shadow-card flex flex-col"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: isGold
                      ? "hsl(var(--gold) / 0.1)"
                      : "hsl(var(--electric) / 0.1)",
                    border: `1px solid ${isGold ? "hsl(var(--gold) / 0.25)" : "hsl(var(--electric) / 0.25)"}`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors"
                    style={{
                      color: isGold
                        ? "hsl(var(--gold))"
                        : "hsl(var(--electric))",
                    }}
                  />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {service.shortTitle}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
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
                        border: `1px solid ${isGold ? "hsl(var(--gold) / 0.2)" : "hsl(var(--electric) / 0.2)"}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-display"
                  style={{
                    color: isGold ? "hsl(var(--gold))" : "hsl(var(--electric))",
                  }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isGold
                      ? "linear-gradient(90deg, hsl(var(--gold)), hsl(35 90% 45%))"
                      : "linear-gradient(90deg, hsl(var(--electric)), hsl(200 100% 45%))",
                  }}
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded text-sm font-semibold font-display transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
              color: "hsl(var(--navy-deep))",
            }}
          >
            View all solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
