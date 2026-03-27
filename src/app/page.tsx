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
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div>
      <div className="flex-1 relative">
        <div className="fixed inset-0 z-[-1] bg-background">

        </div>

        <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
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
          </div>
          <main>
            
          </main>
        </div>
      </div>
    </>
  );
}
