export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-auto border-zinc-800 border-t h-[56px] px-6 text-sm text-zinc-500">
      &copy; {new Date().getFullYear()} Riley Smith
    </footer>
  );
}
