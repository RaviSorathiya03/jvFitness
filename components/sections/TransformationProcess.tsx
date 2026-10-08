"use client";

import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";

export function TransformationProcess() {
    return (
        <section id="process" className="bg-neutral-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="How It Works"
                    title="Your Transformation"
                    gradientText="Journey"
                    description="A structured, supportive approach to help you build lasting habits and achieve your wellness goals."
                />

                <div className="relative">
                    {/* Timeline Line - Desktop */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 md:block" />

                    {/* Timeline Line - Mobile */}
                    <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-teal-500 md:hidden" />

                    <div className="space-y-12 md:space-y-0">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-start gap-6 md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content - Desktop */}
                                <div
                                    className={`hidden flex-1 md:block ${index % 2 === 0 ? "text-right" : "text-left"
                                        }`}
                                >
                                    <div
                                        className={`inline-block rounded-xl border border-neutral-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl ${index % 2 === 0 ? "mr-8" : "ml-8"
                                            }`}
                                    >
                                        <div
                                            className={`mb-2 flex items-center gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"
                                                }`}
                                        >
                                            {index % 2 !== 0 && (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                                    <step.icon className="h-5 w-5" />
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold text-neutral-900">
                                                {step.title}
                                            </h3>
                                            {index % 2 === 0 && (
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                                    <step.icon className="h-5 w-5" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Step Number */}
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-lg font-bold text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                                    {step.step}
                                </div>

                                {/* Content - Mobile */}
                                <div className="flex-1 md:hidden">
                                    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
                                        <div className="mb-2 flex items-center gap-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                                <step.icon className="h-4 w-4" />
                                            </div>
                                            <h3 className="font-bold text-neutral-900">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for Desktop */}
                                <div className="hidden flex-1 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
