import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "100+", label: "Projects Delivered", desc: "Across Egypt & MENA" },
  { icon: Users, value: "40", label: "Expert Engineers", desc: "Certified professionals" },
  { icon: Globe, value: "06+", label: "Years of Experience", desc: "Proven track record" },
  // { icon: Award, value: "50+", label: "Technology Partners", desc: "Global OEM alliances" },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden border-y border-border/40">
      {/* Gold shimmer line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)" }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, hsl(var(--navy-deep)) 0%, hsl(222 42% 7%) 50%, hsl(var(--navy-deep)) 100%)" }}
      />

      <div className="relative container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: i % 2 === 0 ? "hsl(var(--electric) / 0.1)" : "hsl(var(--gold) / 0.1)",
                    border: `1px solid ${i % 2 === 0 ? "hsl(var(--electric) / 0.25)" : "hsl(var(--gold) / 0.25)"}`,
                    boxShadow: i % 2 === 0
                      ? "0 0 20px hsl(var(--electric) / 0.1)"
                      : "0 0 20px hsl(var(--gold) / 0.1)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: i % 2 === 0 ? "hsl(var(--electric))" : "hsl(var(--gold))" }}
                  />
                </div>
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-display font-semibold text-sm text-foreground/80 mb-0.5">{stat.label}</p>
                <p className="text-muted-foreground text-xs">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--electric) / 0.4), transparent)" }}
      />
    </section>
  );
};

export default StatsSection;
