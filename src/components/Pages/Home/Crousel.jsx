import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.06%20PM%20(1)-teKFBlbwlzxsMz71UWU2AdQaVtiCuW.jpeg",
    alt: "Decorative blue entrance gate",
    caption: "परम कॉम्पुटर सर्व्हिसेस - मुख्य प्रवेशद्वार" 
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.06%20PM-sLALOi72NgvHEtPjRkJM9GBS35CW39.jpeg",
    alt: "Event decoration setup",
    caption: "इव्हेंट डेकोरेशन सेवा"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rsZTPTFsctYC1YbzRJ4nMTVKFrGb7E.jpeg",
    alt: "Param Gift Gallery services",
    caption: "कस्टम प्रिंटिंग सेवा उपलब्ध"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-GfPsAj1Eevjmgi4CwSv9bwIcKaYwUl.jpeg",
    alt: "Printing services showcase",
    caption: "आमची प्रिंटिंग उत्पादने"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.09%20PM-v0QZI6nxxjOLG6yZvYdjCqMDCox52F.jpeg",
    alt: "Exterior view",
    caption: "आमचे स्थान"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.46%20PM%20(2)-8fhL5BOASpa28Nqy9ueeTEY3G4zlOg.jpeg",
    alt: "Document requirements list",
    caption: "आवश्यक कागदपत्रांची माहिती"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.46%20PM%20(1)-7XES7K28BkYJS6pNgjfSw0yYfoITlF.jpeg",
    alt: "Scholarship form requirements",
    caption: "शिष्यवृत्ती कागदपत्रे मार्गदर्शक"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.47%20PM-ibtia4BSdAXXilNIhjAQZ4eCkI5kGj.jpeg",
    alt: "Ration card services",
    caption: "रेशन कार्ड सेवा"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.45%20PM-TjZkLQDGpWTmfRZAPgWAYYVqSEVnc7.jpeg",
    alt: "Additional document requirements",
    caption: "कागदपत्रांची आवश्यकता यादी"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.10%20PM%20(1)-ya38s7n7cXCVSUUfHKnKTdGSoPY8fo.jpeg",
    alt: "Garden area view",
    caption: "आमचा बागेचा परिसर"
  }
  // Other images...
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayTimer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full p-6 text-white bg-black bg-opacity-60 backdrop-blur-sm">
              <p className="text-lg md:text-xl font-semibold text-center">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors z-10"
        aria-label="मागील स्लाइड"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors z-10"
        aria-label="पुढील स्लाइड"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`स्लाइड ${index + 1} वर जा`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
