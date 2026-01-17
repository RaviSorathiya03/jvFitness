"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import type { ReactNode } from "react";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    gradientText?: string;
    description?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    badge,
    title,
    gradientText,
    description,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "mb-12",
                align === "center" && "text-center",
                className
            )}
        >
            {badge && (
                <span className="mb-4 inline-flex items-center rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                {title}{" "}
                {gradientText && (
                    <AnimatedGradientText className="text-3xl font-bold sm:text-4xl">
                        {gradientText}
                    </AnimatedGradientText>
                )}
            </h2>
            {description && (
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
