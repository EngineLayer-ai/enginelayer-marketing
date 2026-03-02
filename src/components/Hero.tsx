import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Bring order to project chaos.
          </h1>
          <p className="text-sm text-slate-200">
            EngineLayer is an execution intelligence layer that turns everyday
            project activity into organized, auditable records—without asking
            managers to do more work.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/request-invite"
            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            Request an invite
          </Link>
          <Link
            href="/workflow"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-50 hover:border-slate-500"
          >
            See how the workflow works
          </Link>
        </div>
        <p className="text-xs text-slate-400">
          Focused on commercial and industrial construction projects; ideal for
          teams managing change orders, field issues, and labor across multiple
          jobs.
        </p>
      </div>
    </section>
  );
}
