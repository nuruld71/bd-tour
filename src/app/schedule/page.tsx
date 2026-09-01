import Link from "next/link";
import { schedules } from "@/lib/data";

export const metadata = {
  title: "Tour Schedule | TourBangladesh",
  description:
    "Check upcoming tour dates and join scheduled group tours across Bangladesh.",
};

export default function SchedulePage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Upcoming Tour Schedule
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Join our scheduled group departures. Secure your spot today — spots
            fill up fast during peak season.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {schedules.map((s) => {
              const lowSpots = s.spotsLeft <= 6;
              return (
                <div
                  key={s.title + s.date}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 text-center">
                      <span className="text-xl font-extrabold leading-none text-brand-700">
                        {s.date.split(" ")[1]}
                      </span>
                      <span className="mt-1 text-[11px] font-semibold uppercase text-brand-600">
                        {s.date.split(" ")[0]}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
                      <p className="mt-1 text-sm text-gray-500">
                        📍 {s.destination} · ⏱️ {s.duration} · 📅 {s.date}
                      </p>
                      <span
                        className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          lowSpots
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {lowSpots
                          ? `Only ${s.spotsLeft} spots left!`
                          : `${s.spotsLeft} spots available`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                    <span className="text-xl font-extrabold text-gray-900">
                      ৳{s.price.toLocaleString()}
                    </span>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                      Reserve Spot
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white">
              Planning a Custom Date?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-300">
              We can arrange private departures on any date for groups large and
              small. Tell us your preferred timing.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
            >
              Request Custom Date
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
