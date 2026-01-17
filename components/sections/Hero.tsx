"use client";

import { siteConfig } from "@/lib/site";
import { Spotlight } from "@/components/ui/spotlight";
import { GradientBackground } from "@/components/ui/animated-background";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagneticButton, GlowMagneticButton } from "@/components/ui/magnetic-button";
import { TextRevealHeading, TextRevealParagraph } from "@/components/ui/text-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { ConsultationForm } from "@/components/shared/ConsultationForm";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowDown } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { badge, headline, headlineGradient, subtext } = siteConfig.copy.hero;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-50 pt-24 dark:bg-neutral-950">
            {/* Background Effects */}
            <GradientBackground className="opacity-40 dark:opacity-20" />
            <Spotlight className="pointer-events-none" fill="rgba(139, 92, 246, 0.12)" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                            </span>
                            {badge}
                        </span>
                    </motion.div>

                    {/* Headline with text reveal */}
                    <div className="mt-8 max-w-5xl">
                        <motion.h1
                            className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
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
                                <AnimatedGradientText className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                    {headlineGradient}
                                </AnimatedGradientText>
                            </motion.span>
                        </motion.h1>
                    </div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-400"
                    >
                        {subtext}
                    </motion.p>

                    {/* CTA Buttons with magnetic effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
                    >
                        <GlowMagneticButton onClick={() => setIsFormOpen(true)}>
                            <Calendar className="mr-2 h-5 w-5" />
                            Book Free Consultation
                        </GlowMagneticButton>

                        <MagneticButton
                            as="a"
                            href={whatsappUrl}
                            target="_blank"
                            className="border-2 border-green-500 bg-white px-8 py-4 text-green-600 dark:bg-transparent"
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
                        className="mt-16"
                    >
                        <TrustBadges />
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
                    >
                        {[
                            { number: "500+", label: "Happy Members" },
                            { number: "5+", label: "Years Experience" },
                            { number: "7", label: "Programs" },
                            { number: "98%", label: "Satisfaction" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-3xl font-bold text-violet-600 sm:text-4xl dark:text-violet-400">
                                    {stat.number}
                                </p>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
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
