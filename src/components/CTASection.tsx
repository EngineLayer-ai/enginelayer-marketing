import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-top-right" />
      <div className="glow-bottom-left" />
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900">
                Start with one project.
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy-600">
                If defending change orders and tracking disruption is already
                burning hours, EngineLayer can help turn that chaos into a
                structured, auditable record without adding another to\u2011do list for
                your PMs.
              </p>
            </div>
            <Link
              href="/request-invite"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-navy-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-700"
            >
              Request an invite
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
