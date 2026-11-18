(() => {
const TAU = Math.PI * 2;
/* cycle commun : toutes les ~4 s il ouvre le bec et crie « BOULI ! » */
const cyc = t => { const k = t % 240; return { k, talk: k >= 170 && k < 215, open: k >= 170 && k < 215 ? Math.abs(Math.sin((k - 170) * .35)) : 0, bob: k >= 160 && k < 220 ? Math.sin((k - 160) * .2) * .06 : Math.sin(t * .05) * .02 }; };
function bubble(c, r, k, x, y) { if (k < 172 || k > 222) return; const q = (k - 172) / 50, s = q < .15 ? q / .15 : 1, a = q > .75 ? 1 - (q - .75) / .25 : 1;
  c.save(); c.globalAlpha = a; c.translate(x, y - q * r * .08); c.scale(s * 1.1, s * 1.1);
  c.fillStyle = '#ffffff'; c.strokeStyle = '#1a1a2a'; c.lineWidth = Math.max(1, r * .03);
  c.beginPath(); c.roundRect(-r * .48, -r * .2, r * .96, r * .38, r * .19); c.fill(); c.stroke();
  c.beginPath(); c.moveTo(-r * .3, r * .16); c.lineTo(-r * .44, r * .4); c.lineTo(-r * .12, r * .17); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#ffffff'; c.fillRect(-r * .3, r * .1, r * .2, r * .08);
  c.font = `${Math.round(r * .26)}px "Lilita One"`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#e8336d'; c.fillText('BOULI !', 0, 0);
  c.restore(); }
function beak(c, r, open, col1, col2) { /* bec crochu, s'ouvre */
  c.fillStyle = col2; c.beginPath(); c.moveTo(r * .1, r * .12); c.quadraticCurveTo(r * .42, r * .16 + open * r * .1, r * .3, r * .36 + open * r * .12); c.quadraticCurveTo(r * .2, r * .22, r * .06, r * .2); c.closePath(); c.fill();
  c.fillStyle = col1; c.beginPath(); c.moveTo(r * .02, -r * .08); c.quadraticCurveTo(r * .5, -r * .12, r * .52, r * .2); c.quadraticCurveTo(r * .5, r * .34, r * .4, r * .32); c.quadraticCurveTo(r * .38, r * .14, r * .08, r * .14); c.closePath(); c.fill();
  c.fillStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.ellipse(r * .24, -r * .04, r * .12, r * .03, -.1, 0, TAU); c.fill(); }
function eye(c, r, x, y, blink) { c.fillStyle = '#fff'; c.beginPath(); c.ellipse(x, y, r * .13, r * .14 * blink, 0, 0, TAU); c.fill();
  c.fillStyle = '#1a1a2a'; c.beginPath(); c.ellipse(x + r * .03, y, r * .07, r * .08 * blink, 0, 0, TAU); c.fill(); c.fillStyle = '#fff'; c.beginPath(); c.arc(x + r * .01, y - r * .04, r * .025, 0, TAU); c.fill(); }
/* A : perroquet vert pirate, bandeau sur l'œil */
const A = { id: 'A', name: 'A · Pirate vert', paint: (c, r, t = 0) => { const C = cyc(t), blink = (t % 190) < 6 ? .15 : 1;
  const g = c.createRadialGradient(-r * .3, -r * .35, r * .1, 0, 0, r); g.addColorStop(0, '#7ae07a'); g.addColorStop(.6, '#2fae4a'); g.addColorStop(1, '#13652a'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  c.save(); c.rotate(C.bob);
  c.fillStyle = '#ffd23a'; c.beginPath(); c.ellipse(-r * .05, r * .5, r * .5, r * .32, 0, Math.PI, TAU); c.fill(); /* gorge jaune */
  c.fillStyle = '#e8336d'; for (let i = 0; i < 3; i++) { c.beginPath(); c.ellipse(-r * .25 + i * r * .14, -r * .78 + Math.abs(i - 1) * r * .06, r * .07, r * .2, (i - 1) * .3, 0, TAU); c.fill(); } /* huppe */
  c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(r * .02, -r * .05, r * .26, r * .3, 0, 0, TAU); c.fill(); /* masque blanc */
  eye(c, r, r * .02, -r * .1, blink);
  c.fillStyle = '#1a1a2a'; c.beginPath(); c.ellipse(-r * .42, -r * .12, r * .14, r * .12, 0, 0, TAU); c.fill(); c.strokeStyle = '#1a1a2a'; c.lineWidth = Math.max(1, r * .04); c.beginPath(); c.moveTo(-r * .9, -r * .38); c.quadraticCurveTo(-r * .4, -r * .32, r * .3, -r * .5); c.stroke();
  beak(c, r, C.open, '#ffb02e', '#c86a10');
  c.restore(); bubble(c, r, C.k, r * .62, -r * 1.22); } };
/* B : ara rouge avec tricorne */
const B = { id: 'B', name: 'B · Ara au tricorne', paint: (c, r, t = 0) => { const C = cyc(t), blink = (t % 190) < 6 ? .15 : 1;
  const g = c.createRadialGradient(-r * .3, -r * .35, r * .1, 0, 0, r); g.addColorStop(0, '#ff7a6a'); g.addColorStop(.6, '#e0302a'); g.addColorStop(1, '#801414'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  c.save(); c.beginPath(); c.arc(0, 0, r, 0, TAU); c.clip(); c.fillStyle = '#ffd23a'; c.beginPath(); c.ellipse(-r * .7, r * .55, r * .5, r * .26, -.5, 0, TAU); c.fill(); c.fillStyle = '#2a7aff'; c.beginPath(); c.ellipse(-r * .8, r * .8, r * .5, r * .22, -.5, 0, TAU); c.fill(); c.restore(); /* aile */
  c.save(); c.rotate(C.bob);
  c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(r * .02, -r * .02, r * .26, r * .28, 0, 0, TAU); c.fill();
  c.strokeStyle = 'rgba(200,40,40,0.5)'; c.lineWidth = Math.max(.6, r * .015); for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(-r * .16, r * .02 + i * r * .06); c.lineTo(-r * .02, r * .04 + i * r * .06); c.stroke(); }
  eye(c, r, r * .02, -r * .08, blink);
  /* tricorne */
  c.fillStyle = '#1a1a2a'; c.beginPath(); c.moveTo(-r * .62, -r * .42); c.quadraticCurveTo(0, -r * .58, r * .6, -r * .44); c.quadraticCurveTo(r * .3, -r * .98, 0, -r * .86); c.quadraticCurveTo(-r * .3, -r * .98, -r * .62, -r * .42); c.fill();
  c.strokeStyle = '#f2b705'; c.lineWidth = Math.max(1, r * .035); c.beginPath(); c.moveTo(-r * .56, -r * .45); c.quadraticCurveTo(0, -r * .6, r * .54, -r * .47); c.stroke();
  c.fillStyle = '#ffffff'; c.beginPath(); c.arc(0, -r * .7, r * .07, 0, TAU); c.fill(); c.fillStyle = '#1a1a2a'; c.fillRect(-r * .05, -r * .66, r * .1, r * .03); /* tête de mort mini */
  beak(c, r, C.open, '#f3ead8', '#2a2a3a');
  c.restore(); bubble(c, r, C.k, r * .62, -r * 1.22); } };
/* C : bébé perroquet tout rond (style bébé dragon) */
const Cc = { id: 'C', name: 'C · Bébé perroquet', paint: (c, r, t = 0) => { const C = cyc(t), blink = (t % 190) < 6 ? .15 : 1;
  const g = c.createRadialGradient(-r * .3, -r * .35, r * .1, 0, 0, r); g.addColorStop(0, '#9af07a'); g.addColorStop(.6, '#3ac05a'); g.addColorStop(1, '#147a34'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  c.save(); c.rotate(C.bob);
  c.fillStyle = '#ffd23a'; c.beginPath(); c.ellipse(0, r * .55, r * .48, r * .35, 0, Math.PI, TAU); c.fill();
  c.fillStyle = '#ff6a3a'; c.beginPath(); c.ellipse(-r * .08, -r * .82, r * .1, r * .2, -.3, 0, TAU); c.ellipse(r * .08, -r * .84, r * .08, r * .16, .3, 0, TAU); c.fill();
  for (const s of [-1, 1]) eye(c, r * 1.15, s * r * .26, -r * .12, blink);
  c.fillStyle = 'rgba(255,90,120,0.45)'; c.beginPath(); c.ellipse(-r * .46, r * .08, r * .1, r * .06, 0, 0, TAU); c.ellipse(r * .46, r * .08, r * .1, r * .06, 0, 0, TAU); c.fill();
  c.save(); c.translate(-r * .22, r * .02); beak(c, r * .9, C.open, '#ffb02e', '#c86a10'); c.restore();
  c.restore(); bubble(c, r, C.k, r * .62, -r * 1.22); } };
window.PERROQUET_VARIANTS = [A, B, Cc];
})();
