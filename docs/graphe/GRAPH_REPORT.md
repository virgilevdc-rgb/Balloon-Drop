# Graph Report - src  (2026-11-24)

## Corpus Check
- 3 files · ~248,277 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 870 nodes · 2406 edges · 56 communities (44 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 48 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- startGame
- draw
- drawIntro
- usPaintStatic
- save
- fxZone
- hcWindow
- buzz
- mOsc
- drawHazards
- drawBoss
- bgZone
- endRun
- musicTick
- zone1
- drawGame
- newRound
- updateBoss
- uniqueResult
- drawSky
- updateGame
- zoneV
- leaf
- zone2
- drawGoldPlatform
- mix
- drawSnake2
- fxLayer
- lensGrad
- fGrad
- kraken3
- drawZepLayer
- yeti2
- pgDraw
- drawBird
- drawGardenSky
- drawStarKite
- updateSiphon
- drawBouliPlat
- drawMirrorBossG
- fGradC
- drawSiphon
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
1. `buzz()` - 65 edges
2. `updateGame()` - 49 edges
3. `bgZone()` - 45 edges
4. `floatText()` - 38 edges
5. `fxZone()` - 37 edges
6. `mix()` - 36 edges
7. `save()` - 34 edges
8. `draw()` - 32 edges
9. `drawHazards()` - 29 edges
10. `endRun()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 9 → community 2_
- `land()` --indirect_call--> `newRound()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 17 → community 13_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 44 → community 1_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 4 → community 1_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 4 → community 7_

## Import Cycles
- None detected.

## Communities (56 total, 12 thin omitted)

### Community 1 - "startGame"
Cohesion: 0.06
Nodes (75): adoptRemote(), animateXp(), arcadeRound(), boardRows(), bossRound(), buildCfg(), clearBanner(), closeModal() (+67 more)

### Community 2 - "draw"
Cohesion: 0.05
Nodes (56): airship(), balloon(), baronSync(), bBoard(), body(), bShark(), cracksPath(), draw() (+48 more)

### Community 3 - "drawIntro"
Cohesion: 0.05
Nodes (48): arcadeSky(), audio(), cancelReveal(), closeModeSheet(), coeurs(), drawBalloon(), drawFloats(), drawHome() (+40 more)

### Community 4 - "usPaintStatic"
Cohesion: 0.07
Nodes (43): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+35 more)

### Community 5 - "save"
Cohesion: 0.14
Nodes (32): afterSplash(), announceThemes(), announceTrophies(), bumpCoins(), checkTrophies(), checkWearUnlocks(), copyText(), drawMystery() (+24 more)

### Community 6 - "fxZone"
Cohesion: 0.07
Nodes (32): babyDraw(), baitBall(), bat(), blizzardStreaks(), caustics(), clown(), cuteEye(), dog() (+24 more)

### Community 7 - "hcWindow"
Cohesion: 0.09
Nodes (29): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro() (+21 more)

### Community 8 - "buzz"
Cohesion: 0.12
Nodes (28): banqTap(), bouliPre(), burst(), buzz(), checkLanding(), critterHit(), floatText(), hazardHit() (+20 more)

### Community 9 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 10 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 11 - "drawBoss"
Cohesion: 0.13
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 12 - "bgZone"
Cohesion: 0.09
Nodes (23): aurora(), bgZone(), caveFloor(), coral(), crystal(), fishHole(), iceCave(), iceSheet() (+15 more)

### Community 13 - "endRun"
Cohesion: 0.16
Nodes (22): addScore(), bossDamage(), bossDefeat(), checkThemes(), collect(), confetti(), dust(), endRun() (+14 more)

### Community 14 - "musicTick"
Cohesion: 0.12
Nodes (22): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+14 more)

### Community 15 - "zone1"
Cohesion: 0.12
Nodes (21): ceiling(), dragonTail(), drawFog(), feathers(), haze(), kid(), kite(), lamp() (+13 more)

### Community 16 - "drawGame"
Cohesion: 0.12
Nodes (18): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+10 more)

### Community 17 - "newRound"
Cohesion: 0.24
Nodes (17): acceptSecond(), afterLoss(), banner(), baseR(), burstBall(), eatBall(), hideHint(), newRound() (+9 more)

### Community 18 - "updateBoss"
Cohesion: 0.12
Nodes (17): bossMouth(), drawShell(), lobArc(), popBall(), releaseMonkeyBall(), spawnIcicle(), splash(), updateBoss() (+9 more)

### Community 19 - "uniqueResult"
Cohesion: 0.20
Nodes (16): cascadeResults(), confettiDom(), countUp(), penguinFound(), uniqueResult(), uniqueTrigger(), updatePenguin(), uqClear() (+8 more)

### Community 20 - "drawSky"
Cohesion: 0.16
Nodes (16): cloud(), drawChoco(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky() (+8 more)

### Community 21 - "updateGame"
Cohesion: 0.13
Nodes (16): drop(), emitTrail(), miss(), release(), showHint(), spawnBird(), spawnDew(), spawnDreamBubble() (+8 more)

### Community 22 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 23 - "leaf"
Cohesion: 0.18
Nodes (13): bromeliad(), bush(), canopy(), cornerLeaves(), emergent(), fern(), forestPlane(), heliconia() (+5 more)

### Community 24 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 25 - "drawGoldPlatform"
Cohesion: 0.33
Nodes (11): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMacaron(), drawMirrorPlatform(), drawPillow() (+3 more)

### Community 26 - "mix"
Cohesion: 0.22
Nodes (10): banana(), drift(), elephantEar(), gear(), hex(), igloo(), mix(), monstera() (+2 more)

### Community 27 - "drawSnake2"
Cohesion: 0.24
Nodes (10): drawSnake2(), drawSnakeHypno(), drawSnakeSwim(), drawTrunk(), snHead(), snHeadDraw(), snPalette(), snPath() (+2 more)

### Community 28 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 29 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 30 - "fGrad"
Cohesion: 0.43
Nodes (8): drawCandySky(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMist(), fCached(), fGrad(), fPuff()

### Community 31 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 32 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 33 - "yeti2"
Cohesion: 0.47
Nodes (6): furEdge(), furMass(), iceHorn(), tuft(), yeti2(), yetiPal2()

### Community 34 - "pgDraw"
Cohesion: 0.40
Nodes (5): bundleBig(), pgDraw(), pingu(), pinguCarrier(), yTxt()

### Community 35 - "drawBird"
Cohesion: 0.40
Nodes (5): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt()

### Community 36 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 37 - "drawStarKite"
Cohesion: 0.50
Nodes (4): drawStarKite(), etoiles(), starKitePts(), wStar5()

### Community 38 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 39 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 40 - "drawMirrorBossG"
Cohesion: 0.67
Nodes (3): drawGlassShard(), drawMirrorBossG(), glassSkin()

### Community 41 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 42 - "drawSiphon"
Cohesion: 0.67
Nodes (3): drawSiphon(), sipOcc(), sipWhirl()

### Community 43 - "pic"
Cohesion: 0.67
Nodes (3): iceGrad(), pic(), platBase()

### Community 44 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

## Knowledge Gaps
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `draw`, `drawBird`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.024096385542168676 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `startGame`, `drawIntro`, `usPaintStatic`, `save`, `hcWindow`, `endRun`, `newRound`, `updateBoss`, `uniqueResult`, `updateGame`, `drawSnake2`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `startGame` be split into smaller, more focused modules?**
  _Cohesion score 0.06126126126126126 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `updateGame` to `jeu-1.js`, `save`, `updateSiphon`, `buzz`, `endRun`, `zone1`, `newRound`, `updateBoss`, `heldBall`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Should `draw` be split into smaller, more focused modules?**
  _Cohesion score 0.05137844611528822 - nodes in this community are weakly interconnected._
- **Should `drawIntro` be split into smaller, more focused modules?**
  _Cohesion score 0.054078014184397165 - nodes in this community are weakly interconnected._