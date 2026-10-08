import type { Metadata } from "next";
import { siteConfig } from "./site";

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        metadataBase: new URL(siteConfig.url),
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`,
        },
        description,
        keywords: [
            "fitness club",
            "wellness coaching",
            "weight management",
            "nutrition guidance",
            "healthy lifestyle",
            "personal coaching",
            "weight loss support",
            "weight gain program",
            "India fitness",
            "wellness club India",
        ],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: siteConfig.url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
            },
        },
        icons: {
            icon: "/icon.svg",
        },
    };
}
