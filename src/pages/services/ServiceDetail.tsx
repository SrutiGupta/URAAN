import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Play, CheckCircle } from "lucide-react";

interface ServiceInfo {
  title: string;
  category: string;
  categoryHref: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  videoUrl?: string;
}

const servicesData: Record<string, ServiceInfo> = {
  // Infertility Services
  "fertility-testing": {
    title: "Fertility Testing",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Comprehensive diagnostic tests to identify potential fertility issues.",
    longDescription: "Fertility testing involves a series of comprehensive diagnostic tests designed to evaluate both partners' reproductive health. These tests help identify potential causes of infertility and guide the development of an effective treatment plan.",
    benefits: [
      "Complete evaluation of reproductive health",
      "Identification of underlying fertility issues",
      "Personalized treatment recommendations",
      "Both male and female testing available",
      "Quick and accurate results",
    ],
    process: [
      "Initial consultation and medical history review",
      "Physical examination and preliminary tests",
      "Hormone level testing and analysis",
      "Imaging studies (ultrasound, HSG)",
      "Results discussion and treatment planning",
    ],
  },
  "iui": {
    title: "IUI Treatment",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Intrauterine Insemination for increased chances of conception.",
    longDescription: "IUI (Intrauterine Insemination) is a fertility treatment where sperm is placed directly into the woman's uterus to increase the chances of fertilization. It's a less invasive and more affordable option compared to IVF.",
    benefits: [
      "Less invasive than IVF",
      "More affordable fertility treatment option",
      "Can use husband or donor sperm",
      "Higher success rates than natural conception",
      "Minimal discomfort during procedure",
    ],
    process: [
      "Ovulation monitoring and timing",
      "Sperm sample collection and processing",
      "Gentle insertion of catheter",
      "Sperm placement in uterus",
      "Post-procedure rest and monitoring",
    ],
  },
  "ivf": {
    title: "IVF Treatment",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Advanced in-vitro fertilization with high success rates.",
    longDescription: "In Vitro Fertilization (IVF) is an advanced fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in our state-of-the-art laboratory. The resulting embryos are then carefully transferred to the uterus.",
    benefits: [
      "Highest success rates among fertility treatments",
      "Suitable for various infertility causes",
      "Options for genetic testing of embryos",
      "Possibility of freezing extra embryos",
      "Can use donor eggs or sperm if needed",
    ],
    process: [
      "Ovarian stimulation with medications",
      "Egg retrieval procedure",
      "Fertilization in laboratory",
      "Embryo culture and monitoring",
      "Embryo transfer to uterus",
    ],
  },
  "additional-fertility-testing": {
    title: "Additional Fertility Testing",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Specialized tests for complex fertility cases.",
    longDescription: "Additional fertility testing includes advanced diagnostic procedures for couples who haven't found answers through standard testing. These specialized tests help identify rare or complex fertility issues.",
    benefits: [
      "Advanced diagnostic capabilities",
      "Identifies complex fertility issues",
      "Comprehensive genetic screening",
      "Detailed hormone analysis",
      "Expert interpretation of results",
    ],
    process: [
      "Review of previous test results",
      "Specialized testing protocols",
      "Advanced imaging studies",
      "Genetic screening if indicated",
      "Comprehensive results consultation",
    ],
  },
  "egg-freezing": {
    title: "Egg Freezing",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Preserve your fertility for the future.",
    longDescription: "Egg freezing (oocyte cryopreservation) allows women to preserve their eggs for future use. This is ideal for those who want to delay pregnancy due to career, medical, or personal reasons.",
    benefits: [
      "Preserves fertility potential",
      "Flexibility in family planning",
      "Protection before medical treatments",
      "Peace of mind for the future",
      "High quality egg preservation",
    ],
    process: [
      "Initial fertility assessment",
      "Ovarian stimulation treatment",
      "Egg retrieval procedure",
      "Vitrification (rapid freezing)",
      "Secure long-term storage",
    ],
  },
  "sperm-banking": {
    title: "Sperm Banking",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Safe storage of sperm for future use.",
    longDescription: "Sperm banking involves the collection, freezing, and storage of sperm for future fertility treatments. It's useful before medical procedures that may affect fertility or for couples planning delayed parenthood.",
    benefits: [
      "Preserves fertility options",
      "Safe before medical treatments",
      "Long-term storage available",
      "Quality testing included",
      "Flexible use options",
    ],
    process: [
      "Initial consultation",
      "Semen analysis",
      "Sample collection",
      "Processing and freezing",
      "Secure storage",
    ],
  },
  "nutritional-guidance": {
    title: "Nutritional Guidance",
    category: "Infertility Services",
    categoryHref: "/services/infertility",
    description: "Optimize your fertility through nutrition.",
    longDescription: "Our nutritional guidance program provides personalized diet and lifestyle recommendations to optimize fertility and support a healthy pregnancy. Proper nutrition plays a crucial role in reproductive health.",
    benefits: [
      "Personalized meal plans",
      "Fertility-boosting nutrition",
      "Weight management support",
      "Supplement recommendations",
      "Ongoing guidance and support",
    ],
    process: [
      "Initial nutritional assessment",
      "Customized diet plan creation",
      "Supplement recommendations",
      "Regular follow-up sessions",
      "Adjustments as needed",
    ],
  },

  // Fetal Medicine Services
  "nt-scan": {
    title: "NT Scan",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "First trimester screening for chromosomal abnormalities.",
    longDescription: "The NT (Nuchal Translucency) Scan is a prenatal screening test performed during the first trimester (11-14 weeks) to assess the risk of chromosomal abnormalities like Down syndrome. It measures the fluid at the back of the baby's neck.",
    benefits: [
      "Early detection of potential issues",
      "Non-invasive screening test",
      "Combined with blood tests for accuracy",
      "Helps in informed decision making",
      "Peace of mind for expecting parents",
    ],
    process: [
      "Scheduling at 11-14 weeks of pregnancy",
      "Abdominal or transvaginal ultrasound",
      "Measurement of nuchal translucency",
      "Combined with maternal blood tests",
      "Results discussion with specialist",
    ],
  },
  "anomaly-scan": {
    title: "Anomaly Scan",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Detailed second trimester scan for structural abnormalities.",
    longDescription: "The Anomaly Scan, also known as Level II scan or TIFFA scan, is a detailed ultrasound performed between 18-22 weeks. It examines the baby's organs, limbs, and overall development to detect any structural abnormalities.",
    benefits: [
      "Comprehensive organ assessment",
      "Detection of structural abnormalities",
      "Confirms baby's growth and development",
      "Can determine baby's gender",
      "Identifies placenta location",
    ],
    process: [
      "Scheduled between 18-22 weeks",
      "Detailed ultrasound examination",
      "Assessment of all major organs",
      "Measurement of baby's size",
      "Detailed report and consultation",
    ],
  },
  "growth-scan": {
    title: "Growth Scan",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Monitoring baby's growth throughout pregnancy.",
    longDescription: "Growth scans are performed during the third trimester to monitor the baby's growth and ensure healthy development. They help identify any growth restrictions or abnormalities that may need medical attention.",
    benefits: [
      "Monitors baby's healthy development",
      "Detects growth restrictions early",
      "Assesses amniotic fluid levels",
      "Checks placental function",
      "Guides delivery planning",
    ],
    process: [
      "Regular scans in third trimester",
      "Measurement of baby's size",
      "Assessment of growth patterns",
      "Amniotic fluid measurement",
      "Discussion of findings and recommendations",
    ],
  },
  "doppler-scan": {
    title: "Doppler Scan",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Assessment of blood flow in fetal and placental vessels.",
    longDescription: "Doppler scans use ultrasound technology to assess blood flow through the umbilical cord and fetal blood vessels. This helps evaluate the baby's well-being and detect any circulation problems.",
    benefits: [
      "Non-invasive blood flow assessment",
      "Early detection of circulation issues",
      "Monitors high-risk pregnancies",
      "Helps prevent complications",
      "Guides management decisions",
    ],
    process: [
      "Ultrasound-based examination",
      "Assessment of umbilical blood flow",
      "Evaluation of fetal vessels",
      "Analysis of flow patterns",
      "Expert interpretation and advice",
    ],
  },
  "fetal-echo": {
    title: "Fetal Echo",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Detailed examination of the baby's heart.",
    longDescription: "A fetal echocardiogram is a specialized ultrasound that provides detailed images of the baby's heart. It's performed when there's a concern about heart development or risk factors for congenital heart disease.",
    benefits: [
      "Detailed heart structure assessment",
      "Early detection of heart defects",
      "Helps plan for special care if needed",
      "Non-invasive examination",
      "Expert cardiology interpretation",
    ],
    process: [
      "Specialized ultrasound examination",
      "Assessment of heart chambers",
      "Evaluation of heart valves",
      "Analysis of blood flow patterns",
      "Consultation with specialist",
    ],
  },
  "neurosonogram": {
    title: "Neurosonogram",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Detailed examination of the baby's brain and spine.",
    longDescription: "A fetal neurosonogram is a specialized prenatal ultrasound that examines the baby's brain and spine in detail. It helps detect any abnormalities or malformations in the central nervous system.",
    benefits: [
      "Detailed brain structure assessment",
      "Early detection of abnormalities",
      "Evaluation of spine development",
      "Non-invasive examination",
      "Expert interpretation",
    ],
    process: [
      "Specialized ultrasound examination",
      "Detailed brain imaging",
      "Spine assessment",
      "Analysis of findings",
      "Consultation and recommendations",
    ],
  },
  "amniocentesis": {
    title: "Amniocentesis",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Diagnostic procedure for genetic testing.",
    longDescription: "Amniocentesis is a prenatal diagnostic procedure where a small amount of amniotic fluid is extracted for testing. It can diagnose chromosomal abnormalities, genetic disorders, and neural tube defects.",
    benefits: [
      "Accurate genetic diagnosis",
      "Detects chromosomal abnormalities",
      "Identifies neural tube defects",
      "Helps with informed decisions",
      "Performed by expert specialists",
    ],
    process: [
      "Pre-procedure counseling",
      "Ultrasound guidance",
      "Amniotic fluid extraction",
      "Laboratory analysis",
      "Results consultation",
    ],
  },
  "cvs": {
    title: "CVS (Chorionic Villus Sampling)",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Early genetic diagnosis procedure.",
    longDescription: "Chorionic Villus Sampling (CVS) is an early prenatal test performed between 10-13 weeks to detect chromosomal abnormalities and genetic disorders by sampling tissue from the placenta.",
    benefits: [
      "Early diagnosis (10-13 weeks)",
      "Accurate genetic testing",
      "Quick results available",
      "Detects chromosomal issues",
      "Expert procedure and interpretation",
    ],
    process: [
      "Pre-procedure consultation",
      "Ultrasound guidance",
      "Tissue sampling",
      "Laboratory analysis",
      "Results discussion",
    ],
  },
  "cordocentesis": {
    title: "Cordocentesis",
    category: "Fetal Medicine Services",
    categoryHref: "/services/fetal-medicine",
    description: "Fetal blood sampling for diagnosis and treatment.",
    longDescription: "Cordocentesis, also known as PUBS (Percutaneous Umbilical Blood Sampling), involves taking a blood sample from the umbilical cord for diagnosis or treatment of fetal conditions.",
    benefits: [
      "Direct fetal blood analysis",
      "Accurate diagnosis",
      "Can treat certain conditions",
      "Expert procedure",
      "Comprehensive testing",
    ],
    process: [
      "Pre-procedure evaluation",
      "Ultrasound guidance",
      "Blood sampling from cord",
      "Laboratory testing",
      "Results and treatment planning",
    ],
  },

  // Gynecology Scans
  "gynecology-scan": {
    title: "Gynecology Scan",
    category: "Gynecology Scans",
    categoryHref: "/services/gynecology-scans",
    description: "Comprehensive pelvic ultrasound for women's health.",
    longDescription: "A gynecology scan is a comprehensive ultrasound examination of the female reproductive organs including the uterus, ovaries, and surrounding structures. It helps diagnose various gynecological conditions.",
    benefits: [
      "Comprehensive organ assessment",
      "Non-invasive examination",
      "Detects abnormalities",
      "Guides treatment decisions",
      "Quick and comfortable",
    ],
    process: [
      "Preparation instructions",
      "Ultrasound examination",
      "Assessment of organs",
      "Image documentation",
      "Results consultation",
    ],
  },
  "female-pelvis-scan": {
    title: "Female Pelvis Scan",
    category: "Gynecology Scans",
    categoryHref: "/services/gynecology-scans",
    description: "Detailed imaging of female reproductive organs.",
    longDescription: "A female pelvis scan provides detailed imaging of the uterus, ovaries, fallopian tubes, and surrounding pelvic structures. It's essential for diagnosing conditions like fibroids, cysts, and other abnormalities.",
    benefits: [
      "Detailed pelvic imaging",
      "Detects fibroids and cysts",
      "Evaluates reproductive organs",
      "Non-invasive procedure",
      "Expert interpretation",
    ],
    process: [
      "Preparation guidelines",
      "Transabdominal or transvaginal scan",
      "Detailed imaging",
      "Findings documentation",
      "Results discussion",
    ],
  },
  "follicular-study-scan": {
    title: "Follicular Study Scan",
    category: "Gynecology Scans",
    categoryHref: "/services/gynecology-scans",
    description: "Monitor ovarian follicle development for fertility.",
    longDescription: "Follicular study involves serial ultrasound scans to monitor the growth and development of ovarian follicles. This helps determine the best time for conception or fertility treatments.",
    benefits: [
      "Tracks follicle development",
      "Optimizes conception timing",
      "Guides fertility treatment",
      "Monitors ovulation",
      "Improves success rates",
    ],
    process: [
      "Baseline scan (Day 2-3)",
      "Serial monitoring scans",
      "Follicle measurement",
      "Ovulation prediction",
      "Treatment coordination",
    ],
  },

  // Genetic Counseling
  "genetic-counseling": {
    title: "Genetic Counseling",
    category: "Genetic Counseling",
    categoryHref: "/services/genetic-counseling",
    description: "Expert guidance on genetic conditions and testing.",
    longDescription: "Genetic counseling helps individuals and families understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease. Our experts provide comprehensive guidance.",
    benefits: [
      "Understand genetic risks",
      "Informed family planning",
      "Personalized risk assessment",
      "Testing guidance",
      "Emotional support",
    ],
    process: [
      "Family history review",
      "Risk assessment",
      "Testing recommendations",
      "Results interpretation",
      "Ongoing support",
    ],
  },

  // OPD Services
  "gynecology-opd": {
    title: "Gynecology OPD",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "Comprehensive gynecological consultations.",
    longDescription: "Our Gynecology OPD provides expert consultations for all women's health concerns including menstrual disorders, infections, hormonal issues, and reproductive health problems.",
    benefits: [
      "Expert gynecologists",
      "Comprehensive care",
      "Personalized treatment",
      "Follow-up support",
      "Modern facilities",
    ],
    process: [
      "Appointment booking",
      "Medical history review",
      "Physical examination",
      "Diagnosis and treatment",
      "Follow-up planning",
    ],
  },
  "obstetrics-opd": {
    title: "Obstetrics OPD",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "Prenatal care and pregnancy monitoring.",
    longDescription: "Our Obstetrics OPD provides comprehensive prenatal care throughout your pregnancy journey. Expert obstetricians monitor your health and baby's development.",
    benefits: [
      "Expert prenatal care",
      "Regular monitoring",
      "Personalized guidance",
      "Risk assessment",
      "Safe delivery planning",
    ],
    process: [
      "Initial consultation",
      "Regular check-ups",
      "Growth monitoring",
      "Test coordination",
      "Delivery planning",
    ],
  },
  "internal-medicine-opd": {
    title: "Internal Medicine",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "General health consultations and chronic disease management.",
    longDescription: "Our Internal Medicine department provides comprehensive care for adults including diagnosis and management of chronic conditions, preventive care, and general health consultations.",
    benefits: [
      "Expert physicians",
      "Chronic disease management",
      "Preventive care",
      "Comprehensive evaluation",
      "Coordinated treatment",
    ],
    process: [
      "Health assessment",
      "Diagnostic testing",
      "Treatment planning",
      "Medication management",
      "Regular follow-ups",
    ],
  },
  "pediatrics-opd": {
    title: "Pediatrics OPD",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "Expert care for infants, children, and adolescents.",
    longDescription: "Our Pediatrics OPD provides specialized healthcare for children from birth through adolescence. Our pediatricians offer preventive care, treatment of illnesses, and developmental monitoring.",
    benefits: [
      "Child-friendly environment",
      "Expert pediatricians",
      "Vaccination services",
      "Growth monitoring",
      "Parental guidance",
    ],
    process: [
      "Child assessment",
      "Developmental check",
      "Vaccination schedule",
      "Treatment if needed",
      "Growth tracking",
    ],
  },
  "endocrinology-opd": {
    title: "Endocrinology",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "Management of hormonal and metabolic disorders.",
    longDescription: "Our Endocrinology department specializes in diagnosis and treatment of hormonal disorders including thyroid conditions, diabetes, PCOS, and other metabolic disorders.",
    benefits: [
      "Expert endocrinologists",
      "Comprehensive hormone testing",
      "PCOS management",
      "Thyroid care",
      "Metabolic disorder treatment",
    ],
    process: [
      "Detailed consultation",
      "Hormone testing",
      "Diagnosis",
      "Treatment planning",
      "Ongoing management",
    ],
  },
  "general-consultation": {
    title: "General Consultation",
    category: "Multi-Specialty OPD",
    categoryHref: "/services/opd",
    description: "Initial consultations and health check-ups.",
    longDescription: "Our general consultation service provides comprehensive health assessments and initial evaluations. Get expert guidance for your health concerns and referrals to specialists if needed.",
    benefits: [
      "Quick appointments",
      "Comprehensive assessment",
      "Expert guidance",
      "Specialist referrals",
      "Preventive advice",
    ],
    process: [
      "Health history review",
      "Physical examination",
      "Initial assessment",
      "Recommendations",
      "Referrals if needed",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Service Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

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
              <Link to={service.categoryHref} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {service.category}
              </Link>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-primary text-sm">{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Video */}
              {service.videoUrl && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Watch & Learn
                  </h2>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-muted relative group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <p className="absolute bottom-4 left-4 text-primary-foreground text-sm">
                      Educational video about {service.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  The Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border/50 space-y-6">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Book this service via WhatsApp and our team will assist you.
                  </p>
                </div>

                <Button
                  onClick={() => openWhatsApp({ service: service.title })}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book {service.title}
                </Button>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    You'll be redirected to WhatsApp to complete your booking
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

export default ServiceDetail;