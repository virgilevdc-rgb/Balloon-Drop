# Graph Report - src  (2026-11-16)

## Corpus Check
- 3 files · ~171,614 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 609 nodes · 1732 edges · 30 communities (20 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- endRun
- save
- draw
- drawSky
- usPaintStatic
- showLevelIntro
- mOsc
- musicTick
- drawHazards
- drawGame
- paintEsquisseBody
- drawIntro
- makeScoreCard
- lensGrad
- update
- drawZepLayer
- sFill
- drawBouliPlat
- fGradC
- checkUnlocks
- clipCircle
- drawRider
- drop
- globeCombo
- onThemeChange
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 48 edges
2. `updateGame()` - 40 edges
3. `save()` - 31 edges
4. `endRun()` - 27 edges
5. `land()` - 26 edges
6. `drawHazards()` - 26 edges
7. `startGame()` - 25 edges
8. `draw()` - 24 edges
9. `showScreen()` - 24 edges
10. `drawGame()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 1_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 12_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 2_
- `announceTrophies()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 0 → community 2_
- `drawIntro()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 0 → community 13_

## Import Cycles
- None detected.

## Communities (30 total, 10 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (76): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+68 more)

### Community 1 - "endRun"
Cohesion: 0.07
Nodes (71): adoptRemote(), animateXp(), arcadeRound(), boardRows(), bossRound(), buildCfg(), checkThemes(), clearBanner() (+63 more)

### Community 2 - "save"
Cohesion: 0.07
Nodes (61): afterSplash(), announceThemes(), announceTrophies(), audio(), cancelReveal(), checkTrophies(), checkWearUnlocks(), closeModeSheet() (+53 more)

### Community 4 - "draw"
Cohesion: 0.08
Nodes (41): airship(), balloon(), draw(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawBouli2(), drawGrade() (+33 more)

### Community 5 - "drawSky"
Cohesion: 0.08
Nodes (41): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+33 more)

### Community 6 - "usPaintStatic"
Cohesion: 0.08
Nodes (40): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+32 more)

### Community 7 - "showLevelIntro"
Cohesion: 0.12
Nodes (28): cascadeResults(), confettiDom(), countUp(), drawBoss(), drawBossIcon(), drawCrow(), drawDragon(), drawKraken() (+20 more)

### Community 8 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 9 - "musicTick"
Cohesion: 0.10
Nodes (25): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+17 more)

### Community 10 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 11 - "drawGame"
Cohesion: 0.10
Nodes (22): camZoom(), drawBallShadows(), drawBee(), drawBird(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever() (+14 more)

### Community 12 - "paintEsquisseBody"
Cohesion: 0.11
Nodes (21): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+13 more)

### Community 13 - "drawIntro"
Cohesion: 0.13
Nodes (18): coeurs(), drawBalloon(), drawFloats(), drawHome(), drawIntro(), drawMetalPlatform(), drawParticles(), drawRainbowRibbon() (+10 more)

### Community 14 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

### Community 15 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 16 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 17 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 18 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 19 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 20 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `drawGame`, `jeu-1.js`, `draw`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `endRun`, `save`, `jeu-1.js`, `showLevelIntro`, `paintEsquisseBody`, `drawIntro`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `endRun` be split into smaller, more focused modules?**
  _Cohesion score 0.0676056338028169 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `update`, `drop`, `save`, `jeu-1.js`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0392156862745098 - nodes in this community are weakly interconnected._