import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Workflows | EngineLayer",
  description:
    "EngineLayer supports multiple workflows across the life of a construction project—from issue logging and change order reconstruction to document ingestion, vendor commitments, workforce visibility, and org-level oversight.",
};

const workflows = [
  {
    id: "co-reconstruction",
    title: "Change Order Reconstruction",
    description:
      "Shows how EngineLayer keeps the story behind each change order intact—from the first field issue through linked documents, labor snapshots, and final approvals—so you can defend extra work with an auditable trail instead of rebuilding it from memory.",
  },
  {
    id: "issue-log",
    title: "Issue Logging & Daily Record",
    description:
      "Captures delays, disruptions, and site events as a lightweight daily record with standardized types, durations in 0.5‑hour increments, timestamps, and linked photos/docs—replacing inconsistent foreman journals with a structured, project‑level issue log.",
  },
  {
    id: "document-ingestion",
    title: "Document Ingestion & File Organization",
    description:
      "Ingests drawings and project documents via the assistant or direct upload, files them into your connected cloud storage (Drive, Dropbox, or OneDrive), and associates them deterministically with the right projects, so RFIs, POs, reports, and other files land in predictable places and stay tied to the records they support.",
  },
  {
    id: "vendor-commitments",
    title: "Vendor PO / Subcontract Commitments",
    description:
      "Tracks vendor POs, subcontract commitments, and their associated documents as append‑only entries per project, with clear amounts, dates, references, and corrections, giving PMs and owners a simple, auditable view of committed spend without turning EngineLayer into an accounting system.",
  },
  {
    id: "workforce",
    title: "Workforce Visibility & Labor Context",
    description:
      "Provides a minimal workforce view by recording planned and historical headcount by role per project, alongside monthly labor snapshots, so you can see how crews and roles have shifted over time without touching payroll or financial calculations.",
  },
  {
    id: "org-admin",
    title: "Org Admin Overview & Weekly Summaries",
    description:
      "Gives Org Admins an internal overview of issues, labor snapshots, and change order activity across projects, plus weekly PDF summaries saved to your drive, so leadership can steer conversations using consistent signals while leaving all underlying records append‑only and auditable.",
  },
];

export default function WorkflowsPage() {
  return (
    <>
      <section className="border-b border-navy-100">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h1 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Workflows
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-navy-600">
            EngineLayer supports multiple workflows across the life of a
            project. Change Order Reconstruction is a flagship use case, but the
            same execution layer also powers structured issue logging, document
            ingestion, vendor commitments, workforce visibility, and
            org&#8209;level oversight.
          </p>
        </div>
      </section>

      {workflows.map((wf) => (
        <section key={wf.id} id={wf.id} className="border-b border-navy-100">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-4 font-display text-xl font-semibold tracking-tight text-navy-900">
              {wf.title}
            </h2>
            <p className="max-w-3xl text-[15px] leading-relaxed text-navy-600">
              {wf.description}
            </p>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
