window.SC = (() => {
  const TAU = Math.PI * 2, W = 390, H = 844, PXL = 250, PYL = 196; /* plateforme du décor de nuit */
  const SK = id => window.__DBG.SKINS.find(s => s.id === id);
  const mk = () => { const cv = document.createElement('canvas'); cv.width = W * 2; cv.height = H * 2; const c = cv.getContext('2d'); c.setTransform(2, 0, 0, 2, 0, 0); return [cv, c]; };
  function ball(c, skin, x, y, r, t, a = 1) { c.save(); c.globalAlpha = a; c.translate(x, y);
    c.strokeStyle = 'rgba(255,255,255,0.45)'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(0, r); c.quadraticCurveTo(r * .2, r * 1.3, -r * .05, r * 1.55); c.stroke();
    window.__DBG.paintSkin(c, skin, r, t); c.restore(); }
  function boss(c, skin, x, y, r, o) { c.save(); c.translate(x, y); GB.draw(c, skin, r, o); c.restore(); }
  function caption(c, title, sub) { c.save(); c.font = '24px "Lilita One"'; let w = c.measureText(title).width + 40; if (sub) { c.font = '800 13px Nunito'; w = Math.max(w, c.measureText(sub).width + 40); c.font = '24px "Lilita One"'; } c.fillStyle = 'rgba(20,12,60,0.72)'; c.beginPath(); c.roundRect(W / 2 - w / 2, H - 112, w, sub ? 70 : 48, 22); c.fill();
    c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(title, W / 2, H - 88); if (sub) { c.font = '800 13px Nunito'; c.globalAlpha = .85; c.fillText(sub, W / 2, H - 60); } c.restore(); }
  function arrow(c, x0, y0, x1, y1, col = 'rgba(255,255,255,0.85)') { c.save(); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = 3; c.lineCap = 'round'; c.setLineDash([2, 8]); c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); c.setLineDash([]);
    const a = Math.atan2(y1 - y0, x1 - x0); c.beginPath(); c.moveTo(x1 + Math.cos(a) * 4, y1 + Math.sin(a) * 4); c.lineTo(x1 - Math.cos(a - .5) * 12, y1 - Math.sin(a - .5) * 12); c.lineTo(x1 - Math.cos(a + .5) * 12, y1 - Math.sin(a + .5) * 12); c.closePath(); c.fill(); c.restore(); }
  function lantern(c, ax, ay, len, th, t) { const bx = ax + len * Math.sin(th), by = ay + len * Math.cos(th);
    c.save(); c.strokeStyle = 'rgba(200,180,240,0.7)'; c.lineWidth = 2; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, by); c.stroke();
    c.translate(bx, by); c.rotate(-th); c.scale(1.7, 1.7); c.translate(0, -2);
    const halo = c.createRadialGradient(0, 18, 4, 0, 18, 70); halo.addColorStop(0, 'rgba(255,190,90,0.5)'); halo.addColorStop(1, 'rgba(255,190,90,0)'); c.fillStyle = halo; c.beginPath(); c.arc(0, 18, 70, 0, TAU); c.fill();
    const cap = (y, w) => { const gg = c.createLinearGradient(-w, 0, w, 0); gg.addColorStop(0, '#ffe08a'); gg.addColorStop(.4, '#f5b83a'); gg.addColorStop(1, '#b97a14'); c.fillStyle = gg; c.beginPath(); c.roundRect(-w, y - 3.5, w * 2, 7, 3.5); c.fill(); };
    const body = c.createRadialGradient(-6, 10, 2, 0, 18, 24); body.addColorStop(0, '#ffe9a8'); body.addColorStop(.35, '#ff9a4a'); body.addColorStop(.8, '#e9483a'); body.addColorStop(1, '#b62a34');
    c.fillStyle = body; c.beginPath(); c.ellipse(0, 18, 17, 16, 0, 0, TAU); c.fill(); c.fillStyle = 'rgba(255,255,255,0.55)'; c.beginPath(); c.ellipse(-7, 11, 4, 6.5, -.4, 0, TAU); c.fill();
    cap(2.5, 9); cap(33.5, 8); c.strokeStyle = '#f5b83a'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, 37); c.lineTo(0, 46); c.stroke(); c.fillStyle = '#e9483a'; c.beginPath(); c.ellipse(0, 50, 3.5, 6, 0, 0, TAU); c.fill(); c.restore(); return [bx, by]; }
  function shardPiece(c, x, y, s, a) { c.save(); c.translate(x, y); c.rotate(a); c.scale(s, s);
    const glow = c.createRadialGradient(0, 0, 3, 0, 0, 26); glow.addColorStop(0, 'rgba(190,240,255,0.55)'); glow.addColorStop(1, 'rgba(190,240,255,0)'); c.fillStyle = glow; c.beginPath(); c.arc(0, 0, 26, 0, TAU); c.fill();
    const g = c.createLinearGradient(-10, -14, 10, 14); g.addColorStop(0, '#ffffff'); g.addColorStop(.45, '#cfe6ff'); g.addColorStop(1, '#7a6ae0'); c.fillStyle = g;
    c.beginPath(); c.moveTo(0, -16); c.lineTo(10, -2); c.lineTo(4, 14); c.lineTo(-8, 6); c.lineTo(-8, -6); c.closePath(); c.fill();
    c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.moveTo(-1, -12); c.lineTo(-5, -3); c.lineTo(-1, -4); c.closePath(); c.fill(); c.restore(); }
  const skin = () => SK(window.__SKIN || 'classic');
  const S = {
    copie(t) { const [cv, c] = mk(); const sk = skin();
      /* l'axe du miroir passe par la plateforme */
      c.save(); c.strokeStyle = 'rgba(255,255,255,0.35)'; c.setLineDash([3, 9]); c.lineWidth = 2; c.beginPath(); c.moveTo(PXL, PYL + 30); c.lineTo(PXL, 700); c.stroke(); c.restore();
      /* ton ballon est allé à gauche (fantôme), le Reflet est parti à droite… */
      ball(c, sk, 160, 650, 40, t, .3); boss(c, sk, 340, 430, 52, { t, crack: 0, mood: 'smirk', alpha: .3 });
      arrow(c, 175, 600, 236, 600); arrow(c, 326, 470, 312, 452, 'rgba(210,200,255,0.9)');
      /* …puis tu reviens sous la plateforme et tu lâches : il arrive trop tard */
      ball(c, sk, PXL, 560, 40, t); boss(c, sk, 318, 430, 52, { t, crack: 0, mood: 'angry' });
      GB.sparkle(c, PXL - 30, 520, 7); caption(c, '1 · Je te copie', 'Il se place à l’opposé de ton ballon : feinte, puis lâche'); return cv; },
    eclipse(t) { const [cv, c] = mk(); const sk = skin();
      /* tout devient noir : seuls le ballon, les lanternes et le Reflet brillent */
      const L1 = lantern(c, 110, 90, 190, .12, t), L2 = lantern(c, 330, 90, 250, -.16, t);
      const dk = document.createElement('canvas'); dk.width = W * 2; dk.height = H * 2; const o = dk.getContext('2d'); o.setTransform(2, 0, 0, 2, 0, 0);
      o.fillStyle = 'rgba(8,6,30,0.9)'; o.fillRect(0, 0, W, H); o.globalCompositeOperation = 'destination-out';
      const hole = (x, y, r) => { const g = o.createRadialGradient(x, y, r * .15, x, y, r); g.addColorStop(0, 'rgba(0,0,0,0.95)'); g.addColorStop(1, 'rgba(0,0,0,0)'); o.fillStyle = g; o.beginPath(); o.arc(x, y, r, 0, TAU); o.fill(); };
      hole(200, 680, 90); hole(L1[0], L1[1] + 20, 85); hole(L2[0], L2[1] + 20, 85); hole(215, 430, 110);
      c.save(); c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(dk, 0, 0); c.restore();
      lantern(c, 110, 90, 190, .12, t); lantern(c, 330, 90, 250, -.16, t);
      /* la lune avalée : un croissant qui disparaît dans le Reflet */
      boss(c, sk, 215, 430, 56, { t, crack: 1, mood: 'smirk' });
      ball(c, sk, 200, 680, 40, t); caption(c, '2 · L’éclipse', 'Il avale la lune et lâche des lanternes'); return cv; },
    eclats(t) { const [cv, c] = mk(); const sk = skin();
      boss(c, sk, 110, 330, 54, { t, crack: 2, mood: 'angry' });
      /* trajectoires annoncées : les éclats rebondissent sur les bords */
      const paths = [[[140, 360], [390, 520], [230, 640]], [[90, 370], [0, 470], [160, 600]], [[150, 320], [390, 380], [300, 420]]];
      for (const P of paths) { c.save(); c.strokeStyle = 'rgba(200,235,255,0.55)'; c.lineWidth = 2.5; c.setLineDash([2, 9]); c.lineCap = 'round'; c.beginPath(); P.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.stroke(); c.restore();
        GB.sparkle(c, P[1][0] ? Math.min(380, P[1][0]) : 10, P[1][1], 9, .9); }
      shardPiece(c, 260, 446, 1.3, 1.1); shardPiece(c, 40, 440, 1.3, -.6); shardPiece(c, 300, 365, 1.1, .3);
      ball(c, sk, 230, 690, 40, t); caption(c, '3 · Les éclats', 'Des éclats qui rebondissent sur les bords'); return cv; },
    defaite(t) { const [cv, c] = mk(); const sk = skin();
      /* il éclate en paillettes… il reste un tout petit reflet qui fait coucou */
      for (let i = 0; i < 90; i++) { const a = GB.h1(i) * TAU, d = 30 + GB.h1(i * 3) * 150, x = 195 + Math.cos(a) * d, y = 400 + Math.sin(a) * d * .9 + GB.h1(i * 5) * 40;
        const col = ['#ffffff', '#d8ccff', '#bfe9ff', '#ffd6f0'][i % 4]; if (i % 3) { c.fillStyle = col; c.save(); c.translate(x, y); c.rotate(a); c.fillRect(-3, -1.5, 6, 3); c.restore(); } else GB.sparkle(c, x, y, 3 + GB.h1(i * 7) * 5, .95); }
      boss(c, sk, 195, 410, 13, { t, crack: 0, mood: 'smirk' });
      c.save(); c.translate(212, 398); c.rotate(-.5 + Math.sin(t * .3) * .3); c.fillStyle = '#d8d4ff'; c.beginPath(); c.ellipse(0, -6, 3.2, 6, 0, 0, TAU); c.fill(); c.restore();
      c.font = '20px "Lilita One"'; c.fillStyle = '#fff'; c.textAlign = 'center'; c.fillText('coucou !', 195, 372);
      ball(c, sk, PXL, 250, 34, t); caption(c, 'Défaite', 'Mille paillettes… et un petit reflet qui fait coucou'); return cv; },
  };
  /* le Reflet seul, avec un skin, une phase de fissure et une humeur (pour la planche) */
  function sprite(id, r, crack, mood, t, shatter) { const cv = document.createElement('canvas'); cv.width = cv.height = r * 9; const c = cv.getContext('2d'); c.setTransform(2, 0, 0, 2, r * 4.5, r * 4.5); GB.draw(c, SK(id), r, { t, crack, mood, shatter }); return cv; }
  /* GIF : transition (choc, éclats, recollage) puis défaite (paillettes, petit coucou) */
  function gif(i) { const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d'); const sk = skin(), X = 195, Y = 420, r = 62;
    const ez = k => k * k * (3 - 2 * k), t = i * 2;
    if (i < 24) boss(c, sk, X + Math.sin(i * .15) * 6, Y, r, { t, crack: 0, mood: 'smirk' });
    else if (i < 30) { boss(c, sk, X + (i % 2 ? 4 : -4), Y, r, { t, crack: 0, mood: 'hurt' }); c.fillStyle = 'rgba(255,255,255,' + (.6 - (i - 24) * .1) + ')'; c.beginPath(); c.arc(X, Y, r * 1.2, 0, TAU); c.fill(); }
    else if (i < 52) boss(c, sk, X, Y, r, { t, crack: 1, mood: 'hurt', shatter: ez(Math.min(1, (i - 30) / 16)) });
    else if (i < 76) { const k = 1 - ez(Math.min(1, (i - 52) / 22)); boss(c, sk, X, Y, r, { t, crack: 1, mood: 'angry', shatter: Math.max(.001, k) }); if (k < .05) for (let j = 0; j < 6; j++) GB.sparkle(c, X + Math.cos(j) * r * 1.1, Y + Math.sin(j) * r * 1.1, 6, .8); }
    else if (i < 104) boss(c, sk, X + Math.sin(i * .2) * 8, Y, r, { t, crack: 1, mood: 'angry' });
    else { const k = (i - 104) / 26; /* défaite */
      if (k < 1) boss(c, sk, X, Y, r, { t, crack: 2, mood: 'hurt', shatter: Math.max(.001, ez(Math.min(1, k)) * 1.6), alpha: 1 - Math.max(0, k - .5) * 2 });
      const n = Math.min(90, (i - 104) * 6); for (let j = 0; j < n; j++) { const a = GB.h1(j) * TAU, sp = 1.2 + GB.h1(j * 3) * 3.2, age = (i - 104) - j / 6, dd = age * sp * (1 - age / 140);
        if (age <= 0) continue; const x = X + Math.cos(a) * dd * 2, y = Y + Math.sin(a) * dd * 1.8 + age * age * .02, al = Math.max(0, 1 - age / 90);
        if (j % 3) { c.fillStyle = ['#ffffff', '#d8ccff', '#bfe9ff', '#ffd6f0'][j % 4]; c.globalAlpha = al; c.save(); c.translate(x, y); c.rotate(a + age * .2); c.fillRect(-3, -1.5, 6, 3); c.restore(); c.globalAlpha = 1; } else GB.sparkle(c, x, y, 3 + GB.h1(j * 7) * 4 * (.6 + .4 * Math.sin(age * .5)), al); }
      if (i > 128) { const q = Math.min(1, (i - 128) / 10), out = i > 168 ? Math.min(1, (i - 168) / 10) : 0;
        boss(c, sk, X, Y - 10, 13 * q, { t, crack: 0, mood: 'smirk', alpha: 1 - out });
        if (q >= 1 && !out) { c.save(); c.translate(X + 17, Y - 22); c.rotate(-.5 + Math.sin(i * .5) * .45); c.fillStyle = '#d8d4ff'; c.beginPath(); c.ellipse(0, -6, 3.2, 6, 0, 0, TAU); c.fill(); c.restore();
          c.font = '20px "Lilita One"'; c.fillStyle = '#fff'; c.textAlign = 'center'; c.fillText('coucou !', X, Y - 46); }
        if (out) for (let j = 0; j < 5; j++) GB.sparkle(c, X + (GB.h1(j + 40) - .5) * 40 * out, Y - 10 + (GB.h1(j + 50) - .5) * 40 * out, 5 * (1 - out) + 1, 1 - out); } }
    return cv; }
  return { S, sprite, mk, boss, ball, SK, gif };
})();
