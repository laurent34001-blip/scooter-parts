import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Est-ce que je peux réparer ma trottinette moi-même ?",
      excerpt: "Si vous êtes ici, c'est que vous vous posez LA grande question : \"Est-ce que je peux vraiment réparer ma trottinette moi-même ?\" Bonne nouvelle : avec un peu de méthode et les...",
      date: "24 avril 2025",
      category: "Réparation",
      image: "🔧",
      slug: "reparer-trottinette-soi-meme",
    },
    {
      id: 2,
      title: "Quels outils faut-il pour réparer une trottinette électrique ?",
      excerpt: "Vous êtes décidé à réparer votre trottinette électrique vous-même ? Bonne nouvelle : avec un peu de méthode et les bons outils, vous pouvez le faire ! Découvrez la liste complète...",
      date: "22 avril 2025",
      category: "Outils",
      image: "🛠️",
      slug: "outils-reparer-trottinette",
    },
    {
      id: 3,
      title: "Comment diagnostiquer une panne sur une trottinette électrique ?",
      excerpt: "Votre trottinette ne s'allume plus ? Elle freine toute seule ou avance par à-coups ? Pas de panique. Avant de...",
      date: "22 avril 2025",
      category: "Diagnostic",
      image: "🔍",
      slug: "diagnostiquer-panne-trottinette",
    },
    {
      id: 4,
      title: "Entretien régulier : prolongez la durée de vie de votre trottinette",
      excerpt: "Un entretien régulier est la clé pour avoir une trottinette fiable et durable. Découvrez nos conseils pour maintenir votre engin en parfait état...",
      date: "20 avril 2025",
      category: "Entretien",
      image: "🧹",
      slug: "entretien-trottinette",
    },
    {
      id: 5,
      title: "Batterie : comment l'entretenir et l'optimiser ?",
      excerpt: "La batterie est le cœur de votre trottinette électrique. Apprenez comment l'entretenir correctement pour maximiser son autonomie et sa durée de vie...",
      date: "18 avril 2025",
      category: "Batteries",
      image: "🔋",
      slug: "entretenir-batterie-trottinette",
    },
    {
      id: 6,
      title: "Guide des pneus : quel type choisir pour votre trottinette ?",
      excerpt: "Pneus pleins ou à air ? Tubeless ? Découvrez les différentes options et comment choisir les meilleurs pneus pour votre trottinette...",
      date: "15 avril 2025",
      category: "Pneus",
      image: "🛞",
      slug: "guide-pneus-trottinette",
    },
  ];

  const categories = [
    { name: "Tous", slug: "tous" },
    { name: "Réparation", slug: "reparation" },
    { name: "Outils", slug: "outils" },
    { name: "Diagnostic", slug: "diagnostic" },
    { name: "Entretien", slug: "entretien" },
    { name: "Batteries", slug: "batteries" },
    { name: "Pneus", slug: "pneus" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white py-16" style={{ background: "linear-gradient(135deg, #007BFF 0%, #00B089 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Astuces</h1>
          <p className="text-xl text-blue-100">Conseils, tutoriels et astuces pour entretenir et réparer votre trottinette électrique</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className="px-4 py-2 rounded-full font-medium transition-all duration-300 border-2"
              style={{
                borderColor: cat.slug === "tous" ? "#007BFF" : "#e5e7eb",
                color: cat.slug === "tous" ? "white" : "#374151",
                backgroundColor: cat.slug === "tous" ? "#007BFF" : "white",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#007BFF" }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>📅 {article.date}</span>
                  <span>0 Commentaires</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-block font-semibold transition-colors"
                  style={{ color: "#007BFF" }}
                >
                  Lire la suite →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-lg p-12 text-white text-center"
          style={{ background: "linear-gradient(135deg, #007BFF 0%, #00B089 100%)" }}
        >
          <h2 className="text-3xl font-bold mb-4">Recevez nos astuces par email</h2>
          <p className="text-lg mb-8 text-blue-100">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers conseils et astuces pour l'entretien de votre trottinette
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
              style={{ outlineColor: "#007BFF" }}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
