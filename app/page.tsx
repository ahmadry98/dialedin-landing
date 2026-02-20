export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          DialedIn
        </p>

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

          <form className="mt-6 grid gap-3">
            <input className="rounded-xl border px-4 py-3" placeholder="Email (required)" />
            <input className="rounded-xl border px-4 py-3" placeholder="Machine brand + model (required) e.g., Gaggia Classic Pro" />
            <input className="rounded-xl border px-4 py-3" placeholder="Grinder brand + model (optional) e.g., Baratza Sette 270" />
            <textarea className="rounded-xl border px-4 py-3" rows={3} placeholder="Your #1 frustration (optional)"></textarea>

            <button
              type="submit"
              className="rounded-xl bg-black px-4 py-3 font-semibold text-white hover:opacity-90"
            >
              Join waitlist
            </button>

            <p className="text-xs text-gray-500">
              No spam. Just early access + machine support updates.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}