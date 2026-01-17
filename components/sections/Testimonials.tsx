"use client";

import { testimonials, testimonialDisclaimer } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function TestimonialCard({
    name,
    location,
    program,
    quote,
    rating,
}: (typeof testimonials)[0]) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="mx-3 w-80 shrink-0 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
        >
            {/* Quote icon */}
            <div className="mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                    <Quote className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
            </div>

            {/* Quote text - larger and more prominent */}
            <p className="text-base font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                "{quote}"
            </p>

            {/* Rating */}
            <div className="mt-4 flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
            </div>

            {/* Author */}
            <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-sm font-bold text-white">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{name}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        {location} • {program}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    const firstRow = testimonials.slice(0, testimonials.length / 2);
    const secondRow = testimonials.slice(testimonials.length / 2);

    return (
        <section
            id="testimonials"
            className="overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-950 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Success Stories"
                    title="Real People,"
                    gradientText="Real Transformations"
                    description="Hear from our community members about their wellness journey."
                />
            </div>

            {/* Social proof stat */}
            <ScrollReveal className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-4 rounded-full border border-neutral-200 bg-white px-6 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex -space-x-2">
                        {["P", "R", "A", "V"].map((letter, i) => (
                            <div
                                key={i}
                                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-500 to-purple-500 text-xs font-bold text-white dark:border-neutral-900"
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-900 dark:text-white">500+</span> members trust us with their transformation
                    </p>
                </div>
            </ScrollReveal>

            {/* Marquee */}
            <div className="relative mt-8">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {firstRow.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="mt-4 [--duration:60s]">
                    {secondRow.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </Marquee>

                {/* Gradient Overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-950" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-950" />
            </div>

            {/* Disclaimer */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto mt-12 max-w-2xl px-4 text-center text-xs text-neutral-500 dark:text-neutral-500"
            >
                {testimonialDisclaimer}
            </motion.p>
        </section>
    );
}
