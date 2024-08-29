"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "French",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message envoyé avec succès!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        country: "French",
        message: "",
      });
    } else {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-4">Contact us</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Hey, you've come this way because you've got something to tell
                us? We'd be happy to answer your questions or poems.
              </p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                    htmlFor="firstName"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="firstName"
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
                    htmlFor="lastName"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="lastName"
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
                    className="form-select w-full"
                    required
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option>French</option>
                    <option>Belgium</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                      htmlFor="message"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <textarea
                    id="message"
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
                    className="btn text-white bg-gradient-to-t from-[#074264] to-[#83A5C7] hover:to-[#1E95D9] w-full shadow-lg group"
                    type="submit"
                  >
                    <span>Send message</span>
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
                  {status && <p className="text-center mt-4">{status}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
