"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { id: string; label: string };

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    const discovered = sections.map((el) => ({
      id: el.id,
      label: el.id.charAt(0).toUpperCase() + el.id.slice(1).replace(/-/g, " "),
    }));

    setItems(discovered);
    if (discovered.length > 0) setActiveId(discovered[0].id);

    function onScroll() {
      let current = discovered[0]?.id ?? "";

      for (const item of discovered) {
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
        {!isHome && (
          <li>
            <a href="/" className="group inline-flex items-center gap-3">
              <span className="text-muted-foreground transition-colors group-hover:text-zinc-100">
                &larr; Back
              </span>
            </a>
          </li>
        )}
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group inline-flex items-center gap-3"
            >
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
