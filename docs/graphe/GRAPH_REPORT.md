# Graph Report - src  (2026-11-17)

## Corpus Check
- 3 files · ~189,728 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 694 nodes · 1975 edges · 42 communities (33 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- usPaintStatic
- drawSky
- save
- mOsc
- startGame
- drawHazards
- hcWindow
- showLevelIntro
- drawGame
- dayKey
- draw
- showScreen
- drawIntro
- mix
- uniqueResult
- zoneV
- showResults
- musicTick
- drawBalloon
- unlockAudio
- makeScoreCard
- zone2
- drawBouli2
- paintSkin
- fxLayer
- lensGrad
- update
- drawZepLayer
- sFill
- drawBouliPlat
- fGradC
- resize
- checkUnlocks
- chip
- clipCircle
- drawRider
- globeCombo
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 55 edges
2. `updateGame()` - 45 edges
3. `save()` - 31 edges
4. `drawHazards()` - 29 edges
5. `endRun()` - 27 edges
6. `land()` - 26 edges
7. `startGame()` - 25 edges
8. `floatText()` - 25 edges
9. `draw()` - 25 edges
10. `showScreen()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 5 → community 12_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 33 → community 13_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 11_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 8_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 11 → community 4_

## Import Cycles
- None detected.

## Communities (42 total, 9 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (86): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+78 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.06
Nodes (48): arcadeRound(), armGeom(), armIK(), armJoint(), armSeg(), bossRound(), buildCfg(), cachedLayer() (+40 more)

### Community 3 - "drawSky"
Cohesion: 0.08
Nodes (41): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+33 more)

### Community 4 - "save"
Cohesion: 0.15
Nodes (31): afterSplash(), announceThemes(), announceTrophies(), checkThemes(), checkTrophies(), checkWearUnlocks(), clearBanner(), copyText() (+23 more)

### Community 5 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 6 - "startGame"
Cohesion: 0.18
Nodes (27): closeModal(), frDate(), G(), makeBoss(), makeFog(), musicLabel(), newDuelId(), on() (+19 more)

### Community 7 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 8 - "hcWindow"
Cohesion: 0.09
Nodes (25): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro(), hcPaperFor(), hcPaperPattern() (+17 more)

### Community 9 - "showLevelIntro"
Cohesion: 0.16
Nodes (22): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+14 more)

### Community 10 - "drawGame"
Cohesion: 0.10
Nodes (22): camZoom(), drawBallShadows(), drawBee(), drawBird(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever() (+14 more)

### Community 11 - "dayKey"
Cohesion: 0.16
Nodes (21): adoptRemote(), boardRows(), dailyInfo(), dayKey(), daysBetween(), ensureDaily(), ensureMissions(), hashStr() (+13 more)

### Community 12 - "draw"
Cohesion: 0.18
Nodes (18): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), hills(), house() (+10 more)

### Community 13 - "showScreen"
Cohesion: 0.13
Nodes (18): audio(), closeModeSheet(), handleHash(), hcClear(), hcClose(), hcOpenPage(), hcReward(), hcRewStop() (+10 more)

### Community 14 - "drawIntro"
Cohesion: 0.14
Nodes (18): cancelReveal(), drawFloats(), drawIntro(), drawRocket(), endIntro(), introCaption(), introFall(), introOnce() (+10 more)

### Community 15 - "mix"
Cohesion: 0.17
Nodes (18): ceiling(), dragonTail(), gear(), haze(), hex(), kid(), kite(), lamp() (+10 more)

### Community 16 - "uniqueResult"
Cohesion: 0.17
Nodes (15): cascadeResults(), confettiDom(), countUp(), RAPIECE_SKIN, uniqueResult(), uniqueTrigger(), uqClear(), uqClose() (+7 more)

### Community 17 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 18 - "showResults"
Cohesion: 0.21
Nodes (13): animateXp(), duelLink(), paintPreviews(), renderDuelBoard(), renderTrophies(), shareCard(), showDuelResults(), showResults() (+5 more)

### Community 19 - "musicTick"
Cohesion: 0.19
Nodes (13): applySong(), musicGraph(), musicLevel(), musicTick(), ostDecode(), ostGraph(), ostLoad(), ostStart() (+5 more)

### Community 20 - "drawBalloon"
Cohesion: 0.15
Nodes (13): coeurs(), drawBalloon(), drawHome(), drawMetalPlatform(), drawParticles(), drawRainbowRibbon(), drawStarKite(), easeBack() (+5 more)

### Community 21 - "unlockAudio"
Cohesion: 0.21
Nodes (12): audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx(), newAudioContext() (+4 more)

### Community 22 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

### Community 23 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 24 - "drawBouli2"
Cohesion: 0.25
Nodes (11): drawBouli2(), drawGrenierSky(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp() (+3 more)

### Community 25 - "paintSkin"
Cohesion: 0.27
Nodes (10): baronSync(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawPin(), drawPreview(), drawStoryScene(), drawWearPreview() (+2 more)

### Community 26 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 27 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 28 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 29 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 30 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 31 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 32 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 33 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `jeu-1.js`, `drawGame`, `draw`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.058002735978112174 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `usPaintStatic`, `save`, `startGame`, `hcWindow`, `showScreen`, `drawIntro`, `uniqueResult`, `showResults`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.03333333333333333 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `jeu-1.js`, `update`, `save`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.06294326241134751 - nodes in this community are weakly interconnected._
- **Should `drawSky` be split into smaller, more focused modules?**
  _Cohesion score 0.07804878048780488 - nodes in this community are weakly interconnected._