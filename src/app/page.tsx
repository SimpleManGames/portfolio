import { experience } from "@/data/experience";
import Section from "@/components/section";
import ExperiencePill from "@/components/experience-pill";

export default function Home() {
  return (
    <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
      <Section id="about">
        <div className="text-muted-background font-mono leading-relaxed">
          <p className="mb-6">
            I&apos;m a Software Engineer driven by continuous learning and evolving
            for the challenges at hand. From games to training simulations to
            MedTech, I bring a focus on both user and developer experience to
            every project I work on.
          </p>
          <p>
            Lets chat if you&apos;re looking for a developer remotely or in the
            Greater Seattle Area.
          </p>
        </div>
      </Section>

      <Section id="experience">
        <ol className="space-y-12">
          {experience.map((job) => {
            return <ExperiencePill key={job.slug} {...job} />;
          })}
        </ol>
      </Section>

      <Section id="projects">
        <div></div>
      </Section>

      <Section id="tech">
        <div></div>
      </Section>

      <Section id="contact">
        <div></div>
      </Section>
    </main>
  );
}
