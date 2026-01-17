"use client";

import { pricingTiers, pricingDisclaimer } from "@/data/pricing";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Investment"
                    title="Coaching"
                    gradientText="Plans"
                    description="Choose the level of support that fits your needs. All plans include personalized coaching and ongoing support."
                />

                <div className="grid gap-8 md:grid-cols-3">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {tier.highlighted ? (
                                <MovingBorder containerClassName="h-full">
                                    <PricingCard tier={tier} highlighted />
                                </MovingBorder>
                            ) : (
                                <div className="h-full rounded-2xl border border-neutral-200 bg-white">
                                    <PricingCard tier={tier} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-12 max-w-2xl text-center text-xs text-neutral-500"
                >
                    {pricingDisclaimer}
                </motion.p>
            </div>
        </section>
    );
}

function PricingCard({
    tier,
    highlighted,
}: {
    tier: (typeof pricingTiers)[0];
    highlighted?: boolean;
}) {
    return (
        <div className="flex h-full flex-col p-6">
            {/* Header */}
            <div className="text-center">
                {highlighted && (
                    <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                        Most Popular
                    </span>
                )}
                <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                    {tier.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                    {tier.description}
                </p>
            </div>

            {/* Price */}
            <div className="mt-6 text-center">
                <span className="text-4xl font-bold text-neutral-900">
                    {tier.price}
                </span>
                <span className="text-neutral-500">
                    /{tier.duration}
                </span>
            </div>

            {/* Features */}
            <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-sm text-neutral-600">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-8 w-full rounded-lg px-4 py-3 font-medium transition-all ${highlighted
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
                        : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
                    }`}
            >
                {tier.cta}
            </button>
        </div>
    );
}
