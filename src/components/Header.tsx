import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-navy-100 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          <Link
            href="/"
            className="font-medium text-navy-600 transition-colors hover:text-navy-900"
          >
            Home
          </Link>
          <Link
            href="/workflows"
            className="font-medium text-navy-600 transition-colors hover:text-navy-900"
          >
            Workflows
          </Link>
          <Link
            href="/request-invite"
            className="rounded-md bg-navy-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            Request invite
          </Link>
        </nav>
      </div>
    </header>
  );
}
