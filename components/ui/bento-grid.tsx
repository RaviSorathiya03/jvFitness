"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
}

interface BentoGridItemProps {
    title: string;
    description: string;
    header?: ReactNode;
    icon?: ReactNode;
    className?: string;
}

export function BentoGridItem({
    title,
    description,
    header,
    icon,
    className,
}: BentoGridItemProps) {
    return (
        <div
            className={cn(
                "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition duration-200 hover:shadow-xl dark:border-white/[0.1] dark:bg-neutral-900 dark:shadow-none",
                className
            )}
        >
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                <div className="mb-2 flex items-center gap-2">
                    {icon}
                    <h3 className="font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200">
                        {title}
                    </h3>
                </div>
                <p className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </div>
    );
}
