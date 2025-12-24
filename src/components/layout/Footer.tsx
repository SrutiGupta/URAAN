import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { PHONE_NUMBERS, CLINIC_EMAIL, CLINIC_ADDRESS, WORKING_HOURS } from "@/lib/whatsapp";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Book Appointment", href: "/book-appointment" },
];

const services = [
  { name: "Fertility Testing", href: "/services/fertility-testing" },
  { name: "IUI Treatment", href: "/services/iui" },
  { name: "IVF Treatment", href: "/services/ivf" },
  { name: "NT Scan", href: "/services/nt-scan" },
  { name: "Anomaly Scan", href: "/services/anomaly-scan" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="UDAAN Clinic Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-display font-bold text-lg text-white">UDAAN</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              1st Dedicated Fetal Medicine & Fertility Clinic in Purba Barddhaman.
              Your trusted partner on the journey to parenthood.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-400"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">{CLINIC_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${PHONE_NUMBERS.primary.replace(/\s/g, "")}`} className="text-slate-400 hover:text-primary transition-colors block">
                    {PHONE_NUMBERS.primary}
                  </a>
                  <a href={`tel:${PHONE_NUMBERS.secondary.replace(/\s/g, "")}`} className="text-slate-400 hover:text-primary transition-colors block">
                    {PHONE_NUMBERS.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${CLINIC_EMAIL}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                  {CLINIC_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-400 text-sm">{WORKING_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} UDAAN Fetal Medicine & Fertility Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
