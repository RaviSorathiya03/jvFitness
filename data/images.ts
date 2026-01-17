/**
 * Image Configuration for JV Fitness & Wellness Club
 * Images to be downloaded from Pexels and saved to /public/images/
 */

export const images = {
    hero: {
        background: {
            src: "/images/hero-gym-group.jpg",
            alt: "Men and women training in gym",
            pexelsUrl: "https://www.pexels.com/photo/men-and-women-training-in-the-gym-6186129/"
        },
        accent: {
            src: "/images/hero-strength.jpg",
            alt: "Strength training session",
            pexelsUrl: "https://www.pexels.com/photo/muscular-man-training-in-gym-414029/"
        },
        coach: {
            src: "/images/coach-jyoti.jpg",
            alt: "Jyoti - Your Wellness Coach",
        },
    },
    transformation: {
        before: {
            src: "/images/transformation-before.jpg",
            alt: "Person stretching before workout",
            pexelsUrl: "https://www.pexels.com/photo/person-in-red-shirt-doing-stretching-exercise-1552249/"
        },
        during: {
            src: "/images/transformation-during.jpg",
            alt: "Trainer coaching in gym",
            pexelsUrl: "https://www.pexels.com/photo/men-discussing-inside-gym-4140291/"
        },
        after: {
            src: "/images/transformation-after.jpg",
            alt: "Happy confident person outdoors",
            pexelsUrl: "https://www.pexels.com/photo/woman-standing-on-rocks-in-front-of-sea-during-sunset-2977565/"
        }
    },
    programs: {
        weightManagement: {
            src: "/images/program-weight-management.jpg",
            alt: "Dumbbells and towel for weight goals",
            pexelsUrl: "https://www.pexels.com/photo/top-view-photo-of-dumbbells-and-towel-1450373/"
        },
        nutrition: {
            src: "/images/program-nutrition.jpg",
            alt: "Healthy food plate",
            pexelsUrl: "https://www.pexels.com/photo/healthy-food-on-a-plate-1640777/"
        },
        fitness: {
            src: "/images/program-gym-studio.jpg",
            alt: "Fitness gym interior",
            pexelsUrl: "https://www.pexels.com/photo/people-inside-a-gym-317157/"
        },
        energy: {
            src: "/images/program-energy.jpg",
            alt: "Person jogging outdoors",
            pexelsUrl: "https://www.pexels.com/photo/photo-of-person-jogging-on-road-1552242/"
        },
        wellness: {
            src: "/images/program-wellness-yoga.jpg",
            alt: "Woman doing yoga",
            pexelsUrl: "https://www.pexels.com/photo/woman-doing-yoga-on-grass-field-during-golden-hour-1438763/"
        }
    }
} as const;

export type ImageConfig = typeof images;
