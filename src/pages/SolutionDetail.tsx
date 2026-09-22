import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
} from "lucide-react";
import { solutions, getSolutionBySlug } from "@/data/solutions";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  if (!solution) return <Navigate to="/solutions" replace />;

  const Icon = solution.icon;
  const isGold = solution.accent === "gold";
  const accentColor = isGold ? "hsl(var(--gold))" : "hsl(var(--electric))";
  const others = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary) / 0.3) 0%, transparent 70%), hsl(var(--navy-deep))",
            }}
          />
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative container mx-auto max-w-5xl">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{
                  background: `${accentColor.replace(")", " / 0.1)")}`,
                  border: `1px solid ${accentColor.replace(")", " / 0.3)")}`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color: accentColor }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: `${accentColor.replace(")", " / 0.08)")}`,
                      color: accentColor,
                      border: `1px solid ${accentColor.replace(")", " / 0.2)")}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5">
              {solution.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {solution.description}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {solution.longDescription}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
                <Sparkles className="w-3 h-3 text-electric" />
                <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                  the Core Keys
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                What We Deliver?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.features.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-xl border border-border shadow-card"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                  }}
                >
                  <h3 className="font-display font-semibold text-base text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases + outcomes */}
        <section className="py-20 relative">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="p-8 rounded-xl border border-border shadow-card"
              style={{
                background:
                  "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5" style={{ color: accentColor }} />
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Where we deploy
                </h3>
              </div>
              <ul className="space-y-3">
                {solution.useCases.map((uc) => (
                  <li
                    key={uc}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: accentColor }}
                    />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-8 rounded-xl border border-border shadow-card"
              style={{
                background:
                  "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5" style={{ color: accentColor }} />
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Outcomes you can expect
                </h3>
              </div>
              <ul className="space-y-3">
                {solution.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: accentColor }}
                    />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related solutions */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Related solutions
              </h2>
              <Link
                to="/solutions"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:opacity-80"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((s) => {
                const OIcon = s.icon;
                const oGold = s.accent === "gold";
                const oColor = oGold
                  ? "hsl(var(--gold))"
                  : "hsl(var(--electric))";
                return (
                  <Link
                    key={s.slug}
                    to={`/solutions/${s.slug}`}
                    className="group p-6 rounded-xl border border-border card-hover shadow-card"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: `${oColor.replace(")", " / 0.1)")}`,
                        border: `1px solid ${oColor.replace(")", " / 0.25)")}`,
                      }}
                    >
                      <OIcon className="w-4 h-4" style={{ color: oColor }} />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">
                      {s.shortTitle}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {s.description}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: oColor }}
                    >
                      Learn more
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

export default SolutionDetail;
