import ExperiencePageLayout from "@/components/experience-page-layout";
import { experience } from "@/data/experience";

const job = experience.find((e) => e.slug === "neocade")!;

export default function Page() {
  return <ExperiencePageLayout {...job}></ExperiencePageLayout>;
}
