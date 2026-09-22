import { CheckCircle2, Layers, Users, Headphones } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Systems Integration",
    description:
      "We don't just install equipment. We architect, integrate, and optimize complete technology ecosystems that work seamlessly as a unified whole.",
  },
  {
    icon: Users,
    title: "Strategic Partnership",
    description:
      "Rather than a one-time vendor relationship, we serve as a long-term strategic partner — embedded in your digital transformation journey from day one.",
  },
  {
    icon: CheckCircle2,
    title: "Mission-Critical Reliability",
    description:
      "Our solutions are engineered for environments where downtime is not an option — government facilities, banks, hospitals, and large-scale real estate.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description:
      "From 24/7 NOC monitoring to proactive maintenance contracts, we manage the ongoing complexity of your technology infrastructure so you don't have to.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-15" />

      <div className="relative container mx-auto">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                About iTechs
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              More Than a Vendor —{" "}
              <span className="gradient-blue-text">Your Strategic</span>{" "}
              <span className="gradient-gold-text">Tech Partner</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              iTechs was founded with one mission: to be the most trusted technology systems integrator in Egypt and the Middle East. We bridge the gap between cutting-edge global technology and the complex on-the-ground realities of high-stakes regional projects.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              By combining deep engineering expertise with a consultative approach, we help organizations future-proof their infrastructure — from smart building automation and network security to AI-powered identity systems and enterprise data centers.
            </p>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div
              className="rounded-2xl p-8 border border-border relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))" }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "hsl(var(--electric) / 0.08)" }}
              />

              <div className="relative z-10 space-y-6">
                <div>
                  <p className="font-display font-bold text-5xl gradient-gold-text mb-1">2020</p>
                  <p className="text-muted-foreground text-sm">Founded in Cairo, Egypt</p>
                </div>
                <div className="h-px bg-border" />
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { v: "Egypt", l: "Headquarters" },
                    { v: "GCC+", l: "Regional Reach" },
                    // { v: "ISO", l: "Certified" },
                    // { v: "24/7", l: "Support" },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <p className="font-display font-bold text-2xl text-electric">{v}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-border" />
                <p className="text-sm text-foreground/70 italic">
                  "We build the foundational digital systems required for high-stakes public and private projects."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl border border-border card-hover shadow-card"
                style={{ background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "hsl(var(--electric) / 0.1)",
                    border: "1px solid hsl(var(--electric) / 0.2)",
                  }}
                >
                  <Icon className="w-4.5 h-4.5 text-electric w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
