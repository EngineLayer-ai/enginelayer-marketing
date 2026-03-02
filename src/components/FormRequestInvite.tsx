"use client";

import { useState } from "react";

export function FormRequestInvite() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    // TODO: send to API/form backend
    console.log(Object.fromEntries(formData.entries()));
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-sm text-emerald-300">
        Thanks for your interest. We&apos;ll review and get back to you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs text-slate-200">
          Company name
          <input
            name="company"
            required
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
          />
        </label>
        <label className="text-xs text-slate-200">
          Your role
          <input
            name="role"
            required
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
          />
        </label>
        <label className="text-xs text-slate-200">
          Primary trade
          <input
            name="trade"
            required
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
          />
        </label>
        <label className="text-xs text-slate-200">
          Approx. annual revenue
          <select
            name="revenue"
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
          >
            <option value="">Select range</option>
            <option value="lt3">Under $3M</option>
            <option value="3-10">$3M\u2013$10M</option>
            <option value="10-40">$10M\u2013$40M</option>
            <option value="gt40">Over $40M</option>
          </select>
        </label>
        <label className="text-xs text-slate-200 sm:col-span-2">
          Location
          <input
            name="location"
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
          />
        </label>
      </div>
      <label className="text-xs text-slate-200">
        What&apos;s the biggest headache today around change orders / project documentation?
        <textarea
          name="pain"
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Request invite"}
      </button>
    </form>
  );
}
