# Boîte à outils HTML

Collection personnelle de simulateurs, jeux et mini-outils HTML/JS standalone (sans build step), consultables via GitHub Pages.

## Structure

```
/
├── index.html          → page sommaire (liste et lance les outils)
├── outils/
│   └── simulateur-trading.html
├── metadata.json        → titre, description, icône, catégorie par outil
└── README.md
```

## Ajouter un outil

1. Déposer le fichier `.html` standalone dans `outils/`.
2. Ajouter une entrée dans `metadata.json` (clé = nom de fichier) :

```json
"mon-outil.html": {
  "titre": "Mon outil",
  "description": "Description courte.",
  "icone": "🛠️",
  "categorie": "Jeux"
}
```

3. Commit + push.

Le bouton **Détecter** de la page sommaire permet de repérer les fichiers présents dans `outils/` mais absents de `metadata.json` (via l'API GitHub, avec mise en cache locale).

## GitHub Pages

Servi depuis la racine de la branche `main`.
