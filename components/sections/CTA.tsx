"use client";

import { siteConfig } from "@/lib/site";
import { GradientBackground } from "@/components/ui/animated-background";
import { GlowMagneticButton, MagneticButton } from "@/components/ui/magnetic-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ConsultationForm } from "@/components/shared/ConsultationForm";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

export function CTA() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { title, subtitle, button } = siteConfig.copy.cta;

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700" />
            <GradientBackground className="opacity-20" />

            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <ScrollReveal>
                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="h-4 w-4" />
                        Take the First Step
                    </motion.span>

                    {/* Title */}
                    <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                        {subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <GlowMagneticButton
                            onClick={() => setIsFormOpen(true)}
                            glowColor="rgba(255, 255, 255, 0.4)"
                            className="bg-white px-8 py-4 font-semibold text-emerald-700 hover:bg-white/95"
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            {button}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </GlowMagneticButton>

                        <MagneticButton
                            as="a"
                            href={whatsappUrl}
                            target="_blank"
                            className="border-2 border-white/50 bg-white/10 px-8 py-4 text-white backdrop-blur-sm hover:bg-white/20"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Chat on WhatsApp
                        </MagneticButton>
                    </div>

                    {/* Trust line */}
                    <motion.p
                        className="mt-12 text-sm text-white/60"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Join 500+ people who have already started their transformation
                    </motion.p>
                </ScrollReveal>
            </div>

            {/* Consultation Form Modal */}
            <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </section>
    );
}
