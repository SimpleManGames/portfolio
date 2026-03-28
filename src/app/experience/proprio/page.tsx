import Image from "next/image";
import Section from "@/components/section";

export default function Page() {
  return (
    <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
      <Section id="overview">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Project Overview
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="text-muted-foreground font-mono leading-relaxed space-y-4 flex-1">
            <div>
              <Image
                src="/experience/proprio/proprio_vision_icon.svg"
                alt="Proprio"
                className="float-left mt-4 ml-6 mr-6 mb-4 rounded-xl object-contain bg_w-48"
                width={192}
                height={192}
              ></Image>
              <p>
                Proprio Vision's mission was to deliver better outcomes for
                patients — less radiation, smaller insurance bills, and quicker
                surgeries.
              </p>
            </div>
            <p>
              We achieved this by developing the Paradigm System. Using an array
              of cameras, sensors, and tracked instruments, we replicated the
              real-world surgical environment in 3D space, giving surgeons a
              clearer look into the patient than ever before.
            </p>
            <p>
              Building on this capability, we developed Intra-Op Measurements —
              a first of its kind. Surgeons could get real-time alignment data
              without the radiation exposure and significant time cost of
              traditional methods.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contributions">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Contributions
        </h2>
      </Section>

      <Section id="tech-stack">
        <h2 className="text-2xl font-bold text-foreground mb-4">Tech Stack</h2>
      </Section>
    </main>
  );
}
