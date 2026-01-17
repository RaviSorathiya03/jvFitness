"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    blur?: boolean;
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 0.6,
    once = true,
    direction = "up",
    distance = 40,
    blur = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { x: distance, y: 0 };
            case "right":
                return { x: -distance, y: 0 };
            default:
                return { x: 0, y: 0 };
        }
    };

    const initial = getInitialPosition();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...initial,
                filter: blur ? "blur(10px)" : "blur(0px)",
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        filter: "blur(0px)",
                    }
                    : {
                        opacity: 0,
                        ...initial,
                        filter: blur ? "blur(10px)" : "blur(0px)",
                    }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

// Staggered children reveal
interface ScrollRevealGroupProps {
    children: ReactNode[];
    className?: string;
    childClassName?: string;
    staggerDelay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function ScrollRevealGroup({
    children,
    className,
    childClassName,
    staggerDelay = 0.1,
    direction = "up",
}: ScrollRevealGroupProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const getItemVariants = (): Variants => {
        const distance = 30;
        const initial = {
            up: { y: distance },
            down: { y: -distance },
            left: { x: distance },
            right: { x: -distance },
        }[direction];

        return {
            hidden: {
                opacity: 0,
                ...initial,
                filter: "blur(8px)",
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                },
            },
        };
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children.map((child, index) => (
                <motion.div
                    key={index}
                    className={childClassName}
                    variants={getItemVariants()}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}

// Scale reveal for featured elements
export function ScrollRevealScale({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
                isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
            }
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}
