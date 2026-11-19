/* Ballon secret Monde 5 : « Le Pêcheur endormi » (nuit polaire, aurore, le pingouin pêche et s'endort) */
(() => {
const TAU = Math.PI * 2, h1 = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const sm = (a, b, x) => { const k = Math.max(0, Math.min(1, (x - a) / (b - a))); return k * k * (3 - 2 * k); };
/* état du gag selon l'image t (cycle de 12 s) */
function story(t) {
  const T = t % 720, s = {};
  s.sleep = sm(150, 300, T) * (1 - sm(520, 530, T));               /* 0 réveillé → 1 endormi */
  s.nod = T > 160 && T < 300 ? Math.max(0, Math.sin((T - 160) / 70 * Math.PI)) ** 3 * .35 : 0; /* pique du nez */
  s.lid = T < 150 ? ((T % 110) < 5 ? 1 : 0) : T < 300 ? .55 + .45 * Math.max(0, Math.sin((T - 160) / 70 * Math.PI)) ** 2 : T < 525 ? 1 : 0;
  s.bubble = T > 310 && T < 525 ? .55 + .45 * Math.sin((T - 310) / 45 * Math.PI) : 0;
  s.pop = T >= 525 && T < 545 ? (T - 525) / 20 : 0;
  s.bite = T > 420 && T < 500 ? 1 : 0; s.biteT = T - 420;
  s.escape = T >= 500 && T < 540 ? (T - 500) / 40 : 0;
  s.startle = T >= 525 && T < 600 ? 1 - (T - 525) / 75 : 0;
  s.wonder = T >= 590 && T < 690 ? (T - 590) / 100 : 0;
  s.z = T > 320 && T < 525; s.T = T;
  return s; }
function seated(c, x, y, s, t, st) {
  const OUT = '#060a1a', ln = (w) => { c.strokeStyle = OUT; c.lineWidth = w; c.lineJoin = 'round'; c.stroke(); };
  c.save(); c.translate(x, y - st.startle * Math.sin(st.startle * Math.PI) * 10 * s / s); c.scale(s, s);
  c.fillStyle = 'rgba(0,0,20,0.4)'; c.beginPath(); c.ellipse(4, 1, 26, 5, 0, 0, TAU); c.fill();
  /* nageoire arrière + queue */
  c.fillStyle = '#141a34'; c.beginPath(); c.moveTo(-18, -4); c.lineTo(-28, 2); c.lineTo(-14, 2); c.fill();
  /* pieds devant lui */
  for (const [fx, fy] of [[14, -2], [22, 0]]) { c.fillStyle = '#d8781e'; c.beginPath(); c.ellipse(fx, fy, 9, 4, .05, 0, TAU); c.fill(); ln(1.6); }
  /* corps assis */
  c.save(); c.rotate(-.08 + st.sleep * -.05);
  c.beginPath(); c.ellipse(0, -22, 20, 23, 0, 0, TAU); const bg = c.createLinearGradient(-18, -44, 18, 0); bg.addColorStop(0, '#2c375e'); bg.addColorStop(1, '#0a0e1e'); c.fillStyle = bg; c.fill(); ln(2.2);
  const vg = c.createRadialGradient(6, -26, 3, 8, -18, 20); vg.addColorStop(0, '#dde9ff'); vg.addColorStop(1, '#7a90c0'); c.fillStyle = vg; c.beginPath(); c.ellipse(7, -19, 12, 17, 0, 0, TAU); c.fill();
  /* bonnet ? non : écharpe rouge à pois (le baluchon est devenu son écharpe) */
  c.fillStyle = '#c42a3a'; c.beginPath(); c.ellipse(2, -40, 19, 6, .05, 0, TAU); c.fill(); ln(1.6);
  c.beginPath(); c.moveTo(-10, -38); c.quadraticCurveTo(-18, -26, -14, -16); c.lineTo(-8, -18); c.quadraticCurveTo(-10, -28, -4, -36); c.closePath(); c.fill(); ln(1.4);
  c.fillStyle = '#ffe6ea'; for (const [dx, dy] of [[-6, -41], [4, -42], [12, -39], [-13, -24]]) { c.beginPath(); c.arc(dx, dy, 1.8, 0, TAU); c.fill(); }
  /* tête (pivote au cou : pique du nez, s'endort) */
  c.save(); c.translate(3, -42); c.rotate(st.nod + st.sleep * .22 - st.startle * .15 - st.wonder * Math.sin(st.wonder * Math.PI) * .12);
  const HY = -16;
  const hg = c.createRadialGradient(-10, HY - 12, 3, 0, HY, 30); hg.addColorStop(0, '#36446e'); hg.addColorStop(1, '#0a0e1e'); c.fillStyle = hg; c.beginPath(); c.ellipse(1, HY, 26, 24, 0, 0, TAU); c.fill(); ln(2.2);
  c.save(); c.beginPath(); c.ellipse(1, HY, 26, 24, 0, 0, TAU); c.clip(); c.strokeStyle = 'rgba(120,255,200,0.6)'; c.lineWidth = 3.4; c.beginPath(); c.ellipse(1, HY + 3, 26, 24, 0, Math.PI * 1.08, Math.PI * 1.85); c.stroke(); c.restore();
  c.fillStyle = '#dfe8ff'; c.beginPath(); c.moveTo(7, HY - 14); c.bezierCurveTo(14, HY - 22, 26, HY - 14, 24, HY - 2); c.bezierCurveTo(23, HY + 10, 14, HY + 18, 6, HY + 18); c.bezierCurveTo(-2, HY + 18, -12, HY + 10, -12, HY - 2); c.bezierCurveTo(-13, HY - 14, 0, HY - 22, 7, HY - 14); c.fill();
  c.fillStyle = 'rgba(255,120,170,0.5)'; c.beginPath(); c.ellipse(-8, HY + 7, 4.5, 3, 0, 0, TAU); c.ellipse(22, HY + 7, 4, 3, 0, 0, TAU); c.fill();
  const big = 1 + st.startle * .35;
  for (const [ex, sz] of [[0, .92], [14, 1]]) { const ey = HY - 3, rx = 6.5 * sz * big, ry = 8 * sz * big;
    if (st.lid > .95) { c.strokeStyle = OUT; c.lineWidth = 2; c.lineCap = 'round'; c.beginPath(); c.arc(ex, ey - 1, rx * .8, .25, Math.PI - .25); c.stroke(); continue; }
    c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(ex, ey, rx, ry, 0, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.4; c.stroke();
    const py = st.wonder > 0 ? 3 : st.lid > .3 ? 2 : .5, pxx = st.wonder > 0 ? 3 : 1.5;
    c.fillStyle = '#141a2c'; c.beginPath(); c.ellipse(ex + pxx, ey + py, 3.9 * sz * (st.startle ? .7 : 1), 4.7 * sz * (st.startle ? .7 : 1), 0, 0, TAU); c.fill();
    c.fillStyle = '#bfffe6'; c.beginPath(); c.arc(ex - .2, ey + py - 2, 1.8 * sz, 0, TAU); c.fill();
    if (st.lid > .02) { c.save(); c.beginPath(); c.ellipse(ex, ey, rx + .5, ry + .5, 0, 0, TAU); c.clip(); c.fillStyle = '#2a3660'; c.fillRect(ex - rx - 1, ey - ry - 1, rx * 2 + 2, (ry * 2 + 2) * st.lid); c.strokeStyle = OUT; c.lineWidth = 1.6; c.beginPath(); c.moveTo(ex - rx, ey - ry + (ry * 2) * st.lid); c.lineTo(ex + rx, ey - ry + (ry * 2) * st.lid); c.stroke(); c.restore(); } }
  /* bec */
  c.save(); c.translate(19, HY + 6); const open = st.startle * .9;
  c.fillStyle = '#b0580e'; c.beginPath(); c.moveTo(-4, 1); c.quadraticCurveTo(10, 3 + open * 5, 14, 2 + open * 6); c.quadraticCurveTo(6, 7 + open * 7, -3, 5 + open * 4); c.closePath(); c.fill(); ln(1.5);
  c.fillStyle = '#e09030'; c.beginPath(); c.moveTo(-5, -4); c.quadraticCurveTo(8, -6, 16, 1); c.quadraticCurveTo(8, 3, -4, 2); c.closePath(); c.fill(); ln(1.5); c.restore();
  /* bulle de sommeil au bout du bec */
  const bb = st.bubble > 0 ? 3 + st.bubble * 12 : 0;
  if (bb) { const bx = 36 + bb * .6, by = HY + 8; const g = c.createRadialGradient(bx - bb * .3, by - bb * .3, 0, bx, by, bb); g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(.7, 'rgba(170,230,255,0.25)'); g.addColorStop(1, 'rgba(200,240,255,0.7)');
    c.fillStyle = g; c.beginPath(); c.arc(bx, by, bb, 0, TAU); c.fill(); c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.ellipse(bx - bb * .35, by - bb * .4, bb * .25, bb * .15, -.6, 0, TAU); c.fill(); }
  if (st.pop > 0) { for (let k = 0; k < 7; k++) { const a = k / 7 * TAU, d = 8 + st.pop * 14; c.fillStyle = `rgba(220,245,255,${(1 - st.pop).toFixed(3)})`; c.beginPath(); c.arc(44 + Math.cos(a) * d, HY + 8 + Math.sin(a) * d, 1.8, 0, TAU); c.fill(); } }
  c.restore(); c.restore();
  c.restore(); }
function frontFlipper(c, x, y, s, st) { c.save(); c.translate(x, y); c.scale(s, s); c.rotate(-.08);
  c.translate(12, -30); c.rotate(-1.15 + st.sleep * .45 + st.startle * -.3); c.fillStyle = '#1a2240'; c.beginPath(); c.ellipse(0, 12, 5.5, 13, 0, 0, TAU); c.fill(); c.strokeStyle = '#060a1a'; c.lineWidth = 1.8; c.stroke(); c.restore(); }

const PECHEUR = { id: 'pecheur', theme: 'secret', name: 'Le Pêcheur endormi', secret: true, dust: '#7affc8', paint: (c, r, t = 0) => {
  const R = r, HZN = R * .12, st = story(t);
  c.save(); c.beginPath(); c.arc(0, 0, R, 0, TAU); c.clip();
  const sky = c.createLinearGradient(0, -R, 0, HZN); sky.addColorStop(0, '#040a20'); sky.addColorStop(.6, '#0a1c48'); sky.addColorStop(1, '#16386c'); c.fillStyle = sky; c.fillRect(-R, -R, R * 2, R * 2);
  for (let i = 0; i < 22; i++) { const sx = (h1(i * 2) * 2 - 1) * R, sy = (-1 + h1(i * 5) * 1.05) * R, a = .25 + .7 * Math.abs(Math.sin(t * .03 + i * 1.7)); c.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`; c.beginPath(); c.arc(sx, sy, R * (.01 + h1(i) * .013), 0, TAU); c.fill(); }
  c.fillStyle = '#fff6d8'; c.beginPath(); c.arc(-R * .52, -R * .55, R * .1, 0, TAU); c.fill(); c.fillStyle = '#0a1a44'; c.beginPath(); c.arc(-R * .47, -R * .58, R * .085, 0, TAU); c.fill();
  /* aurore */
  const ribbon = (ph, base, amp, hgt, rgb, top, w) => {
    const yb = (x) => base + Math.sin(x / R * 2.1 + t * .018 + ph) * amp + Math.sin(x / R * 4.7 + t * .03 + ph * 2) * amp * .25;
    const g = c.createLinearGradient(0, base - hgt - amp, 0, base + amp); g.addColorStop(0, `rgba(${top},0)`); g.addColorStop(.55, `rgba(${top},${(.35 * w).toFixed(3)})`); g.addColorStop(1, `rgba(${rgb},${(.75 * w).toFixed(3)})`);
    c.fillStyle = g; c.beginPath(); c.moveTo(-R, yb(-R) - hgt * .6); for (let x = -R; x <= R; x += R * .1) c.lineTo(x, yb(x) - hgt * .6); for (let x = R; x >= -R; x -= R * .1) c.lineTo(x, yb(x) + R * .02); c.closePath(); c.fill();
    c.strokeStyle = g; c.lineCap = 'round';
    for (let x = -R; x <= R; x += R * .035) { const n = .5 + .5 * Math.sin(x / R * 7.3 + t * .04 + ph) * Math.sin(x / R * 2.9 - t * .02 + ph * 3), y = yb(x);
      c.globalAlpha = .35 + .65 * n; c.lineWidth = R * (.018 + .02 * n); c.beginPath(); c.moveTo(x, y); c.lineTo(x + R * .015, y - hgt * (.45 + .55 * n)); c.stroke(); }
    c.globalAlpha = 1; c.strokeStyle = `rgba(${rgb},${(.22 * w).toFixed(3)})`; c.lineWidth = R * .09; c.beginPath(); for (let x = -R; x <= R; x += R * .06) x === -R ? c.moveTo(x, yb(x)) : c.lineTo(x, yb(x)); c.stroke();
    c.strokeStyle = `rgba(230,255,245,${(.45 * w).toFixed(3)})`; c.lineWidth = R * .01; c.stroke(); };
  ribbon(2.1, -R * .55, R * .08, R * .36, '170,120,255', '255,120,210', .5);
  ribbon(0, -R * .3, R * .13, R * .42, '90,255,170', '120,140,255', 1);
  /* montagnes */
  c.fillStyle = '#081430'; c.beginPath(); c.moveTo(-R, HZN); c.lineTo(-R * .75, -R * .06); c.lineTo(-R * .5, R * .04); c.lineTo(-R * .2, -R * .1); c.lineTo(R * .15, R * .05); c.lineTo(R * .5, -R * .08); c.lineTo(R, HZN); c.fill();
  c.strokeStyle = 'rgba(120,255,200,0.55)'; c.lineWidth = Math.max(.6, R * .013); c.beginPath(); c.moveTo(-R * .75, -R * .06); c.lineTo(-R * .5, R * .04); c.lineTo(-R * .2, -R * .1); c.lineTo(R * .15, R * .05); c.lineTo(R * .5, -R * .08); c.stroke();
  /* banquise enneigée (bleu nuit), reflet vert */
  const fl = c.createLinearGradient(0, HZN, 0, R); fl.addColorStop(0, '#5a7ab8'); fl.addColorStop(.4, '#3a5a98'); fl.addColorStop(1, '#1a2c5a'); c.fillStyle = fl; c.fillRect(-R, HZN, R * 2, R);
  const rf = c.createRadialGradient(0, HZN + R * .05, 0, 0, HZN + R * .05, R * .9); rf.addColorStop(0, 'rgba(120,255,190,0.3)'); rf.addColorStop(1, 'rgba(120,255,190,0)'); c.fillStyle = rf; c.save(); c.translate(0, HZN + R * .05); c.scale(1, .25); c.beginPath(); c.arc(0, 0, R * .9, 0, TAU); c.restore(); c.fill();
    /* le trou de pêche */
  const hx = R * .45, hy = R * .6, hrx = R * .25, hry = R * .09;
  c.fillStyle = '#e4eeff'; c.beginPath(); c.ellipse(hx, hy - R * .01, hrx * 1.18, hry * 1.45, 0, 0, TAU); c.fill();
  const wg = c.createLinearGradient(0, hy - hry, 0, hy + hry); wg.addColorStop(0, '#04122e'); wg.addColorStop(1, '#0e3c6e'); c.fillStyle = wg; c.beginPath(); c.ellipse(hx, hy, hrx, hry, 0, 0, TAU); c.fill();
  c.strokeStyle = 'rgba(120,255,200,0.35)'; c.lineWidth = Math.max(.5, R * .01); c.beginPath(); c.ellipse(hx, hy + hry * .2, hrx * .7, hry * .4, 0, Math.PI * .1, Math.PI * .9); c.stroke();
  /* le bouchon (danse quand ça mord), et la ligne */
  const dip = st.bite ? Math.max(0, Math.sin(st.biteT * .35)) * R * .045 + (Math.floor(st.biteT / 20) % 2 ? R * .02 : 0) : 0, bob = Math.sin(t * .07) * R * .006;
  const fx = hx - R * .02 + (st.bite ? Math.sin(st.biteT * .5) * R * .02 : 0), fy = hy + bob + dip;
  if (st.bite || st.escape) for (let k = 0; k < 3; k++) { const q = ((st.biteT + st.escape * 40) / 25 + k / 3) % 1; c.strokeStyle = `rgba(200,240,255,${(.6 * (1 - q)).toFixed(3)})`; c.lineWidth = Math.max(.5, R * .01); c.beginPath(); c.ellipse(fx, hy, R * (.03 + q * .12), R * (.01 + q * .035), 0, 0, TAU); c.stroke(); }
  if (st.escape > 0 && st.escape < .7) { const q = st.escape / .7, F = R * 1.6; /* le poisson saute, nargue, et replonge */
    const ex = hx - R * .05 + q * R * .16, ey = hy - Math.sin(q * Math.PI) * R * .36; c.save(); c.translate(ex, ey); c.rotate(-1.1 + q * 2.4);
    const fg = c.createLinearGradient(0, -F * .04, 0, F * .04); fg.addColorStop(0, '#ffb04a'); fg.addColorStop(1, '#e8601e'); c.fillStyle = fg;
    c.beginPath(); c.ellipse(0, 0, F * .07, F * .038, 0, 0, TAU); c.fill(); c.beginPath(); c.moveTo(-F * .055, 0); c.lineTo(-F * .11, -F * .04); c.quadraticCurveTo(-F * .095, 0, -F * .11, F * .04); c.closePath(); c.fill();
    c.strokeStyle = '#060a1a'; c.lineWidth = Math.max(.5, F * .006); c.beginPath(); c.ellipse(0, 0, F * .07, F * .038, 0, 0, TAU); c.stroke();
    c.fillStyle = '#fff'; c.beginPath(); c.arc(F * .035, -F * .01, F * .014, 0, TAU); c.fill(); c.fillStyle = '#060a1a'; c.beginPath(); c.arc(F * .038, -F * .01, F * .007, 0, TAU); c.fill();
    c.fillStyle = '#ff6a8a'; c.beginPath(); c.ellipse(F * .07, F * .008, F * .012, F * .007, 0, 0, TAU); c.fill(); c.restore();
    for (let k = 0; k < 6; k++) { c.fillStyle = 'rgba(200,240,255,0.85)'; c.beginPath(); c.arc(hx + (k - 2.5) * R * .045, hy - Math.sin(Math.min(1, q * 1.6) * Math.PI) * R * (.06 + h1(k) * .08), R * .014, 0, TAU); c.fill(); } }
  const HZ2 = 0; const PX = -R * .36, PY = R * .62, PS = R * .0088;
  const hand = { x: PX + (12 + Math.sin(-1.15 + st.sleep * .45) * -24) * PS, y: PY + (-30 + 24 * Math.cos(-1.15 + st.sleep * .45)) * PS };
  const tip = { x: R * .36 + st.sleep * R * .04, y: -R * .3 + st.sleep * R * .34 + dip * 1.4 - st.startle * R * .08 };
  /* canne */ c.strokeStyle = '#8a5a2e'; c.lineCap = 'round'; c.lineWidth = Math.max(.8, R * .024); c.beginPath(); c.moveTo(hand.x - R * .06, hand.y + R * .05); c.quadraticCurveTo((hand.x + tip.x) / 2, (hand.y + tip.y) / 2 - R * .05, tip.x, tip.y); c.stroke();
  /* fil */ c.strokeStyle = 'rgba(230,240,255,0.7)'; c.lineWidth = Math.max(.4, R * .007); c.beginPath(); c.moveTo(tip.x, tip.y); c.quadraticCurveTo(tip.x + R * .05, (tip.y + fy) / 2 + (st.bite ? 0 : R * .05), fx, fy - R * .02); c.stroke();
  /* bouchon */ c.fillStyle = '#ffffff'; c.beginPath(); c.arc(fx, fy - R * .015, R * .028, Math.PI, TAU); c.fill(); c.fillStyle = '#e8303a'; c.beginPath(); c.arc(fx, fy - R * .015, R * .028, 0, Math.PI); c.fill();
  c.fillStyle = 'rgba(4,18,46,0.9)'; c.beginPath(); c.ellipse(fx, fy + R * .012, R * .04, R * .012, 0, 0, Math.PI); c.fill();
  seated(c, PX, PY, PS, t, st); frontFlipper(c, PX, PY, PS, st);
  /* Z z z */
  if (st.z) for (let k = 0; k < 3; k++) { const q = (((st.T - 320) / 110) + k / 3) % 1; c.save(); c.globalAlpha = Math.sin(q * Math.PI) * .9; c.fillStyle = '#e8f4ff'; c.font = `${(R * (.13 + q * .1)).toFixed(1)}px "Lilita One"`; c.textAlign = 'center';
    c.fillText('z', PX + R * .05 + q * R * .22 + Math.sin(q * 6) * R * .03, PY - R * .78 - q * R * .3); c.restore(); }
  if (st.startle > .3) { c.save(); c.globalAlpha = Math.min(1, (st.startle - .3) * 3); c.fillStyle = '#ffd23f'; c.font = `${(R * .22).toFixed(1)}px "Lilita One"`; c.textAlign = 'center'; c.strokeStyle = 'rgba(6,14,40,0.8)'; c.lineWidth = R * .03; c.strokeText('!', PX + R * .1, PY - R * .82); c.fillText('!', PX + R * .1, PY - R * .82); c.restore(); }
  if (st.wonder > 0) { c.save(); c.globalAlpha = Math.sin(st.wonder * Math.PI); c.fillStyle = '#ffffff'; c.font = `${(R * .18).toFixed(1)}px "Lilita One"`; c.textAlign = 'center'; c.strokeStyle = 'rgba(6,14,40,0.8)'; c.lineWidth = R * .03; c.strokeText('?', PX + R * .14, PY - R * .82); c.fillText('?', PX + R * .14, PY - R * .82); c.restore(); }
  c.restore(); } };
window.BANQ_SKINS = [PECHEUR];
})();
