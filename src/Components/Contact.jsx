import React from "react";
import Navbar from "../Reusable/Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
 
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-blue-700">Contact Us</h1>
            <p className="text-gray-700 text-lg">
              Whether you have questions or just want to say hello — we’d love to hear from you!
            </p>
            <div className="space-y-4 text-gray-600 text-base">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">📧</span>
                <p>
                  <span className="font-semibold">Email:</span> example@jobportal.com
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">📞</span>
                <p>
                  <span className="font-semibold">Phone:</span> +977-123456789
                </p>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-lg">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="contact"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="98XXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">How can we help?</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Let us know your query..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
