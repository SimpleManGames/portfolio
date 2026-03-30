import fs from "fs";
import path from "path";
import Section from "@/components/section";
import Carousel from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/type/experience";

function getCarouselImages(slug: string) {
  const dir = path.join(process.cwd(), `public/experience/${slug}/carousel`);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|svg|webp|gif)$/i.test(f))
    .map((f) => `/experience/${slug}/carousel/${f}`);
}

export default function ExperiencePageLayout(job: Experience) {
  const carouselImages = getCarouselImages(job.slug);

  return (
    <main className="pt-24 lg:w-1/2 lg:ml-auto lg:py-24">
      <div className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {job.role}{" "}
          <span className="text-muted-foreground">· {job.company}</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">
          {job.dates}
        </p>
      </div>

      <Section id="overview">
        <div className="mb-12">
          <ul className="flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 font-mono hover:bg-zinc-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="text-muted-background font-mono leading-relaxed space-y-4 flex-1">
            <div>
              <Link
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="float-left mt-4 ml-6 mr-6 mb-4"
              >
                <Image
                  src={job.icon}
                  alt={job.company}
                  className="rounded-xl object-contain bg_w-48"
                  width={192}
                  height={192}
                />
              </Link>
            </div>
            {job.overview.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contributions">
        <div className="text-muted-background font-mono leading-relaxed space-y-4 flex-1">
          {job.contributions.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </Section>
      {carouselImages.length > 0 && (
        <Section id="gallery">
          <Carousel images={carouselImages} />
        </Section>
      )}
    </main>
  );
}
