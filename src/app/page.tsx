import Image from "next/image";

const experience = [
  {
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
    description:
      "Developed Med-Tech device software to assist surgeons with improved patient outcomes.",
    tech: ["Unity3D", "C#", ".NET", "C++", "Python", "CI/CD", "Roslyn"],
  },
  {
    company: "Smashing Ideas",
    role: "Senior Software Engineer",
    dates: "Mar. 2020 — Jan. 2023",
    description:
      "Built flight mechanic training simulations. Released four projects across three years, including a cloud-managed lesson creation tool and a local MQTT server.",
    tech: ["Unity3D", "C#", "C++"],
  },
  {
    company: "Neocade",
    role: "Game Programmer",
    dates: "Mar. 2017 — Sept. 2017",
    description:
      "Developed a point-and-click adventure game shipped on multiple platforms.",
    tech: ["Unity3D", "C#"],
  },
  {
    company: "Peeka VR",
    role: "Unity VR Developer",
    dates: "Jan. 2017 — Feb. 2017",
    description: "Prototyped VR experiences and interactive applications.",
    tech: ["Unity3D", "C#", "VR"],
  },
];

export default function Home() {
  return (
    <>
      <div className="flex-1 relative">
        <div className="mx-auto max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Riley Smith
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
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
                    width={24}
                    height={24}
                  ></Image>
                  <span className="text-sm">Seattle, WA</span>
                </div>
              </div>
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24 space-y-24">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div className="text-muted-background font-mono leading-relaxed">
                  <p className="mb-6">
                    I'm a Software Engineer driven by continuous learning and
                    evolving for the challenges at hand. From games to training
                    simulations to MedTech, I bring a focus on both user and
                    developer experience to every project I work on.
                  </p>
                </div>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
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
                        <h3 className="font-medium text-foreground">
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
                              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 font-mono"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
