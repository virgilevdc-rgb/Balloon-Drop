# Graph Report - src  (2026-11-19)

## Corpus Check
- 3 files · ~219,750 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 787 nodes · 2192 edges · 50 communities (38 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- save
- buzz
- usPaintStatic
- hcReward
- drawIntro
- zone1
- mOsc
- drawHazards
- drawBoss
- musicTick
- bgZone
- fxZone
- drawGame
- uniqueResult
- draw
- zoneV
- drawSky
- drawGoldPlatform
- fGrad
- makeScoreCard
- drawBouli2
- fxLayer
- mix
- lensGrad
- paintSkin
- update
- kraken3
- drawZepLayer
- yeti2
- pgDraw
- sFill
- drawBird
- drawGardenSky
- drawStarKite
- updateSiphon
- drawBouliPlat
- fGradC
- pic
- checkUnlocks
- chip
- clipCircle
- drawPlatform
- drawRider
- drawTreasure
- drawYetiBoss
- globeCombo
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 59 edges
2. `updateGame()` - 48 edges
3. `save()` - 33 edges
4. `floatText()` - 32 edges
5. `drawHazards()` - 29 edges
6. `endRun()` - 28 edges
7. `mix()` - 28 edges
8. `land()` - 27 edges
9. `draw()` - 27 edges
10. `startGame()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 7 → community 15_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 4 → community 0_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 0_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 3 → community 4_
- `acceptSecond()` --calls--> `buzz()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 0_

## Import Cycles
- None detected.

## Communities (50 total, 12 thin omitted)

### Community 0 - "save"
Cohesion: 0.05
Nodes (102): acceptSecond(), adoptRemote(), afterSplash(), animateXp(), announceThemes(), announceTrophies(), boardRows(), checkThemes() (+94 more)

### Community 1 - "buzz"
Cohesion: 0.05
Nodes (90): addScore(), afterLoss(), banner(), banqTap(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+82 more)

### Community 3 - "usPaintStatic"
Cohesion: 0.06
Nodes (48): arcadeRound(), armGeom(), armIK(), armJoint(), armSeg(), bossRound(), buildCfg(), cachedLayer() (+40 more)

### Community 4 - "hcReward"
Cohesion: 0.08
Nodes (34): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro() (+26 more)

### Community 5 - "drawIntro"
Cohesion: 0.08
Nodes (33): audio(), cancelReveal(), closeModeSheet(), coeurs(), drawBalloon(), drawFloats(), drawHome(), drawIntro() (+25 more)

### Community 6 - "zone1"
Cohesion: 0.10
Nodes (29): bentTree(), birdV(), boat(), ceiling(), cumulus(), dock(), dragonTail(), drawFog() (+21 more)

### Community 7 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 8 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 9 - "drawBoss"
Cohesion: 0.14
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 10 - "musicTick"
Cohesion: 0.10
Nodes (25): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+17 more)

### Community 11 - "bgZone"
Cohesion: 0.13
Nodes (17): aurora(), bgZone(), caveFloor(), coral(), crystal(), fishHole(), iceCave(), iceSheet() (+9 more)

### Community 12 - "fxZone"
Cohesion: 0.12
Nodes (17): baitBall(), blizzardStreaks(), caustics(), clown(), dog(), fishSchool(), flagPole(), fxZone() (+9 more)

### Community 13 - "drawGame"
Cohesion: 0.13
Nodes (16): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+8 more)

### Community 14 - "uniqueResult"
Cohesion: 0.17
Nodes (15): cascadeResults(), confettiDom(), countUp(), RAPIECE_SKIN, uniqueResult(), uniqueTrigger(), uqClear(), uqClose() (+7 more)

### Community 15 - "draw"
Cohesion: 0.21
Nodes (15): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), house(), island() (+7 more)

### Community 16 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 17 - "drawSky"
Cohesion: 0.17
Nodes (15): cloud(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky(), drawLava() (+7 more)

### Community 18 - "drawGoldPlatform"
Cohesion: 0.26
Nodes (12): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMirrorPlatform(), drawPlatformInner(), drawSiphon() (+4 more)

### Community 19 - "fGrad"
Cohesion: 0.24
Nodes (12): drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMacaron(), drawMist(), drawPillow() (+4 more)

### Community 20 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

### Community 21 - "drawBouli2"
Cohesion: 0.25
Nodes (11): drawBouli2(), drawGrenierSky(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp() (+3 more)

### Community 22 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 23 - "mix"
Cohesion: 0.28
Nodes (9): drift(), gear(), hex(), hills(), igloo(), mix(), popped(), shade() (+1 more)

### Community 24 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 25 - "paintSkin"
Cohesion: 0.36
Nodes (8): baronSync(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawPin(), drawStoryScene(), gloss(), paintSkin()

### Community 26 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

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

### Community 31 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 32 - "drawBird"
Cohesion: 0.50
Nodes (4): drawBee(), drawBird(), drawMiniKite(), drawSheep()

### Community 33 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 34 - "drawStarKite"
Cohesion: 0.50
Nodes (4): drawStarKite(), etoiles(), starKitePts(), wStar5()

### Community 35 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 36 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 37 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 38 - "pic"
Cohesion: 0.67
Nodes (3): iceGrad(), pic(), platBase()

## Knowledge Gaps
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `drawBird`, `jeu-1.js`, `draw`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `save` be split into smaller, more focused modules?**
  _Cohesion score 0.05455251407493691 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `save`, `jeu-1.js`, `usPaintStatic`, `hcReward`, `drawIntro`, `uniqueResult`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.05493133583021224 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `save`, `jeu-1.js`, `updateSiphon`, `zone1`, `update`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0273972602739726 - nodes in this community are weakly interconnected._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.06294326241134751 - nodes in this community are weakly interconnected._