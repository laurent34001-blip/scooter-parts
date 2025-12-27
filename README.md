# Trottipieces - E-commerce pour Pièces de Trottinettes Électriques

Bienvenue sur **Trottipieces**, une plateforme e-commerce moderne construite avec Next.js pour la vente de pièces détachées pour trottinettes électriques. Ce projet est une refonte du site trottipieces.fr.

## 🚀 Technologies Utilisées

- **Next.js 16** - Framework React pour les applications web
- **TypeScript** - Pour un code plus sûr et maintenable
- **Tailwind CSS 4** - Framework CSS utilitaire pour un design moderne
- **Medusa.js** - Plateforme e-commerce headless
- **API Medusa** - Connecté à `vraiapi.trottipieces.fr`

## 📋 Prérequis

- Node.js 18 ou supérieur
- npm ou yarn

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone <repository-url>
cd scooter-parts
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
Créez un fichier `.env.local` basé sur `.env.example` :
```bash
cp .env.example .env.local
```

Le fichier `.env.local` doit contenir :
```
NEXT_PUBLIC_MEDUSA_API_URL=https://vraiapi.trottipieces.fr
```

## 🚀 Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📦 Build de Production

Pour créer une version de production :

```bash
npm run build
```

Pour lancer la version de production :

```bash
npm start
```

## 🏗️ Structure du Projet

```
scooter-parts/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── products/          # Pages produits
│   │   ├── page.tsx       # Liste des produits
│   │   └── [id]/          # Détails produit
│   └── cart/              # Page panier
├── components/            # Composants React réutilisables
│   ├── Header.tsx         # En-tête du site
│   └── Footer.tsx         # Pied de page
├── lib/                   # Utilitaires et configurations
│   └── medusa-client.ts   # Client Medusa configuré
├── public/                # Fichiers statiques
└── package.json           # Dépendances du projet
```

## 🎨 Fonctionnalités

- ✅ Page d'accueil avec produits mis en avant
- ✅ Liste complète des produits
- ✅ Page détail produit avec variantes
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Intégration avec l'API Medusa
- ✅ Navigation intuitive
- 🔄 Panier (à venir)
- 🔄 Checkout (à venir)
- 🔄 Authentification utilisateur (à venir)

## 🔌 Intégration Medusa

Le site utilise le client Medusa.js pour se connecter à l'API backend hébergée sur `vraiapi.trottipieces.fr`. Toutes les données de produits, catégories, et commandes sont gérées par Medusa.

## 📝 License

Ce projet est privé et propriétaire.

## 👥 Contact

Pour toute question, veuillez contacter l'équipe Trottipieces.
