# Graph Report - src  (2026-11-13)

## Corpus Check
- 3 files · ~150,098 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 565 nodes · 1614 edges · 31 communities (23 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 38 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- save
- buzz
- usPaintStatic
- drawSky
- showLevelIntro
- drawIntro
- mOsc
- drawHazards
- musicTick
- draw
- dayKey
- paintEsquisseBody
- uniqueResult
- makeScoreCard
- lensGrad
- update
- drawParticles
- drawZepLayer
- hcPeekEl
- drawGardenSky
- fGradC
- resize
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
6. `startGame()` - 24 edges
7. `land()` - 24 edges
8. `showScreen()` - 24 edges
9. `showResults()` - 23 edges
10. `closeModal()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `endRun()` --indirect_call--> `flushToasts()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 0_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 22 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 0_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 12_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 11 → community 1_

## Import Cycles
- None detected.

## Communities (31 total, 8 thin omitted)

### Community 0 - "save"
Cohesion: 0.06
Nodes (85): adoptRemote(), afterSplash(), animateXp(), announceThemes(), announceTrophies(), checkThemes(), checkWearUnlocks(), closeModal() (+77 more)

### Community 1 - "buzz"
Cohesion: 0.06
Nodes (83): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+75 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.06
Nodes (48): arcadeRound(), armGeom(), armIK(), armJoint(), armSeg(), bossRound(), buildCfg(), cachedLayer() (+40 more)

### Community 4 - "drawSky"
Cohesion: 0.09
Nodes (37): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+29 more)

### Community 5 - "showLevelIntro"
Cohesion: 0.10
Nodes (29): camZoom(), drawBallShadows(), drawBee(), drawBird(), drawBoss(), drawBossIcon(), drawCloudSea(), drawCoin() (+21 more)

### Community 6 - "drawIntro"
Cohesion: 0.09
Nodes (29): audio(), cancelReveal(), closeModeSheet(), drawBalloon(), drawFloats(), drawIntro(), drawMetalPlatform(), drawRainbowRibbon() (+21 more)

### Community 7 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 8 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 9 - "musicTick"
Cohesion: 0.12
Nodes (22): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+14 more)

### Community 10 - "draw"
Cohesion: 0.15
Nodes (17): bBoard(), bShark(), draw(), drawBouli2(), drawGrade(), drawRain(), mArm(), mBlush() (+9 more)

### Community 11 - "dayKey"
Cohesion: 0.23
Nodes (15): boardRows(), dayKey(), daysBetween(), duelLink(), initNet(), liveStreak(), myDoc(), onNetChange() (+7 more)

### Community 12 - "paintEsquisseBody"
Cohesion: 0.16
Nodes (15): drawHCSky(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPencil(), hcQUrl() (+7 more)

### Community 13 - "uniqueResult"
Cohesion: 0.21
Nodes (14): cascadeResults(), confettiDom(), countUp(), uniqueResult(), uniqueTrigger(), uqClear(), uqClose(), uqFlash() (+6 more)

### Community 14 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

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

### Community 19 - "hcPeekEl"
Cohesion: 0.33
Nodes (6): hcCanPull(), hcPeekEl(), hcPullApply(), hcPullEnd(), hcPullMove(), hcPullStart()

### Community 20 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 21 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 22 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

### Community 23 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `draw`, `jeu-1.js`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.05546218487394958 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `usPaintStatic`, `jeu-1.js`, `drawIntro`, `uniqueResult`, `hcPeekEl`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.061416397296503084 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `update`, `jeu-1.js`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.06294326241134751 - nodes in this community are weakly interconnected._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._