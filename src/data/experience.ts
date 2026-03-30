import { Experience } from "../type/experience";

export const experience: Experience[] = [
  {
    slug: "proprio-vision",
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
    description:
      "Developed Med-Tech device software to assist surgeons with improved patient outcomes.",
    tech: ["Unity3D", "C#", ".NET", "C++", "Python", "CI/CD", "Roslyn", "OptiTrack", "Git", "Github", "Github Actions",],
    website: "https://www.propriovision.com/",
    link: "/experience/proprio-vision",
    icon: "/experience/proprio-vision/proprio_vision_icon.svg",
    overview: [
      "Proprio Vision's mission was to deliver better outcomes for patients — less radiation, smaller insurance bills, and quicker surgeries.",
      "We achieved this by developing the Paradigm System. Using an array of cameras, sensors, and tracked instruments, we replicated the real-world surgical environment in 3D space, giving surgeons a clearer look into the patient than ever before.",
      "Building on this capability, we developed Intra-Op Measurements — a first of its kind. Surgeons could get real-time alignment data without the radiation exposure and significant time cost of traditional methods.",
    ],
    contributions: [
      "When I joined Proprio, the Front-End team was in the midst of a large, multi-year effort to refactor the entire legacy codebase. I came on to help push that work across the finish line. Within six months, I had fully onboarded, taken ownership of my learning, and become a key contributor to the team.",
      "After the refactor wrapped up, I was entrusted to architect and implement the full UI/UX for the next major feature — Intra-Op Measurements, the flagship capability of the Paradigm system. I hosted demos for surgeons and stakeholders, collaborated closely with designers, and assisted with user studies and formative evaluations. Together, we achieved our goal of becoming the first to measure alignment without radiation.",
      "With Intra-Op Measurements shipped, I took on the same end-to-end role for our next initiative — Picasso. This effort focused on improving surgical workflow and reducing reliance on the device technician. We introduced a foot switch for independent surgeon control, streamlined the registration workflow, and cut down on required communication, resulting in a smoother, more efficient experience.",
    ]
  },
  {
    slug: "smashing-ideas",
    company: "Smashing Ideas",
    role: "Senior Software Engineer",
    dates: "Mar. 2020 — Jan. 2023",
    description:
      "Built flight mechanic training simulations. Released four projects across three years, including a cloud-managed lesson creation tool and a local MQTT server.",
    tech: ["Unity3D", "C#", "C++"],
    website: "",
    link: "",
    icon: "",
    overview: [""],
    contributions: [""]
  },
  {
    slug: "neocade",
    company: "Neocade",
    role: "Game Programmer",
    dates: "Mar. 2017 — Sept. 2017",
    description:
      "Developed a point-and-click adventure game shipped on multiple platforms.",
    tech: ["Unity3D", "C#"],
    website: "",
    link: "",
    icon: "",
    overview: [""],
    contributions: [""]
  },
  {
    slug: "peeka-vr",
    company: "Peeka VR",
    role: "Unity VR Developer",
    dates: "Jan. 2017",
    description: "Prototyped VR experiences and interactive applications.",
    tech: ["Unity3D", "C#", "VR", "Android"],
    website: "",
    link: "",
    icon: "",
    overview: [""],
    contributions: [""]
  },
];
