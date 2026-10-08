"use client";

import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlowCardSimple } from "@/components/ui/glow-card";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, ExternalLink } from "lucide-react";
import { useState } from "react";

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

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

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
        }, 3000);
    };

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

    return (
        <section id="contact" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Get in Touch"
                    title="Ready to Start?"
                    gradientText="Contact Us"
                    description="Take the first step towards your transformation. We're here to help."
                />

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <ScrollReveal direction="left">
                        <GlowCardSimple className="h-full p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-neutral-900">
                                Book Your Free Consultation
                            </h3>
                            <p className="mt-2 text-sm text-neutral-600">
                                Fill in your details and we'll reach out to schedule your session.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-8 flex flex-col items-center justify-center py-8 text-center"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="mt-4 text-lg font-semibold text-neutral-900">
                                        Request Sent!
                                    </h4>
                                    <p className="mt-2 text-sm text-neutral-600">
                                        We'll connect with you on WhatsApp shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className="block text-sm font-medium text-neutral-700"
                                            >
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="contact-name"
                                                name="name"
                                                required
                                                className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="contact-phone"
                                                className="block text-sm font-medium text-neutral-700"
                                            >
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="contact-phone"
                                                name="phone"
                                                required
                                                className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="contact-goal"
                                                className="block text-sm font-medium text-neutral-700"
                                            >
                                                Your Goal *
                                            </label>
                                            <select
                                                id="contact-goal"
                                                name="goal"
                                                required
                                                className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                                                htmlFor="contact-time"
                                                className="block text-sm font-medium text-neutral-700"
                                            >
                                                Preferred Time *
                                            </label>
                                            <select
                                                id="contact-time"
                                                name="time"
                                                required
                                                className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            >
                                                <option value="">Select preferred time</option>
                                                {timeSlots.map((time) => (
                                                    <option key={time} value={time}>
                                                        {time}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-message"
                                            className="block text-sm font-medium text-neutral-700"
                                        >
                                            Additional Message (Optional)
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows={3}
                                            className="mt-1 block w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            placeholder="Tell us more about your goals..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-3 font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:from-emerald-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Send Request
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </GlowCardSimple>
                    </ScrollReveal>

                    {/* Contact Info & Map */}
                    <ScrollReveal direction="right" className="flex flex-col gap-6">
                        {/* Quick Contact Buttons */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <motion.a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-4 rounded-xl border-2 border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900">WhatsApp</p>
                                    <p className="text-sm text-neutral-600">Chat now</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-4 rounded-xl border-2 border-emerald-200 bg-emerald-50/70 p-4 transition-colors hover:bg-emerald-100/70"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900">Call Us</p>
                                    <p className="text-sm text-neutral-600">{siteConfig.contact.phone}</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* Email */}
                        <motion.a
                            href={`mailto:${siteConfig.contact.email}`}
                            whileHover={{ scale: 1.01 }}
                            className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-colors hover:bg-neutral-100"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Email</p>
                                <p className="font-medium text-neutral-900">{siteConfig.contact.email}</p>
                            </div>
                        </motion.a>

                        {/* Address & Hours */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <h4 className="font-medium text-neutral-900">Visit Us</h4>
                                <p className="mt-1 text-sm text-neutral-600">
                                    {siteConfig.contact.address}
                                </p>
                            </div>

                            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <h4 className="font-medium text-neutral-900">Hours</h4>
                                <div className="mt-1 space-y-0.5 text-sm text-neutral-600">
                                    <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                                    <p>Sat: {siteConfig.hours.saturday}</p>
                                    <p>Sun: {siteConfig.hours.sunday}</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <motion.a
                            href={siteConfig.contact.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.01 }}
                            className="group relative overflow-hidden rounded-xl border border-neutral-200"
                        >
                            <div className="aspect-video bg-neutral-200">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d69.85!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdipur%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1`}
                                    className="h-full w-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                                <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900">
                                    <ExternalLink className="h-4 w-4" />
                                    Open in Google Maps
                                </span>
                            </div>
                        </motion.a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
