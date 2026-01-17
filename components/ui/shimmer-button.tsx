"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface ShimmerButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
}

export function ShimmerButton({
    children,
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    borderRadius = "100px",
    shimmerDuration = "3s",
    background = "rgba(0, 0, 0, 1)",
    className,
    ...props
}: ShimmerButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
                "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                className
            )}
            style={
                {
                    "--bg": background,
                    "--radius": borderRadius,
                } as React.CSSProperties
            }
            {...props}
        >
            <div
                className={cn(
                    "-z-30 blur-[2px]",
                    "absolute inset-0 overflow-visible [container-type:size]"
                )}
            >
                <div
                    className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]"
                    style={
                        {
                            "--shimmer-color": shimmerColor,
                            "--shimmer-size": shimmerSize,
                            "--shimmer-duration": shimmerDuration,
                            background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
                        } as React.CSSProperties
                    }
                />
            </div>
            <span className="relative z-10 whitespace-nowrap text-sm font-medium">
                {children}
            </span>
            <div
                className={cn(
                    "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
                )}
                style={
                    {
                        "--cut": shimmerSize,
                    } as React.CSSProperties
                }
            />
        </motion.button>
    );
}
