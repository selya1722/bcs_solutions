"use client";

import { FormEvent, useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Quote request sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", serviceType: "" });
      } else {
        setStatus("Failed to send quote request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="get-a-quote" className="py-16 bg-light-gray text-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Request a Free Quote</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Need tailored security solutions? Fill out the form below to get a personalized quote.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto animate-slide-up">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border rounded-md"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serviceType" className="block mb-2">Service Type</label>
              <select
                id="serviceType"
                className="w-full p-3 border rounded-md"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                required
              >
                <option value="">Select a service</option>
                <option value="Security Guarding">Security Guarding</option>
                <option value="Man Power Supply">Man Power Supply</option>
                <option value="Event Security">Event Security</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Additional Details</label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-md"
                placeholder="Describe your security needs"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-yellow text-primary-dark p-3 rounded-md font-semibold hover:animate-scale-hover active:scale-95"
            >
              Request Quote
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
