"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type MouseEvent, type ReactNode, useRef, useState } from "react";

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    glowColor?: string;
    glowSize?: number;
}

export function GlowCard({
    children,
    className,
    containerClassName,
    glowColor = "rgba(139, 92, 246, 0.4)",
    glowSize = 200,
}: GlowCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: -1000, y: -1000 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("group relative", containerClassName)}
        >
            {/* Glow effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(${glowSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 50%)`,
                }}
            />

            {/* Card content */}
            <div
                className={cn(
                    "relative h-full rounded-xl border border-neutral-200 bg-white transition-all",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

// Simpler version with CSS-only glow
export function GlowCardSimple({
    children,
    className,
    glowColor = "green",
}: {
    children: ReactNode;
    className?: string;
    glowColor?: "violet" | "blue" | "green" | "amber";
}) {
    const glowColors = {
        violet: "hover:shadow-emerald-500/25",
        blue: "hover:shadow-teal-500/25",
        green: "hover:shadow-green-500/25",
        amber: "hover:shadow-amber-500/25",
    };

    return (
        <motion.div
            whileHover={{ y: -2 }}
            className={cn(
                "relative rounded-xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl",
                glowColors[glowColor],
                className
            )}
        >
            {children}
        </motion.div>
    );
}

// Card with animated gradient border
export function GradientBorderCard({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className="group relative h-full rounded-xl p-[2px]">
            {/* Static gradient border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-30 transition-opacity group-hover:opacity-100" />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-0 blur-sm transition-opacity group-hover:opacity-50" />

            {/* Content */}
            <div
                className={cn(
                    "relative h-full rounded-[10px] bg-white",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
