"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MovingBorderProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
}

export function MovingBorder({
    children,
    className,
    containerClassName,
    borderClassName,
    duration = 4000,
}: MovingBorderProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl p-[1px]",
                containerClassName
            )}
        >
            <motion.div
                className={cn(
                    "absolute inset-0",
                    borderClassName
                )}
                style={{
                    background:
                        "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                    backgroundSize: "300% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: duration / 1000,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div
                className={cn(
                    "relative z-10 rounded-[inherit] bg-white",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
