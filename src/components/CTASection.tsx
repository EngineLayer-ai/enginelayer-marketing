import Link from "next/link";
import { Section } from "./Section";

export function CTASection() {
  return (
    <Section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Start with one project.
          </h2>
          <p className="mt-1 text-sm text-slate-200">
            If defending change orders and tracking disruption is already
            burning hours, EngineLayer can help turn that chaos into a
            structured, auditable record without adding another to\u2011do list for
            your PMs.
          </p>
        </div>
        <Link
          href="/request-invite"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
        >
          Request an invite
        </Link>
      </div>
    </Section>
  );
}
