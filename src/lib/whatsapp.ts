export const WHATSAPP_NUMBERS = {
  primary: "917866819192",
  secondary: "916297391710",
};

export interface BookingDetails {
  service?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
}

export const generateWhatsAppMessage = (details?: BookingDetails): string => {
  const messageParts = [
    "Hello UDAAN Clinic,",
    "",
    "I want to book an appointment.",
    "",
    `Service: ${details?.service || "General Consultation"}`,
    "Preferred Date:",
    "Preferred Time:",
    "Name:",
    "Phone:",
  ];

  return encodeURIComponent(messageParts.join("\n"));
};

export const openWhatsApp = (details?: BookingDetails, useSecondary = false): void => {
  const message = generateWhatsAppMessage(details);
  const number = useSecondary ? WHATSAPP_NUMBERS.secondary : WHATSAPP_NUMBERS.primary;
  const url = `https://wa.me/${number}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export const PHONE_NUMBERS = {
  primary: "+91 7866819192",
  secondary: "+91 6297391710",
};

export const CLINIC_EMAIL = "info@udaan.com";

export const CLINIC_ADDRESS = "70 BC Rd, Khosbagan, Bardhaman, West Bengal 713104";

export const WORKING_HOURS = "Monday - Sunday: 8:00 AM - 6:00 PM";
