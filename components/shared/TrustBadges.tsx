"use client";

import { motion } from "framer-motion";
import { UserCheck, Utensils, Users } from "lucide-react";

const badges = [
    {
        icon: UserCheck,
        title: "Personal Coaching",
        description: "1-on-1 guidance",
    },
    {
        icon: Utensils,
        title: "Nutrition Guidance",
        description: "Balanced meal plans",
    },
    {
        icon: Users,
        title: "Community Support",
        description: "Accountability partners",
    },
];

export function TrustBadges() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {badges.map((badge, index) => (
                <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30">
                        <badge.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {badge.title}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {badge.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
