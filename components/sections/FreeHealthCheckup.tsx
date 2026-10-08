"use client";

import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import {
    HeartPulse,
    MessageCircle,
    Scale,
    TrendingUp,
    Utensils,
    Dumbbell,
    Zap,
    Heart,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Clock,
    Gift,
} from "lucide-react";

const services = [
    { icon: Scale, label: "Weight Loss", color: "from-green-500 to-emerald-600" },
    { icon: TrendingUp, label: "Weight Gain", color: "from-green-600 to-teal-600" },
    { icon: Utensils, label: "Nutrition Coaching", color: "from-emerald-500 to-green-600" },
    { icon: Dumbbell, label: "Fitness & Strength", color: "from-teal-500 to-green-500" },
    { icon: Zap, label: "Energy & Lifestyle", color: "from-green-500 to-lime-600" },
    { icon: Heart, label: "Digestive Wellness", color: "from-emerald-600 to-green-500" },
    { icon: Sparkles, label: "Skin & Self-Care", color: "from-green-500 to-emerald-500" },
];

const checkupIncludes = [
    "Complete body composition analysis",
    "BMI & body fat percentage check",
    "Personalized diet consultation",
    "Lifestyle & habit assessment",
    "Custom wellness plan recommendation",
    "No charges — 100% FREE",
];

export function FreeHealthCheckup() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.healthCheckupMessage)}`;

    return (
        <section id="health-checkup" className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/50 to-white py-24 lg:py-32">
            {/* Decorative elements */}
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="🎉 Limited Time Offer"
                    title="Book a"
                    gradientText="Free Health Checkup"
                    description="Get a complete health assessment at zero cost. Understand your body better and take the first step towards a healthier you."
                />

                <div className="mt-8 grid gap-10 lg:grid-cols-2">
                    {/* Left: Health Checkup Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main card */}
                        <div className="relative overflow-hidden rounded-3xl border-2 border-green-200 bg-white shadow-xl shadow-green-500/10">
                            {/* Header gradient bar */}
                            <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 px-8 py-6">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <HeartPulse className="h-8 w-8 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            FREE Health Checkup
                                        </h3>
                                        <p className="mt-1 text-green-100">
                                            Worth ₹999 — Yours at ₹0
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Checkup includes */}
                            <div className="p-8">
                                <h4 className="mb-5 text-lg font-semibold text-neutral-900">
                                    What's Included:
                                </h4>
                                <ul className="space-y-4">
                                    {checkupIncludes.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + index * 0.08 }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                                            <span className="text-neutral-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40"
                                >
                                    <MessageCircle className="h-6 w-6" />
                                    Book Free Health Checkup
                                    <ArrowRight className="h-5 w-5" />
                                </motion.a>

                                {/* Trust indicators */}
                                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
                                    <span className="flex items-center gap-1.5">
                                        <ShieldCheck className="h-4 w-4 text-green-500" />
                                        100% Free
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4 text-green-500" />
                                        30 min session
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Gift className="h-4 w-4 text-green-500" />
                                        No commitment
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Services Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Our Services
                            </h3>
                            <p className="mt-2 text-neutral-600">
                                We provide expert guidance across a wide range of wellness services tailored to your unique needs.
                            </p>
                        </div>

                        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.06 }}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition-all hover:border-green-300 hover:shadow-md hover:shadow-green-500/10"
                                >
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-sm transition-transform group-hover:scale-110`}>
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <span className="font-medium text-neutral-800">
                                        {service.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom WhatsApp CTA */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="mt-6 flex items-center justify-center gap-3 rounded-2xl border-2 border-green-200 bg-green-50 px-6 py-4 font-semibold text-green-700 transition-all hover:border-green-300 hover:bg-green-100"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Chat on WhatsApp to Know More
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
