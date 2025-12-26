import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { Clock, Award, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedCard } from "@/components/AnimatedCard";

const doctors = [
  {
    name: "Dr. Sandip Mondal",
    role: "Gynecology & Obstetrics",
    qualifications: "MBBS(HONS)(GOLD MEDALIST) MS (G&O) MRCOG - I (UK)(LONDON) FELLOWSHIP IN FETAL MEDICINE (ICOG)(TN), FELLOWSHIP IN REPRODUCTIVE MEDICINE (NOVA-WINGS IVF, AHMEDABAD), FELLOWSHIP IN ADVANCED LAPAROSCOPIC SURGERY (FALS)",
    image: "/doctor.png",
    featured: true,
  },
  {
    name: "Dr. Dipanjana Datta",
    role: "Genetic Counseling",
    qualifications: "Consultant Genetic Counselor State Co-ordinator (WB) Organization of Rare Disease India (ORDI)",
    image: "https://web-udaan.vercel.app/_next/image?url=%2Fdoctors%2Fdr-dipanjana.jpg&w=640&q=75",
  },
  {
    name: "Dr. Sukanta Dutta",
    role: "Internal Medicine",
    qualifications: "MBBS, MD (MEDICINE)",
    image: "https://web-udaan.vercel.app/_next/image?url=%2Fdoctors%2Fdr-sukanta.jpg&w=640&q=75",
  },
  {
    name: "Dr. Ipsita Ghosh",
    role: "Pediatrics",
    qualifications: "MBBS(HONS) MD(PAEDIATRICS)",
    image: "https://web-udaan.vercel.app/_next/image?url=%2Fdoctors%2Fighosh02.jpg&w=640&q=75",
  },
  {
    name: "Dr. Arka Banerjee",
    role: "General Surgery",
    qualifications: "MBBS, MS (SURGERY), DNB (SURGERY)",
    image: "https://web-udaan.vercel.app/_next/image?url=%2Fdoctors%2Fabanerjee01.jpg&w=640&q=75",
  },
];

const specialties = [
  "Gynecology & Obstetrics",
  "Fetal Medicine",
  "Genetic Counseling",
  "Internal Medicine",
  "Pediatrics",
];

const Doctors = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden gradient-hero">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              24/7 Service Available
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of highly qualified specialists brings together decades of experience in fertility treatments, reproductive medicine, and fetal medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Filter */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <AnimatedCard
                key={doctor.name}
                delay={index * 0.1}
                className={`group relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 ${
                  doctor.featured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=3d9991&color=fff&size=400`;
                    }}
                  />
                  {doctor.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      <Award className="w-3 h-3" />
                      Lead Specialist
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                      {doctor.role}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {doctor.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-4">
                    {doctor.qualifications}
                  </p>
                  <AnimatedButton
                    onClick={() => openWhatsApp({ service: `Consultation with ${doctor.name}` })}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Appointment
                  </AnimatedButton>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Meet Our Experts?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Schedule a consultation with any of our specialists today.
              </p>
              <AnimatedButton onClick={() => openWhatsApp()} variant="white" size="lg">
                <MessageCircle className="w-5 h-5" />
                Book Consultation
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Doctors;
