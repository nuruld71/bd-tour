import Link from "next/link";
import { packages, places, tourTypes } from "@/lib/data";

export default function HomePage() {
  const featured = places.slice(0, 6);
  const popularPackages = packages.filter((p) => p.popular).concat(packages.filter((p) => !p.popular)).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
            alt="Bangladesh"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-liner-to-r from-black/75 via-black/50 to-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-brand-500/20 px-4 py-1.5 text-sm font-semibold text-gray-200 ring-1 ring-inset ring-brand-400/40">
              🍃 Discover Beautiful Bangladesh
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore the Land of Rivers, Hills &amp; Heritage
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200">
              From the world&apos;s longest sea beach at Cox&apos;s Bazar to the
              turquoise waters of Saint Martin&apos;s Island and the tiger-filled
              Sundarbans — experience the best of Bangladesh with curated tours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:bg-brand-700"
              >
                View Tour Packages
              </Link>
              <Link
                href="/places"
                className="rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                Explore Places
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "120+", label: "Destinations" },
            { value: "15k+", label: "Happy Travelers" },
            { value: "40+", label: "Curated Tours" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-600">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tour types */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Types of Tours We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Whatever kind of traveler you are, we have a tour built just for you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tourTypes.map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  {t.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured places */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Featured Destinations
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Some of the most loved places in Bangladesh that travelers never stop talking about.
              </p>
            </div>
            <Link
              href="/places"
              className="rounded-lg border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              View All Places →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((place) => (
              <Link
                key={place.name}
                href="/places"
                className="group relative overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm font-medium text-brand-300">{place.division}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{place.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    ⭐ {place.rating} · Best: {place.bestTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular packages */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Popular Tour Packages
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Hand-picked, all-inclusive packages loved by thousands of travelers.
              </p>
            </div>
            <Link
              href="/packages"
              className="rounded-lg border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              All Packages →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {popularPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {pkg.popular && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-sunset-500 px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </span>
                )}
                <img src={pkg.image} alt={pkg.title} className="aspect-16/10 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {pkg.type}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {pkg.duration} · {pkg.groupSize}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-gray-900">
                      ৳{pkg.price.toLocaleString()}
                    </span>
                    {pkg.oldPrice && (
                      <span className="text-sm font-medium text-gray-400 line-through">
                        ৳{pkg.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    Book This Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready for Your Next Adventure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Plan your dream trip to Bangladesh today. Our expert team will help you
            design the perfect itinerary.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-gray-100"
            >
              Get in Touch
            </Link>
            <Link
              href="/schedule"
              className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/40 transition hover:bg-brand-500"
            >
              View Upcoming Tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
