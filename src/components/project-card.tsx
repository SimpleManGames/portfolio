import { Project } from "@/type/project";
import Image from "next/image";

export default function ProjectCard(project: Project) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg overflow-hidden transition-colors hover:bg-zinc-800/50"
    >
      <div className="p-4 flex justify-between items-start">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <Image
          src="/external-link.svg"
          alt="External link"
          width={16}
          height={16}
          className="shrink-0 mt-1.5 invert opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <div className="px-4 pb-4 -mt-2">
        <p className="mt-2 text-sm text-muted-foreground font-mono leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="relative h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center brightness-50 transition-all duration-300 group-hover:brightness-100"
        />
      </div>
    </a>
  );
}
