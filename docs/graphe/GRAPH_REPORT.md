# Graph Report - src  (2026-11-16)

## Corpus Check
- 3 files · ~182,261 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 657 nodes · 1886 edges · 33 communities (25 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- save
- draw
- startGame
- usPaintStatic
- drawBouli2
- drawSky
- mOsc
- drawHazards
- dayKey
- showLevelIntro
- paintEsquisseBody
- musicTick
- drawGame
- lensGrad
- drawParticles
- drawZepLayer
- drawBird
- sFill
- drawGardenSky
- drawBouliPlat
- cascadeResults
- fGradC
- ostLoad
- usPre
- checkUnlocks
- clipCircle
- drawRider
- globeCombo
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 52 edges
2. `updateGame()` - 44 edges
3. `save()` - 31 edges
4. `drawHazards()` - 28 edges
5. `endRun()` - 27 edges
6. `land()` - 26 edges
7. `startGame()` - 25 edges
8. `draw()` - 25 edges
9. `showScreen()` - 24 edges
10. `drawGame()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 8 → community 2_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 5 → community 4_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 5 → community 12_
- `ensureMissions()` --calls--> `hashStr()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 10 → community 4_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 10 → community 1_

## Import Cycles
- None detected.

## Communities (33 total, 8 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (88): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+80 more)

### Community 1 - "save"
Cohesion: 0.05
Nodes (77): afterSplash(), announceThemes(), announceTrophies(), audio(), bumpCoins(), cancelReveal(), checkTrophies(), checkWearUnlocks() (+69 more)

### Community 2 - "draw"
Cohesion: 0.06
Nodes (59): airship(), balloon(), bentTree(), birdV(), boat(), bolt(), ceiling(), cumulus() (+51 more)

### Community 4 - "startGame"
Cohesion: 0.09
Nodes (50): animateXp(), closeModal(), ensureMissions(), frDate(), G(), RAPIECE_SKIN, levelInfo(), makeBoss() (+42 more)

### Community 5 - "usPaintStatic"
Cohesion: 0.08
Nodes (40): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+32 more)

### Community 6 - "drawBouli2"
Cohesion: 0.07
Nodes (37): arcadeSky(), baronSync(), drawBalloon(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawBouli2(), drawGrenierSky() (+29 more)

### Community 7 - "drawSky"
Cohesion: 0.10
Nodes (35): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+27 more)

### Community 8 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 9 - "drawHazards"
Cohesion: 0.08
Nodes (26): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+18 more)

### Community 10 - "dayKey"
Cohesion: 0.13
Nodes (24): adoptRemote(), arcadeRound(), boardRows(), bossRound(), buildCfg(), dailyInfo(), dayKey(), daysBetween() (+16 more)

### Community 11 - "showLevelIntro"
Cohesion: 0.20
Nodes (18): drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon(), drawKraken(), drawMantis() (+10 more)

### Community 12 - "paintEsquisseBody"
Cohesion: 0.12
Nodes (20): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+12 more)

### Community 13 - "musicTick"
Cohesion: 0.14
Nodes (19): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+11 more)

### Community 14 - "drawGame"
Cohesion: 0.12
Nodes (18): camZoom(), drawBallShadows(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand() (+10 more)

### Community 15 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 16 - "drawParticles"
Cohesion: 0.25
Nodes (8): coeurs(), drawHome(), drawParticles(), drawStarKite(), etoiles(), starKitePts(), wHeart(), wStar5()

### Community 17 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 18 - "drawBird"
Cohesion: 0.40
Nodes (5): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt()

### Community 19 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 20 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 21 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 22 - "cascadeResults"
Cohesion: 0.67
Nodes (3): cascadeResults(), confettiDom(), countUp()

### Community 23 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 24 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

### Community 25 - "usPre"
Cohesion: 0.67
Nodes (3): usMagnetK(), usPistonExt(), usPre()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `draw`, `drawBird`, `jeu-1.js`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.055381400208986416 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `draw`, `jeu-1.js`, `startGame`, `paintEsquisseBody`, `usPre`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.050239234449760764 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `save`, `draw`, `jeu-1.js`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `draw` be split into smaller, more focused modules?**
  _Cohesion score 0.061367621274108705 - nodes in this community are weakly interconnected._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._