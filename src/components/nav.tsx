"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { id: string; label: string };

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const itemsRef = useRef<NavItem[]>([]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    const discovered = sections.map((el) => ({
      id: el.id,
      label: el.id.charAt(0).toUpperCase() + el.id.slice(1).replace(/-/g, " "),
    }));

    itemsRef.current = discovered;
    requestAnimationFrame(() => setItems(discovered));

    function onScroll() {
      const current = itemsRef.current;
      if (current.length === 0) return;
      let active = current[0].id;

      for (const item of current) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (window.scrollY >= el.offsetTop - 200) {
          active = item.id;
        }
      }

      setActiveId(active);
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
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="text-muted-foreground transition-colors group-hover:text-zinc-100">
                &larr; Back
              </span>
            </Link>
          </li>
        )}
        {items.map((item) => (
          <li key={item.id}>
            <Link
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
