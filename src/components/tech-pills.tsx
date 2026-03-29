export default function TechPills({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 font-mono hover:bg-zinc-700"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
