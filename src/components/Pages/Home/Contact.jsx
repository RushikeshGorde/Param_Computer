import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  
  // Handle toast display and auto-hide
  useEffect(() => {
    let timer;
    if (toast.show) {
      timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [toast.show]);

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'नाव आवश्यक आहे';
    if (!data.mobile.trim()) {
      errors.mobile = 'मोबाईल नंबर आवश्यक आहे';
    } else if (!/^[0-9]{10}$/.test(data.mobile.trim())) {
      errors.mobile = 'वैध 10 अंकी मोबाईल नंबर टाका';
    }
    if (!data.message.trim()) errors.message = 'संदेश आवश्यक आहे';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setToast({
        show: true,
        message: 'कृपया सर्व आवश्यक माहिती भरा',
        type: 'error'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );
      setToast({
        show: true,
        message: 'तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!',
        type: 'success'
      });
      form.current.reset();
    } catch (error) {
      setToast({
        show: true,
        message: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
          style={{
            animation: 'slideIn 0.5s ease-out',
            zIndex: 1000
          }}
        >
          {toast.message}
        </div>
      )}

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-[#191970] mb-6 text-center">
          संपर्क करा
        </h2>
        
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              नाव *
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent transition-all duration-300"
              placeholder="तुमचे नाव"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              मोबाईल नंबर *
            </label>
            <input
              type="tel"
              name="mobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent transition-all duration-300"
              placeholder="तुमचा मोबाईल नंबर"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              सेवा निवडा
            </label>
            <select
              name="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent bg-white transition-all duration-300"
            >
              <option value="digital">डिजिटल सेवा</option>
              <option value="printing">प्रिंटिंग सेवा</option>
              <option value="event">इवेंट व्यवस्थापन</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              संदेश *
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent transition-all duration-300"
              placeholder="तुमचा संदेश इथे लिहा..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-6 py-3 bg-[#191970] text-white rounded-md
                transform transition-all duration-300
                ${isSubmitting ? 
                  'opacity-50 cursor-not-allowed' : 
                  'hover:bg-[#4169E1] hover:scale-105 active:scale-95'
                }
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  पाठवत आहे...
                </div>
              ) : (
                'पाठवा'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* CSS Animation for Toast */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(65, 105, 225, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ContactForm;