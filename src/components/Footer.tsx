import { Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";

const Footer = () => {
  return (
    <footer
      className="border-t border-border/40 relative overflow-hidden"
      style={{ background: "hsl(var(--navy-deep))" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--electric) / 0.4), transparent)",
        }}
      />

      <div className="container mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <img src="/si-sign-light.svg" alt="Logo" />
              </div>
              <div className="leading-none">
                <span className="font-display font-semibold text-foreground text-lg tracking-tight">
                  iTechs
                </span>
                {/* <span className="font-display font-semibold text-gold text-lg tracking-tight ml-[4px]">
                  SI
                </span> */}
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              iTechs is a leading technology systems integrator delivering
              advanced security, smart infrastructure, and digital technology
              solutions across Egypt and the Middle East.
            </p>
          </div>

          {/* Solutions links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/solutions/${item.slug}`}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    {item.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*industries links*/}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industries.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/industries/${item.slug}`}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    {item.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Industries", path: "/industries" },
                { name: "Partners", path: "/partners" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith("/#") ? (
                    <a
                      href={item.path}
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} iTechs. All rights reserved. Cairo,
            Egypt.
          </p>
          {/* <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground text-xs hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
