import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Layers,
  Users,
  Headphones,
  Target,
  Eye,
  Award,
  Shield,
  Building2,
  ShieldHalf,
  Airplay,
  GlobeLock,
  EthernetPort,
  HouseWifi,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const timeline = [
  {
    year: "2020",
    title: "iTechs Was Founded",
    desc: "iTechs Was Founded to bridge the gap between cutting-edge global technology and the complex on-the-ground realities of high-stakes regional projects.",
  },
  {
    year: "2023",
    title: "Regional expansion",
    desc: "With a proven track record in Egypt, iTechs began expanding its operations across the MENA region, establishing a presence in key markets to serve a growing international client base.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security Solutions",
    desc: "Security solutions are designed to protect critical infrastructure, facilities, and urban environments through advanced surveillance, access control, and integrated monitoring systems.",
  },
  {
    icon: Building2,
    title: "Smart Cities, IoT",
    desc: "Smart city and IoT solutions enable governments and organizations to create connected environments that improve urban efficiency, sustainability, and quality of life.",
  },
  {
    icon: ShieldHalf,
    title: "Command & Control Systems",
    desc: "Command and control solutions enable organizations to monitor complex systems and manage operations through centralized control environments.",
  },
  {
    icon: Airplay,
    title: "Audio Visual Solutions",
    desc: "Audiovisual solutions support collaboration, communication, and operational visibility across corporate environments, control rooms, and public spaces.",
  },
  {
    icon: GlobeLock,
    title: "Cybersecurity",
    desc: "Cybersecurity solutions protect digital infrastructure and critical systems against cyber threats and unauthorized access.",
  },
  {
    icon: EthernetPort,
    title: "Network & IT Infrastructure",
    desc: "Reliable network infrastructure is essential for enabling modern digital environments and supporting connected technologies.",
  },
  {
    icon: HouseWifi,
    title: "Data Center Solutions",
    desc: "Data centers form the backbone of modern digital infrastructure.",
  },
];

const pillars = [
  {
    icon: Layers,
    title: "Systems Integration",
    desc: "We architect, integrate, and optimize complete technology ecosystems that work seamlessly as a unified whole.",
  },
  {
    icon: Users,
    title: "Strategic Partnership",
    desc: "Long-term strategic partner embedded in your digital transformation journey from day one.",
  },
  {
    icon: CheckCircle2,
    title: "Mission-Critical Reliability",
    desc: "Engineered for environments where downtime is not an option — government, banking, healthcare, real estate.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    desc: "24/7 NOC monitoring and proactive maintenance so you can focus on your core business.",
  },
];

const leadership = [
  {
    name: "Alaa Islam",
    role: "Group Chairman",
    bio: "29 years of experience in the management of security solutions technologies, participated in several nationwide homeland security projects among his years of experience, graduated from Military Technical College in 1994 with BCs in IT engineering, and served as an officer in the Egyptian armed forces and General Intelligence Services for 20+ years before his retirement and founding iTechs.",
  },
  {
    name: "Alaa Khalil",
    role: "Group Vice Chairman, CEO iTechs DI, and Chairman iTechs Arabia",
    bio: "30+ years of demonstrated regional experience in executive management, business development, and strategic planning in the telecom,  public safety, and defense technologies domain in the MENA region. Owning a solid ability to set up innovative business ideas into successful commercial and operation models. Alaa holds a bachelor’s degree in telecom and electronics engineering from Ain Shams University in 1995.",
  },
  {
    name: "Fahmy Halbouny",
    role: "CEO iTechs Information Technology and Security Solutions",
    bio: "MBA holder, adapting various sales methodologies from DISC to strategic selling and large account management processes. Fahmy has 28+ years of insightful experience in the technology business segment, especially in the financial services sector (FinTech, Digital Banking, etc.) in the ME and GCC regions. He graduated from Ain Shams University as a telecom engineer in 1995.",
  },
  {
    name: "Amr Rostom",
    role: "Chief BD Officer",
    bio: "Retired General from the Egyptian Air Forces, holding a bachelor’s degree in engineering from the Military Technical Collage 1992. Amr has wide experience in administration and public relations services, and he succeeded in his 30+ years of experience in managing large-scale business and public organizations.",
  },
];

/* ─── Component ─────────────────────────────────────────── */

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* ── Hero Banner ── */}
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-10" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-mid)) 60%, hsl(217 45% 12%) 100%)",
            }}
          />
          {/* Primary color glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "hsl(var(--primary) / 0.12)" }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: "hsl(var(--electric) / 0.08)" }}
          />

          <div className="relative container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                Our Story
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Founded as
              <span className="gradient-blue-text"> a Technology-driven </span>
              <span className="gradient-gold-text">Systems Integrator</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto mb-[16px]">
              iTechs specializes in delivering end-to-end solutions across smart
              infrastructure, security systems, command and control platforms,
              IoT environments, and advanced digital technologies.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              The company works closely with global technology vendors and
              strategic partners to design, deploy, and operate integrated
              systems that enhance operational efficiency, safety, and digital
              transformation.
            </p>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  Icon: Target,
                  color: "electric",
                  label: "Our Mission",
                  title: "Empowering Transformation Through Technology",
                  desc: "To deliver exceptional and customized technology solutions that empower organizations across the Middle East and Africa through innovation, reliability, and responsible use of technology.",
                },
                {
                  Icon: Eye,
                  color: "gold",
                  label: "Our Vision",
                  title: "A Digitally Resilient Middle East",
                  desc: "To create a world where technology solutions are accessible, reliable, and capable of improving the way organizations operate and serve their communities.",
                },
              ].map(({ Icon, color, label, title, desc }) => (
                <div
                  key={label}
                  className="p-8 rounded-2xl border border-border relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                    style={{ background: `hsl(var(--${color}) / 0.08)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                    style={{
                      background: `hsl(var(--${color}) / 0.1)`,
                      border: `1px solid hsl(var(--${color}) / 0.25)`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: `hsl(var(--${color}))` }}
                    />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase font-display mb-2 block"
                    style={{ color: `hsl(var(--${color}))` }}
                  >
                    {label}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--navy-mid)) 0%, hsl(var(--navy-deep)) 100%)",
            }}
          />
          <div className="relative container mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                  Core Values
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                Key Solutions{" "}
                <span className="gradient-blue-text">Overview</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-6 rounded-xl border border-border card-hover text-center w-[100%]"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background:
                          i % 2 === 0
                            ? "hsl(var(--electric) / 0.1)"
                            : "hsl(var(--gold) / 0.1)",
                        border: `1px solid ${i % 2 === 0 ? "hsl(var(--electric) / 0.25)" : "hsl(var(--gold) / 0.25)"}`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color:
                            i % 2 === 0
                              ? "hsl(var(--electric))"
                              : "hsl(var(--gold))",
                        }}
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {v.title}
                    </h3>
                    {/* <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Awards & Certifications ── */}
        <section className="py-16 border-y border-border/40 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--navy-deep)) 0%, hsl(217 42% 8%) 50%, hsl(var(--navy-deep)) 100%)",
            }}
          />
          <div className="relative container mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                Technology for{" "}
                <span className="gradient-gold-text">Every Sector</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From luxury hotels to government ministries and large-scale real
                estate developments, iTechs Group brings specialized expertise
                tailored to each sector's unique requirements.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Real Estate Development",
                "Government & Smart Cities",
                "Infrastructure & Contractors",
                "Hospitality & Tourism",
                "Education & Campuses",
              ].map((cert, i) => (
                <div
                  key={cert}
                  className="px-5 py-2.5 rounded-full border text-sm font-medium font-display transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor:
                      i % 2 === 0
                        ? "hsl(var(--electric) / 0.35)"
                        : "hsl(var(--gold) / 0.35)",
                    background:
                      i % 2 === 0
                        ? "hsl(var(--electric) / 0.05)"
                        : "hsl(var(--gold) / 0.05)",
                    color:
                      i % 2 === 0 ? "hsl(var(--electric))" : "hsl(var(--gold))",
                  }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 border-y border-border/40 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--navy-deep)) 0%, hsl(217 42% 8%) 50%, hsl(var(--navy-deep)) 100%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
            }}
          />
          <div className="relative container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "2009", label: "Year Founded", sub: "Cairo, Egypt" },
                {
                  value: "500+",
                  label: "Projects Delivered",
                  sub: "Across MENA",
                },
                {
                  value: "150+",
                  label: "Expert Engineers",
                  sub: "Certified professionals",
                },
                {
                  value: "50+",
                  label: "OEM Partners",
                  sub: "Global alliances",
                },
              ].map(({ value, label, sub }) => (
                <div key={label} className="group">
                  <p className="font-display font-bold text-4xl md:text-5xl gradient-blue-text mb-1">
                    {value}
                  </p>
                  <p className="font-display font-semibold text-sm text-foreground/80 mb-0.5">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--electric) / 0.4), transparent)",
            }}
          />
        </section>

        {/* ── Timeline ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-8" />
          <div className="relative container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
                  Our Journey
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                15+ Years of{" "}
                <span className="gradient-gold-text">Milestones</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From a Cairo startup to a regional powerhouse — every milestone
                shaped by our commitment to excellence.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(var(--electric) / 0.4), hsl(var(--gold) / 0.4))",
                }}
              />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content card */}
                    <div className="flex-1">
                      <div
                        className={`p-6 rounded-xl border border-border card-hover ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        style={{
                          background:
                            "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                        }}
                      >
                        <h3 className="font-display font-bold text-lg text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Year badge — center */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-20 h-20 rounded-full flex flex-col items-center justify-center border-2"
                        style={{
                          background:
                            i % 2 === 0
                              ? "hsl(var(--electric) / 0.1)"
                              : "hsl(var(--gold) / 0.1)",
                          borderColor:
                            i % 2 === 0
                              ? "hsl(var(--electric) / 0.5)"
                              : "hsl(var(--gold) / 0.5)",
                          boxShadow:
                            i % 2 === 0
                              ? "0 0 20px hsl(var(--electric) / 0.15)"
                              : "0 0 20px hsl(var(--gold) / 0.15)",
                        }}
                      >
                        <span
                          className="font-display font-bold text-sm"
                          style={{
                            color:
                              i % 2 === 0
                                ? "hsl(var(--electric))"
                                : "hsl(var(--gold))",
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-widest uppercase font-display">
                  Our Pillars
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                How We <span className="gradient-gold-text">Deliver Value</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-6 rounded-xl border border-border card-hover shadow-card"
                    style={{
                      background:
                        "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: "hsl(var(--electric) / 0.1)",
                        border: "1px solid hsl(var(--electric) / 0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-mid)) 100%)",
            }}
          />
          <div className="relative container mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                <span className="text-electric text-xs font-semibold tracking-widest uppercase font-display">
                  Leadership
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                The Team Behind{" "}
                <span className="gradient-blue-text">iTechs</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Seasoned professionals with deep roots in regional technology,
                government, and enterprise markets.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member, i) => (
                <div
                  key={member.name}
                  className="p-6 rounded-xl border border-border card-hover relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--card)), hsl(var(--navy-deep)))",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl pointer-events-none"
                    style={{
                      background:
                        i % 2 === 0
                          ? "hsl(var(--electric) / 0.07)"
                          : "hsl(var(--gold) / 0.07)",
                    }}
                  />
                  {/* Avatar placeholder */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 font-display font-bold text-lg"
                    style={{
                      background:
                        i % 2 === 0
                          ? "hsl(var(--electric) / 0.12)"
                          : "hsl(var(--gold) / 0.12)",
                      border: `2px solid ${i % 2 === 0 ? "hsl(var(--electric) / 0.3)" : "hsl(var(--gold) / 0.3)"}`,
                      color:
                        i % 2 === 0
                          ? "hsl(var(--electric))"
                          : "hsl(var(--gold))",
                    }}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-0.5">
                    {member.name}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{
                      color:
                        i % 2 === 0
                          ? "hsl(var(--electric))"
                          : "hsl(var(--gold))",
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-10" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-mid)) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "hsl(var(--primary) / 0.1)" }}
          />
          <div className="relative container mx-auto text-center max-w-3xl">
            <Award className="w-10 h-10 mx-auto mb-6 text-gold" />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to Build the Future{" "}
              <span className="gradient-gold-text">Together?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Partner with iTechs Group and gain access to Egypt's most
              experienced technology systems integration team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded font-semibold font-display text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
                  color: "hsl(var(--navy-deep))",
                }}
              >
                Start a Conversation
              </Link>
              <a
                href="/#services"
                className="px-8 py-3.5 rounded font-semibold font-display text-sm border transition-all duration-300 hover:border-electric/60"
                style={{
                  borderColor: "hsl(var(--electric) / 0.35)",
                  color: "hsl(var(--electric))",
                  background: "hsl(var(--electric) / 0.05)",
                }}
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
