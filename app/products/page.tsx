import Link from "next/link";
import Image from "next/image";
import { medusaClient } from "@/lib/medusa-client";

export default async function ProductsPage() {
  let products: any[] = [];
  let error: string | null = null;

  try {
    const response = await medusaClient.products.list({ limit: 100 });
    products = response.products || [];
  } catch (err) {
    error = "Impossible de charger les produits. Veuillez réessayer plus tard.";
    console.error("Error fetching products:", err);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Tous nos produits</h1>
        
        {error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Aucun produit disponible pour le moment.</p>
            <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
              Retour à l'accueil
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  {product.thumbnail ? (
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Pas d'image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  {product.variants && product.variants[0] && product.variants[0].prices && product.variants[0].prices[0] && (
                    <p className="text-blue-600 font-bold">
                      {(product.variants[0].prices[0].amount / 100).toFixed(2)} €
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
