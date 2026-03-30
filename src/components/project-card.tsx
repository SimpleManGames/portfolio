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
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover border border-zinc-800 rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground font-mono leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
}
