"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE FOR THE BUSINESS OWNER / DEVELOPER:
    // This form currently only shows a confirmation message in the browser —
    // it does not send data anywhere yet, and nothing is published to the
    // Reviews section automatically. To store and moderate real submissions,
    // connect this form to a backend, for example:
    //   - a Next.js API route (app/api/feedback/route.ts) that saves to a
    //     database (e.g. Postgres, MongoDB, Supabase, Firebase), or
    //   - a form service such as Formspree / Google Forms / a spreadsheet.
    // New submissions should be reviewed by the shop before appearing in the
    // public "What Our Customers Say" section.
    setSubmitted(true);
  };

  return (
    <section className="bg-blush/30 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          title="💬 Share Your Experience"
          subtitle="How was your experience? Your feedback helps us improve."
        />

        <Reveal>
          <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-scoop sm:p-10">
            {submitted ? (
              <div className="text-center">
                <p className="text-4xl">🍨</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-cocoa">
                  Thank you for your feedback!
                </h3>
                <p className="mt-2 text-sm text-cocoa/70">
                  We appreciate you taking the time to share your experience.
                  Our team will review it shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setRating(0);
                  }}
                  className="mt-5 rounded-full bg-berry px-5 py-2.5 text-sm font-bold text-cream"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fb-name" className="mb-1.5 block text-sm font-semibold text-cocoa">
                    Customer Name
                  </label>
                  <input
                    id="fb-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/40 focus:border-berry"
                  />
                </div>

                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-cocoa">
                    Rating
                  </span>
                  <div className="flex gap-1 text-3xl" role="radiogroup" aria-label="Rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        role="radio"
                        aria-checked={rating === star}
                        aria-label={`${star} star${star > 1 ? "s" : ""}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="leading-none transition-transform hover:scale-110"
                      >
                        <span
                          className={
                            (hoverRating || rating) >= star
                              ? "text-sunshine-dark"
                              : "text-cocoa/20"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="fb-text" className="mb-1.5 block text-sm font-semibold text-cocoa">
                    Your Feedback
                  </label>
                  <textarea
                    id="fb-text"
                    name="feedback"
                    required
                    rows={4}
                    placeholder="Write your feedback here"
                    className="w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-cocoa/40 focus:border-berry"
                  />
                </div>

                <div>
                  <label htmlFor="fb-photo" className="mb-1.5 block text-sm font-semibold text-cocoa">
                    Photo (optional)
                  </label>
                  <input
                    id="fb-photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    className="w-full rounded-xl border border-dashed border-cocoa/25 bg-cream px-4 py-3 text-sm text-cocoa/70 file:mr-3 file:rounded-full file:border-0 file:bg-blush file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-cocoa"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-berry px-6 py-3.5 text-sm font-bold text-cream shadow-scoop transition-transform hover:-translate-y-0.5 hover:bg-berry-dark sm:text-base"
                >
                  Submit Feedback
                </button>

                <p className="text-center text-xs text-cocoa/50">
                  Submissions are reviewed by our team before being shared
                  publicly.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
