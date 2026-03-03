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
    <section id={id}>
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 py-28">
          {title && (
            <h2 className="mb-8 font-display text-4xl font-semibold tracking-tight text-navy-900">
              {title}
            </h2>
          )}
          <div className="space-y-5 text-base leading-relaxed text-navy-600">
            {children}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
