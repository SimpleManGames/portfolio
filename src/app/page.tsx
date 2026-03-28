import Image from "next/image";
import { experience } from "@/data/experience";
import Nav from "@/components/nav";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex">
            <header className="lg:fixed lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Riley Smith
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-2xl">
                  Software Engineer | Game Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-muted-foreground font-mono">
                  Creating applications acrossing MedTech, Simulation and
                  Gaming.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-muted-foreground">
                  <Image
                    src="/location-pin.svg"
                    alt="Pin"
                    width={18}
                    height={18}
                  ></Image>
                  <span className="text-sm">Seattle, WA</span>
                </div>
                <Nav />
              </div>
            </header>
            <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
              <Section id="about">
                <div className="text-muted-background font-mono leading-relaxed">
                  <p className="mb-6">
                    I'm a Software Engineer driven by continuous learning and
                    evolving for the challenges at hand. From games to training
                    simulations to MedTech, I bring a focus on both user and
                    developer experience to every project I work on.
                  </p>
                  <p>
                    Lets chat if you're looking for a developer remotely or in
                    the Greater Seattle Area.
                  </p>
                </div>
              </Section>

              <Section id="experience">
                <ol className="space-y-12">
                  {experience.map((job) => (
                    <li
                      key={job.company}
                      className="group flex flex-col sm:flex-row gap-2 sm:gap-8 rounded-lg p-4 -mx-4 transition-colors hover:bg-zinc-800/50"
                    >
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
                    </li>
                  ))}
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
          </div>
        </div>
      </div>
    </>
  );
}
