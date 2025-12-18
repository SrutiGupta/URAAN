import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is IUI & its success rate?",
    answer: "IUI or Intrauterine Insemination is a fertility treatment where sperm is placed directly into the woman's uterus to increase the chances of fertilization. The success rate of IUI on the first try usually ranges around 10% to 20%. You can expect to undergo about 3-4 IUI cycles to get pregnant.",
  },
  {
    question: "What is IVF?",
    answer: "In Vitro Fertilization (IVF) is a process where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus.",
  },
  {
    question: "How long does the IVF process take?",
    answer: "A complete IVF cycle typically takes 4-8 weeks, including initial consultation, ovarian stimulation, egg retrieval, fertilization, and embryo transfer, although the exact duration can vary depending on individual factors.",
  },
  {
    question: "What are the success rates?",
    answer: "Success rates vary depending on various factors including age, medical history, and treatment type. Our clinic maintains a success rate of around 50% for women under 35.",
  },
  {
    question: "What is NT Scan?",
    answer: "A prenatal screening test performed during the first trimester of pregnancy typically 11 to 14 weeks. It measures the nuchal translucency (fluid at the back of the baby's neck) to assess risk for chromosomal abnormalities.",
  },
  {
    question: "What is Anomaly Scan?",
    answer: "Anomaly scan, also known as Level II scan or TIFFA scan, is a detailed ultrasound performed during the second trimester of pregnancy, typically between 18 and 22 weeks. It checks for structural abnormalities in the baby.",
  },
  {
    question: "What is Fetal Echo?",
    answer: "A Fetal echo or fetal echocardiogram is a specialized ultrasound test during pregnancy that provides a detailed view of the baby's heart. It's typically performed when there's a concern about the baby's heart or if the pregnancy has a high risk factor for congenital heart disease.",
  },
  {
    question: "What is Amniocentesis?",
    answer: "Amniocentesis is a prenatal diagnostic test where a small sample of amniotic fluid, which surrounds and protects the developing fetus, is extracted from the womb. It's typically performed between 15 and 20 weeks of pregnancy to detect genetic disorders.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Find answers to common questions about our fertility and fetal medicine services.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-foreground font-medium mb-2">Still have questions?</p>
              <p className="text-muted-foreground text-sm">
                Contact our team for personalized assistance with your fertility journey.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-soft transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
