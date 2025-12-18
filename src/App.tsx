import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedPage } from "@/components/AnimatedPage";
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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/doctors" element={<AnimatedPage><Doctors /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/book-appointment" element={<AnimatedPage><BookAppointment /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        <Route path="/services/infertility" element={<AnimatedPage><InfertilityServices /></AnimatedPage>} />
        <Route path="/services/fetal-medicine" element={<AnimatedPage><FetalMedicineServices /></AnimatedPage>} />
        <Route path="/services/gynecology-scans" element={<AnimatedPage><GynecologyScans /></AnimatedPage>} />
        <Route path="/services/genetic-counseling" element={<AnimatedPage><GeneticCounseling /></AnimatedPage>} />
        <Route path="/services/opd" element={<AnimatedPage><OPDServices /></AnimatedPage>} />
        <Route path="/services/:serviceId" element={<AnimatedPage><ServiceDetail /></AnimatedPage>} />
        <Route path="/rates" element={<AnimatedPage><Rates /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;