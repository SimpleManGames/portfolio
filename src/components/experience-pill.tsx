import { Experience } from "@/type/experience";
import Link from "next/link";

export default function ExperiencePill(job: Experience) {
  return (
    <li key={job.company}>
      <Link
        href={job.portfolio_link}
        className="group flex flex-col sm:flex-row gap-2 sm:gap-8 rounded-lg p-4 -mx-4 transition-colors hover:bg-zinc-800/50"
      >
        <div className="shrink-0 sm:w-36 text-sm text-muted-foreground font-mono pt-1">
          {job.dates}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground">
            {job.role}{" "}
            <span className="text-muted-foreground">· {job.company}</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground font-mono leading-relaxed">
            {job.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
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
      </Link>
    </li>
  );
}
