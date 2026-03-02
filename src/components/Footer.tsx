export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-cream-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-8 text-xs text-navy-400">
        <span>EngineLayer – Execution intelligence for construction projects.</span>
        <span>© {new Date().getFullYear()} EngineLayer LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}
