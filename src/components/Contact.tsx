import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4">Email: mithun@example.com</p>
      <p className="mt-2">LinkedIn: <Link to="#" className="text-blue-500">LinkedIn Profile</Link></p>
      <p className="mt-2">GitHub: <Link to="#" className="text-blue-500">GitHub Profile</Link></p>
    </section>
  );
}

export default Contact;
