"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen  from-black to-gray-900 flex items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">
            Skontaktuj się
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Masz pytanie lub propozycję? Napisz do mnie, a odpowiem najszybciej
            jak mogę.
          </p>
        </header>

        {/* Form */}
        {submitted ? (
          <div className="text-center text-white text-xl font-medium animate-fade-in">
            ✓ Wiadomość wysłana! Dziękuję za kontakt.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-800/20 rounded-xl blur-sm group-hover:bg-gray-800/30 transition-all"></div>
              <div className="relative flex items-center gap-3 px-4 py-3 bg-transparent border border-gray-700 rounded-xl focus-within:border-white/50">
                <User className="text-gray-500" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Twoje imię"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-800/20 rounded-xl blur-sm group-hover:bg-gray-800/30 transition-all"></div>
              <div className="relative flex items-center gap-3 px-4 py-3 bg-transparent border border-gray-700 rounded-xl focus-within:border-white/50">
                <Mail className="text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Twój email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-800/20 rounded-xl blur-sm group-hover:bg-gray-800/30 transition-all"></div>
              <div className="relative flex gap-3 px-4 py-3 bg-transparent border border-gray-700 rounded-xl focus-within:border-white/50 items-start">
                <MessageSquare className="text-gray-500 mt-1" size={20} />
                <textarea
                  name="message"
                  placeholder="Twoja wiadomość"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="relative group flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`relative px-8 py-2 rounded-md font-medium text-white transition-all duration-150 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-md active:bg-blue-800 active:shadow-inner active:translate-y-1"
                }`}
              >
                <span className="relative z-10">
                  {loading ? "Wysyłanie..." : "Wyślij"}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
