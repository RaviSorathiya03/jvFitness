"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import {
    Scale,
    TrendingUp,
    Zap,
    Heart,
    Dumbbell,
    Apple,
    Moon,
    Smile,
} from "lucide-react";

const services = [
    {
        title: "Weight Management",
        description:
            "Personalized coaching for sustainable weight management through lifestyle changes and habit building.",
        icon: Scale,
        className: "md:col-span-2",
        header: (
            <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                <Scale className="h-16 w-16 text-violet-600/50" />
            </div>
        ),
    },
    {
        title: "Weight Gain Support",
        description:
            "Structured nutrition and strength guidance for healthy weight gain.",
        icon: TrendingUp,
        className: "",
        header: (
            <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <TrendingUp className="h-12 w-12 text-blue-600/50" />
            </div>
        ),
    },
    {
        title: "Daily Energy",
        description:
            "Sleep, hydration, and movement routines to boost your daily energy levels.",
        icon: Zap,
        className: "",
        header: (
            <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <Zap className="h-12 w-12 text-amber-600/50" />
            </div>
        ),
    },
    {
        title: "Digestive Wellness",
        description:
            "Gut-friendly routines and mindful eating practices for better digestive health.",
        icon: Heart,
        className: "",
        header: (
            <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20">
                <Heart className="h-12 w-12 text-rose-600/50" />
            </div>
        ),
    },
    {
        title: "Fitness & Strength",
        description:
            "Customized workout plans for home or gym to build strength and endurance.",
        icon: Dumbbell,
        className: "md:col-span-2",
        header: (
            <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <Dumbbell className="h-16 w-16 text-green-600/50" />
            </div>
        ),
    },
];

export function ServicesBento() {
    return (
        <section id="services" className="bg-white py-24 dark:bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="What We Offer"
                    title="Wellness Services"
                    gradientText="Tailored For You"
                    description="From weight management to energy optimization, our services are designed to support your unique wellness journey."
                />

                <BentoGrid className="mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={service.className}
                        >
                            <BentoGridItem
                                title={service.title}
                                description={service.description}
                                header={service.header}
                                icon={<service.icon className="h-5 w-5 text-violet-600" />}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
