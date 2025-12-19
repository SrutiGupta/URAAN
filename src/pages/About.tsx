import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { Target, Award, Heart, Users, Sparkles, Shield, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedCard } from "@/components/AnimatedCard";
import doctorPatientImage from "@/assets/Doctor_patient.png";
import fetalityImage from "@/assets/fetality.png";

const expertise = [
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description: "State-of-the-art facilities and cutting-edge reproductive technologies to maximize success rates.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Board-certified specialists with years of experience in reproductive and fetal medicine.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Tailored treatment plans designed to meet your unique needs and circumstances.",
  },
  {
    icon: Shield,
    title: "Trusted Results",
    description: "Proven track record with high success rates and thousands of happy families.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                24/7 Support Available
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                About <span className="gradient-text">UDAAN</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman.
                Your trusted partner on the journey to parenthood.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                  <img
                    src={doctorPatientImage}
                    alt="Doctor consulting with patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-xl shadow-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Excellence</p>
                      <p className="text-sm text-slate-400">In Healthcare</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Helping Dreams Come True
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                At UDAAN, we are dedicated to helping couples and individuals achieve their dream of parenthood.
                Our mission is to provide compassionate, personalized care using the most advanced reproductive
                technologies while maintaining the highest standards of medical excellence.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We believe in making fertility treatments accessible, transparent, and successful for all our
                patients. Our team combines expertise, empathy, and innovation to support you through every
                step of your journey.
              </p>
              <div className="pt-4">
                <Button onClick={() => openWhatsApp()} variant="hero" size="lg">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Vision
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Leading the Way in Fertility Care
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our vision is to be the leading fertility and fetal medicine center in the region,
                known for our exceptional patient outcomes, innovative treatments, and compassionate care.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We strive to continuously advance our capabilities, invest in cutting-edge technology,
                and expand our team of specialists to serve more families on their path to parenthood.
              </p>
              <ul className="space-y-3">
                {["State-of-the-art IVF laboratory", "Experienced specialists team", "Comprehensive fetal medicine services", "Patient-centered approach"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                  <img
                    src={fetalityImage}
                    alt="Fertility and fetal medicine care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-slate-400 text-lg">
              We combine world-class expertise with compassionate care to deliver exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover-lift text-center hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a consultation with our fertility specialists today.
            </p>
            <Button onClick={() => openWhatsApp()} variant="hero" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
