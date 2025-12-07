# Spécifications Techniques - Executive Telecom

## Informations Générales

| Élément | Détail |
|---------|--------|
| **Projet** | Site vitrine Executive Telecom |
| **Type** | Landing Page / Site Corporate |
| **Client** | Executive Telecom (Groupe NOUBROU HOLDING) |
| **Version** | 1.0.0 |

---

## Stack Technologique

### Frontend

| Technologie | Version | Description |
|-------------|---------|-------------|
| **Next.js** | 16.0.7 | Framework React avec rendu hybride (SSR/SSG) |
| **React** | 19.2.0 | Bibliothèque UI pour composants réutilisables |
| **TypeScript** | ^5 | Typage statique pour JavaScript |
| **Tailwind CSS** | ^4 | Framework CSS utility-first |

### Outils de Développement

| Outil | Version | Utilisation |
|-------|---------|-------------|
| **ESLint** | ^9 | Linting et qualité du code |
| **PostCSS** | @tailwindcss/postcss ^4 | Processing CSS |
| **Node.js** | ^20 | Environnement d'exécution |

---

## Architecture du Projet

```
execute-telecom/
├── public/
│   └── images/              # Assets statiques (images, logo)
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux + variables CSS
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   └── components/
│       ├── ui/              # Composants UI réutilisables
│       │   ├── Button.tsx
│       │   ├── FeatureBadge.tsx
│       │   ├── ChannelTag.tsx
│       │   ├── SectionTitle.tsx
│       │   └── index.ts
│       └── sections/        # Sections de page
│           ├── Header.tsx
│           ├── HeroSection.tsx
│           ├── TVSection.tsx
│           ├── PromotionsSection.tsx
│           ├── AboutSection.tsx
│           ├── CTASection.tsx
│           ├── AfriqueSection.tsx
│           ├── Footer.tsx
│           └── index.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Composants Développés

### Composants UI (Réutilisables)

| Composant | Props | Description |
|-----------|-------|-------------|
| `Button` | variant, size, className | Bouton avec 3 variantes (primary, secondary, outline) |
| `FeatureBadge` | icon, label | Badge avec icône pour fonctionnalités |
| `ChannelTag` | name | Tag pour les chaînes TV |
| `SectionTitle` | title, subtitle, centered | Titre de section standardisé |

### Sections de Page

| Section | Fonctionnalités |
|---------|-----------------|
| `Header` | Navigation responsive, menu mobile, logo |
| `HeroSection` | Image de fond, titre animé, CTA |
| `TVSection` | Présentation décodeur, features, chaînes |
| `PromotionsSection` | Événements sportifs, cartes promotionnelles |
| `AboutSection` | Présentation entreprise |
| `CTASection` | Appel à l'action avec fond image |
| `AfriqueSection` | Bannière promotionnelle |
| `Footer` | Liens, réseaux sociaux, informations légales |

---

## Charte Graphique

### Couleurs

| Nom | Code Hex | Utilisation |
|-----|----------|-------------|
| **Primary** | `#E81E2C` | Couleur principale (rouge Executive) |
| **Primary Dark** | `#c41824` | Hover sur éléments primaires |
| **Secondary** | `#68696D` | Couleur secondaire (gris) |
| **Background** | `#FFFFFF` | Fond principal |
| **Foreground** | `#171717` | Texte principal |

### Typographie

- **Police système** : system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- **Tailles responsives** : text-xs (mobile) → text-lg (tablet) → text-2xl (desktop)

---

## Fonctionnalités Techniques

### Responsive Design

- **Mobile First** : Design adaptatif de 320px à 1920px+
- **Breakpoints Tailwind** :
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

### Optimisations

- **Images** : Utilisation de `next/image` pour optimisation automatique
- **Fonts** : Police système (pas de téléchargement externe)
- **CSS** : Tailwind CSS avec purge automatique
- **Rendu** : Static Site Generation (SSG) pour performances optimales

### Accessibilité

- Labels ARIA sur les boutons interactifs
- Contrastes de couleurs respectés
- Navigation au clavier supportée

---

## Temps de Réalisation

### Estimation par Phase

| Phase | Durée Estimée | Description |
|-------|---------------|-------------|
| **Setup & Configuration** | 0.5h | Initialisation Next.js, Tailwind, structure |
| **Composants UI** | 1h | Button, FeatureBadge, ChannelTag, SectionTitle |
| **Header & Navigation** | 1h | Header fixe, menu responsive, logo |
| **HeroSection** | 0.5h | Section héro avec image de fond |
| **TVSection** | 1h | Section décodeur avec features |
| **PromotionsSection** | 1.5h | Événements sportifs, cartes promo |
| **AboutSection** | 0.5h | Section à propos |
| **CTASection** | 0.5h | Section appel à l'action |
| **AfriqueSection** | 0.25h | Bannière promotionnelle |
| **Footer** | 1h | Pied de page complet |
| **Ajustements & Responsive** | 1.5h | Corrections, responsive design |
| **Intégration couleurs** | 0.5h | Mise en place charte graphique |

### Total Estimé

| Métrique | Valeur |
|----------|--------|
| **Temps total développement** | ~9-10 heures |
| **Nombre de composants** | 12 |
| **Lignes de code estimées** | ~1500 lignes |

---

## Commandes Disponibles

```bash
# Développement
npm run dev       # Lance le serveur de développement

# Production
npm run build     # Build de production
npm run start     # Lance le serveur de production

# Qualité
npm run lint      # Vérification ESLint
```

---

## Prérequis Déploiement

- Node.js >= 20.x
- npm >= 10.x
- Images à placer dans `/public/images/`

### Images Requises

| Fichier | Description |
|---------|-------------|
| `logo.png` | Logo Executive Telecom |
| `herosection.jpg` | Image héro (sport) |
| `decoder.png` | Image décodeur satellite |
| `coupe.jpg` | Image coupe du monde |
| `cinema.jpg` | Promo cinéma |
| `divertissement.jpg` | Promo divertissement |
| `avenir.jpg` | Promo à venir |
| `about.jpg` | Image à propos |
| `telecommande.jpg` | Fond section CTA |

---

## Évolutions Possibles

1. **Pages additionnelles** : À propos, Offres, Contact, etc.
2. **Animations** : Framer Motion pour transitions
3. **CMS** : Intégration Strapi/Sanity pour contenu dynamique
4. **Multilingue** : Support français/anglais
5. **Analytics** : Google Analytics / Plausible
6. **SEO** : Meta tags dynamiques, sitemap

---

*Document généré le 7 décembre 2024*
