"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center max-w-md w-full">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500 text-3xl text-white">
            ✓
          </div>
          <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
            Account Created!
          </h3>
          <p className="mx-auto mt-2 text-gray-600">
            Welcome to BD Trip, {form.name || "traveler"}! Your adventure begins now. Explore amazing destinations across Bangladesh.
          </p>
          <Link
            href="/places"
            className="mt-6 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-linear-to-br from-brand-700 to-brand-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-3xl">
            🌍
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start Your Journey
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-100">
            Create an account to book tours, save your favorite destinations, and get personalized travel recommendations.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">
              Create Account
            </h2>
            <p className="mt-2 text-gray-600 text-center text-sm">
              Fill in your details to get started
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className={inputClass}
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="font-medium text-brand-600 hover:text-brand-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-brand-600 hover:text-brand-700">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
