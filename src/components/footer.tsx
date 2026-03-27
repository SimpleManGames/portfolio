export default function Footer() {
  return (
    <footer className="relative z-10 flex justify-center items-center mt-auto border-zinc-800 border-t h-[56px] px-6 text-sm text-zinc-500 bg-zinc-950">
      &copy; {new Date().getFullYear()} Riley Smith
    </footer>
  );
}
