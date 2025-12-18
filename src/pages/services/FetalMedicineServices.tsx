import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Scan, Activity, Heart, Brain, Baby } from "lucide-react";

const obstetricScans = [
  { id: "nt-scan", title: "NT Scan", description: "First trimester screening for chromosomal abnormalities.", icon: Scan },
  { id: "anomaly-scan", title: "Anomaly Scan", description: "Detailed second trimester scan for structural abnormalities.", icon: Baby },
  { id: "growth-scan", title: "Growth Scan", description: "Monitoring baby's growth throughout pregnancy.", icon: Activity },
  { id: "doppler-scan", title: "Doppler Scan", description: "Assessment of blood flow in fetal and placental vessels.", icon: Heart },
  { id: "fetal-echo", title: "Fetal Echo", description: "Detailed examination of the baby's heart.", icon: Heart },
  { id: "neurosonogram", title: "Neurosonogram", description: "Detailed examination of the baby's brain and spine.", icon: Brain },
];

const interventionalProcedures = [
  { id: "amniocentesis", title: "Amniocentesis", description: "Diagnostic procedure for genetic testing." },
  { id: "cvs", title: "CVS", description: "Chorionic Villus Sampling for early genetic diagnosis." },
  { id: "cordocentesis", title: "Cordocentesis", description: "Fetal blood sampling for diagnosis and treatment." },
];

const gynecologyScans = [
  { id: "female-pelvis-scan", title: "Female Pelvis Scan", description: "Detailed imaging of female reproductive organs." },
  { id: "follicular-study-scan", title: "Follicular Study Scan", description: "Monitor ovarian follicle development for fertility." },
];

const FetalMedicineServices = () => {
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
              <span className="text-primary text-sm">Fetal Medicine Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Fetal Medicine <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced prenatal diagnostic services for comprehensive fetal care and healthy pregnancies.
            </p>
          </div>
        </div>
      </section>

      {/* Obstetric Scans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Scan className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Obstetric Scans
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive ultrasound services to monitor fetal development throughout pregnancy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {obstetricScans.map((service) => (
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

          {/* Interventional Procedures */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Interventional Procedures
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Specialized diagnostic and therapeutic procedures for complex pregnancy cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {interventionalProcedures.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
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

          {/* Gynecology Scans */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Scan className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Gynecology Scans
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Advanced gynecological ultrasound services for women's health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gynecologyScans.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
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

export default FetalMedicineServices;
