# Elena Pidoux

Site personnel en français, développé avec React et Vite. Une même adresse pour trois orientations : relation client et projets de rénovation, conseil et vente, efficacité énergétique.

## Développement

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Le dossier `dist` peut être hébergé sur un hébergement statique. Pour une publication sous un sous-chemin, construire avec `npm run build -- --base=/nom-du-repo/`.

## Contenu

- `src/main.jsx` : textes, parcours, liens de contact et CV.
- `src/style.css` : styles et adaptation mobile.
- `public/cv` : documents retirés du site. Le cas pratique téléchargeable est dans `public/documents` et les photographies extraites dans `public/images`.

Les informations sont issues des quatre CV fournis. Le chantier d’Anglet est explicitement présenté comme un projet personnel. Les photographies et la description du projet proviennent de Pidoux_Cas_Pratique.pdf. Les gains énergétiques sont présentés comme des résultats de simulation. Un portrait pourra être ajouté.

Le site n’utilise ni formulaire serveur, ni cookies, ni outil de suivi. Les liens de contact ouvrent le client email ou téléphone. Les polices Google Fonts sont externes ; les polices système prennent le relais hors connexion.
