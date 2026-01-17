import { Hero } from "@/components/sections/Hero";
import { StoryIntro } from "@/components/sections/StoryIntro";
import { Programs } from "@/components/sections/Programs";
import { TransformationJourney } from "@/components/sections/TransformationJourney";
import { TransformationProcess } from "@/components/sections/TransformationProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

export default function HomePage() {
    return (
        <>
            {/* Emotional hook */}
            <Hero />

            {/* Empathy + pain acknowledgment */}
            <StoryIntro />

            {/* Solutions */}
            <Programs />

            {/* Visual journey */}
            <TransformationJourney />

            {/* Trust through steps */}
            <TransformationProcess />

            {/* Social proof */}
            <Testimonials />

            {/* Investment */}
            <Pricing />

            {/* Address concerns */}
            <FAQ />

            {/* Final hopeful push */}
            <CTA />

            {/* Take action */}
            <Contact />

            {/* Floating WhatsApp */}
            <WhatsAppFloatingButton />
        </>
    );
}
