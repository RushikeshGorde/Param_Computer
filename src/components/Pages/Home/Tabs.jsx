'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const ImagePopup = ({ image, title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-800 bg-opacity-50"
          aria-label="Close image"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[90vh] object-contain"
        />
        <p className="text-white text-center mt-2 text-lg">{title}</p>
      </div>
    </div>
  );
};

const ServicesShowcase = () => {
  const [activeTab, setActiveTab] = useState('digital-services');
  const [selectedImage, setSelectedImage] = useState(null);

  const digitalServices = [
    {
      title: "दस्तऐवज प्रक्रिया",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.46%20PM%20(2)-eK7rOihtrsuZEaTRnEMRZHHoCS0Ghl.jpeg",
      description: "सर्व प्रकारचे दाखले आणि प्रमाणपत्रे",
    },
    {
      title: "EWS प्रमाणपत्र",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.45%20PM-HxdZBZDVt1rloNaaTfOYR7sWyvloYM.jpeg",
      description: "EWS श्रेणीसाठी आवश्यक कागदपत्रे",
    },
    {
      title: "जाती प्रमाणपत्र",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.45%20PM%20-%20Copy-H0NAinxMsWRfb7mqL3zWgfkHdlax1C.jpeg",
      description: "SC/ST/OBC प्रमाणपत्र सेवा",
    },
    {
      title: "रेशन कार्ड सेवा",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2012.46.47%20PM-ibtia4BSdAXXilNIhjAQZ4eCkI5kGj.jpeg",
      description: "रेशन कार्ड संबंधित सर्व सेवा",
    },
  ];

  const digitalPrinting = [
    {
      title: "कप प्रिंटिंग",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-S8llKE4VuNNWDMG5UX8BCo8S2EYw21.jpeg",
      description: "कस्टम डिझाइन मग प्रिंटिंग",
    },
    {
      title: "टी-शर्ट प्रिंटिंग",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-BzotQTq7zZP0EL491lIeWzhaViuHEw.jpeg",
      description: "कस्टम टी-शर्ट डिझाइन आणि प्रिंटिंग",
    },
    {
      title: "कॅप प्रिंटिंग",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-GfPsAj1Eevjmgi4CwSv9bwIcKaYwUl.jpeg",
      description: "कस्टम कॅप प्रिंटिंग",
    },
    {
      title: "गिफ्ट आयटम",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-rsZTPTFsctYC1YbzRJ4nMTVKFrGb7E.jpeg",
      description: "विविध प्रकारच्या भेटवस्तू",
    },
  ];

  const events = [
    {
      title: "डेकोरेशन सेवा",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.06%20PM-wAAWMIJXe3zpAg6gh0ncdtWRHMVw5m.jpeg",
      description: "सर्व प्रकारच्या कार्यक्रमांसाठी डेकोरेशन",
    },
    {
      title: "लॉन आणि व्हरांडा",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.09%20PM-9rSdRKg8yLiMbWGDQaiGIUCkBmbjad.jpeg",
      description: "आउटडोर इव्हेंट स्पेस",
    },
    {
      type: "video",
      title: "कार्यक्रम व्हिडिओ",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202024-12-24%20at%203.00.57%20PM-FhwEyZm2nNTbyKUlKKH3Dzxahbjn4T.mp4",
      description: "आमच्या कार्यक्रमांचे हायलाइट्स",
    },
    {
      title: "व्हरांडा दृश्य",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1-CirbW7v1Q5aFoRBv58uv67Yl5ZTGzH.jpeg",
      description: "सुंदर व्हरांडा परिसर",
    },
    {
      title: "लॉन एरिया",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.2-ReJTlfAEtcIQNBCpq4TmN9SpSsjMtA.jpeg",
      description: "विशाल लॉन स्पेस",
    },
    {
      title: "प्रवेशद्वार दृश्य",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.3-hzxRtw0xVnGErSwEv59Vrhxj2GDwe1.jpeg",
      description: "आकर्षक प्रवेशद्वार",
    },
    {
      title: "हॉल एरिया",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.4-yaFvzfYtjSSXFsn723HznVKTQCZDz0.jpeg",
      description: "विशाल हॉल परिसर",
    },
  ];

  const renderCards = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div
            className="relative h-48 cursor-pointer"
            onClick={() => setSelectedImage({ url: item.image, title: item.title })}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap w-full bg-gray-100 rounded-t-lg shadow">
        <button
          onClick={() => setActiveTab('digital-services')}
          className={`flex-1 px-4 py-3 text-center text-white ${
            activeTab === 'digital-services'
              ? 'bg-blue-800'
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          डिजिटल सेवा
        </button>
        <button
          onClick={() => setActiveTab('digital-printing')}
          className={`flex-1 px-4 py-3 text-center text-white ${
            activeTab === 'digital-printing'
              ? 'bg-blue-800'
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          डिजिटल प्रिंटिंग
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`flex-1 px-4 py-3 text-center text-white ${
            activeTab === 'events'
              ? 'bg-blue-800'
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          कार्यक्रम
        </button>
      </div>

      <div className="bg-gray-100 p-6 rounded-b-lg">
        {activeTab === 'digital-services' && renderCards(digitalServices)}
        {activeTab === 'digital-printing' && renderCards(digitalPrinting)}
        {activeTab === 'events' && renderCards(events)}
      </div>

      {selectedImage && (
        <ImagePopup
          image={selectedImage.url}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ServicesShowcase;
