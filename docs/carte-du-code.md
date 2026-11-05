# Carte du code de Balloon Drop

> Photo du code au 05/11/2026 (version v29), générée avec graphify puis annotée.
> Elle vieillit à chaque modification : les **noms de fonctions** restent fiables, pas les numéros de ligne.
> Pour trouver une fonction : `grep -n "^function NOM\|^const NOM" index.html`.
> À régénérer après une grosse refonte (nouveau monde, nouveau système).

## Repères rapides (où chercher quoi)

| Sujet | Noms à chercher |
|---|---|
| Sauvegarde | `SAVE_KEY`, `freshSave`, `save()` |
| Ballons (skins) | `SKINS`, `paintSkin`, `radial`, `shade`, `gloss`, `drawPreview` ; nouveaux ballons : bloc `SKINS.push(JULES_SKIN, ...)` |
| Familles de ballons | `THEMES`, `THEME_OF` |
| Codes et secrets | `CODES`, `SECRETS`, `normCode` (code admin dans `submit` du modal « Code secret ») |
| Trophées | `TROPHIES`, `checkTrophies` |
| Mondes et niveaux | `WORLDS` (niveaux, boss, textes d'intro), `levelKey`, `renderStory` |
| Décors | `SKIES` (palette par monde : `top`, `bottom`, `ink`, `zone`, `plinth`, `floor`, `ambient`), `drawSky`, `drawHills`, `cloud`, `drawSunLight` |
| Plateformes | `drawPlatform`, `drawMetalPlatform`, `drawGoldPlatform` |
| Ballon en jeu | `drawBalloon`, `land`, `newRound` |
| Partie | `startGame`, `buildCfg`, `updateGame`, `endRun`, `showResults` |
| Boss | `BOSSES` (noms, textes de phase), `makeBoss`, `bossPhaseOf` (phases à 66 % / 33 % de vie), `bossDamage`, `drawBoss`, `drawBossIcon` ; Monde 1 : `drawCrow` (= Cerf-volant Dragon), `kiteKit`, `drawMiniKite` |
| Obstacles | `drawHazards`, `drawBird` |
| Écrans | `showScreen`, `renderShop`, `closeModal`, `toast` |
| Musique et sons | `SONGS`, `musicTick`, `sfx`, `buzz` (vibration) |

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 48 edges
2. `updateGame()` - 38 edges
3. `save()` - 30 edges
4. `drawHazards()` - 26 edges
5. `endRun()` - 26 edges
6. `startGame()` - 24 edges
7. `land()` - 24 edges
8. `showScreen()` - 24 edges
9. `showResults()` - 23 edges
10. `closeModal()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `land()` --indirect_call--> `newRound()`  [INFERRED]
  index.html → index.html  _Bridges community 2 → community 0_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  index.html → index.html  _Bridges community 21 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  index.html → index.html  _Bridges community 4 → community 1_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  index.html → index.html  _Bridges community 4 → community 11_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  index.html → index.html  _Bridges community 1 → community 0_

## Import Cycles
- None detected.

## Communities (27 total, 6 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.07
Nodes (69): addScore(), afterSplash(), announceThemes(), announceTrophies(), bossDamage(), buzz(), checkLanding(), checkThemes() (+61 more)

### Community 1 - "startGame"
Cohesion: 0.07
Nodes (64): adoptRemote(), animateXp(), arcadeRound(), boardRows(), bossRound(), buildCfg(), closeModal(), dailyInfo() (+56 more)

### Community 2 - "updateGame"
Cohesion: 0.07
Nodes (53): acceptSecond(), afterLoss(), banner(), baseR(), bossDefeat(), bossMouth(), burst(), burstBall() (+45 more)

### Community 4 - "usPaintStatic"
Cohesion: 0.07
Nodes (42): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+34 more)

### Community 5 - "drawSky"
Cohesion: 0.09
Nodes (37): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+29 more)

### Community 6 - "drawIntro"
Cohesion: 0.08
Nodes (35): audio(), audioStatus(), cancelReveal(), currentSong(), drawBalloon(), drawFloats(), drawIntro(), drawMetalPlatform() (+27 more)

### Community 7 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 8 - "showLevelIntro"
Cohesion: 0.14
Nodes (27): cascadeResults(), confettiDom(), countUp(), drawBoss(), drawBossIcon(), drawCrow(), drawDragon(), drawKraken() (+19 more)

### Community 9 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 10 - "drawGame"
Cohesion: 0.11
Nodes (18): camZoom(), draw(), drawBallShadows(), drawBee(), drawBird(), drawCloudSea(), drawCoin(), drawFog() (+10 more)

### Community 11 - "paintEsquisseBody"
Cohesion: 0.12
Nodes (20): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+12 more)

### Community 12 - "makeScoreCard"
Cohesion: 0.15
Nodes (16): arcadeSky(), drawOutfit(), drawPreview(), drawWearPreview(), gloss(), makeDuelCard(), makeScoreCard(), paintSkin() (+8 more)

### Community 13 - "musicTick"
Cohesion: 0.19
Nodes (13): applySong(), musicGraph(), musicLevel(), musicTick(), ostDecode(), ostGraph(), ostLoad(), ostStart() (+5 more)

### Community 14 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 15 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 16 - "drawParticles"
Cohesion: 0.33
Nodes (6): coeurs(), drawHome(), drawParticles(), etoiles(), wHeart(), wStar5()

### Community 17 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 18 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 19 - "Balloon Drop 🎈"
Cohesion: 0.50
Nodes (3): Au programme, Balloon Drop 🎈, L'installer comme une appli

### Community 20 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 21 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

