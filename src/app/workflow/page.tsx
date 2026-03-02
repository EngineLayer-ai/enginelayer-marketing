import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Construction change order workflow | Reconstruction workflow by EngineLayer",
  description:
    "See how EngineLayer's Log \u2192 Link \u2192 Retrieve \u2192 Export \u2192 Defend workflow helps construction teams defend change orders with time\u2011stamped, organized project records.",
};

export default function WorkflowPage() {
  return (
    <>
      <Section title="The Reconstruction Workflow">
        <p>
          Construction projects generate thousands of data points\u2014issues,
          emails, photos, RFIs, change orders, and timecards. EngineLayer turns
          these into a consistent reconstruction workflow: Log \u2192 Link \u2192
          Retrieve \u2192 Export \u2192 Defend.
        </p>
      </Section>

      <Section title="1. Log issues in the flow of work.">
        <p>
          Foremen and PMs log issues in a simple project issue log instead of
          scattered texts or memory. Each entry records what happened, for how
          long, and what type of disruption it was, along with any relevant
          photos or documents from your cloud storage. Entries are intentionally
          fast to create; issues and even change order starters can be captured
          as short notes from the field so logging fits into the workday instead
          of becoming an extra task at night.
        </p>
      </Section>

      <Section title="2. Link issues, change orders, labor, and files.">
        <p>
          As the project evolves, EngineLayer lets you connect issues to change
          orders, invoices, and labor snapshots, while keeping all links scoped
          to the correct project. This creates a single, consistent trail from
          field disruption to financial impact.
        </p>
      </Section>

      <Section title="3. Retrieve the full story when questions come up.">
        <p>
          When a change order is challenged, managers can quickly retrieve the
          original issue, timestamps, photos, affected scope, labor exposure,
          and CO status from one place. Instead of rebuilding the story from
          scratch, they navigate a structured record.
        </p>
      </Section>

      <Section title="4. Export clean backup for reviews and disputes.">
        <p>
          EngineLayer can generate structured summaries\u2014such as weekly project
          summaries and cross\u2011project views for leadership\u2014and save them into
          your cloud storage. These exports never alter live records; they
          simply provide clear, time\u2011bound snapshots you can share.
        </p>
      </Section>

      <Section title="5. Defend your change orders with time\u2011stamped evidence.">
        <p>
          Because issues are logged with precise timestamps, durations, and
          types, and because related files and labor snapshots are linked, you
          can defend change orders and project decisions with an auditable
          trail. The assistant can help outline responses and pull in supporting
          documents, but every critical edit remains explicit, gated, and
          traceable.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
