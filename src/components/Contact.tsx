import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API or email service
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="flex flex-col items-center py-10 bg-blue-50">
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
              <FaUser className="absolute top-4 left-4 text-gray-500" size={20} aria-label="User Icon" />
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
              <FaEnvelope className="absolute top-4 left-4 text-gray-500" size={20} aria-label="Envelope Icon" />
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
              <FaPhoneAlt className="absolute top-4 left-4 text-gray-500" size={20} aria-label="Phone Icon" />
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
              <AiFillMessage className="absolute top-4 left-4 text-gray-500" size={20} aria-label="Message Icon" />
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
            >
              Send Message
              <FaPaperPlane className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
