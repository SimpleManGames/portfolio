import { Experience } from "../type/experience";

export const experience: Experience[] = [
  {
    slug: "proprio-vision",
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
    description:
      "Developed software for a Class II medical device to assist surgeons during spinal surgery.",
    tech: ["Unity3D", "C#", ".NET", "C++", "Python", "CI/CD", "Roslyn", "OptiTrack", "Git", "Github", "Github Actions",],
    website: "https://www.propriovision.com/",
    portfolio_link: "/experience/proprio-vision",
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
    company: "Luxoft Smashing Ideas",
    role: "Senior Software Engineer",
    dates: "Mar. 2020 — Jan. 2023",
    description:
      "Developed complex simulations of four Boeing aircraft for use in interactive training scenarios.",
    tech: ["Unity3D", "C#", "C++"],
    website: "https://services.boeing.com/training-solutions/maintenance-training/maintenance-synthetic-trainer",
    portfolio_link: "/experience/smashing-ideas",
    icon: "/experience/smashing-ideas/mstcover.png",
    overview: [
      "Maintenance Synthetic Trainer (MST) is a software application built to train flight mechanics on proper procedures for repairing and maintaining four different aircraft models.",
      "Alongside MST, we developed the Authoring Tool — a cloud application that let instructors create custom lessons for use in their classrooms.",
    ],
    contributions: [
      "When I joined the MST team, I started as a Software Engineer focused on the front-end — building UI and improving UX in Unity with C#. Shortly after, I took on the full development process, writing the simulation code and the Unity systems to support it.",
      "A year in, I was promoted to Senior Software Engineer. I took on broader responsibilities across the team: helping Product Managers scope sprints, working with QA to quickly identify solutions or compromises, and collaborating with the Art Director on asset optimization. I became a leading voice in decisions around new feature implementation and how we approached problems in a constantly evolving codebase.",
      "Over three years, I contributed to four projects and seven individual releases. Every two weeks, we ran live demos for clients and stakeholders to showcase new features and iterate on their feedback.",
    ]
  },
  {
    slug: "neocade",
    company: "Neocade",
    role: "Game Programmer",
    dates: "Mar. 2017 — Sept. 2017",
    description:
      "Developed Hiveswap: Act 1, a Point & Click Adventure released on Steam.",
    tech: ["Unity3D", "C#"],
    website: "https://store.steampowered.com/app/623940/HIVESWAP_ACT_1/",
    portfolio_link: "/experience/neocade",
    icon: "/experience/neocade/hiveswap-act-1-logo.png",
    overview: [
      "Neocade is a small indie studio based out of Seattle, Washington. We handled the development and release of Hiveswap: Act 1.",
      "Hiveswap: Act 1 is a point-and-click adventure game developed by What Pumpkin Games, released on Steam in September 2017. Set in the Homestuck universe, it follows Joey Claire, a young girl transported to a strange alien planet.",
    ],
    contributions: [
      "As a Gameplay Programmer, I developed key game features, working closely with designers and bringing artists' visions to life.",
      "A major focus was implementing a finite-state machine for the combat AI. The combat sequences — called Strifes — supported a wide variety of item combinations, so it was vital to have a system that made adding new interactions straightforward. Using Unity's Scriptable Objects and custom editors, I created a clean, extensible way to build out the battle system, including audio, animations, and cutscenes before and after each fight.",
      "Alongside the Strifes, I implemented item interactions with the world, laid out scenes for player navigation, built player progression systems, and tackled various puzzles and bug fixes across the codebase.",
    ]
  },
  {
    slug: "peeka-vr",
    company: "Peeka VR",
    role: "Unity VR Developer",
    dates: "Jan. 2017",
    description: "Prototyped VR interactive experiences for children's books.",
    tech: ["Unity3D", "C#", "VR", "Android"],
    website: "",
    portfolio_link: "",
    icon: "",
    overview: [""],
    contributions: [""]
  },
];
