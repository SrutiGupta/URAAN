import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCard } from "@/components/AnimatedCard";
import { X, ZoomIn, Camera } from "lucide-react";

// Import new pictures
import firstPicture from "@/assets/1stimage.jpg";
import secondPicture from "@/assets/2ndimage.jpg";
import thirdPicture from "@/assets/3rdimage.jpg";
import fourthPicture from "@/assets/4rthimage.jpg";

// Import doctor images
import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";
import doctor4 from "@/assets/doctor4.jpg";
import doctor5 from "@/assets/doctor5.jpg";
import doctor6 from "@/assets/doctor6.jpg";
import doctor7 from "@/assets/doctor7.jpg";
import doctor8 from "@/assets/doctor8.jpg";
import doctor9 from "@/assets/doctor9.jpg";
import doctor10 from "@/assets/doctor10.jpg";

// Import facility images
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
  { id: 1, src: firstPicture, alt: "UDAAN Clinic Gallery" },
  { id: 2, src: secondPicture, alt: "UDAAN Clinic Gallery" },
  { id: 3, src: thirdPicture, alt: "UDAAN Clinic Gallery" },
  { id: 4, src: fourthPicture, alt: "UDAAN Clinic Gallery" },
  { id: 5, src: doctor1, alt: "UDAAN Clinic Gallery" },
  { id: 6, src: doctor2, alt: "UDAAN Clinic Gallery" },
  { id: 7, src: doctor3, alt: "UDAAN Clinic Gallery" },
  { id: 8, src: doctor4, alt: "UDAAN Clinic Gallery" },
  { id: 9, src: doctor5, alt: "UDAAN Clinic Gallery" },
  { id: 10, src: doctor6, alt: "UDAAN Clinic Gallery" },
  { id: 11, src: doctor7, alt: "UDAAN Clinic Gallery" },
  { id: 12, src: doctor8, alt: "UDAAN Clinic Gallery" },
  { id: 13, src: doctor9, alt: "UDAAN Clinic Gallery" },
  { id: 14, src: doctor10, alt: "UDAAN Clinic Gallery" },
  { id: 15, src: udaan1, alt: "UDAAN Clinic Gallery" },
  { id: 16, src: udaan2, alt: "UDAAN Clinic Gallery" },
  { id: 17, src: udaan3, alt: "UDAAN Clinic Gallery" },
  { id: 18, src: udaan4, alt: "UDAAN Clinic Gallery" },
  { id: 19, src: udaan5, alt: "UDAAN Clinic Gallery" },
  { id: 20, src: udaan6, alt: "UDAAN Clinic Gallery" },
  { id: 21, src: udaan7, alt: "UDAAN Clinic Gallery" },
  { id: 22, src: udaan8, alt: "UDAAN Clinic Gallery" },
  { id: 23, src: udaan9, alt: "UDAAN Clinic Gallery" },
  { id: 24, src: udaan10, alt: "UDAAN Clinic Gallery" },
  { id: 25, src: udaan11, alt: "UDAAN Clinic Gallery" },
  { id: 26, src: udaan12, alt: "UDAAN Clinic Gallery" },
  { id: 27, src: udaan13, alt: "UDAAN Clinic Gallery" },
  { id: 28, src: udaan14, alt: "UDAAN Clinic Gallery" },
  { id: 29, src: udaan15, alt: "UDAAN Clinic Gallery" },
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
                Gallery
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Explore our clinic through images.
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

