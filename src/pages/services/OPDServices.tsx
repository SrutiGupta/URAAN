import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Stethoscope, Heart, Baby, User, Activity } from "lucide-react";

const services = [
  {
    id: "gynecology-opd",
    title: "Gynecology OPD",
    description: "Comprehensive gynecological consultations for women's health concerns.",
    icon: Heart,
  },
  {
    id: "obstetrics-opd",
    title: "Obstetrics OPD",
    description: "Prenatal care and pregnancy monitoring by expert obstetricians.",
    icon: Baby,
  },
  {
    id: "internal-medicine-opd",
    title: "Internal Medicine",
    description: "General health consultations and management of chronic conditions.",
    icon: Stethoscope,
  },
  {
    id: "pediatrics-opd",
    title: "Pediatrics OPD",
    description: "Expert care for infants, children, and adolescent health.",
    icon: User,
  },
  {
    id: "endocrinology-opd",
    title: "Endocrinology",
    description: "Management of hormonal and metabolic disorders.",
    icon: Activity,
  },
  {
    id: "general-consultation",
    title: "General Consultation",
    description: "Initial consultations and health check-ups.",
    icon: Stethoscope,
  },
];

const OPDServices = () => {
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
              <span className="text-primary text-sm">Multi-Specialty OPD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Multi-Specialty <span className="gradient-text">OPD Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive outpatient services with expert specialists across multiple disciplines.
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
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  onClick={() => openWhatsApp({ service: service.title })}
                  variant="hero"
                  size="sm"
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OPDServices;
