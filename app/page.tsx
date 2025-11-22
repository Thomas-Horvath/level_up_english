import Link from "next/link";
import { course } from "@/lib/courseData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="flex flex-col py-10 gap-6">
          <span className="text-sm uppercase tracking-[0.2em] text-sky-400">
            Online English Course
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {course.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            {course.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-3 rounded-full
                         font-medium
                         bg-sky-500 hover:bg-sky-400
                         transition
                         text-slate-950"
            >
              Join with demo account
            </Link>
            <Link
              href="#pricing"
              className="text-sm hover:underline text-slate-300 hover:text-slate-100 underline-offset-4"
            >
              Árak
            </Link>
          </div>
        </section>

        {/* What you learn */}
        <section className="py-10">
          <h2 className="mb-4 text-2xl font-semibold">Mit fogunk tanulni?</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-slate-300">
            {course.whatYouLearn.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Modules overview */}
        <section className="py-10">
          <h2 className="mb-4 text-2xl font-semibold">Course modules</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.modules.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl p-4 border border-slate-800 bg-slate-900/40"
              >
                <h3 className="mb-2 font-semibold">{m.title}</h3>
                <p className="mb-3 text-sm text-slate-300">{m.description}</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  {m.lessons.map((l) => (
                    <li key={l.id}>
                      • {l.title} <span className="opacity-70">({l.duration})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10">
          <h2 className="mb-4 text-2xl font-semibold">Pricing</h2>
          <div className="rounded-2xl p-6 border border-slate-800 bg-slate-900/50">
            <p className="mb-2 text-3xl font-semibold">
              {course.price} {course.currency}
            </p>
            <p className="mb-4 text-sm text-slate-300">
              One-time payment, lifetime access to all modules and future updates.
            </p>
            <Link
              href="/login"
              className="inline-flex
                         px-6 py-3 rounded-full
                         font-medium
                         bg-sky-500 hover:bg-sky-400
                         transition
                         text-slate-950"
            >
              Get started (demo purchase)
            </Link>
            <p className="mt-3 text-xs text-slate-400">
              This is a demo project – purchase and login are simulated on the frontend.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
