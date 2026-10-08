import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-green-100 bg-gradient-to-b from-white to-green-50">
            {/* Decorative gradient blob */}
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-bold text-transparent">
                                JV
                            </span>
                            <span className="text-xl font-bold text-neutral-900">
                                Fitness
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-neutral-600">
                            {siteConfig.tagline}
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white transition-transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-teal-600 text-white transition-transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white transition-transform hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {siteConfig.navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-600 transition-colors hover:text-green-600"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                            Contact Us
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100">
                                    <Phone className="h-4 w-4 text-green-600" />
                                </div>
                                <a
                                    href={`tel:${siteConfig.contact.phone}`}
                                    className="text-sm text-neutral-600 transition-colors hover:text-green-600"
                                >
                                    {siteConfig.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100">
                                    <Mail className="h-4 w-4 text-green-600" />
                                </div>
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="text-sm text-neutral-600 transition-colors hover:text-green-600"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100">
                                    <MapPin className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="text-sm text-neutral-600">
                                    {siteConfig.contact.address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                            Business Hours
                        </h3>
                        <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
                            <ul className="space-y-3">
                                <li className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Mon - Fri</span>
                                    <span className="font-medium text-green-600">
                                        {siteConfig.hours.weekdays}
                                    </span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Saturday</span>
                                    <span className="font-medium text-green-600">
                                        {siteConfig.hours.saturday}
                                    </span>
                                </li>
                                <li className="flex justify-between text-sm">
                                    <span className="text-neutral-600">Sunday</span>
                                    <span className="font-medium text-green-600">
                                        {siteConfig.hours.sunday}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Disclosure & Copyright */}
                <div className="mt-16 border-t border-green-100 pt-8">
                    <p className="text-center text-xs text-neutral-500">
                        {siteConfig.disclosure}
                    </p>
                    <p className="mt-4 flex items-center justify-center gap-1 text-sm text-neutral-600">
                        © {new Date().getFullYear()} {siteConfig.name}. Made with
                        <Heart className="h-4 w-4 text-green-500" />
                        in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
