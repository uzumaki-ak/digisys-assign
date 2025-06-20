'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const COMPANY_LOGOS = [
  { name: 'Google', src: '/icons/google.svg' },
  { name: 'Microsoft', src: '/icons/microsoft.svg' },
  { name: 'Apple', src: '/icons/apple.svg' },
  { name: 'Amazon', src: '/icons/amazon.svg' },
  
];

export function Companies () {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const duration = 20; // seconds for one full loop
    const contentWidth = marquee.scrollWidth / 2; // since we duplicate content

    controls.start({
      x: [-contentWidth, 0],
      transition: {
        x: {
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
        },
      },
    });
  }, [controls]);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 text-white">
          Trusted by <span className="italic text-blue-400">leading</span> brands
        </h2>

        <div 
          className="relative w-full h-24 flex items-center"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start({
            x: [-marqueeRef.current?.scrollWidth! / 2 || 0, 0],
            transition: {
              x: {
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              },
            },
          })}
        >
          <motion.div
            ref={marqueeRef}
            className="absolute flex items-center gap-16 px-4"
            animate={controls}
          >
            {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((company, index) => (
              <div 
                key={`${company.name}-${index}`} 
                className="relative h-16 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="object-contain h-full w-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}