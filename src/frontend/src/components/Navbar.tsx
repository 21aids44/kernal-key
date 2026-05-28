import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "What We Offer", href: "#offer" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-ocid="navbar"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      <div className="glass border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              data-ocid="navbar.logo_link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display font-bold text-xl tracking-tight select-none cursor-pointer bg-transparent border-0 p-0"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.22 195) 0%, oklch(0.6 0.22 270) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kernal &amp; Key
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                data-ocid="navbar.apply_now_button"
                onClick={() => scrollTo("#cta")}
                className="gradient-primary text-white rounded-full px-6 py-2 font-display font-semibold text-sm shadow-md hover:scale-105 transition-transform duration-200 border-0"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              data-ocid="navbar.mobile_menu_toggle"
              className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            data-ocid="navbar.mobile_menu"
            className="md:hidden border-t border-white/20 px-4 pb-4 pt-2 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                onClick={() => scrollTo(link.href)}
                className="text-left py-2 text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              type="button"
              data-ocid="navbar.mobile.apply_now_button"
              onClick={() => scrollTo("#cta")}
              className="gradient-primary text-white rounded-full px-6 py-2 font-display font-semibold text-sm border-0 mt-1"
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
