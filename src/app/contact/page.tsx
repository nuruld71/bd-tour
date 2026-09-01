import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | TourBangladesh",
  description:
    "Get in touch with TourBangladesh to book a tour or ask any questions.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Have a question or ready to book? Send us a message and our team will
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-3 text-gray-600">
              We&apos;re here to help you plan the perfect Bangladesh adventure.
              Reach us through any of the channels below.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Office</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Gulshan Avenue, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="mt-1 text-sm text-gray-600">+880 1712-345678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    hello@tourbangladesh.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-xl">
                  🕐
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Working Hours</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Sat - Thu: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Book a Tour / Send a Message
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form and we&apos;ll tailor a trip just for you.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
