export interface Testimonial {
    id: string;
    name: string;
    location: string;
    program: string;
    quote: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Priya S.",
        location: "Mumbai",
        program: "Healthy Weight Management",
        quote:
            "The personalized coaching helped me build sustainable habits. I feel more energetic and confident in my daily routine now.",
        rating: 5,
    },
    {
        id: "2",
        name: "Rahul M.",
        location: "Pune",
        program: "Healthy Weight Gain",
        quote:
            "After years of struggling to gain weight, the structured approach and consistent check-ins made all the difference. Feeling stronger every day!",
        rating: 5,
    },
    {
        id: "3",
        name: "Anita K.",
        location: "Delhi",
        program: "Daily Nutrition & Habit Coaching",
        quote:
            "The daily accountability and meal planning guidance transformed my relationship with food. No more skipping meals or unhealthy snacking.",
        rating: 5,
    },
    {
        id: "4",
        name: "Vikram T.",
        location: "Bangalore",
        program: "Fitness + Strength Routine",
        quote:
            "Started as a complete beginner and now I have a consistent workout routine. The step-by-step guidance was exactly what I needed.",
        rating: 5,
    },
    {
        id: "5",
        name: "Sneha P.",
        location: "Hyderabad",
        program: "Energy & Active Lifestyle",
        quote:
            "Used to feel tired all the time. The sleep and hydration routines have helped me feel more alert and productive throughout the day.",
        rating: 5,
    },
    {
        id: "6",
        name: "Arjun D.",
        location: "Chennai",
        program: "Healthy Weight Management",
        quote:
            "What I love most is the non-judgmental support. The weekly check-ins keep me accountable without feeling pressured.",
        rating: 5,
    },
    {
        id: "7",
        name: "Meera R.",
        location: "Kolkata",
        program: "Digestive Wellness Habits",
        quote:
            "Learning about gut-friendly foods and mindful eating has really helped. I feel lighter and more comfortable after meals.",
        rating: 5,
    },
    {
        id: "8",
        name: "Karthik N.",
        location: "Ahmedabad",
        program: "Fitness + Strength Routine",
        quote:
            "The home workout plans are perfect for my busy schedule. No gym needed, just dedication and great coaching!",
        rating: 5,
    },
];

export const testimonialDisclaimer =
    "Individual results may vary based on personal effort, consistency, and lifestyle choices. These testimonials represent personal experiences and are not guarantees of specific outcomes.";
