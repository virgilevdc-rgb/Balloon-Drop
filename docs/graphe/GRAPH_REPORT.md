# Graph Report - src  (2026-11-16)

## Corpus Check
- 3 files · ~181,613 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 653 nodes · 1877 edges · 44 communities (36 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- buzz
- usPaintStatic
- drawSky
- showLevelIntro
- hcWindow
- mOsc
- save
- drawHazards
- endRun
- closeModal
- musicTick
- drawGame
- zone1
- drawIntro
- showResults
- draw
- startGame
- paintSkin
- drawBouli2
- refreshHome
- makeScoreCard
- zone2
- audio
- mix
- lensGrad
- drawParticles
- sky
- drawZepLayer
- drawBird
- sFill
- drawGardenSky
- drawBouliPlat
- cascadeResults
- fGradC
- resize
- ostLoad
- checkUnlocks
- clipCircle
- drawRider
- globeCombo
- sw.js

## God Nodes (most connected - your core abstractions)
1. `buzz()` - 51 edges
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
- `house()` --indirect_call--> `s()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 6 → community 16_
- `endRun()` --indirect_call--> `flushToasts()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 9 → community 7_
- `showScreen()` --indirect_call--> `measureHome()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 35 → community 7_
- `showScreen()` --indirect_call--> `handleHash()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 7 → community 20_
- `showDailyIntro()` --indirect_call--> `closeModal()`  [INFERRED]
  jeu-1.js → jeu-1.js  _Bridges community 10 → community 9_

## Import Cycles
- None detected.

## Communities (44 total, 8 thin omitted)

### Community 0 - "buzz"
Cohesion: 0.06
Nodes (83): acceptSecond(), addScore(), afterLoss(), banner(), baseR(), bossDamage(), bossDefeat(), bossMouth() (+75 more)

### Community 2 - "usPaintStatic"
Cohesion: 0.08
Nodes (40): armGeom(), armIK(), armJoint(), armSeg(), cachedLayer(), drawArm(), drawArmBody(), drawArmIcon() (+32 more)

### Community 3 - "drawSky"
Cohesion: 0.10
Nodes (35): cloud(), drawBuoy(), drawCandySky(), drawChoco(), drawDreamFloor(), drawDreamSky(), drawEnchantedSky(), drawFloor() (+27 more)

### Community 4 - "showLevelIntro"
Cohesion: 0.12
Nodes (29): drawBoss(), drawBossIcon(), drawCrow(), drawCrowDefeat(), drawCrowTrans(), drawDragon(), drawKraken(), drawMantis() (+21 more)

### Community 5 - "hcWindow"
Cohesion: 0.08
Nodes (30): drawHCSky(), hcCanPull(), hcClear(), hcClose(), hcDrawPlatform(), hcDrawTrans(), hcEraser(), hcIntro() (+22 more)

### Community 6 - "mOsc"
Cohesion: 0.17
Nodes (27): bell(), dark(), flute(), glass(), h(), k(), marimba(), mFilt() (+19 more)

### Community 7 - "save"
Cohesion: 0.16
Nodes (27): checkThemes(), checkTrophies(), checkWearUnlocks(), copyText(), drawMystery(), dropLetters(), findSecret(), flushToasts() (+19 more)

### Community 8 - "drawHazards"
Cohesion: 0.08
Nodes (25): drawBeam(), drawBubbleColumn(), drawDarkness(), drawDewDrop(), drawDreamBubble(), drawFan(), drawFish(), drawFlower() (+17 more)

### Community 9 - "endRun"
Cohesion: 0.17
Nodes (22): adoptRemote(), boardRows(), clearBanner(), dayKey(), daysBetween(), declineSecond(), endRun(), ensureDaily() (+14 more)

### Community 10 - "closeModal"
Cohesion: 0.24
Nodes (21): closeModal(), musicLabel(), newDuelId(), on(), openModal(), pause(), playBouliStory(), readSaveCode() (+13 more)

### Community 11 - "musicTick"
Cohesion: 0.14
Nodes (19): applySong(), audioStatus(), currentSong(), haudGesture(), haudInit(), hplay(), htmlMusicTick(), htmlSfx() (+11 more)

### Community 12 - "drawGame"
Cohesion: 0.12
Nodes (18): camZoom(), drawBallShadows(), drawCloudPlat(), drawCloudSea(), drawCoin(), drawFever(), drawGame(), drawHand() (+10 more)

### Community 13 - "zone1"
Cohesion: 0.15
Nodes (17): bolt(), ceiling(), debris(), dragonTail(), fxLayer(), haze(), kid(), kite() (+9 more)

### Community 14 - "drawIntro"
Cohesion: 0.15
Nodes (17): cancelReveal(), drawFloats(), drawIntro(), drawRocket(), endIntro(), introCaption(), introFall(), introOnce() (+9 more)

### Community 15 - "showResults"
Cohesion: 0.18
Nodes (14): animateXp(), drawPreview(), drawWearPreview(), duelLink(), paintPreviews(), renderTrophies(), shareCard(), showDuelResults() (+6 more)

### Community 16 - "draw"
Cohesion: 0.23
Nodes (13): airship(), balloon(), draw(), drawGrade(), drawRain(), garland(), house(), island() (+5 more)

### Community 17 - "startGame"
Cohesion: 0.19
Nodes (13): arcadeRound(), bossRound(), buildCfg(), dailyInfo(), ensureMissions(), G(), hashStr(), makeBoss() (+5 more)

### Community 18 - "paintSkin"
Cohesion: 0.19
Nodes (13): baronSync(), drawBalloon(), drawBaron(), drawBaronBoss(), drawBaronShip(), drawMetalPlatform(), drawPin(), drawRainbowRibbon() (+5 more)

### Community 19 - "drawBouli2"
Cohesion: 0.21
Nodes (12): drawBouli2(), drawGrenierSky(), RAPIECE_SKIN, mArm(), mBlush(), mEyes(), mGoggles(), mHat() (+4 more)

### Community 20 - "refreshHome"
Cohesion: 0.20
Nodes (12): afterSplash(), announceThemes(), announceTrophies(), bumpCoins(), handleHash(), levelInfo(), parseDuelHash(), refreshCoins() (+4 more)

### Community 21 - "makeScoreCard"
Cohesion: 0.24
Nodes (11): arcadeSky(), drawOutfit(), makeDuelCard(), makeScoreCard(), shBackdrop(), shBalloon(), shCanvas(), shOutlined() (+3 more)

### Community 22 - "zone2"
Cohesion: 0.24
Nodes (11): bentTree(), birdV(), boat(), cumulus(), dock(), menhir(), montgolfiere(), oldMill() (+3 more)

### Community 23 - "audio"
Cohesion: 0.22
Nodes (10): audio(), closeModeSheet(), navGo(), newAudioContext(), noise(), onPathTap(), openModeSheet(), ostPrefetch() (+2 more)

### Community 24 - "mix"
Cohesion: 0.31
Nodes (9): hex(), hills(), mix(), popped(), sea(), shade(), tree(), twist() (+1 more)

### Community 25 - "lensGrad"
Cohesion: 0.36
Nodes (8): aviateur(), bridge(), coeur(), lensGrad(), monocle(), rondes(), soleil(), star()

### Community 26 - "drawParticles"
Cohesion: 0.25
Nodes (8): coeurs(), drawHome(), drawParticles(), drawStarKite(), etoiles(), starKitePts(), wHeart(), wStar5()

### Community 27 - "sky"
Cohesion: 0.25
Nodes (8): drawFog(), feathers(), frame(), runTimers(), sky(), timeScale(), update(), updateAmbient()

### Community 28 - "drawZepLayer"
Cohesion: 0.33
Nodes (6): drawZepInner(), drawZepLayer(), homeCloudsUpdate(), setCloudChip(), zepClear(), zepCtx()

### Community 29 - "drawBird"
Cohesion: 0.40
Nodes (5): drawBee(), drawBird(), drawMiniKite(), drawSheep(), drawSheepAt()

### Community 30 - "sFill"
Cohesion: 0.50
Nodes (4): bBoard(), bShark(), sFill(), sHead()

### Community 31 - "drawGardenSky"
Cohesion: 0.50
Nodes (4): drawGardenSky(), gBlade(), gScene(), gSoil()

### Community 32 - "drawBouliPlat"
Cohesion: 0.67
Nodes (3): blBalloon(), blTwist(), drawBouliPlat()

### Community 33 - "cascadeResults"
Cohesion: 0.67
Nodes (3): cascadeResults(), confettiDom(), countUp()

### Community 34 - "fGradC"
Cohesion: 0.67
Nodes (3): drawNightmare(), drawWizard(), fGradC()

### Community 35 - "resize"
Cohesion: 0.67
Nodes (3): initAmbient(), measureHome(), resize()

### Community 36 - "ostLoad"
Cohesion: 0.67
Nodes (3): ostDecode(), ostLoad(), ostTrim()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `kiteKit()` connect `showLevelIntro` to `draw`, `jeu-1.js`, `drawBird`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Should `buzz` be split into smaller, more focused modules?**
  _Cohesion score 0.05730238025271819 - nodes in this community are weakly interconnected._
- **Why does `buzz()` connect `buzz` to `jeu-1.js`, `showLevelIntro`, `hcWindow`, `save`, `closeModal`, `drawIntro`, `showResults`, `refreshHome`, `audio`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Should `jeu-1.js` be split into smaller, more focused modules?**
  _Cohesion score 0.038461538461538464 - nodes in this community are weakly interconnected._
- **Why does `updateGame()` connect `buzz` to `jeu-1.js`, `sky`, `save`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Should `usPaintStatic` be split into smaller, more focused modules?**
  _Cohesion score 0.07948717948717948 - nodes in this community are weakly interconnected._
- **Should `drawSky` be split into smaller, more focused modules?**
  _Cohesion score 0.09747899159663866 - nodes in this community are weakly interconnected._