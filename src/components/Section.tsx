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
    <section id={id} className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {title && (
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-50">
            {title}
          </h2>
        )}
        <div className="space-y-4 text-sm text-slate-200">{children}</div>
      </div>
    </section>
  );
}
