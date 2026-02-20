"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    machine: "",
    grinder: "",
    country: "Israel",
    problem: "",
  });

  const [status, setStatus] = useState<
    { type: "idle" | "loading" | "success" | "error"; msg: string }
  >({ type: "idle", msg: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Submitting..." });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus({ type: "error", msg: data.error || "Something went wrong" });
        return;
      }

      setStatus({
        type: "success",
        msg: "You’re in! We’ll email you when your machine is supported.",
      });

      setForm({ email: "", machine: "", grinder: "", country: "Israel", problem: "" });
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold tracking-wide text-gray-500">DialedIn</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Dial in espresso faster — for <span className="underline">your exact machine</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Step-by-step setup, dial-in guidance, and cleaning routines tailored to your machine and grinder.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Setup in minutes</h3>
            <p className="mt-1 text-sm text-gray-600">First-run checklist + baseline recipe.</p>
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Dial-in assistant</h3>
            <p className="mt-1 text-sm text-gray-600">Simple “finer/coarser” guidance and why.</p>
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Cleaning made simple</h3>
            <p className="mt-1 text-sm text-gray-600">Daily + weekly routines (reminders later).</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Get early access</h2>
          <p className="mt-2 text-sm text-gray-600">
            We’re launching with the most requested machines first. Tell us what you own.
          </p>

          <form onSubmit={submit} className="mt-6 grid gap-3">
            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Email (required)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Machine brand + model (required) e.g., Gaggia Classic Pro"
              value={form.machine}
              onChange={(e) => setForm({ ...form, machine: e.target.value })}
              required
            />

            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Grinder brand + model (optional) e.g., Baratza Sette 270"
              value={form.grinder}
              onChange={(e) => setForm({ ...form, grinder: e.target.value })}
            />

            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Country (default Israel)"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />

            <textarea
              className="rounded-xl border px-4 py-3"
              rows={3}
              placeholder="Your #1 frustration (optional)"
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
            />

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="rounded-xl bg-black px-4 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50"
            >
              {status.type === "loading" ? "Submitting..." : "Join waitlist"}
            </button>

            {status.type !== "idle" && (
              <p
                className={`text-sm ${
                  status.type === "error" ? "text-red-600" : "text-green-700"
                }`}
              >
                {status.msg}
              </p>
            )}

            <p className="text-xs text-gray-500">
              No spam. Just early access + machine support updates.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}