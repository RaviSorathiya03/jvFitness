import {
    ClipboardCheck,
    Target,
    Calendar,
    MessageCircle,
    TrendingUp,
} from "lucide-react";

export interface ProcessStep {
    id: string;
    step: number;
    title: string;
    description: string;
    icon: typeof ClipboardCheck;
}

export const processSteps: ProcessStep[] = [
    {
        id: "assessment",
        step: 1,
        title: "Free Assessment",
        description:
            "We start with a detailed consultation to understand your current lifestyle, health goals, challenges, and preferences. No commitment required.",
        icon: ClipboardCheck,
    },
    {
        id: "goal-plan",
        step: 2,
        title: "Goal Planning",
        description:
            "Based on your assessment, we create a personalized plan with realistic milestones, tailored nutrition guidance, and an action roadmap.",
        icon: Target,
    },
    {
        id: "daily-routine",
        step: 3,
        title: "Daily Routine",
        description:
            "Receive your customized daily routine covering meals, hydration, movement, and sleep. Simple, practical habits that fit your lifestyle.",
        icon: Calendar,
    },
    {
        id: "weekly-checkins",
        step: 4,
        title: "Weekly Check-ins",
        description:
            "Regular coaching sessions to review progress, address challenges, celebrate wins, and adjust your plan as needed. You're never alone.",
        icon: MessageCircle,
    },
    {
        id: "progress-tracking",
        step: 5,
        title: "Progress Tracking",
        description:
            "Monitor your journey with regular assessments, habit tracking, and milestone celebrations. See how far you've come and stay motivated.",
        icon: TrendingUp,
    },
];
