'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Printer, Camera, X } from 'lucide-react'

const products = [
  {
    category: 'cups',
    title: 'कप प्रिंटिंग',
    description: 'कस्टम फोटो आणि डिझाइनसह मग प्रिंटिंग',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.6-fuTKWa4m1YquhJZf9dCZYAsqYmSWKP.jpeg',
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.1-E5e4mfIKetKhSZTx0gWAnHRSev6ykN.mp4'
  },
  {
    category: 'tshirts',
    title: 'टी-शर्ट प्रिंटिंग',
    description: 'कस्टम डिझाइन टी-शर्ट प्रिंटिंग',
    type: 'video',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.2-YoQKtjyrNpgVcVNMix8rYjBKLTKjKk.mp4'
  },
  {
    category: 'caps',
    title: 'कॅप प्रिंटिंग',
    description: 'कस्टम लोगो आणि डिझाइनसह कॅप प्रिंटिंग',
    type: 'video',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.3-qCt8mPWdHhtq2zNKrNjxnOY38q0n5j.mp4'
  },
  {
    category: 'pillows',
    title: 'पिलो प्रिंटिंग',
    description: 'कस्टम फोटो आणि डिझाइनसह पिलो प्रिंटिंग',
    type: 'video',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.4-tm52KGayO6m1LZWfTmxWqq5fY8C5Yt.mp4'
  },
  {
    category: 'keychains',
    title: 'की-चेन प्रिंटिंग',
    description: 'पर्सनलाइज्ड की-चेन प्रिंटिंग',
    type: 'video',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.5-Paaxx85C9EPvRSJTdDtZ4Vmg2vCHvn.mp4'
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
          src={item.media}
          controls
          className="w-full h-auto"
          autoPlay
          loop
        />
      ) : (
        <img
          src={item.media}
          alt={item.title}
          className="w-full h-auto"
        />
      )}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-[#191970]">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
    </motion.div>
  </motion.div>
)

export default function DigitalPrintingGallery() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191970] to-[#4169E1] py-12 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            परम कस्टमाईज गिफ्ट गॅलरी
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Printer className="w-6 h-6" />
            <p className="text-xl">कस्टम प्रिंटिंग सेवा</p>
          </div>
        </motion.div>

        {/* Products Grid */}
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
          {products.map((item, index) => (
            <motion.div
              key={index}
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
                    src={item.media}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img
                    src={item.media}
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
          className="mt-12 text-center text-white"
        >
          <p className="text-xl mb-2">एक वेळेस अवश्य भेट द्या...!</p>
          <p className="text-lg">
            अधिक माहितीसाठी संपर्क - नितीन दिघे मो. ७५०७५९९९९२
          </p>
          <p className="text-lg mt-2">
            ठिकाण - परम कॉम्पुटर, तळेगाव दिघे ता. संगमनेर
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

