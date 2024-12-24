import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const documents = [
  {
    id: "main-services",
    title: "शॉप अकट लायसन्स",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.11-KPXfpkjgEgZsrO0uE3XCNeVjgZVO9b.jpeg",
    description: "सर्व प्रकारचे दाखले आणि प्रमाणपत्रे एकाच ठिकाणी",
    requirements: ["आधार कार्ड", "पॅन कार्ड", "फोटो", "दुकानाचा फोटो"]
  },
  {
    id: "scholarship",
    title: "स्कॉलरशिप फॉर्म",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.5-XKF30uGwBOzjkh82yeFDKHaTOael1v.jpeg",
    description: "विद्यार्थ्यांसाठी स्कॉलरशिप फॉर्म आवश्यक कागदपत्रे",
    requirements: ["आधार कार्ड", "डोमीसाईल दाखला", "उत्पन्नाचा दाखला", "जातीचे प्रमाणपत्र", "रेशनकार्ड", "प्रवेश पावती"]
  },
  {
    id: "ration-card",
    title: "रेशन कार्ड सेवा",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.8-k2X41sNmY11EVUa0cSkv5sQPz9zT8K.jpeg",
    description: "रेशन कार्ड संबंधित सर्व सेवा",
    requirements: ["जन्माचा दाखला", "आधार कार्ड", "बोनाफाईड", "मूळ शिधापत्रिका", "विवाह नोंदणी प्रमाणपत्र"]
  },
  {
    id: "caste-certificate",
    title: "जातीचे दाखले",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.3-lDDW85xZg647KiIKRI7Mc0P4pts4fd.jpeg",
    description: "SC/ST/OBC प्रमाणपत्र सेवा",
    requirements: ["आधार कार्ड", "रेशन कार्ड", "शाळा सोडल्याचा दाखला", "जातीचे दाखला"]
  },
  {
    id: "tehsil-documents",
    title: "तहसीलचे दाखले",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.6-jlNlOMaWxmwcd7OND1YigJ2ExtyVvS.jpeg",
    description: "तहसीलचे सर्व प्रकारचे दाखले",
    requirements: ["उत्पन्नाचा दाखला", "डोमीसाईल दाखला", "नॅशनालिटी दाखला", "जातीचे दाखले"]
  },
  {
    id: "caste-validity",
    title: "जात वैधता",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.9-VH0CZLZrcvYyh3F3hhYynyyG1eaLGO.jpeg",
    description: "जात वैधता प्रमाणपत्र काढण्यासाठी आवश्यक कागदपत्रे",
    requirements: ["अर्जदाराचा पासपोर्ट फोटो", "बोनाफाईड", "शाळा सोडल्याचे प्रमाणपत्र", "जातीचा दाखला"]
  },
  {
    id: "army-recruitment",
    title: "आर्मी भरती",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.10-GfnFwDj6623xBlg3QfZ6UXEcQtU7XA.jpeg",
    description: "आर्मी भरतीसाठी आवश्यक असणारे कागदपत्रे",
    requirements: ["इंडियन आर्मी फॉर्म", "प्रवेश पत्र", "पासपोर्ट फोटो", "आधार कार्ड", "पोलिस वर्तणूक दाखला"]
  },
  {
    id: "digital-services",
    title: "डिजिटल सेवा",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.12-yP6F7zThr08RooBPfisn0EOWS6CVZU.jpeg",
    description: "सर्व प्रकारचे डिजिटल कागदपत्रे",
    requirements: ["डिजिटल सातबारा", "डिजिटल आठ अ", "डिजिटल ई-फेरफार", "डिजिटल मालमत्ता पत्रक"]
  },
  {
    id: "passport",
    title: "पासपोर्ट सेवा",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.13-X9FXpTAfFhgbxBj6bm7GVSOnjm8Ywh.jpeg",
    description: "पासपोर्ट करीता अर्ज करा",
    requirements: ["आधार कार्ड", "पॅन कार्ड", "जन्म दाखला", "शाळा सोडल्याचा दाखला"]
  },
  {
    id: "pan-card",
    title: "पॅन कार्ड",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.14-y8GNv359S4QlWpm7VRkueH2kYcRkOZ.jpeg",
    description: "पॅन कार्ड काढून मिळेल",
    requirements: ["आधार कार्ड", "फोटो", "जन्म दाखला"]
  },
  {
    id: "government-services",
    title: "सरकारी सेवा केंद्र",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.15-r5k4oJEtldIkkbwqGfpt98DANGNxze.jpeg",
    description: "आपले सरकार सेवा केंद्र",
    requirements: ["उत्पन्नाचे प्रमाणपत्र", "जातीचे प्रमाणपत्र", "वय अधिवास", "राष्ट्रीयत्व प्रमाणपत्र"]
  }
];

const DocumentCard = ({ document, onClick }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
    onClick={() => onClick(document)}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={document.image}
        alt={document.title}
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{document.title}</h3>
      <p className="text-sm text-gray-600">{document.description}</p>
    </div>
  </motion.div>
);

const Modal = ({ document, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-4">{document.title}</h2>
      <img
        src={document.image}
        alt={document.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">{document.description}</p>
      <h3 className="text-xl font-semibold mb-2">आवश्यक कागदपत्रे:</h3>
      <ul className="list-disc pl-5 mb-4">
        {document.requirements.map((req, index) => (
          <li key={index} className="mb-1">{req}</li>
        ))}
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={onClose}
      >
        बंद करा
      </button>
    </motion.div>
  </motion.div>
);

const DocumentGallery = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">आपले सरकार सेवा केंद्र</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onClick={setSelectedDocument}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedDocument && (
          <Modal
            document={selectedDocument}
            onClose={() => setSelectedDocument(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentGallery;

