import { Check } from "lucide-react";

export interface PricingTier {
    id: string;
    name: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
}

export const pricingTiers: PricingTier[] = [
    {
        id: "starter",
        name: "Starter",
        description: "Perfect for those just beginning their wellness journey",
        price: "₹2,999",
        duration: "per month",
        features: [
            "2 coaching sessions per month",
            "Basic meal planning guidance",
            "Weekly progress check-in (text)",
            "WhatsApp support (business hours)",
            "Access to exercise guides",
            "Goal setting & tracking",
        ],
        cta: "Get Started",
    },
    {
        id: "standard",
        name: "Standard",
        description: "Our most popular plan for committed individuals",
        price: "₹4,999",
        duration: "per month",
        highlighted: true,
        features: [
            "4 coaching sessions per month",
            "Personalized meal planning",
            "Weekly video check-ins",
            "Priority WhatsApp support",
            "Custom workout routines",
            "Daily habit tracking",
            "Recipe suggestions",
            "Progress photos review",
        ],
        cta: "Book Consultation",
    },
    {
        id: "premium",
        name: "Premium",
        description: "Comprehensive support for maximum accountability",
        price: "₹7,999",
        duration: "per month",
        features: [
            "8 coaching sessions per month",
            "Advanced meal planning & prep guide",
            "Bi-weekly video check-ins",
            "24/7 WhatsApp priority support",
            "Fully customized workout plans",
            "Daily accountability check-ins",
            "Grocery shopping assistance",
            "Family meal planning",
            "Stress & sleep optimization",
            "Exclusive community access",
        ],
        cta: "Book Consultation",
    },
];

export const pricingDisclaimer =
    "Prices are for coaching and wellness services only. All plans require a minimum commitment of one month. Pricing may vary based on specific requirements discussed during consultation.";
