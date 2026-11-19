# Graph Report - src  (2026-11-19)

## Corpus Check
- 3 files · ~240,342 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 859 nodes · 2373 edges · 57 communities (44 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- startGame
- usPaintStatic
- showScreen
- bgZone
- paintSkin
- fxZone
- updateGame
- mOsc
- drawHazards
- endRun
- drawBoss
- save
- musicTick
- buzz
- zone1
- paintEsquisseBody
- draw
- drawGame
- land
- zoneV
- drawSky
- drawGoldPlatform
- fGrad
- zone2
- drawBouli2
- hcReward
- mix
- drawSnake2
- fxLayer
- lensGrad
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
- cascadeResults
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
  jeu-1.js → jeu-1.js  _Bridges community 8 → community 17_
- `land()` --indirect_call--> `newRound()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 10 → community 19_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 1_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 16_
- `checkTrophies()` --calls--> `dayKey()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 1 → community 12_

## Import Cycles
- None detected.

## Communities (57 total, 13 thin omitted)

### Community 1 - "startGame"
Cohesion: 0.06
Nodes (78): adoptRemote(), animateXp(), arcadeRound(), boardRows(), bossRound(), buildCfg(), closeModal(), dailyInfo() (+70 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.07
Nodes (43): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+35 more)

### Community 3 - "showScreen"
Cohesion: 0.06
Nodes (42): audio(), cancelReveal(), closeModeSheet(), coeurs(), drawBalloon(), drawFloats(), drawHome(), drawIntro() (+34 more)

### Community 4 - "bgZone"
Cohesion: 0.08
Nodes (35): aurora(), bgZone(), bromeliad(), bush(), canopy(), caveFloor(), coral(), cornerLeaves() (+27 more)

### Community 5 - "paintSkin"
Cohesion: 0.08
Nodes (32): arcadeSky(), baronSync(), checkWearUnlocks(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawMystery(), drawOutfit() (+24 more)

### Community 6 - "fxZone"
Cohesion: 0.07
Nodes (32): babyDraw(), baitBall(), bat(), blizzardStreaks(), caustics(), clown(), cuteEye(), dog() (+24 more)

### Community 7 - "updateGame"
Cohesion: 0.11
Nodes (32): bouliPre(), burst(), burstBall(), checkLanding(), critterHit(), emitTrail(), floatText(), hazardHit() (+24 more)

### Community 8 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 9 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 10 - "endRun"
Cohesion: 0.15
Nodes (26): acceptSecond(), afterLoss(), banner(), baseR(), bossDamage(), clearBanner(), declineSecond(), drop() (+18 more)

### Community 11 - "drawBoss"
Cohesion: 0.14
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 12 - "save"
Cohesion: 0.20
Nodes (25): afterSplash(), announceThemes(), announceTrophies(), checkThemes(), checkTrophies(), confetti(), copyText(), dropLetters() (+17 more)

### Community 13 - "musicTick"
Cohesion: 0.10
Nodes (25): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+17 more)

### Community 14 - "buzz"
Cohesion: 0.10
Nodes (23): banqTap(), bossMouth(), buzz(), drawShell(), jungleEyesTap(), lobArc(), releaseMonkeyBall(), spawnIcicle() (+15 more)

### Community 15 - "zone1"
Cohesion: 0.12
Nodes (21): ceiling(), dragonTail(), drawFog(), feathers(), haze(), kid(), kite(), lamp() (+13 more)

### Community 16 - "paintEsquisseBody"
Cohesion: 0.12
Nodes (20): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+12 more)

### Community 17 - "draw"
Cohesion: 0.17
Nodes (19): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), hills(), house() (+11 more)

### Community 18 - "drawGame"
Cohesion: 0.13
Nodes (16): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+8 more)

### Community 19 - "land"
Cohesion: 0.19
Nodes (15): addScore(), bossDefeat(), collect(), dust(), gainCoins(), goldRain(), impactFlash(), juicePerfect() (+7 more)

### Community 20 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 21 - "drawSky"
Cohesion: 0.17
Nodes (15): cloud(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky(), drawLava() (+7 more)

### Community 22 - "drawGoldPlatform"
Cohesion: 0.26
Nodes (12): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMirrorPlatform(), drawPlatformInner(), drawSiphon() (+4 more)

### Community 23 - "fGrad"
Cohesion: 0.24
Nodes (12): drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMacaron(), drawMist(), drawPillow() (+4 more)

### Community 24 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 25 - "drawBouli2"
Cohesion: 0.25
Nodes (11): drawBouli2(), drawGrenierSky(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp() (+3 more)

### Community 26 - "hcReward"
Cohesion: 0.24
Nodes (11): hcClear(), hcClose(), hcIntro(), hcPullEnd(), hcReward(), hcRewStop(), hcTrigger(), hcType() (+3 more)

### Community 27 - "mix"
Cohesion: 0.22
Nodes (10): banana(), drift(), elephantEar(), gear(), hex(), igloo(), mix(), monstera() (+2 more)

### Community 28 - "drawSnake2"
Cohesion: 0.24
Nodes (10): drawSnake2(), drawSnakeHypno(), drawSnakeSwim(), drawTrunk(), snHead(), snHeadDraw(), snPalette(), snPath() (+2 more)

### Community 29 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 30 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 31 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 32 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 33 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 34 - "yeti2"
Cohesion: 0.47
Nodes (6): furEdge(), furMass(), iceHorn(), tuft(), yeti2(), yetiPal2()

### Community 35 - "pgDraw"
Cohesion: 0.40
Nodes (5): bundleBig(), pgDraw(), pingu(), pinguCarrier(), yTxt()

### Community 36 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 37 - "drawBird"
Cohesion: 0.50
Nodes (4): drawBee(), drawBird(), drawMiniKite(), drawSheep()

### Community 38 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 39 - "drawStarKite"
Cohesion: 0.50
Nodes (4): drawStarKite(), etoiles(), starKitePts(), wStar5()

### Community 40 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 41 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 42 - "cascadeResults"
Cohesion: 0.67
Nodes (3): cascadeResults(), confettiDom(), countUp()

### Community 43 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 44 - "pic"
Cohesion: 0.67
Nodes (3): iceGrad(), pic(), platBase()

## Knowledge Gaps
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `draw`, `drawBird`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.024096385542168676 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `startGame`, `usPaintStatic`, `showScreen`, `paintSkin`, `updateGame`, `endRun`, `save`, `zone1`, `land`, `hcReward`, `drawSnake2`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `startGame` be split into smaller, more focused modules?**
  _Cohesion score 0.05582603050957481 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `updateGame` to `jeu-1.js`, `updateSiphon`, `endRun`, `save`, `buzz`, `zone1`, `land`, `heldBall`, `update`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.07198228128460686 - nodes in this community are weakly interconnected._
- **Should `showScreen` be split into smaller, more focused modules?**
  _Cohesion score 0.06387921022067364 - nodes in this community are weakly interconnected._