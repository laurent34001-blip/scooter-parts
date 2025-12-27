"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestParts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    partDescription: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        brand: "",
        model: "",
        partDescription: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="text-white py-12" style={{ background: 'linear-gradient(135deg, #007BFF 0%, #00B089 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demande de pièce détachée</h1>
          <p className="text-xl text-blue-100">Vous ne trouvez pas la pièce que vous cherchez ? Contactez-nous !</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-4">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-bold text-green-800">Demande envoyée avec succès !</h3>
                <p className="text-green-700 mt-1">Merci {formData.name}. Nous vous recontacterons très bientôt à {formData.email}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos informations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+33 6 XX XX XX XX"
                />
              </div>
            </div>

            {/* Scooter Information */}
            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Détails de votre trottinette</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Marque de la trottinette *
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ex: Xiaomi, Ninebot, Segway..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Modèle *
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ex: M365, ES3, Max..."
                  />
                </div>
              </div>
            </div>

            {/* Part Request */}
            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Demande de pièce</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pièce détachée demandée *
                </label>
                <textarea
                  name="partDescription"
                  value={formData.partDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Décrivez la pièce détachée que vous recherchez (ex: Batterie, plateau, roue avant, contrôleur, etc.)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message supplémentaire
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Informations supplémentaires, spécifications, etc. (optionnel)"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#007BFF' }}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block animate-spin">⚙️</span>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Envoyer la demande</span>
                  </>
                )}
              </button>
              <Link href="/">
                <button
                  type="button"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Annuler
                </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">⏱️ Délai de réponse</h3>
            <p className="text-gray-600">Nous vous répondons dans les 24h ouvrables</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📞 Contactez-nous</h3>
            <p className="text-gray-600">contact@trottipieces.fr</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Satisfaction</h3>
            <p className="text-gray-600">Nous trouverons la pièce parfaite</p>
          </div>
        </div>
      </section>
    </div>
  );
}
