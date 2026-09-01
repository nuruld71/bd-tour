import Link from "next/link";
import { places } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) return { title: "Place Not Found" };
  return {
    title: `${place.name} | TourBangladesh`,
    description: place.description,
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <span className="text-6xl">🔍</span>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          Place Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          The place you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/places"
          className="mt-6 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Browse All Places
        </Link>
      </div>
    );
  }

  const related = places
    .filter((p) => p.slug !== place.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-120 w-full overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute left-0 top-0 z-10 w-full p-6">
          <nav className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/places" className="transition hover:text-white">
              Places
            </Link>
            <span>/</span>
            <span className="text-white">{place.name}</span>
          </nav>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-6 sm:p-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                {place.division}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                ⭐ {place.rating}
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {place.name}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
              📍 {place.location}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg">🗓️</span>
              <div>
                <p className="font-medium text-gray-900">Best Time to Visit</p>
                <p>{place.bestTime}</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-gray-200 sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg">📍</span>
              <div>
                <p className="font-medium text-gray-900">Division</p>
                <p>{place.division}</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-gray-200 sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg">⭐</span>
              <div>
                <p className="font-medium text-gray-900">Rating</p>
                <p>{place.rating} / 5.0</p>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Book a Tour
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              About {place.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {place.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Things to Do */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Things to Do
            </h2>
            <p className="mt-3 text-gray-500">
              Experiences you won&apos;t want to miss at {place.name}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {place.highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-2xl transition group-hover:bg-brand-100">
                    {h.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {h.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Photo Gallery
            </h2>
            <p className="mt-3 text-gray-500">
              A glimpse of what awaits you at {place.name}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {place.gallery.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`${place.name} photo ${i + 1}`}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    i === 0
                      ? "aspect-4/3 col-span-2 row-span-2 lg:col-span-2 lg:row-span-2"
                      : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Tour CTA */}
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Explore {place.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Let us craft a personalised tour for you. Local guides, comfortable
            transport, and unforgettable experiences — all included.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-brand-700 shadow transition hover:bg-brand-50"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/packages"
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Related Places */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Explore More Places
              </h2>
              <p className="mt-2 text-gray-500">
                Discover other amazing destinations in Bangladesh
              </p>
            </div>
            <Link
              href="/places"
              className="hidden text-sm font-semibold text-brand-600 transition hover:text-brand-700 sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/places/${r.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {r.division}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      {r.name}
                    </h3>
                    <span className="flex items-center gap-1 text-sm font-semibold text-sunset-600">
                      ⭐ {r.rating}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {r.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/places"
              className="text-sm font-semibold text-brand-600 transition hover:text-brand-700"
            >
              View All Places →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
