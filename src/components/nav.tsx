"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sections } from "@/data/sections";

export default function Nav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    // On sub-pages (e.g. /experience/proprio), highlight the matching nav section
    const pathSection = pathname.split("/")[1];
    if (pathSection && sections.some((item) => item.id === pathSection)) {
      setActiveId(pathSection);
      return;
    }

    function onScroll() {
      let current = sections[0].id;

      for (const item of sections) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (window.scrollY >= el.offsetTop - 200) {
          current = item.id;
        }
      }

      setActiveId(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <nav className="mt-16 hidden lg:block">
      <ul className="space-y-4 text-sm font-mono uppercase tracking-widest">
        {sections.map((item) => (
          <li key={item.id}>
            <a href={`/#${item.id}`} className="group inline-flex items-center gap-3">
              <span
                className={`inline-block h-2 w-2 rounded-full border transition-colors ${
                  activeId === item.id
                    ? "border-zinc-100 bg-zinc-100"
                    : "border-zinc-600 group-hover:border-zinc-100 group-hover:bg-zinc-100"
                }`}
              />
              <span
                className={`transition-colors ${
                  activeId === item.id
                    ? "text-zinc-100"
                    : "text-muted-foreground group-hover:text-zinc-100"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
