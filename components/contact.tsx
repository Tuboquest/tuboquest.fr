"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    // Paramètres pour EmailJS
    const serviceID = process.env.VITE_REACT_APP_SERVICE_ID ?? "";
    const templateID = process.env.VITE_REACT_APP_TEMPLATE_ID ?? "";
    const userID = process.env.VITE_REACT_APP_PUBLIC_KEY ?? "";

    try {
      // Envoyer l'email via EmailJS
      await emailjs.send(serviceID, templateID, formData, userID);
      setSuccess(true);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError(err.text || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 font-red-hat-display mb-4">Contact us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hey, you've come this way because you've got something to tell us?
              We'd be happy to answer your questions or poems.
            </p>
          </div>

          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="first-name"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your first name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="last-name"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input w-full"
                  placeholder="Enter your phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="country"
                >
                  Country <span className="text-red-600">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  className="form-select w-full"
                  required
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select a country</option>
                  <option value="French">French</option>
                  <option value="Belgium">Belgium</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea w-full"
                  placeholder="Write your message here"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className="btn text-white bg-gradient-to-t from-[#074264] to-[#83A5C7] hover:to-[#1E95D9] w-full shadow-lg group"
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : "Send message"}</span>
                  <svg
                    className="w-3 h-3 shrink-0 mt-px ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current"
                      d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                    />
                  </svg>
                </button>
                {success && (
                  <p className="text-green-500 mt-3">
                    Email sent successfully!
                  </p>
                )}
                {error && <p className="text-red-500 mt-3">{error}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
