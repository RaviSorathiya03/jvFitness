"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    variant?: "word" | "line" | "character";
}

export function TextReveal({
    children,
    className,
    delay = 0,
    staggerDelay = 0.05,
    once = true,
    as: Component = "p",
    variant = "word",
}: TextRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const getElements = () => {
        switch (variant) {
            case "character":
                return children.split("");
            case "line":
                return children.split("\n");
            case "word":
            default:
                return children.split(" ");
        }
    };

    const elements = getElements();

    return (
        <motion.span
            ref={ref as React.RefObject<HTMLSpanElement>}
            className={cn("inline-flex flex-wrap", className)}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    className="inline-block"
                >
                    {element}
                    {variant === "word" && index < elements.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Larger heading variant with more dramatic effect
interface TextRevealHeadingProps {
    children: string;
    className?: string;
    delay?: number;
}

export function TextRevealHeading({
    children,
    className,
    delay = 0,
}: TextRevealHeadingProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const words = children.split(" ");

    return (
        <h2
            ref={ref}
            className={cn(
                "text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
                className
            )}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block overflow-hidden"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: delay + index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </h2>
    );
}

// Paragraph with line-by-line reveal
interface TextRevealParagraphProps {
    children: string;
    className?: string;
    delay?: number;
}

export function TextRevealParagraph({
    children,
    className,
    delay = 0,
}: TextRevealParagraphProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.p
            ref={ref}
            className={cn("text-lg text-neutral-600 dark:text-neutral-400", className)}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 30, filter: "blur(10px)" }
            }
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.p>
    );
}
