export const siteConfig = {
    name: "JV Fitness & Wellness Club",
    tagline: "Your Partner in Healthy Lifestyle",
    description:
        "Transform your health with personalized coaching, nutrition guidance, and community support. Join our wellness club for sustainable weight management and active lifestyle.",
    url: "https://jvfitness.in",
    ogImage: "/og-image.jpg",

    // Contact Information - ACTUAL DETAILS
    contact: {
        phone: "+91 97270 54846",
        whatsapp: "919727054846", // Without spaces for WhatsApp API
        email: "rsorathiya16@gmail.com",
        address: "Ward Number 3, B near St. Xavier's School, Ground Floor, Plot No. 491, Adipur, Gujarat 370205",
        googleMapsUrl: "https://maps.google.com/?q=Ward+Number+3+B+near+St+Xaviers+School+Adipur+Gujarat+370205",
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d69.85!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdipur%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1",
    },

    // Business Hours
    hours: {
        weekdays: "6:00 AM - 9:00 PM",
        saturday: "7:00 AM - 8:00 PM",
        sunday: "7:00 AM - 12:00 PM",
    },

    // Social Links
    social: {
        instagram: "https://instagram.com/jvfitness",
        facebook: "https://facebook.com/jvfitness",
        youtube: "https://youtube.com/@jvfitness",
    },

    // WhatsApp pre-filled message
    whatsappMessage: "Hi! I'm interested in learning more about your wellness coaching programs. Can we schedule a free consultation?",

    // Health Checkup WhatsApp message
    healthCheckupMessage: "Hi! I want to book a FREE Health Checkup.",

    // Navigation Links
    navLinks: [
        { label: "Programs", href: "#programs" },
        { label: "Our Process", href: "#process" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Health Checkup", href: "#health-checkup" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ],

    // Services we provide
    services: [
        "Weight Loss",
        "Weight Gain",
        "Nutrition Coaching",
        "Fitness & Strength",
        "Energy & Lifestyle",
        "Digestive Wellness",
        "Skin & Self-Care",
    ],

    // Emotional Copy - Storytelling
    copy: {
        hero: {
            badge: "Your Transformation Starts Here",
            headline: "Every Great Transformation",
            headlineGradient: "Begins With One Step",
            subtext: "We don't just help you lose weight. We help you find energy, build confidence, and create habits that last a lifetime.",
        },
        storyIntro: {
            title: "We Understand Your Struggle",
            paragraphs: [
                "Tired of diets that don't work? Frustrated with programs that promise everything but deliver nothing?",
                "We've been there. We've seen the exhaustion of starting over, again and again. The confusion of conflicting advice. The loneliness of going through it alone.",
                "You're not broken. You just need the right guidance, the right support, and someone who truly understands.",
            ],
            cta: "You don't have to do this alone.",
        },
        transformation: {
            title: "Your Journey, Transformed",
            before: {
                label: "Where You Are",
                points: ["Low energy & fatigue", "Confused about nutrition", "Inconsistent routines", "Lack of motivation"],
            },
            during: {
                label: "Your Journey",
                points: ["Personal guidance", "Daily accountability", "Simple routines", "Constant support"],
            },
            after: {
                label: "Where You'll Be",
                points: ["Vibrant energy", "Healthy habits", "Consistent routine", "Lasting confidence"],
            },
        },
        cta: {
            title: "Every Transformation Starts With a Conversation",
            subtitle: "Book your free consultation today. No pressure, no commitment — just a conversation about your goals.",
            button: "Start Your Journey",
        },
    },

    // Compliance Disclosure
    disclosure:
        "We are independent Herbalife Nutrition associates/members. We are not employees or official spokespersons of Herbalife. Results may vary based on individual effort and lifestyle choices.",
} as const;

export type SiteConfig = typeof siteConfig;
