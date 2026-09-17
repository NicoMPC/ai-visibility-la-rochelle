# AI Visibility — La Rochelle

Dashboard de démonstration (mobile-first, Next.js + Tailwind) montrant si
« Agence Principale » apparaît dans un relevé de 20 recherches vendeurs à
La Rochelle, et quelles agences ressortent à sa place.

Données : `data/queries.ts` (saisies manuellement, non générées).

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Démo en ligne

https://nicompc.github.io/ai-visibility-la-rochelle/

Déployée sur GitHub Pages (branche `gh-pages`, générée par `next export`).
Pour republier après une modification :

```bash
npm run deploy
```
