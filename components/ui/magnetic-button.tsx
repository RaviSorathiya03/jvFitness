"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    magneticStrength?: number;
    onClick?: () => void;
    as?: "button" | "a";
    href?: string;
    target?: string;
}

export function MagneticButton({
    children,
    className,
    magneticStrength = 0.3,
    onClick,
    as = "button",
    href,
    target,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * magneticStrength);
        y.set(distanceY * magneticStrength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = motion[as] as typeof motion.button;

    const props = {
        ref: ref as React.RefObject<HTMLButtonElement>,
        className: cn(
            "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors",
            className
        ),
        style: { x: xSpring, y: ySpring },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick,
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        ...(as === "a" && { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined }),
    };

    return <Component {...props}>{children}</Component>;
}

// Variant with glow effect
interface GlowMagneticButtonProps extends MagneticButtonProps {
    glowColor?: string;
}

export function GlowMagneticButton({
    children,
    className,
    glowColor = "rgba(139, 92, 246, 0.5)",
    ...props
}: GlowMagneticButtonProps) {
    return (
        <MagneticButton
            className={cn(
                "group bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-white",
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
                style={{ background: glowColor }}
            />
        </MagneticButton>
    );
}
