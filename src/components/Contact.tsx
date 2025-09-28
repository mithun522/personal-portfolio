import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
      const result = await emailjs.send(
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
    <section
      id="contact"
      className="flex flex-col items-center py-10 bg-blue-50"
    >
      <h1 className="flex items-center text-4xl font-bold mb-5 text-center">
        <FaUser className="mr-2" />
        Get in <span className="text-purple-600 ml-1">Touch</span>
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
        <img
          src="https://img.freepik.com/premium-vector/young-woman-working-laptop-illustration_39663-268.jpg"
          alt="Contact"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
        <div className="flex flex-col w-full md:w-1/2 p-4">
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
                className="w-full pl-12 pr-4 py-3 border rounded-md border-gray-300 focus:border-purple-700 bg-gray-100 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-600"
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
                className="w-full pl-12 pr-4 py-3 border rounded-md border-gray-300 focus:border-purple-700 bg-gray-100 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-600"
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
                className="w-full pl-12 pr-4 py-3 border rounded-md border-gray-300 focus:border-purple-700 bg-gray-100 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-600"
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
                className="w-full pl-12 pr-4 py-3 border rounded-md border-gray-300 focus:border-purple-700 bg-gray-100 text-gray-800 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-600 h-32 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-md flex justify-center items-center font-semibold hover:bg-purple-800 transition duration-300"
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
    </section>
  );
};

export default Contact;
