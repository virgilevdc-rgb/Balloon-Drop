# Graph Report - src  (2026-11-15)

## Corpus Check
- 3 files · ~156,225 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 577 nodes · 1641 edges · 28 communities (20 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- save
- buzz
- usPaintStatic
- drawIntro
- drawSky
- hcWindow
- mOsc
- musicTick
- showLevelIntro
- drawHazards
- drawGame
- draw
- drawBouli2
- buildCfg
- lensGrad
- update
- kiteKit
- drawZepLayer
- drawGardenSky
- fGradC
- checkUnlocks
- clipCircle
- drawRider
- globeCombo
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 48 edges
2. `updateGame()` - 40 edges
3. `save()` - 30 edges
4. `endRun()` - 27 edges
5. `land()` - 26 edges
6. `drawHazards()` - 26 edges
7. `startGame()` - 25 edges
8. `showScreen()` - 24 edges
9. `drawGame()` - 23 edges
10. `showResults()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 0_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 6_
- `seededRng()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 14_
- `ensureMissions()` --calls--> `hashStr()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 14 → community 0_
- `announceTrophies()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 0_

## Import Cycles
- None detected.

## Communities (28 total, 8 thin omitted)

### Community 0 - "save"
Cohesion: 0.05
Nodes (108): adoptRemote(), afterSplash(), animateXp(), announceThemes(), announceTrophies(), audio(), boardRows(), checkThemes() (+100 more)

### Community 1 - "buzz"
Cohesion: 0.06
Nodes (75): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+67 more)

### Community 3 - "usPaintStatic"
Cohesion: 0.07
Nodes (42): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+34 more)

### Community 4 - "drawIntro"
Cohesion: 0.07
Nodes (38): arcadeSky(), cancelReveal(), drawBalloon(), drawFloats(), drawIntro(), drawMetalPlatform(), drawOutfit(), drawPreview() (+30 more)

### Community 5 - "drawSky"
Cohesion: 0.09
Nodes (37): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawCloudPlat(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky() (+29 more)

### Community 6 - "hcWindow"
Cohesion: 0.08
Nodes (30): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro() (+22 more)

### Community 7 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 8 - "musicTick"
Cohesion: 0.10
Nodes (25): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+17 more)

### Community 9 - "showLevelIntro"
Cohesion: 0.15
Nodes (25): cascadeResults(), confettiDom(), countUp(), drawBoss(), drawBossIcon(), drawCrow(), drawDragon(), drawKraken() (+17 more)

### Community 10 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 11 - "drawGame"
Cohesion: 0.12
Nodes (17): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawFog(), drawGame(), drawHand() (+9 more)

### Community 12 - "draw"
Cohesion: 0.15
Nodes (13): bBoard(), bShark(), coeurs(), draw(), drawGrade(), drawHome(), drawParticles(), drawRain() (+5 more)

### Community 13 - "drawBouli2"
Cohesion: 0.29
Nodes (10): drawBouli2(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp(), mScarf() (+2 more)

### Community 14 - "buildCfg"
Cohesion: 0.32
Nodes (8): arcadeRound(), bossRound(), buildCfg(), dailyInfo(), hashStr(), seededRng(), storyRound(), zenRound()

### Community 15 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 16 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 17 - "kiteKit"
Cohesion: 0.25
Nodes (6): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt(), kiteKit()

### Community 18 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 19 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 20 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `kiteKit` to `showLevelIntro`, `jeu-1.js`, `draw`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.05001730702665282 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `jeu-1.js`, `usPaintStatic`, `drawIntro`, `hcWindow`, `showLevelIntro`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.06306306306306306 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `update`, `save`, `jeu-1.js`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.0743321718931475 - nodes in this community are weakly interconnected._