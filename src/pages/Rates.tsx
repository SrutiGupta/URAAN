import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { openWhatsApp } from "@/lib/whatsapp";
import { CheckCircle, CreditCard, Shield, Search, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "@/components/AnimatedCard";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedButton } from "@/components/AnimatedButton";

type Category = "all" | "consultations" | "usg" | "fetal" | "procedures";

interface Service {
  name: string;
  rate: string;
  category: Category[];
}

const services: Service[] = [
  { name: "Registration", rate: "Rs. 300/-", category: ["consultations"] },
  { name: "Infertility: New Consultation", rate: "Rs. 700/-", category: ["consultations"] },
  { name: "Infertility: Follow up Consultation", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "OBGYN Consultation: New", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "OBGYN Consultation: Follow up", rate: "Rs. 400/-", category: ["consultations"] },
  { name: "Physician Consultation: New", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "Physician Consultation: Follow up", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "Pediatrician Consultation: New", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "Pediatrician Consultation: Follow up", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "Surgeon Consultation: New", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "Surgeon Consultation: Follow up", rate: "Rs. 500/-", category: ["consultations"] },
  { name: "USG Whole Abdomen", rate: "Rs. 1200/-", category: ["usg"] },
  { name: "USG Upper Abdomen", rate: "Rs. 900/-", category: ["usg"] },
  { name: "USG Lower Abdomen (TAS)", rate: "Rs. 900/-", category: ["usg"] },
  { name: "TVS Pelvic Organs", rate: "Rs. 1500/-", category: ["usg"] },
  { name: "TVS (Infertility Scan)", rate: "Rs. 2000/-", category: ["usg"] },
  { name: "USG Breast", rate: "Rs. 1400/-", category: ["usg"] },
  { name: "USG Neck", rate: "Rs. 1800/-", category: ["usg"] },
  { name: "Folliculometry (TVS)", rate: "Rs. 700/day", category: ["usg"] },
  { name: "TVS FPP (Early pregnancy Scan)", rate: "Rs. 2000/-", category: ["fetal"] },
  { name: "NT Scan: Singleton", rate: "Rs. 2000/-", category: ["fetal"] },
  { name: "NT Scan: Twins", rate: "Rs. 3500/-", category: ["fetal"] },
  { name: "NT Scan: Triplets", rate: "Rs. 5000/-", category: ["fetal"] },
  { name: "Fetal Anatomy Scan (Early): Singleton", rate: "Rs. 2000/-", category: ["fetal"] },
  { name: "Fetal Anatomy Scan (Early): Twins", rate: "Rs. 3500/-", category: ["fetal"] },
  { name: "Fetal Anatomy Scan (Early): Triplets", rate: "Rs. 5000/-", category: ["fetal"] },
  { name: "Fetal Anomaly Scan: Singleton", rate: "Rs. 3000/-", category: ["fetal"] },
  { name: "Fetal Anomaly Scan: Twins", rate: "Rs. 5000/-", category: ["fetal"] },
  { name: "Fetal Anomaly Scan: Triplets", rate: "Rs. 7000/-", category: ["fetal"] },
  { name: "Fetal Biometry / Well Being / Doppler Study: Singleton", rate: "Rs. 2000/-", category: ["fetal"] },
  { name: "Fetal Biometry / Well Being / Doppler Study: Twins", rate: "Rs. 3500/-", category: ["fetal"] },
  { name: "Fetal Biometry / Well Being / Doppler Study: Triplets", rate: "Rs. 5000/-", category: ["fetal"] },
  { name: "New consultation + TVS (Infertility Scan)", rate: "Rs. 2000/-", category: ["consultations", "usg"] },
  { name: "USG FPP", rate: "Rs. 900/-", category: ["usg"] },
  { name: "Second Opinion Scan", rate: "Rs. 4000/-", category: ["fetal"] },
  { name: "Genetic Counselling", rate: "Rs. 1000/-", category: ["consultations"] },
  { name: "Fetal Echo: Singleton", rate: "Rs. 2500/-", category: ["fetal"] },
  { name: "Fetal Echo: Twins", rate: "Rs. 4500/-", category: ["fetal"] },
  { name: "Fetal Echo: Triplets", rate: "Rs. 6500/-", category: ["fetal"] },
  { name: "Fetal Neurosonogram: Singleton", rate: "Rs. 3000/-", category: ["fetal"] },
  { name: "Fetal Neurosonogram: Twins", rate: "Rs. 5000/-", category: ["fetal"] },
  { name: "Fetal Neurosonogram: Triplets", rate: "Rs. 7000/-", category: ["fetal"] },
  { name: "Amniocentesis Procedure Charge", rate: "Rs. 8000/-", category: ["procedures"] },
  { name: "Chorionic Villus sampling Procedure Charge", rate: "Rs. 8000/-", category: ["procedures"] },
  { name: "Selective fetal reduction", rate: "Rs. 20,000/-", category: ["procedures"] },
  { name: "USG scrotum + Inguinal Region", rate: "Rs. 1500/-", category: ["usg"] },
  { name: "TRUS", rate: "Rs. 2000/-", category: ["usg"] },
];

const categories = [
  { id: "all" as Category, label: "All Services" },
  { id: "consultations" as Category, label: "Consultations" },
  { id: "usg" as Category, label: "USG Scans" },
  { id: "fetal" as Category, label: "Fetal Scans" },
  { id: "procedures" as Category, label: "Procedures" },
];

const features = [
  { icon: CheckCircle, title: "Transparent Pricing", description: "No hidden charges" },
  { icon: CreditCard, title: "Flexible Payment", description: "Multiple payment options" },
  { icon: Shield, title: "Insurance Support", description: "Insurance claims assistance" },
];

export default function Rates() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleBookWhatsApp = () => {
    const serviceNames = selectedServices.join(", ");
    openWhatsApp({ service: serviceNames || "General Consultation" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Clear and competitive rates for all our fertility & fetal medicine services. 
            We believe in complete transparency in our pricing.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card border-b border-border/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border/50 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-card rounded-3xl border border-border/50 shadow-soft overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border/50">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Select Services</h2>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background border-border/50 rounded-xl"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-6 py-4 font-display font-semibold">Service</th>
                    <th className="text-left px-6 py-4 font-display font-semibold">Rate</th>
                    <th className="text-center px-6 py-4 font-display font-semibold">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <tr
                      key={index}
                      className={cn(
                        "border-b border-border/30 transition-colors",
                        selectedServices.includes(service.name)
                          ? "bg-primary-light"
                          : index % 2 === 0
                          ? "bg-background"
                          : "bg-muted/30",
                        "hover:bg-primary-light/50"
                      )}
                    >
                      <td className="px-6 py-4 text-foreground">{service.name}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{service.rate}</td>
                      <td className="px-6 py-4 text-center">
                        <Checkbox
                          checked={selectedServices.includes(service.name)}
                          onCheckedChange={() => toggleService(service.name)}
                          className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer with Book Button */}
            <div className="p-6 md:p-8 bg-muted/30 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-muted-foreground">
                    {selectedServices.length > 0 ? (
                      <>
                        <span className="font-semibold text-foreground">{selectedServices.length}</span> service(s) selected
                      </>
                    ) : (
                      "Select services to book via WhatsApp"
                    )}
                  </p>
                </div>
                <Button
                  onClick={handleBookWhatsApp}
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 p-6 bg-card rounded-2xl border border-border/50">
            <h3 className="font-display font-semibold text-foreground mb-4">Important Notes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                All rates are inclusive of GST
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Insurance claims are subject to policy terms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Rates are subject to revision without notice
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}