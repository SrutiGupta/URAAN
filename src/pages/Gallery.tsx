import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCard } from "@/components/AnimatedCard";
import { X, ZoomIn, Camera } from "lucide-react";

// Import gallery images
import udaan1 from "@/assets/udaan.jpg";
import udaan2 from "@/assets/udaan2.jpg";
import udaan3 from "@/assets/udaan3.jpg";
import udaan4 from "@/assets/udaan4.jpg";
import udaan5 from "@/assets/udaan5.jpg";
import udaan6 from "@/assets/udaan6.jpg";
import udaan7 from "@/assets/udaan7.jpg";
import udaan8 from "@/assets/udaan8.jpg";
import udaan9 from "@/assets/udaan9.jpg";
import udaan10 from "@/assets/udaan10.jpg";
import udaan11 from "@/assets/udaan11.jpg";
import udaan12 from "@/assets/udaan12.jpg";
import udaan13 from "@/assets/udaan13.jpg";
import udaan14 from "@/assets/udaan14.jpg";
import udaan15 from "@/assets/udaan15.jpg";

const galleryImages = [
  { id: 1, src: udaan1, alt: "UDAAN Clinic - Facility 1" },
  { id: 2, src: udaan2, alt: "UDAAN Clinic - Facility 2" },
  { id: 3, src: udaan3, alt: "UDAAN Clinic - Facility 3" },
  { id: 4, src: udaan4, alt: "UDAAN Clinic - Facility 4" },
  { id: 5, src: udaan5, alt: "UDAAN Clinic - Facility 5" },
  { id: 6, src: udaan6, alt: "UDAAN Clinic - Facility 6" },
  { id: 7, src: udaan7, alt: "UDAAN Clinic - Facility 7" },
  { id: 8, src: udaan8, alt: "UDAAN Clinic - Facility 8" },
  { id: 9, src: udaan9, alt: "UDAAN Clinic - Facility 9" },
  { id: 10, src: udaan10, alt: "UDAAN Clinic - Facility 10" },
  { id: 11, src: udaan11, alt: "UDAAN Clinic - Facility 11" },
  { id: 12, src: udaan12, alt: "UDAAN Clinic - Facility 12" },
  { id: 13, src: udaan13, alt: "UDAAN Clinic - Facility 13" },
  { id: 14, src: udaan14, alt: "UDAAN Clinic - Facility 14" },
  { id: 15, src: udaan15, alt: "UDAAN Clinic - Facility 15" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Camera className="w-4 h-4" />
                Our Facility
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art facility and see where your journey begins.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <AnimatedCard key={image.id} delay={index * 0.05}>
                <div
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <ZoomIn className="w-5 h-5" />
                        <span className="text-sm font-medium">View Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

