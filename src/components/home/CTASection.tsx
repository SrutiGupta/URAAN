import { Button } from "@/components/ui/button";
import { openWhatsApp, PHONE_NUMBERS } from "@/lib/whatsapp";
import { Phone, MessageCircle, Clock, Heart, Stethoscope } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FadeIn } from "@/components/FadeIn";

export function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden bg-secondary">
      {/* Background - Dark with subtle Royal Blue accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              24/7 Service Available
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Schedule a consultation with our fertility experts today. We're here to support you every step of the way.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <Heart className="w-4 h-4" />
                Fertility Services
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <Stethoscope className="w-4 h-4" />
                Fetal Medicine
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton
                onClick={() => openWhatsApp()}
                variant="hero"
                size="lg"
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </AnimatedButton>
              <AnimatedButton
                asChild
                variant="outline"
                size="lg"
              >
                <a href={`tel:${PHONE_NUMBERS.primary.replace(/\s/g, "")}`}>
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </AnimatedButton>
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  Call Us Directly
                </h3>
                <p className="text-slate-400 text-sm">
                  Our team is available to assist you
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${PHONE_NUMBERS.primary.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Primary</p>
                      <p className="font-semibold text-white">{PHONE_NUMBERS.primary}</p>
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PHONE_NUMBERS.secondary.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Secondary</p>
                      <p className="font-semibold text-white">{PHONE_NUMBERS.secondary}</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-slate-400">Currently Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
