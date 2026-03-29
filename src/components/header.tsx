import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";

export default function Header() {
  return (
    <header className="lg:fixed lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/">Riley Smith</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-2xl">
          Software Engineer | Game Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground font-mono">
          Creating applications acrossing MedTech, Simulation and Gaming.
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-muted-foreground">
          <Image
            src="/location-pin.svg"
            alt="Pin"
            width={18}
            height={18}
          ></Image>
          <span className="text-sm">Seattle, WA</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}
