import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Technology Partners", href: "/partners" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-32 h-auto flex items-center justify-center">
            <img src="/si-brand.png" alt="Logo" />
          </div>
          <div className="leading-none">
            {/* <span className="font-display font-semibold text-foreground text-lg tracking-tight">
              iTechs
            </span> */}
            {/* <span className="font-display font-semibold text-gold text-lg tracking-tight ml-[4px]">
              SI
            </span> */}
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href.startsWith("/") &&
              !item.href.includes("#") &&
              (location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href)));
            const isInternal = item.href.startsWith("/");
            const isHash = item.href.includes("#");

            return (
              <li key={item.label}>
                {isInternal && !isHash ? (
                  <Link
                    to={item.href}
                    className={`nav-link text-sm font-medium py-1 ${isActive ? "text-gold" : ""}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`nav-link text-sm font-medium py-1 ${isActive ? "text-gold" : ""}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="/#contact"
          className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded text-sm font-semibold font-display transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
            color: "hsl(var(--navy-deep))",
          }}
        >
          Get in Touch
          <ChevronRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-mid border-b border-border">
          <ul className="container mx-auto py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isInternal = item.href.startsWith("/");
              const isHash = item.href.includes("#");
              return (
                <li key={item.label}>
                  {isInternal && !isHash ? (
                    <Link
                      to={item.href}
                      className="block py-3 px-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors border-b border-border/40"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 px-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors border-b border-border/40"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
            <li className="pt-3">
              <a
                href="/#contact"
                className="block text-center py-3 rounded text-sm font-semibold font-display"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--gold)), hsl(35 90% 45%))",
                  color: "hsl(var(--navy-deep))",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
