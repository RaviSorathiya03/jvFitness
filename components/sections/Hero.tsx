"use client";

import { siteConfig } from "@/lib/site";
import { images } from "@/data/images";
import { Spotlight } from "@/components/ui/spotlight";
import { GradientBackground } from "@/components/ui/animated-background";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagneticButton, GlowMagneticButton } from "@/components/ui/magnetic-button";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { ConsultationForm } from "@/components/shared/ConsultationForm";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowDown, Sparkles, Star, Award, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { badge, headline, headlineGradient, subtext } = siteConfig.copy.hero;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20">
            {/* Background Effects */}
            <GradientBackground className="z-[1] opacity-30" />
            <Spotlight className="pointer-events-none z-[2]" fill="rgba(22, 163, 74, 0.12)" />

            {/* Decorative blobs */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-green-300/30 to-emerald-300/30 blur-3xl" />
            <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-gradient-to-br from-teal-300/20 to-green-300/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-lime-200/20 to-green-200/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                                <Sparkles className="h-4 w-4" />
                                {badge}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="block"
                            >
                                {headline}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="block"
                            >
                                <AnimatedGradientText className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                    {headlineGradient}
                                </AnimatedGradientText>
                            </motion.span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-6 max-w-lg text-lg text-neutral-600"
                        >
                            {subtext}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <GlowMagneticButton onClick={() => setIsFormOpen(true)}>
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Free Consultation
                            </GlowMagneticButton>

                            <MagneticButton
                                as="a"
                                href={whatsappUrl}
                                target="_blank"
                                className="border-2 border-green-500 bg-white px-8 py-4 text-green-600"
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Chat on WhatsApp
                            </MagneticButton>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mt-12"
                        >
                            <TrustBadges />
                        </motion.div>
                    </div>

                    {/* Right - Coach Photo with Fancy Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="order-1 flex justify-center lg:order-2 lg:justify-end"
                    >
                        <div className="relative">
                            {/* Animated gradient background */}
                            <motion.div
                                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-60 blur-2xl"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Outer decorative frame */}
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-[2px]">
                                <div className="h-full w-full rounded-[calc(2rem-2px)] bg-white/80 backdrop-blur-sm" />
                            </div>

                            {/* Main photo container */}
                            <div className="relative">
                                {/* Photo frame with glass effect */}
                                <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white p-2 shadow-2xl">
                                    <div className="relative h-[420px] w-72 overflow-hidden rounded-2xl sm:h-[520px] sm:w-80">
                                        <Image
                                            src={images.hero.coach.src}
                                            alt={images.hero.coach.alt}
                                            fill
                                            className="object-cover object-[center_25%]"
                                            priority
                                        />

                                        {/* Gradient overlay at bottom */}
                                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />

                                        {/* Name badge on photo */}
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2 }}
                                                className="rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
                                            >
                                                <p className="text-lg font-bold text-neutral-900">Jagruti Vaniya</p>
                                                <p className="text-sm text-green-600">Certified Wellness Coach</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating achievement badges */}
                                <motion.div
                                    className="absolute -left-6 top-8 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.3 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                                        <Award className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-neutral-900">5+</p>
                                        <p className="text-xs text-neutral-500">Years Exp.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -right-6 top-24 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
                                        <Users className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-neutral-900">500+</p>
                                        <p className="text-xs text-neutral-500">Happy Clients</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -right-4 bottom-28 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.7 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                                        <Star className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-neutral-900">98%</p>
                                        <p className="text-xs text-neutral-500">Success Rate</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-green-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm sm:grid-cols-4"
                >
                    {[
                        { number: "500+", label: "Happy Members", color: "from-green-500 to-emerald-500" },
                        { number: "5+", label: "Years Experience", color: "from-emerald-500 to-teal-500" },
                        { number: "7", label: "Programs", color: "from-green-600 to-green-500" },
                        { number: "98%", label: "Satisfaction", color: "from-teal-500 to-green-500" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + index * 0.1 }}
                        >
                            <p className={`bg-gradient-to-r ${stat.color} bg-clip-text text-3xl font-bold text-transparent sm:text-4xl`}>
                                {stat.number}
                            </p>
                            <p className="mt-1 text-sm text-neutral-600">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 2 },
                    y: { delay: 2, duration: 2, repeat: Infinity },
                }}
            >
                <ArrowDown className="h-6 w-6 text-neutral-400" />
            </motion.div>

            {/* Consultation Form Modal */}
            <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </section>
    );
}
