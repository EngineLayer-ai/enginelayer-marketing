import Link from "next/link";
import { Section } from "./Section";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-top-right" />
      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
              Start with one project.
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-navy-600">
              If defending change orders and tracking disruption is already
              burning hours, EngineLayer can help turn that chaos into a
              structured, auditable record without adding another to‑do list for
              your PMs.
            </p>
          </div>
          <Link
            href="/request-invite"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700"
          >
            Request an invite
          </Link>
        </div>
      </Section>
    </section>
  );
}
