"use client";

import { siteConfig } from "@/lib/site";
import { ScrollReveal, ScrollRevealGroup } from "@/components/ui/scroll-reveal";
import { GlowCardSimple } from "@/components/ui/glow-card";
import { motion } from "framer-motion";
import { ArrowRight, Frown, HandHeart, Sparkles } from "lucide-react";

export function TransformationJourney() {
    const { title, before, during, after } = siteConfig.copy.transformation;

    const stages = [
        {
            ...before,
            icon: Frown,
            color: "text-neutral-500",
            bgColor: "bg-neutral-100 dark:bg-neutral-800",
            borderColor: "border-neutral-200 dark:border-neutral-700",
        },
        {
            ...during,
            icon: HandHeart,
            color: "text-violet-600",
            bgColor: "bg-violet-100 dark:bg-violet-900/30",
            borderColor: "border-violet-200 dark:border-violet-800",
        },
        {
            ...after,
            icon: Sparkles,
            color: "text-green-600",
            bgColor: "bg-green-100 dark:bg-green-900/30",
            borderColor: "border-green-200 dark:border-green-800",
        },
    ];

    return (
        <section className="bg-neutral-50 py-24 dark:bg-neutral-950 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section title */}
                <ScrollReveal className="text-center">
                    <motion.span
                        className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Journey
                    </motion.span>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-white">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                        From where you are, to where you want to be — we'll guide you every step of the way.
                    </p>
                </ScrollReveal>

                {/* Journey stages */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {stages.map((stage, index) => (
                        <ScrollReveal key={stage.label} delay={index * 0.15}>
                            <GlowCardSimple
                                className={`relative h-full border-2 ${stage.borderColor} p-8`}
                                glowColor={index === 1 ? "violet" : index === 2 ? "green" : "violet"}
                            >
                                {/* Stage indicator */}
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stage.bgColor}`}>
                                        <stage.icon className={`h-6 w-6 ${stage.color}`} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                                            Stage {index + 1}
                                        </span>
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                            {stage.label}
                                        </h3>
                                    </div>
                                </div>

                                {/* Points */}
                                <ul className="mt-6 space-y-3">
                                    {stage.points.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${stage.color.replace("text-", "bg-")}`} />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Arrow to next stage (not on last) */}
                                {index < 2 && (
                                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg dark:bg-neutral-800">
                                            <ArrowRight className="h-4 w-4 text-violet-600" />
                                        </div>
                                    </div>
                                )}
                            </GlowCardSimple>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom message */}
                <ScrollReveal delay={0.5} className="mt-16 text-center">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            500+ people
                        </span>{" "}
                        have already started their transformation with us.{" "}
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                            You could be next.
                        </span>
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
