import { Users, Microscope, Heart } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { FadeIn } from "@/components/FadeIn";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of fertility specialists, embryologists, fetal medicine experts, and geneticists bring years of experience and expertise to provide the best care.",
    color: "primary",
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    description: "State-of-the-art facilities and advanced reproductive technologies to ensure the highest success rates for all our treatments.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Tailored treatment plans and compassionate support throughout your fertility journey, because every patient is unique.",
    color: "accent",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose UDAAN?
            </h2>
            <p className="text-slate-400 text-lg">
              We combine expertise, technology, and compassion to provide the best fertility and fetal medicine care.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              delay={index * 0.1}
              className="group relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-primary/10">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-primary/5" />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
