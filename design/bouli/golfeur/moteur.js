const TAU = Math.PI * 2;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function radial(c, r, light, dark) {
  const g = c.createRadialGradient(-r * .32, -r * .36, r * .05, 0, 0, r);
  g.addColorStop(0, light); g.addColorStop(1, dark);
  c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
}
function clipCircle(c, r) { c.beginPath(); c.arc(0, 0, r, 0, TAU); c.clip(); }
function pent(c, x, y, s, rot) {
  c.beginPath();
  for (let i = 0; i < 5; i++) { const a = rot + i * TAU / 5; const px = x + Math.cos(a) * s, py = y + Math.sin(a) * s; i ? c.lineTo(px, py) : c.moveTo(px, py); }
  c.closePath(); c.fill();
}
function sparkle(c, x, y, s, alpha) {
  c.save(); c.globalAlpha *= alpha; c.fillStyle = '#ffffff'; c.beginPath();
  c.moveTo(x, y - s); c.quadraticCurveTo(x, y, x + s, y); c.quadraticCurveTo(x, y, x, y + s);
  c.quadraticCurveTo(x, y, x - s, y); c.quadraticCurveTo(x, y, x, y - s); c.fill(); c.restore();
}
let LIGHT_X = -1;
function shade(c, r, k = .3) {
  const L = LIGHT_X;
  const g = c.createRadialGradient(r * .3 * L, -r * .35, r * .1, 0, 0, r);
  g.addColorStop(0, 'rgba(255,255,255,0.14)'); g.addColorStop(.55, 'rgba(255,255,255,0)'); g.addColorStop(.86, `rgba(30,0,20,${(k * .32).toFixed(3)})`); g.addColorStop(1, `rgba(20,0,15,${(k * .8).toFixed(3)})`);
  c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  /* lumière qui traverse le latex, en bas */
  const t = c.createRadialGradient(-r * .12 * L, r * .62, r * .02, -r * .1 * L, r * .55, r * .62);
  t.addColorStop(0, 'rgba(255,240,245,0.32)'); t.addColorStop(1, 'rgba(255,240,245,0)');
  c.fillStyle = t; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  /* lumière réfléchie sur le bord opposé au soleil */
  c.save(); c.lineCap = 'round'; c.lineWidth = r * .12; c.strokeStyle = 'rgba(255,225,235,0.1)';
  c.beginPath(); if (L < 0) c.arc(0, 0, r * .9, -.1, 1.25); else c.arc(0, 0, r * .9, Math.PI - 1.25, Math.PI + .1); c.stroke();
  c.lineWidth = r * .035; c.strokeStyle = 'rgba(255,235,240,0.14)'; c.beginPath(); if (L < 0) c.arc(0, 0, r * .965, .05, 1.1); else c.arc(0, 0, r * .965, Math.PI - 1.1, Math.PI - .05); c.stroke();
  c.restore();
}
function gloss(c, r, a = .55) {
  const L = LIGHT_X;
  c.save(); c.globalAlpha *= Math.min(1, a * 1.5);
  /* reflet de fenêtre, bords doux */
  c.save(); c.translate(r * .36 * L, -r * .4); c.rotate(.6 * L); c.scale(1, 1.6);
  const g = c.createRadialGradient(0, 0, 0, 0, 0, r * .2);
  g.addColorStop(0, 'rgba(255,255,255,0.85)'); g.addColorStop(.55, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.beginPath(); c.arc(0, 0, r * .2, 0, TAU); c.fill(); c.restore();
  c.fillStyle = 'rgba(255,255,255,0.95)';
  c.beginPath(); c.ellipse(r * .27 * L, -r * .3, r * .05, r * .075, .6 * L, 0, TAU); c.fill();
  c.globalAlpha *= .45; c.beginPath(); c.ellipse(-r * .42 * L, r * .5, r * .06, r * .13, -.6 * L, 0, TAU); c.fill();
  c.restore();
}
const h1 = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
function blob(c, x, y, s, seed, n = 9) {
  const pts = [];
  for (let k = 0; k < n; k++) { const a = k * TAU / n, rr = s * (.7 + h1(seed + k) * .6); pts.push([x + Math.cos(a) * rr, y + Math.sin(a) * rr]); }
  c.beginPath();
  for (let k = 0; k <= n; k++) {
    const p = pts[k % n], q = pts[(k + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    if (k) c.quadraticCurveTo(p[0], p[1], mx, my); else c.moveTo(mx, my);
  }
  c.closePath(); c.fill();
}
function eyes(c, r, y, dx, s) {
  for (const sx of [-1, 1]) {
    c.fillStyle = '#1b1b2a'; c.beginPath(); c.ellipse(sx * dx * r, y * r, s * r * .8, s * r, 0, 0, TAU); c.fill();
    c.fillStyle = '#ffffff'; c.beginPath(); c.arc(sx * dx * r + s * r * .28, y * r - s * r * .35, s * r * .3, 0, TAU); c.fill();
  }
}
function cheeks(c, r, y, dx, col = 'rgba(255,110,130,0.4)') {
  c.fillStyle = col;
  for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * dx * r, y * r, r * .11, r * .07, 0, 0, TAU); c.fill(); }
}
function flagClip(c, r, fn) { c.save(); clipCircle(c, r); fn(); c.restore(); }
function diskHalf(c, r, t, a0, a1) {
  const g = c.createLinearGradient(-r * 1.5, 0, r * 1.5, 0), p = (Math.sin(t * .05) + 1) / 2;
  g.addColorStop(0, 'rgba(255,90,0,0.25)'); g.addColorStop(.3 + p * .3, '#ffd88a'); g.addColorStop(1, 'rgba(255,90,0,0.55)');
  c.strokeStyle = g; c.lineWidth = Math.max(1.5, r * .16);
  c.beginPath(); c.ellipse(0, 0, r * 1.45, r * .32, 0, a0, a1); c.stroke();
}
const MAPLE = [[0, -1], [.16, -.72], [.32, -.8], [.26, -.36], [.52, -.58], [.58, -.44], [.86, -.5], [.74, -.22], [.86, -.14], [.46, .2], [.52, .36], [.1, .3], [.06, .32], [.06, .72]];

const SKINS = [
  { id: 'classic', name: 'Classique', price: 0, dust: '#e8336d', paint: (c, r) => radial(c, r, '#ff6b98', '#c41d55') },
  { id: 'citron', name: 'Citron', price: 40, dust: '#f7c531', paint: (c, r) => radial(c, r, '#ffe680', '#eaa400') },
  { id: 'menthe', name: 'Menthe', price: 60, dust: '#2fc495', paint: (c, r) => radial(c, r, '#8ef5cf', '#139f73') },
  { id: 'foot', name: 'Ballon de foot', price: 150, string: false, dust: '#ffffff', paint: (c, r) => {
      radial(c, r, '#ffffff', '#cfd5de');
      c.save(); clipCircle(c, r);
      c.fillStyle = '#1f2430'; c.strokeStyle = '#3a4152'; c.lineWidth = Math.max(1, r * .035);
      pent(c, 0, 0, r * .3, -Math.PI / 2);
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + i * TAU / 5;
        c.beginPath(); c.moveTo(Math.cos(a) * r * .3, Math.sin(a) * r * .3); c.lineTo(Math.cos(a) * r * .64, Math.sin(a) * r * .64); c.stroke();
        const b = a + TAU / 10;
        pent(c, Math.cos(b) * r * .98, Math.sin(b) * r * .98, r * .32, b + Math.PI);
      }
      c.restore();
    } },
  { id: 'pasteque', name: 'Pastèque', price: 200, dust: '#3fae4f', paint: (c, r) => {
      radial(c, r, '#6ed47c', '#1f7a32');
      c.save(); clipCircle(c, r);
      c.strokeStyle = 'rgba(14,74,28,0.8)'; c.lineWidth = r * .13; c.lineCap = 'round';
      for (let i = -3; i <= 3; i++) {
        c.beginPath();
        for (let s = 0; s <= 20; s++) {
          const y = -r + s * r / 10, k = y / r;
          const x = i * r * .3 * Math.sqrt(Math.max(0, 1 - k * k)) + Math.sin(k * 7 + i) * r * .04;
          s ? c.lineTo(x, y) : c.moveTo(x, y);
        }
        c.stroke();
      }
      c.restore();
    } },
  { id: 'bulle', name: 'Bulle de savon', price: 250, flat: true, gloss: .85, dust: '#bfe6ff', paint: (c, r, t) => {
      const g = c.createRadialGradient(0, 0, r * .55, 0, 0, r);
      g.addColorStop(0, 'rgba(190,230,255,0.10)'); g.addColorStop(1, 'rgba(190,230,255,0.42)');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      const h = (t * .9) % 360, lg = c.createLinearGradient(-r, -r, r, r);
      lg.addColorStop(0, `hsla(${h},95%,68%,0.95)`); lg.addColorStop(.5, `hsla(${h + 120},95%,68%,0.95)`); lg.addColorStop(1, `hsla(${h + 240},95%,68%,0.95)`);
      c.strokeStyle = lg; c.lineWidth = Math.max(1.6, r * .06); c.beginPath(); c.arc(0, 0, r * .97, 0, TAU); c.stroke();
      c.strokeStyle = 'rgba(255,255,255,0.5)'; c.lineWidth = Math.max(1, r * .03);
      c.beginPath(); c.arc(0, 0, r * .78, .3, 1.3); c.stroke();
    } },
  { id: 'basket', name: 'Basket', price: 300, string: false, dust: '#f07c2e', paint: (c, r) => {
      radial(c, r, '#ffa25a', '#c4521a');
      c.save(); clipCircle(c, r);
      c.strokeStyle = '#2b1408'; c.lineWidth = Math.max(1, r * .05);
      c.beginPath(); c.moveTo(0, -r); c.lineTo(0, r); c.moveTo(-r, 0); c.lineTo(r, 0); c.stroke();
      c.beginPath(); c.arc(-r * 1.38, 0, r * 1.02, -1.15, 1.15); c.stroke();
      c.beginPath(); c.arc(r * 1.38, 0, r * 1.02, Math.PI - 1.15, Math.PI + 1.15); c.stroke();
      c.restore();
    } },
  { id: 'smiley', name: 'Smiley', price: 350, dust: '#ffd23f', paint: (c, r) => {
      radial(c, r, '#ffe36e', '#f2a900');
      c.fillStyle = '#3b2a00';
      c.beginPath(); c.ellipse(-r * .3, -r * .14, r * .085, r * .16, 0, 0, TAU); c.fill();
      c.beginPath(); c.ellipse(r * .3, -r * .14, r * .085, r * .16, 0, 0, TAU); c.fill();
      c.strokeStyle = '#3b2a00'; c.lineWidth = Math.max(1.2, r * .075); c.lineCap = 'round';
      c.beginPath(); c.arc(0, r * .02, r * .48, .2 * Math.PI, .8 * Math.PI); c.stroke();
      c.fillStyle = 'rgba(255,110,110,0.35)';
      c.beginPath(); c.arc(-r * .52, r * .2, r * .11, 0, TAU); c.arc(r * .52, r * .2, r * .11, 0, TAU); c.fill();
    } },
  { id: 'lune', name: 'Lune', price: 450, string: false, dust: '#c9cdd6', paint: (c, r) => {
      radial(c, r, '#eef0f4', '#9aa1b0');
      c.save(); clipCircle(c, r);
      for (const [x, y, s] of [[-.32, -.22, .19], [.36, .12, .23], [-.1, .48, .14], [.25, -.5, .1], [-.55, .26, .1], [.05, .02, .07]]) {
        c.fillStyle = 'rgba(110,118,135,0.45)'; c.beginPath(); c.arc(x * r, y * r, s * r, 0, TAU); c.fill();
        c.fillStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.arc(x * r + s * r * .25, y * r + s * r * .25, s * r * .75, 0, TAU); c.fill();
        c.fillStyle = 'rgba(120,128,145,0.5)'; c.beginPath(); c.arc(x * r - s * r * .1, y * r - s * r * .1, s * r * .72, 0, TAU); c.fill();
      }
      c.restore();
    } },
  { id: 'planete', name: 'Planète', price: 600, string: false, wide: true, dust: '#ff9a4d', paint: (c, r) => {
      c.save(); c.rotate(-.35); c.strokeStyle = '#f3cf92'; c.lineWidth = Math.max(1.5, r * .12);
      c.beginPath(); c.ellipse(0, 0, r * 1.55, r * .4, 0, Math.PI, TAU); c.stroke(); c.restore();
      radial(c, r, '#ffbf7a', '#d65a24');
      c.save(); clipCircle(c, r); c.rotate(-.35); c.fillStyle = 'rgba(120,40,10,0.22)';
      c.fillRect(-r, -r * .5, r * 2, r * .14); c.fillRect(-r, r * .05, r * 2, r * .2); c.fillRect(-r, r * .5, r * 2, r * .09);
      c.restore();
    }, after: (c, r) => {
      c.rotate(-.35); c.strokeStyle = '#f7dca8'; c.lineWidth = Math.max(1.5, r * .12);
      c.beginPath(); c.ellipse(0, 0, r * 1.55, r * .4, 0, 0, Math.PI); c.stroke();
    } },
  { id: 'disco', name: 'Boule disco', price: 800, dust: '#dfe3ec', paint: (c, r, t) => {
      radial(c, r, '#e3e7ef', '#5d6578');
      c.save(); clipCircle(c, r);
      const s = Math.max(3, r * .2), n = Math.ceil(r / s);
      for (let j = -n; j <= n; j++) for (let i = -n; i <= n; i++) {
        const v = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1;
        const lit = ((v * 7 + t * .015) % 1) > .9;
        c.fillStyle = lit ? 'rgba(255,255,255,0.95)' : `rgba(${150 + v * 90 | 0},${155 + v * 90 | 0},${170 + v * 80 | 0},0.55)`;
        c.fillRect(i * s + .6, j * s + .6, s - 1.2, s - 1.2);
      }
      c.restore();
      sparkle(c, r * .38, -r * .34, r * .3 * (.6 + .4 * Math.sin(t * .1)), .9);
    } },
  { id: 'arcenciel', name: 'Arc-en-ciel', price: 1000, dust: '#ffd60a', paint: (c, r) => {
      c.save(); clipCircle(c, r);
      const cols = ['#ff4d6d', '#ff9f1c', '#ffd60a', '#4cd964', '#3a86ff', '#8338ec'];
      cols.forEach((col, i) => { c.fillStyle = col; c.fillRect(-r, -r + i * r / 3, r * 2, r / 3 + 1); });
      c.restore();
    } },
  { id: 'comete', name: 'Comète', unlock: { type: 'streak', n: 3 }, lockText: '3 défis du jour de suite', dust: '#7fa6ff', paint: (c, r, t) => {
      radial(c, r, '#6f95ff', '#13226b');
      c.save(); clipCircle(c, r); c.fillStyle = '#ffffff';
      for (const [x, y, s] of [[-.4, -.1, .05], [.3, -.45, .04], [.45, .25, .06], [-.15, .45, .035], [.05, -.1, .03], [-.5, .4, .03]]) { c.globalAlpha = .6 + .4 * Math.sin(t * .08 + x * 9); c.beginPath(); c.arc(x * r, y * r, Math.max(.7, s * r), 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'perle', name: 'Perle', unlock: { type: 'world', w: 4 }, lockText: "Termine l'Océan", gloss: .85, dust: '#cfe9ff', paint: (c, r, t = 0) => {
      const g = c.createRadialGradient(-r * .35, -r * .4, r * .05, 0, 0, r); g.addColorStop(0, '#ffffff'); g.addColorStop(.35, '#f3eaff'); g.addColorStop(.7, '#cfe3f7'); g.addColorStop(1, '#9fb5d8');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      c.save(); clipCircle(c, r); c.globalAlpha = .35;
      for (const [col, a] of [['#ffb3d9', 0], ['#b3fff0', 2.1], ['#ffe9a8', 4.2]]) { const an = a + t * .02; c.fillStyle = col; c.beginPath(); c.ellipse(Math.cos(an) * r * .35, Math.sin(an) * r * .35, r * .7, r * .3, an, 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'flocon', name: 'Flocon', unlock: { type: 'world', w: 5 }, lockText: 'Termine la Banquise', dust: '#bfe6fa', paint: (c, r, t = 0) => {
      radial(c, r, '#d8f1ff', '#4a8fc4');
      c.save(); c.rotate(t * .004); c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1.4, r * .07); c.lineCap = 'round';
      for (let i = 0; i < 6; i++) { c.save(); c.rotate(i * Math.PI / 3); c.beginPath(); c.moveTo(0, 0); c.lineTo(0, -r * .62); c.moveTo(0, -r * .38); c.lineTo(-r * .14, -r * .5); c.moveTo(0, -r * .38); c.lineTo(r * .14, -r * .5); c.stroke(); c.restore(); }
      c.restore();
    } },
  { id: 'feuille', name: 'Feuille', unlock: { type: 'world', w: 6 }, lockText: 'Termine la Jungle', dust: '#5fae3c', paint: (c, r) => {
      radial(c, r, '#9be36a', '#1f7a3a');
      c.save(); c.fillStyle = '#c8f59a'; c.strokeStyle = '#1f7a3a'; c.lineWidth = Math.max(1, r * .04);
      c.beginPath(); c.moveTo(0, r * .62); c.bezierCurveTo(-r * .7, r * .2, -r * .5, -r * .55, 0, -r * .62); c.bezierCurveTo(r * .5, -r * .55, r * .7, r * .2, 0, r * .62); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(0, r * .62); c.lineTo(0, -r * .5); for (let k = -2; k <= 2; k++) { c.moveTo(0, k * r * .18); c.lineTo(-r * .3, k * r * .18 - r * .14); c.moveTo(0, k * r * .18); c.lineTo(r * .3, k * r * .18 - r * .14); } c.stroke();
      c.restore();
    } },
  { id: 'miroir', name: 'Miroir', unlock: { type: 'world', w: 7 }, lockText: 'Termine le Miroir', gloss: .9, dust: '#d9c6ff', paint: (c, r, t = 0) => {
      const g = c.createLinearGradient(-r, -r, r, r); g.addColorStop(0, '#ffffff'); g.addColorStop(.3, '#c9ccec'); g.addColorStop(.55, '#6f72a8'); g.addColorStop(.75, '#e8d6ff'); g.addColorStop(1, '#4a3a8a');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      c.save(); clipCircle(c, r); c.fillStyle = 'rgba(255,122,200,0.35)'; c.fillRect(-r, r * .2, r * 2, r); c.fillStyle = 'rgba(255,255,255,0.5)'; const k = ((t * .01) % 2) - 1; c.beginPath(); c.moveTo(k * r * 2 - r * .3, -r); c.lineTo(k * r * 2 + r * .1, -r); c.lineTo(k * r * 2 - r * .5, r); c.lineTo(k * r * 2 - r * .9, r); c.closePath(); c.fill(); c.restore();
    } },
  { id: 'galaxie', name: 'Galaxie', unlock: { type: 'world', w: 8 }, lockText: "Termine l'Espace", dust: '#b28cff', paint: (c, r, t = 0) => {
      radial(c, r, '#3a2a8a', '#0a0624');
      c.save(); clipCircle(c, r); c.rotate(t * .003);
      for (const [col, a] of [['rgba(255,90,200,0.45)', 0], ['rgba(90,200,255,0.4)', 2.2], ['rgba(180,120,255,0.45)', 4.2]]) { const g = c.createRadialGradient(Math.cos(a) * r * .3, Math.sin(a) * r * .3, 1, Math.cos(a) * r * .3, Math.sin(a) * r * .3, r * .7); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(-r, -r, r * 2, r * 2); }
      c.fillStyle = '#ffffff'; for (let i = 0; i < 14; i++) { const a = i * 2.4, d = r * ((i * 37) % 10) / 11; c.globalAlpha = .5 + .5 * Math.sin(t * .1 + i); c.beginPath(); c.arc(Math.cos(a) * d, Math.sin(a) * d, Math.max(.8, r * .025), 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'sucredorge', name: "Sucre d'orge", unlock: { type: 'world', w: 10 }, lockText: 'Termine les Bonbons', dust: '#ff6fae', paint: (c, r) => {
      radial(c, r, '#ffffff', '#f2d6e4');
      c.save(); clipCircle(c, r); c.strokeStyle = '#ff4f8f'; c.lineWidth = r * .22; for (let x = -r * 2; x < r * 2; x += r * .55) { c.beginPath(); c.moveTo(x, -r); c.lineTo(x + r * 1.2, r); c.stroke(); }
      const g = c.createRadialGradient(-r * .35, -r * .4, r * .05, 0, 0, r); g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(120,0,60,0.25)'); c.fillStyle = g; c.fillRect(-r, -r, r * 2, r * 2); c.restore();
    } },
  { id: 'cristal', name: 'Cristal', unlock: { type: 'world', w: 11 }, lockText: "Termine l'Enchanté", dust: '#9cf0ff', paint: (c, r) => {
      radial(c, r, '#d8fbff', '#5a3fc0');
      c.save(); clipCircle(c, r); c.strokeStyle = 'rgba(255,255,255,0.45)'; c.lineWidth = Math.max(1, r * .03);
      for (const [a, b2] of [[-.9, .3], [.2, 1.4], [1.6, 2.6], [2.9, 4.1], [4.4, 5.6]]) { c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.cos(a) * r, Math.sin(a) * r); c.lineTo(Math.cos(b2) * r * .6, Math.sin(b2) * r * .6); c.closePath(); c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,0.5)'; c.beginPath(); c.moveTo(-r * .5, -r * .5); c.lineTo(-r * .1, -r * .7); c.lineTo(-r * .3, -r * .2); c.fill(); c.restore();
    } },
  { id: 'nuitetoilee', name: 'Nuit étoilée', unlock: { type: 'world', w: 12 }, lockText: 'Termine les Rêves', dust: '#c9b6ff', paint: (c, r) => {
      radial(c, r, '#5a4ac0', '#0b0f3a');
      c.save(); clipCircle(c, r);
      c.fillStyle = '#ffe9a0'; c.beginPath(); c.arc(r * .25, -r * .25, r * .32, 0, TAU); c.arc(r * .38, -r * .34, r * .27, 0, TAU, true); c.fill('evenodd');
      c.fillStyle = '#ffffff'; for (const [x, y, s2] of [[-.5, -.3, .05], [-.2, .4, .04], [.4, .4, .05], [-.6, .3, .03], [.1, -.65, .03], [-.3, -.7, .04]]) { c.beginPath(); c.arc(x * r, y * r, s2 * r, 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'coccinelle', name: 'Coccinelle', unlock: { type: 'world', w: 9 }, lockText: 'Termine le Jardin', dust: '#e82a1e', paint: (c, r) => {
      radial(c, r, '#ff8a5c', '#9a0c0c');
      c.save(); clipCircle(c, r); c.fillStyle = '#140c0c'; c.fillRect(-r, -r, r * 2, r * .42);
      c.strokeStyle = 'rgba(30,0,0,0.75)'; c.lineWidth = Math.max(1, r * .05); c.beginPath(); c.moveTo(0, -r * .58); c.lineTo(0, r); c.stroke();
      for (const [x, y, s] of [[-.45, -.1, .16], [.45, -.1, .16], [-.55, .4, .13], [.55, .4, .13], [-.2, .7, .11], [.2, .7, .11]]) { c.fillStyle = '#140c0c'; c.beginPath(); c.arc(x * r, y * r, s * r, 0, TAU); c.fill(); }
      c.fillStyle = '#f4efe6'; c.beginPath(); c.arc(-r * .3, -r * .74, r * .1, 0, TAU); c.arc(r * .3, -r * .74, r * .1, 0, TAU); c.fill();
      c.restore();
    } },
  { id: 'eclair', name: 'Éclair', unlock: { type: 'world' }, lockText: "Termine l'Orage", dust: '#ffd60a', paint: (c, r) => {
      radial(c, r, '#7a5cf0', '#24145e');
      c.save(); c.shadowColor = 'rgba(255,214,10,0.8)'; c.shadowBlur = r * .3; c.fillStyle = '#ffd60a';
      const p = [[.14, -.78], [-.32, .1], [-.02, .1], [-.16, .78], [.36, -.16], [.06, -.16], [.26, -.78]];
      c.beginPath(); p.forEach(([x, y], i) => i ? c.lineTo(x * r, y * r) : c.moveTo(x * r, y * r)); c.closePath(); c.fill();
      c.restore();
    } },
  { id: 'or', name: 'Or massif', unlock: { type: 'stars', n: 45 }, lockText: 'Gagne 45 étoiles', gloss: .8, dust: '#ffd166', paint: (c, r, t) => {
      radial(c, r, '#fff1b0', '#b97c00');
      sparkle(c, r * .36, -r * .3, r * .32 * (.5 + .5 * Math.abs(Math.sin(t * .05))), 1);
      sparkle(c, -r * .3, r * .38, r * .18 * (.5 + .5 * Math.abs(Math.cos(t * .06))), .9);
    } },
  { id: 'rafistole', name: 'Rafistolé', secret: true, dust: '#ff7a9c', paint: (c, r) => {
      radial(c, r, '#ff86a6', '#c2275a');
      c.save(); clipCircle(c, r); c.translate(r * .12, r * .18);
      for (const a of [.62, -.62]) {
        c.save(); c.rotate(a);
        c.fillStyle = 'rgba(244,230,192,0.94)'; c.fillRect(-r * .62, -r * .11, r * 1.24, r * .22);
        c.strokeStyle = 'rgba(160,130,80,0.45)'; c.lineWidth = Math.max(.8, r * .015);
        c.strokeRect(-r * .62, -r * .11, r * 1.24, r * .22);
        c.restore();
      }
      c.restore();
    } },
  { id: 'couronne', name: 'Couronne', secret: true, dust: '#9b5de5', paint: (c, r) => {
      radial(c, r, '#b07cf0', '#3c1a78');
      const s = r * .52;
      c.save(); c.fillStyle = '#ffc93c'; c.strokeStyle = '#a36d00'; c.lineWidth = Math.max(1, r * .035); c.lineJoin = 'round';
      c.beginPath(); c.moveTo(-s, s * .4); c.lineTo(-s, -s * .32); c.lineTo(-s * .5, s * .08); c.lineTo(0, -s * .62); c.lineTo(s * .5, s * .08); c.lineTo(s, -s * .32); c.lineTo(s, s * .4); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#e8336d';
      for (const [x, y] of [[-s, -s * .32], [0, -s * .62], [s, -s * .32]]) { c.beginPath(); c.arc(x, y, Math.max(1.2, r * .055), 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'virgile', name: 'Virgile', secret: true, dust: '#e63946', paint: (c, r) => {
      radial(c, r, '#ff5a5a', '#9e0f1b');
      c.save(); c.strokeStyle = '#f2ead8'; c.lineWidth = Math.max(2, r * .21); c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = 'rgba(70,0,10,0.35)'; c.shadowBlur = r * .06; c.shadowOffsetY = r * .03;
      c.beginPath(); c.moveTo(-r * .36, -r * .34); c.lineTo(0, r * .4); c.lineTo(r * .36, -r * .34); c.stroke();
      c.restore();
    } },
  { id: 'hippo', name: 'Hippo', secret: true, dust: '#3a5fd6', paint: (c, r) => {
      radial(c, r, '#3b5aa8', '#0b1636');
      c.save(); c.lineWidth = Math.max(2, r * .2); c.lineCap = 'round'; c.lineJoin = 'round';
      const g = c.createLinearGradient(-r * .4, -r * .4, r * .4, r * .4);
      ['#ff4d6d', '#ff9f1c', '#ffd23f', '#5fd068', '#3fa9ff', '#8a5cf0'].forEach((col, i) => g.addColorStop(i / 5, col));
      c.strokeStyle = g; c.shadowColor = 'rgba(0,0,20,0.45)'; c.shadowBlur = r * .07; c.shadowOffsetY = r * .03;
      c.beginPath(); c.moveTo(-r * .3, -r * .38); c.lineTo(-r * .3, r * .38); c.moveTo(r * .3, -r * .38); c.lineTo(r * .3, r * .38); c.moveTo(-r * .3, 0); c.lineTo(r * .3, 0); c.stroke();
      c.restore();
    } },
  { id: 'foudre', name: 'Foudre', secret: true, dust: '#5fd6ff', paint: (c, r, t = 0) => {
      radial(c, r, '#8fe6ff', '#0b2a7a');
      c.save(); clipCircle(c, r);
      c.globalAlpha = .35 + .2 * Math.sin(t * .2); c.fillStyle = '#5fd6ff'; c.beginPath(); c.arc(0, 0, r * .5, 0, TAU); c.fill(); c.globalAlpha = 1;
      c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1.4, r * .07); c.lineJoin = 'round'; c.lineCap = 'round'; c.shadowColor = '#5fd6ff'; c.shadowBlur = r * .35;
      const seed = Math.floor(t / 6);
      for (let k = 0; k < 3; k++) {
        const a = k * 2.094 + seed * .7; c.beginPath(); let x = Math.cos(a) * r * .12, y = Math.sin(a) * r * .12; c.moveTo(x, y);
        for (let j = 1; j <= 4; j++) { const rr = r * (.12 + j * .22), aa = a + Math.sin(seed * 1.3 + j * 2 + k) * .35; x = Math.cos(aa) * rr; y = Math.sin(aa) * rr; c.lineTo(x, y); }
        c.stroke();
      }
      c.restore();
      c.save(); c.fillStyle = '#ffe27a'; c.shadowColor = 'rgba(255,210,63,0.9)'; c.shadowBlur = r * .25;
      const p = [[.1, -.5], [-.2, .06], [0, .06], [-.1, .5], [.24, -.1], [.04, -.1], [.18, -.5]];
      c.beginPath(); p.forEach(([x, y], i) => i ? c.lineTo(x * r, y * r) : c.moveTo(x * r, y * r)); c.closePath(); c.fill();
      c.restore();
    } },
  /* ---------- v5 : 30 nouveaux ballons ---------- */
  { id: 'orange', theme: 'gourmand', name: 'Orange', price: 120, string: false, dust: '#ff9a1f', paint: (c, r) => {
      radial(c, r, '#ffc265', '#e56800');
      c.save(); clipCircle(c, r); c.fillStyle = 'rgba(160,60,0,0.25)';
      for (let i = 0; i < 46; i++) { const a = h1(i) * TAU, d = Math.sqrt(h1(i + 99)) * r * .95; c.beginPath(); c.arc(Math.cos(a) * d, Math.sin(a) * d, Math.max(.6, r * .028), 0, TAU); c.fill(); }
      c.restore();
    }, after: (c, r) => {
      c.fillStyle = '#6b4a1f'; c.beginPath(); c.arc(0, -r * .9, Math.max(1, r * .06), 0, TAU); c.fill();
      c.fillStyle = '#3fae4f'; c.beginPath(); c.ellipse(r * .22, -r * .96, r * .22, r * .09, -.45, 0, TAU); c.fill();
    } },
  { id: 'kiwi', theme: 'gourmand', name: 'Kiwi', price: 150, string: false, dust: '#8cc63f', paint: (c, r) => {
      c.fillStyle = '#7a5a2e'; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      const g = c.createRadialGradient(0, 0, r * .15, 0, 0, r * .9); g.addColorStop(0, '#e3f59a'); g.addColorStop(1, '#5aa521');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r * .9, 0, TAU); c.fill();
      c.strokeStyle = 'rgba(240,255,200,0.35)'; c.lineWidth = Math.max(.6, r * .02);
      for (let i = 0; i < 24; i++) { const a = i * TAU / 24; c.beginPath(); c.moveTo(Math.cos(a) * r * .3, Math.sin(a) * r * .3); c.lineTo(Math.cos(a) * r * .84, Math.sin(a) * r * .84); c.stroke(); }
      c.fillStyle = '#f4f8dc'; c.beginPath(); c.ellipse(0, 0, r * .25, r * .19, 0, 0, TAU); c.fill();
      c.fillStyle = '#1d1505';
      for (let i = 0; i < 18; i++) { const a = i * TAU / 18, d = r * (.37 + (i % 2) * .07); c.save(); c.translate(Math.cos(a) * d, Math.sin(a) * d); c.rotate(a); c.beginPath(); c.ellipse(0, 0, r * .065, r * .03, 0, 0, TAU); c.fill(); c.restore(); }
    } },
  { id: 'donut', theme: 'gourmand', name: 'Donut', unlock: { type: 'level', n: 4 }, lockText: 'Niveau 4', string: false, dust: '#ff8fb8', paint: (c, r) => {
      radial(c, r, '#f4c07c', '#c27d36');
      c.fillStyle = '#ff8fb8'; c.beginPath();
      for (let i = 0; i <= 60; i++) { const a = i * TAU / 60, rr = r * (.8 + Math.sin(a * 7) * .045 + Math.sin(a * 3 + 1) * .03), x = Math.cos(a) * rr, y = Math.sin(a) * rr; if (i) c.lineTo(x, y); else c.moveTo(x, y); }
      c.closePath(); c.fill();
      const cols = ['#ffffff', '#ffd23f', '#4cc9f0', '#80ed99', '#b388ff'];
      c.lineCap = 'round'; c.lineWidth = Math.max(1.2, r * .055);
      for (let i = 0; i < 26; i++) { const a = h1(i) * TAU, d = r * (.4 + h1(i + 7) * .34), o = h1(i + 31) * Math.PI, x = Math.cos(a) * d, y = Math.sin(a) * d, ex = Math.cos(o) * r * .05, ey = Math.sin(o) * r * .05; c.strokeStyle = cols[i % cols.length]; c.beginPath(); c.moveTo(x - ex, y - ey); c.lineTo(x + ex, y + ey); c.stroke(); }
      const hg = c.createRadialGradient(0, 0, r * .05, 0, 0, r * .3); hg.addColorStop(0, '#6e3f15'); hg.addColorStop(1, '#b7773a');
      c.fillStyle = hg; c.beginPath(); c.arc(0, 0, r * .28, 0, TAU); c.fill();
    } },
  { id: 'cookie', theme: 'gourmand', name: 'Cookie', price: 250, string: false, dust: '#c98a45', paint: (c, r) => {
      radial(c, r, '#f1c47e', '#b4732c');
      c.fillStyle = 'rgba(120,70,20,0.22)';
      for (let i = 0; i < 24; i++) { const a = h1(i + 200) * TAU, d = Math.sqrt(h1(i + 230)) * r * .9; c.beginPath(); c.arc(Math.cos(a) * d, Math.sin(a) * d, Math.max(.6, r * .025), 0, TAU); c.fill(); }
      c.fillStyle = '#4a2810';
      for (let i = 0; i < 11; i++) {
        const a = h1(i + 3) * TAU, d = Math.sqrt(h1(i + 40)) * r * .76, sz = r * (.07 + h1(i + 80) * .06), cx = Math.cos(a) * d, cy = Math.sin(a) * d;
        c.beginPath();
        for (let k = 0; k < 6; k++) { const b = k * TAU / 6, rr = sz * (.7 + h1(i * 7 + k) * .6), x = cx + Math.cos(b) * rr, y = cy + Math.sin(b) * rr; if (k) c.lineTo(x, y); else c.moveTo(x, y); }
        c.closePath(); c.fill();
      }
    } },
  { id: 'pizza', theme: 'gourmand', name: 'Pizza', unlock: { type: 'level', n: 10 }, lockText: 'Niveau 10', string: false, dust: '#e0482f', paint: (c, r) => {
      radial(c, r, '#f3bb6c', '#c07a2a');
      c.fillStyle = '#d6402b'; c.beginPath(); c.arc(0, 0, r * .84, 0, TAU); c.fill();
      c.fillStyle = '#ffd56e';
      for (let i = 0; i < 8; i++) { const a = h1(i + 5) * TAU, d = Math.sqrt(h1(i + 15)) * r * .58; blob(c, Math.cos(a) * d, Math.sin(a) * d, r * (.14 + h1(i + 25) * .07), i * 13, 7); }
      for (const [x, y] of [[-.36, -.3], [.3, -.4], [.44, .18], [-.12, .4], [-.48, .14], [.06, -.04]]) {
        c.fillStyle = '#a3221a'; c.beginPath(); c.arc(x * r, y * r, r * .13, 0, TAU); c.fill();
        c.fillStyle = 'rgba(70,0,0,0.35)';
        c.beginPath(); c.arc(x * r - r * .04, y * r + r * .02, r * .025, 0, TAU); c.fill();
        c.beginPath(); c.arc(x * r + r * .04, y * r - r * .03, r * .02, 0, TAU); c.fill();
      }
      c.fillStyle = '#2f8a3a';
      for (const [x, y, a] of [[.2, .1, .6], [-.3, -.02, -.4], [.08, .55, 1.2]]) { c.beginPath(); c.ellipse(x * r, y * r, r * .1, r * .045, a, 0, TAU); c.fill(); }
    } },
  { id: 'tennis', theme: 'sport', name: 'Tennis', price: 120, string: false, dust: '#d4ef2a', paint: (c, r) => {
      radial(c, r, '#f0ff78', '#a6bf00');
      c.save(); clipCircle(c, r); c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1.4, r * .085);
      c.beginPath(); c.arc(-r * 1.3, 0, r * 1.02, -.95, .95); c.stroke();
      c.beginPath(); c.arc(r * 1.3, 0, r * 1.02, Math.PI - .95, Math.PI + .95); c.stroke();
      c.restore();
    } },
  { id: 'golf', theme: 'sport', name: 'Golf', price: 180, string: false, dust: '#ffffff', paint: (c, r) => {
      radial(c, r, '#ffffff', '#c3c9d3');
      c.save(); clipCircle(c, r); c.fillStyle = 'rgba(110,120,140,0.2)';
      const st = r * .22;
      for (let j = -5; j <= 5; j++) for (let i = -5; i <= 5; i++) {
        const x = (i + (j & 1 ? .5 : 0)) * st, y = j * st * .87, d = Math.hypot(x, y);
        if (d > r * .97) continue;
        const k = Math.sqrt(1 - (d / r) * (d / r));
        c.beginPath(); c.ellipse(x, y, Math.max(.4, st * .32 * k), st * .32, Math.atan2(y, x), 0, TAU); c.fill();
      }
      c.restore();
    } },
  { id: 'bowling', theme: 'sport', name: 'Bowling', unlock: { type: 'level', n: 6 }, lockText: 'Niveau 6', string: false, dust: '#4b55c9', paint: (c, r) => {
      radial(c, r, '#5560d6', '#0e1140');
      c.save(); clipCircle(c, r); c.strokeStyle = 'rgba(170,180,255,0.22)'; c.lineWidth = Math.max(1, r * .07);
      for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(-r * .25 + i * r * .12, r * .2, r * (.45 + i * .2), 3.5, 5.7); c.stroke(); }
      c.restore();
      for (const [x, y] of [[.1, -.5], [.4, -.36], [.3, -.08]]) {
        const g = c.createRadialGradient(x * r, y * r, 0, x * r, y * r, r * .1); g.addColorStop(0, '#000000'); g.addColorStop(.7, '#05060f'); g.addColorStop(1, '#3d4390');
        c.fillStyle = g; c.beginPath(); c.arc(x * r, y * r, r * .095, 0, TAU); c.fill();
      }
    } },
  { id: 'volley', theme: 'sport', name: 'Volley', price: 220, string: false, dust: '#2f6fd6', paint: (c, r) => {
      c.save(); clipCircle(c, r);
      const cols = ['#2f6fd6', '#ffd23f', '#ffffff'], R2 = r * 1.08;
      const edge = (a, first) => { const ca = a - .95, cx = Math.cos(ca) * r * .62, cy = Math.sin(ca) * r * .62; if (first) c.quadraticCurveTo(cx, cy, Math.cos(a) * R2, Math.sin(a) * R2); else c.quadraticCurveTo(cx, cy, 0, 0); };
      for (let k = 0; k < 3; k++) {
        const a0 = k * TAU / 3 - .5, a1 = a0 + TAU / 3;
        c.fillStyle = cols[k]; c.beginPath(); c.moveTo(0, 0); edge(a0, true); c.arc(0, 0, R2, a0, a1); edge(a1, false); c.closePath(); c.fill();
      }
      c.strokeStyle = 'rgba(25,35,60,0.45)'; c.lineWidth = Math.max(.9, r * .035); c.lineCap = 'round';
      for (let k = 0; k < 3; k++) for (const d of [0, .34, .68]) {
        const a = k * TAU / 3 - .5 + d, ca = a - .95;
        c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(Math.cos(ca) * r * .62, Math.sin(ca) * r * .62, Math.cos(a) * R2, Math.sin(a) * R2); c.stroke();
      }
      c.restore();
      radial(c, r, 'rgba(255,255,255,0)', 'rgba(0,0,0,0.12)');
    } },
  { id: 'billard', theme: 'sport', name: 'Billard', unlock: { type: 'level', n: 14 }, lockText: 'Niveau 14', string: false, dust: '#2a2a2a', paint: (c, r) => {
      radial(c, r, '#505050', '#040404');
      c.fillStyle = '#fbfbf2'; c.beginPath(); c.arc(-r * .06, -r * .1, r * .42, 0, TAU); c.fill();
      c.fillStyle = '#111111'; c.font = '900 ' + Math.max(6, Math.round(r * .58)) + 'px "Lilita One", system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('8', -r * .06, -r * .06);
    } },
  { id: 'chat', theme: 'animaux', name: 'Chat', unlock: { type: 'level', n: 2 }, lockText: 'Niveau 2', string: false, dust: '#ff9f45', paint: (c, r) => {
      for (const sx of [-1, 1]) {
        c.fillStyle = '#e57a2c'; c.beginPath(); c.moveTo(sx * r * .8, -r * .34); c.lineTo(sx * r * .74, -r * 1.12); c.lineTo(sx * r * .2, -r * .86); c.closePath(); c.fill();
        c.fillStyle = '#ffc0c8'; c.beginPath(); c.moveTo(sx * r * .68, -r * .5); c.lineTo(sx * r * .66, -r * .96); c.lineTo(sx * r * .34, -r * .8); c.closePath(); c.fill();
      }
      radial(c, r, '#ffc07c', '#df7526');
      c.fillStyle = 'rgba(160,70,15,0.45)';
      for (const x of [-.2, 0, .2]) { c.beginPath(); c.ellipse(x * r, -r * .74, r * .05, r * .16, 0, 0, TAU); c.fill(); }
      eyes(c, r, -.08, .32, .12);
      cheeks(c, r, .22, .52);
      c.fillStyle = '#ff7f9a'; c.beginPath(); c.moveTo(-r * .08, r * .12); c.lineTo(r * .08, r * .12); c.lineTo(0, r * .22); c.closePath(); c.fill();
      c.strokeStyle = '#5a2a0a'; c.lineWidth = Math.max(1, r * .035); c.lineCap = 'round';
      c.beginPath(); c.moveTo(0, r * .22); c.quadraticCurveTo(-r * .06, r * .34, -r * .16, r * .3); c.moveTo(0, r * .22); c.quadraticCurveTo(r * .06, r * .34, r * .16, r * .3); c.stroke();
      c.strokeStyle = 'rgba(90,42,10,0.55)'; c.lineWidth = Math.max(.8, r * .022);
      for (const sx of [-1, 1]) for (const dy of [-.04, .06]) { c.beginPath(); c.moveTo(sx * r * .3, r * (.2 + dy * .5)); c.lineTo(sx * r * .78, r * (.14 + dy)); c.stroke(); }
    } },
  { id: 'panda', theme: 'animaux', name: 'Panda', price: 300, string: false, dust: '#ffffff', paint: (c, r) => {
      c.fillStyle = '#1c1c22';
      for (const sx of [-1, 1]) { c.beginPath(); c.arc(sx * r * .66, -r * .7, r * .27, 0, TAU); c.fill(); }
      radial(c, r, '#ffffff', '#cfd3da');
      c.fillStyle = '#1c1c22';
      for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * r * .34, -r * .05, r * .2, r * .15, sx * -.6, 0, TAU); c.fill(); }
      for (const sx of [-1, 1]) { c.fillStyle = '#ffffff'; c.beginPath(); c.arc(sx * r * .32, -r * .08, r * .07, 0, TAU); c.fill(); c.fillStyle = '#1c1c22'; c.beginPath(); c.arc(sx * r * .3, -r * .07, r * .04, 0, TAU); c.fill(); }
      c.fillStyle = '#1c1c22'; c.beginPath(); c.ellipse(0, r * .2, r * .1, r * .065, 0, 0, TAU); c.fill();
      c.strokeStyle = '#1c1c22'; c.lineWidth = Math.max(1, r * .035); c.lineCap = 'round';
      c.beginPath(); c.moveTo(0, r * .26); c.quadraticCurveTo(-r * .06, r * .38, -r * .15, r * .34); c.moveTo(0, r * .26); c.quadraticCurveTo(r * .06, r * .38, r * .15, r * .34); c.stroke();
      cheeks(c, r, .3, .5, 'rgba(255,140,160,0.35)');
    } },
  { id: 'grenouille', theme: 'animaux', name: 'Grenouille', price: 200, string: false, dust: '#5ccf4f', paint: (c, r) => {
      c.fillStyle = '#4cbf45';
      for (const sx of [-1, 1]) { c.beginPath(); c.arc(sx * r * .42, -r * .72, r * .3, 0, TAU); c.fill(); }
      radial(c, r, '#86e872', '#2c9428');
      for (const sx of [-1, 1]) {
        c.fillStyle = '#ffffff'; c.beginPath(); c.arc(sx * r * .42, -r * .74, r * .2, 0, TAU); c.fill();
        c.fillStyle = '#16210f'; c.beginPath(); c.arc(sx * r * .4, -r * .72, r * .1, 0, TAU); c.fill();
        c.fillStyle = '#ffffff'; c.beginPath(); c.arc(sx * r * .37, -r * .76, r * .035, 0, TAU); c.fill();
      }
      c.strokeStyle = '#1d5c18'; c.lineWidth = Math.max(1.2, r * .05); c.lineCap = 'round';
      c.beginPath(); c.arc(0, r * .02, r * .5, .15 * Math.PI, .85 * Math.PI); c.stroke();
      c.fillStyle = '#1d5c18'; for (const sx of [-1, 1]) { c.beginPath(); c.arc(sx * r * .08, -r * .12, r * .03, 0, TAU); c.fill(); }
      cheeks(c, r, .2, .56, 'rgba(255,120,140,0.4)');
    } },
  { id: 'chiot', theme: 'animaux', name: 'Chiot', unlock: { type: 'level', n: 8 }, lockText: 'Niveau 8', string: false, dust: '#e8b264', paint: (c, r) => {
      radial(c, r, '#f7d290', '#c98a3a');
    }, after: (c, r) => {
      c.fillStyle = '#9a5c20';
      for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * r * .8, -r * .12, r * .2, r * .46, sx * .22, 0, TAU); c.fill(); }
      c.fillStyle = '#fbe6c2'; c.beginPath(); c.ellipse(0, r * .3, r * .42, r * .3, 0, 0, TAU); c.fill();
      eyes(c, r, -.14, .3, .11);
      c.fillStyle = '#2a1a10'; c.beginPath(); c.ellipse(0, r * .16, r * .12, r * .08, 0, 0, TAU); c.fill();
      c.fillStyle = '#ff7f9a'; c.beginPath(); c.ellipse(0, r * .44, r * .06, r * .08, 0, 0, TAU); c.fill();
      c.strokeStyle = '#2a1a10'; c.lineWidth = Math.max(1, r * .035); c.lineCap = 'round';
      c.beginPath(); c.moveTo(0, r * .22); c.lineTo(0, r * .32); c.quadraticCurveTo(-r * .08, r * .42, -r * .17, r * .36); c.moveTo(0, r * .32); c.quadraticCurveTo(r * .08, r * .42, r * .17, r * .36); c.stroke();
    } },
  { id: 'poussin', theme: 'animaux', name: 'Poussin', price: 150, string: false, dust: '#ffd84a', paint: (c, r) => {
      c.fillStyle = '#f2c200';
      for (const [x, a] of [[-.1, -.5], [0, 0], [.1, .5]]) { c.save(); c.translate(x * r, -r * .98); c.rotate(a); c.beginPath(); c.ellipse(0, 0, r * .07, r * .17, 0, 0, TAU); c.fill(); c.restore(); }
      radial(c, r, '#fff27e', '#f0bd00');
      c.fillStyle = '#e8a800';
      for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * r * .86, r * .22, r * .14, r * .3, sx * -.4, 0, TAU); c.fill(); }
      eyes(c, r, -.1, .28, .1);
      c.fillStyle = '#ff8c1a'; c.beginPath(); c.moveTo(-r * .13, r * .1); c.lineTo(r * .13, r * .1); c.lineTo(0, r * .3); c.closePath(); c.fill();
      c.strokeStyle = '#c96a00'; c.lineWidth = Math.max(.8, r * .02); c.beginPath(); c.moveTo(-r * .12, r * .14); c.lineTo(r * .12, r * .14); c.stroke();
      cheeks(c, r, .18, .5);
    } },
  { id: 'terre', theme: 'espace', name: 'Terre', price: 400, string: false, dust: '#3fa0ff', paint: (c, r) => {
      radial(c, r, '#62c2ff', '#0d4aa2');
      c.save(); clipCircle(c, r); c.fillStyle = '#43ad5a';
      blob(c, -r * .35, -r * .25, r * .34, 11); blob(c, r * .4, r * .1, r * .3, 23); blob(c, -r * .05, r * .55, r * .22, 37); blob(c, r * .25, -r * .62, r * .16, 51);
      c.fillStyle = 'rgba(255,255,255,0.55)';
      blob(c, r * .1, -r * .2, r * .12, 71, 7); blob(c, -r * .5, r * .3, r * .1, 83, 7); blob(c, r * .55, -r * .35, r * .09, 97, 7);
      c.restore();
    } },
  { id: 'soleil', theme: 'espace', name: 'Soleil', unlock: { type: 'level', n: 12 }, lockText: 'Niveau 12', string: false, prev: .34, gloss: .3, dust: '#ffb300', paint: (c, r, t) => {
      c.save(); c.rotate(t * .01); c.fillStyle = '#ffb300';
      for (let i = 0; i < 12; i++) { c.rotate(TAU / 12); c.beginPath(); c.moveTo(-r * .16, -r * .9); c.lineTo(0, -r * 1.32); c.lineTo(r * .16, -r * .9); c.closePath(); c.fill(); }
      c.restore();
      radial(c, r, '#fff6b0', '#ffa800');
    } },
  { id: 'mars', theme: 'espace', name: 'Mars', price: 350, string: false, dust: '#e2603a', paint: (c, r) => {
      radial(c, r, '#ff9c6c', '#9e3317');
      c.save(); clipCircle(c, r);
      c.fillStyle = 'rgba(110,30,10,0.32)'; blob(c, -r * .3, r * .1, r * .3, 5); blob(c, r * .35, r * .35, r * .22, 19); blob(c, r * .3, -r * .3, r * .18, 29);
      c.fillStyle = 'rgba(255,240,230,0.9)'; c.beginPath(); c.ellipse(0, -r * .95, r * .45, r * .16, 0, 0, TAU); c.fill();
      c.restore();
    } },
  { id: 'nebuleuse', theme: 'espace', name: 'Nébuleuse', price: 700, string: false, gloss: .4, dust: '#c86bff', paint: (c, r, t) => {
      radial(c, r, '#2c1666', '#060217');
      c.save(); clipCircle(c, r);
      const k = t * .004;
      for (const [x, y, sz, col] of [[-.3, -.2, .7, '255,80,190'], [.35, .2, .65, '80,200,255'], [.05, .45, .5, '170,90,255'], [.3, -.45, .4, '255,170,90']]) {
        const cx = (x + Math.sin(k + sz * 9) * .08) * r, cy = (y + Math.cos(k + sz * 7) * .08) * r;
        const g = c.createRadialGradient(cx, cy, 0, cx, cy, sz * r); g.addColorStop(0, `rgba(${col},0.6)`); g.addColorStop(1, `rgba(${col},0)`);
        c.fillStyle = g; c.fillRect(-r, -r, r * 2, r * 2);
      }
      c.fillStyle = '#ffffff';
      for (let i = 0; i < 14; i++) { c.globalAlpha = .4 + .6 * Math.abs(Math.sin(t * .05 + i)); const a = h1(i + 300) * TAU, d = Math.sqrt(h1(i + 330)) * r * .9; c.beginPath(); c.arc(Math.cos(a) * d, Math.sin(a) * d, Math.max(.5, r * .018), 0, TAU); c.fill(); }
      c.restore();
    } },
  { id: 'trounoir', theme: 'espace', name: 'Trou noir', unlock: { type: 'level', n: 20 }, lockText: 'Niveau 20', string: false, wide: true, flat: true, gloss: 0, dust: '#ff9a3c', paint: (c, r, t) => {
      const g = c.createRadialGradient(0, 0, r * .4, 0, 0, r); g.addColorStop(0, '#000000'); g.addColorStop(.7, '#1a0b2e'); g.addColorStop(1, '#3a1d5c');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      c.save(); c.rotate(-.25); diskHalf(c, r, t, Math.PI, TAU); c.restore();
      c.fillStyle = '#000000'; c.beginPath(); c.arc(0, 0, r * .5, 0, TAU); c.fill();
      c.strokeStyle = 'rgba(255,220,160,0.85)'; c.lineWidth = Math.max(1, r * .035); c.beginPath(); c.arc(0, 0, r * .52, 0, TAU); c.stroke();
    }, after: (c, r, t) => { c.rotate(-.25); diskHalf(c, r, t, 0, Math.PI); } },
  { id: 'lave', theme: 'matieres', name: 'Lave', price: 600, string: false, gloss: .35, dust: '#ff6a1a', paint: (c, r, t) => {
      radial(c, r, '#4d1d10', '#120503');
      const p = .65 + .35 * Math.sin(t * .07);
      c.save(); clipCircle(c, r);
      const hot = c.createRadialGradient(r * .2, r * .3, 0, r * .2, r * .3, r * .9); hot.addColorStop(0, `rgba(255,90,0,${(.35 * p).toFixed(3)})`); hot.addColorStop(1, 'rgba(255,90,0,0)');
      c.fillStyle = hot; c.fillRect(-r, -r, r * 2, r * 2);
      c.shadowColor = '#ff5a00'; c.shadowBlur = r * .18; c.strokeStyle = `rgba(255,${150 + 70 * p | 0},40,0.95)`; c.lineWidth = Math.max(1, r * .05); c.lineJoin = 'round'; c.lineCap = 'round';
      for (let i = 0; i < 7; i++) {
        let x = (h1(i + 400) * 2 - 1) * r * .7, y = (h1(i + 420) * 2 - 1) * r * .7;
        c.beginPath(); c.moveTo(x, y);
        for (let k = 0; k < 4; k++) { x += (h1(i * 9 + k + 440) - .5) * r * .5; y += (h1(i * 9 + k + 470) - .5) * r * .5; c.lineTo(x, y); }
        c.stroke();
      }
      c.restore();
    } },
  { id: 'glace', theme: 'matieres', name: 'Glace', price: 500, string: false, gloss: .85, dust: '#bfeaff', paint: (c, r, t) => {
      radial(c, r, '#f4fdff', '#76bfe3');
      c.save(); clipCircle(c, r);
      const Q = [[-.6, -.4], [-.1, -.75], [.5, -.5], [.75, .1], [.3, .6], [-.3, .7], [-.75, .2], [0, 0], [.2, -.2], [-.3, .15]];
      c.strokeStyle = 'rgba(255,255,255,0.6)'; c.lineWidth = Math.max(.8, r * .025);
      for (const [a, b] of [[0, 7], [1, 7], [1, 8], [2, 8], [3, 8], [3, 7], [4, 7], [5, 9], [6, 9], [9, 7], [0, 9], [8, 7], [4, 9]]) { c.beginPath(); c.moveTo(Q[a][0] * r, Q[a][1] * r); c.lineTo(Q[b][0] * r, Q[b][1] * r); c.stroke(); }
      c.fillStyle = 'rgba(255,255,255,0.25)'; c.beginPath(); c.moveTo(Q[1][0] * r, Q[1][1] * r); c.lineTo(Q[8][0] * r, Q[8][1] * r); c.lineTo(Q[7][0] * r, Q[7][1] * r); c.closePath(); c.fill();
      c.restore();
      sparkle(c, r * .4, r * .32, r * .2 * (.5 + .5 * Math.abs(Math.sin(t * .04))), .9);
    } },
  { id: 'neon', theme: 'matieres', name: 'Néon', unlock: { type: 'level', n: 16 }, lockText: 'Niveau 16', string: false, flat: true, gloss: .25, dust: '#ff3fa4', paint: (c, r, t) => {
      radial(c, r, '#22123f', '#06030f');
      const f = .75 + .25 * Math.sin(t * .13) * Math.sin(t * .07);
      c.save(); c.globalAlpha = f; c.lineWidth = Math.max(1.5, r * .09);
      c.shadowBlur = r * .3; c.shadowColor = '#ff3fa4'; c.strokeStyle = '#ff6ec0'; c.beginPath(); c.arc(0, 0, r * .74, 0, TAU); c.stroke();
      c.shadowColor = '#3ff0ff'; c.strokeStyle = '#8ff7ff'; c.beginPath(); c.arc(0, 0, r * .44, 0, TAU); c.stroke();
      c.shadowColor = '#ffe03f'; c.fillStyle = '#fff07a'; c.beginPath(); c.arc(0, 0, r * .12, 0, TAU); c.fill();
      c.restore();
    } },
  { id: 'chrome', theme: 'matieres', name: 'Chrome', price: 900, gloss: .9, dust: '#cfd6e0', paint: (c, r) => {
      const g = c.createLinearGradient(0, -r, 0, r);
      g.addColorStop(0, '#ffffff'); g.addColorStop(.38, '#c9d1dc'); g.addColorStop(.5, '#59626f'); g.addColorStop(.56, '#2c323c'); g.addColorStop(.72, '#9aa5b3'); g.addColorStop(1, '#eef2f6');
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
    } },
  { id: 'holo', theme: 'matieres', name: 'Hologramme', unlock: { type: 'level', n: 18 }, lockText: 'Niveau 18', gloss: .8, dust: '#b9a8ff', paint: (c, r, t) => {
      const h = (t * 1.2) % 360, g = c.createLinearGradient(-r, -r, r, r);
      for (let i = 0; i <= 4; i++) g.addColorStop(i / 4, `hsl(${(h + i * 70) % 360},85%,76%)`);
      c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
      c.save(); clipCircle(c, r); c.rotate(-.6); c.fillStyle = 'rgba(255,255,255,0.35)';
      const o = ((t * .8) % (r * 3)) - r * 1.5;
      c.fillRect(o - r * .12, -r * 1.5, r * .24, r * 3); c.fillRect(o + r * .3, -r * 1.5, r * .08, r * 3);
      c.restore();
    } },
  { id: 'france', theme: 'pays', name: 'France', price: 100, dust: '#0055a4', paint: (c, r) => flagClip(c, r, () => {
      c.fillStyle = '#0055a4'; c.fillRect(-r, -r, r * .7, r * 2); c.fillStyle = '#ffffff'; c.fillRect(-r * .335, -r, r * .67, r * 2); c.fillStyle = '#ef4135'; c.fillRect(r * .333, -r, r * .7, r * 2);
    }) },
  { id: 'bresil', theme: 'pays', name: 'Brésil', price: 100, dust: '#009c3b', paint: (c, r) => flagClip(c, r, () => {
      c.fillStyle = '#009c3b'; c.fillRect(-r, -r, r * 2, r * 2);
      c.fillStyle = '#ffdf00'; c.beginPath(); c.moveTo(0, -r * .66); c.lineTo(r * .92, 0); c.lineTo(0, r * .66); c.lineTo(-r * .92, 0); c.closePath(); c.fill();
      c.fillStyle = '#002776'; c.beginPath(); c.arc(0, 0, r * .36, 0, TAU); c.fill();
      c.save(); c.beginPath(); c.arc(0, 0, r * .36, 0, TAU); c.clip();
      c.strokeStyle = '#ffffff'; c.lineWidth = Math.max(1, r * .07); c.beginPath(); c.arc(-r * .12, r * .62, r * .66, -2.25, -.7); c.stroke();
      c.restore();
    }) },
  { id: 'japon', theme: 'pays', name: 'Japon', price: 100, dust: '#bc002d', paint: (c, r) => {
      radial(c, r, '#ffffff', '#dfe3e9');
      c.fillStyle = '#bc002d'; c.beginPath(); c.arc(0, 0, r * .45, 0, TAU); c.fill();
    } },
  { id: 'canada', theme: 'pays', name: 'Canada', price: 100, dust: '#d80621', paint: (c, r) => flagClip(c, r, () => {
      c.fillStyle = '#ffffff'; c.fillRect(-r, -r, r * 2, r * 2);
      c.fillStyle = '#d80621'; c.fillRect(-r, -r, r * .5, r * 2); c.fillRect(r * .5, -r, r * .5, r * 2);
      const sz = r * .4; c.beginPath();
      MAPLE.forEach(([x, y], i) => { if (i) c.lineTo(x * sz, y * sz); else c.moveTo(x * sz, y * sz); });
      for (let i = MAPLE.length - 1; i >= 1; i--) c.lineTo(-MAPLE[i][0] * sz, MAPLE[i][1] * sz);
      c.closePath(); c.fill();
    }) },
  { id: 'italie', theme: 'pays', name: 'Italie', price: 100, dust: '#009246', paint: (c, r) => flagClip(c, r, () => {
      c.fillStyle = '#009246'; c.fillRect(-r, -r, r * .7, r * 2); c.fillStyle = '#ffffff'; c.fillRect(-r * .335, -r, r * .67, r * 2); c.fillStyle = '#ce2b37'; c.fillRect(r * .333, -r, r * .7, r * 2);
    }) },
  { id: 'oeil', theme: 'trophees', name: 'Œil du dragon', unlock: { type: 'trophy', id: 'dragon' }, lockText: 'Trophée Dompteur de dragon', string: false, gloss: .45, dust: '#ff5a1f', paint: (c, r, t) => {
    radial(c, r, '#ff8a3c', '#8c1206');
    c.save(); clipCircle(c, r); c.strokeStyle = 'rgba(80,8,4,0.55)'; c.lineWidth = Math.max(1, r * .05);
    for (let row = -4; row <= 4; row++) for (let col = -4; col <= 4; col++) { c.beginPath(); c.arc(col * r * .3 + (row % 2 ? r * .15 : 0), row * r * .25, r * .16, 0, Math.PI); c.stroke(); }
    c.restore();
    const g = c.createRadialGradient(0, 0, r * .05, 0, 0, r * .42); g.addColorStop(0, '#fff3a0'); g.addColorStop(.6, '#ffb000'); g.addColorStop(1, '#c46200');
    c.fillStyle = g; c.beginPath(); c.ellipse(0, 0, r * .44, r * .3, 0, 0, TAU); c.fill();
    const blink = Math.abs(Math.sin((t || 0) * .02)) > .97 ? .15 : 1;
    c.fillStyle = '#140604'; c.beginPath(); c.ellipse(0, 0, r * .06, r * .26 * blink, 0, 0, TAU); c.fill();
  } },
  { id: 'laurier', theme: 'trophees', name: 'Lauriers', unlock: { type: 'trophy', id: 'stars90' }, lockText: 'Trophée 90 étoiles', gloss: .7, dust: '#ffd166', paint: (c, r) => {
    radial(c, r, '#fff1a8', '#c98a00');
    c.fillStyle = '#ffffff'; c.beginPath();
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .15 : r * .36; i ? c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : c.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    c.closePath(); c.fill();
    c.fillStyle = '#2f9e4f';
    for (const sd of [-1, 1]) for (let i = 0; i < 6; i++) { const a = Math.PI / 2 + sd * (.35 + i * .36), x = Math.cos(a) * r * .66, y = Math.sin(a) * r * .66; c.save(); c.translate(x, y); c.rotate(a + sd * Math.PI / 2); c.beginPath(); c.ellipse(0, 0, r * .13, r * .055, 0, 0, TAU); c.fill(); c.restore(); }
  } },
  { id: 'chrono', theme: 'trophees', name: 'Chrono', unlock: { type: 'trophy', id: 'chrono80' }, lockText: 'Trophée Sprinteur', string: false, dust: '#e8336d', paint: (c, r, t) => {
    radial(c, r, '#ff7aa0', '#b3164a');
    c.fillStyle = '#ffffff'; c.beginPath(); c.arc(0, 0, r * .72, 0, TAU); c.fill();
    c.strokeStyle = '#1b1b2a'; c.lineCap = 'round';
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12, l = i % 3 ? .08 : .15; c.lineWidth = Math.max(1, r * (i % 3 ? .03 : .05)); c.beginPath(); c.moveTo(Math.cos(a) * r * (.64 - l), Math.sin(a) * r * (.64 - l)); c.lineTo(Math.cos(a) * r * .64, Math.sin(a) * r * .64); c.stroke(); }
    const a = (t || 0) * .05 - Math.PI / 2;
    c.lineWidth = Math.max(1, r * .05); c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.cos(a / 12) * r * .32, Math.sin(a / 12) * r * .32); c.stroke();
    c.strokeStyle = '#e8336d'; c.lineWidth = Math.max(1, r * .035); c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.cos(a) * r * .5, Math.sin(a) * r * .5); c.stroke();
    c.fillStyle = '#1b1b2a'; c.beginPath(); c.arc(0, 0, r * .06, 0, TAU); c.fill();
  } },
];
function paintSkin(c, skin, r, t) {
  c.save(); skin.paint(c, r, t); c.restore();
  if (!skin.flat) shade(c, r);
  if (skin.after) { c.save(); skin.after(c, r, t); c.restore(); }
  gloss(c, r, skin.gloss != null ? skin.gloss : .55);
}
