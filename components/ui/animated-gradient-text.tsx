"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedGradientTextProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedGradientText({
    children,
    className,
}: AnimatedGradientTextProps) {
    return (
        <motion.span
            className={cn(
                "inline-flex animate-gradient bg-gradient-to-r from-[#16a34a] via-[#059669] to-[#16a34a] bg-[length:300%_100%] bg-clip-text text-transparent",
                className
            )}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
            {children}
        </motion.span>
    );
}
