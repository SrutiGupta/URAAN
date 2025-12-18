import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, Heart, Sparkles, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">24/7 Support Available</span>
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                  Your Journey to{" "}
                  <span className="gradient-text">Parenthood</span>{" "}
                  Starts Here
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
                  1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman.
                  Advanced treatments with personalized care and expert guidance.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Happy Families</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">50%+</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">7+</p>
                  <p className="text-xs text-muted-foreground">Expert Doctors</p>
                </div>
              </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedButton onClick={() => openWhatsApp()} variant="hero" size="lg">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>

          {/* Visual */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center animate-float">
                      <Heart className="w-16 h-16 text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-display font-semibold text-foreground">State-of-the-Art</p>
                    <p className="text-muted-foreground">Fertility & Fetal Medicine</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 p-4 rounded-2xl bg-card shadow-soft border border-border/50 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Modern Technology</p>
                    <p className="text-sm text-muted-foreground">Advanced Equipment</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-card shadow-soft border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Personalized Care</p>
                    <p className="text-sm text-muted-foreground">Tailored Treatments</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
