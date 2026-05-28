export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "What We Offer", id: "offer" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Apply", id: "apply" },
  ];

  return (
    <footer
      data-ocid="footer.section"
      className="relative border-t py-10 px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.13 0.02 240 / 0.98) 0%, oklch(0.16 0.025 250 / 0.98) 100%)",
        borderColor: "oklch(0.32 0.04 240 / 0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-black text-xl tracking-tight text-white">
              Kernal &amp; Key
            </span>
            <span
              className="font-body text-sm"
              style={{ color: "oklch(0.65 0.05 240)" }}
            >
              Empowering the next generation of developers.
            </span>
          </div>

          {/* Center: Nav links */}
          <nav
            data-ocid="footer.nav"
            className="flex flex-wrap justify-center gap-2"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                data-ocid={`footer.nav_link.${link.id}`}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-1.5 rounded-full font-body text-sm font-medium transition-smooth"
                style={{ color: "oklch(0.72 0.06 240)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.25 0.04 240 / 0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.72 0.06 240)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p
              className="font-body text-sm"
              style={{ color: "oklch(0.55 0.04 240)" }}
            >
              &copy; {year} Kernal &amp; Key. All rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs transition-smooth hover:opacity-80"
              style={{ color: "oklch(0.48 0.04 240)" }}
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
