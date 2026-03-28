export type Experience = {
  slug: string;
  company: string;
  role: string;
  dates: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    slug: "proprio-vision",
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
    description:
      "Developed Med-Tech device software to assist surgeons with improved patient outcomes.",
    tech: ["Unity3D", "C#", ".NET", "C++", "Python", "CI/CD", "Roslyn", "OptiTrack", "MVVM"],
  },
  {
    slug: "smashing-ideas",
    company: "Smashing Ideas",
    role: "Senior Software Engineer",
    dates: "Mar. 2020 — Jan. 2023",
    description:
      "Built flight mechanic training simulations. Released four projects across three years, including a cloud-managed lesson creation tool and a local MQTT server.",
    tech: ["Unity3D", "C#", "C++"],
  },
  {
    slug: "neocade",
    company: "Neocade",
    role: "Game Programmer",
    dates: "Mar. 2017 — Sept. 2017",
    description:
      "Developed a point-and-click adventure game shipped on multiple platforms.",
    tech: ["Unity3D", "C#"],
  },
  {
    slug: "peeka-vr",
    company: "Peeka VR",
    role: "Unity VR Developer",
    dates: "Jan. 2017",
    description: "Prototyped VR experiences and interactive applications.",
    tech: ["Unity3D", "C#", "VR", "Android"],
  },
];
