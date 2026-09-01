"use client";

import { useState } from "react";
import { packages, tourTypes } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    date: "",
    groupSize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500 text-3xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
          Request Received!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-gray-600">
          Thank you, {form.name || "traveler"}! Our team will get back to you within
          24 hours to finalize your tour booking.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              tour: "",
              date: "",
              groupSize: "",
              message: "",
            });
          }}
          className="mt-6 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+880 1XXX-XXXXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Group Size</label>
          <select
            name="groupSize"
            value={form.groupSize}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select group size</option>
            <option value="1-2">1 - 2 people</option>
            <option value="3-5">3 - 5 people</option>
            <option value="6-10">6 - 10 people</option>
            <option value="10+">10+ people</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Tour Package</label>
          <select
            name="tour"
            value={form.tour}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a package (optional)</option>
            {packages.map((p) => (
              <option key={p.title} value={p.title}>
                {p.title}
              </option>
            ))}
            {tourTypes.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name} (custom)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Preferred Travel Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your dream trip..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
