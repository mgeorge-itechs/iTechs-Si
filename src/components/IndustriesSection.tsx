import { Link } from "react-router-dom";
import { industries } from "@/data/industries";

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-mid)) 50%, hsl(var(--navy-deep)) 100%)",
        }}
      />

      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
                Industries We Serve
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Technology for <br />
              <span className="gradient-gold-text">Every Sector</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From luxury hotels to government ministries and large-scale real
              estate developments, iTechs Group brings specialized expertise
              tailored to each sector's unique requirements.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                "Mission-critical reliability for high-stakes environments",
                "Sector-specific compliance and regulatory expertise",
                "Scalable solutions from SMEs to mega-enterprises",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{
                      background: "hsl(var(--gold) / 0.15)",
                      border: "1px solid hsl(var(--gold) / 0.35)",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                  <p className="text-foreground/80 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — industry grid */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group relative flex flex-col justify-end gap-3 p-5 rounded-xl border border-border transition-all duration-300 hover:border-gold/40 overflow-hidden min-h-[180px]"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Background image */}
                  <img
                    src={industry.image}
                    alt={industry.shortTitle}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay for legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(var(--navy-deep) / 0.55) 0%, hsl(var(--navy-deep) / 0.85) 60%, hsl(var(--navy-deep) / 0.95) 100%)",
                    }}
                  />

                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-gold/15 mb-3"
                      style={{
                        background: "hsl(var(--gold) / 0.12)",
                        border: "1px solid hsl(var(--gold) / 0.3)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="font-display font-semibold text-sm text-foreground mb-1">
                      {industry.shortTitle}
                    </p>
                    <p className="text-muted-foreground text-xs line-clamp-2">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
