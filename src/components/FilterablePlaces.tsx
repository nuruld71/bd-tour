"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Place } from "@/lib/data";

export default function FilterablePlaces({
  places,
  divisions,
}: {
  places: Place[];
  divisions: string[];
}) {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return places.filter((p) => {
      const matchDivision = filter === "All" || p.division === filter;
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase());
      return matchDivision && matchSearch;
    });
  }, [filter, search, places]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === "All"
                ? "bg-brand-600 text-white"
                : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-brand-50"
            }`}
          >
            All
          </button>
          {divisions.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === d
                  ? "bg-brand-600 text-white"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-brand-50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search places..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 md:w-72"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-lg text-gray-500">
          No places found. Try adjusting your search or filter.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((place) => (
            <article
              key={place.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {place.division}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">{place.name}</h2>
                  <span className="flex items-center gap-1 text-sm font-semibold text-sunset-600">
                    ⭐ {place.rating}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {place.description}
                </p>
                <p className="mt-3 text-xs font-medium text-gray-500">
                  🗓️ Best time to visit: <span className="text-brand-700">{place.bestTime}</span>
                </p>
                <Link
                  href={`/places/${place.slug}`}
                  className="mt-4 inline-block rounded-lg bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
                >
                  Explore →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
