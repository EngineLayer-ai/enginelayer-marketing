import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-slate-200">
            Home
          </Link>
          <Link href="/workflow" className="hover:text-slate-200">
            Workflow
          </Link>
          <Link
            href="/request-invite"
            className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            Request invite
          </Link>
        </nav>
      </div>
    </header>
  );
}
