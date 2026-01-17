"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number; // Negative = slower, positive = faster
    direction?: "up" | "down";
}

export function ParallaxSection({
    children,
    className,
    speed = 0.5,
    direction = "up",
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const multiplier = direction === "up" ? -1 : 1;
    const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier]);

    return (
        <motion.div ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
            {children}
        </motion.div>
    );
}

// Background parallax effect
interface ParallaxBackgroundProps {
    children: ReactNode;
    className?: string;
    backgroundClassName?: string;
    speed?: number;
}

export function ParallaxBackground({
    children,
    className,
    backgroundClassName,
    speed = 0.3,
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={cn("relative overflow-hidden", className)}>
            <motion.div
                className={cn("absolute inset-0 -z-10", backgroundClassName)}
                style={{ y }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

// Image with parallax effect
interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    speed?: number;
}

export function ParallaxImage({
    src,
    alt,
    className,
    containerClassName,
    speed = 0.2,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <div
            ref={ref}
            className={cn("overflow-hidden", containerClassName)}
        >
            <motion.img
                src={src}
                alt={alt}
                className={cn("h-full w-full object-cover", className)}
                style={{ y, scale }}
            />
        </div>
    );
}
