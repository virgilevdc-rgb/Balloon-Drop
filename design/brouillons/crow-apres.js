/* Corbeau géant v2 : même silhouette et même taille, plumes, reflets, couronne à gemmes */
function drawCrowV2(c, x, y, s, flap, face, hurt, alpha = 1) {
  c.save(); c.translate(x, y); c.scale(s * face, s); c.globalAlpha = alpha;
  const f = Math.sin(flap), W = hurt ? () => '#ffffff' : v => v, OUT = hurt ? 'rgba(255,255,255,0)' : '#0b0d1c';
  const grad = (x0, y0, x1, y1, a, b) => { if (hurt) return '#ffffff'; const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g; };
  c.lineJoin = 'round'; c.lineCap = 'round';
  /* aile arrière : 5 rémiges séparées */
  const wing = (bx, by, tx, ty, dir, back) => {
    for (let i = 4; i >= 0; i--) {
      const k = i / 4, ex = tx + dir * (-k * 30), ey = ty + k * 18;
      c.fillStyle = grad(bx, by, ex, ey, back ? '#262a48' : '#3a4170', back ? '#11132a' : '#181b36');
      c.beginPath(); c.moveTo(bx, by - 4); c.quadraticCurveTo((bx + ex) / 2, (by + ey) / 2 - 20 - f * 10, ex, ey);
      c.quadraticCurveTo((bx + ex) / 2 + dir * 10, (by + ey) / 2 + 12, bx + dir * 4, by + 16); c.closePath(); c.fill();
      c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke();
    }
    c.fillStyle = grad(bx, by - 10, bx, by + 14, back ? '#2c3156' : '#4a5290', back ? '#15182f' : '#1f2342');
    c.beginPath(); c.moveTo(bx - dir * 6, by + 2); c.quadraticCurveTo(bx + dir * 20, by - 30 - f * 22, tx * .62 + bx * .38, ty * .62 + by * .38 + 4); c.quadraticCurveTo(bx + dir * 26, by + 12, bx + dir * 2, by + 14); c.closePath(); c.fill();
    c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke();
  };
  wing(-8, -2, -78, -16 - f * 38, -1, true);
  /* queue en éventail */
  for (const [a, l] of [[-.32, 30], [0, 34], [.32, 30]]) {
    c.save(); c.translate(-24, 6); c.rotate(Math.PI + a); c.fillStyle = grad(0, 0, l, 0, '#2c3156', '#0f1124');
    c.beginPath(); c.moveTo(0, -5); c.lineTo(l, -7); c.lineTo(l + 5, 0); c.lineTo(l, 7); c.lineTo(0, 5); c.closePath(); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke(); c.restore();
  }
  /* serres */
  c.strokeStyle = W('#e89a2c'); c.lineWidth = 3;
  for (const dx of [-6, 8]) { c.beginPath(); c.moveTo(dx, 20); c.lineTo(dx + 2, 30); c.moveTo(dx + 2, 30); c.lineTo(dx - 3, 34); c.moveTo(dx + 2, 30); c.lineTo(dx + 7, 34); c.stroke(); }
  /* corps brillant */
  c.fillStyle = grad(-20, -12, 20, 26, '#3b4377', '#12142a');
  c.beginPath(); c.ellipse(0, 6, 31, 18, 0, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke();
  /* jabot de plumes */
  c.fillStyle = W('#4b5596');
  for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(14 + i * 3, 2 + i * 5, 7, .2 * Math.PI, .9 * Math.PI); c.fill(); }
  if (!hurt) { c.fillStyle = 'rgba(160,180,255,0.28)'; c.beginPath(); c.ellipse(-6, -2, 16, 6, -.2, 0, TAU); c.fill(); }
  /* aile avant */
  wing(-12, 0, 40, -32 - f * 38, 1, false);
  /* tête */
  c.fillStyle = grad(16, -24, 36, 8, '#454e8a', '#14162e');
  c.beginPath(); c.arc(27, -7, 16, 0, TAU); c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke();
  if (!hurt) { c.fillStyle = 'rgba(190,205,255,0.35)'; c.beginPath(); c.ellipse(21, -15, 6, 3.5, -.6, 0, TAU); c.fill(); }
  /* bec doré en deux parties */
  c.fillStyle = grad(38, -14, 60, 0, '#ffe27a', '#d48a00');
  c.beginPath(); c.moveTo(38, -13); c.quadraticCurveTo(52, -13, 62, -4); c.quadraticCurveTo(56, -5, 39, -4); c.closePath(); c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke();
  c.fillStyle = grad(38, -3, 54, 4, '#f2b705', '#a86a00');
  c.beginPath(); c.moveTo(39, -3); c.lineTo(54, -2); c.quadraticCurveTo(46, 3, 39, 2); c.closePath(); c.fill(); c.stroke();
  c.fillStyle = W('#7a4a00'); c.beginPath(); c.arc(45, -9, 1.2, 0, TAU); c.fill();
  /* œil colérique */
  c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(31, -9, 6, 5.5, 0, 0, TAU); c.fill();
  c.fillStyle = W('#e8336d'); c.beginPath(); c.arc(32.5, -8.5, 3.4, 0, TAU); c.fill();
  c.fillStyle = W('#2a0612'); c.beginPath(); c.arc(32.8, -8.4, 1.6, 0, TAU); c.fill();
  c.fillStyle = '#ffffff'; c.beginPath(); c.arc(31.6, -10, 1, 0, TAU); c.fill();
  c.strokeStyle = W('#0b0d1c'); c.lineWidth = 4.5; c.beginPath(); c.moveTo(23, -19); c.lineTo(39, -13); c.stroke();
  /* couronne dorée à gemmes */
  c.fillStyle = grad(15, -38, 36, -18, '#fff1b8', '#d48a00');
  c.beginPath(); c.moveTo(15, -19); c.lineTo(15, -31); c.lineTo(20.5, -25); c.lineTo(25.5, -37); c.lineTo(30.5, -25); c.lineTo(36, -31); c.lineTo(36, -19); c.closePath(); c.fill();
  c.strokeStyle = hurt ? 'rgba(0,0,0,0)' : '#8a5a12'; c.lineWidth = 1.5; c.stroke();
  c.fillStyle = W('#c99a20'); c.fillRect(15, -22, 21, 3);
  for (const [gx, gy, col] of [[15, -31, '#5fd6ff'], [25.5, -37, '#e8336d'], [36, -31, '#5fd6ff']]) { c.fillStyle = W(col); c.beginPath(); c.arc(gx, gy, 2.2, 0, TAU); c.fill(); }
  c.fillStyle = W('#e8336d'); c.beginPath(); c.arc(25.5, -20.5, 1.8, 0, TAU); c.fill();
  c.restore();
}
