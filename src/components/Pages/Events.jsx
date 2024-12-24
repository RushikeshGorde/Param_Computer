'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, X, Star, Phone } from 'lucide-react'

const venueFeatures = [
  {
    title: "मुख्य हॉल",
    description: "विशाल एसी हॉल, २०० + व्यक्तींची क्षमता",
    icon: Users,
  },
  {
    title: "लॉन एरिया",
    description: "सुंदर बागेसह मोठे लॉन",
    icon: MapPin,
  },
  {
    title: "डेकोरेशन",
    description: "थीम बेस्ड डेकोरेशन",
    icon: Star,
  }
]

const venues = [
  {
    id: 1,
    title: "मुख्य हॉल",
    description: "एसी हॉल मध्ये सर्व सोयींसह उपलब्ध",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%202.37.04%20PM-i5RAwGyba9An8PHqBgtZMlyUWA1d3g.jpeg",
    type: "image"
  },
  {
    id: 2,
    title: "लॉन एरिया",
    description: "मोठे आणि सुंदर लॉन",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.10%20PM-BdMXuHCWY6HBQHvMjJY8DEXMhG6Dxl.jpeg",
    type: "image"
  },
  {
    id: 3,
    title: "डेकोरेशन सेवा",
    description: "आकर्षक थीम बेस्ड डेकोरेशन",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%202.37.05%20PM-TyvSWyNn9HKP9BXN84SaNTihHvFrKq.jpeg",
    type: "image"
  },
  {
    id: 4,
    title: "व्हरांडा एरिया",
    description: "हवेशीर व्हरांडा",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%203.01.11%20PM-w6DYfJ77RfG1HJ40HxwXbjHAfmtThn.jpeg",
    type: "image"
  },
  {
    id: 5,
    title: "कार्यक्रम हायलाइट्स",
    description: "आमच्या यशस्वी कार्यक्रमांचे क्षण",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202024-12-24%20at%203.00.57%20PM-aNXqiKkCfjRHSmCgfbUn2quUij2xdL.mp4",
    type: "video"
  }
]

const Modal = ({ item, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.95 }}
      className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>
      {item.type === 'video' ? (
        <video
          src={item.video}
          controls
          className="w-full h-auto"
          autoPlay
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto"
        />
      )}
      <div className="p-4 bg-white">
        <h3 className="text-2xl font-bold text-[#191970]">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
    </motion.div>
  </motion.div>
)

export default function Events() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191970] to-[#4169E1]">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            परम इवेंट्स
          </h1>
          <p className="text-xl text-white/90">
            आपल्या विशेष क्षणांसाठी सर्वोत्तम व्यवस्था
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {venueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
            >
              <feature.icon className="w-12 h-12 mb-4 text-[#800020]" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {venues.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                {item.type === 'video' ? (
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">बुकिंगसाठी संपर्क करा</h2>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-6 h-6" />
            <p className="text-xl">७५०७५९९९९२</p>
          </div>
          <p className="mt-2 opacity-90">
            ठिकाण: परम कॉम्पुटर, तळेगाव दिघे ता. संगमनेर
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

