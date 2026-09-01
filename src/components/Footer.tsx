import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "/places" },
      { label: "Tour Packages", href: "/packages" },
      { label: "Upcoming Tours", href: "/schedule" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    title: "Top Places",
    links: [
      { label: "Cox's Bazar", href: "/places" },
      { label: "Sundarbans", href: "/places" },
      { label: "Srimangal", href: "/places" },
      { label: "Bandarban", href: "/places" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Tour", href: "/contact" },
      { label: "Travel Tips", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-lg font-bold text-white">
                BD
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Tour<span className="text-brand-400">Bangladesh</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Discover the beauty, culture, and adventure of Bangladesh with
              expertly crafted tours across the country&apos;s most stunning
              destinations.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TourBangladesh. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ in Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
