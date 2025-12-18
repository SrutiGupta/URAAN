import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import Services from "./pages/Services";
import InfertilityServices from "./pages/services/InfertilityServices";
import FetalMedicineServices from "./pages/services/FetalMedicineServices";
import GynecologyScans from "./pages/services/GynecologyScans";
import GeneticCounseling from "./pages/services/GeneticCounseling";
import OPDServices from "./pages/services/OPDServices";
import ServiceDetail from "./pages/services/ServiceDetail";
import Rates from "./pages/Rates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/infertility" element={<InfertilityServices />} />
          <Route path="/services/fetal-medicine" element={<FetalMedicineServices />} />
          <Route path="/services/gynecology-scans" element={<GynecologyScans />} />
          <Route path="/services/genetic-counseling" element={<GeneticCounseling />} />
          <Route path="/services/opd" element={<OPDServices />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;