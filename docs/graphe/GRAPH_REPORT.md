# Graph Report - src  (2026-11-23)

## Corpus Check
- 3 files · ~245,412 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 863 nodes · 2387 edges · 61 communities (48 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 48 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- draw
- usPaintStatic
- drawIntro
- bgZone
- fxZone
- updateGame
- drawHazards
- closeModal
- drawBoss
- endRun
- save
- floatText
- musicTick
- buzz
- showScreen
- zone1
- zone2
- paintEsquisseBody
- dayKey
- drawGame
- drawSky
- zoneV
- uniqueResult
- startGame
- drawGoldPlatform
- hcReward
- showResults
- mix
- drawSnake2
- refreshHome
- lensGrad
- body
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
- updateFx
- cascadeResults
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
- onThemeChange
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 65 edges
2. `updateGame()` - 49 edges
3. `bgZone()` - 45 edges
4. `floatText()` - 38 edges
5. `fxZone()` - 37 edges
6. `mix()` - 36 edges
7. `save()` - 34 edges
8. `drawHazards()` - 29 edges
9. `endRun()` - 28 edges
10. `draw()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `land()` --indirect_call--> `newRound()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 12 → community 10_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 48 → community 15_
- `showScreen()` --indirect_call--> `handleHash()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 15 → community 30_
- `showDailyIntro()` --indirect_call--> `closeModal()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 8 → community 19_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 24_

## Import Cycles
- None detected.

## Communities (61 total, 13 thin omitted)

### Community 1 - "draw"
Cohesion: 0.06
Nodes (59): airship(), balloon(), bell(), dark(), draw(), drawBouli2(), drawGrade(), drawGrenierSky() (+51 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.07
Nodes (43): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+35 more)

### Community 3 - "drawIntro"
Cohesion: 0.06
Nodes (40): arcadeSky(), baronSync(), coeurs(), drawBalloon(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawFloats() (+32 more)

### Community 4 - "bgZone"
Cohesion: 0.08
Nodes (35): aurora(), bgZone(), bromeliad(), bush(), canopy(), caveFloor(), coral(), cornerLeaves() (+27 more)

### Community 5 - "fxZone"
Cohesion: 0.07
Nodes (32): babyDraw(), baitBall(), bat(), blizzardStreaks(), caustics(), clown(), cuteEye(), dog() (+24 more)

### Community 6 - "updateGame"
Cohesion: 0.09
Nodes (28): burst(), drop(), emitTrail(), hazardHit(), popBall(), release(), runTimers(), shards() (+20 more)

### Community 7 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 8 - "closeModal"
Cohesion: 0.18
Nodes (26): clearBanner(), closeModal(), declineSecond(), flushCoins(), musicLabel(), newDuelId(), offerSecondChance(), on() (+18 more)

### Community 9 - "drawBoss"
Cohesion: 0.14
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 10 - "endRun"
Cohesion: 0.13
Nodes (25): addScore(), banner(), bossDamage(), bossDefeat(), checkThemes(), collect(), dust(), endRun() (+17 more)

### Community 11 - "save"
Cohesion: 0.19
Nodes (25): checkTrophies(), checkWearUnlocks(), confetti(), copyText(), drawMystery(), dropLetters(), findSecret(), hcAbandon() (+17 more)

### Community 12 - "floatText"
Cohesion: 0.18
Nodes (22): acceptSecond(), afterLoss(), baseR(), bouliPre(), burstBall(), checkLanding(), critterHit(), eatBall() (+14 more)

### Community 13 - "musicTick"
Cohesion: 0.12
Nodes (22): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+14 more)

### Community 14 - "buzz"
Cohesion: 0.11
Nodes (22): banqTap(), bossMouth(), buzz(), drawShell(), jungleEyesTap(), lobArc(), releaseMonkeyBall(), spawnIcicle() (+14 more)

### Community 15 - "showScreen"
Cohesion: 0.14
Nodes (21): audio(), cancelReveal(), closeModeSheet(), endIntro(), hcOpenPage(), navGo(), newAudioContext(), noise() (+13 more)

### Community 16 - "zone1"
Cohesion: 0.12
Nodes (21): ceiling(), dragonTail(), drawFog(), feathers(), haze(), kid(), kite(), lamp() (+13 more)

### Community 17 - "zone2"
Cohesion: 0.12
Nodes (20): ash(), bentTree(), birdV(), boat(), bolt(), bomb(), cumulus(), debris() (+12 more)

### Community 18 - "paintEsquisseBody"
Cohesion: 0.12
Nodes (20): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+12 more)

### Community 19 - "dayKey"
Cohesion: 0.18
Nodes (19): adoptRemote(), boardRows(), dayKey(), daysBetween(), duelLink(), ensureDaily(), frDate(), initNet() (+11 more)

### Community 20 - "drawGame"
Cohesion: 0.12
Nodes (18): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+10 more)

### Community 21 - "drawSky"
Cohesion: 0.16
Nodes (16): cloud(), drawChoco(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky() (+8 more)

### Community 22 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 23 - "uniqueResult"
Cohesion: 0.22
Nodes (14): RAPIECE_SKIN, penguinFound(), uniqueResult(), uniqueTrigger(), updatePenguin(), uqClear(), uqClose(), uqFlash() (+6 more)

### Community 24 - "startGame"
Cohesion: 0.19
Nodes (13): arcadeRound(), bossRound(), buildCfg(), dailyInfo(), ensureMissions(), G(), hashStr(), makeBoss() (+5 more)

### Community 25 - "drawGoldPlatform"
Cohesion: 0.33
Nodes (11): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMacaron(), drawMirrorPlatform(), drawPillow() (+3 more)

### Community 26 - "hcReward"
Cohesion: 0.24
Nodes (11): hcClear(), hcClose(), hcIntro(), hcPullEnd(), hcReward(), hcRewStop(), hcTrigger(), hcType() (+3 more)

### Community 27 - "showResults"
Cohesion: 0.27
Nodes (10): animateXp(), paintPreviews(), renderTrophies(), shareCard(), showDuelResults(), showResults(), showSharePreview(), trophyHtml() (+2 more)

### Community 28 - "mix"
Cohesion: 0.22
Nodes (10): banana(), drift(), elephantEar(), gear(), hex(), igloo(), mix(), monstera() (+2 more)

### Community 29 - "drawSnake2"
Cohesion: 0.24
Nodes (10): drawSnake2(), drawSnakeHypno(), drawSnakeSwim(), drawTrunk(), snHead(), snHeadDraw(), snPalette(), snPath() (+2 more)

### Community 30 - "refreshHome"
Cohesion: 0.28
Nodes (9): afterSplash(), announceThemes(), announceTrophies(), handleHash(), levelInfo(), parseDuelHash(), refreshCoins(), refreshHome() (+1 more)

### Community 31 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 32 - "body"
Cohesion: 0.25
Nodes (8): bBoard(), body(), bShark(), drawOgre(), drawYetiBoss(), drawYetiDefeat(), sFill(), sHead()

### Community 33 - "fGrad"
Cohesion: 0.43
Nodes (8): drawCandySky(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMist(), fCached(), fGrad(), fPuff()

### Community 34 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 35 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 36 - "yeti2"
Cohesion: 0.47
Nodes (6): furEdge(), furMass(), iceHorn(), tuft(), yeti2(), yetiPal2()

### Community 37 - "pgDraw"
Cohesion: 0.40
Nodes (5): bundleBig(), pgDraw(), pingu(), pinguCarrier(), yTxt()

### Community 38 - "drawBird"
Cohesion: 0.40
Nodes (5): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt()

### Community 39 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 40 - "drawStarKite"
Cohesion: 0.50
Nodes (4): drawStarKite(), etoiles(), starKitePts(), wStar5()

### Community 41 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 42 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 43 - "updateFx"
Cohesion: 0.67
Nodes (3): bumpCoins(), tickScore(), updateFx()

### Community 44 - "cascadeResults"
Cohesion: 0.67
Nodes (3): cascadeResults(), confettiDom(), countUp()

### Community 45 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 46 - "drawSiphon"
Cohesion: 0.67
Nodes (3): drawSiphon(), sipOcc(), sipWhirl()

### Community 47 - "pic"
Cohesion: 0.67
Nodes (3): iceGrad(), pic(), platBase()

### Community 48 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

## Knowledge Gaps
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `draw`, `drawBird`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.024096385542168676 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `usPaintStatic`, `drawIntro`, `updateGame`, `closeModal`, `endRun`, `save`, `floatText`, `showScreen`, `uniqueResult`, `hcReward`, `showResults`, `drawSnake2`, `refreshHome`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Should `draw` be split into smaller, more focused modules?**
  _Cohesion score 0.06428988895382817 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `updateGame` to `jeu-1.js`, `updateSiphon`, `endRun`, `save`, `floatText`, `buzz`, `zone1`, `heldBall`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.07198228128460686 - nodes in this community are weakly interconnected._
- **Should `drawIntro` be split into smaller, more focused modules?**
  _Cohesion score 0.0641025641025641 - nodes in this community are weakly interconnected._