# Graph Report - src  (2026-11-18)

## Corpus Check
- 3 files · ~202,544 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 740 nodes · 2089 edges · 52 communities (40 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- usPaintStatic
- drawHazards
- drawBoss
- drawIntro
- mOsc
- hcWindow
- startGame
- zone1
- save
- closeModal
- draw
- dayKey
- drawGame
- uniqueResult
- zoneV
- drawSky
- refreshHome
- musicTick
- unlockAudio
- fxZone
- drawGoldPlatform
- fGrad
- drawBouli2
- paintSkin
- fxLayer
- sky
- lensGrad
- update
- kraken3
- endRun
- drawZepLayer
- sFill
- drawBird
- drawGardenSky
- updateSiphon
- drawBouliPlat
- fGradC
- hcDrawPlatform
- resize
- checkUnlocks
- chip
- clipCircle
- drawPlatform
- drawRider
- drawTreasure
- globeCombo
- onThemeChange
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 57 edges
2. `updateGame()` - 48 edges
3. `save()` - 32 edges
4. `floatText()` - 31 edges
5. `drawHazards()` - 29 edges
6. `endRun()` - 28 edges
7. `land()` - 27 edges
8. `draw()` - 27 edges
9. `startGame()` - 25 edges
10. `drawGame()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 12_
- `endRun()` --indirect_call--> `flushToasts()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 31 → community 10_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 40 → community 8_
- `showScreen()` --indirect_call--> `handleHash()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 8 → community 18_
- `ensureMissions()` --calls--> `mulberry32()`  [EXTRACTED]
  jeu-1.js → jeu-1.js  _Bridges community 2 → community 18_

## Import Cycles
- None detected.

## Communities (52 total, 12 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (88): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+80 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.06
Nodes (48): arcadeRound(), armGeom(), armIK(), armJoint(), armSeg(), bossRound(), buildCfg(), cachedLayer() (+40 more)

### Community 3 - "drawHazards"
Cohesion: 0.06
Nodes (31): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+23 more)

### Community 4 - "drawBoss"
Cohesion: 0.11
Nodes (28): cancelReveal(), dragonMix(), dragonSkin(), drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans() (+20 more)

### Community 5 - "drawIntro"
Cohesion: 0.09
Nodes (27): arcadeSky(), coeurs(), drawBalloon(), drawFloats(), drawHome(), drawIntro(), drawMetalPlatform(), drawOutfit() (+19 more)

### Community 6 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 7 - "hcWindow"
Cohesion: 0.09
Nodes (27): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawTrans(), hcIntro(), hcOpenPage(), hcPaperFor() (+19 more)

### Community 8 - "startGame"
Cohesion: 0.12
Nodes (26): animateXp(), audio(), closeModeSheet(), endIntro(), G(), makeBoss(), makeFog(), navGo() (+18 more)

### Community 9 - "zone1"
Cohesion: 0.12
Nodes (25): bentTree(), birdV(), boat(), ceiling(), cumulus(), dock(), dragonTail(), haze() (+17 more)

### Community 10 - "save"
Cohesion: 0.17
Nodes (25): checkTrophies(), checkWearUnlocks(), copyText(), drawMystery(), dropLetters(), findSecret(), flushToasts(), hcAbandon() (+17 more)

### Community 11 - "closeModal"
Cohesion: 0.22
Nodes (23): closeModal(), frDate(), musicLabel(), newDuelId(), on(), openModal(), pause(), playBouliStory() (+15 more)

### Community 12 - "draw"
Cohesion: 0.16
Nodes (22): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), gear(), hex() (+14 more)

### Community 13 - "dayKey"
Cohesion: 0.20
Nodes (17): adoptRemote(), boardRows(), dayKey(), daysBetween(), duelLink(), ensureDaily(), initNet(), liveStreak() (+9 more)

### Community 14 - "drawGame"
Cohesion: 0.13
Nodes (16): camZoom(), drawBallShadows(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand(), drawInk() (+8 more)

### Community 15 - "uniqueResult"
Cohesion: 0.17
Nodes (15): cascadeResults(), confettiDom(), countUp(), RAPIECE_SKIN, uniqueResult(), uniqueTrigger(), uqClear(), uqClose() (+7 more)

### Community 16 - "zoneV"
Cohesion: 0.18
Nodes (15): anvil(), basalt(), bubblePool(), cableCar(), hut(), lavaGlow(), lavaPool(), lavaRiver() (+7 more)

### Community 17 - "drawSky"
Cohesion: 0.17
Nodes (15): cloud(), drawFloor(), drawHills(), drawHomeCloud(), drawIceSky(), drawIceWater(), drawJungleSky(), drawLava() (+7 more)

### Community 18 - "refreshHome"
Cohesion: 0.19
Nodes (13): afterSplash(), announceThemes(), announceTrophies(), dailyInfo(), ensureMissions(), handleHash(), hashStr(), levelInfo() (+5 more)

### Community 19 - "musicTick"
Cohesion: 0.19
Nodes (13): applySong(), musicGraph(), musicLevel(), musicTick(), ostDecode(), ostGraph(), ostLoad(), ostStart() (+5 more)

### Community 20 - "unlockAudio"
Cohesion: 0.21
Nodes (12): audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx(), newAudioContext() (+4 more)

### Community 21 - "fxZone"
Cohesion: 0.17
Nodes (12): baitBall(), caustics(), clown(), fishSchool(), fxZone(), gulls(), jelly(), tang() (+4 more)

### Community 22 - "drawGoldPlatform"
Cohesion: 0.26
Nodes (12): drawBuoy(), drawGardenPlatform(), drawGoldPlatform(), drawIceBlock(), drawIsland(), drawMirrorPlatform(), drawPlatformInner(), drawSiphon() (+4 more)

### Community 23 - "fGrad"
Cohesion: 0.24
Nodes (12): drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawMacaron(), drawMist(), drawPillow() (+4 more)

### Community 24 - "drawBouli2"
Cohesion: 0.25
Nodes (11): drawBouli2(), drawGrenierSky(), mArm(), mBlush(), mEyes(), mGoggles(), mHat(), mProp() (+3 more)

### Community 25 - "paintSkin"
Cohesion: 0.27
Nodes (10): baronSync(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawPin(), drawPreview(), drawStoryScene(), drawWearPreview() (+2 more)

### Community 26 - "fxLayer"
Cohesion: 0.22
Nodes (9): ash(), bolt(), bomb(), debris(), egg(), embers(), fxLayer(), hatchling() (+1 more)

### Community 27 - "sky"
Cohesion: 0.22
Nodes (9): bgZone(), coral(), drawFog(), feathers(), sailboat(), sea(), sky(), under() (+1 more)

### Community 28 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 29 - "update"
Cohesion: 0.25
Nodes (8): bumpCoins(), frame(), runTimers(), tickScore(), timeScale(), update(), updateAmbient(), updateFx()

### Community 30 - "kraken3"
Cohesion: 0.39
Nodes (8): kArm(), kArmPts(), kEye(), kmix(), kPal(), kraken3(), kTent(), mantlePath()

### Community 31 - "endRun"
Cohesion: 0.53
Nodes (6): checkThemes(), clearBanner(), declineSecond(), endRun(), flushCoins(), offerSecondChance()

### Community 32 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 33 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 34 - "drawBird"
Cohesion: 0.50
Nodes (4): drawBee(), drawBird(), drawMiniKite(), drawSheep()

### Community 35 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 36 - "updateSiphon"
Cohesion: 0.67
Nodes (4): makeSiphon(), sipNew(), sipPos(), updateSiphon()

### Community 37 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 38 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 39 - "hcDrawPlatform"
Cohesion: 0.67
Nodes (3): hcDrawPlatform(), hcEraser(), hcPencil()

### Community 40 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

## Knowledge Gaps
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `drawBoss` to `jeu-1.js`, `drawBird`, `draw`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.0577324973876698 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `usPaintStatic`, `drawBoss`, `drawIntro`, `hcWindow`, `startGame`, `save`, `closeModal`, `uniqueResult`, `refreshHome`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.03076923076923077 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `jeu-1.js`, `updateSiphon`, `save`, `sky`, `update`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.06294326241134751 - nodes in this community are weakly interconnected._
- **Should `drawHazards` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._