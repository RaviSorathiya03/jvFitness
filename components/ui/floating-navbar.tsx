"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, type ReactNode } from "react";

interface FloatingNavbarProps {
    children: ReactNode;
    className?: string;
}

export function FloatingNavbar({ children, className }: FloatingNavbarProps) {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (current) => {
        const direction = current - lastScrollY;

        if (current < 100) {
            setAtTop(true);
            setVisible(true);
        } else {
            setAtTop(false);
            if (direction < 0) {
                setVisible(true);
            } else if (direction > 0 && current > 150) {
                setVisible(false);
            }
        }
        setLastScrollY(current);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full border px-6 py-3 shadow-lg backdrop-blur-md transition-colors",
                atTop
                    ? "border-transparent bg-white/5"
                    : "border-neutral-200/50 bg-white/80 dark:border-white/10 dark:bg-neutral-900/80",
                className
            )}
        >
            {children}
        </motion.nav>
    );
}
