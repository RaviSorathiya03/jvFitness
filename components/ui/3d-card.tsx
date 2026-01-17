"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

interface Card3DProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
}

export function Card3D({
    children,
    className,
    containerClassName,
}: Card3DProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative h-full w-full rounded-xl transition-all",
                containerClassName
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100",
                    className
                )}
                style={{ transform: "translateZ(-20px)" }}
            />
            <div
                className={cn("relative h-full w-full rounded-xl", className)}
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </motion.div>
    );
}

interface Card3DContainerProps {
    children: ReactNode;
    className?: string;
}

export function Card3DContainer({ children, className }: Card3DContainerProps) {
    return (
        <div
            className={cn(
                "group perspective-[1000px]",
                className
            )}
        >
            {children}
        </div>
    );
}
