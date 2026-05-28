import { BadgeCheck, Code2, CreditCard, Rocket } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: 1,
    icon: CreditCard,
    title: "Pay & Enroll",
    desc: "Choose your internship track and secure your spot with a one-time enrollment fee",
  },
  {
    number: 2,
    icon: Code2,
    title: "Start Interning",
    desc: "Work on real client projects, guided by experienced engineers from day one",
  },
  {
    number: 3,
    icon: BadgeCheck,
    title: "Get Certified",
    desc: "Complete your internship and receive your verified digital certificate",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Get Placed",
    desc: "We connect you with hiring partners and help you land your first or next role",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      data-ocid="howitworks.section"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-xl mx-auto">
            Your path from student to employed professional
          </p>
        </motion.div>

        {/* Steps + Connectors */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-center md:items-start flex-1"
              >
                {/* Step Card */}
                <motion.div
                  data-ocid={`howitworks.item.${step.number}`}
                  className="flex-1 flex flex-col items-center text-center p-6 md:p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300 mx-0 md:mx-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  {/* Numbered Badge */}
                  <div className="gradient-electric w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm mb-4 shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Connector — desktop: horizontal dashed line with shimmer */}
                {!isLast && (
                  <>
                    {/* Desktop connector */}
                    <div className="hidden md:flex items-center self-start mt-[3.25rem] flex-shrink-0 w-8">
                      <div className="relative w-full h-[2px] overflow-hidden">
                        <div className="absolute inset-0 border-t-2 border-dashed border-primary/30" />
                        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary/60 to-transparent w-[200%] -translate-x-1/2" />
                      </div>
                    </div>

                    {/* Mobile connector */}
                    <div className="flex md:hidden flex-col items-center py-2 self-stretch">
                      <div className="relative w-[2px] h-10 overflow-hidden">
                        <div className="absolute inset-0 border-l-2 border-dashed border-primary/30" />
                        <div className="absolute inset-0 animate-shimmer bg-gradient-to-b from-transparent via-primary/60 to-transparent h-[200%] -translate-y-1/2" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
