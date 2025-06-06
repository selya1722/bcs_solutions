"use client";

import { FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-light-gray text-primary-dark" id="contact-us">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">Get in Touch with Us</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Have questions or ready to enhance your security? Contact us today for a personalized security assessment.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
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
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 border rounded-md"
                  placeholder="How can we help you?"
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
                Send Message
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">Colombo, Sri Lanka</p>
            <p className="mb-4">Phone: +94 77 710 9874</p>
            <p className="mb-4">Emergency Line: +94 77 710 9874</p>
            <p className="mb-4">Email: bcssolutions12@gmail.com</p>
           
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.03168408504!2d80.00621794999996!3d6.845091950000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2518e99e2ee8d%3A0xc3eebfdbc86273ee!2sHomagama!5e0!3m2!1sen!2slk!4v1749043171608!5m2!1sen!2slk"
  width="600"
  height="450"
  style={{
    border: 0,
    borderRadius: '8px',
    overflow: 'hidden'
  }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;