import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                                JV
                            </span>
                            <span className="text-xl font-bold text-neutral-900 dark:text-white">
                                Fitness
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                            {siteConfig.tagline}
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 transition-colors hover:text-violet-600"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 transition-colors hover:text-violet-600"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 transition-colors hover:text-violet-600"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {siteConfig.navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-600 transition-colors hover:text-violet-600 dark:text-neutral-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Contact Us
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 text-violet-600" />
                                <a
                                    href={`tel:${siteConfig.contact.phone}`}
                                    className="text-sm text-neutral-600 transition-colors hover:text-violet-600 dark:text-neutral-400"
                                >
                                    {siteConfig.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 text-violet-600" />
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="text-sm text-neutral-600 transition-colors hover:text-violet-600 dark:text-neutral-400"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {siteConfig.contact.address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Business Hours
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between text-sm">
                                <span className="text-neutral-600 dark:text-neutral-400">
                                    Mon - Fri
                                </span>
                                <span className="font-medium text-neutral-900 dark:text-white">
                                    {siteConfig.hours.weekdays}
                                </span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-neutral-600 dark:text-neutral-400">
                                    Saturday
                                </span>
                                <span className="font-medium text-neutral-900 dark:text-white">
                                    {siteConfig.hours.saturday}
                                </span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-neutral-600 dark:text-neutral-400">
                                    Sunday
                                </span>
                                <span className="font-medium text-neutral-900 dark:text-white">
                                    {siteConfig.hours.sunday}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclosure & Copyright */}
                <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                    <p className="text-center text-xs text-neutral-500 dark:text-neutral-500">
                        {siteConfig.disclosure}
                    </p>
                    <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
