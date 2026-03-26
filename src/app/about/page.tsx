const skills = [
  "Unity3D",
  "C#",
  "C++",
  "Agile Methodology",
  "Source Control",
  "Prototyping",
  "Code Reviews",
  "Unit Testing",
  "Jenkins",
  "Software Architecture",
  "Performance Optimization",
  "User Experience",
  "Estimation & Scoping",
  "Time Management",
  "Problem Solving",
  "Critical Thinking",
];

export default function About() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-2">Hey there! I&apos;m Riley Smith</h1>
      <p className="text-lg text-zinc-400 mb-10">
        I&apos;m a Gameplay Developer and Software Engineer based in Seattle, WA.
      </p>

      <div className="space-y-6 text-zinc-300 leading-relaxed mb-16">
        <p>
          Originally started in Game Development at two small companies then
          stepping into more traditional software for Boeing and in the Med-Tech
          space.
        </p>
        <p>
          My first role was creating VR prototypes translating children&apos;s books
          for Google Cardboard. From there I joined the Hiveswap: Act 1
          development team helping bring the creative image of the game to the
          end goal — supporting through bug fixes, designing and implementing key
          features to the user&apos;s journey.
        </p>
        <p>
          I then built a flight mechanics training application using Unity and
          C++ simulation, along with the development of cloud-based lesson
          tools. Released four different projects across three years of work.
        </p>
        <p>
          Most recently, I worked on the Proprio Vision medical device over two
          years, contributing to spine surgery navigation software.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </main>
  );
}
