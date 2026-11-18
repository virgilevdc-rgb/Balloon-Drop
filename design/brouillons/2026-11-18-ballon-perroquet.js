(() => {
const TAU = Math.PI * 2;
/* Ballon « Perroquet » : coucher de soleil de l'Île au trésor + ara au tricorne, perché puis en vol (« BOULI ! ») */
function ara(c, r, s, flap, open, blink, fly) { /* ara rouge au tricorne, de profil, tourné vers la droite */
  c.save(); c.scale(s, s);
  /* queue */ c.fillStyle = '#2a7aff'; c.beginPath(); c.moveTo(-r * .1, r * .08); c.lineTo(-r * .5, r * (fly ? .2 : .55)); c.lineTo(-r * .38, r * (fly ? .26 : .58)); c.lineTo(-r * .02, r * .16); c.fill();
  c.fillStyle = '#e0302a'; c.beginPath(); c.moveTo(-r * .08, r * .06); c.lineTo(-r * .44, r * (fly ? .12 : .5)); c.lineTo(-r * .32, r * (fly ? .18 : .52)); c.lineTo(0, r * .14); c.fill();
  /* corps */ c.fillStyle = '#e0302a'; c.beginPath(); c.ellipse(0, 0, r * .2, r * .25, fly ? -1.1 : -.25, 0, TAU); c.fill();
  /* aile (bat en vol) */
  c.save(); c.translate(-r * .02, -r * .02); c.rotate(fly ? -.6 - flap * 1.1 : .5);
  c.fillStyle = '#ffd23a'; c.beginPath(); c.ellipse(-r * .1, 0, r * .2, r * .09, 0, 0, TAU); c.fill();
  c.fillStyle = '#2a7aff'; c.beginPath(); c.ellipse(-r * .2, r * .02, r * .14, r * .06, 0, 0, TAU); c.fill(); c.restore();
  /* tête */ const hx = fly ? r * .16 : r * .06, hy = fly ? -r * .08 : -r * .24;
  c.fillStyle = '#e0302a'; c.beginPath(); c.arc(hx, hy, r * .14, 0, TAU); c.fill();
  c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(hx + r * .05, hy, r * .07, r * .08, 0, 0, TAU); c.fill();
  c.fillStyle = '#1a1a2a'; c.beginPath(); c.ellipse(hx + r * .065, hy - r * .005, r * .03, r * .035 * blink, 0, 0, TAU); c.fill();
  /* bec */ c.fillStyle = '#2a2a3a'; c.beginPath(); c.moveTo(hx + r * .1, hy + r * .04); c.quadraticCurveTo(hx + r * .2, hy + r * .06 + open * r * .06, hx + r * .15, hy + r * .12 + open * r * .06); c.lineTo(hx + r * .1, hy + r * .07); c.fill();
  c.fillStyle = '#f3ead8'; c.beginPath(); c.moveTo(hx + r * .08, hy - r * .02); c.quadraticCurveTo(hx + r * .24, hy - r * .02, hx + r * .23, hy + r * .1); c.quadraticCurveTo(hx + r * .2, hy + r * .06, hx + r * .1, hy + r * .05); c.fill();
  /* tricorne */ c.save(); c.translate(hx - r * .01, hy - r * .1); c.rotate(-.15); c.fillStyle = '#1a1a2a';
  c.beginPath(); c.moveTo(-r * .2, r * .02); c.quadraticCurveTo(0, -r * .06, r * .2, r * .02); c.quadraticCurveTo(r * .1, -r * .16, 0, -r * .13); c.quadraticCurveTo(-r * .1, -r * .16, -r * .2, r * .02); c.fill();
  c.strokeStyle = '#f2b705'; c.lineWidth = Math.max(.6, r * .015); c.beginPath(); c.moveTo(-r * .18, r * .01); c.quadraticCurveTo(0, -r * .06, r * .18, r * .01); c.stroke(); c.restore();
  /* pattes quand perché */ if (!fly) { c.strokeStyle = '#3a3a4a'; c.lineWidth = Math.max(.8, r * .025); c.beginPath(); c.moveTo(-r * .03, r * .22); c.lineTo(-r * .04, r * .3); c.moveTo(r * .05, r * .22); c.lineTo(r * .05, r * .3); c.stroke(); }
  c.restore(); }
function bubble(c, r, x, y, q) { const s = q < .12 ? q / .12 : 1, a = q > .8 ? 1 - (q - .8) / .2 : 1; c.save(); c.globalAlpha = a; c.translate(x, y); c.scale(s, s);
  c.fillStyle = '#fff'; c.strokeStyle = '#1a1a2a'; c.lineWidth = Math.max(1, r * .03); c.beginPath(); c.roundRect(-r * .44, -r * .17, r * .88, r * .34, r * .17); c.fill(); c.stroke();
  c.beginPath(); c.moveTo(-r * .26, r * .15); c.lineTo(-r * .38, r * .36); c.lineTo(-r * .1, r * .16); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#fff'; c.fillRect(-r * .27, r * .1, r * .19, r * .07);
  c.font = `${Math.round(r * .24)}px "Lilita One"`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#e8336d'; c.fillText('BOULI !', 0, r * .01); c.restore(); }
const P = { id: 'perroquet', name: 'Perroquet', paint: (c, r, t = 0) => {
  /* 1. coucher de soleil (comme l'Île au trésor) */
  c.save(); c.beginPath(); c.arc(0, 0, r, 0, TAU); c.clip();
  const sky = c.createLinearGradient(0, -r, 0, r * .25); sky.addColorStop(0, '#3a2a6a'); sky.addColorStop(.45, '#c8506a'); sky.addColorStop(.8, '#ff9a5a'); sky.addColorStop(1, '#ffd08a'); c.fillStyle = sky; c.fillRect(-r, -r, r * 2, r * 1.25);
  const sx = -r * .3, hz = r * .25; const g = c.createRadialGradient(sx, hz, 2, sx, hz, r * .9); g.addColorStop(0, 'rgba(255,230,160,0.8)'); g.addColorStop(1, 'rgba(255,160,90,0)'); c.fillStyle = g; c.fillRect(-r, -r, r * 2, r * 2);
  c.fillStyle = '#fff0b8'; c.beginPath(); c.arc(sx, hz, r * .26, Math.PI, TAU); c.fill();
  c.fillStyle = 'rgba(120,50,90,0.45)'; c.beginPath(); c.roundRect(r * .05, -r * .5, r * .55, r * .05, r * .03); c.fill(); c.beginPath(); c.roundRect(-r * .7, -r * .3, r * .4, r * .04, r * .02); c.fill();
  const sea = c.createLinearGradient(0, hz, 0, r); sea.addColorStop(0, '#ff9a6a'); sea.addColorStop(.2, '#3a8ab0'); sea.addColorStop(1, '#14466a'); c.fillStyle = sea; c.fillRect(-r, hz, r * 2, r);
  for (let i = 0; i < 8; i++) { const y = hz + r * .04 + i * r * .08, w = r * (.08 + i * .05); c.fillStyle = `rgba(255,220,160,${(.75 - i * .08).toFixed(3)})`; c.fillRect(sx - w / 2 + Math.sin(t * .1 + i) * r * .02, y, w, Math.max(.8, r * .025)); }
  /* bout de mât d'épave (le perchoir) */
  c.fillStyle = '#4a2e1e'; c.fillRect(r * .3, -r * .02, r * .07, r * 1.1); c.save(); c.translate(r * .33, -r * .01); c.rotate(.06); c.fillRect(-r * .28, -r * .025, r * .5, r * .05); c.restore();
  c.restore();
  /* 2. le perroquet : perché, puis s'envole et fait un tour du ballon */
  const k = t % 300, blink = (t % 170) < 6 ? .15 : 1;
  if (k < 200) { const bob = Math.sin(t * .08) * r * .015; c.save(); c.translate(r * .2, -r * .3 + bob); ara(c, r, .95, 0, 0, blink, false); c.restore(); }
  else { const q = (k - 200) / 100, a = -Math.PI / 2 + q * TAU, x = Math.cos(a) * r * .38 + r * .05 * Math.sin(q * TAU), y = -r * .1 + Math.sin(a) * r * .3, flap = Math.abs(Math.sin(t * .5));
    const take = Math.min(1, q * 6), land = Math.min(1, (1 - q) * 6), px = r * .2 + (x - r * .2) * Math.min(take, land), py = -r * .3 + (y + r * .3) * Math.min(take, land);
    c.save(); c.translate(px, py); if (Math.sin(a + Math.PI / 2) < 0) c.scale(-1, 1); ara(c, r, 1, flap, 0, 1, true); c.restore();
  }
} };
window.PERROQUET_VARIANTS = [P];
})();
