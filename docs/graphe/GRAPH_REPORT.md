# Graph Report - src  (2026-11-16)

## Corpus Check
- 3 files · ~176,960 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 636 nodes · 1826 edges · 26 communities (23 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 43 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- save
- buzz
- jeu-1.js
- draw
- drawSky
- usPaintStatic
- showLevelIntro
- hcWindow
- mOsc
- paintSkin
- drawHazards
- drawIntro
- musicTick
- drawGame
- lensGrad
- update
- drawParticles
- storyRound
- drawZepLayer
- sFill
- drawBouliPlat
- resize
- ostLoad
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 50 edges
2. `updateGame()` - 43 edges
3. `save()` - 31 edges
4. `drawHazards()` - 27 edges
5. `endRun()` - 27 edges
6. `land()` - 26 edges
7. `startGame()` - 25 edges
8. `draw()` - 25 edges
9. `showScreen()` - 24 edges
10. `drawGame()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 21 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 5 → community 0_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 5 → community 7_
- `announceTrophies()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 0_
- `drawIntro()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 11_

## Import Cycles
- None detected.

## Communities (26 total, 3 thin omitted)

### Community 0 - "save"
Cohesion: 0.05
Nodes (101): adoptRemote(), afterSplash(), animateXp(), announceThemes(), announceTrophies(), boardRows(), buildCfg(), checkThemes() (+93 more)

### Community 1 - "buzz"
Cohesion: 0.06
Nodes (81): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+73 more)

### Community 2 - "jeu-1.js"
Cohesion: 0.03
Nodes (8): checkUnlocks(), clipCircle(), drawRider(), flagClip(), globeCombo(), globeStep(), shadeHexDark(), unlockMet()

### Community 3 - "draw"
Cohesion: 0.07
Nodes (47): airship(), balloon(), birdV(), cumulus(), dock(), dragonTail(), draw(), drawBouli2() (+39 more)

### Community 4 - "drawSky"
Cohesion: 0.08
Nodes (43): cachedLayer(), cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky() (+35 more)

### Community 5 - "usPaintStatic"
Cohesion: 0.08
Nodes (41): armGeom(), armIK(), armJoint(), armSeg(), drawArm(), drawArmBody(), drawArmIcon(), homeCloudsReset() (+33 more)

### Community 6 - "showLevelIntro"
Cohesion: 0.11
Nodes (30): cascadeResults(), confettiDom(), countUp(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans() (+22 more)

### Community 7 - "hcWindow"
Cohesion: 0.08
Nodes (30): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro() (+22 more)

### Community 8 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 9 - "paintSkin"
Cohesion: 0.10
Nodes (26): arcadeSky(), baronSync(), drawBalloon(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawMetalPlatform(), drawOutfit() (+18 more)

### Community 10 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 11 - "drawIntro"
Cohesion: 0.11
Nodes (24): audio(), cancelReveal(), closeModeSheet(), drawFloats(), drawIntro(), drawRocket(), endIntro(), introCaption() (+16 more)

### Community 12 - "musicTick"
Cohesion: 0.12
Nodes (22): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+14 more)

### Community 13 - "drawGame"
Cohesion: 0.10
Nodes (22): camZoom(), drawBallShadows(), drawBee(), drawBird(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever() (+14 more)

### Community 14 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 15 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 16 - "drawParticles"
Cohesion: 0.25
Nodes (8): coeurs(), drawHome(), drawParticles(), drawStarKite(), etoiles(), starKitePts(), wHeart(), wStar5()

### Community 17 - "storyRound"
Cohesion: 0.27
Nodes (6): arcadeRound(), bossRound(), drawNightmare(), drawWizard(), fGradC(), storyRound()

### Community 18 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 19 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 20 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 21 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

### Community 22 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `jeu-1.js`, `draw`, `drawGame`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.05485148514851485 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `jeu-1.js`, `usPaintStatic`, `showLevelIntro`, `hcWindow`, `drawIntro`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.06018518518518518 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `save`, `jeu-1.js`, `update`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.034972677595628415 - nodes in this community are weakly interconnected._
- **Should `draw` be split into smaller, more focused modules?**
  _Cohesion score 0.07446808510638298 - nodes in this community are weakly interconnected._