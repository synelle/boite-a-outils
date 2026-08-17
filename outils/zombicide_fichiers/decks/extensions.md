# Wulfsburg et Green Horde — les 35 cartes ajoutées

## D'où viennent les chiffres

- **Caractéristiques** (dés, précision, dégâts, portée, mot-clé, bruit, Ambidextre, ouverture de
  porte, Niveau de Danger requis, règle spéciale) : des fiches du wiki Zombicide téléchargées dans
  `zombicide_fichiers/rip/`.
- **Quantités** : des livrets de règles édités par CMON —
  [Wulfsburg](https://resources.cmon.com/ZBP_Wulfsburg_Rules_web.pdf) p.3 et
  [Green Horde](https://www.cmon.com/wp-content/uploads/2023/06/Rulebook_Zombicide_Green_Horde.pdf)
  p.4.
- **Illustrations** : téléchargées depuis le même wiki, une par carte, dans
  `zombicide_fichiers/sprites/equip_<id>.png`. Le lien de l'infobox rend du WebP déguisé en `.png`
  si on ne lui ajoute pas `format=original` — avec, on obtient le vrai PNG détouré.
- **Noms français** : déduits. Le wiki n'est qu'en anglais et ces cartes n'ont pas été vues en VF ;
  ce sont des traductions de travail, à corriger si la boîte française dit autrement. Les
  identifiants internes, eux, restent stables quoi qu'il arrive.

Les deux sources se recoupent : les **32 cartes de Black Plague déjà codées** ont été comparées
une à une à leur fiche du wiki — dés, précision, dégâts, portée, Ambidextre, bruit, porte : **aucun
écart**. C'est ce qui a permis de faire confiance au relevé pour les 35 nouvelles.

Les totaux tombent juste, ce qui vaut contrôle : Black Plague 71 cartes, Wulfsburg **22**,
Green Horde **78** — les chiffres annoncés par les livrets.

## Ce que le moteur applique

**33 des 35 cartes sont rendues intégralement**, capacité spéciale comprise. Voici les mécaniques
ajoutées, chacune portée par un champ de la carte plutôt que par un cas particulier :

| Champ | Effet | Cartes |
|---|---|---|
| `six:{dice}` | chaque 6 rend un dé, qui peut faire 6 à son tour | Éclair en chaîne, Arc de tempête, Couperet de guerre |
| `six:{dmg}` | les réussites obtenues sur un 6 frappent plus fort | Désintégration, Hache naine |
| `six:{dice,dmg}` | les deux | Marteau sismique |
| `six:{feu}` | un 6 embrase la Zone visée | Explosion de lave |
| `feuSi` | tant de réussites : Feu du Dragon dans la Zone | Arc long du Chaos (4) |
| `feuDef` | se défausser pour un Feu du Dragon à Portée 0-1 | Lame de Feu du Dragon |
| `enflamme` | allume une Bile posée, sans se consumer | Épée à deux mains enflammée |
| `paire:{id,dice}` | bonus si telle autre carte est équipée | Épée d'os, Épée nordique, Cimeterre |
| `offhandDmg` | +1 Dégât à l'autre arme de Mêlée | Kukri d'os |
| `offhandDie` | +1 dé à l'autre arme de Mêlée | Dague courbe, Dague de parade, Bouclier nordique |
| `succes` | une réussite offerte, sans dé | Hache du Carnage |
| `comp` | confère une compétence, tant que la carte est en main et utilisable | Épée de vif-argent (Chanceux), Bouclier des Âges (Poussée) |
| `soigne` | 1 Blessure récupérée par Zombie tué | Arbalète vampirique |
| `aussiBouclier` | compte aussi comme Bouclier (relance d'Armure) | Dague de parade |
| `porteMagie` | ouvre une porte sans être une arme de Mêlée | Décharge télékinésique |
| `ench:"ghostsight"` | voit et tire à travers les obstacles jusqu'à la fin du Round | Vision spectrale |
| `ench:"transmut"` | défausser une carte au choix, puis en piocher une | Transmutation |
| `ench:"tremor"` | les Zombies à Dégât 1 sont couchés, prochaine Activation perdue | Tremblement |

**Chanceux** et **Poussée** figuraient au livret sans être appliquées : ce sont ces deux cartes qui
les ont rendues nécessaires, donc codées. Un Survivant qui les possède **sur sa fiche** en profite
désormais aussi — l'éditeur de personnages les marque appliquées.

Trois décisions de modélisation valent d'être connues :

- **« Résultat 6 : +1 Dégât »** demande deux valeurs de Dégâts dans une même Action. Les succès
  obtenus sur un 6 sont donc résolus **d'abord**, à Dégâts majorés, puis les autres. L'ordre
  favorise le joueur : la cible coriace tombe la première.
- Un **Feu du Dragon** déclenché par une arme détruit tout dans la Zone, sans jet. La répartition
  des succès et le tir ami sont donc court-circuités — il n'y a plus rien à toucher.
- La **chaîne des 6** est bornée à 20 relances. Elle s'arrête d'elle-même en pratique, mais rien ne
  le garantissait, et une série de 6 figeait la page. La compétence « Sur un 6 : +1 dé Combat »
  souffrait du même défaut, corrigé au passage.

**Reste 2 cartes non appliquées**, et ce n'est pas la capacité qui manque mais le sous-système :

| Carte | Ce qui manque |
|---|---|
| **Blindé : Loups zombies** | les Loups zombies de Wulfsburg ne sont pas dans le moteur |
| **Arc d'acier** | les haies et barrières de Green Horde n'y sont pas non plus, il n'y a rien à voir à travers |

Ces deux-là gardent `na:1` : la carte se joue avec ses caractéristiques exactes, et sa fiche annonce
*« règle spéciale non appliquée »* en disant pourquoi. Même convention que pour les compétences —
mieux vaut l'écrire que laisser une carte silencieusement affaiblie.

## Niveau de Danger requis (Équipement magique)

Nouveauté de moteur, celle-là **est** appliquée. Ces cartes portent des gemmes indiquant à partir
de quel Niveau elles servent ; en dessous, elles se transportent mais restent inutilisables.

- **Jaune** : Dague de parade, Épée à deux mains enflammée, Épée de vif-argent, Arc de tempête,
  Arbalète vampirique, Kukri d'os, Épée d'os, Hache naine, Arc d'acier.
- **Orange** : Hache du Carnage, Arc long du Chaos, Lame de Feu du Dragon, Marteau sismique,
  Bouclier des Âges, Explosion de lave, Couperet de guerre.

Le contrôle porte sur l'attaque, sur l'Armure et sur la relance de Bouclier. La fiche de la carte
affiche « Niveau Orange requis », et une tentative trop tôt est refusée avec la raison.

## Deux points restés en suspens

- **Arc à pointes** est à la fois arme de Mêlée et arme à Distance. Il utilise le mécanisme `alt`
  déjà en place pour l'Arbalète orque — donc jouable, mais par un second bouton d'attaque plutôt
  que par une carte à deux profils simultanés.
- **Cartes Zombie** : Wulfsburg en apporte 8 (nº55 à 62) et Green Horde 54 (nº167 à 220), avec ses
  propres types (Orcs, Trébuchet). Rien de tout cela n'est ajouté : l'onglet Zombies ne peut
  accueillir que des types que le moteur connaît. C'est un chantier distinct de celui des decks.

## Ajouter une carte

Toujours **dans les deux fichiers** : `EQUIP` de `zombicide.html` (le moteur ne distribue que ce
qu'il connaît) et `CARTES` de `zombicide-decks.html` (avec ses quantités par boîte).
`outils-controle.py` compare les deux listes — identifiants, noms, types, quantités Black Plague —
et signale la moindre divergence.
