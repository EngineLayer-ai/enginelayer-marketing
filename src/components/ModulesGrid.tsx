import Link from "next/link";

const modules = [
  {
    title: "Issue Log",
    description:
      "Structured daily record of delays, disruptions, and site events, time‑stamped and tied to photos and docs.",
    href: "/workflows#issue-log",
  },
  {
    title: "CO Log",
    description:
      "End‑to‑end view of expected and approved change orders with linked backup and append‑only financial history.",
    href: "/workflows#co-reconstruction",
  },
  {
    title: "Document Ingestion & File Organization",
    description:
      "Deterministic ingestion from Drive, Dropbox, or OneDrive with project‑level association and consistent file locations.",
    href: "/workflows#document-ingestion",
  },
  {
    title: "Vendor Commitments",
    description:
      "Append‑only vendor PO and subcontract commitments by project, with clear corrections and no hidden adjustments.",
    href: "/workflows#vendor-commitments",
  },
  {
    title: "Workforce & Labor Visibility",
    description:
      "Monthly labor snapshots and workforce role snapshots so you see hours‑to‑date and crew composition over time.",
    href: "/workflows#workforce",
  },
  {
    title: "Org Admin View",
    description:
      "Internal org‑level signals—issues, labor, and CO activity—plus weekly summaries saved to your drive for leadership.",
    href: "/workflows#org-admin",
  },
];

export function ModulesGrid() {
  return (
    <section className="border-b border-navy-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-8 font-display text-xl font-semibold tracking-tight text-navy-900">
          V1 modules in one execution layer.
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.title}
              href={mod.href}
              className="group rounded-lg border border-navy-100 bg-white p-5 transition-colors hover:border-navy-200 hover:bg-cream-100"
            >
              <h3 className="font-display text-sm font-semibold text-navy-900 group-hover:text-navy-700">
                {mod.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-500">
                {mod.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
