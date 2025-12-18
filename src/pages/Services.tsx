import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Baby, Heart, Sparkles, Dna, Stethoscope } from "lucide-react";

const serviceCategories = [
  {
    title: "Infertility Services",
    description: "Comprehensive fertility testing and treatments including IUI, IVF, and more.",
    href: "/services/infertility",
    icon: Heart,
    color: "primary",
    services: ["Fertility Testing", "IUI", "IVF", "Egg Freezing", "Sperm Banking"],
  },
  {
    title: "Fetal Medicine Services",
    description: "Advanced prenatal screening and diagnostic services for healthy pregnancies.",
    href: "/services/fetal-medicine",
    icon: Baby,
    color: "secondary",
    services: ["Obstetric Scans", "Interventional Procedures", "Fetal Echo"],
  },
  {
    title: "Gynecology Scans",
    description: "Comprehensive gynecological ultrasound services for women's health.",
    href: "/services/gynecology-scans",
    icon: Sparkles,
    color: "accent",
    services: ["Gynecology Scan", "Female Pelvis Scan", "Follicular Study Scan"],
  },
  {
    title: "Genetic Counseling",
    description: "Expert genetic counseling for family planning and prenatal care.",
    href: "/services/genetic-counseling",
    icon: Dna,
    color: "primary",
    services: ["Pre-conception Counseling", "Prenatal Genetic Testing", "Risk Assessment"],
  },
  {
    title: "Multi-Specialty OPD Services",
    description: "Comprehensive outpatient services with expert specialists.",
    href: "/services/opd",
    icon: Stethoscope,
    color: "secondary",
    services: ["Gynecology OPD", "Internal Medicine", "Pediatrics"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fertility, fetal medicine, and multi-specialty services with personalized care and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  category.color === "primary" ? "bg-gradient-to-br from-primary/5 to-transparent" :
                  category.color === "secondary" ? "bg-gradient-to-br from-secondary/5 to-transparent" :
                  "bg-gradient-to-br from-accent/5 to-transparent"
                }`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    category.color === "primary" ? "bg-primary/10" :
                    category.color === "secondary" ? "bg-secondary/10" :
                    "bg-accent/20"
                  }`}>
                    <category.icon className={`w-8 h-8 ${
                      category.color === "primary" ? "text-primary" :
                      category.color === "secondary" ? "text-secondary" :
                      "text-accent"
                    }`} />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          category.color === "primary" ? "bg-primary" :
                          category.color === "secondary" ? "bg-secondary" :
                          "bg-accent"
                        }`} />
                        {service}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
