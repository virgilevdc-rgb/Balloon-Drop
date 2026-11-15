# Graph Report - src  (2026-11-15)

## Corpus Check
- 3 files · ~153,109 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 572 nodes · 1631 edges · 29 communities (21 shown, 8 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- startGame
- save
- drawIntro
- drawSky
- usPaintStatic
- mOsc
- drawHazards
- musicTick
- showLevelIntro
- paintEsquisseBody
- drawGame
- draw
- drawBouli2
- lensGrad
- update
- drawParticles
- drawZepLayer
- cascadeResults
- fGradC
- ostLoad
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
5. `drawHazards()` - 26 edges
6. `startGame()` - 25 edges
7. `land()` - 24 edges
8. `showScreen()` - 24 edges
9. `showResults()` - 23 edges
10. `drawGame()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `endRun()` --indirect_call--> `flushToasts()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 0 → community 2_
- `uqOpen()` --indirect_call--> `uqLoop()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 10 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 1_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 11_
- `usSparks()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 10_

## Import Cycles
- None detected.

## Communities (29 total, 8 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.05
Nodes (91): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+83 more)

### Community 1 - "startGame"
Cohesion: 0.07
Nodes (61): adoptRemote(), animateXp(), arcadeRound(), boardRows(), bossRound(), buildCfg(), closeModal(), dailyInfo() (+53 more)

### Community 2 - "save"
Cohesion: 0.07
Nodes (55): afterSplash(), announceThemes(), announceTrophies(), audio(), checkThemes(), checkTrophies(), checkWearUnlocks(), closeModeSheet() (+47 more)

### Community 4 - "drawIntro"
Cohesion: 0.07
Nodes (38): arcadeSky(), cancelReveal(), drawBalloon(), drawFloats(), drawIntro(), drawMetalPlatform(), drawOutfit(), drawPreview() (+30 more)

### Community 5 - "drawSky"
Cohesion: 0.09
Nodes (37): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+29 more)

### Community 6 - "usPaintStatic"
Cohesion: 0.08
Nodes (36): cachedLayer(), drawGardenSky(), drawUsineSky(), gBlade(), gScene(), gSoil(), homeCloudsReset(), mulberry32() (+28 more)

### Community 7 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 8 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 9 - "musicTick"
Cohesion: 0.12
Nodes (22): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+14 more)

### Community 10 - "showLevelIntro"
Cohesion: 0.17
Nodes (22): armGeom(), armIK(), armJoint(), armSeg(), drawArm(), drawArmBody(), drawArmIcon(), drawBoss() (+14 more)

### Community 11 - "paintEsquisseBody"
Cohesion: 0.11
Nodes (21): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+13 more)

### Community 12 - "drawGame"
Cohesion: 0.12
Nodes (17): camZoom(), drawBallShadows(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFog(), drawGame(), drawHand() (+9 more)

### Community 13 - "draw"
Cohesion: 0.15
Nodes (11): bBoard(), bShark(), draw(), drawBee(), drawBird(), drawGrade(), drawMiniKite(), drawRain() (+3 more)

### Community 14 - "drawBouli2"
Cohesion: 0.29
Nodes (10): drawBouli2(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp(), mScarf() (+2 more)

### Community 15 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 16 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 17 - "drawParticles"
Cohesion: 0.33
Nodes (6): coeurs(), drawHome(), drawParticles(), etoiles(), wHeart(), wStar5()

### Community 18 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 19 - "cascadeResults"
Cohesion: 0.67
Nodes (3): cascadeResults(), confettiDom(), countUp()

### Community 20 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 21 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `draw` to `showLevelIntro`, `jeu-1.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.05201465201465202 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `startGame`, `save`, `jeu-1.js`, `drawIntro`, `paintEsquisseBody`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `startGame` be split into smaller, more focused modules?**
  _Cohesion score 0.07431693989071038 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `update`, `save`, `jeu-1.js`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._