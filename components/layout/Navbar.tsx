"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <FloatingNavbar>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white"
                >
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        JV
                    </span>
                    <span className="hidden sm:inline">Fitness</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {siteConfig.navLinks.slice(0, 5).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    )}

                    {/* CTA Button - Desktop */}
                    <ShimmerButton
                        className="hidden md:flex"
                        background="linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Book Consultation
                    </ShimmerButton>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="rounded-lg p-2 text-neutral-600 md:hidden dark:text-neutral-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </FloatingNavbar>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-neutral-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-lg md:hidden dark:border-white/10 dark:bg-neutral-900/95"
                    >
                        <nav className="flex flex-col gap-4">
                            {siteConfig.navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <ShimmerButton
                                className="mt-4 w-full"
                                background="linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Book Consultation
                            </ShimmerButton>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
