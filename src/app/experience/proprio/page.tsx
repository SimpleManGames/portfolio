import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/section";
import Carousel from "@/components/carousel";
import { experience } from "@/data/experience";

const proprio = experience.find((e) => e.slug === "proprio-vision")!;

function getCarouselImages() {
  const dir = path.join(process.cwd(), "public/experience/proprio/carousel");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(f))
    .map((f) => `/experience/proprio/carousel/${f}`);
}

export default function Page() {
  const carouselImages = getCarouselImages();
  return (
    <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
      <div className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {proprio.role}{" "}
          <span className="text-muted-foreground">· {proprio.company}</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">
          {proprio.dates}
        </p>
      </div>

      <Section id="overview">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="text-muted-background font-mono leading-relaxed space-y-4 flex-1">
            <div>
              <Link
                href="https://www.propriovision.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-left mt-4 ml-6 mr-6 mb-4"
              >
                <Image
                  src="/experience/proprio/proprio_vision_icon.svg"
                  alt="Proprio"
                  className="rounded-xl object-contain bg_w-48"
                  width={192}
                  height={192}
                />
              </Link>
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
        <div className="text-muted-background font-mono leading-relaxed space-y-4 flex-1">
          <p>
            When I joined Proprio, the Front-End team was in the midst of a
            large, multi-year effort to refactor the entire legacy codebase. I
            came on to help push that work across the finish line. Within six
            months, I had fully onboarded, taken ownership of my learning, and
            become a key contributor to the team.
          </p>
          <p>
            After the refactor wrapped up, I was entrusted to architect and
            implement the full UI/UX for the next major feature — Intra-Op
            Measurements, the flagship capability of the Paradigm system. I
            hosted demos for surgeons and stakeholders, collaborated closely
            with designers, and assisted with user studies and formative
            evaluations. Together, we achieved our goal of becoming the first to
            measure alignment without radiation.
          </p>
          <p>
            With Intra-Op Measurements shipped, I took on the same end-to-end
            role for our next initiative — Picasso. This effort focused on
            improving surgical workflow and reducing reliance on the device
            technician. We introduced a foot switch for independent surgeon
            control, streamlined the registration workflow, and cut down on
            required communication, resulting in a smoother, more efficient
            experience.
          </p>
        </div>
      </Section>

      <Section id="tech-stack">
        <div></div>
      </Section>

      <Section id="gallery">
        <Carousel images={carouselImages} />
      </Section>
    </main>
  );
}
