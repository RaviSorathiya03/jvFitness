import {
    Scale,
    TrendingUp,
    Utensils,
    Dumbbell,
    Zap,
    Heart,
    Sparkles,
} from "lucide-react";

export interface Program {
    id: string;
    title: string;
    description: string;
    icon: typeof Scale;
    forWhom: string[];
    whatYouGet: string[];
    outcomes: string[];
    featured?: boolean;
}

export const programs: Program[] = [
    {
        id: "weight-management",
        title: "Healthy Weight Management",
        description:
            "A structured program to support your weight loss goals through personalized meal planning, portion control, and lifestyle coaching.",
        icon: Scale,
        featured: true,
        forWhom: [
            "Those looking to manage their weight effectively",
            "People who have tried fad diets without lasting results",
            "Anyone seeking a sustainable, healthy approach",
        ],
        whatYouGet: [
            "Weekly one-on-one coaching sessions",
            "Personalized meal timing & portion guidance",
            "Daily routine optimization",
            "Progress tracking & accountability",
            "WhatsApp support for questions",
        ],
        outcomes: [
            "Supports healthy weight management",
            "Helps build sustainable eating habits",
            "May improve energy levels throughout the day",
        ],
    },
    {
        id: "weight-gain",
        title: "Healthy Weight Gain",
        description:
            "A structured program for those looking to gain weight in a healthy, balanced way with proper nutrition guidance and strength routines.",
        icon: TrendingUp,
        featured: true,
        forWhom: [
            "Individuals who struggle to gain weight",
            "Those recovering from illness or stress",
            "Anyone wanting to build a stronger physique",
        ],
        whatYouGet: [
            "Customized calorie-surplus meal planning",
            "Strength training routine guidance",
            "Weekly progress reviews",
            "Supplement timing suggestions",
            "Ongoing coaching support",
        ],
        outcomes: [
            "Supports healthy weight gain goals",
            "Helps build lean muscle mass",
            "May improve overall strength and stamina",
        ],
    },
    {
        id: "nutrition-coaching",
        title: "Daily Nutrition & Habit Coaching",
        description:
            "Transform your relationship with food through daily habit building, mindful eating practices, and nutrition education.",
        icon: Utensils,
        forWhom: [
            "Busy professionals with irregular eating patterns",
            "Those wanting to develop healthier food habits",
            "Anyone seeking guidance on balanced nutrition",
        ],
        whatYouGet: [
            "Daily habit tracking & accountability",
            "Meal planning assistance",
            "Mindful eating techniques",
            "Grocery shopping guidance",
            "Recipe suggestions for your lifestyle",
        ],
        outcomes: [
            "Supports development of healthy eating routines",
            "Helps improve meal consistency",
            "May enhance overall nutritional intake",
        ],
    },
    {
        id: "fitness-strength",
        title: "Fitness + Strength Routine",
        description:
            "Build strength and improve fitness with guided workout routines tailored to your goals, whether at home or gym.",
        icon: Dumbbell,
        featured: true,
        forWhom: [
            "Beginners wanting to start their fitness journey",
            "Those looking to build strength and endurance",
            "Anyone wanting structured workout guidance",
        ],
        whatYouGet: [
            "Customized workout plans (home or gym)",
            "Exercise form guidance",
            "Progressive training approach",
            "Recovery & rest day planning",
            "Weekly check-ins on progress",
        ],
        outcomes: [
            "Supports improved physical strength",
            "Helps build exercise consistency",
            "May enhance overall fitness levels",
        ],
    },
    {
        id: "energy-lifestyle",
        title: "Energy & Active Lifestyle",
        description:
            "Optimize your daily energy through sleep hygiene, hydration habits, movement routines, and stress management techniques.",
        icon: Zap,
        forWhom: [
            "Those feeling consistently tired or low-energy",
            "Busy individuals with hectic schedules",
            "Anyone wanting to feel more vibrant daily",
        ],
        whatYouGet: [
            "Sleep routine optimization",
            "Hydration tracking & reminders",
            "Movement integration into daily life",
            "Stress management techniques",
            "Energy-boosting habit building",
        ],
        outcomes: [
            "Supports improved daily energy levels",
            "Helps establish consistent sleep patterns",
            "May enhance overall sense of well-being",
        ],
    },
    {
        id: "digestive-wellness",
        title: "Digestive Wellness Habits",
        description:
            "Develop gut-friendly routines through mindful eating, fiber-rich food choices, proper hydration, and stress reduction.",
        icon: Heart,
        forWhom: [
            "Those experiencing occasional digestive discomfort",
            "People wanting to improve their gut health naturally",
            "Anyone seeking better digestive routines",
        ],
        whatYouGet: [
            "Gut-friendly food recommendations",
            "Mindful eating practices",
            "Hydration & fiber optimization",
            "Meal timing guidance",
            "Stress-gut connection education",
        ],
        outcomes: [
            "Supports healthy digestive habits",
            "Helps improve food choices for gut health",
            "May reduce occasional bloating through better habits",
        ],
    },
    {
        id: "skin-selfcare",
        title: "Skin & Self-Care Routine",
        description:
            "Establish a consistent self-care routine focusing on hydration, nutrition for skin health, and daily grooming habits.",
        icon: Sparkles,
        forWhom: [
            "Those wanting to improve their skin naturally",
            "People seeking a consistent self-care routine",
            "Anyone interested in holistic wellness",
        ],
        whatYouGet: [
            "Skin-friendly nutrition guidance",
            "Hydration & water intake tracking",
            "Daily self-care routine building",
            "Stress management for skin health",
            "Product-free natural care tips",
        ],
        outcomes: [
            "Supports development of consistent self-care habits",
            "Helps improve hydration for skin health",
            "May enhance overall confidence and well-being",
        ],
    },
];
