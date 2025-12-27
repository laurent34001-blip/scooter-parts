"use client";

export default function BrandsSection() {
  const brands = [
    {
      column: 1,
      items: [
        { name: "Xiaomi", model: "(Mi Electric Scooter)" },
        { name: "Segway-Ninebot", model: "" },
        { name: "Dualtron", model: "(Mini, Thunder, Ultra)" },
        { name: "Kaabo", model: "(Mantis, Wolf Warrior)" },
        { name: "E-Twow", model: "(Booster, GT)" },
        { name: "Inokim", model: "(Oxo, Quick 4)" },
        { name: "Unagi", model: "(Model One)" },
        { name: "Apollo", model: "(City, Explore)" },
        { name: "Razor", model: "(E Prime, E100)" },
        { name: "Mercane", model: "(WideWheel)" },
        { name: "Weped", model: "(GT, S)" },
        { name: "Gogoro", model: "(VIVA, Eeyo)" },
        { name: "Niu", model: "(KQi3, KQi2)" },
      ],
    },
    {
      column: 2,
      items: [
        { name: "Zero Motorcycles", model: "" },
        { name: "NIU Technologies", model: "" },
        { name: "Ola Electric", model: "(S1, S1 Pro)" },
        { name: "Ather Energy", model: "(450X, 450 Plus)" },
        { name: "TVS iQube", model: "" },
        { name: "Bajaj Chetek EV", model: "" },
        { name: "Hero Electric", model: "(Optima, Photon)" },
        { name: "Ampere Vehicles", model: "(Zeal, Magnus)" },
        { name: "Okaya", model: "(ClassIQ, Freedom)" },
        { name: "Pure EV", model: "(Epluto, ETrance)" },
      ],
    },
    {
      column: 3,
      items: [
        { name: "Evolet", model: "(Raptor, Derby)" },
        { name: "Emflux", model: "(One, Two)" },
        { name: "Ultraviolette Automotive", model: "(F77)" },
        { name: "Tork Motors", model: "(Kratos, Kratos R)" },
        { name: "Revolt Motors", model: "(RV400, RV300)" },
        { name: "Techo Electra", model: "(Raptor, Neo)" },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">🔍 Marques les plus recherchées</h2>
        <p className="text-sm text-gray-600">Trouvez les pièces détachées pour votre marque préférée</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((column) => (
            <div key={column.column} className="space-y-2">
              {column.items.map((item, index) => (
                <div key={index} className="hover:bg-blue-50 px-2 py-1.5 rounded transition-colors cursor-pointer">
                  <a href={`/products?brand=${encodeURIComponent(item.name)}`} className="text-gray-800 hover:text-blue-600 font-medium text-sm">
                    {item.name}
                  </a>
                  {item.model && (
                    <span className="text-xs text-gray-500"> {item.model}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-3">Vous ne trouvez pas votre marque ?</p>
        <a
          href="/request-parts"
          className="inline-block text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
          style={{ backgroundColor: '#007BFF' }}
        >
          📋 Demander une pièce détachée
        </a>
      </div>
    </section>
  );
}
