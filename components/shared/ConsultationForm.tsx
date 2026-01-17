"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useState } from "react";

interface ConsultationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const goals = [
    "Healthy Weight Management",
    "Healthy Weight Gain",
    "Daily Nutrition Coaching",
    "Fitness & Strength",
    "Energy & Lifestyle",
    "Digestive Wellness",
    "Other",
];

const timeSlots = [
    "Morning (6AM - 10AM)",
    "Midday (10AM - 2PM)",
    "Afternoon (2PM - 6PM)",
    "Evening (6PM - 9PM)",
];

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In production, you would send this data to your backend or WhatsApp
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            goal: formData.get("goal"),
            time: formData.get("time"),
            message: formData.get("message"),
        };

        // Open WhatsApp with the message
        const whatsappMessage = `Hi! I'd like to book a free consultation.\n\nName: ${data.name}\nPhone: ${data.phone}\nGoal: ${data.goal}\nPreferred Time: ${data.time}\n${data.message ? `Message: ${data.message}` : ""}`;

        window.open(
            `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );

        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-x-4 top-[10%] z-50 mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 sm:inset-x-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                    Thank You!
                                </h3>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                                    We'll connect with you on WhatsApp shortly.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                                    Book Your Free Consultation
                                </h2>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                    Fill in your details and we'll reach out to schedule your session.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="goal"
                                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Your Goal *
                                        </label>
                                        <select
                                            id="goal"
                                            name="goal"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                                        >
                                            <option value="">Select your goal</option>
                                            {goals.map((goal) => (
                                                <option key={goal} value={goal}>
                                                    {goal}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="time"
                                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Preferred Time *
                                        </label>
                                        <select
                                            id="time"
                                            name="time"
                                            required
                                            className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                                        >
                                            <option value="">Select preferred time</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                        >
                                            Additional Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            className="mt-1 block w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
                                            placeholder="Tell us more about your goals..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 font-medium text-white transition-all hover:from-violet-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Book Free Consultation"
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
