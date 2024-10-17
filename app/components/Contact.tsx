"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-32 bg-[#141414]" id="contact">
      <div className="container">
        <h2 className=" font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-b from-slate-500 via-slate-100 to-slate-500 bg-transparent h-full mb-6 text-center">
          Contact Me
        </h2>

        {formSubmitted && (
          <div className="p-4 mb-4 text-green-800 bg-green-200 rounded container">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/contact.jpg" // Replace with your image path
              alt="Contact Illustration"
              className="max-w-full h-auto rounded shadow-lg"
            />
          </div>

          {/* Form Section */}
          <form
            action="https://formsubmit.co/hernandoabella@gmail.com"
            method="POST"
            onSubmit={() => setFormSubmitted(true)}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Anti-Spam hidden field (optional) */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Submit Button */}
            <div>
              <button
                className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
