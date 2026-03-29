import Link from "next/link";
import { experience } from "@/data/experience";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
      <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
        <Section id="about">
          <div className="text-muted-background font-mono leading-relaxed">
            <p className="mb-6">
              I'm a Software Engineer driven by continuous learning and evolving
              for the challenges at hand. From games to training simulations to
              MedTech, I bring a focus on both user and developer experience to
              every project I work on.
            </p>
            <p>
              Lets chat if you're looking for a developer remotely or in the
              Greater Seattle Area.
            </p>
          </div>
        </Section>

        <Section id="experience">
          <ol className="space-y-12">
            {experience.map((job) => {
              const content = (
                <>
                  <div className="shrink-0 sm:w-36 text-sm text-muted-foreground font-mono pt-1">
                    {job.dates}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {job.role}{" "}
                      <span className="text-muted-foreground">
                        · {job.company}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground font-mono leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 font-mono hover:bg-zinc-700"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );

              return job.link ? (
                <li key={job.company}>
                  <Link
                    href={job.link}
                    className="group flex flex-col sm:flex-row gap-2 sm:gap-8 rounded-lg p-4 -mx-4 transition-colors hover:bg-zinc-800/50"
                  >
                    {content}
                  </Link>
                </li>
              ) : (
                <li
                  key={job.company}
                  className="group flex flex-col sm:flex-row gap-2 sm:gap-8 rounded-lg p-4 -mx-4 transition-colors hover:bg-zinc-800/50"
                >
                  {content}
                </li>
              );
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
    </>
  );
}
