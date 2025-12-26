import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, Heart, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroVideo from "@/assets/document_6208670110232615764.mp4";

const TypingText = () => {
  const fullText = "Your Journey to Parenthood Starts Here";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, fullText]);

  // Split text to apply gradient to "Parenthood"
  const renderText = () => {
    const text = displayedText;
    const parenthoodIndex = text.indexOf("Parenthood");

    if (parenthoodIndex === -1) {
      return text;
    }

    const before = text.slice(0, parenthoodIndex);
    const parenthood = text.slice(parenthoodIndex, parenthoodIndex + 10);
    const after = text.slice(parenthoodIndex + 10);

    return (
      <>
        {before}
        <span className="text-primary-light">{parenthood}</span>
        {after}
      </>
    );
  };

  return (
    <>
      {renderText()}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1 w-0.5 h-[1em] bg-white align-middle"
      />
    </>
  );
};

export function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Video Background */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : (
        // Fallback background image
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 gradient-hero" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            {/* Heading */}
            <FadeIn delay={0}>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight min-h-[1.2em]">
                  <TypingText />
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman.
                  Advanced treatments with personalized care and expert guidance.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-sm text-white/80">Happy Families</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">50%+</p>
                    <p className="text-sm text-white/80">Success Rate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">7+</p>
                    <p className="text-sm text-white/80">Expert Doctors</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  onClick={() => openWhatsApp()}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton
                  asChild
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg"
                  variant="outline"
                  size="lg"
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
