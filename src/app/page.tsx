import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { ModulesGrid } from "@/components/ModulesGrid";

export const metadata = {
  title:
    "Construction project execution software | EngineLayer",
  description:
    "EngineLayer organizes construction issues, change orders, labor snapshots, and project files into an auditable record—without adding work for managers.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section title="An execution layer for your existing project data.">
        <p>
          EngineLayer sits alongside your existing project tools and cloud file
          storage. It captures issues, change orders, and labor snapshots in a
          structured way and keeps them tied to your project documents, so you
          can quickly see what happened, when it happened, and why it matters.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Works with cloud storage such as Google Drive, Dropbox, and
            OneDrive, and supports teams standardizing how they use those tools.
          </li>
          <li>
            Organizes data around the workflows managers already run—logging
            issues, approving changes, tracking labor—rather than inventing new
            processes.
          </li>
          <li>
            Adds structure and auditability to your existing habits instead of
            asking PMs and foremen to become data entry clerks.
          </li>
        </ul>
      </Section>

      <ModulesGrid />

      <Section title="Built for projects, not hype.">
        <p>
          EngineLayer is intentionally conservative about what it promises. It
          focuses on making your project record defensible and searchable, not
          replacing your entire tech stack or selling AI gimmicks.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Not a document storage replacement or drawing platform.</li>
          <li>
            Not a chatbot bolted onto your inbox; any assistant features are
            there to reduce manual work, not to take over judgment or finance.
          </li>
          <li>
            Not another &quot;all‑in‑one PM suite&quot; that forces you to abandon tools
            that already work.
          </li>
        </ul>
      </Section>

      <Section title="Stop rebuilding the story after the fact.">
        <p>
          On most projects, managers reconstruct decisions only when a dispute
          or change order forces them to. EngineLayer organizes this information
          as you go, using your existing workflows, so reconstruction becomes a
          filtered view—not a fire drill.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            No extra workload: managers log issues and change orders as they
            normally would; EngineLayer adds structure, timestamps, and
            linkages behind the scenes.
          </li>
          <li>
            Issue logging that replaces ad‑hoc field journals with quick,
            time‑stamped entries that are easy for foremen to capture on busy
            days.
          </li>
          <li>
            A consistent record that backs up change orders, schedule impacts,
            and labor exposure when questions arise.
          </li>
        </ul>
      </Section>

      <Section title="Organize what matters most on a project.">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">Issue Log</h3>
            <p className="mt-1">
              Capture day‑to‑day issues in a structured log: description,
              duration in half‑hour increments, standardized issue types, and
              links to photos or documents in your cloud storage. Foremen can
              add issues in a few taps—even as quick notes from the field—so it
              feels like a lightweight daily journal instead of a separate
              reporting job.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">
              Change Order Log
            </h3>
            <p className="mt-1">
              Maintain a structured view of every change order: internal
              identifiers, type and reason, status, expected and approved
              values, and linked evidence from your files. When it is time to
              discuss money, relevant backup is already attached and easy to
              share with internal stakeholders, general contractors, owners, or
              auditors without exposing unrelated project data.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">
              Labor Snapshots
            </h3>
            <p className="mt-1">
              Store monthly, append‑only labor snapshots—hours‑to‑date (and
              optionally cost and billing) per project—so managers and owners
              can see labor exposure without risking accidental overwrites or
              hidden adjustments.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">
              Project file sharing between office and field
            </h3>
            <p className="mt-1">
              EngineLayer keeps project records tied to the relevant documents,
              so office and field see the same story. Foremen can open linked
              drawings, RFIs, photos, or reports through the tools they already
              use, while the office maintains structure around those files.
              Because records point to live links in cloud storage, office staff
              can update drawings or backup once and know field users are seeing
              the current version their permissions allow.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">
              Assistant that finds and files the right documents
            </h3>
            <p className="mt-1">
              EngineLayer&apos;s assistant handles the part of email and paperwork
              that burns the most time: finding the right files, keeping them
              organized, and attaching the correct backup when you need to
              respond. It works against a structured map of your cloud storage,
              so file types and locations stay consistent across projects.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-navy-900">
              Org‑level visibility without a new &quot;BI project.&quot;
            </h3>
            <p className="mt-1">
              Org Admins have access to an overview that aggregates key project
              signals—such as issue volume, labor snapshots, and change order
              activity—without turning EngineLayer into another reporting
              project. The goal is to surface the right metrics for steering
              conversations, while keeping all underlying records auditable and
              append‑only.
            </p>
          </div>
        </div>
      </Section>

      <Section title="No cross‑organization leakage, and project access that matches reality.">
        <p>
          EngineLayer is designed so each customer&apos;s data stays strictly
          separated from others, and so people only see the projects that are
          actually theirs. Organization‑level controls let you assign users to
          relevant projects, which means field teams don&apos;t see unrelated
          jobs, and office staff can share the latest files with confidence.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Strong separation between organizations; queries are always scoped
            to a single organization.
          </li>
          <li>
            Role‑based access so Org Admins can see everything, while field and
            project staff are limited to the projects they&apos;re assigned to.
          </li>
          <li>
            All critical edits are recorded with who changed what, when, and
            why—no silent financial changes, and no accidental visibility of the
            wrong project.
          </li>
        </ul>
      </Section>

      <CTASection />
    </>
  );
}
