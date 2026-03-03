import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-navy-100">
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 py-20">
          {title && (
            <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-navy-900">
              {title}
            </h2>
          )}
          <div className="space-y-4 text-[15px] leading-relaxed text-navy-600">
            {children}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
