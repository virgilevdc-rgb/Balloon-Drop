# Graph Report - src  (2026-11-20)

## Corpus Check
- 3 files · ~243,659 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 860 nodes · 2378 edges · 48 communities (36 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- save
- buzz
- usPaintStatic
- draw
- bgZone
- drawIntro
- fxZone
- drawHazards
- mOsc
- drawBoss
- musicTick
- paintEsquisseBody
- zone1
- uniqueResult
- drawGame
- zoneV
- mix
- drawSky
- drawGoldPlatform
- fGrad
- makeScoreCard
- zone2
- fxLayer
- drawSnake2
- lensGrad
- body
- kraken3
- drawZepLayer
- yeti2
- pgDraw
- drawBird
- updateSiphon
- drawBouliPlat
- fGradC
- pic
- resize
- checkUnlocks
- chip
- clipCircle
- drawPlatform
- drawRider
- drawTreasure
- globeCombo
- heldBall
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 64 edges
2. `updateGame()` - 49 edges
3. `bgZone()` - 45 edges
4. `floatText()` - 37 edges
5. `fxZone()` - 37 edges
6. `mix()` - 36 edges
7. `save()` - 34 edges
8. `drawHazards()` - 29 edges
9. `endRun()` - 28 edges
10. `land()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 9 → community 4_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 36 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 0_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 12_
- `announceTrophies()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 0_

## Import Cycles
- None detected.

## Communities (48 total, 12 thin omitted)

### Community 0 - "save"
Cohesion: 0.05
Nodes (107): adoptRemote(), afterSplash(), animateXp(), announceThemes(), announceTrophies(), audio(), boardRows(), checkThemes() (+99 more)

### Community 1 - "buzz"
Cohesion: 0.05
Nodes (99): acceptSecond(), addScore(), afterLoss(), banner(), banqTap(), baseR(), bossDamage(), bossDefeat() (+91 more)

### Community 3 - "usPaintStatic"
Cohesion: 0.06
Nodes (52): arcadeRound(), armGeom(), armIK(), armJoint(), armSeg(), bossRound(), buildCfg(), cachedLayer() (+44 more)

### Community 4 - "draw"
Cohesion: 0.06
Nodes (44): airship(), balloon(), baronSync(), bumpCoins(), draw(), drawBaron(), drawBaronBoss(), drawBaronShip() (+36 more)

### Community 5 - "bgZone"
Cohesion: 0.08
Nodes (35): aurora(), bgZone(), bromeliad(), bush(), canopy(), caveFloor(), coral(), cornerLeaves() (+27 more)

### Community 6 - "drawIntro"
Cohesion: 0.07
Nodes (35): cancelReveal(), coeurs(), drawBalloon(), drawFloats(), drawHome(), drawIntro(), drawMetalPlatform(), drawParticles() (+27 more)

### Community 7 - "fxZone"
Cohesion: 0.07
Nodes (32): babyDraw(), baitBall(), bat(), blizzardStreaks(), caustics(), clown(), cuteEye(), dog() (+24 more)

### Community 8 - "drawHazards"
Cohesion: 0.06
Nodes (31): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+23 more)

### Community 9 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 10 - "drawBoss"
Cohesion: 0.14
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 11 - "musicTick"
Cohesion: 0.10
Nodes (25): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+17 more)

### Community 12 - "paintEsquisseBody"
Cohesion: 0.11
Nodes (21): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+13 more)

### Community 13 - "zone1"
Cohesion: 0.13
Nodes (20): ceiling(), dragonTail(), drawFog(), feathers(), haze(), kid(), kite(), lamp() (+12 more)

### Community 14 - "uniqueResult"
Cohesion: 0.17
Nodes (17): cascadeResults(), confettiDom(), countUp(), RAPIECE_SKIN, penguinFound(), uniqueResult(), uniqueTrigger(), updatePenguin() (+9 more)

### Community 15 - "drawGame"
Cohesion: 0.13
Nodes (16): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+8 more)

### Community 16 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 17 - "mix"
Cohesion: 0.17
Nodes (15): banana(), drift(), elephantEar(), gear(), hex(), hills(), igloo(), mix() (+7 more)

### Community 18 - "drawSky"
Cohesion: 0.17
Nodes (15): cloud(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky(), drawLava() (+7 more)

### Community 19 - "drawGoldPlatform"
Cohesion: 0.26
Nodes (12): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMirrorPlatform(), drawPlatformInner(), drawSiphon() (+4 more)

### Community 20 - "fGrad"
Cohesion: 0.24
Nodes (12): drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMacaron(), drawMist(), drawPillow() (+4 more)

### Community 21 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

### Community 22 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 23 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 24 - "drawSnake2"
Cohesion: 0.25
Nodes (9): drawSnake2(), drawSnakeHypno(), drawSnakeSwim(), drawTrunk(), snHead(), snHeadDraw(), snPalette(), snPath() (+1 more)

### Community 25 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 26 - "body"
Cohesion: 0.25
Nodes (8): bBoard(), body(), bShark(), drawOgre(), drawYetiBoss(), drawYetiDefeat(), sFill(), sHead()

### Community 27 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 28 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 29 - "yeti2"
Cohesion: 0.47
Nodes (6): furEdge(), furMass(), iceHorn(), tuft(), yeti2(), yetiPal2()

### Community 30 - "pgDraw"
Cohesion: 0.40
Nodes (5): bundleBig(), pgDraw(), pingu(), pinguCarrier(), yTxt()

### Community 31 - "drawBird"
Cohesion: 0.50
Nodes (4): drawBee(), drawBird(), drawMiniKite(), drawSheep()

### Community 32 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 33 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 34 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 35 - "pic"
Cohesion: 0.67
Nodes (3): iceGrad(), pic(), platBase()

### Community 36 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

## Knowledge Gaps
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `draw`, `drawBird`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.051666372773761245 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `jeu-1.js`, `usPaintStatic`, `drawIntro`, `paintEsquisseBody`, `uniqueResult`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.050505050505050504 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `save`, `updateSiphon`, `jeu-1.js`, `draw`, `heldBall`, `zone1`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.024390243902439025 - nodes in this community are weakly interconnected._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.05656108597285068 - nodes in this community are weakly interconnected._