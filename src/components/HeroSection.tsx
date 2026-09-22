import { ArrowRight, Shield, Cpu, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />

      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Floating accent orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--electric) / 0.07)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        style={{ background: "hsl(var(--gold) / 0.06)" }}
      />

      {/* Content */}
      <div className="relative container mx-auto pt-24 pb-16">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
              Egypt & Middle East Technology Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Integrated Technology </span>
            <span className="gradient-gold-text">Solutions</span>
            <br />
            <span className="gradient-blue-text">for Smart Infrastructure</span>
            <br />
            <span className="text-foreground">& Digital Transformation</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            iTechs is a leading technology systems integrator delivering
            advanced security, smart infrastructure, and digital technology
            solutions across Egypt and the Middle East.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-semibold font-display text-sm border border-foreground/20 text-foreground/80 hover:border-electric/50 hover:text-electric transition-all duration-300"
            >
              Explore Solutions
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-semibold font-display text-sm transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
                color: "hsl(var(--navy-deep))",
                boxShadow: "0 8px 30px hsl(var(--gold) / 0.3)",
              }}
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mini stats */}
          {/* <div
            className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-border/40 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Globe, value: "15+", label: "Years of Excellence" },
              { icon: Shield, value: "500+", label: "Projects Delivered" },
              { icon: Cpu, value: "20+", label: "Industries Served" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "hsl(var(--electric) / 0.1)",
                    border: "1px solid hsl(var(--electric) / 0.25)",
                  }}
                >
                  <Icon className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl text-foreground leading-none">
                    {value}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
};

export default HeroSection;
