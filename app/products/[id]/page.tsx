"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { medusaClient } from "@/lib/medusa-client";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await medusaClient.products.retrieve(params.id as string);
        setProduct(response.product);
        if (response.product.variants && response.product.variants.length > 0) {
          setSelectedVariant(response.product.variants[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Impossible de charger le produit. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    // This would integrate with a cart context/state management
    alert("Fonctionnalité panier à venir!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error || "Produit non trouvé"}
          </div>
          <Link href="/products" className="text-blue-600 hover:underline">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/products" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Retour aux produits
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              {product.thumbnail ? (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  Pas d'image disponible
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              {product.description && (
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
              )}

              {selectedVariant && (
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600">
                    {(selectedVariant.prices[0].amount / 100).toFixed(2)} €
                  </p>
                </div>
              )}

              {product.variants && product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Variante
                  </label>
                  <select
                    value={selectedVariant?.id}
                    onChange={(e) => {
                      const variant = product.variants.find((v: any) => v.id === e.target.value);
                      setSelectedVariant(variant);
                    }}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    {product.variants.map((variant: any) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ajouter au panier
              </button>

              {product.material && (
                <div className="mt-8 border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Matériau</h3>
                  <p className="text-gray-600">{product.material}</p>
                </div>
              )}

              {product.weight && (
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Poids</h3>
                  <p className="text-gray-600">{product.weight} g</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
