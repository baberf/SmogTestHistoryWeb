import { Feature, TechItem, Screenshot, AppLink } from "@/types";

export const APP_NAME = "Smog Test History";
export const APP_TAGLINE =
  "Instantly look up California vehicle emissions history using your iPhone camera.";
export const APP_DESCRIPTION =
  "A native iOS utility that leverages on-device OCR to read license plates and retrieve complete smog test records from California DMV databases — no typing required.";
export const DEVELOPER_NAME = "Baber Farrukh";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/smog-test-history/id1458245433";
export const GITHUB_URL = "https://github.com/baberf/SmogApp";

export const APP_LINKS: AppLink[] = [
  { label: "App Store", href: APP_STORE_URL },
  { label: "GitHub", href: GITHUB_URL },
];

export const FEATURES: Feature[] = [
  {
    title: "On-Device OCR",
    description:
      "Uses Apple's Vision framework to perform real-time license plate recognition directly on the device — no server round-trips needed.",
    icon: "camera",
  },
  {
    title: "DMV Data Integration",
    description:
      "Queries official California DMV databases to retrieve complete vehicle emissions testing history and results.",
    icon: "database",
  },
  {
    title: "Privacy-First Design",
    description:
      "No license plates or vehicle data are stored. All lookups are ephemeral, respecting user privacy by default.",
    icon: "shield",
  },
  {
    title: "Universal iOS App",
    description:
      "Runs natively on iPhone, iPad, iPod touch, Apple Silicon Macs, and Apple Vision Pro with a single codebase.",
    icon: "devices",
  },
  {
    title: "Instant Results",
    description:
      "Retrieves and displays smog test history in seconds with a clean, scannable interface for quick decision-making.",
    icon: "zap",
  },
  {
    title: "Free & Ad-Free",
    description:
      "Completely free with no advertisements, in-app purchases, or hidden costs. Built as a public utility.",
    icon: "heart",
  },
];

export const SCREENSHOTS: Screenshot[] = [
  { src: "/images/screenshot-1.png", alt: "License plate capture screen" },
  { src: "/images/screenshot-2.png", alt: "Smog test results view" },
  { src: "/images/screenshot-3.png", alt: "Vehicle history details" },
];

export const TECH_STACK: TechItem[] = [
  { name: "Swift", category: "Language" },
  { name: "UIKit", category: "UI Framework" },
  { name: "Vision / OCR", category: "Machine Learning" },
  { name: "AVFoundation", category: "Camera" },
  { name: "URLSession", category: "Networking" },
  { name: "MVC Architecture", category: "Design Pattern" },
  { name: "Auto Layout", category: "Layout" },
  { name: "Core Graphics", category: "Graphics" },
];
