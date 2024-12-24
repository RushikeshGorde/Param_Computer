'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-gradient-to-b from-[#191970] to-[#4169E1]">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white/10 rounded-2xl p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-[#800020] shadow-xl"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%206.10.14%20PM-2L9TGe61Nnam90Fqb1Dcp2nhak0lOL.jpeg"
                alt="Nitin Dighe"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">नितीन दिघे</h1>
              <p className="text-xl md:text-2xl mb-4">परम कॉम्प्युटर / महाराजा पॅलेस</p>
              <p className="text-lg opacity-90">
                डिजिटल सेवा, प्रिंटिंग आणि इवेंट व्यवस्थापन...! 
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#800020]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#191970]">डिजिटल सेवा</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• आधार कार्ड अपडेशन</li>
                <li>• पॅन कार्ड सेवा</li>
                <li>• रेशन कार्ड सेवा</li>
                <li>• जातीचे दाखले</li>
                <li>• EWS प्रमाणपत्र</li>
                <li>• डोमिसाईल सर्टिफिकेट</li>
                <li>• इनकम सर्टिफिकेट</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#800020]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#191970]">प्रिंटिंग सेवा</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• टी-शर्ट प्रिंटिंग</li>
                <li>• मग प्रिंटिंग</li>
                <li>• कॅप प्रिंटिंग</li>
                <li>• व्हिजिटिंग कार्ड्स</li>
                <li>• बॅनर्स आणि फ्लेक्स</li>
                <li>• फोटो प्रिंटिंग</li>
                <li>• कस्टम गिफ्ट आयटम्स</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#800020]"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#191970]">इवेंट व्यवस्थापन</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• लग्न समारंभ</li>
                <li>• वाढदिवस पार्टी</li>
                <li>• कॉर्पोरेट इवेंट्स</li>
                <li>• डेकोरेशन सेवा</li>
                <li>• लॉन आणि व्हरांडा</li>
                <li>• साउंड सिस्टम</li>
                <li>• केटरिंग सेवा</li>
              </ul>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#191970]">आमची कार्यपद्धती</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                परम कॉम्प्युटर हे अहमदनगर जिल्ह्यातील एक अग्रगण्य डिजिटल सेवा केंद्र आहे. आम्ही गेल्या अनेक वर्षांपासून ग्राहकांना विश्वासार्ह आणि दर्जेदार सेवा देत आहोत.
              </p>
              <p>
                आमच्याकडे असलेल्या अत्याधुनिक उपकरणांच्या साहाय्याने आम्ही सर्व प्रकारच्या डिजिटल सेवा, प्रिंटिंग सोल्युशन्स आणि इवेंट मॅनेजमेंट सेवा पुरवतो. प्रत्येक ग्राहकाला वैयक्तिक लक्ष देऊन त्यांच्या गरजा पूर्ण करण्यासाठी आम्ही कटिबद्ध आहोत.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#191970] text-center">संपर्क माहिती</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-[#800020]" />
                  <div>
                    <p className="font-semibold">फोन</p>
                    <p className="text-gray-700">७५०७५९९९९२</p>
                    <p className="text-gray-700">९७५०७५९९९९२</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#800020]" />
                  <div>
                    <p className="font-semibold">ईमेल</p>
                    <p className="text-gray-700">paramcomputer12345@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#800020]" />
                  <div>
                    <p className="font-semibold">पत्ता</p>
                    <p className="text-gray-700">ग्रामपंचायत कार्यालय, मु.पो.तळेगाव  दिघे, ता.संगमनेर, जि.अहमदनगर</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#800020]" />
                  <div>
                    <p className="font-semibold">वेळ</p>
                    <p className="text-gray-700">सकाळी ९:०० ते रात्री ९:००</p>
                    <p className="text-gray-700">सोमवार ते रविवार</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

