/* Le Reflet en verre : ton propre ballon, argenté, moqueur, qui se fissure. Dessiné centré en (0,0), à l'endroit (écran). */
window.GB = (() => {
  const TAU = Math.PI * 2;
  const h1 = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const cache = {};
  function glassSprite(skin, r, t) {
    const S = Math.ceil(r * 2.6), cv = document.createElement('canvas'); cv.width = cv.height = S * 2; const o = cv.getContext('2d');
    o.setTransform(2, 0, 0, 2, S, S);
    window.__DBG.paintSkin(o, skin, r, t);
    const mask = document.createElement('canvas'); mask.width = mask.height = S * 2; mask.getContext('2d').drawImage(cv, 0, 0);
    /* on enlève la couleur : le skin devient de l'argent (puis on recoupe à la forme du ballon) */
    o.save(); o.setTransform(1, 0, 0, 1, 0, 0);
    o.globalCompositeOperation = 'saturation'; o.fillStyle = 'rgb(128,128,128)'; o.fillRect(0, 0, S * 2, S * 2);
    o.globalCompositeOperation = 'soft-light'; o.fillStyle = 'rgba(255,255,255,0.55)'; o.fillRect(0, 0, S * 2, S * 2);
    o.globalCompositeOperation = 'destination-in'; o.drawImage(mask, 0, 0); o.restore();
    o.globalCompositeOperation = 'source-atop';
    let g = o.createLinearGradient(0, -r, 0, r); g.addColorStop(0, 'rgba(255,255,255,0.7)'); g.addColorStop(.36, 'rgba(225,232,255,0.42)'); g.addColorStop(.58, 'rgba(150,140,235,0.4)'); g.addColorStop(1, 'rgba(110,80,220,0.55)');
    o.fillStyle = g; o.fillRect(-r * 1.3, -r * 1.3, r * 2.6, r * 2.6);
    /* le monde qui s'y reflète : un horizon courbé et un ciel clair en haut */
    o.fillStyle = 'rgba(70,50,170,0.25)'; o.beginPath(); o.ellipse(0, r * .55, r * 1.3, r * .62, 0, Math.PI, TAU); o.lineTo(r * 1.3, r * 1.3); o.lineTo(-r * 1.3, r * 1.3); o.fill();
    o.fillStyle = 'rgba(255,255,255,0.35)'; o.beginPath(); o.ellipse(-r * .1, -r * .78, r * .75, r * .3, 0, 0, TAU); o.fill();
    o.globalCompositeOperation = 'source-over';
    return cv;
  }
  function cracksPath(c, r, lvl, seed) {
    /* fissures qui partent d'un point d'impact (en haut à droite), plus nombreuses à chaque phase */
    const ix = r * .38, iy = -r * .3, n = [0, 5, 9, 14][lvl];
    const segs = [];
    for (let i = 0; i < n; i++) { let a = i / n * TAU + h1(seed + i) * .5, x = ix, y = iy; const pts = [[x, y]]; const L = r * (.45 + h1(seed + i * 3) * .9);
      for (let s = 0; s < 4; s++) { a += (h1(seed + i * 7 + s) - .5) * .9; x += Math.cos(a) * L / 4; y += Math.sin(a) * L / 4; pts.push([x, y]); }
      segs.push(pts); }
    return { segs, ix, iy };
  }
  function face(c, r, mood, t) {
    const blink = (t % 210) > 202;
    const ey = -r * .1, ex = r * .3, ew = r * .2, eh = r * .22;
    for (const sd of [-1, 1]) {
      c.save(); c.translate(sd * ex, ey);
      /* œil en amande, paupière mi-close du côté moqueur */
      c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(0, 0, ew, blink ? eh * .12 : eh, 0, 0, TAU); c.fill();
      if (!blink) { const ig = c.createRadialGradient(-ew * .2, -eh * .3, 1, 0, 0, ew * .7); ig.addColorStop(0, '#c9a8ff'); ig.addColorStop(1, '#5a2fc0');
        const lx = mood === 'hurt' ? 0 : ew * .28; c.fillStyle = ig; c.beginPath(); c.arc(lx, eh * .15, ew * .62, 0, TAU); c.fill();
        c.fillStyle = '#1e0f4a'; c.beginPath(); c.arc(lx, eh * .18, ew * .3, 0, TAU); c.fill();
        c.fillStyle = '#fff'; c.beginPath(); c.arc(lx - ew * .2, -eh * .05, ew * .16, 0, TAU); c.fill();
        /* paupière lilas (couleur du verre, pas de contour sombre) */
        const lid = mood === 'angry' ? .62 : mood === 'hurt' ? .2 : sd > 0 ? .5 : .34;
        c.fillStyle = '#b8b0ea'; c.beginPath(); c.ellipse(0, 0, ew * 1.05, eh * 1.05, 0, Math.PI, TAU); c.lineTo(ew * 1.05, -eh * 1.05 + eh * 2.1 * lid); c.lineTo(-ew * 1.05, -eh * 1.05 + eh * 2.1 * lid); c.closePath();
        c.save(); c.beginPath(); c.ellipse(0, 0, ew * 1.02, eh * 1.02, 0, 0, TAU); c.clip(); c.fillRect(-ew * 1.1, -eh * 1.2, ew * 2.2, eh * 2.2 * lid); c.restore(); }
      /* sourcil : un seul relevé (le sourire en coin) */
      c.strokeStyle = '#4a2aa8'; c.lineCap = 'round'; c.lineWidth = r * .05;
      const up = mood === 'angry' ? (sd > 0 ? .1 : .1) : sd > 0 ? -.28 : 0, tilt = mood === 'angry' ? -sd * .35 : mood === 'hurt' ? sd * .3 : sd > 0 ? -.15 : .1;
      c.beginPath(); c.moveTo(-ew * .9, -eh * 1.45 + up * eh + tilt * eh * sd); c.quadraticCurveTo(0, -eh * 1.85 + up * eh, ew * .9, -eh * 1.45 + up * eh - tilt * eh * sd); c.stroke();
      c.restore();
    }
    /* bouche : sourire en coin, avec une petite dent */
    c.save(); c.translate(r * .04, r * .3);
    if (mood === 'hurt') { c.fillStyle = '#4a2aa8'; c.beginPath(); c.ellipse(0, r * .02, r * .1, r * .08, 0, 0, TAU); c.fill(); }
    else {
      const w = r * (mood === 'angry' ? .3 : .34);
      c.fillStyle = '#3a1f8a'; c.beginPath(); c.moveTo(-w, -r * .02); c.quadraticCurveTo(-w * .1, r * .07, w, -r * .12); c.quadraticCurveTo(w * .2, r * .2, -w, -r * .02); c.fill();
      c.fillStyle = '#fff'; c.beginPath(); c.moveTo(w * .25, -r * .045); c.lineTo(w * .55, -r * .075); c.lineTo(w * .42, r * .03); c.closePath(); c.fill();
      c.fillStyle = 'rgba(255,170,220,0.6)'; c.beginPath(); c.ellipse(w * .05, r * .07, w * .32, r * .035, -.15, 0, TAU); c.fill(); }
    c.restore();
  }
  /* dessin complet. o = { t, crack: 0..3, mood, shatter: 0..1 (éclats qui s'écartent), alpha } */
  function draw(c, skin, r, o = {}) {
    const t = o.t || 0, key = skin.id + ':' + r; const sp = cache[key] || (cache[key] = glassSprite(skin, r, 0)); const S = sp.width / 2;
    const cr = cracksPath(c, r, o.crack || 0, 3);
    const body = (cc) => {
      cc.drawImage(sp, -S / 2, -S / 2, S, S);
      cc.save(); cc.beginPath(); cc.arc(0, 0, r, 0, TAU); cc.clip();
      /* reflet qui balaie le verre */
      const sw = ((t * 1.4) % (r * 6)) - r * 3; cc.fillStyle = 'rgba(255,255,255,0.5)'; cc.beginPath(); cc.moveTo(sw - r * .35, -r); cc.lineTo(sw + r * .05, -r); cc.lineTo(sw - r * .55, r); cc.lineTo(sw - r * .95, r); cc.closePath(); cc.fill();
      cc.fillStyle = 'rgba(255,255,255,0.25)'; cc.beginPath(); cc.moveTo(sw + r * .2, -r); cc.lineTo(sw + r * .32, -r); cc.lineTo(sw - r * .28, r); cc.lineTo(sw - r * .4, r); cc.closePath(); cc.fill();
      face(cc, r, o.mood || 'smirk', t);
      /* fissures : trait blanc + ombre lilas décalée, et éclats manquants à la phase 3 */
      for (const pts of cr.segs) { for (const [col, dx, lw] of [['rgba(70,50,170,0.55)', 1.2, r * .03], ['rgba(255,255,255,0.95)', 0, r * .02]]) { cc.strokeStyle = col; cc.lineWidth = lw; cc.lineJoin = 'round'; cc.beginPath(); pts.forEach(([x, y], i) => i ? cc.lineTo(x + dx, y + dx) : cc.moveTo(x + dx, y + dx)); cc.stroke(); } }
      cc.restore();
      /* bord du verre : liseré clair (pas de contour sombre) */
      const rg = cc.createLinearGradient(-r, -r, r, r); rg.addColorStop(0, 'rgba(255,255,255,0.95)'); rg.addColorStop(.5, 'rgba(200,190,255,0.5)'); rg.addColorStop(1, 'rgba(160,140,255,0.8)');
      cc.strokeStyle = rg; cc.lineWidth = r * .045; cc.beginPath(); cc.arc(0, 0, r * .985, 0, TAU); cc.stroke();
    };
    c.save(); if (o.alpha != null) c.globalAlpha = o.alpha;
    /* halo argenté */
    if (!o.shatter || o.shatter < .15) { const hk = o.shatter ? 1 - o.shatter / .15 : 1; c.globalAlpha *= hk;
    const hg = c.createRadialGradient(0, 0, r * .9, 0, 0, r * 1.5); hg.addColorStop(0, 'rgba(210,200,255,0.35)'); hg.addColorStop(1, 'rgba(210,200,255,0)'); c.fillStyle = hg; c.beginPath(); c.arc(0, 0, r * 1.5, 0, TAU); c.fill(); c.globalAlpha /= hk || 1; }
    if (!o.shatter) body(c);
    else {
      /* le verre se brise : des morceaux en éventail qui s'écartent et tournent */
      const k = o.shatter, N = 13;
      const off = document.createElement('canvas'); off.width = off.height = Math.ceil(r * 2.4) * 2; const oc = off.getContext('2d'); oc.setTransform(2, 0, 0, 2, off.width / 2, off.height / 2); body(oc);
      for (let i = 0; i < N; i++) { const a0 = i / N * TAU + h1(i) * .2, a1 = (i + 1) / N * TAU + h1(i + 1) * .2, am = (a0 + a1) / 2, ring = i % 2 ? .55 : 0;
        c.save(); const d = k * r * (1.2 + h1(i * 5) * 1.6); c.translate(Math.cos(am) * d, Math.sin(am) * d + k * k * r * .6); c.rotate((h1(i * 9) - .5) * k * 3);
        c.beginPath(); c.moveTo(Math.cos(am) * r * ring, Math.sin(am) * r * ring); c.arc(0, 0, r * 1.02, a0, a1); c.closePath(); c.clip();
        c.drawImage(off, -off.width / 4, -off.height / 4, off.width / 2, off.height / 2);
        c.strokeStyle = 'rgba(255,255,255,0.8)'; c.lineWidth = 1.2; c.stroke(); c.restore(); }
    }
    c.restore();
  }
  function sparkle(c, x, y, s, a = 1) { c.save(); c.globalAlpha = a; c.fillStyle = '#fff'; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s * .22, y - s * .22); c.lineTo(x + s, y); c.lineTo(x + s * .22, y + s * .22); c.lineTo(x, y + s); c.lineTo(x - s * .22, y + s * .22); c.lineTo(x - s, y); c.lineTo(x - s * .22, y - s * .22); c.closePath(); c.fill(); c.restore(); }
  return { draw, sparkle, h1 };
})();
