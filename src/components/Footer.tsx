export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400">
        <span>EngineLayer \u2013 Execution intelligence for construction projects.</span>
        <span>\u00a9 {new Date().getFullYear()} EngineLayer LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}
