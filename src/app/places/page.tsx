import { places } from "@/lib/data";
import FilterablePlaces from "@/components/FilterablePlaces";

export const metadata = {
  title: "Places & Destinations | TourBangladesh",
  description: "Explore all the stunning places and destinations across Bangladesh.",
};

export default function PlacesPage() {
  const divisions = Array.from(new Set(places.map((p) => p.division)));

  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Places &amp; Destinations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            From sun-kissed beaches and lush tea gardens to ancient heritage sites
            and misty hill tracks — find the perfect place to explore.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <FilterablePlaces places={places} divisions={divisions} />
      </section>
    </div>
  );
}
