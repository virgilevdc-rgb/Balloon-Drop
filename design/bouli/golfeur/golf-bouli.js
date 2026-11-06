/* LE GOLFEUR (v3, avec Bouli) : Bouli, casquette de golf sur ses lunettes d'aviateur, frappe la balle,
   la regarde faire le tour de la planète, « ! », TOC, la casquette s'envole, il roule sur le dos (pattes en l'air),
   un birdie tourne au-dessus de lui, il se relève d'un bond et la casquette lui retombe sur la tête. 300 images. */
const GOLFBOULI = { id: 'golfeur', theme: 'sport', name: 'Le Golfeur', price: 1800, string: false, gloss: .5, prev: .32, dust: '#7ad46a',
  paint: GOLFEUR.paint,
  after: (c, r, t) => {
    const f = t % 300, u = r * .125, hr = u * 1.6, OUT = MO;
    const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
    const mix = (a, b, k) => a + (b - a) * k;
    /* ---------- chronologie ---------- */
    const UP0 = 20, TOP = 58, HIT = 72, FIN = 84, REST = 104, WARN = 168, BONK = 192, DOWN = 204, RISE = 258, BACK = 284;
    /* prise à deux moufles : la prise suit une ellipse devant le ventre ; club (cA) */
    const bs = u * .3, TEE = [u * 1.6, -u * .42];
    const GRX = u * 1.75, GRY = u * .82, gripAt = ps => [Math.cos(ps) * GRX, -u * 1.38 + Math.sin(ps) * GRY];
    const PA = Math.PI / 2, PT = Math.PI * 1.1, PF = -Math.PI * .12, GA = gripAt(PA), TG = [TEE[0] - bs * 1.1, TEE[1] + bs * .2];
    const CA0 = Math.atan2(TG[1] - GA[1], TG[0] - GA[0]), CL = Math.hypot(TG[1] - GA[1], TG[0] - GA[0]), CTOP = 4.35, CFIN = -1.2;
    const OA = CA0 - PA, OT = CTOP - PT, OF = CFIN - PF;            /* angle du club par rapport à la prise (poignets cassés) */
    const pose = ff => {
      if (ff < UP0) return [PA + Math.sin(ff * .45) * .05, CA0 + Math.sin(ff * .45) * .08];
      if (ff < TOP) { const k = sm((ff - UP0) / (TOP - UP0)), p = mix(PA, PT, k); return [p, p + mix(OA, OT, k * k)]; }
      if (ff < 63) return [PT, CTOP];
      if (ff < HIT) { const e = ((ff - 63) / (HIT - 63)) ** 2, p = mix(PT, PA, e); return [p, p + mix(OT, OA, Math.sqrt(e))]; }
      if (ff < FIN) { const k = sm((ff - HIT) / (FIN - HIT)), p = mix(PA, PF, k); return [p, p + mix(OA, OF, k)]; }
      if (ff < FIN + 8) return [PF, CFIN];
      if (ff < REST) { const k = sm((ff - FIN - 8) / (REST - FIN - 8)); return [mix(PF, .05, k), mix(CFIN, Math.PI / 2, k)]; }
      return [.05, Math.PI / 2 + Math.sin(ff * .05) * .03]; };
    const [ps, cA] = pose(f);
    const G = gripAt(ps), rest = f >= FIN + 8, gripFront = rest || G[1] > -u * .8, clubBack = !gripFront;
    /* chute : pivot au bas du corps, à droite (il roule sur le dos) */
    const fall = f < BONK ? 0 : f < DOWN ? sm((f - BONK) / (DOWN - BONK)) : f < RISE ? 1 : f < BACK ? 1 - sm((f - RISE) / (BACK - RISE)) : 0;
    const settle = f >= DOWN && f < DOWN + 18 ? Math.sin((f - DOWN) / 18 * Math.PI * 2) * .1 * (1 - (f - DOWN) / 18) : 0;
    const phi = fall * 1.62 + settle, PX = hr * .95, PY = -u * .15;
    const rot = (x, y) => { const dx = x - PX, dy = y - PY; return [PX + dx * Math.cos(phi) - dy * Math.sin(phi), -r + PY + dx * Math.sin(phi) + dy * Math.cos(phi)]; };
    const hop = f >= BACK - 6 && f < BACK + 14 ? Math.sin((f - BACK + 6) / 20 * Math.PI) * 1.1 : 0;
    /* ---------- balle ---------- */
    const HEAD = [-hr * .78, -u * 2.75];
    const orbit = k => { const a = -Math.PI / 2 + .26 + k * (TAU - .26 - .14), R = r + u * .3 + (u * 2.8 - u * .3) * sm(k) + Math.sin(k * Math.PI) * r * .12; return [Math.cos(a) * R, Math.sin(a) * R]; };
    let ball = null, trail = [];
    if (f < HIT) { if (f > 3 || f === 0) ball = [TEE[0], TEE[1] - r]; }
    else if (f < BONK) { const k = (f - HIT) / (BONK - HIT); ball = orbit(k); for (let i = 1; i <= 6; i++) trail.push(orbit(Math.max(0, k - i * .012))); }
    else if (f < BONK + 50) { const k = (f - BONK) / 50, s = orbit(1); ball = [s[0] - k * u * 4, s[1] - Math.sin(k * Math.PI) * u * 2.4 + k * k * u * 2.2]; }
    const ballAlpha = f < 6 ? f / 6 : f >= BONK + 35 ? Math.max(0, 1 - (f - BONK - 35) / 15) : 1;
    /* ---------- tee ---------- */
    c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, u * .08);
    c.beginPath(); c.moveTo(TEE[0] - u * .16, -r - u * .12); c.lineTo(TEE[0] + u * .16, -r - u * .12); c.lineTo(TEE[0] + u * .03, -r + u * .02); c.lineTo(TEE[0] - u * .03, -r + u * .02); c.closePath(); c.fill(); c.stroke();
    /* ---------- casquette ---------- */
    const capOff = f >= BONK && f < BACK, capH = rot(0, -u * 3.18);
    let capW = null;
    if (capOff) { const k = (f - BONK) / 24;
      if (k < 1) { const h0 = [0, -r - u * 3.18]; capW = [h0[0] + k * u * 1.2, h0[1] - Math.sin(k * Math.PI) * u * 2.6 - k * u * .6, k * 4]; }
      else if (f < RISE + 6) { const w = Math.sin((f - BONK - 24) * .18) * Math.max(0, 1 - (f - BONK - 24) / 30); capW = [u * 1.2 + w * u * .2, -r - u * 3.78 + Math.min(1, (f - BONK - 24) / 20) * u * 3.2, 4 + w * .3]; }
      else { const k2 = sm((f - RISE - 6) / (BACK - RISE - 6)), hp = [0, -r - u * 3.18 - hop * u]; capW = [mix(u * 1.2, hp[0], k2), mix(-r - u * .58, hp[1], k2) - Math.sin(k2 * Math.PI) * u * 2.4, mix(4, TAU, k2)]; } }
    const drawCap = (x, y, a) => { c.save(); c.translate(x, y); c.rotate(a); mHat(c, u, 'golf', 0, -hr * .78 * .35, hr * .78, t); c.restore(); };
    /* ---------- Bouli ---------- */
    const KO = fall > .5, warn = f >= WARN && f < BONK, up = f >= RISE && fall < 1, CATCH = BACK + 4, ready = f >= CATCH;
    let look = [.25, .7];
    if (ball && !KO) { const bw = rot(0, -u * 1.75), dx = ball[0] - bw[0], dy = ball[1] - bw[1], n = Math.hypot(dx, dy) || 1; look = [dx / n * 1.1, dy / n * 1.1]; }
    const ex = { noShadow: true, noProp: true, grip: G, gripFront, oneHand: rest ? 'r' : null, clubBack, club: { a: cA, L: CL }, look, hatOff: capOff, lift: hop,
      lAng: warn ? -2.25 + Math.sin(f * .9) * .15 : Math.PI * .66 };
    if (ready) Object.assign(ex, { grip: GA, gripFront: true, oneHand: null, clubBack: false, club: { a: CA0, L: CL }, eyes: f < CATCH + 12 ? 'happy' : 'open', mouth: f < CATCH + 12 ? 'open' : 'cat', look: [.4, .6] });
    else if (KO) Object.assign(ex, { eyes: 'x', mouth: 'grr', lAng: 3.6 + Math.sin(f * .3) * .15, rAng: -1.9 + Math.sin(f * .33) * .15, club: null, grip: null });
    else if (f >= BONK && !up) Object.assign(ex, { eyes: 'wide', mouth: 'o', lAng: -2.4, rAng: -.8, club: null, grip: null });
    else if (warn) Object.assign(ex, { eyes: 'wide', mouth: 'o' });
    else if (up) Object.assign(ex, { eyes: 'happy', mouth: 'open', club: null, grip: null, lAng: f >= BACK - 8 ? Math.PI * 1.25 : Math.PI * .72, rAng: f >= BACK - 8 ? -.25 : -.4 });
    else if (f >= HIT && f < REST) ex.mouth = 'open';
    /* club : lâché au TOC, il vole et tombe à gauche ; au réveil il revient d'un saut dans les moufles */
    if (f >= BONK && !ready) { const fx = -u * 4.6, fy = -r - u * .45, PICK = RISE + 10;
      let hx, hy, a;
      if (f < PICK) { const k = Math.min(1, (f - BONK) / 16); a = mix(Math.PI / 2, -Math.PI * 2, sm(k)); hx = mix(u * 1.75, fx, k); hy = mix(-r - u * 1.41, fy, k) - Math.sin(k * Math.PI) * u * 2.4; }
      else { const k = sm((f - PICK) / (CATCH - PICK)), gx = GA[0], gy = -r + GA[1] - hop * u; a = mix(0, CA0 - Math.PI * 2, k); hx = mix(fx, gx, k); hy = mix(fy, gy, k) - Math.sin(k * Math.PI) * u * 3; }
      c.save(); c.lineCap = 'round'; c.strokeStyle = OUT; c.lineWidth = Math.max(1, u * .2); c.beginPath(); c.moveTo(hx, hy); c.lineTo(hx + Math.cos(a) * CL, hy + Math.sin(a) * CL); c.stroke();
      c.strokeStyle = '#d6dde8'; c.lineWidth = Math.max(.6, u * .11); c.stroke(); mShape(c, u, '#ffffff', () => c.arc(hx, hy, u * .2, 0, TAU), .08);
      c.translate(hx + Math.cos(a) * CL, hy + Math.sin(a) * CL); c.rotate(a - Math.PI / 2); mShape(c, u, '#9aa4b8', () => c.roundRect(-u * .12, -u * .1, u * .5, u * .24, u * .09), .09); c.restore(); }
    /* ombre au sol */
    const sw = (1 - fall) * 1.55 + fall * 1.7, sx = fall * hr * 1.5;
    c.fillStyle = 'rgba(20,40,20,0.22)'; c.beginPath(); c.ellipse(sx, -r + u * .02, u * sw * (1 - hop * .25), u * .26 * (1 - hop * .25), 0, 0, TAU); c.fill();
    c.save(); c.translate(0, -r); c.translate(PX, PY); c.rotate(phi); c.translate(-PX, -PY);
    drawBouli2(c, 0, 0, u, 'golf', t, 'aviatrice', ex);
    c.restore();
    /* casquette en vol */
    if (capW) drawCap(capW[0], capW[1], capW[2]);
    /* traînée du swing : tête de club sur les dernières images */
    if (f >= 67 && f < FIN + 3) { c.save(); c.lineCap = 'round'; c.strokeStyle = 'rgba(255,255,255,0.5)'; c.lineWidth = u * .3; c.beginPath();
      for (let i = 0; i <= 4; i++) { const [p1, a1] = pose(Math.max(66, f - i)), g = gripAt(p1), x = g[0] + Math.cos(a1) * CL, y = -r + g[1] + Math.sin(a1) * CL; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); c.restore(); }
    /* balle et traînée */
    trail.forEach((p, i) => { c.fillStyle = `rgba(255,255,255,${(.35 * (1 - i / 7)).toFixed(3)})`; c.beginPath(); c.arc(p[0], p[1], bs * (1 - i / 9), 0, TAU); c.fill(); });
    if (ball && ballAlpha > 0) { c.save(); c.globalAlpha = ballAlpha; c.fillStyle = '#ffffff'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, bs * .14); c.beginPath(); c.arc(ball[0], ball[1], bs, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = 'rgba(42,42,68,0.22)'; for (const [dx, dy] of [[-.3, -.2], [.2, -.3], [0, .1], [.35, .2], [-.25, .3]]) { c.beginPath(); c.arc(ball[0] + dx * bs, ball[1] + dy * bs, bs * .13, 0, TAU); c.fill(); } c.restore(); }
    /* « ! » */
    if (warn) { const k = (f - WARN) / (BONK - WARN), s = .8 + Math.sin(Math.min(1, k * 4) * Math.PI / 2) * .4 + Math.sin(f * .8) * .04;
      c.save(); c.translate(u * .9, -r - u * 4.9); c.scale(s, s); c.rotate(.15); c.fillStyle = '#ffd23f'; c.strokeStyle = OUT; c.lineWidth = Math.max(.8, u * .12);
      c.beginPath(); c.roundRect(-u * .2, -u * 1.0, u * .4, u * .78, u * .18); c.fill(); c.stroke(); c.beginPath(); c.arc(0, u * .08, u * .2, 0, TAU); c.fill(); c.stroke(); c.restore(); }
    /* impact « TOC » */
    if (f >= BONK && f < BONK + 16) { const k = (f - BONK) / 16, p = orbit(1);
      c.save(); c.translate(p[0], p[1]); c.globalAlpha = 1 - k * k; c.fillStyle = '#fff6c8'; c.strokeStyle = '#ffb000'; c.lineWidth = Math.max(.8, u * .12);
      c.beginPath(); for (let i = 0; i < 12; i++) { const a = i * TAU / 12, rr = (i % 2 ? .5 : 1.1) * u * (1 + k * .8); c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fill(); c.stroke();
      if (u > 4) { c.fillStyle = '#e8333d'; c.font = `${u * .62}px "Lilita One", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('TOC', 0, u * .04); }
      c.restore(); }
    /* birdie qui tourne au-dessus de sa tête */
    if (fall > .85) { const hp = rot(0, -u * 1.75), a = t * .1, bx = hp[0] + Math.cos(a) * u * 1.7, by = hp[1] - u * 3.0 + Math.sin(a) * u * .4, fl = Math.sin(t * .6);
      c.save(); c.translate(bx, by); c.scale((Math.cos(a) > 0 ? -1 : 1) * 2.1, 2.1);
      c.fillStyle = '#5fb8f0'; c.strokeStyle = OUT; c.lineWidth = Math.max(.5, u * .07);
      c.beginPath(); c.arc(0, 0, u * .32, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = '#a8dcff'; c.beginPath(); c.ellipse(-u * .05, -u * .05 - fl * u * .12, u * .22, u * .1, -.4 - fl * .5, 0, TAU); c.fill(); c.stroke();
      c.fillStyle = '#ffb000'; c.beginPath(); c.moveTo(u * .28, -u * .02); c.lineTo(u * .46, u * .04); c.lineTo(u * .28, u * .1); c.closePath(); c.fill();
      c.fillStyle = OUT; c.beginPath(); c.arc(u * .12, -u * .08, u * .05, 0, TAU); c.fill(); c.restore();
      c.fillStyle = '#ffd23f'; for (let i = 0; i < 2; i++) { const b = a + Math.PI * (i + .5), x = hp[0] + Math.cos(b) * u * 1.4, y = hp[1] - u * 3.0 + Math.sin(b) * u * .3; sparkle(c, x, y, u * .28, 1); } }
  } };
