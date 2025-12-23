import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";
import { Calendar, MessageCircle, Check } from "lucide-react";

const serviceCategories = [
  {
    name: "Consultation",
    services: ["General Consultation", "Fertility Consultation", "Fetal Medicine Consultation"],
  },
  {
    name: "Ultrasound / USG",
    services: ["General Ultrasound", "Pelvic Ultrasound", "Abdominal Ultrasound"],
  },
  {
    name: "Fetal Scans",
    services: ["NT Scan", "Anomaly Scan", "Growth Scan", "Doppler Scan", "Fetal Echo", "Neurosonogram"],
  },
  {
    name: "Procedures",
    services: ["IUI", "IVF Consultation", "Egg Freezing", "Amniocentesis", "CVS"],
  },
];

const BookAppointment = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleBooking = () => {
    openWhatsApp({
      service: selectedService || "General Consultation",
      date: selectedDate,
    });
  };

  const isFormComplete = selectedService && selectedDate;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Book Your <span className="gradient-text">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your preferred service, date, and time. We'll confirm your appointment via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[
                { step: 1, label: "Service" },
                { step: 2, label: "Date" },
                { step: 3, label: "Confirm" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 ${
                    (item.step === 1 && selectedService) ||
                    (item.step === 2 && selectedDate) ||
                    (item.step === 3 && isFormComplete)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      (item.step === 1 && selectedService) ||
                      (item.step === 2 && selectedDate) ||
                      (item.step === 3 && isFormComplete)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {((item.step === 1 && selectedService) ||
                        (item.step === 2 && selectedDate)) ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        item.step
                      )}
                    </div>
                    <span className="hidden sm:inline text-sm font-medium">{item.label}</span>
                  </div>
                  {index < 2 && (
                    <div className="w-8 sm:w-16 h-0.5 bg-muted" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Service Selection */}
              <div className="lg:col-span-2 space-y-6">
                {/* Category Selection */}
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h2 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    Select Service Category
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setSelectedService(null);
                        }}
                        className={`p-4 rounded-xl text-left transition-all ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <p className={`text-xs mt-1 ${
                          selectedCategory === category.name ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}>
                          {category.services.length} services
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                {selectedCategory && (
                  <div className="p-6 rounded-2xl bg-card border border-border/50 animate-fade-up">
                    <h2 className="text-lg font-display font-semibold text-foreground mb-4">
                      Select Specific Service
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceCategories
                        .find((c) => c.name === selectedCategory)
                        ?.services.map((service) => (
                          <button
                            key={service}
                            onClick={() => setSelectedService(service)}
                            className={`p-4 rounded-xl text-left transition-all ${
                              selectedService === service
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground hover:bg-muted/80"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {/* Date Selection */}
                {selectedService && (
                  <div className="p-6 rounded-2xl bg-card border border-border/50 animate-fade-up">
                    <h2 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      Select Date
                    </h2>

                    {/* Date */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full h-12 px-4 rounded-xl bg-muted border-0 text-foreground focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border/50">
                  <h2 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary text-sm font-bold">3</span>
                    </div>
                    Booking Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="text-xs text-muted-foreground mb-1">Service</p>
                      <p className="font-medium text-foreground">
                        {selectedService || "Not selected"}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="text-xs text-muted-foreground mb-1">Date</p>
                      <p className="font-medium text-foreground">
                        {selectedDate || "Not selected"}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={handleBooking}
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={!isFormComplete}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    You'll be redirected to WhatsApp to confirm your booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
