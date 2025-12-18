import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Scan, Activity } from "lucide-react";

const services = [
  {
    id: "gynecology-scan",
    title: "Gynecology Scan",
    description: "Comprehensive pelvic ultrasound to evaluate uterus, ovaries, and surrounding structures.",
    icon: Scan,
  },
  {
    id: "female-pelvis-scan",
    title: "Female Pelvis Scan",
    description: "Detailed imaging of female reproductive organs for diagnostic purposes.",
    icon: Scan,
  },
  {
    id: "follicular-study-scan",
    title: "Follicular Study Scan",
    description: "Monitor ovarian follicle development for fertility treatment optimization.",
    icon: Activity,
  },
];

const GynecologyScans = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-primary text-sm">Gynecology Scans</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Gynecology <span className="gradient-text">Scans</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced ultrasound services for comprehensive women's health diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => openWhatsApp({ service: service.title })}
                    variant="hero"
                    size="sm"
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GynecologyScans;
