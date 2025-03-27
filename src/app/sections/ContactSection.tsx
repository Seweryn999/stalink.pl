"use client";
import { useState } from "react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // symulacja wysyłania
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-48 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-4xl">
        {/* Nagłówek */}
        <header className="mb-20 text-center animate-pulse-slow">
          <h2 className="text-5xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            Skontaktuj się ze mną
          </h2>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-8 text-gray-300 font-mono text-lg max-w-2xl mx-auto leading-relaxed">
            Masz pytanie, pomysł lub ofertę współpracy? Wypełnij formularz, a
            odezwę się najszybciej jak to możliwe.
          </p>
        </header>

        {/* Karta */}
        <div className="bg-gray-950/80 backdrop-blur-md border border-gray-800 shadow-2xl rounded-2xl p-10 md:p-16 transition-all">
          {submitted ? (
            <div className="text-center text-blue-400 text-xl font-semibold">
              ✨ Wiadomość została wysłana. Dziękuję!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Imię */}
              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  name="name"
                  type="text"
                  placeholder="Imię"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Wiadomość */}
              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <textarea
                  name="message"
                  placeholder="Twoja wiadomość"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              {/* Przyciski */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-md text-center font-semibold font-mono border border-blue-400 transition-all ${
                  loading
                    ? "bg-blue-400 text-black cursor-not-allowed animate-pulse"
                    : "text-blue-400 hover:bg-blue-400 hover:text-black"
                }`}
              >
                {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
