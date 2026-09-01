import Link from "next/link";

export const metadata = {
  title: "About Us | TourBangladesh",
  description: "Learn about TourBangladesh and why travelers trust us.",
};

const values = [
  {
    title: "Local Experts",
    description:
      "Our guides are born-and-raised locals who know every hidden trail, food spot, and story.",
  },
  {
    title: "Small Groups",
    description:
      "We keep groups small for a personal, comfortable, and authentic travel experience.",
  },
  {
    title: "Fair & Transparent",
    description:
      "Clear pricing, no hidden fees, and fair wages for our local partners and guides.",
  },
  {
    title: "Safe Travel",
    description:
      "Safety is our top priority with vetted transport, hotels, and 24/7 support.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Tour",
    description: "Browse our packages, places, and schedule to find your perfect adventure.",
  },
  {
    step: "2",
    title: "Book Your Spot",
    description: "Reserve online or contact us to customize your itinerary and dates.",
  },
  {
    step: "3",
    title: "Travel & Explore",
    description: "Sit back, relax, and explore beautiful Bangladesh with our expert guides.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            About TourBangladesh
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            We&apos;re on a mission to share the breathtaking beauty of Bangladesh
            with the world — one unforgettable journey at a time.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
                alt="Bangladesh nature"
                className="aspect-4/3 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Why Explore Bangladesh With Us?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Bangladesh is a land of incredible natural beauty — from the
                world&apos;s longest beach at Cox&apos;s Bazar and the tiger-filled
                Sundarbans to endless tea gardens in Sylhet and the scenic hills of
                Bandarban. Yet so much of it remains undiscovered.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We&apos;re a team of passionate local travel experts who design tours
                that combine adventure, culture, comfort, and safety. Whether you&apos;re
                a solo backpacker, a family, or a corporate group, we craft journeys
                that leave you with stories for a lifetime.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/packages"
                  className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
                >
                  Browse Packages
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-brand-600 px-6 py-3 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
            What We Stand For
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
            How It Works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div
                key={h.step}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-xl font-extrabold text-white">
                  {h.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
