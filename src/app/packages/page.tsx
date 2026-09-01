import Link from "next/link";
import { packages, tourTypes } from "@/lib/data";

export const metadata = {
  title: "Tour Packages | TourBangladesh",
  description:
    "Browse all-inclusive tour packages across Bangladesh — beach, adventure, heritage, and nature tours.",
};

export default function PackagesPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Tour Packages
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            All-inclusive, carefully crafted packages with local guides, transport,
            and accommodation included. Just pack your bag and enjoy.
          </p>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                {pkg.popular && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-sunset-500 px-3 py-1 text-xs font-bold text-white">
                    ⭐ Popular
                  </span>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="aspect-16/10 w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {pkg.type}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{pkg.groupSize}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-gray-900">{pkg.title}</h2>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    ⏱️ {pkg.duration}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 text-brand-600">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-gray-900">
                        ৳{pkg.price.toLocaleString()}
                      </span>
                      {pkg.oldPrice && (
                        <span className="text-base font-medium text-gray-400 line-through">
                          ৳{pkg.oldPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-sm text-gray-500">/ person</span>
                    </div>
                    <Link
                      href="/contact"
                      className="mt-4 block rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour types strip */}
      <section className="border-t border-gray-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
            Tour Types We Specialize In
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tourTypes.map((t) => (
              <div
                key={t.name}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-2xl shadow-sm">
                  {t.icon}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
