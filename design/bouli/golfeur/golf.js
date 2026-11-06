/* LE GOLFEUR (v2) : petit golfeur chibi au sommet de sa planète-parcours.
   Swing correct (montée côté gauche de l'écran, finish côté droit), la balle fait le tour complet,
   ses yeux la suivent, « ! », TOC sur la tête, la casquette s'envole, il tombe, un « birdie » tourne
   au-dessus de lui, il se relève et la casquette revient. Cycle de 300 images (5 s). */
const GOLFEUR = { id: 'golfeur', theme: 'sport', name: 'Le Golfeur', price: 1800, string: false, gloss: .5, prev: .32, dust: '#7ad46a',
  paint: (c, r, t) => {
    const g = c.createRadialGradient(-r * .3, -r * .35, r * .05, 0, 0, r); g.addColorStop(0, '#b8f59a'); g.addColorStop(.6, '#5cbf4a'); g.addColorStop(1, '#2a7a32');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, r, 0, TAU); c.fill();
    c.save(); clipCircle(c, r);
    c.fillStyle = 'rgba(255,255,255,0.09)'; for (let i = -5; i <= 5; i += 2) { c.save(); c.rotate(-.5); c.fillRect(i * r * .2, -r * 1.5, r * .2, r * 3); c.restore(); }
    c.fillStyle = 'rgba(190,250,150,0.6)'; c.beginPath(); c.ellipse(r * .35, r * .3, r * .32, r * .22, -.3, 0, TAU); c.fill();
    c.fillStyle = '#f2dfa0'; c.beginPath(); c.ellipse(-r * .4, r * .35, r * .28, r * .16, .4, 0, TAU); c.fill();
    c.strokeStyle = 'rgba(180,150,80,0.6)'; c.lineWidth = Math.max(.6, r * .02); c.stroke();
    c.fillStyle = 'rgba(200,170,100,0.5)'; for (let i = 0; i < 8; i++) { c.beginPath(); c.arc(-r * .4 + (h1(i + 5300) - .5) * r * .4, r * .35 + (h1(i + 5330) - .5) * r * .2, Math.max(.5, r * .012), 0, TAU); c.fill(); }
    c.fillStyle = '#4fb3e8'; c.beginPath(); c.ellipse(-r * .15, -r * .3, r * .2, r * .12, -.2, 0, TAU); c.fill(); c.fillStyle = 'rgba(255,255,255,0.45)'; c.beginPath(); c.ellipse(-r * .2, -r * .33, r * .08, r * .025, -.2, 0, TAU); c.fill();
    c.fillStyle = '#1b3a1e'; c.beginPath(); c.ellipse(r * .35, r * .32, r * .05, r * .025, 0, 0, TAU); c.fill();
    c.strokeStyle = '#f4f6fa'; c.lineWidth = Math.max(.8, r * .02); c.beginPath(); c.moveTo(r * .35, r * .32); c.lineTo(r * .35, r * .02); c.stroke();
    c.fillStyle = '#e8333d'; c.beginPath(); c.moveTo(r * .35, r * .02); c.quadraticCurveTo(r * .45, r * .05 + Math.sin(t * .15) * r * .02, r * .53, r * .07); c.lineTo(r * .35, r * .14); c.closePath(); c.fill();
    c.restore();
  },
  after: (c, r, t) => {
    const f = t % 300, u = r * .085, OUT = '#2a2a44', SKIN = '#ffd3b0', POLO = '#ff6b98', PANTS = '#2f4a8a';
    const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
    /* ---------- chronologie ---------- */
    const UP0 = 20, TOP = 60, HIT = 76, FIN = 92, BONK = 192, DOWN = 208, RISE = 262, BACK = 286;
    let th, hinge;                                                    /* th : bras (0 = vers le bas, négatif = vers la gauche) */
    if (f < UP0) { th = Math.sin(f * .5) * .08; hinge = 0; }          /* petite valse avant de frapper */
    else if (f < TOP) { const k = sm((f - UP0) / (TOP - UP0)); th = -1.95 * k; hinge = -.75 * k; }
    else if (f < 66) { th = -1.95; hinge = -.75; }
    else if (f < HIT) { const k = (f - 66) / (HIT - 66); th = -1.95 + 1.95 * k * k; hinge = -.75 * (1 - k); }
    else if (f < FIN) { const k = sm((f - HIT) / (FIN - HIT)); th = 2.0 * k; hinge = .55 * k; }
    else { th = 2.0; hinge = .55; }
    const fall = f < BONK ? 0 : f < DOWN ? sm((f - BONK) / (DOWN - BONK)) : f < RISE ? 1 : f < BACK ? 1 - sm((f - RISE) / (BACK - RISE)) : 0;
    const phi = fall * Math.PI / 2 * .92;                             /* tombe vers la droite (touché à gauche) */
    const rot = (x, y) => [x * Math.cos(phi) - y * Math.sin(phi), x * Math.sin(phi) + y * Math.cos(phi) - r];
    /* ---------- balle ---------- */
    const bs = u * .34, TEE = [u * .12, -u * .3];
    let ball = null, trail = [];
    const orbit = k => { const a = -Math.PI / 2 + .06 + k * (TAU - .06 - .13), R = r + u * .3 + (u * 3.0 - u * .3) * sm(k) + Math.sin(k * Math.PI) * r * .1; return [Math.cos(a) * R, Math.sin(a) * R]; };
    if (f < HIT) { if (f > 3 || f === 0) ball = [TEE[0], TEE[1] - r]; }
    else if (f < BONK) { const k = (f - HIT) / (BONK - HIT); ball = orbit(k); for (let i = 1; i <= 6; i++) trail.push(orbit(Math.max(0, k - i * .012))); }
    else if (f < BONK + 50) { const k = (f - BONK) / 50, s = orbit(1); ball = [s[0] - k * u * 4, s[1] - Math.sin(k * Math.PI) * u * 2.4 + k * k * u * 2]; }
    const ballAlpha = f < 6 ? f / 6 : f >= BONK + 35 ? Math.max(0, 1 - (f - BONK - 35) / 15) : 1;
    /* ---------- tee ---------- */
    c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, u * .08);
    c.beginPath(); c.moveTo(TEE[0] - u * .16, -r - u * .12); c.lineTo(TEE[0] + u * .16, -r - u * .12); c.lineTo(TEE[0] + u * .03, -r + u * .02); c.lineTo(TEE[0] - u * .03, -r + u * .02); c.closePath(); c.fill(); c.stroke();
    /* ---------- casquette envolée ---------- */
    const capOff = f >= BONK && f < BACK, capK = (f - BONK) / 22;
    let capW = null;
    if (capOff) { if (capK < 1) { const h0 = rot(0, -u * 3.9); capW = [h0[0] - capK * u * 2.6, h0[1] - Math.sin(capK * Math.PI) * u * 2.2 + capK * u * 1.2]; capW.push(-capK * 3); }
      else if (f < RISE + 10) capW = [-u * 2.6, -r - u * .35, -.2];
      else { const k = sm((f - RISE - 10) / (BACK - RISE - 10)), h1p = rot(0, -u * 3.9); capW = [-u * 2.6 + (h1p[0] + u * 2.6) * k, -r - u * .35 + (h1p[1] + r + u * .35) * k - Math.sin(k * Math.PI) * u * 2, -.2 * (1 - k)]; } }
    const drawCap = (x, y, a) => { c.save(); c.translate(x, y); c.rotate(a);
      c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.7, u * .1);
      c.beginPath(); c.arc(0, 0, u * .92, Math.PI, 0); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#e8333d'; c.fillRect(-u * .92, -u * .2, u * 1.84, u * .2);
      c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(u * .55, u * .02, u * .62, u * .16, .08, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = '#e8333d'; c.beginPath(); c.arc(0, -u * .92, u * .12, 0, TAU); c.fill(); c.restore(); };
    if (capW && f >= BONK + 22 && f < RISE + 10) drawCap(capW[0], capW[1], capW[2]);
    /* ---------- le golfeur ---------- */
    c.save(); c.translate(0, -r); c.rotate(phi); c.lineJoin = 'round'; c.lineCap = 'round';
    const limb = (a, b, col, w) => { c.strokeStyle = OUT; c.lineWidth = w + Math.max(1, u * .16); c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); };
    /* jambes et chaussures */
    limb([-u * .28, -u * .1], [-u * .22, -u * .95], PANTS, u * .42); limb([u * .28, -u * .1], [u * .22, -u * .95], PANTS, u * .42);
    c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.7, u * .1);
    for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * u * .36, -u * .08, u * .3, u * .14, 0, 0, TAU); c.fill(); c.stroke(); }
    /* club derrière les bras */
    const S = [0, -u * 1.95], d = [Math.sin(th), Math.cos(th)], H = [S[0] + d[0] * u * 1.0, S[1] + d[1] * u * 1.0];
    const dc = [Math.sin(th + hinge), Math.cos(th + hinge)], C = [H[0] + dc[0] * u * 1.05, H[1] + dc[1] * u * 1.05];
    const drawClub = () => {
    c.strokeStyle = OUT; c.lineWidth = Math.max(1, u * .2); c.beginPath(); c.moveTo(H[0], H[1]); c.lineTo(C[0], C[1]); c.stroke();
    c.strokeStyle = '#d6dde8'; c.lineWidth = Math.max(.6, u * .11); c.beginPath(); c.moveTo(H[0], H[1]); c.lineTo(C[0], C[1]); c.stroke();
    c.save(); c.translate(C[0], C[1]); c.rotate(-(th + hinge)); c.fillStyle = '#9aa4b8'; c.strokeStyle = OUT; c.lineWidth = Math.max(.6, u * .08);
    c.beginPath(); c.roundRect(-u * .08, -u * .12, u * .42, u * .22, u * .08); c.fill(); c.stroke(); c.restore(); };
    const front = th > .9 && fall < .2;
    if (!front) drawClub();
    /* polo */
    const pg = c.createLinearGradient(-u * .7, 0, u * .7, 0); pg.addColorStop(0, POLO); pg.addColorStop(1, '#e8336d');
    c.fillStyle = pg; c.strokeStyle = OUT; c.lineWidth = Math.max(.8, u * .12); c.beginPath(); c.roundRect(-u * .62, -u * 2.25, u * 1.24, u * 1.38, u * .38); c.fill(); c.stroke();
    c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(-u * .28, -u * 2.2); c.lineTo(0, -u * 1.95); c.lineTo(u * .28, -u * 2.2); c.closePath(); c.fill();
    /* bras qui se rejoignent sur le grip */
    limb([-u * .42, -u * 2.0], H, POLO, u * .32); limb([u * .42, -u * 2.0], H, POLO, u * .32);
    c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.6, u * .1); c.beginPath(); c.arc(H[0], H[1], u * .22, 0, TAU); c.fill(); c.stroke();
    if (front) drawClub();
    /* tête (grosse, mignonne) */
    const HC = [0, -u * 3.1], HR = u * .95;
    c.fillStyle = SKIN; c.strokeStyle = OUT; c.lineWidth = Math.max(.8, u * .12); c.beginPath(); c.arc(HC[0], HC[1], HR, 0, TAU); c.fill(); c.stroke();
    c.fillStyle = 'rgba(255,120,140,0.45)'; for (const sx of [-1, 1]) { c.beginPath(); c.ellipse(sx * u * .52, HC[1] + u * .3, u * .18, u * .11, 0, 0, TAU); c.fill(); }
    /* yeux qui suivent la balle */
    const ko = fall > .35;
    let lx = 0, ly = 0;
    if (ball && !ko) { const hw = [HC[0], HC[1] - r], dx = ball[0] - hw[0], dy = ball[1] - hw[1], n = Math.hypot(dx, dy) || 1; lx = dx / n; ly = dy / n; }
    else if (!ko && f < HIT) { lx = .2; ly = .9; }
    for (const sx of [-1, 1]) { const ex = sx * u * .33, ey = HC[1] + u * .02;
      if (ko) { c.strokeStyle = OUT; c.lineWidth = Math.max(.7, u * .1); c.beginPath(); c.moveTo(ex - u * .12, ey - u * .12); c.lineTo(ex + u * .12, ey + u * .12); c.moveTo(ex + u * .12, ey - u * .12); c.lineTo(ex - u * .12, ey + u * .12); c.stroke(); }
      else { c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(ex, ey, u * .2, u * .24, 0, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = Math.max(.5, u * .06); c.stroke();
        c.fillStyle = OUT; c.beginPath(); c.arc(ex + lx * u * .08, ey + ly * u * .1, u * .12, 0, TAU); c.fill();
        c.fillStyle = '#ffffff'; c.beginPath(); c.arc(ex + lx * u * .08 - u * .04, ey + ly * u * .1 - u * .05, u * .04, 0, TAU); c.fill(); } }
    /* bouche */
    const worried = f > BONK - 22 && f < BONK;
    c.strokeStyle = OUT; c.fillStyle = OUT; c.lineWidth = Math.max(.6, u * .08);
    if (worried) { c.beginPath(); c.ellipse(0, HC[1] + u * .48, u * .11, u * .14, 0, 0, TAU); c.fill(); }
    else if (ko) { c.beginPath(); for (let i = 0; i <= 6; i++) c.lineTo(-u * .2 + i * u * .067, HC[1] + u * .5 + (i % 2 ? u * .05 : -u * .03)); c.stroke(); }
    else { c.beginPath(); c.arc(0, HC[1] + u * .32, u * .18, .25 * Math.PI, .75 * Math.PI); c.stroke(); }
    if (!capOff) drawCap(HC[0], HC[1] - u * .25, 0);
    c.restore();
    /* casquette en vol (devant le reste) */
    if (capW && f < BONK + 22) drawCap(capW[0], capW[1], capW[2]);
    if (capW && f >= RISE + 10) drawCap(capW[0], capW[1], capW[2]);
    /* ---------- balle et traînée ---------- */
    trail.forEach((p, i) => { c.fillStyle = `rgba(255,255,255,${(.35 * (1 - i / 7)).toFixed(3)})`; c.beginPath(); c.arc(p[0], p[1], bs * (1 - i / 9), 0, TAU); c.fill(); });
    if (ball && ballAlpha > 0) { c.save(); c.globalAlpha = ballAlpha; c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, bs * .14); c.beginPath(); c.arc(ball[0], ball[1], bs, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = 'rgba(42,42,68,0.22)'; for (const [dx, dy] of [[-.3, -.2], [.2, -.3], [0, .1], [.35, .2], [-.25, .3]]) { c.beginPath(); c.arc(ball[0] + dx * bs, ball[1] + dy * bs, bs * .13, 0, TAU); c.fill(); } c.restore(); }
    /* ---------- « ! » ---------- */
    if (worried) { const k = (f - (BONK - 22)) / 22, s = .8 + Math.sin(Math.min(1, k * 3) * Math.PI / 2) * .4;
      c.save(); c.translate(u * .2, -r - u * 4.9); c.scale(s, s); c.fillStyle = '#ffd23f'; c.strokeStyle = OUT; c.lineWidth = Math.max(.8, u * .12);
      c.beginPath(); c.roundRect(-u * .18, -u * .9, u * .36, u * .7, u * .16); c.fill(); c.stroke(); c.beginPath(); c.arc(0, u * .05, u * .18, 0, TAU); c.fill(); c.stroke(); c.restore(); }
    /* ---------- impact ---------- */
    if (f >= BONK && f < BONK + 14) { const k = (f - BONK) / 14, p = orbit(1);
      c.save(); c.translate(p[0], p[1]); c.globalAlpha = 1 - k; c.fillStyle = '#fff6c8'; c.strokeStyle = '#ffb000'; c.lineWidth = Math.max(.8, u * .12);
      c.beginPath(); for (let i = 0; i < 12; i++) { const a = i * TAU / 12, rr = (i % 2 ? .5 : 1.1) * u * (1 + k); c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fill(); c.stroke(); c.restore(); }
    /* ---------- « birdie » qui tourne au-dessus de sa tête ---------- */
    if (fall > .85) { const hp = rot(0, -u * 3.1), a = t * .1, bx = hp[0] + Math.cos(a) * u * 1.4, by = hp[1] - u * 1.6 + Math.sin(a) * u * .35, fl = Math.sin(t * .6);
      c.save(); c.translate(bx, by); c.scale((Math.cos(a) > 0 ? -1 : 1) * 1.6, 1.6);
      c.fillStyle = '#5fb8f0'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, u * .07);
      c.beginPath(); c.arc(0, 0, u * .32, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = '#a8dcff'; c.beginPath(); c.ellipse(-u * .05, -u * .05 - fl * u * .12, u * .22, u * .1, -.4 - fl * .5, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = '#ffb000'; c.beginPath(); c.moveTo(u * .28, -u * .02); c.lineTo(u * .46, u * .04); c.lineTo(u * .28, u * .1); c.closePath(); c.fill();
      c.fillStyle = OUT; c.beginPath(); c.arc(u * .12, -u * .08, u * .05, 0, TAU); c.fill(); c.restore(); }
  } };
