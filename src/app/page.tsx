import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Hiveswap Act: 1",
    role: "Game Programmer",
    description:
      "Point and Click Adventure game built with Unity3D and C#.",
  },
  {
    title: "Maintenance Synthetic Trainer",
    role: "Senior Software Engineer",
    description:
      "Flight Mechanic Training Software application built with Unity3D, C#, C++ and Python. With cloud managed lesson creation tool and a local C# MQTT server. Released four different projects across three years of work.",
  },
  {
    title: "Proprio Vision",
    role: "Software Engineer II",
    description:
      "Med-Tech Device developed to assist patients with the best outcome.",
  },
];

const experience = [
  {
    company: "Peeka VR",
    role: "Unity VR Developer",
    dates: "Jan. 2017 — Feb. 2017",
  },
  {
    company: "Neocade",
    role: "Game Programmer",
    dates: "Mar. 2017 — Sept. 2017",
  },
  {
    company: "Smashing Ideas",
    role: "Senior Software Engineer",
    dates: "Mar. 2020 — Jan. 2023",
  },
  {
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
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
                  Creating applications acrossing MedTech, Simulation and Gaming.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-muted-foreground">
                  <Image src="/location-pin.svg" alt="Pin" width={24} height={24}></Image>
                  <span className="text-sm">Seattle, WA</span>
                </div>
              </div>
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24 space-y-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="text-muted-background font-mono leading-relaxed">
                  <p className="mb-6">
                    I'm a Software Engineer driven by continuous learning
                    and evolving for the challenges at hand. From games to
                    training simulations to MedTech, I bring a focus on both
                    user and developer experience to every project I work
                    on.
                  </p>
                </div>
              </section>

              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
