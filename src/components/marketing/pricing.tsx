"use client";

import { PLANS } from "@/constants";
import { PLAN } from "@/constants/plans";
import { cn } from "@/lib";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, Zap, Star } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type Plan = "monthly" | "annually";

const Pricing = () => {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Container>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Choose the perfect plan for your business needs. All prices in
              INR.
            </p>
          </Container>

          <Container delay={0.2}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span
                className={`text-lg font-medium ${
                  billPlan === "monthly" ? "text-white" : "text-gray-400"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={handleSwitch}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                    billPlan === "annually" ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg font-medium ${
                  billPlan === "annually" ? "text-white" : "text-gray-400"
                }`}
              >
                Annually
              </span>
              <span className="ml-2 px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300">
                15% OFF
              </span>
            </div>
          </Container>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Basic Plan */}
          <Container delay={0.2}>
            <div className="relative flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all hover:border-gray-700">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white">Starter</h2>
                <div className="mt-4 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-white">
                    <NumberFlow
                      value={billPlan === "monthly" ? 999 : 8490}
                      suffix={billPlan === "monthly" ? "/mo" : "/yr"}
                      format={{
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }}
                    />
                  </h3>
                  {billPlan === "annually" && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹11,988
                    </span>
                  )}
                </div>
                <p className="mt-3 text-gray-300">
                  Perfect for individuals and small businesses
                </p>
                <Button
                  size="lg"
                  className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold"
                >
                  Get Started
                </Button>
                <div className="h-8 mt-3 w-full mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billPlan}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-sm text-center text-gray-400 block"
                    >
                      {billPlan === "monthly"
                        ? "Billed monthly"
                        : "Save ₹3,498 annually"}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-gray-800 p-6 md:p-8 pt-0">
                <h4 className="text-lg font-medium text-white mb-4">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  {[
                    "10,000 words per month",
                    "5 AI content templates",
                    "Basic analytics dashboard",
                    "Email support",
                    "1 user account",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>

          {/* Professional Plan (Popular) */}
          <Container delay={0.3}>
            <div className="relative flex flex-col h-full rounded-xl border-2 border-blue-500 bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all shadow-lg shadow-blue-500/20 hover:border-blue-400">
              <div className="absolute top-0 right-0 px-4 py-1 text-xs font-bold bg-blue-600 text-white rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white">
                    Professional
                  </h2>
                  <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-white">
                    <NumberFlow
                      value={billPlan === "monthly" ? 2499 : 20990}
                      suffix={billPlan === "monthly" ? "/mo" : "/yr"}
                      format={{
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }}
                    />
                  </h3>
                  {billPlan === "annually" && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹29,988
                    </span>
                  )}
                </div>
                <p className="mt-3 text-gray-300">
                  For growing teams and agencies
                </p>
                <Button
                  size="lg"
                  className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold"
                >
                  Start Free Trial
                </Button>
                <div className="h-8 mt-3 w-full mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billPlan}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-sm text-center text-gray-400 block"
                    >
                      {billPlan === "monthly"
                        ? "Billed monthly"
                        : "Save ₹9,898 annually"}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-gray-800 p-6 md:p-8 pt-0">
                <h4 className="text-lg font-medium text-white mb-4">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  {[
                    "50,000 words per month",
                    "20+ AI content templates",
                    "Advanced analytics",
                    "Priority email support",
                    "5 user accounts",
                    "API access",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>

          {/* Enterprise Plan */}
          <Container delay={0.4}>
            <div className="relative flex flex-col h-full rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white">Enterprise</h2>
                  <Star className="h-5 w-5 text-purple-400 fill-purple-400" />
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-white">Custom</h3>
                </div>
                <p className="mt-3 text-gray-300">
                  For large organizations with custom needs
                </p>
                <Button
                  size="lg"
                  className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 font-semibold"
                >
                  Contact Sales
                </Button>
                <div className="h-8 mt-3 w-full mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billPlan}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-sm text-center text-gray-400 block"
                    >
                      Volume discounts available
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-gray-800 p-6 md:p-8 pt-0">
                <h4 className="text-lg font-medium text-white mb-4">
                  Includes:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Unlimited words",
                    "Custom AI models",
                    "Dedicated account manager",
                    "24/7 premium support",
                    "SSO & Security audit",
                    "Custom integrations",
                    "On-premise deployment",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
