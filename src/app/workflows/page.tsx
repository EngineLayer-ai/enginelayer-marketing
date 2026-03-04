import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Workflows | EngineLayer",
  description:
    "EngineLayer supports multiple workflows across the life of a construction project, from issue logging and change order reconstruction to document ingestion, vendor commitments, workforce visibility, and org-level oversight.",
};

export default function WorkflowsPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-5xl px-6 py-28">
          <h1 className="font-display text-5xl font-bold tracking-tight text-navy-900 sm:text-6xl">
            Workflows
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-navy-600">
            EngineLayer supports multiple workflows across the life of a
            project. Change Order Reconstruction is a flagship use case, but the
            same execution layer also powers structured issue logging, document
            ingestion, vendor commitments, workforce visibility, and
            org&#8209;level oversight.
          </p>
        </div>
      </section>

      <section id="co-reconstruction">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Change Order Reconstruction
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Shows how EngineLayer keeps the story behind each change order
              intact&#8212;from the first field issue through linked documents, labor
              snapshots, and final approvals&#8212;so you can defend extra work with
              an auditable trail instead of rebuilding it from memory.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="issue-log">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Issue Logging &amp; Daily Record
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Captures delays, disruptions, and site events as a lightweight
              daily record with standardized types, durations in 0.5&#8209;hour
              increments, timestamps, and linked photos/docs&#8212;replacing
              inconsistent foreman journals with a structured,
              project&#8209;level issue log.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="document-ingestion">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Document Ingestion &amp; File Organization
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Ingests drawings and project documents via the assistant or direct
              upload, files them into your connected cloud storage (Drive,
              Dropbox, or OneDrive), and associates them deterministically with
              the right projects, so RFIs, POs, reports, and other files land in
              predictable places and stay tied to the records they support.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="vendor-commitments">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Vendor PO / Subcontract Commitments
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Tracks vendor POs, subcontract commitments, and their associated
              documents as append&#8209;only entries per project, with clear amounts,
              dates, references, and corrections, giving PMs and owners a
              simple, auditable view of committed spend without turning
              EngineLayer into an accounting system.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="workforce">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Workforce Visibility &amp; Labor Context
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Provides a minimal workforce view by recording planned and
              historical headcount by role per project, alongside monthly labor
              snapshots, so you can see how crews and roles have shifted over
              time without touching payroll or financial calculations.
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="org-admin">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-navy-900">
              Org Admin Overview &amp; Weekly Summaries
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-navy-600">
              Gives Org Admins an internal overview of issues, labor snapshots,
              and change order activity across projects, plus weekly PDF
              summaries saved to your drive, so leadership can steer
              conversations using consistent signals while leaving all
              underlying records append&#8209;only and auditable.
            </p>
          </div>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
