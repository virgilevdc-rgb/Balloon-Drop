/* Ballons secrets Monde 5 : A « Boule à neige », D « Aurore polaire » */
(() => {
const TAU = Math.PI * 2, h1 = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
/* mini pingouin (même dessin que le pingouin du Village, simplifié pour la petite taille) */
function mp(c, x, y, s, t, o = {}) {
  const N = o.night, OUT = N ? '#060a1a' : '#0c1222', blink = (t % 170) < 6 ? .1 : 1, wave = o.wave || 0;
  c.save(); c.translate(x, y); c.scale(s, s);
  c.fillStyle = N ? 'rgba(0,0,20,0.35)' : 'rgba(40,60,120,0.22)'; c.beginPath(); c.ellipse(1, 1, 22, 4.5, 0, 0, TAU); c.fill();
  const ln = (w) => { c.strokeStyle = OUT; c.lineWidth = w; c.lineJoin = 'round'; c.stroke(); };
  if (o.bag) { c.save(); c.translate(-12, -40); c.rotate(.75 + Math.sin(t * .05) * .05); c.strokeStyle = '#7a4a26'; c.lineWidth = 3.4; c.lineCap = 'round'; c.beginPath(); c.moveTo(6, 6); c.lineTo(-26, -6); c.stroke();
    c.translate(-30, -2); const hg = c.createRadialGradient(-6, -2, 2, 0, 6, 18); hg.addColorStop(0, N ? '#c84a5a' : '#ff6a6a'); hg.addColorStop(1, N ? '#6a1424' : '#b8202e'); c.fillStyle = hg;
    c.beginPath(); c.moveTo(-14, 2); c.bezierCurveTo(-18, 23, 16, 25, 14, 4); c.quadraticCurveTo(6, -7, 0, -5); c.quadraticCurveTo(-8, -7, -14, 2); c.fill(); ln(1.8);
    c.fillStyle = N ? '#d8d0e8' : '#ffffff'; for (const [dx, dy] of [[-7, 8], [3, 13], [8, 4], [-2, 2], [-9, 15]]) { c.beginPath(); c.arc(dx, dy, 2.3, 0, TAU); c.fill(); } c.restore(); }
  for (const sd of [-1, 1]) { c.fillStyle = N ? '#c8701e' : '#ff9a1e'; c.beginPath(); c.ellipse(sd * 8 + 3, -2, 9, 4, sd * .1, 0, TAU); c.fill(); ln(1.6); }
  c.beginPath(); c.moveTo(0, -42); c.bezierCurveTo(20, -42, 22, -18, 19, -8); c.quadraticCurveTo(15, 2, 0, 2); c.quadraticCurveTo(-15, 2, -19, -8); c.bezierCurveTo(-22, -18, -20, -42, 0, -42); c.closePath();
  const bg = c.createLinearGradient(-18, -40, 18, 0); bg.addColorStop(0, N ? '#2a3458' : '#3e4c70'); bg.addColorStop(1, N ? '#0a0e1e' : '#161c30'); c.fillStyle = bg; c.fill(); ln(2.2);
  const vg = c.createRadialGradient(0, -22, 3, 3, -16, 20); vg.addColorStop(0, N ? '#d8e6ff' : '#ffffff'); vg.addColorStop(1, N ? '#7a90c0' : '#d4e0f2'); c.fillStyle = vg; c.beginPath(); c.ellipse(3, -17, 12, 16, 0, 0, TAU); c.fill();
  for (const sd of [-1, 1]) { c.save(); c.translate(sd * 17, -30); const up = sd > 0 ? wave : 0; c.rotate(sd * (.35 - up * 2.6) + (sd > 0 ? Math.sin(t * .5) * up * .35 : 0)); c.fillStyle = N ? '#1a2240' : '#26304a'; c.beginPath(); c.ellipse(0, 11, 5.5, 13, 0, 0, TAU); c.fill(); ln(1.8); c.restore(); }
  const HY = -60, lookY = o.up ? -3 : .5;
  const hg2 = c.createRadialGradient(-10, HY - 12, 3, 0, HY, 30); hg2.addColorStop(0, N ? '#36446e' : '#4a5a82'); hg2.addColorStop(1, N ? '#0a0e1e' : '#161c30'); c.fillStyle = hg2; c.beginPath(); c.ellipse(1, HY, 27, 25, 0, 0, TAU); c.fill(); ln(2.2);
  if (N) { c.save(); c.beginPath(); c.ellipse(1, HY, 27, 25, 0, 0, TAU); c.clip(); c.strokeStyle = 'rgba(120,255,200,0.55)'; c.lineWidth = 3; c.beginPath(); c.ellipse(1, HY + 3, 27, 25, 0, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); c.restore(); }
  c.fillStyle = N ? '#dfe8ff' : '#fbfdff'; c.beginPath(); c.moveTo(7, HY - 14); c.bezierCurveTo(14, HY - 22, 26, HY - 14, 24, HY - 2); c.bezierCurveTo(23, HY + 10, 14, HY + 18, 6, HY + 18); c.bezierCurveTo(-2, HY + 18, -12, HY + 10, -12, HY - 2); c.bezierCurveTo(-13, HY - 14, 0, HY - 22, 7, HY - 14); c.fill();
  c.fillStyle = N ? 'rgba(255,120,170,0.45)' : 'rgba(255,130,160,0.65)'; c.beginPath(); c.ellipse(-8, HY + 7, 4.5, 3, 0, 0, TAU); c.ellipse(22, HY + 7, 4, 3, 0, 0, TAU); c.fill();
  for (const [ex, sz] of [[0, .92], [14, 1]]) { const ey = HY - 3;
    c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(ex, ey, 6.5 * sz, 8 * sz * blink, 0, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.4; c.stroke();
    if (blink > .5) { c.fillStyle = '#141a2c'; c.beginPath(); c.ellipse(ex + 1.5, ey + lookY, 3.9 * sz, 4.7 * sz, 0, 0, TAU); c.fill(); c.fillStyle = N ? '#bfffe6' : '#ffffff'; c.beginPath(); c.arc(ex - .2, ey + lookY - 2, 1.8 * sz, 0, TAU); c.fill(); } }
  c.save(); c.translate(19, HY + 6); const open = o.open || 0;
  c.fillStyle = N ? '#b0580e' : '#e8700e'; c.beginPath(); c.moveTo(-4, 1); c.quadraticCurveTo(10, 3 + open * 5, 14, 2 + open * 6); c.quadraticCurveTo(6, 7 + open * 7, -3, 5 + open * 4); c.closePath(); c.fill(); ln(1.5);
  c.fillStyle = N ? '#d88a2a' : '#ffb02e'; c.beginPath(); c.moveTo(-5, -4); c.quadraticCurveTo(8, -6, 16, 1); c.quadraticCurveTo(8, 3, -4, 2); c.closePath(); c.fill(); ln(1.5); c.restore();
  c.restore(); }

/* ---------- A : la Boule à neige ---------- */
const swirlOf = (t) => { let s = 0; try { if (window.__SWIRL != null) return window.__SWIRL(t); } catch (e) {} const q = (t % 300) / 300; return q < .5 ? Math.pow(1 - q / .5, 1.6) : 0; };
const NEIGE = { id: 'boule_neige', theme: 'secret', name: 'La Boule à neige', secret: true, dust: '#dff2ff', paint: (c, r, t = 0) => {
  const R = r, BY = R * .6, sw = swirlOf(t);
  c.save(); c.beginPath(); c.arc(0, 0, R, 0, TAU); c.clip();
  /* ciel de l'aube polaire */
  const sky = c.createLinearGradient(0, -R, 0, R * .2); sky.addColorStop(0, '#24306e'); sky.addColorStop(.45, '#5a6cc0'); sky.addColorStop(.8, '#e8a8c4'); sky.addColorStop(1, '#ffd6c0'); c.fillStyle = sky; c.fillRect(-R, -R, R * 2, R * 1.3);
  for (let i = 0; i < 9; i++) { const sx = (h1(i) * 1.6 - .8) * R, sy = (-.9 + h1(i * 3) * .45) * R, a = .4 + .5 * Math.abs(Math.sin(t * .04 + i)); c.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`; c.beginPath(); c.arc(sx, sy, R * .018, 0, TAU); c.fill(); }
  /* montagnes au loin */
  c.fillStyle = '#b8b4e8'; c.beginPath(); c.moveTo(-R, R * .1); c.lineTo(-R * .62, -R * .2); c.lineTo(-R * .4, -R * .02); c.lineTo(-R * .1, -R * .3); c.lineTo(R * .28, R * .02); c.lineTo(R * .55, -R * .16); c.lineTo(R, R * .1); c.fill();
  c.fillStyle = '#f4f2ff'; c.beginPath(); c.moveTo(-R * .1, -R * .3); c.lineTo(-R * .2, -R * .17); c.lineTo(-R * .12, -R * .2); c.lineTo(-R * .03, -R * .16); c.lineTo(R * .02, -R * .22); c.closePath(); c.fill();
  c.beginPath(); c.moveTo(-R * .62, -R * .2); c.lineTo(-R * .7, -R * .1); c.lineTo(-R * .56, -R * .13); c.closePath(); c.fill();
  /* colline de neige */
  const sn = c.createLinearGradient(0, 0, 0, BY); sn.addColorStop(0, '#ffffff'); sn.addColorStop(1, '#c4d4f2'); c.fillStyle = sn;
  c.beginPath(); c.moveTo(-R, R * .12); c.quadraticCurveTo(-R * .4, -R * .02, R * .1, R * .1); c.quadraticCurveTo(R * .6, R * .2, R, R * .08); c.lineTo(R, BY + R * .1); c.lineTo(-R, BY + R * .1); c.fill();
  /* igloo et sa porte chaude */
  const ix = -R * .44, iy = R * .36, ir = R * .34;
  const gl = c.createRadialGradient(ix + ir * .25, iy, 0, ix + ir * .25, iy, ir * 1.6); gl.addColorStop(0, 'rgba(255,190,90,0.55)'); gl.addColorStop(1, 'rgba(255,190,90,0)'); c.fillStyle = gl; c.beginPath(); c.arc(ix + ir * .25, iy, ir * 1.6, 0, TAU); c.fill();
  const ig = c.createLinearGradient(ix - ir, iy - ir, ix + ir, iy); ig.addColorStop(0, '#ffffff'); ig.addColorStop(1, '#bcd0ee'); c.fillStyle = ig; c.beginPath(); c.arc(ix, iy, ir, Math.PI, TAU); c.closePath(); c.fill();
  c.strokeStyle = 'rgba(110,140,200,0.55)'; c.lineWidth = Math.max(.6, R * .012);
  for (let k = 1; k < 3; k++) { const yy = iy - ir * k / 3, hw = Math.sqrt(ir * ir - (iy - yy) ** 2); c.beginPath(); c.moveTo(ix - hw, yy); c.lineTo(ix + hw, yy); c.stroke(); }
  for (const [a, b2] of [[-.6, 0], [.1, 0], [-.3, 1], [.4, 1], [-.85, 2], [-.05, 2]]) { const yy = iy - ir * b2 / 3; c.beginPath(); c.moveTo(ix + a * ir, yy); c.lineTo(ix + a * ir, yy - ir / 3 + R * .01); c.stroke(); }
  const dg = c.createRadialGradient(ix + ir * .3, iy - ir * .1, 0, ix + ir * .3, iy - ir * .1, ir * .5); dg.addColorStop(0, '#ffe08a'); dg.addColorStop(.6, '#ff9a3a'); dg.addColorStop(1, '#c8501a');
  c.fillStyle = dg; c.beginPath(); c.moveTo(ix + ir * .08, iy); c.lineTo(ix + ir * .08, iy - ir * .3); c.arc(ix + ir * .3, iy - ir * .3, ir * .22, Math.PI, TAU); c.lineTo(ix + ir * .52, iy); c.fill();
  /* pics de glace */
  for (const [px, ph] of [[R * .66, .3], [R * .76, .2], [R * .58, .17]]) { const g = c.createLinearGradient(px - R * .05, 0, px + R * .05, 0); g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#8ac8f0'); c.fillStyle = g; c.beginPath(); c.moveTo(px - R * .05, R * .3); c.lineTo(px, R * (.3 - ph)); c.lineTo(px + R * .05, R * .3); c.fill(); }
  /* le pingouin, baluchon à l'épaule ; il fait coucou de temps en temps */
  const wq = (t % 260) / 260, wave = wq > .7 && wq < .92 ? Math.sin((wq - .7) / .22 * Math.PI) : 0;
  c.fillStyle = 'rgba(255,170,80,0.28)'; c.beginPath(); c.ellipse(ix + ir * .45, iy + R * .06, ir * .6, R * .05, 0, 0, TAU); c.fill();
  mp(c, R * .3, R * .53, R * .0054, t, { bag: true, wave, open: sw > .5 ? .8 : 0 });
  /* socle de la boule (laque rouge et or) */
  const bs = c.createLinearGradient(0, BY, 0, R); bs.addColorStop(0, '#d8344a'); bs.addColorStop(.5, '#a81c30'); bs.addColorStop(1, '#6a0e1c'); c.fillStyle = bs; c.fillRect(-R, BY, R * 2, R);
  c.fillStyle = 'rgba(255,255,255,0.18)'; c.fillRect(-R, BY + R * .06, R * 2, R * .03);
  c.fillStyle = '#f2c14a'; c.beginPath(); c.ellipse(0, BY, R, R * .07, 0, 0, TAU); c.fill();
  c.fillStyle = '#ffe9a8'; c.beginPath(); c.ellipse(-R * .2, BY - R * .02, R * .35, R * .015, 0, 0, TAU); c.fill();
  c.strokeStyle = '#f2c14a'; c.lineWidth = Math.max(.7, R * .025); c.beginPath(); c.moveTo(-R, R * .9); c.lineTo(R, R * .9); c.stroke();
  /* plaque : flocon doré */
  c.save(); c.translate(0, R * .77); c.strokeStyle = '#ffd86a'; c.lineWidth = Math.max(.7, R * .028); c.lineCap = 'round';
  for (let k = 0; k < 3; k++) { c.rotate(Math.PI / 3); c.beginPath(); c.moveTo(-R * .08, 0); c.lineTo(R * .08, 0); c.stroke(); } c.restore();
  /* la neige : tombe doucement, tourbillonne quand on secoue */
  c.save(); c.beginPath(); c.rect(-R, -R, R * 2, BY + R); c.clip();
  for (let i = 0; i < 30; i++) { const near = i % 3 === 0, sp = (near ? .003 : .0016) + h1(i * 7) * .0014, fy = ((h1(i * 3) + t * sp) % 1), fx = h1(i) * 2 - 1;
    const x0 = fx * R * .95 + Math.sin(t * .03 + i) * R * .05, y0 = -R + fy * (BY + R);
    const a = h1(i * 5) * TAU + t * (.035 + h1(i) * .03), rad = R * (.2 + h1(i * 11) * .6), x1 = Math.cos(a) * rad, y1 = Math.sin(a) * rad * .75 - R * .1;
    const x = x0 + (x1 - x0) * sw, y = y0 + (y1 - y0) * sw, sz = R * (near ? .034 + h1(i * 13) * .012 : .014 + h1(i * 13) * .01);
    c.fillStyle = near ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)'; c.beginPath(); c.arc(x, y, sz, 0, TAU); c.fill();
    if (near) { c.fillStyle = 'rgba(255,255,255,0.3)'; c.beginPath(); c.arc(x, y, sz * 1.6, 0, TAU); c.fill(); } }
  c.restore();
  /* verre : liseré intérieur et second reflet (en bas à droite) */
  c.strokeStyle = 'rgba(255,255,255,0.35)'; c.lineWidth = R * .035; c.beginPath(); c.arc(0, 0, R * .96, Math.PI * .9, Math.PI * 2.15); c.stroke();
  c.strokeStyle = 'rgba(255,255,255,0.4)'; c.lineWidth = R * .03; c.lineCap = 'round'; c.beginPath(); c.arc(0, 0, R * .84, .12, .55); c.stroke();
  c.restore(); } };

/* ---------- D : l'Aurore polaire ---------- */
const AURORE = { id: 'aurore', theme: 'secret', name: "L'Aurore polaire", secret: true, dust: '#7affc8', paint: (c, r, t = 0) => {
  const R = r, HZN = R * .3;
  c.save(); c.beginPath(); c.arc(0, 0, R, 0, TAU); c.clip();
  const sky = c.createLinearGradient(0, -R, 0, HZN); sky.addColorStop(0, '#040a20'); sky.addColorStop(.6, '#0a1c48'); sky.addColorStop(1, '#14366a'); c.fillStyle = sky; c.fillRect(-R, -R, R * 2, R * 2);
  for (let i = 0; i < 26; i++) { const sx = (h1(i * 2) * 2 - 1) * R, sy = (-1 + h1(i * 5) * 1.25) * R, a = .25 + .7 * Math.abs(Math.sin(t * .03 + i * 1.7)); c.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`; c.beginPath(); c.arc(sx, sy, R * (.01 + h1(i) * .014), 0, TAU); c.fill(); }
  /* étoile filante, de temps en temps */
  const sq = (t % 420) / 420; if (sq < .1) { const k = sq / .1, x = -R * .2 + k * R * .9, y = -R * .78 + k * R * .35; const g = c.createLinearGradient(x, y, x - R * .3, y - R * .12); g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.strokeStyle = g; c.lineWidth = R * .022; c.lineCap = 'round'; c.globalAlpha = Math.sin(k * Math.PI); c.beginPath(); c.moveTo(x, y); c.lineTo(x - R * .3, y - R * .12); c.stroke(); c.globalAlpha = 1; }
  /* lune (en haut à gauche, comme la lumière du jeu) */
  c.fillStyle = '#fff6d8'; c.beginPath(); c.arc(-R * .5, -R * .55, R * .1, 0, TAU); c.fill(); c.fillStyle = '#0a1a44'; c.beginPath(); c.arc(-R * .45, -R * .58, R * .085, 0, TAU); c.fill();
  /* l'aurore : rideaux qui ondulent (bord du bas lumineux, haut qui s'efface) */
  const ribbon = (ph, base, amp, hgt, rgb, top, w) => {
    const yb = (x) => base + Math.sin(x / R * 2.1 + t * .018 + ph) * amp + Math.sin(x / R * 4.7 + t * .03 + ph * 2) * amp * .25;
    const g = c.createLinearGradient(0, base - hgt - amp, 0, base + amp); g.addColorStop(0, `rgba(${top},0)`); g.addColorStop(.55, `rgba(${top},${(.35 * w).toFixed(3)})`); g.addColorStop(1, `rgba(${rgb},${(.75 * w).toFixed(3)})`);
    /* voile doux */ c.fillStyle = g; c.beginPath(); c.moveTo(-R, yb(-R) - hgt * .6); for (let x = -R; x <= R; x += R * .1) c.lineTo(x, yb(x) - hgt * .6); for (let x = R; x >= -R; x -= R * .1) c.lineTo(x, yb(x) + R * .02); c.closePath(); c.fill();
    /* rayons : longueurs et intensités qui varient lentement */
    c.strokeStyle = g; c.lineCap = 'round';
    for (let x = -R; x <= R; x += R * .035) { const n = .5 + .5 * Math.sin(x / R * 7.3 + t * .04 + ph) * Math.sin(x / R * 2.9 - t * .02 + ph * 3), y = yb(x);
      c.globalAlpha = .35 + .65 * n; c.lineWidth = R * (.018 + .02 * n); c.beginPath(); c.moveTo(x, y); c.lineTo(x + R * .015, y - hgt * (.45 + .55 * n)); c.stroke(); }
    c.globalAlpha = 1;
    /* bord du bas : lumineux */ c.strokeStyle = `rgba(${rgb},${(.22 * w).toFixed(3)})`; c.lineWidth = R * .09; c.beginPath(); for (let x = -R; x <= R; x += R * .06) x === -R ? c.moveTo(x, yb(x)) : c.lineTo(x, yb(x)); c.stroke();
    c.strokeStyle = `rgba(230,255,245,${(.45 * w).toFixed(3)})`; c.lineWidth = R * .01; c.stroke(); };
  ribbon(2.1, -R * .42, R * .1, R * .42, '170,120,255', '255,120,210', .5);
  ribbon(0, -R * .14, R * .16, R * .5, '90,255,170', '120,140,255', 1);
  /* montagnes noires, liseré vert */
  c.fillStyle = '#081430'; c.beginPath(); c.moveTo(-R, HZN); c.lineTo(-R * .7, R * .1); c.lineTo(-R * .45, R * .2); c.lineTo(-R * .15, R * .04); c.lineTo(R * .2, R * .22); c.lineTo(R * .5, R * .08); c.lineTo(R, HZN); c.fill();
  c.strokeStyle = 'rgba(120,255,200,0.6)'; c.lineWidth = Math.max(.6, R * .014); c.beginPath(); c.moveTo(-R * .7, R * .1); c.lineTo(-R * .45, R * .2); c.lineTo(-R * .15, R * .04); c.lineTo(R * .2, R * .22); c.lineTo(R * .5, R * .08); c.stroke();
  /* banquise miroir : l'aurore s'y reflète */
  const fl = c.createLinearGradient(0, HZN, 0, R); fl.addColorStop(0, '#1c4a80'); fl.addColorStop(1, '#081838'); c.fillStyle = fl; c.fillRect(-R, HZN, R * 2, R);
  const rf = c.createRadialGradient(0, HZN + R * .08, 0, 0, HZN + R * .08, R * .9); rf.addColorStop(0, 'rgba(90,255,170,0.32)'); rf.addColorStop(1, 'rgba(90,255,170,0)'); c.fillStyle = rf; c.save(); c.translate(0, HZN + R * .08); c.scale(1, .22); c.beginPath(); c.arc(0, 0, R * .9, 0, TAU); c.restore(); c.fill();
  for (const [x, y, w2, col] of [[-.6, .38, .5, '120,255,190'], [-.1, .44, .6, '120,255,190'], [.2, .4, .35, '190,140,255']]) { c.strokeStyle = `rgba(${col},0.35)`; c.lineWidth = R * .014; c.beginPath(); c.moveTo(x * R, y * R); c.lineTo((x + w2) * R, y * R); c.stroke(); }
  c.strokeStyle = 'rgba(180,230,255,0.22)'; c.lineWidth = Math.max(.5, R * .012); for (const [x, y, w] of [[-.7, .5, .3], [.3, .62, .4], [-.3, .78, .25], [.55, .86, .2]]) { c.beginPath(); c.moveTo(x * R, y * R); c.lineTo((x + w) * R, y * R); c.stroke(); }
  /* bloc de glace + pingouin qui regarde l'aurore */
  const bx = R * .05, by = R * .62;
  const ig = c.createLinearGradient(bx - R * .3, by - R * .15, bx + R * .3, by); ig.addColorStop(0, '#bfeaff'); ig.addColorStop(1, '#3a86c8'); c.fillStyle = ig;
  c.beginPath(); c.moveTo(bx - R * .3, by); c.lineTo(bx - R * .24, by - R * .13); c.lineTo(bx + R * .26, by - R * .14); c.lineTo(bx + R * .32, by); c.closePath(); c.fill();
  c.fillStyle = '#eafaff'; c.beginPath(); c.moveTo(bx - R * .24, by - R * .13); c.lineTo(bx + R * .26, by - R * .14); c.lineTo(bx + R * .2, by - R * .1); c.lineTo(bx - R * .2, by - R * .095); c.closePath(); c.fill();
  c.fillStyle = 'rgba(120,255,200,0.35)'; c.fillRect(bx - R * .2, by - R * .145, R * .4, R * .012);
  mp(c, bx, by - R * .11, R * .0056, t, { night: true, up: true, bag: true });
  c.restore(); } };

window.BANQ_SKINS = [NEIGE, AURORE];
})();
