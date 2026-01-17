/**
 * Image Configuration
 * 
 * This file contains the image paths and Pexels search prompts for website images.
 * 
 * TO ADD IMAGES:
 * 1. Search on Pexels.com using the prompts below
 * 2. Download images and save to /public/images/
 * 3. Update the paths below to match your filenames
 * 
 * RECOMMENDED IMAGE SIZES:
 * - Hero: 1920x1080 or larger (landscape)
 * - Section backgrounds: 1920x800
 * - Cards: 800x600 or 600x400
 * - Testimonial avatars: 200x200 (square)
 */

export interface SiteImage {
    src: string;
    alt: string;
    pexelsPrompt: string; // Use this prompt to search on Pexels.com
}

export const images = {
    // Hero Section Images
    hero: {
        background: {
            src: "/images/hero-bg.jpg",
            alt: "Fitness training session",
            pexelsPrompt: "fitness gym workout people happy healthy lifestyle modern",
        },
        accent: {
            src: "/images/hero-accent.jpg",
            alt: "Healthy lifestyle",
            pexelsPrompt: "healthy food bowl nutrition colorful vegetables lifestyle",
        },
    },

    // Transformation Section Images
    transformation: {
        before: {
            src: "/images/transformation-before.jpg",
            alt: "Person feeling tired",
            pexelsPrompt: "person tired exhausted stress sitting thinking",
        },
        during: {
            src: "/images/transformation-during.jpg",
            alt: "Coaching session",
            pexelsPrompt: "personal trainer coaching fitness guidance support helping",
        },
        after: {
            src: "/images/transformation-after.jpg",
            alt: "Happy confident person",
            pexelsPrompt: "happy person confident smiling fitness healthy energy",
        },
    },

    // Programs Section Images
    programs: {
        weightManagement: {
            src: "/images/program-weight.jpg",
            alt: "Weight management program",
            pexelsPrompt: "measuring tape weight loss healthy food lifestyle",
        },
        nutrition: {
            src: "/images/program-nutrition.jpg",
            alt: "Nutrition coaching",
            pexelsPrompt: "healthy meal prep food colorful vegetables nutrition",
        },
        fitness: {
            src: "/images/program-fitness.jpg",
            alt: "Fitness training",
            pexelsPrompt: "fitness workout gym dumbbell exercise strength training",
        },
        energy: {
            src: "/images/program-energy.jpg",
            alt: "Energy and lifestyle",
            pexelsPrompt: "person running jogging morning energy active outdoor",
        },
        wellness: {
            src: "/images/program-wellness.jpg",
            alt: "Wellness routine",
            pexelsPrompt: "yoga meditation wellness calm peaceful mindfulness",
        },
    },

    // About/Story Section Images
    about: {
        coach: {
            src: "/images/coach.jpg",
            alt: "Our wellness coach",
            pexelsPrompt: "professional trainer coach friendly smiling portrait indian",
        },
        community: {
            src: "/images/community.jpg",
            alt: "Our community",
            pexelsPrompt: "group fitness class community workout happy people together",
        },
        studio: {
            src: "/images/studio.jpg",
            alt: "Our wellness studio",
            pexelsPrompt: "modern gym studio clean bright fitness center interior",
        },
    },

    // Testimonial Avatars (placeholders - you can use initials instead)
    testimonials: {
        avatar1: {
            src: "/images/testimonial-1.jpg",
            alt: "Client testimonial",
            pexelsPrompt: "indian woman portrait smiling happy professional",
        },
        avatar2: {
            src: "/images/testimonial-2.jpg",
            alt: "Client testimonial",
            pexelsPrompt: "indian man portrait smiling confident professional",
        },
    },

    // CTA Section Background
    cta: {
        background: {
            src: "/images/cta-bg.jpg",
            alt: "Start your journey",
            pexelsPrompt: "sunrise motivation new beginning fitness outdoor nature",
        },
    },

    // Decorative/Pattern Images
    patterns: {
        dots: {
            src: "/images/pattern-dots.svg",
            alt: "Decorative pattern",
            pexelsPrompt: "N/A - Use SVG pattern generator",
        },
    },
} as const;

/**
 * PEXELS SEARCH TIPS:
 * 
 * 1. For best results, use the prompts above on pexels.com
 * 2. Look for images with:
 *    - Good lighting
 *    - Diverse representation
 *    - High resolution (at least 1920px wide)
 *    - Modern, clean aesthetic
 *    - Warm, inviting feel
 * 
 * 3. Recommended Free Alternatives:
 *    - Unsplash.com (similar prompts will work)
 *    - Pixabay.com
 *    
 * 4. Image Optimization:
 *    - Compress images before uploading (use TinyPNG or Squoosh)
 *    - Convert to WebP format for better performance
 *    - Use Next.js Image component for automatic optimization
 */

// Helper function to get image with fallback
export function getImage(key: keyof typeof images, subKey?: string): SiteImage | null {
    const category = images[key];
    if (!category) return null;

    if (subKey && typeof category === 'object' && subKey in category) {
        return (category as Record<string, SiteImage>)[subKey];
    }

    return null;
}
