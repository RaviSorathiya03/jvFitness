import { Navbar } from "@/components/layout/Navbar";
import { PageMotion } from "@/components/shared/PageMotion";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PageMotion />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
        </>
    );
}
