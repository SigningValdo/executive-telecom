# Executive Telecom

Site vitrine pour Executive Telecom - Fournisseur de bouquets TV en Afrique.

## Technologies

- **Next.js** 16.0.7 - Framework React
- **React** 19.2.0 - Bibliothèque UI
- **TypeScript** 5 - Typage statique
- **Tailwind CSS** 4 - Framework CSS

## Installation

```bash
# Cloner le projet
git clone <repository-url>
cd execute-telecom

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification du code |

## Structure

```
src/
├── app/
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
└── components/
    ├── ui/             # Composants réutilisables
    │   ├── Button.tsx
    │   ├── FeatureBadge.tsx
    │   ├── ChannelTag.tsx
    │   └── SectionTitle.tsx
    └── sections/       # Sections de page
        ├── Header.tsx
        ├── HeroSection.tsx
        ├── TVSection.tsx
        ├── PromotionsSection.tsx
        ├── AboutSection.tsx
        ├── CTASection.tsx
        ├── AfriqueSection.tsx
        └── Footer.tsx
```

## Couleurs

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| Primary | `#E81E2C` | Couleur principale |
| Secondary | `#68696D` | Couleur secondaire |

## Images requises

Placer dans `public/images/` :

- `logo.png` - Logo Executive Telecom
- `herosection.jpg` - Image héro
- `decoder.png` - Décodeur satellite
- `coupe.jpg` - Coupe du monde
- `cinema.jpg` - Promo cinéma
- `divertissement.jpg` - Promo divertissement
- `avenir.jpg` - Promo à venir
- `about.jpg` - Image à propos
- `telecommande.jpg` - Fond CTA

## Déploiement

```bash
npm run build
npm run start
```

Compatible avec Vercel, Netlify, ou tout hébergeur Node.js.
