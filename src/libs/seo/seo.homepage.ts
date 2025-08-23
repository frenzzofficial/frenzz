import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;

const encodedOGUrl = encodeURI(
  `${frontendUrl}/api/og?title=Frenzz Organization&subtitle=Esports, Tech & Social Media&author=@FrenzzOfficial&theme=dark`,
);

//list your search engine keywords here
const keywords =
  "Frenzz, Frenzz Esports, Frenzz Technology, Frenzz Social Media, esports organization, competitive gaming, tech solutions, social network, gaming content, gaming news, tech news, Next.js, TypeScript, React, Tailwind CSS";

const SEO: Metadata = {
  title: "Frenzz | The Hub for Esports, Technology, and Social Media",
  description:
    "Frenzz is a competitive esports organization, a technology solutions provider, and a social media platform for gaming and tech enthusiasts. Your all-in-one destination.",
  keywords: keywords,
  openGraph: {
    title: "Frenzz | The Hub for Esports, Technology, and Social Media",
    description:
      "A leading organization in competitive esports, innovative technology, and a dedicated social network for gamers and tech lovers.",
    url: frontendUrl,
    siteName: "Frenzz",
    images: [
      {
        url: encodedOGUrl,
        width: 1200,
        height: 630,
        alt: "Frenzz Organization Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frenzz | The Hub for Esports, Technology, and Social Media",
    description:
      "Bringing together competitive esports, cutting-edge technology, and a thriving social community. Join Frenzz today!",
    images: [`${frontendUrl}/og-image.jpg`],
    creator: "@FrenzzOfficial",
  },
  authors: [{ name: "Frenzz Official", url: frontendUrl }],
  creator: "Frenzz",
  publisher: "Frenzz",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      //eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default SEO;
