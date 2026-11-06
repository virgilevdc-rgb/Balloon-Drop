/* Trois pistes de mascotte pour Balloon Drop, dessinées au canvas.
   drawMascot(c, type, x, y, u, costume, t) : pieds en (x, y), u = unité de taille. type 'ballon' | 'pilote' | 'bouli'. */
const MO = '#2a2a44', TAU2 = Math.PI * 2;
const mGrad = (c, x0, y0, x1, y1, a, b) => { const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
const mRad = (c, x, y, r, a, b) => { const g = c.createRadialGradient(x - r * .35, y - r * .4, r * .05, x, y, r); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
function mShape(c, u, fill, draw, lw = .13) { c.fillStyle = fill; c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * lw); c.lineJoin = 'round'; c.beginPath(); draw(); c.fill(); c.stroke(); }
function mLimb(c, u, pts, col, w) { c.lineCap = 'round'; c.lineJoin = 'round';
  for (const [cl, ww] of [[MO, w + Math.max(1.2, u * .26)], [col, w]]) { c.strokeStyle = cl; c.lineWidth = ww; c.beginPath(); pts.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.stroke(); } }
function mEyes(c, u, cx, cy, gap, sz, t, look = [0, 0]) {
  const blink = (t % 210) < 6;
  for (const s of [-1, 1]) { const ex = cx + s * gap, ey = cy;
    if (blink) { c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .1); c.lineCap = 'round'; c.beginPath(); c.arc(ex, ey - sz * .1, sz * .7, .15 * Math.PI, .85 * Math.PI); c.stroke(); continue; }
    c.fillStyle = '#ffffff'; c.strokeStyle = MO; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.ellipse(ex, ey, sz * .78, sz, 0, 0, TAU2); c.fill(); c.stroke();
    const px = ex + look[0] * sz * .25, py = ey + look[1] * sz * .2 + sz * .08;
    c.fillStyle = mRad(c, px, py, sz * .62, '#4a3a8a', '#16122e'); c.beginPath(); c.ellipse(px, py, sz * .55, sz * .66, 0, 0, TAU2); c.fill();
    c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(px - sz * .2, py - sz * .26, sz * .2, sz * .24, -.3, 0, TAU2); c.fill();
    c.beginPath(); c.arc(px + sz * .2, py + sz * .22, sz * .08, 0, TAU2); c.fill(); }
}
function mBlush(c, u, cx, cy, gap) { for (const s of [-1, 1]) { const g = c.createRadialGradient(cx + s * gap, cy, 0, cx + s * gap, cy, u * .28); g.addColorStop(0, 'rgba(255,110,140,0.55)'); g.addColorStop(1, 'rgba(255,110,140,0)'); c.fillStyle = g; c.beginPath(); c.ellipse(cx + s * gap, cy, u * .3, u * .2, 0, 0, TAU2); c.fill(); } }
function mSmile(c, u, cx, cy, w, open) { c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .1); c.lineCap = 'round';
  if (open) { c.fillStyle = '#7a1a3a'; c.beginPath(); c.moveTo(cx - w, cy); c.quadraticCurveTo(cx, cy + w * 1.4, cx + w, cy); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = '#ff7a9a'; c.beginPath(); c.ellipse(cx, cy + w * .55, w * .45, w * .25, 0, 0, TAU2); c.fill(); }
  else { c.beginPath(); c.moveTo(cx - w, cy); c.quadraticCurveTo(cx, cy + w * .8, cx + w, cy); c.stroke(); } }

/* ---------- accessoires de costume (au-dessus de la tête, et dans la main) ---------- */
function mHat(c, u, kind, hx, top, hr, t) {
  if (kind === 'golf') {
    mShape(c, u, mGrad(c, 0, top - hr * .6, 0, top + hr * .2, '#ffffff', '#dfe5ee'), () => { c.arc(hx, top + hr * .35, hr * .82, Math.PI, 0); c.closePath(); });
    c.fillStyle = '#e8333d'; c.fillRect(hx - hr * .82, top + hr * .2, hr * 1.64, hr * .15);
    mShape(c, u, '#ffffff', () => c.ellipse(hx + hr * .55, top + hr * .38, hr * .62, hr * .14, .05, 0, TAU2));
    mShape(c, u, '#e8333d', () => c.arc(hx, top - hr * .47, hr * .1, 0, TAU2), .08);
  } else if (kind === 'peche') {
    mShape(c, u, mGrad(c, 0, top - hr * .5, 0, top + hr * .5, '#ffe680', '#f2b705'), () => { c.moveTo(hx - hr * 1.3, top + hr * .45); c.quadraticCurveTo(hx, top + hr * .15, hx + hr * 1.35, top + hr * .55);
      c.lineTo(hx + hr * .78, top + hr * .2); c.quadraticCurveTo(hx, top - hr * .85, hx - hr * .8, top + hr * .15); c.closePath(); });
    c.strokeStyle = 'rgba(160,110,0,0.5)'; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.moveTo(hx - hr * .55, top - hr * .05); c.quadraticCurveTo(hx, top - hr * .5, hx + hr * .55, top); c.stroke();
  } else if (kind === 'mage') {
    mShape(c, u, mGrad(c, hx - hr, 0, hx + hr, 0, '#8a6aff', '#4a2fb8'), () => { c.moveTo(hx - hr * .85, top + hr * .3); c.quadraticCurveTo(hx - hr * .2, top - hr * .6, hx + hr * .15, top - hr * 1.9);
      c.quadraticCurveTo(hx + hr * .55, top - hr * 2.0, hx + hr * .7, top - hr * 1.65); c.quadraticCurveTo(hx + hr * .3, top - hr * 1.5, hx + hr * .85, top + hr * .3); c.closePath(); });
    mShape(c, u, '#6a4ae0', () => c.ellipse(hx, top + hr * .32, hr * 1.25, hr * .26, 0, 0, TAU2));
    c.fillStyle = '#ffd23f'; for (const [x, y, s] of [[-.2, -.4, 1], [.25, -1.0, .7], [.05, .05, .6]]) { c.beginPath(); for (let k = 0; k < 10; k++) { const b = -Math.PI / 2 + k * Math.PI / 5, rr = (k % 2 ? hr * .07 : hr * .16) * s; c.lineTo(hx + x * hr + Math.cos(b) * rr, top + y * hr + Math.sin(b) * rr); } c.closePath(); c.fill(); }
  }
}
function mProp(c, u, kind, hand, t) {
  const [x, y] = hand;
  if (kind === 'golf') { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .2); c.lineCap = 'round'; c.beginPath(); c.moveTo(x, y); c.lineTo(x + u * .5, y + u * 1.9); c.stroke(); c.strokeStyle = '#d6dde8'; c.lineWidth = Math.max(.6, u * .11); c.beginPath(); c.moveTo(x, y); c.lineTo(x + u * .5, y + u * 1.9); c.stroke();
    mShape(c, u, '#9aa4b8', () => c.roundRect(x + u * .38, y + u * 1.82, u * .55, u * .26, u * .1), .09); }
  if (kind === 'peche') { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .2); c.lineCap = 'round'; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + u * 1.2, y - u * 2.0, x + u * 2.4, y - u * 2.4); c.stroke();
    c.strokeStyle = '#8a5a2a'; c.lineWidth = Math.max(.6, u * .11); c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + u * 1.2, y - u * 2.0, x + u * 2.4, y - u * 2.4); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,0.9)'; c.lineWidth = Math.max(.5, u * .05); c.beginPath(); c.moveTo(x + u * 2.4, y - u * 2.4); c.lineTo(x + u * 2.5, y - u * .6 + Math.sin(t * .08) * u * .1); c.stroke();
    mShape(c, u, '#ffffff', () => c.arc(x + u * 2.5, y - u * .45 + Math.sin(t * .08) * u * .1, u * .22, 0, TAU2), .08); c.fillStyle = '#e8333d'; c.beginPath(); c.arc(x + u * 2.5, y - u * .45 + Math.sin(t * .08) * u * .1, u * .22, Math.PI, 0); c.fill(); }
  if (kind === 'mage') { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .2); c.lineCap = 'round'; c.beginPath(); c.moveTo(x, y); c.lineTo(x + u * 1.0, y - u * 1.2); c.stroke(); c.strokeStyle = '#3a2a1a'; c.lineWidth = Math.max(.6, u * .11); c.beginPath(); c.moveTo(x, y); c.lineTo(x + u * 1.0, y - u * 1.2); c.stroke();
    const sx = x + u * 1.05, sy = y - u * 1.28; c.fillStyle = '#ffd23f'; c.strokeStyle = MO; c.lineWidth = Math.max(.6, u * .08); c.beginPath(); for (let k = 0; k < 10; k++) { const b = -Math.PI / 2 + k * Math.PI / 5 + t * .03, rr = k % 2 ? u * .16 : u * .38; c.lineTo(sx + Math.cos(b) * rr, sy + Math.sin(b) * rr); } c.closePath(); c.fill(); c.stroke();
    for (let i = 0; i < 4; i++) { const q = ((t * .02 + i * .25) % 1); c.fillStyle = `rgba(255,240,170,${(1 - q).toFixed(3)})`; c.beginPath(); c.arc(sx + Math.cos(i * 1.7) * q * u * 1.2, sy + Math.sin(i * 1.7) * q * u * 1.2, u * .08, 0, TAU2); c.fill(); } }
}

function drawMascot(c, type, x, y, u, costume, t) {
  const br = Math.sin(t * .07) * .03, hop = 0;
  c.save(); c.translate(x, y);
  /* ombre portée */
  c.fillStyle = 'rgba(20,30,60,0.18)'; c.beginPath(); c.ellipse(0, u * .05, u * 1.3, u * .25, 0, 0, TAU2); c.fill();
  c.translate(0, -hop); c.scale(1 - br * .5, 1 + br);
  let hand = [u * 1.1, -u * 1.5], headTop, hr = u * 1.15, hx = 0;
  if (type === 'ballon') {
    /* jambes + baskets */
    mLimb(c, u, [[-u * .32, -u * .15], [-u * .3, -u * .9]], '#2f4a8a', u * .46); mLimb(c, u, [[u * .32, -u * .15], [u * .3, -u * .9]], '#2f4a8a', u * .46);
    for (const s of [-1, 1]) { mShape(c, u, '#ffffff', () => c.ellipse(s * u * .42, -u * .1, u * .38, u * .2, 0, 0, TAU2)); c.fillStyle = '#e8336d'; c.fillRect(s * u * .42 - u * .3, -u * .1, u * .6, u * .07); }
    /* t-shirt avec un petit ballon imprimé */
    mShape(c, u, mGrad(c, 0, -u * 2.2, 0, -u * .8, '#ffffff', '#e6ecf5'), () => c.roundRect(-u * .72, -u * 2.25, u * 1.44, u * 1.45, u * .45));
    mShape(c, u, '#ff6b98', () => c.ellipse(u * .02, -u * 1.6, u * .2, u * .24, 0, 0, TAU2), .07);
    c.strokeStyle = MO; c.lineWidth = Math.max(.5, u * .05); c.beginPath(); c.moveTo(u * .02, -u * 1.36); c.quadraticCurveTo(u * .1, -u * 1.2, u * -.02, -u * 1.05); c.stroke();
    /* bras */
    hand = costume ? [u * 1.05, -u * 1.55] : [u * 1.3, -u * 2.75 + Math.sin(t * .25) * u * .25];
    mLimb(c, u, [[-u * .55, -u * 1.95], [-u * 1.0, -u * 1.3]], '#ffd3b0', u * .34); mLimb(c, u, [[u * .55, -u * 1.95], hand], '#ffd3b0', u * .34);
    /* cou = nœud du ballon */
    mShape(c, u, '#c41d55', () => { c.moveTo(-u * .2, -u * 2.2); c.lineTo(u * .2, -u * 2.2); c.lineTo(u * .1, -u * 2.45); c.lineTo(-u * .1, -u * 2.45); c.closePath(); }, .09);
    /* tête-ballon */
    const cy = -u * 3.55; hr = u * 1.18;
    mShape(c, u, mRad(c, 0, cy, hr * 1.25, '#ffb3c8', '#e8336d'), () => { c.moveTo(0, cy + hr * 1.08); c.bezierCurveTo(-hr * 1.25, cy + hr * .9, -hr * 1.15, cy - hr * 1.05, 0, cy - hr * 1.02); c.bezierCurveTo(hr * 1.15, cy - hr * 1.05, hr * 1.25, cy + hr * .9, 0, cy + hr * 1.08); c.closePath(); });
    c.fillStyle = 'rgba(255,255,255,0.85)'; c.beginPath(); c.ellipse(-hr * .5, cy - hr * .52, hr * .16, hr * .3, .6, 0, TAU2); c.fill(); c.beginPath(); c.arc(-hr * .25, cy - hr * .82, hr * .06, 0, TAU2); c.fill();
    mEyes(c, u, 0, cy + hr * .05, hr * .38, hr * .27, t, [.2, 0]); mBlush(c, u, 0, cy + hr * .42, hr * .64); mSmile(c, u, 0, cy + hr * .5, hr * .2, true);
    headTop = cy - hr * .95;
    /* mèche = ficelle bouclée */
    if (!costume) { c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .12); c.lineCap = 'round'; c.beginPath(); c.moveTo(0, headTop + hr * .05); c.bezierCurveTo(hr * .35, headTop - hr * .45, hr * -.35, headTop - hr * .5, hr * .1, headTop - hr * .75 + Math.sin(t * .06) * hr * .05); c.stroke(); }
  } else if (type === 'pilote') {
    mLimb(c, u, [[-u * .32, -u * .15], [-u * .3, -u * .9]], '#8a6a3a', u * .46); mLimb(c, u, [[u * .32, -u * .15], [u * .3, -u * .9]], '#8a6a3a', u * .46);
    for (const s of [-1, 1]) mShape(c, u, '#5a3a1e', () => c.roundRect(s * u * .42 - u * .34, -u * .32, u * .68, u * .34, u * .14));
    /* écharpe qui flotte (derrière) */
    const wv = t * .12; mShape(c, u, '#e8333d', () => { c.moveTo(-u * .3, -u * 2.2); for (let k = 1; k <= 6; k++) c.lineTo(-u * .3 - k * u * .35, -u * 2.25 + Math.sin(wv - k * .8) * u * .18 * k / 3); for (let k = 6; k >= 1; k--) c.lineTo(-u * .3 - k * u * .35, -u * 1.95 + Math.sin(wv - k * .8) * u * .18 * k / 3); c.lineTo(-u * .3, -u * 1.95); c.closePath(); }, .1);
    /* blouson en cuir, col fourré */
    mShape(c, u, mGrad(c, 0, -u * 2.2, 0, -u * .8, '#b5703a', '#7a4520'), () => c.roundRect(-u * .74, -u * 2.25, u * 1.48, u * 1.45, u * .42));
    c.strokeStyle = 'rgba(42,42,68,0.45)'; c.lineWidth = Math.max(.6, u * .07); c.beginPath(); c.moveTo(0, -u * 2.1); c.lineTo(0, -u * .85); c.stroke();
    mShape(c, u, '#f4ead2', () => { c.ellipse(0, -u * 2.18, u * .62, u * .2, 0, 0, TAU2); });
    mShape(c, u, '#e8333d', () => c.ellipse(0, -u * 2.08, u * .42, u * .14, 0, 0, TAU2), .08);
    hand = costume ? [u * 1.05, -u * 1.55] : [u * 1.3, -u * 2.75 + Math.sin(t * .25) * u * .25];
    mLimb(c, u, [[-u * .55, -u * 1.95], [-u * 1.0, -u * 1.3]], '#9a5a2a', u * .36); mLimb(c, u, [[u * .55, -u * 1.95], hand], '#9a5a2a', u * .36);
    /* tête */
    const cy = -u * 3.3; hr = u * 1.12;
    mShape(c, u, mRad(c, 0, cy, hr * 1.2, '#ffe3cc', '#f2b48a'), () => c.arc(0, cy, hr, 0, TAU2));
    mEyes(c, u, 0, cy + hr * .12, hr * .36, hr * .24, t, [.2, 0]); mBlush(c, u, 0, cy + hr * .45, hr * .6); mSmile(c, u, 0, cy + hr * .52, hr * .18, true);
    headTop = cy - hr * .9;
    if (!costume) {
      /* bonnet d'aviateur et rabats */
      mShape(c, u, mGrad(c, 0, cy - hr, 0, cy, '#a8642e', '#6e3a14'), () => { c.arc(0, cy - hr * .05, hr * 1.04, Math.PI * 1.02, Math.PI * 1.98); c.closePath(); });
      for (const s of [-1, 1]) mShape(c, u, '#7a4520', () => c.roundRect(s * hr * .92 - hr * .2, cy - hr * .15, hr * .4, hr * .7, hr * .18), .1);
      /* lunettes relevées sur le front */
      c.strokeStyle = MO; c.lineWidth = Math.max(1, u * .16); c.beginPath(); c.moveTo(-hr * .98, cy - hr * .45); c.lineTo(hr * .98, cy - hr * .45); c.stroke();
      c.strokeStyle = '#3a2410'; c.lineWidth = Math.max(.6, u * .1); c.beginPath(); c.moveTo(-hr * .98, cy - hr * .45); c.lineTo(hr * .98, cy - hr * .45); c.stroke();
      for (const s of [-1, 1]) { mShape(c, u, mGrad(c, 0, cy - hr * .75, 0, cy - hr * .15, '#fff1b8', '#c98a1c'), () => c.arc(s * hr * .36, cy - hr * .45, hr * .3, 0, TAU2), .1);
        c.fillStyle = mRad(c, s * hr * .36, cy - hr * .45, hr * .22, '#bff0ff', '#2a8fd6'); c.beginPath(); c.arc(s * hr * .36, cy - hr * .45, hr * .2, 0, TAU2); c.fill();
        c.fillStyle = 'rgba(255,255,255,0.85)'; c.beginPath(); c.ellipse(s * hr * .36 - hr * .07, cy - hr * .52, hr * .06, hr * .03, -.6, 0, TAU2); c.fill(); }
    }
  } else {
    /* BOULI : petite créature toute ronde avec un mini-ballon en antenne */
    const cy = -u * 1.55; hr = u * 1.55;
    for (const s of [-1, 1]) mShape(c, u, '#ff8fb0', () => c.ellipse(s * hr * .42, -u * .08, hr * .3, hr * .16, 0, 0, TAU2));
    mShape(c, u, mRad(c, 0, cy, hr * 1.25, '#ffd6e2', '#ff6b98'), () => c.ellipse(0, cy, hr, hr * .96, 0, 0, TAU2));
    c.fillStyle = 'rgba(255,255,255,0.55)'; c.beginPath(); c.ellipse(0, cy + hr * .42, hr * .55, hr * .38, 0, 0, TAU2); c.fill();
    c.fillStyle = 'rgba(255,255,255,0.85)'; c.beginPath(); c.ellipse(-hr * .52, cy - hr * .5, hr * .14, hr * .24, .6, 0, TAU2); c.fill();
    hand = costume ? [hr * .95, cy + hr * .15] : [hr * 1.15, cy - hr * .45 + Math.sin(t * .25) * hr * .15];
    mLimb(c, u, [[-hr * .85, cy + hr * .2], [-hr * 1.1, cy + hr * .45]], '#ff8fb0', u * .3); mLimb(c, u, [[hr * .85, cy + hr * .2], hand], '#ff8fb0', u * .3);
    mEyes(c, u, 0, cy - hr * .1, hr * .32, hr * .22, t, [.2, 0]); mBlush(c, u, 0, cy + hr * .2, hr * .55); mSmile(c, u, 0, cy + hr * .25, hr * .14, true);
    headTop = cy - hr * .9;
    if (!costume) { const bx = hr * .35 + Math.sin(t * .05) * hr * .06, by = cy - hr * 1.75;
      c.strokeStyle = MO; c.lineWidth = Math.max(.8, u * .08); c.beginPath(); c.moveTo(0, cy - hr * .95); c.quadraticCurveTo(hr * .1, cy - hr * 1.3, bx, by + hr * .32); c.stroke();
      mShape(c, u, mRad(c, bx, by, hr * .35, '#fff27e', '#f0b400'), () => c.ellipse(bx, by, hr * .27, hr * .32, 0, 0, TAU2), .09);
      c.fillStyle = 'rgba(255,255,255,0.85)'; c.beginPath(); c.ellipse(bx - hr * .09, by - hr * .12, hr * .05, hr * .09, .5, 0, TAU2); c.fill(); }
  }
  if (costume) { mHat(c, u, costume, hx, headTop + (type === 'bouli' ? hr * .1 : 0), type === 'bouli' ? hr * .78 : hr, t); mProp(c, u, costume, hand, t); }
  c.restore();
}
