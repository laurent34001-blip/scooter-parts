"use client";

import Link from "next/link";
import { useState } from "react";

export default function CategoriesSection() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    {
      id: 1,
      title: "Moteurs",
      emoji: "⚙️",
      items: [
        { name: "Moteurs avant", slug: "moteurs-avant" },
        { name: "Moteurs arrière", slug: "moteurs-arriere" },
        { name: "Capteurs Hall", slug: "capteurs-hall" },
        { name: "Câbles moteurs", slug: "cables-moteurs" },
      ],
    },
    {
      id: 2,
      title: "Roues & Pneus",
      emoji: "🛞",
      items: [
        {
          name: "Roues",
          slug: "roues",
          subcategories: [
            { name: "Roues arrière", slug: "roues-arriere" },
            { name: "Roues avant", slug: "roues-avant" },
          ],
        },
        {
          name: "Pneus",
          slug: "pneus",
          subcategories: [
            { name: "Pneus pleins", slug: "pneus-pleins" },
            { name: "Pneus à chambres à air", slug: "pneus-chambres" },
            { name: "Pneus tubeless", slug: "pneus-tubeless" },
          ],
        },
        { name: "Chambres à air", slug: "chambres-air" },
        { name: "Jantes", slug: "jantes" },
      ],
    },
    {
      id: 3,
      title: "Électronique",
      emoji: "🔌",
      items: [
        {
          name: "Batteries",
          slug: "batteries",
          subcategories: [
            { name: "Batteries complètes", slug: "batteries-completes" },
            { name: "BMS (Battery Management Systems)", slug: "bms" },
            { name: "Câbles de batteries", slug: "cables-batteries" },
            { name: "Ports de charge", slug: "ports-charge" },
          ],
        },
        { name: "Contrôleurs", slug: "controleurs" },
        {
          name: "Chargeurs",
          slug: "chargeurs",
          subcategories: [
            { name: "Chargeurs standards", slug: "chargeurs-standards" },
            { name: "Chargeurs rapides", slug: "chargeurs-rapides" },
          ],
        },
        { name: "Klaxons / Avertisseurs sonores", slug: "klaxons" },
        {
          name: "Commandes",
          slug: "commandes",
          subcategories: [
            { name: "Accélérateurs", slug: "accelerateurs" },
            { name: "Gâchettes de frein", slug: "gachettes-frein" },
            { name: "Afficheurs / Écrans LCD", slug: "afficheurs" },
          ],
        },
        {
          name: "Éclairages",
          slug: "eclairages",
          subcategories: [
            { name: "Phares avant", slug: "phares-avant" },
            { name: "Feux arrière", slug: "feux-arriere" },
            { name: "Bandes LED", slug: "bandes-led" },
            { name: "Clignotants", slug: "clignotants" },
          ],
        },
        {
          name: "Câblages",
          slug: "cablages",
          subcategories: [
            { name: "Accessoires de câbles", slug: "accessoires-cables" },
            { name: "Câbles", slug: "cables" },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Freinage",
      emoji: "🛑",
      items: [
        { name: "Tambours", slug: "tambours" },
        { name: "Disques de frein", slug: "disques-frein" },
        { name: "Étriers de frein", slug: "etriers-frein" },
        { name: "Plaquettes de frein", slug: "plaquettes-frein" },
        { name: "Leviers de frein", slug: "leviers-frein" },
        { name: "Câbles de frein", slug: "cables-frein" },
      ],
    },
    {
      id: 5,
      title: "Suspensions & Amortisseurs",
      emoji: "🔧",
      items: [
        { name: "Amortisseurs", slug: "amortisseurs" },
        {
          name: "Suspensions",
          slug: "suspensions",
          subcategories: [
            { name: "Suspensions avant", slug: "suspensions-avant" },
            { name: "Suspensions arrière", slug: "suspensions-arriere" },
          ],
        },
        { name: "Amortisseurs de direction", slug: "amortisseurs-direction" },
      ],
    },
    {
      id: 6,
      title: "Châssis & Structure",
      emoji: "🏗️",
      items: [
        {
          name: "Systèmes de pliage",
          slug: "systemes-pliage",
          subcategories: [{ name: "Crochets de pliage", slug: "crochets-pliage" }],
        },
        {
          name: "Plateaux complets",
          slug: "plateaux",
          subcategories: [
            { name: "Repose-pieds", slug: "repose-pieds" },
            { name: "Béquilles", slug: "bequilles" },
          ],
        },
        { name: "Grips antidérapants / Tapis", slug: "grips" },
        {
          name: "Garde-boues",
          slug: "garde-boues",
          subcategories: [
            { name: "Garde-boues avant", slug: "garde-boues-avant" },
            { name: "Garde-boues arrière", slug: "garde-boues-arriere" },
          ],
        },
        {
          name: "Caches latéraux",
          slug: "caches",
          subcategories: [{ name: "Caches boulons", slug: "caches-boulons" }],
        },
        {
          name: "Guidons",
          slug: "guidons",
          subcategories: [
            { name: "Poignées", slug: "poignees" },
            { name: "Têtes de guidon", slug: "tetes-guidon" },
          ],
        },
        {
          name: "Directions",
          slug: "directions",
          subcategories: [
            { name: "Fourches", slug: "fourches" },
            { name: "Colonnes de direction", slug: "colonnes-direction" },
            { name: "Roulements", slug: "roulements" },
          ],
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Toutes les pièces de trottinette électrique</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Header with emoji and title */}
            <div className="bg-gray-50 border-b border-gray-300 px-4 py-4 flex items-center gap-3">
              <span className="text-2xl">{category.emoji}</span>
              <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
            </div>

            {/* Items list */}
            <div className="px-4 py-4 space-y-2">
              {category.items.map((item, index) => {
                const itemId = `${category.id}-${index}`;
                const isExpanded = expandedItems.includes(itemId);
                const hasSubcategories = item.subcategories && item.subcategories.length > 0;

                return (
                  <div key={index}>
                    <div className="flex items-start gap-2">
                      {hasSubcategories && (
                        <button
                          onClick={() => toggleExpand(itemId)}
                          className="mt-1.5 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <span className={`inline-block transition-transform ${isExpanded ? "rotate-90" : ""}`}>
                            ▶
                          </span>
                        </button>
                      )}
                      {!hasSubcategories && <div className="w-4" />}
                      <Link
                        href={`/products?category=${encodeURIComponent(item.slug)}`}
                        className="block text-gray-700 hover:text-blue-600 text-sm py-1.5 flex-1"
                      >
                        {item.name}
                      </Link>
                    </div>

                    {/* Subcategories */}
                    {hasSubcategories && isExpanded && (
                      <div className="ml-6 space-y-1 mt-1">
                        {item.subcategories.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`/products?category=${encodeURIComponent(sub.slug)}`}
                            className="block text-orange-500 hover:text-orange-600 text-sm py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
