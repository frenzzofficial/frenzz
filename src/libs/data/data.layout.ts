import { ExtendedNavLink, FooterConfig } from "@/types/app";

export const navigationLinks: Array<ExtendedNavLink> = [
  { id: "home", label: "Home", href: "/", icon: "Home" },
  { id: "services", label: "Services", href: "/services", icon: "Package" },
  { id: "about", label: "About", href: "/about", icon: "Info" },
];

export const footerLinks: FooterConfig = {
  messages: {
    heading: "Frenzz",
    subscribe: "Subscribe to get special offers and updates",
    description: "Building the Future of Social Media One Viral Moment at a Time",
    copyright: "Copyright © 2025 frenzz All Rights Reserved.",
  },
  // list of sections
  sections: ["quickLinks", "", "Stay Updated"],

  // list of links
  quickLinks: [
    {
      id: "quickLinks-esports",
      label: "Esports",
      href: "/esports",
      icon: "Code",
    },
    {
      id: "quickLinks-social-media",
      label: "Social Media",
      href: "/social-media",
      icon: "Users",
    },
    {
      id: "quickLinks-technology",
      label: "Technology",
      href: "/technology",
      icon: "Code",
    },
  ],

  socialLinks: [
    {
      id: "socialLinks-Facebook",
      label: "Facebook",
      href: "https://www.facebook.com/FrenzzEsports",
      icon: "Facebook",
    },
    {
      id: "socialLinks-Instagram",
      label: "Instagram",
      href: "https://www.instagram.com/frenzzofficial",
      icon: "Instagram",
    },
    {
      id: "socialLinks-Linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/frenzz",
      icon: "Linkedin",
    },
  ],
  featureLinks: [
    {
      id: "features-privacy",
      label: "Privacy Policy",
      href: "/privacy",
      icon: "Lock",
    },
    {
      id: "features-terms",
      label: "Terms of Service",
      href: "/terms",
      icon: "Package",
    },
    {
      id: "features-cookie",
      label: "Cookie Policy",
      href: "/cookie",
      icon: "Cookie",
    },
  ],
};
