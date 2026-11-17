(() => {
const TAU = Math.PI * 2;
const shellG = (c, r) => { const g = c.createRadialGradient(-r * .3, -r * .35, r * .1, 0, 0, r * 1.05); g.addColorStop(0, '#6a4a8a'); g.addColorStop(.5, '#3a2a5a'); g.addColorStop(1, '#160c26'); return g; };
const veins = (c, r, br, paths) => { c.lineCap = 'round'; c.lineJoin = 'round';
  for (const [lw, col] of [[r * .1, `rgba(255,120,40,${(.4 * br).toFixed(3)})`], [r * .045, '#ffb04a'], [r * .018, '#fff0b0']]) { c.strokeStyle = col; c.lineWidth = Math.max(.8, lw);
    c.beginPath(); for (const P of paths) P.forEach(([x, y], i) => i ? c.lineTo(x * r, y * r) : c.moveTo(x * r, y * r)); c.stroke(); } };
/* A : l'œuf fêlé (version actuelle) */
const A = { id: 'A', name: 'A · Œuf fêlé', paint: (c, r, t = 0) => {
  c.fillStyle = shellG(c, r); c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  const br = .6 + .4 * Math.sin(t * .05);
  const ig = c.createRadialGradient(0, r * .2, 0, 0, r * .2, r * .9); ig.addColorStop(0, `rgba(255,140,50,${(.35 * br).toFixed(3)})`); ig.addColorStop(1, 'rgba(255,90,30,0)'); c.fillStyle = ig; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  veins(c, r, br, [[[-.7, -.2], [-.35, .05], [-.1, -.25], [.2, .1], [.45, -.12], [.72, .15]], [[-.1, -.25], [-.02, -.6]], [[.2, .1], [.12, .55]]]);
  const blink = (t % 220) < 8 ? .15 : 1;
  c.fillStyle = '#ffd27a'; c.beginPath(); c.ellipse(-r * .1, -r * .02, r * .09, r * .09 * blink, 0, 0, TAU); c.fill();
  c.fillStyle = '#1a0a10'; c.beginPath(); c.ellipse(-r * .08, -r * .02, r * .03, r * .06 * blink, 0, 0, TAU); c.fill(); } };
/* B : l'éclosion — un bébé dragon sort, la calotte posée sur la tête comme un chapeau */
const B = { id: 'B', name: 'B · Éclosion', paint: (c, r, t = 0) => {
  const br = .6 + .4 * Math.sin(t * .05), bob = Math.sin(t * .06) * r * .03;
  const ig = c.createRadialGradient(0, -r * .1, r * .05, 0, 0, r); ig.addColorStop(0, '#9a3a2a'); ig.addColorStop(.6, '#5a1a24'); ig.addColorStop(1, '#2a0c1c'); c.fillStyle = ig; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  /* tête */
  c.save(); c.translate(0, bob);
  /* collerette de piquants sur les joues + petites cornes en arrière */
  for (const s of [-1, 1]) { c.fillStyle = '#c8361a';
    for (const [y0, len] of [[-r * .28, .26], [-r * .1, .22], [r * .06, .16]]) { c.beginPath(); c.moveTo(s * r * .36, y0 - r * .07); c.lineTo(s * r * (.36 + len), y0 + r * .02); c.lineTo(s * r * .38, y0 + r * .08); c.closePath(); c.fill(); }
    c.fillStyle = '#ffe2a8'; c.beginPath(); c.moveTo(s * r * .14, -r * .48); c.quadraticCurveTo(s * r * .3, -r * .62, s * r * .44, -r * .64); c.quadraticCurveTo(s * r * .3, -r * .5, s * r * .26, -r * .42); c.closePath(); c.fill(); }
  const hg = c.createRadialGradient(-r * .15, -r * .3, r * .05, 0, -r * .1, r * .5); hg.addColorStop(0, '#ff9a4a'); hg.addColorStop(1, '#e8481e');
  c.fillStyle = hg; c.beginPath(); c.ellipse(0, -r * .14, r * .44, r * .4, 0, 0, TAU); c.fill();
  /* museau plat de dragon + narines + petit croc */
  c.fillStyle = '#f2642a'; c.beginPath(); c.ellipse(0, r * .1, r * .24, r * .11, 0, 0, TAU); c.fill();
  c.fillStyle = '#9a2a14'; c.beginPath(); c.ellipse(-r * .1, r * .03, r * .035, r * .018, -.4, 0, TAU); c.ellipse(r * .1, r * .03, r * .035, r * .018, .4, 0, TAU); c.fill();
  c.strokeStyle = '#9a2a14'; c.lineWidth = Math.max(.8, r * .025); c.lineCap = 'round'; c.beginPath(); c.moveTo(-r * .16, r * .14); c.quadraticCurveTo(0, r * .2, r * .16, r * .14); c.stroke();
  c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(r * .06, r * .16); c.lineTo(r * .1, r * .16); c.lineTo(r * .08, r * .22); c.closePath(); c.fill();
  const blink = (t % 200) < 7 ? .12 : 1;
  for (const s of [-1, 1]) { c.fillStyle = '#fff'; c.beginPath(); c.ellipse(s * r * .19, -r * .2, r * .12, r * .13 * blink, 0, 0, TAU); c.fill();
    c.fillStyle = '#1a0a10'; c.beginPath(); c.ellipse(s * r * .17, -r * .18, r * .065, r * .08 * blink, 0, 0, TAU); c.fill();
    c.fillStyle = '#fff'; c.beginPath(); c.arc(s * r * .15, -r * .22, r * .025, 0, TAU); c.fill(); }
  c.fillStyle = 'rgba(255,90,90,0.45)'; c.beginPath(); c.ellipse(-r * .32, -r * .02, r * .07, r * .04, 0, 0, TAU); c.ellipse(r * .32, -r * .02, r * .07, r * .04, 0, 0, TAU); c.fill();
  /* calotte de coquille sur la tête */
  c.save(); c.translate(-r * .02, -r * .5); c.rotate(-.18);
  c.fillStyle = shellG(c, r); c.beginPath(); c.moveTo(-r * .42, r * .04); c.quadraticCurveTo(0, -r * .42, r * .42, r * .04);
  for (let i = 0; i <= 6; i++) c.lineTo(r * .42 - i * r * .14, r * (i % 2 ? .14 : .04)); c.closePath(); c.fill();
  c.restore(); c.restore();
  /* bas de coquille, bord en zigzag */
  c.save(); c.beginPath(); c.arc(0, 0, r, 0, TAU); c.clip();
  c.fillStyle = shellG(c, r); c.beginPath(); c.moveTo(-r, r * .2);
  for (let i = 0; i <= 10; i++) c.lineTo(-r + i * r * .2, r * (i % 2 ? .14 : .28)); c.lineTo(r, r); c.lineTo(-r, r); c.closePath(); c.fill();
  veins(c, r, br, [[[-.6, .45], [-.35, .6], [-.1, .45], [.15, .7]], [[.3, .4], [.5, .62], [.7, .5]]]);
  c.restore(); } };
/* C : écailles de braise — des écailles sombres, la braise qui respire entre elles */
const C = { id: 'C', name: 'C · Écailles de braise', paint: (c, r, t = 0) => {
  const br = .6 + .4 * Math.sin(t * .05);
  const ig = c.createRadialGradient(0, r * .1, 0, 0, 0, r); ig.addColorStop(0, `rgba(255,${(200 + br * 40) | 0},120,1)`); ig.addColorStop(.6, '#ff6a1a'); ig.addColorStop(1, '#8a1a10'); c.fillStyle = ig; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
  c.save(); c.beginPath(); c.arc(0, 0, r, 0, TAU); c.clip();
  const sr = r * .26, gap = r * .035;
  for (let row = -5; row <= 5; row++) for (let col = -5; col <= 5; col++) {
    const x = col * sr * 1.6 + (row % 2 ? sr * .8 : 0), y = row * sr * .95; if (Math.hypot(x, y) > r * 1.15) continue;
    const g = c.createLinearGradient(x - sr, y - sr, x + sr, y + sr); g.addColorStop(0, '#5a4080'); g.addColorStop(.5, '#2e1e4a'); g.addColorStop(1, '#140a22');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, sr - gap, Math.PI * .05, Math.PI * .95, true); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(200,180,255,0.35)'; c.lineWidth = Math.max(.5, r * .012); c.beginPath(); c.arc(x, y, sr - gap - r * .02, Math.PI * 1.1, Math.PI * 1.5); c.stroke();
  }
  c.restore(); } };
window.OEUF_VARIANTS = [A, B, C];
})();
