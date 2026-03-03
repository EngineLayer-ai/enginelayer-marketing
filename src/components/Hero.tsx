import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-36">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-display text-5xl font-bold tracking-tight text-navy-900 sm:text-6xl">
            Bring order to project chaos.
          </h1>
          <p className="text-lg leading-relaxed text-navy-600">
            EngineLayer is an execution intelligence layer that turns everyday
            project activity into organized, auditable records&#8212;without asking
            managers to do more work.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/request-invite"
            className="rounded-md bg-navy-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            Request an invite
          </Link>
          <Link
            href="/workflows"
            className="rounded-md border border-navy-200 px-6 py-3 text-sm font-medium text-navy-700 transition-colors hover:border-navy-300 hover:bg-cream-100"
          >
            Explore workflows
          </Link>
        </div>
        <p className="text-sm text-navy-400">
          Focused on commercial and industrial construction projects; ideal for
          teams managing change orders, field issues, and labor across multiple
          jobs.
        </p>
      </div>
    </section>
  );
}
