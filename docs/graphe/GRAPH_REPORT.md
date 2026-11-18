# Graph Report - src  (2026-11-18)

## Corpus Check
- 3 files · ~199,160 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 730 nodes · 2058 edges · 50 communities (40 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- usPaintStatic
- drawSky
- mOsc
- drawBouli2
- startGame
- drawHazards
- drawBoss
- drawIntro
- save
- showScreen
- paintEsquisseBody
- musicTick
- draw
- mix
- audio
- drawGame
- dayKey
- zone1
- fxZone
- refreshHome
- zone2
- fxLayer
- sky
- hcWindow
- lensGrad
- paintSkin
- update
- drawParticles
- kraken3
- buildCfg
- endRun
- drawZepLayer
- drawBird
- sFill
- drawGardenSky
- updateSiphon
- drawBouliPlat
- fGradC
- ostLoad
- checkUnlocks
- chip
- clipCircle
- drawRider
- globeCombo
- onThemeChange
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 55 edges
2. `updateGame()` - 46 edges
3. `save()` - 31 edges
4. `drawHazards()` - 29 edges
5. `floatText()` - 28 edges
6. `endRun()` - 27 edges
7. `land()` - 26 edges
8. `startGame()` - 25 edges
9. `draw()` - 25 edges
10. `drawGame()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 4 → community 14_
- `showScreen()` --indirect_call--> `handleHash()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 11 → community 21_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 21_
- `hcPaperPattern()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 12_
- `ensureMissions()` --calls--> `hashStr()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 31 → community 21_

## Import Cycles
- None detected.

## Communities (50 total, 10 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (85): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+77 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.07
Nodes (43): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+35 more)

### Community 3 - "drawSky"
Cohesion: 0.09
Nodes (38): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+30 more)

### Community 4 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 5 - "drawBouli2"
Cohesion: 0.10
Nodes (26): cascadeResults(), confettiDom(), countUp(), drawBouli2(), drawGrenierSky(), RAPIECE_SKIN, mArm(), mBlush() (+18 more)

### Community 6 - "startGame"
Cohesion: 0.18
Nodes (27): closeModal(), frDate(), G(), makeBoss(), makeFog(), musicLabel(), newDuelId(), on() (+19 more)

### Community 7 - "drawHazards"
Cohesion: 0.07
Nodes (27): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+19 more)

### Community 8 - "drawBoss"
Cohesion: 0.14
Nodes (24): dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon() (+16 more)

### Community 9 - "drawIntro"
Cohesion: 0.11
Nodes (23): arcadeSky(), drawBalloon(), drawFloats(), drawIntro(), drawMetalPlatform(), drawOutfit(), drawRainbowRibbon(), drawRocket() (+15 more)

### Community 10 - "save"
Cohesion: 0.19
Nodes (22): checkTrophies(), checkWearUnlocks(), copyText(), drawWearPreview(), dropLetters(), findSecret(), hcAbandon(), hcResult() (+14 more)

### Community 11 - "showScreen"
Cohesion: 0.13
Nodes (21): animateXp(), drawMystery(), drawPreview(), duelLink(), initAmbient(), measureHome(), paintPreviews(), renderDuelBoard() (+13 more)

### Community 12 - "paintEsquisseBody"
Cohesion: 0.11
Nodes (21): drawHCSky(), hcCanPull(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcPaperFor(), hcPaperPattern(), hcPeekEl() (+13 more)

### Community 13 - "musicTick"
Cohesion: 0.14
Nodes (19): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+11 more)

### Community 14 - "draw"
Cohesion: 0.18
Nodes (18): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), hills(), house() (+10 more)

### Community 15 - "mix"
Cohesion: 0.16
Nodes (18): anvil(), basalt(), bubblePool(), cableCar(), gear(), hex(), hut(), lavaGlow() (+10 more)

### Community 16 - "audio"
Cohesion: 0.14
Nodes (18): audio(), cancelReveal(), closeModeSheet(), endIntro(), navGo(), newAudioContext(), noise(), onPathTap() (+10 more)

### Community 17 - "drawGame"
Cohesion: 0.12
Nodes (18): camZoom(), drawBallShadows(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand() (+10 more)

### Community 18 - "dayKey"
Cohesion: 0.25
Nodes (14): adoptRemote(), boardRows(), dayKey(), daysBetween(), ensureDaily(), initNet(), liveStreak(), myDoc() (+6 more)

### Community 19 - "zone1"
Cohesion: 0.19
Nodes (14): ceiling(), dragonTail(), haze(), kid(), kite(), lamp(), lantern(), lighthouse() (+6 more)

### Community 20 - "fxZone"
Cohesion: 0.17
Nodes (12): baitBall(), caustics(), clown(), fishSchool(), fxZone(), gulls(), jelly(), tang() (+4 more)

### Community 21 - "refreshHome"
Cohesion: 0.22
Nodes (11): afterSplash(), announceThemes(), announceTrophies(), ensureMissions(), handleHash(), levelInfo(), missionsHtml(), parseDuelHash() (+3 more)

### Community 22 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 23 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 24 - "sky"
Cohesion: 0.22
Nodes (9): bgZone(), coral(), drawFog(), feathers(), sailboat(), sea(), sky(), under() (+1 more)

### Community 25 - "hcWindow"
Cohesion: 0.28
Nodes (9): hcClear(), hcClose(), hcIntro(), hcOpenPage(), hcRewStop(), hcTrigger(), hcType(), hcWindow() (+1 more)

### Community 26 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 27 - "paintSkin"
Cohesion: 0.36
Nodes (8): baronSync(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawPin(), drawStoryScene(), gloss(), paintSkin()

### Community 28 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 29 - "drawParticles"
Cohesion: 0.25
Nodes (8): coeurs(), drawHome(), drawParticles(), drawStarKite(), etoiles(), starKitePts(), wHeart(), wStar5()

### Community 30 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 31 - "buildCfg"
Cohesion: 0.38
Nodes (7): arcadeRound(), bossRound(), buildCfg(), dailyInfo(), hashStr(), storyRound(), zenRound()

### Community 32 - "endRun"
Cohesion: 0.43
Nodes (7): checkThemes(), clearBanner(), declineSecond(), endRun(), flushCoins(), flushToasts(), offerSecondChance()

### Community 33 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 34 - "drawBird"
Cohesion: 0.40
Nodes (5): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt()

### Community 35 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 36 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 37 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 38 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 39 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 40 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `drawBird`, `draw`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.05798319327731093 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `usPaintStatic`, `drawBouli2`, `startGame`, `drawIntro`, `save`, `showScreen`, `paintEsquisseBody`, `audio`, `refreshHome`, `hcWindow`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.03278688524590164 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `jeu-1.js`, `updateSiphon`, `save`, `sky`, `update`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.07198228128460686 - nodes in this community are weakly interconnected._
- **Should `drawSky` be split into smaller, more focused modules?**
  _Cohesion score 0.08677098150782361 - nodes in this community are weakly interconnected._