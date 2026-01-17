"use client";

import { siteConfig } from "@/lib/site";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <FloatingNavbar>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-bold text-neutral-900"
                >
                    <motion.span
                        className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        JV
                    </motion.span>
                    <span className="hidden sm:inline">Fitness</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {siteConfig.navLinks.slice(0, 5).map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="relative text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <motion.span whileHover={{ y: -2 }} className="inline-block">
                                    {link.label}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex items-center gap-3">
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
                    <motion.button
                        className="rounded-lg p-2 text-neutral-600 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X className="h-6 w-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Menu className="h-6 w-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </FloatingNavbar>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-neutral-200/50 bg-white/95 p-6 shadow-xl backdrop-blur-lg md:hidden"
                        >
                            <nav className="flex flex-col gap-4">
                                {siteConfig.navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-lg font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
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
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
