import { useState } from "react";
import {
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { SiMedium } from "react-icons/si";
import photo from "../assets/img-1.jpeg";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "b9c91eb6-32d2-4723-9978-9b5ffb66444b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert(result.message || "Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          &lt; Get In <span className="text-sky-500">Touch /&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Card */}
          <div className="z-1000 rounded-xl p-8 shadow-md flex flex-col items-center text-center w-full max-w-md mx-auto">
            <img
              src={photo}
              alt="Anaya Garde"
              className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-sky-500 shadow-sm"
            />
            <h3 className="text-2xl font-bold mb-1">Anaya Garde</h3>
            <p className="text-sm mb-6">anayasuh@usc.edu</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="text-sky-500 w-5 h-5" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/anayagarde" target="_blank">
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
              </a>
              <a href="https://github.com/anayagarde" target="_blank">
                <Github className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
              </a>
              <a href="https://twitter.com/anayagarde" target="_blank">
                <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
              </a>
              <a href="https://medium.com/@anayagarde" target="_blank">
                <SiMedium className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 border bg-card rounded-xl shadow z-1000">
            <h3 className="text-xl font-medium mb-6">
              Have something in mind? Let’s talk!
            </h3>
            {success && (
              <p className="mb-4 text-green-600 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  name="name" // ✅ REQUIRED
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  name="email" // ✅ REQUIRED
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message" // ✅ REQUIRED
                  rows="4"
                  required
                  placeholder="I’d love to hear from you!"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
