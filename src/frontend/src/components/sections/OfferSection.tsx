import { Award, Briefcase, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  glowColor: string;
}

const services: ServiceCard[] = [
  {
    icon: Briefcase,
    title: "Paid Internships",
    description:
      "Get compensated while you gain real industry experience in web and software development",
    iconColor: "text-primary",
    glowColor: "shadow-[0_0_18px_oklch(0.65_0.22_195/0.5)]",
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description:
      "Earn certificates recognized by top tech employers upon internship completion",
    iconColor: "text-accent",
    glowColor: "shadow-[0_0_18px_oklch(0.6_0.22_270/0.5)]",
  },
  {
    icon: TrendingUp,
    title: "Career Placement",
    description:
      "We connect you with hiring partners for full-time roles after your internship",
    iconColor: "text-primary",
    glowColor: "shadow-[0_0_18px_oklch(0.65_0.22_195/0.5)]",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Work directly with senior engineers and industry leaders throughout your journey",
    iconColor: "text-accent",
    glowColor: "shadow-[0_0_18px_oklch(0.6_0.22_270/0.5)]",
  },
];

export default function OfferSection() {
  return (
    <section
      id="offer"
      data-ocid="offer.section"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.98 0.008 230) 0%, oklch(0.96 0.015 210) 50%, oklch(0.97 0.012 240) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 195) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 270) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.65 0.22 195), oklch(0.6 0.22 270))",
              }}
            >
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Everything you need to kickstart your tech career
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              data-ocid={`offer.card.${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 cursor-default group transition-shadow duration-300 hover:shadow-[0_8px_40px_oklch(0.65_0.22_195/0.18)]"
            >
              {/* Icon Badge */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${service.glowColor} transition-shadow duration-300 group-hover:scale-110`}
                style={{
                  background:
                    service.iconColor === "text-primary"
                      ? "linear-gradient(135deg, oklch(0.65 0.22 195 / 0.15), oklch(0.65 0.22 195 / 0.08))"
                      : "linear-gradient(135deg, oklch(0.6 0.22 270 / 0.15), oklch(0.6 0.22 270 / 0.08))",
                  border:
                    service.iconColor === "text-primary"
                      ? "1px solid oklch(0.65 0.22 195 / 0.35)"
                      : "1px solid oklch(0.6 0.22 270 / 0.35)",
                }}
              >
                <service.icon
                  className={`w-6 h-6 ${service.iconColor}`}
                  strokeWidth={2}
                />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
