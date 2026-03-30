import ExperiencePageLayout from "@/components/experience-page-layout";
import { experience } from "@/data/experience";

const job = experience.find((e) => e.slug === "smashing-ideas")!;

export default function Page() {
  return <ExperiencePageLayout {...job} />;
}
