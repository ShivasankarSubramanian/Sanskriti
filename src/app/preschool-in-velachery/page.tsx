import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/preschool-in-velachery",
});

const pageConfig = {
  heroActions: [
    { text: "Book a Visit", href: "/contact" },
    { text: "View Curriculum", href: "/curriculum" },
  ],
  heroCallout: {
    eyebrow: "Warm from day one",
    text: "A preschool experience shaped around safety, curiosity, and parent trust.",
  },
  experience: {
    eyebrow: "Preschool Care",
    title: "A clear, calm way to understand the Sanskriti experience.",
    description:
      "Parents can quickly scan the feeling, learning approach, and location fit.",
    assurances: [
      {
        icon: "ShieldCheck",
        title: "Secure start",
        description:
          "Children settle into a calm space where teachers notice comfort, mood, and confidence.",
      },
      {
        icon: "BookOpenCheck",
        title: "Play-based learning",
        description:
          "Stories, movement, conversation, and hands-on work help early concepts feel natural.",
      },
      {
        icon: "Clock3",
        title: "Family-friendly rhythm",
        description:
          "A predictable day supports children while making drop-off and pick-up easier for parents.",
      },
    ],
    icons: ["HeartHandshake", "BookOpenCheck", "MapPin"],
  },
};

export default function PreschoolInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
