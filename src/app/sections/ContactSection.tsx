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
      className="py-48 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-4xl">
        {/* Nagłówek */}
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            Skontaktuj się ze mną
          </h2>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-8 text-gray-300 font-mono text-lg max-w-2xl mx-auto leading-relaxed">
            Masz pytanie, pomysł lub ofertę współpracy? Wypełnij formularz, a
            odezwę się najszybciej jak to możliwe.
          </p>
        </header>

        {/* Formularz */}
        <div className="bg-gray-950/80 backdrop-blur-md border border-gray-800 shadow-2xl rounded-2xl p-10 md:p-16 transition-all">
          {submitted ? (
            <div className="text-center text-blue-400 text-xl font-semibold">
              ✨ Wiadomość została wysłana. Dziękuję!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-16">
              {/* Imię */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <User className="text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Imię"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 !outline-none !ring-0"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 !outline-none !ring-0"
                  required
                />
              </div>

              {/* Wiadomość */}
              <div className="flex gap-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus-within:ring-2 focus-within:ring-blue-500 items-start">
                <MessageSquare className="text-gray-400 mt-1" size={20} />
                <textarea
                  name="message"
                  placeholder="Twoja wiadomość"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 !outline-none !ring-0 resize-none"
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
