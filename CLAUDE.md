# Balloon Drop : guide pour Claude

Jeu mobile (PWA) de Virgile : on glisse un ballon au-dessus d'une plateforme, on le gonfle (x2, x3) et on le lâche.
En ligne : https://virgilevdc-rgb.github.io/Balloon-Drop/ (GitHub Pages, branche `main`).

## Façon de travailler avec Virgile
- Répondre **en français**, court, chaleureux. Dates JJ/MM/AAAA.
- **Annoncer le plan avant une tâche en plusieurs étapes**, résumer après chaque étape.
- **Ne jamais publier sur `main` sans son feu vert** : travailler sur une branche, montrer des captures avant/après.
- Il préfère qu'on pose une question en cas de doute plutôt que de dépenser des tokens.
- Il garde **son style actuel** (cartoon brillant, « app de jeu mobile ») : améliorer, ne pas changer de direction artistique.
- Pour tout travail visuel : utiliser le skill **design-gout** (direction C « ludique », grille de notation, boucle capture-correction).

## Structure
- `index.html` : **tout le jeu** (~10 600 lignes : CSS, HTML, JS dans 2 balises `<script>`). Lire par morceaux, jamais en entier.
- **`docs/carte-du-code.md` : la carte du code. La consulter avant de chercher quoi que ce soit.**
- `sw.js` : service worker (cache réseau d'abord). `music/` : musiques mp3. `icons/`, `manifest.webmanifest`.
- `design/brouillons/` : maquettes et GIF de travail (Corbeau amélioré, concepts de boss…).

## Règles de dessin (canvas)
- Lumière en haut à gauche (`LIGHT_X`). Un ballon = `paint(c, r, t)` puis ombre `shade` + reflet `gloss` (voir `paintSkin`) ; `t` = image (60/s).
- Polices : Lilita One (titres), Nunito (texte).
- Tester **sur fond clair ET sombre** et **en petit** (le ballon rétrécit à chaque manche). Éviter `globalCompositeOperation = 'lighter'` sur fond clair (tout devient blanc).
- Lire l'état du jeu dans un dessin avec `try { G... } catch (e) {}` (zone morte des `const`).

## Ajouter du contenu
- **Ballon** : objet `{ id, theme, name, price | unlock, dust, paint, after?, string?, flat?, gloss?, prev? }` ajouté via le bloc `SKINS.push(...)`. Vérifier que l'`id` n'existe pas déjà.
- **Famille** : ajouter dans `THEMES` (`id`, `name`, `bonus`).
- **Ballon à code** : `CODES` + entrée dans `SECRETS` + `secret: true` sur le ballon.
- **Boss** : textes dans `BOSSES`, niveau dans `WORLDS`, dessin appelé par `drawBoss` ; garder la même zone de collision si on ne change que le dessin.

## Tester (obligatoire avant publication)
1. Servir le dossier : `python3 -m http.server 8767` (en arrière-plan).
2. Playwright préinstallé, `devices['iPhone 13']`, `serviceWorkers: 'block'`. Au lancement : toucher l'écran titre, puis cliquer « Passer » pour sauter l'intro.
3. États de test via la sauvegarde `localStorage['balloon-drop-save-v3']` (ex. `s.story['1-9'] = 3` débloque le boss du Monde 1, `s.owned`, `s.skin`, `s.coins`, `s.tutoDone = true`), puis recharger.
4. Code admin `VVADMIN2026` (Ballons → J'ai un code) : débloque tous les ballons. **À retirer avant un partage large.**
5. Vérifier : aucune erreur console, captures regardées vraiment.
6. Vérifier la syntaxe : `node -e` + `new Function(script)` sur chaque balise `<script>`.

## Publier (après validation de Virgile)
1. **Incrémenter la version du cache** dans `sw.js` (`balloon-drop-vNN`), sinon les joueurs gardent l'ancienne version.
2. Commit en français, pousser la branche, puis `main` (avance rapide). GitHub Pages republie en ~2 min.
3. Confirmer en ligne : `curl -s "https://virgilevdc-rgb.github.io/Balloon-Drop/index.html?nc=$RANDOM" | grep -q "<texte nouveau>"`.
4. Le clone peut ne suivre que `main` : après avoir poussé une autre branche, ajouter son refspec puis `git branch -u`.

## Feuille de route (au 05/11/2026)
- Cerf-volant Dragon (boss Monde 1) : ajouter les transitions de phase, la défaite « fil qui casse », des morceaux de papier au lieu des plumes.
- Revoir chaque monde : décor → boss → gameplay. Capitaine Zéphyr (montgolfière pirate) est réservé pour un futur boss.
- Familles de ballons à créer : Arts, Fêtes (avec dates), Mécaniques.
- Vérifier en jeu réel les ballons Légendes (Phénix/combo, Rétro/score, Dragonnet/niveaux 5-10-20-35).
- Produit : classement en ligne (pas branché), partage/Duel, 5 petits défauts d'interface repérés.
