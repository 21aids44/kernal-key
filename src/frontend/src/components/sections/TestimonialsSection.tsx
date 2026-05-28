import { motion } from "motion/react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Intern → Junior Dev at TechNova",
    quote:
      "Kernal & Key gave me the real-world experience I couldn't get in class. Within 3 months, I had a job offer.",
    initials: "PS",
    ocid: "testimonials.card.1",
  },
  {
    name: "Marcus Johnson",
    role: "Software Intern → Full-Stack Dev at StartupXYZ",
    quote:
      "The certificate program is legit. Recruiters actually asked about it. Best investment I made in college.",
    initials: "MJ",
    ocid: "testimonials.card.2",
  },
  {
    name: "Aisha Patel",
    role: "Web Dev Intern → SDE at CloudCorp",
    quote:
      "I was skeptical at first, but the placement support is real. They helped me prep for interviews and negotiate my offer.",
    initials: "AP",
    ocid: "testimonials.card.3",
  },
];

function StarRating() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {stars.map((star) => (
        <span
          key={star}
          className="text-xl"
          style={{ color: "oklch(0.82 0.18 85)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.012 210) 0%, oklch(0.96 0.016 230) 50%, oklch(0.97 0.012 260) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 195), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 270), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Hear from students who transformed their careers
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.ocid}
              data-ocid={t.ocid}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass p-8 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-smooth"
            >
              <StarRating />

              <p className="font-body italic text-foreground/80 text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-2 border-t border-border/40">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 gradient-primary shadow-md"
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-sm text-white tracking-wide">
                    {t.initials}
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="font-display font-bold text-foreground text-sm truncate">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground leading-snug">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
