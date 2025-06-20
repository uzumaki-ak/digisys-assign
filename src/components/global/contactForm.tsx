'use client';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [gridLoaded, setGridLoaded] = useState(false);

  useEffect(() => {
    setGridLoaded(true);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          setMessage({ text: 'Message sent successfully!', type: 'success' });
          form.current?.reset();
        },
        (error) => {
          setMessage({ text: `Failed to send: ${error.text}`, type: 'error' });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Enhanced GridBackground component
  const GridBackground = () => {
    const rows = 8;
    const cols = 12;
    const gridItems = Array.from({ length: rows * cols }, (_, i) => i);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    // Content to display on hover
    const quotes = [
      "Design is intelligence made visible.",
      "Simplicity is the ultimate sophistication.",
      "Good design is obvious. Great design is transparent.",
      "Less is more.",
      "Design creates culture. Culture shapes values. Values determine the future."
    ];

    const funFacts = [
      "The first website ever created is still online!",
      "The average user forms an opinion about a website in 0.05 seconds.",
      "46% of users won't revisit a website with poor mobile optimization.",
      "75% of users judge a company's credibility based on their website design.",
      "Website load time affects conversion rates by up to 7% per second delay."
    ];

    const testimonials = [
      "This team transformed our vision into reality. Highly recommended!",
      "The attention to detail and creativity exceeded our expectations.",
      "Working with this team was the best decision we made for our brand.",
      "Our website traffic increased by 200% after the redesign.",
      "The most responsive and professional team I've ever worked with."
    ];

    // Function to determine content type based on item index
    const getContentType = (index: number) => {
      // Distribute content types somewhat evenly
      const mod = index % 4;
      if (mod === 0) return 'image';
      if (mod === 1) return 'quote';
      if (mod === 2) return 'funFact';
      return 'testimonial';
    };

    return (
      <div className="absolute inset-0 -z-10 grid grid-cols-12 gap-1 p-1">
        {gridItems.map((item) => {
          const contentType = getContentType(item);
          const isHovered = hoveredItem === item;
          
          return (
            <div key={item} className="relative">
              <motion.div
                className="bg-gradient-to-br from-slate-900 to-zinc-900 rounded-sm h-full w-full"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2
                }}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{
                  opacity: 0.8,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              />
              
              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    className="absolute p-2 bg-black bg-opacity-80 rounded-md shadow-lg text-white z-20"
                    style={{ 
                      width: contentType === 'image' ? '200px' : '250px',
                      height: contentType === 'image' ? '150px' : 'auto',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {contentType === 'image' && (
                      <div className="relative w-full h-full">
                        <Image 
                          src={`/image${(item % 5) + 1}.png`} 
                          alt="Project showcase" 
                          layout="fill" 
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                    )}
                    
                    {contentType === 'quote' && (
                      <div className="text-center">
                        <p className="italic text-sm">{quotes[item % quotes.length]}</p>
                      </div>
                    )}
                    
                    {contentType === 'funFact' && (
                      <div className="text-center">
                        <h4 className="text-purple-300 text-sm font-bold mb-1">Fun Fact</h4>
                        <p className="text-xs">{funFacts[item % funFacts.length]}</p>
                      </div>
                    )}
                    
                    {contentType === 'testimonial' && (
                      <div className="text-center">
                        <motion.h4 
                          className="text-yellow-300 text-sm font-bold mb-1"
                          animate={{ opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Here's what our client has to say
                        </motion.h4>
                        <p className="text-xs italic">{testimonials[item % testimonials.length]}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  };

  const fieldVariants = {
    inactive: { 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    active: { 
      y: -5,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {gridLoaded && <GridBackground />}
      
      <motion.div 
        className="max-w-md w-full bg-white/10 backdrop-blur-md mt-14 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="p-8">
          <motion.h2 
            className="text-3xl font-bold text-black mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            className="text-gray-900 mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Send me a message and I'll get back to you soon.
          </motion.p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6 ">
            <motion.div
              variants={fieldVariants}
              animate={activeField === 'from_name' ? 'active' : 'inactive'}
            >
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-100 mb-1">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                onFocus={() => setActiveField('from_name')}
                onBlur={() => setActiveField(null)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              variants={fieldVariants}
              animate={activeField === 'from_email' ? 'active' : 'inactive'}
            >
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-100 mb-1">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                onFocus={() => setActiveField('from_email')}
                onBlur={() => setActiveField(null)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              variants={fieldVariants}
              animate={activeField === 'message' ? 'active' : 'inactive'}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="What would you like to say?"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-6 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-zinc-600 to-slate-100 hover:from-purple-950 hover:to-pink-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all ${
                  isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </motion.div>

            {message.text && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};