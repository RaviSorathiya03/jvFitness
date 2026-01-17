"use client";

import { siteConfig } from "@/lib/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRevealParagraph } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";

export function StoryIntro() {
    const { title, paragraphs, cta } = siteConfig.copy.storyIntro;

    return (
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-transparent to-transparent" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                {/* Section title */}
                <ScrollReveal>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                </ScrollReveal>

                {/* Emotional paragraphs */}
                <div className="mt-12 space-y-8">
                    {paragraphs.map((paragraph, index) => (
                        <TextRevealParagraph key={index} delay={0.2 + index * 0.15}>
                            {paragraph}
                        </TextRevealParagraph>
                    ))}
                </div>

                {/* CTA line */}
                <ScrollReveal delay={0.6}>
                    <motion.p
                        className="mt-12 text-xl font-semibold text-violet-600"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        {cta}
                    </motion.p>
                </ScrollReveal>

                {/* Decorative line */}
                <motion.div
                    className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                />
            </div>
        </section>
    );
}
