import { Link } from "react-router-dom";
import { ArrowRight, TestTube, Baby, Sparkles, Stethoscope, Dna, Users, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";
import { motion } from "framer-motion";

const services = [
  {
    icon: TestTube,
    title: "Fertility Testing",
    description: "Comprehensive diagnostic tests including semen analysis, hormone testing, and tubal patency tests.",
    href: "/services/fertility-testing",
    color: "primary",
  },
  {
    icon: Baby,
    title: "IUI Treatment",
    description: "Intrauterine insemination with facilities for both husband and donor sperm IUI.",
    href: "/services/iui",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "IVF Treatment",
    description: "Advanced in-vitro fertilization techniques including ICSI, blastocyst culture, and frozen embryo transfer.",
    href: "/services/ivf",
    color: "accent",
  },
  {
    icon: Scan,
    title: "Fetal Scans",
    description: "Comprehensive obstetric scans including NT, anomaly, growth, doppler, and fetal echo.",
    href: "/services/fetal-medicine",
    color: "primary",
  },
  {
    icon: Dna,
    title: "Genetic Counseling",
    description: "Expert genetic counselors to evaluate, diagnose, and manage patients with genetic disorders.",
    href: "/services/genetic-counseling",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Multispeciality OPD",
    description: "Team of physicians, nutritionists, surgeons & pediatricians for comprehensive care.",
    href: "/services/multispeciality",
    color: "accent",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Comprehensive Care for Your Journey
            </h2>
            <p className="text-slate-400 text-lg">
              From fertility treatments to fetal medicine, we offer a complete range of services to support you.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <Link
                to={service.href}
                className="group relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 block hover:shadow-lg hover:shadow-primary/20"
              >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-primary/10">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* View All */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <AnimatedButton asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
