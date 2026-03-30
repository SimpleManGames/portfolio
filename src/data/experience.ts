import { Experience } from "../type/experience";

export const experience: Experience[] = [
  {
    slug: "proprio-vision",
    company: "Proprio Vision",
    role: "Software Engineer II",
    dates: "Nov. 2023 — Jan. 2026",
    description:
      "Developed the software for a Class 2 Medical Device to assist surgeons during spinal surgery.",
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
      "Developed complex simulations of four Boeing aircraft to be used in an interactive training scenarios.",
    tech: ["Unity3D", "C#", "C++"],
    website: "https://services.boeing.com/training-solutions/maintenance-training/maintenance-synthetic-trainer",
    portfolio_link: "/experience/smashing-ideas",
    icon: "/experience/smashing-ideas/mstcover.png",
    overview: ["Maintenance Synthetic Trainer, also known as MST, is a software application created to train Flight Mechanics proper procedures in repairing and maintaining four different plane models. Accompanied by a cloud application called the Authoring Tool, which let instructors hand create lessons for use within their classroom."],
    contributions: [
      "When I joined the team on Maintenance Synthetic Trainer I started out as a regular Software Engineer working solely on the front-end. Creating UI and improving the UX through Unity and C#. Shortly after joining I was assigned to do the complete process. Developing the simulation code and the Unity side to support the new system I would be making.",
      "A year after creating systems I was promoted to Senior Software Engineer. Taking on new responsibilities and larger roles within the team. I started interacting with all fields of development in a more in depth manner. Helping Product Managers scope project size and sprints, discussing with Quality Assurance complex issues to quickly understand solutions or compromises and optimizing assets with the Art Director. Along side those I had become a leading voice in discussion and decision about the future of new feature implementation and how we approach new problems that many have arouse from a constantly evolving code base.",
      "Worked on four projects, seven individual releases, over 3 years to the satisfaction of clients and shareholders. With live demonstrations to those individuals interested in our progress every two weeks to show new features and iterate on their feedback.",
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
      "Neocade is a small indie studio based out of Seattle Washington. We handled the development and release process of Hiveswap: Act 1.",
      "Hiveswap: Act 1 is a point-and-click adventure game developed by What Pumpkin Games and released on Steam in September 2017. The game is set in the Homestuck universe, a popular webcomic, and follows the story of Joey Claire, a young girl who is transported to a strange alien planet."
    ],
    contributions: [
      "As a Gameplay Programmer on the team, I was responsible for developing key game features, working with game designers and bringing artist's visions to life!",
      "During my time working on game I worked on implementing Finite-State machine for the combat AI. With so many items being possible to have in the combat sequences, called Strifes, if was vital to having a system for easily adding new interactions. I developed a robust method of implementing new combos. Utilizing Unity's Scriptable Objects and custom editors I created a simple and sleek way to extend the functionality of the battle system. Other than just the combinations the battle sequences also includes audio, animations and playing cutscenes before and after the fight.",
      "Along side my work on the Strifes I was responsible for implementing item interactions with the world, laying out scenes for play navigation, implementing player progression, a few other minor puzzles and bug fixes through the code base.",
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
