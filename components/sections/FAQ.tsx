"use client";

import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
    const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

    return (
        <section id="faq" className="bg-neutral-50 py-24 dark:bg-neutral-950">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="FAQ"
                    title="Frequently Asked"
                    gradientText="Questions"
                    description="Common questions about our coaching programs and services."
                />

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                                <button
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                                >
                                    <span className="pr-4 font-medium text-neutral-900 dark:text-white">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform ${openId === faq.id ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="border-t border-neutral-200 px-5 py-4 dark:border-neutral-800">
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
