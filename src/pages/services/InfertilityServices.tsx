import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Heart, TestTube, Pill, Snowflake, Apple } from "lucide-react";

const services = [
  {
    id: "fertility-testing",
    title: "Fertility Testing",
    description: "Comprehensive diagnostic tests to evaluate reproductive health for both partners.",
    icon: TestTube,
  },
  {
    id: "iui",
    title: "IUI Treatment",
    description: "Intrauterine Insemination - a less invasive fertility treatment option.",
    icon: Heart,
  },
  {
    id: "ivf",
    title: "IVF Treatment",
    description: "Advanced In Vitro Fertilization with high success rates.",
    icon: Pill,
  },
  {
    id: "additional-fertility-testing",
    title: "Additional Fertility Testing",
    description: "Specialized tests for complex fertility cases.",
    icon: TestTube,
  },
  {
    id: "egg-freezing",
    title: "Egg Freezing",
    description: "Preserve your fertility for the future with oocyte cryopreservation.",
    icon: Snowflake,
  },
  {
    id: "sperm-banking",
    title: "Sperm Banking",
    description: "Safe collection, freezing, and storage of sperm for future use.",
    icon: Snowflake,
  },
  {
    id: "nutritional-guidance",
    title: "Nutritional Guidance",
    description: "Personalized nutrition plans to optimize fertility and pregnancy health.",
    icon: Apple,
  },
];

const InfertilityServices = () => {
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
              <span className="text-primary text-sm">Infertility Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Infertility <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive fertility testing and advanced treatments to help you achieve your dream of parenthood.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
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

export default InfertilityServices;
