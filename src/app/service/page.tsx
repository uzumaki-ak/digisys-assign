"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Eye, Factory, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import testimonials to avoid SSR hydration issues
const AnimatedTestimonials = dynamic(
  () => import('./AnimatedTestimonialsDemo').then(mod => mod.AnimatedTestimonialsDemo),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-gray-900/50 rounded-xl" />
  }
);

const services = [
  {
    title: "AI‑Driven Health Monitoring",
    icon: <HeartPulse className="w-8 h-8 text-blue-400" />,
    description: "Wearable IoT modules that track vitals in real-time with clinical-grade accuracy",
    tech: ["TensorFlow", "Edge-AI", "Bluetooth LE"],
    bgPattern: "health-pattern"
  },
  {
    title: "Autonomous Surveillance Nodes",
    icon: <Eye className="w-8 h-8 text-blue-400" />,
    description: "Solar-powered cameras with onboard object recognition for 24/7 monitoring",
    tech: ["YOLOv8", "LoRaWAN", "Tamper-proof"],
    bgPattern: "surveillance-pattern"
  },
  {
    title: "Industrial Predictive Maintenance",
    icon: <Factory className="w-8 h-8 text-blue-400" />,
    description: "Sensors and analytics to forecast equipment failures before they occur",
    tech: ["Anomaly Detection", "MQTT", "Azure IoT"],
    bgPattern: "industrial-pattern"
  },
  {
    title: "Defense-Grade Encryption",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    description: "Plug-and-play hardware for secure data transit in high-risk environments",
    tech: ["AES-256", "RSA", "FIPS 140-2"],
    bgPattern: "security-pattern"
  },
  {
    title: "Cloud-Native Analytics",
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    description: "Portal for visualizing device data and extracting AI-powered insights",
    tech: ["React", "WebGL", "Apache Spark"],
    bgPattern: "cloud-pattern"
  }
];

export default function ServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500 rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-40 h-40 border border-blue-600 rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="italic">Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Cutting-edge technology solutions for mission-critical applications across industries
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 ${service.bgPattern}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black/80 z-10"></div>
                <div className="relative z-20 p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-lg bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-blue-100 mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tech.map((tech, i) => (
                        <Chip 
                          key={i} 
                          variant="outline" 
                          className="border-blue-400/30 text-blue-300"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Only render on client side */}
       {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
          Trusted By Industry Leaders
        </h2>
        {isMounted && <AnimatedTestimonials />}
      </section>

    
    </div>
  );
}