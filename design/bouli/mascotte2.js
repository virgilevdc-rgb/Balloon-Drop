/* Mascotte v2 : le petit pilote (plus travaillé) et la créature (variantes « antenne » et « aviatrice »).
   S'appuie sur les outils de mascotte.js (mShape, mLimb, mEyes, mBlush, mSmile, mHat, mProp, mGrad, mRad). */
function mGoggles(c, u, cx, cy, hr, strapW) {
  c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .16); c.beginPath(); c.moveTo(cx - strapW, cy); c.lineTo(cx + strapW, cy); c.stroke();
  c.strokeStyle = '#3a2410'; c.lineWidth = Math.max(.6, u * .1); c.beginPath(); c.moveTo(cx - strapW, cy); c.lineTo(cx + strapW, cy); c.stroke();
  for (const s of [-1, 1]) { mShape(c, u, mGrad(c, 0, cy - hr * .3, 0, cy + hr * .3, '#fff1b8', '#c98a1c'), () => c.arc(cx + s * hr * .36, cy, hr * .3, 0, TAU2), .1);
    c.fillStyle = mRad(c, cx + s * hr * .36, cy, hr * .22, '#c8f4ff', '#2a8fd6'); c.beginPath(); c.arc(cx + s * hr * .36, cy, hr * .2, 0, TAU2); c.fill();
    c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.ellipse(cx + s * hr * .36 - hr * .07, cy - hr * .07, hr * .07, hr * .035, -.6, 0, TAU2); c.fill(); }
  c.fillStyle = MO; c.beginPath(); c.arc(cx, cy, hr * .07, 0, TAU2); c.fill();
}
function mScarf(c, u, nx, ny, t, len = 6) {
  const wv = t * .12;
  mShape(c, u, mGrad(c, nx, ny - u * .2, nx, ny + u * .3, '#ff5a5a', '#c41d2b'), () => { c.moveTo(nx, ny - u * .12);
    for (let k = 1; k <= len; k++) c.lineTo(nx - k * u * .36, ny - u * .14 + Math.sin(wv - k * .8) * u * .2 * k / 3 - k * u * .03);
    for (let k = len; k >= 1; k--) c.lineTo(nx - k * u * .36, ny + u * .16 + Math.sin(wv - k * .8) * u * .2 * k / 3 - k * u * .03);
    c.lineTo(nx, ny + u * .16); c.closePath(); }, .1);
  const ex = nx - len * u * .36, ey = ny + Math.sin(wv - len * .8) * u * .2 * len / 3 - len * u * .03;
  c.strokeStyle = '#c41d2b'; c.lineWidth = Math.max(.5, u * .06); for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(ex, ey + i * u * .1); c.lineTo(ex - u * .25, ey + i * u * .12 + u * .05); c.stroke(); }
}
function mFluff(c, u, cx, cy, w, h) { mShape(c, u, '#f6ecd6', () => { for (let i = 0; i <= 8; i++) { const x = cx - w + i * w / 4, y = cy + Math.sin(i * 1.3) * h * .15; c.moveTo(x + h * .55, y); c.arc(x, y, h * .55, 0, TAU2); } }, .08); }

function drawPilot2(c, x, y, u, costume, t) {
  const br = Math.sin(t * .07) * .025;
  c.save(); c.translate(x, y);
  c.fillStyle = 'rgba(20,30,60,0.18)'; c.beginPath(); c.ellipse(0, u * .05, u * 1.35, u * .25, 0, 0, TAU2); c.fill();
  c.scale(1 - br * .5, 1 + br);
  /* écharpe derrière */
  mScarf(c, u, -u * .2, -u * 2.18, t, 7);
  /* jambes et bottes */
  mLimb(c, u, [[-u * .33, -u * .2], [-u * .3, -u * .95]], '#a8865a', u * .48); mLimb(c, u, [[u * .33, -u * .2], [u * .3, -u * .95]], '#a8865a', u * .48);
  for (const s of [-1, 1]) { mShape(c, u, mGrad(c, 0, -u * .45, 0, 0, '#7a4a24', '#4a2a10'), () => c.roundRect(s * u * .42 - u * .36, -u * .45, u * .72, u * .48, u * .18)); c.fillStyle = '#c9a070'; c.fillRect(s * u * .42 - u * .33, -u * .1, u * .66, u * .06); }
  /* blouson */
  mShape(c, u, mGrad(c, 0, -u * 2.3, 0, -u * .8, '#c27a3e', '#7a4520'), () => c.roundRect(-u * .78, -u * 2.3, u * 1.56, u * 1.5, u * .45));
  c.fillStyle = 'rgba(255,220,170,0.18)'; c.beginPath(); c.roundRect(-u * .68, -u * 2.15, u * .45, u * 1.25, u * .2); c.fill();
  c.strokeStyle = 'rgba(42,42,68,0.5)'; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.moveTo(u * .05, -u * 2.1); c.lineTo(u * .05, -u * .85); c.stroke();
  mShape(c, u, '#fbf6ea', () => c.arc(-u * .32, -u * 1.45, u * .26, 0, TAU2), .07); mShape(c, u, '#ff6b98', () => c.ellipse(-u * .32, -u * 1.5, u * .13, u * .15, 0, 0, TAU2), .05);
  mFluff(c, u, 0, -u * 2.2, u * .7, u * .32);
  /* bras + gants */
  const hand = costume ? [u * 1.08, -u * 1.55] : [u * 1.35, -u * 2.85 + Math.sin(t * .25) * u * .25];
  mLimb(c, u, [[-u * .58, -u * 1.95], [-u * 1.02, -u * 1.25]], '#a8642e', u * .38); mLimb(c, u, [[u * .58, -u * 1.95], hand], '#a8642e', u * .38);
  for (const h of [[-u * 1.02, -u * 1.25], hand]) mShape(c, u, '#f2dcb0', () => c.arc(h[0], h[1], u * .24, 0, TAU2), .09);
  /* tête */
  const hr = u * 1.25, cy = -u * 3.45;
  mShape(c, u, mRad(c, 0, cy, hr * 1.2, '#ffe7d2', '#f2b088'), () => c.arc(0, cy, hr, 0, TAU2));
  mEyes(c, u, 0, cy + hr * .15, hr * .36, hr * .25, t, [.2, .05]); mBlush(c, u, 0, cy + hr * .48, hr * .6);
  c.fillStyle = 'rgba(190,110,60,0.6)'; for (const s of [-1, 1]) for (const [dx, dy] of [[-.08, 0], [.05, .07], [.1, -.05]]) { c.beginPath(); c.arc(s * hr * .6 + dx * hr, cy + hr * .42 + dy * hr, hr * .025, 0, TAU2); c.fill(); }
  mSmile(c, u, 0, cy + hr * .55, hr * .17, true);
  /* mèche rousse */
  const hair = () => mShape(c, u, mGrad(c, 0, cy - hr, 0, cy - hr * .4, '#ffb05a', '#e2742a'), () => { c.moveTo(-hr * .5, cy - hr * .62); c.quadraticCurveTo(-hr * .2, cy - hr * .2, hr * .05, cy - hr * .5); c.quadraticCurveTo(hr * .25, cy - hr * .25, hr * .5, cy - hr * .6); c.quadraticCurveTo(0, cy - hr * 1.1, -hr * .5, cy - hr * .62); c.closePath(); }, .09);
  if (!costume) {
    hair();
    mShape(c, u, mGrad(c, 0, cy - hr * 1.05, 0, cy - hr * .3, '#b8723a', '#6e3a14'), () => { c.arc(0, cy - hr * .02, hr * 1.05, Math.PI * 1.04, Math.PI * 1.96); c.quadraticCurveTo(0, cy - hr * .45, -hr * 1.02, cy - hr * .2); c.closePath(); });
    c.setLineDash([u * .12, u * .1]); c.strokeStyle = 'rgba(255,220,170,0.55)'; c.lineWidth = Math.max(.5, u * .05); c.beginPath(); c.moveTo(0, cy - hr * 1.0); c.quadraticCurveTo(hr * .05, cy - hr * .7, 0, cy - hr * .5); c.stroke(); c.setLineDash([]);
    for (const s of [-1, 1]) mShape(c, u, mGrad(c, 0, cy - hr * .2, 0, cy + hr * .6, '#9a5a28', '#6e3a14'), () => c.roundRect(s * hr * .95 - hr * .22, cy - hr * .2, hr * .44, hr * .78, hr * .2), .1);
    c.strokeStyle = MO; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.moveTo(-hr * .95, cy + hr * .55); c.quadraticCurveTo(0, cy + hr * 1.25, hr * .95, cy + hr * .55); c.stroke();
    mGoggles(c, u, 0, cy - hr * .48, hr, hr * .98);
  } else {
    hair(); mGoggles(c, u, 0, cy - hr * .5, hr, hr * .98);
    mHat(c, u, costume, 0, cy - hr * 1.2, hr, t);
  }
  if (costume) mProp(c, u, costume, hand, t);
  c.restore();
}

/* bras dodu : épaule fine, moufle ronde au bout, petit pouce ; renvoie la position de la main */
/* bras façon « moufle » : un ovale dodu qui sort du côté du corps, avec un petit pouce ; renvoie la position de la main */
function mArm(c, u, sx, sy, ang, L, w, side) {
  c.save(); c.translate(sx, sy); c.rotate(ang);
  const g = c.createLinearGradient(0, -w, 0, w); g.addColorStop(0, '#ffd0de'); g.addColorStop(1, '#ff5a8c');
  c.fillStyle = g; c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .12);
  c.beginPath(); c.ellipse(L * .5, 0, L * .62, w * .55, 0, 0, TAU2); c.fill(); c.stroke();
  c.beginPath(); c.ellipse(L * .78, -side * w * .42, w * .2, w * .17, side * .6, 0, TAU2); c.fill(); c.stroke();
  c.fillStyle = 'rgba(255,255,255,0.6)'; c.beginPath(); c.ellipse(L * .38, -w * .2, L * .22, w * .1, 0, 0, TAU2); c.fill();
  c.restore();
  return [sx + Math.cos(ang) * L * .95, sy + Math.sin(ang) * L * .95];
}
function drawBouli2(c, x, y, u, costume, t, variant, ex = {}) {
  const br = Math.sin(t * .07) * .035;
  c.save(); c.translate(x, y);
  if (!ex.noShadow) { c.fillStyle = 'rgba(20,30,60,0.18)'; c.beginPath(); c.ellipse(0, u * .05, u * 1.55 * (ex.lift ? .7 : 1), u * .28 * (ex.lift ? .7 : 1), 0, 0, TAU2); c.fill(); }
  if (ex.lift) c.translate(0, -ex.lift * u);
  c.scale(1 + br * .6, 1 - br);
  const hr = u * 1.6, cy = -u * 1.6;
  if (variant === 'aviatrice') mScarf(c, u, -hr * .85, cy + hr * .5, t, 5);
  /* pieds */
  for (const s of [-1, 1]) { mShape(c, u, mGrad(c, 0, -u * .4, 0, 0, '#ffb3c8', '#ff6b98'), () => c.ellipse(s * hr * .4, -u * .1, hr * .3, hr * .17, 0, 0, TAU2));
    c.fillStyle = 'rgba(255,255,255,0.5)'; for (const d of [-.1, .05, .2]) { c.beginPath(); c.arc(s * hr * .4 + d * hr, -u * .2, hr * .035, 0, TAU2); c.fill(); } }
  /* corps moelleux, un peu plus large en bas */
  const body = () => { c.moveTo(0, cy - hr * .98); c.bezierCurveTo(hr * .78, cy - hr * .98, hr * 1.08, cy - hr * .1, hr * 1.02, cy + hr * .4); c.bezierCurveTo(hr * .95, cy + hr * .95, hr * .4, cy + hr * 1.0, 0, cy + hr * 1.0);
    c.bezierCurveTo(-hr * .4, cy + hr * 1.0, -hr * .95, cy + hr * .95, -hr * 1.02, cy + hr * .4); c.bezierCurveTo(-hr * 1.08, cy - hr * .1, -hr * .78, cy - hr * .98, 0, cy - hr * .98); c.closePath(); };
  const aL = hr * .62, aW = hr * .52;
  const pose = ex.pose || 'wave', lAng = ex.lAng != null ? ex.lAng : pose === 'jump' ? -Math.PI * .78 : pose === 'down' ? Math.PI * .62 : Math.PI * .72;
  const lsx = -hr * .82, lsy = cy + hr * .28, rsx = hr * .82, rsy = cy + hr * .22, G = ex.grip;
  const armTo = (sx, sy, p) => [Math.atan2(p[1] - sy, p[0] - sx), Math.max(aL * .55, Math.hypot(p[0] - sx, p[1] - sy) / .95)];
  const gL = G && ex.oneHand !== 'r', gR = G && ex.oneHand !== 'l';
  const rAng = ex.rAng != null ? ex.rAng : costume ? .55 : pose === 'jump' ? -.22 : pose === 'down' ? Math.PI * .38 : -.95 + Math.sin(t * .25) * .22;
  const lArm = gL ? armTo(lsx, lsy, G) : [lAng, aL], rArm = gR ? armTo(rsx, rsy, G) : [rAng, aL];
  const lhand = G || [lsx + Math.cos(lAng) * aL * .95, lsy + Math.sin(lAng) * aL * .95], hand = [rsx + Math.cos(rArm[0]) * rArm[1] * .95, rsy + Math.sin(rArm[0]) * rArm[1] * .95];
  const lF = G ? !!ex.gripFront && gL : !!ex.lFront, rF = G ? !!ex.gripFront && gR : false;
  const drawClub = () => { const [hx, hy] = lhand, a = ex.club.a, L = ex.club.L, ex2 = hx + Math.cos(a) * L, ey2 = hy + Math.sin(a) * L;
    c.lineCap = 'round'; c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .2); c.beginPath(); c.moveTo(hx, hy); c.lineTo(ex2, ey2); c.stroke();
    c.strokeStyle = '#d6dde8'; c.lineWidth = Math.max(.6, u * .11); c.beginPath(); c.moveTo(hx, hy); c.lineTo(ex2, ey2); c.stroke();
    c.save(); c.translate(ex2, ey2); c.rotate(a - Math.PI / 2); mShape(c, u, '#9aa4b8', () => c.roundRect(-u * .12, -u * .1, u * .5, u * .24, u * .09), .09); c.restore();
    mShape(c, u, '#ffffff', () => c.arc(hx, hy, u * .2, 0, TAU2), .08); };
  if (ex.club && ex.clubBack) drawClub();
  const gW = aW * (G ? .8 : 1);
  if (!lF) mArm(c, u, lsx, lsy, lArm[0], lArm[1], gL ? gW : aW, -1);
  if (!rF) mArm(c, u, rsx, rsy, rArm[0], rArm[1], gR ? gW : aW, 1);
  mShape(c, u, mRad(c, 0, cy, hr * 1.3, '#ffdde8', '#ff5a8c'), body);
  c.save(); c.beginPath(); body(); c.clip();
  c.strokeStyle = 'rgba(255,240,245,0.55)'; c.lineWidth = hr * .12; c.beginPath(); c.arc(-hr * .12, cy + hr * .05, hr * 1.02, -.45, .9); c.stroke();
  c.fillStyle = 'rgba(255,248,250,0.7)'; c.beginPath(); c.ellipse(0, cy + hr * .5, hr * .55, hr * .42, 0, 0, TAU2); c.fill();
  if (variant === 'aviatrice') { c.fillStyle = mGrad(c, 0, cy + hr * .4, 0, cy + hr * .62, '#ff5a5a', '#c41d2b'); c.fillRect(-hr * 1.2, cy + hr * .42, hr * 2.4, hr * .2);
    c.strokeStyle = 'rgba(42,42,68,0.55)'; c.lineWidth = Math.max(.6, u * .08); c.beginPath(); c.moveTo(-hr * 1.2, cy + hr * .42); c.lineTo(hr * 1.2, cy + hr * .42); c.moveTo(-hr * 1.2, cy + hr * .62); c.lineTo(hr * 1.2, cy + hr * .62); c.stroke(); }
  c.restore();
  if (variant === 'aviatrice') { mShape(c, u, '#e8333d', () => c.ellipse(hr * .55, cy + hr * .53, hr * .14, hr * .12, 0, 0, TAU2), .09);
    mShape(c, u, '#d61f2c', () => { c.moveTo(hr * .55, cy + hr * .6); c.lineTo(hr * .7, cy + hr * .95); c.lineTo(hr * .52, cy + hr * .92); c.closePath(); }, .08); }
  if (lF || rF) { if (ex.club && !ex.clubBack) drawClub(); if (lF) mArm(c, u, lsx, lsy, lArm[0], lArm[1], gW, -1); if (rF) mArm(c, u, rsx, rsy, rArm[0], rArm[1], gW, 1); }
  c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.ellipse(-hr * .5, cy - hr * .48, hr * .13, hr * .24, .6, 0, TAU2); c.fill(); c.beginPath(); c.arc(-hr * .3, cy - hr * .75, hr * .05, 0, TAU2); c.fill();
  /* visage (expressions) */
  const E = ex.eyes || 'open', Mo = ex.mouth || 'cat', ey = cy - hr * .08, gap = hr * .32, es = hr * .23;
  if (E === 'open' || E === 'wide') mEyes(c, u, 0, ey, gap, es * (E === 'wide' ? 1.18 : 1), E === 'wide' ? 30 : t, ex.look || [.2, .05]);
  else { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .13); c.lineCap = 'round';
    for (const sd of [-1, 1]) { const x0 = sd * gap;
      if (E === 'happy') { c.beginPath(); c.arc(x0, ey + es * .3, es * .6, Math.PI * 1.15, Math.PI * 1.85); c.stroke(); }
      else if (E === 'closed') { c.beginPath(); c.arc(x0, ey - es * .1, es * .6, .15 * Math.PI, .85 * Math.PI); c.stroke(); }
      else if (E === 'x') { const k = es * .45; c.beginPath(); c.moveTo(x0 - k, ey - k); c.lineTo(x0 + k, ey + k); c.moveTo(x0 + k, ey - k); c.lineTo(x0 - k, ey + k); c.stroke(); }
      else if (E === 'sad') { mEyes(c, u, 0, ey, gap, es, 30, [0, .3]); break; } } }
  if (ex.brows) { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .12); c.lineCap = 'round'; for (const sd of [-1, 1]) { const x0 = sd * gap, y0 = ey - es * 1.35, k = ex.brows === 'angry' ? 1 : -1;
      c.beginPath(); c.moveTo(x0 - sd * es * .55, y0 - k * es * .25); c.lineTo(x0 + sd * es * .45, y0 + k * es * .2); c.stroke(); } }
  if (ex.tear) { c.fillStyle = '#7fd0ff'; c.strokeStyle = MO; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.moveTo(gap + es * .4, ey + es * .7); c.quadraticCurveTo(gap + es * .75, ey + es * 1.3, gap + es * .4, ey + es * 1.45); c.quadraticCurveTo(gap + es * .05, ey + es * 1.3, gap + es * .4, ey + es * .7); c.fill(); c.stroke(); }
  mBlush(c, u, 0, cy + hr * .22, hr * .55);
  const my = cy + hr * .25; c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .1); c.lineCap = 'round';
  if (Mo === 'cat') { c.beginPath(); c.moveTo(-hr * .12, my - hr * .01); c.quadraticCurveTo(-hr * .06, my + hr * .09, 0, my + hr * .01); c.quadraticCurveTo(hr * .06, my + hr * .09, hr * .12, my - hr * .01); c.stroke();
    c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(hr * .03, my + hr * .05); c.lineTo(hr * .09, my + hr * .05); c.lineTo(hr * .06, my + hr * .13); c.closePath(); c.fill(); }
  else if (Mo === 'open') mSmile(c, u, 0, my - hr * .02, hr * .16, true);
  else if (Mo === 'o') { c.fillStyle = '#7a1a3a'; c.beginPath(); c.ellipse(0, my + hr * .04, hr * .08, hr * .11, 0, 0, TAU2); c.fill(); c.stroke(); }
  else if (Mo === 'sad') { c.beginPath(); c.arc(0, my + hr * .14, hr * .12, 1.15 * Math.PI, 1.85 * Math.PI); c.stroke(); }
  else if (Mo === 'grr') { c.beginPath(); for (let i = 0; i <= 6; i++) c.lineTo(-hr * .15 + i * hr * .05, my + (i % 2 ? hr * .05 : -hr * .02)); c.stroke(); }
  /* signatures */
  const top = cy - hr * .95;
  if (variant === 'aviatrice') mGoggles(c, u, 0, cy - hr * .55, hr * .78, hr * .88);
  if (costume && !ex.hatOff) mHat(c, u, costume, 0, top + hr * (variant === 'aviatrice' ? -.05 : .08), hr * .78, t);
  if (variant === 'antenne') { const hatTop = costume === 'mage' ? top - hr * 1.35 : costume === 'golf' ? top - hr * .45 : costume === 'peche' ? top - hr * .28 : top;
    const bx = hr * .3 + Math.sin(t * .05) * hr * .06, by = hatTop - hr * .78;
    c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .08); c.beginPath(); c.moveTo(0, hatTop + hr * .02); c.quadraticCurveTo(hr * .08, hatTop - hr * .35, bx, by + hr * .3); c.stroke();
    mShape(c, u, mRad(c, bx, by, hr * .34, '#fff27e', '#f0b400'), () => c.ellipse(bx, by, hr * .25, hr * .3, 0, 0, TAU2), .09);
    c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.ellipse(bx - hr * .08, by - hr * .11, hr * .05, hr * .09, .5, 0, TAU2); c.fill(); }
  if (ex.club) { if (!ex.clubBack && !lF && !rF) drawClub(); }
  else if (costume && !ex.noProp) mProp(c, u, costume, hand, t);
  c.restore();
}
