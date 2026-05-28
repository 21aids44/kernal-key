import { motion } from "motion/react";

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="apply"
      data-ocid="cta.section"
      className="relative overflow-hidden py-32"
    >
      {/* Electric gradient background */}
      <div className="absolute inset-0 gradient-electric opacity-90" />

      {/* Decorative floating orbs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 195 / 0.45) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.22 270 / 0.5) 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.9 0.12 195 / 0.15) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Ready to Launch Your Career?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-white/85 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Join hundreds of students who got paid to learn and landed their dream
          jobs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Apply Now — white solid pill */}
          <motion.button
            type="button"
            data-ocid="cta.apply_button"
            onClick={() => scrollTo("apply")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full bg-white text-foreground font-display font-bold text-lg shadow-lg hover:shadow-white/30 hover:shadow-2xl transition-smooth animate-glow"
          >
            Apply Now
          </motion.button>

          {/* Learn More — outlined white border pill */}
          <motion.button
            type="button"
            data-ocid="cta.learn_more_button"
            onClick={() => scrollTo("offer")}
            whileHover={{ scale: 1.06, backgroundColor: "white" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full border-2 border-white text-white font-display font-bold text-lg transition-smooth hover:text-foreground"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
