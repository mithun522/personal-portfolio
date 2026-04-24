import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const { name, email, phone, message } = formData;

    try {
      await emailjs.send(
        "service_yuuwzoc", // Your Service ID
        "template_8jl67g9", // Your Template ID
        {
          from_name: name,
          email,
          phone,
          message,
        },
        "qrz5tT1BYXAtxD6uT" // Your Public API Key
      );

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-slate-700">
            <FaUser className="text-[var(--accent-strong)]" />
            Contact
          </div>
          <h2 className="mt-4 font-serif text-4xl text-slate-950 md:text-5xl">
            Let&apos;s build something useful together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Open to product-focused frontend and full stack opportunities,
            especially where clean UX, dependable delivery, and modern web
            engineering all matter.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white px-5 py-3 text-sm font-semibold text-slate-800"
          >
            <FaEnvelope className="text-[var(--accent-strong)]" />
            {profile.email}
          </a>
        </div>

        <div className="flex w-full flex-col items-center gap-8 md:flex-row">
        <img
          src="https://img.freepik.com/premium-vector/young-woman-working-laptop-illustration_39663-268.jpg"
          alt="Contact"
          className="w-full rounded-[1.5rem] object-cover md:w-1/2"
        />
        <div className="flex w-full flex-col md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <FaUser
                className="absolute top-4 left-4 text-gray-500"
                size={20}
                aria-label="User Icon"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] py-3 pl-12 pr-4 text-gray-800 outline-none transition focus:border-[var(--accent-strong)] focus:ring-2 focus:ring-[rgba(205,98,48,0.2)]"
                required
              />
            </div>
            <div className="relative mb-4">
              <FaEnvelope
                className="absolute top-4 left-4 text-gray-500"
                size={20}
                aria-label="Envelope Icon"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] py-3 pl-12 pr-4 text-gray-800 outline-none transition focus:border-[var(--accent-strong)] focus:ring-2 focus:ring-[rgba(205,98,48,0.2)]"
                required
              />
            </div>
            <div className="relative mb-4">
              <FaPhoneAlt
                className="absolute top-4 left-4 text-gray-500"
                size={20}
                aria-label="Phone Icon"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] py-3 pl-12 pr-4 text-gray-800 outline-none transition focus:border-[var(--accent-strong)] focus:ring-2 focus:ring-[rgba(205,98,48,0.2)]"
              />
            </div>
            <div className="relative mb-4">
              <AiFillMessage
                className="absolute top-4 left-4 text-gray-500"
                size={20}
                aria-label="Message Icon"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] py-3 pl-12 pr-4 text-gray-800 outline-none transition focus:border-[var(--accent-strong)] focus:ring-2 focus:ring-[rgba(205,98,48,0.2)]"
                required
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-full bg-[var(--accent-strong)] py-3 font-semibold text-white transition duration-300 hover:bg-[var(--accent-dark)]"
              aria-label="Send Message"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
              <FaPaperPlane className="ml-2" size={20} />
            </button>
            {successMessage && (
              <p className="mt-4 text-green-600 text-center">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
