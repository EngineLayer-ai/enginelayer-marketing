"use client";

import { useState } from "react";

export function FormRequestInvite() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/request-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className="text-[15px] text-navy-700">
        Thanks for your interest. We&apos;ll review and get back to you.
      </p>
    );
  }

  const inputClasses =
    "mt-1 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-800 placeholder:text-navy-300 focus:border-navy-400 focus:outline-none focus:ring-1 focus:ring-navy-400";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-medium text-navy-700">
          Company name
          <input name="company" required className={inputClasses} />
        </label>
        <label className="text-xs font-medium text-navy-700">
          Your role
          <input name="role" required className={inputClasses} />
        </label>
        <label className="text-xs font-medium text-navy-700">
          Email address
          <input name="email" type="email" required className={inputClasses} />
        </label>
        <label className="text-xs font-medium text-navy-700">
          Phone number
          <input name="phone" type="tel" required className={inputClasses} />
        </label>
        <label className="text-xs font-medium text-navy-700">
          Primary trade
          <input name="trade" required className={inputClasses} />
        </label>
        <label className="text-xs font-medium text-navy-700">
          Approx. annual revenue
          <select name="revenue" className={inputClasses}>
            <option value="">Select range</option>
            <option value="lt3">Under $3M</option>
            <option value="3-10">$3M–$10M</option>
            <option value="10-40">$10M–$40M</option>
            <option value="gt40">Over $40M</option>
          </select>
        </label>
        <label className="text-xs font-medium text-navy-700 sm:col-span-2">
          Location
          <input name="location" className={inputClasses} />
        </label>
      </div>
      <label className="text-xs font-medium text-navy-700">
        What&apos;s the biggest headache today around change orders / project
        documentation?
        <textarea name="pain" rows={4} className={inputClasses + " resize-y"} />
      </label>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-navy-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Request invite"}
      </button>
    </form>
  );
}
