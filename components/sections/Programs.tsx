"use client";

import { programs, type Program } from "@/data/programs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GradientBorderCard } from "@/components/ui/glow-card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Check, Sparkles } from "lucide-react";
import { useState } from "react";

export function Programs() {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

    // Separate featured and regular programs
    const featuredPrograms = programs.filter((p) => p.featured);
    const regularPrograms = programs.filter((p) => !p.featured);

    return (
        <section id="programs" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Our Programs"
                    title="Personalized Coaching"
                    gradientText="Programs"
                    description="Choose a program that fits your goals. Each program includes personal coaching, weekly check-ins, and ongoing support."
                />

                {/* Featured Programs - Large cards */}
                <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredPrograms.map((program, index) => (
                        <ScrollReveal key={program.id} delay={index * 0.1}>
                            <GradientBorderCard className="h-full">
                                <div
                                    onClick={() => setSelectedProgram(program)}
                                    className="group flex h-full cursor-pointer flex-col p-6 transition-all"
                                >
                                    {/* Featured badge */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                                            <program.icon className="h-7 w-7" />
                                        </div>
                                        <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                                            <Sparkles className="h-3 w-3" />
                                            Popular
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-neutral-900">
                                        {program.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm text-neutral-600">
                                        {program.description}
                                    </p>

                                    {/* Quick highlights */}
                                    <ul className="mt-4 space-y-2">
                                        {program.whatYouGet.slice(0, 3).map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                                                <Check className="h-3 w-3 text-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More */}
                                    <div className="mt-6 flex items-center text-sm font-medium text-violet-600">
                                        View Details
                                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </GradientBorderCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Regular Programs - Smaller cards in asymmetric grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {regularPrograms.map((program, index) => (
                        <ScrollReveal key={program.id} delay={0.3 + index * 0.1}>
                            <motion.div
                                onClick={() => setSelectedProgram(program)}
                                whileHover={{ y: -4 }}
                                className="group cursor-pointer rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-violet-300 hover:bg-white hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                                        <program.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold text-neutral-900">
                                        {program.title}
                                    </h3>
                                </div>
                                <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                                    {program.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-medium text-violet-600">
                                    Learn More
                                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Program Detail Modal */}
            <AnimatePresence>
                {selectedProgram && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProgram(null)}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-x-4 top-[5%] z-50 mx-auto max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl sm:inset-x-auto"
                        >
                            <div className="sticky top-0 flex items-center justify-between border-b border-neutral-200 bg-white/80 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                                        <selectedProgram.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900">
                                        {selectedProgram.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedProgram(null)}
                                    className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="p-6">
                                <p className="text-neutral-600">
                                    {selectedProgram.description}
                                </p>

                                {/* Who It's For */}
                                <div className="mt-6">
                                    <h4 className="font-semibold text-neutral-900">
                                        Who It's For
                                    </h4>
                                    <ul className="mt-3 space-y-2">
                                        {selectedProgram.forWhom.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What You Get */}
                                <div className="mt-6">
                                    <h4 className="font-semibold text-neutral-900">
                                        What You Get
                                    </h4>
                                    <ul className="mt-3 space-y-2">
                                        {selectedProgram.whatYouGet.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Expected Outcomes */}
                                <div className="mt-6">
                                    <h4 className="font-semibold text-neutral-900">
                                        Expected Outcomes
                                    </h4>
                                    <ul className="mt-3 space-y-2">
                                        {selectedProgram.outcomes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => {
                                        setSelectedProgram(null);
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="mt-8 w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:from-violet-700 hover:to-purple-700"
                                >
                                    Book a Free Consultation
                                </button>

                                <p className="mt-4 text-center text-xs text-neutral-500">
                                    Individual results may vary. No guarantees of specific outcomes.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
