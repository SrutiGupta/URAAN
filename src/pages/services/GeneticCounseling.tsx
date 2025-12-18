import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Dna, CheckCircle } from "lucide-react";

const benefits = [
  "Understand genetic risks for inherited conditions",
  "Make informed family planning decisions",
  "Personalized risk assessment and counseling",
  "Guidance on prenatal genetic testing options",
  "Support for families with genetic conditions",
  "Expert interpretation of genetic test results",
];

const GeneticCounseling = () => {
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
              <span className="text-primary text-sm">Genetic Counseling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Genetic <span className="gradient-text">Counseling</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert genetic counseling to help you understand hereditary conditions and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Dna className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                What is Genetic Counseling?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Genetic counseling is a process that helps individuals and families understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease. Our expert counselors provide information about inherited conditions, assess risk, and guide you through testing options.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're planning a pregnancy, currently pregnant, or have concerns about genetic conditions in your family, our genetic counseling services can provide clarity and support.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Benefits</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Book a Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a genetic counseling session with our experts. Get personalized guidance for your family planning journey.
                </p>
                <Button
                  onClick={() => openWhatsApp({ service: "Genetic Counseling" })}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  You'll be redirected to WhatsApp to complete your booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeneticCounseling;
