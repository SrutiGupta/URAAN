import { ClipboardList, Search, FileText, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Initial Consultation",
    description: "Comprehensive evaluation and treatment planning with our expert team.",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnostic Testing",
    description: "Complete fertility assessment and analysis using advanced technology.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Treatment Plan",
    description: "Personalized treatment protocol development tailored to your needs.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Treatment & Support",
    description: "Ongoing care and monitoring throughout the entire process.",
  },
];

export function TreatmentProcess() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-primary-light/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Your Treatment Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            We guide you through every step of your fertility journey with care and expertise.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number Badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-soft border border-border/50 flex items-center justify-center relative z-10 group hover:shadow-glow transition-shadow duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
