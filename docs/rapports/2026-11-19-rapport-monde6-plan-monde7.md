# Rapport du 19/11/2026 : Monde 6 (fin) + auto-audit + plan du Monde 7

Branche : `monde6-jungle` (rien n'est publié sur `main`).
Tous les GIF sont filmés **dans le vrai jeu**, image par image, à vitesse réelle.

---

## 1. Ce qui a été fait pendant ton absence

### Le décor de la Jungle est maintenant dans le jeu
Jusqu'ici, les 3 zones validées n'existaient qu'en maquette. Elles tournent maintenant dans le jeu :
- La Lisière (niveaux 1 à 3) ;
- La Canopée (4 à 6) ;
- Le Temple perdu (7 à 10, avec le boss).

Côté technique :
- **Le fond fixe** (plans de forêt, troncs, temple, feuillages) est dessiné **une seule fois** puis gardé en mémoire.
- **Tout ce qui bouge est redessiné 60 fois par seconde** : rayons de lumière, lianes, aras, colibri, rainette, papillons, toucan, paresseux, chauves-souris, lucioles et yeux. C'est fluide.
- Au boss, les arbres du fond sont retirés pour laisser la place aux deux lianes du Serpent.

Captures : `design/brouillons/2026-11-19-jungle-en-jeu.png`.

### Le secret : « les yeux dans la nuit »
- **Où** : au Temple perdu (niveaux 7 à 9). Deux yeux dorés brillent au loin, à gauche, à côté du gros tronc.
- **Le geste** : ils clignent environ toutes les 3 s, pendant un peu plus d'une demi-seconde. Il faut les toucher **pendant qu'ils clignent**, 3 fois.
  - Touchés les yeux ouverts, ils se méfient : le compteur repart à zéro.
- **La surprise** : les yeux s'approchent, et ce n'est pas le Serpent. C'est **un bébé serpent** tout rond, qui s'installe en bas à gauche avec de petits cœurs (« Un bébé serpent ! », confettis).
- **Récompense** : le ballon secret **« Le Bébé serpent »** et le secret « Les yeux dans la nuit » dans le carnet des secrets, avec un indice.
- Au Temple, la plante carnivore se place à droite pour ne pas cacher les yeux.

GIF : `design/brouillons/2026-11-19-jungle-secret-yeux.gif`.

### Le ballon « Le Bébé serpent »
- Il est dans l'ADN du jeu : formes simples et brillantes, pas de contour sombre.
- Un ballon **crème doré** (comme un fruit de la jungle), avec le bébé serpent **enroulé autour en ruban**, à taches dorées.
- Sa **tête dépasse en haut à droite** : grands yeux, joues roses, clignements et petite langue fourchue qui sort.
- Le bout de la queue frétille en bas.
- Premier essai en vert sur vert, pas assez contrasté : je l'ai passé en crème doré.
- J'ai vérifié en grand, en petit et en tout petit, sur fond clair et sombre : `design/brouillons/2026-11-19-ballon-bebe-serpent.png`.

---

## 2. Auto-audit du Monde 6

### Ce que j'ai testé
| Test | Résultat |
|---|---|
| Non-régression : niveau 1 des 14 mondes, les 10 niveaux de la Jungle, les boss des Mondes 1 à 5, le mode Infini (un ballon lâché à chaque fois) | **Aucune erreur** |
| Combat complet contre le Serpent : phases 1, 2 et 3, défaite, écran de fin | **Aucune erreur**, déroulé complet |
| Secret de bout en bout : mauvais tap qui remet à zéro, 3 bons taps, bébé, ballon débloqué | **OK** |
| Tailles d'écran : iPhone SE (375×667), iPhone 13 (390×844), grand iPhone (430×932), iPad (768×1024) | **OK**. Sur iPad, le haut du décor est un peu coupé (aras en haut). Capture : `2026-11-19-jungle-tailles-ecran.png` |

### Ce que j'ai corrigé grâce à l'audit
1. **La plante carnivore était beaucoup trop dangereuse.** Le robot réussissait **0 %** du niveau 7. Le ballon en jeu est gros, et la portée de la plante s'y ajoutait : elle couvrait près de 70 % de la largeur de l'écran. J'ai réduit sa portée : il faut maintenant que le ballon **frôle** vraiment sa gueule.
2. **La plante pouvait cacher les yeux du secret** au Temple : corrigé (elle se met à droite).
3. **Optimisation du dessin** : le corps du Serpent (environ 600 cercles par image) et le rideau de pluie sont regroupés en quelques tracés. Le rendu est identique, avec moins d'appels de dessin.

### Difficulté (robot, environ 12 à 16 essais par niveau)
| Niveau | Réussite du robot |
|---|---|
| 1, La liane | 67 à 88 % |
| 4, Pluie tropicale | 17 % avant la correction de la plante, 75 % après |
| 7, La plante carnivore | 0 % avant, puis entre 25 et 83 % selon les essais et le réglage |
| 9, Cœur de la jungle | 25 % |

À savoir pour lire ces chiffres :
- Le robot **n'attend jamais** que la plante s'endorme, et il anticipe mal le balancement de la liane. Un vrai joueur fera mieux.
- Le niveau 7 varie énormément d'un essai à l'autre : **c'est le réglage à valider à la main.** Il tient en une seule ligne (la portée de la plante, `fall.r * .62 + 46`).

### Fluidité (temps de calcul d'une image, sans carte graphique)
| Scène | ms par image (limite : 16,7) |
|---|---|
| Monde 1, le Ciel (référence) | environ 10 |
| Jungle, Lisière | environ 10 |
| Jungle, Canopée | environ 15 à 16 |
| Jungle, Temple | environ 13 à 14 |
| Jungle, boss | environ 15 à 17 |

Ces mesures sans carte graphique sont pessimistes et varient. **À vérifier sur ton iPhone**, surtout la Canopée et le boss.

### Points ouverts : à toi de décider
1. **Style des animaux du décor.** Ils ont un contour sombre (style « illustration », validé en maquette). Les éléments de jeu (singe, plante, serpent, ballon) suivent l'ADN du jeu, sans contour. Je les passe aussi sans contour, pour tout unifier ?
2. **La liane sur tous les niveaux** rend les premiers niveaux plus durs qu'avant. C'est voulu, mais à sentir en jouant.
3. **Un seul singe à la fois** : le niveau 8 « Bande de singes » est un peu moins chargé qu'avant.
4. **Réglage de la plante** au niveau 7 (voir plus haut).
5. Sur **iPad**, le haut du décor est coupé.

### Comment tu peux vérifier
- Les GIF de chaque étape sont dans `design/brouillons/` (préfixe `2026-11-19-jungle-`, `2026-11-19-serpent-`, `2026-11-19-ballon-bebe-serpent`).
- Pour jouer sur ton téléphone, il faut publier : dis-moi « publie » et je mets le Monde 6 en ligne (cache v46), comme pour les autres mondes.

---

## 3. Plan du Monde 7 « Le Miroir » (idées seulement, à valider)

**L'existant** (capture : `2026-11-19-miroir-avant.png`) :
- Le ballon **monte** vers une plateforme au plafond, sur un fond violet assez vide avec quelques éclats.
- Mécaniques : ventilateurs, pics, gravité qui bascule, oiseaux à l'envers, doublé.
- Boss : « Le Reflet », un double qui bloque puis copie tes gestes.

On suit ta méthode : **1. zones, puis 2. mécaniques, puis 3. boss, puis 4. secret.**

### Étape 1 : les zones (à choisir)
- **Option A, « Le monde à l'envers »** (ma préférée) :
  - un vrai paysage **la tête en bas** : maisons et arbres qui pendent du plafond, cascade qui coule vers le haut, nuages en bas, soleil sous nos pieds ;
  - très lisible pour un jeu où le ballon monte, et unique ;
  - **Signature : la cascade qui remonte** ;
  - zones : Le Village renversé (1 à 3), La Forêt suspendue (4 à 6), Le Ciel d'en bas (7 à 10, nuit, étoiles sous la plateforme).
- **Option B, « Le Palais des glaces »** :
  - un palais de miroirs : le Hall (lustres, reflets roses), le Labyrinthe (couloirs de reflets à l'infini, miroirs déformants), puis l'Autre côté (on a traversé : couleurs inversées, éclats qui flottent) ;
  - plus « miroir », mais plus dur à rendre lisible.

### Étape 2 : les mécaniques (sans bonus gratuit)
- **A. Le double** (ma préférée) : ton ballon a un **reflet** symétrique de l'autre côté de l'écran, qui monte en même temps. Si le reflet touche un pic ou un oiseau, **les deux éclatent**. Il faut trouver une position sûre pour les deux. C'est un vrai dilemme, et ça colle au thème.
- **B. Les miroirs qui renvoient** : des panneaux inclinés font rebondir le ballon. Il faut s'en servir pour atteindre la plateforme, ou les éviter.
- **C. Les éclats qui montent** : des éclats de miroir remontent avec le ballon. Ils sont annoncés par un reflet.

### Étape 3 : le boss « Le Reflet », redessiné
- **Look** : un ballon-miroir espiègle, ton ballon mais **en verre argenté**, avec un sourire narquois, dans l'ADN du jeu.
- **Attaques** :
  1. il copie ta position en miroir et se met en travers ;
  2. il tire un rayon qui rebondit sur les bords ;
  3. il fissure l'écran, et les fissures dévient le ballon.
- **Transition** : il **se brise en éclats puis se reforme**, de plus en plus fissuré.
- **Défaite** : il éclate en mille paillettes. Il reste un tout petit reflet qui te fait coucou… puis qui disparaît.

### Étape 4 : le secret
- **A. Le reflet qui désobéit** (ma préférée) : dans le décor, un miroir montre la scène. De temps en temps, **le reflet fait autre chose** (il fait coucou, il cligne). Le toucher 3 fois à ce moment-là ouvre un passage derrière le miroir : niveau caché **« Derrière le miroir »**, où la gravité redevient normale (le twist). Récompense : un ballon secret.
- **B. Le miroir fêlé** : faire passer le ballon par une fissure précise.

**Pour démarrer le Monde 7, j'ai besoin de tes choix** : zones A ou B, puis les mécaniques. Comme d'habitude, je ferai des maquettes avant d'intégrer.
