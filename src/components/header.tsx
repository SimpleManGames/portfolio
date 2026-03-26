import Link from "next/link";

export default function Header() {
  return (
    <header className="border-zinc-800 border-b h-[56px] flex items-center justify-between px-6">
      <Link href="/" className="font-semibold tracking-tight">
        Riley Smith
      </Link>

      <nav>
        <ul className="flex items-center gap-5 text-sm text-zinc-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://rxresu.me/rileysmith/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rileysmithdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rileysmith29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
