import { ReactNode } from "react";

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
      <div className="mx-auto max-w-5xl px-6 py-14">
        {title && (
          <h2 className="mb-5 font-display text-xl font-semibold tracking-tight text-navy-900">
            {title}
          </h2>
        )}
        <div className="space-y-4 text-[15px] leading-relaxed text-navy-600">
          {children}
        </div>
      </div>
    </section>
  );
}
