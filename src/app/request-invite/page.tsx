import { Section } from "@/components/Section";
import { FormRequestInvite } from "@/components/FormRequestInvite";

export const metadata = {
  title: "Request an invite | EngineLayer",
  description:
    "Request early access to EngineLayer, an execution intelligence layer for construction projects.",
};

export default function RequestInvitePage() {
  return (
    <Section title="Request an invite">
      <p className="text-sm text-slate-200">
        We&apos;re onboarding a small group of construction firms to pressure‑test
        the reconstruction workflow on live projects. Share a bit about your
        team and where change orders and project documentation are most painful.
      </p>
      <div className="mt-6">
        <FormRequestInvite />
      </div>
    </Section>
  );
}
