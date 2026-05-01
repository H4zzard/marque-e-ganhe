(function () {
  'use strict';

  /* ----------------------------------------------------------
     Floating background SVG symbols — brand colors only
     ---------------------------------------------------------- */
  const SVGS = [
    // Cédula de dinheiro
    `<svg viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="49" height="33" rx="4" stroke="currentColor" stroke-width="2.5"/><circle cx="26" cy="18" r="7" stroke="currentColor" stroke-width="2.5"/><line x1="6" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="40" y1="18" x2="46" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="6" y1="11" x2="6" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="46" y1="11" x2="46" y2="25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    // Camiseta
    `<svg viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3 Q26 11 33 3 L47 14 L39 21 L39 45 L13 45 L13 21 L5 14 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
    // Símbolo de porcentagem
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="2.5"/><circle cx="32" cy="32" r="7.5" stroke="currentColor" stroke-width="2.5"/><line x1="38" y1="6" x2="6" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    // Tag de desconto / OFF
    `<svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4 L32 4 Q40 4 44 12 L44 52 L4 52 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="14" cy="14" r="4" fill="currentColor"/><line x1="14" y1="30" x2="34" y2="30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><line x1="14" y1="38" x2="34" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    // Estrela
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="22,2 27.5,15.5 42,16 31,25.5 34.5,40 22,32 9.5,40 13,25.5 2,16 16.5,15.5" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
    // Livro aberto
    `<svg viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 8 C20 5 10 4 4 6 L4 40 C10 38 20 39 26 42 C32 39 42 38 48 40 L48 6 C42 4 32 5 26 8 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="26" y1="8" x2="26" y2="42" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/></svg>`,
    // Troféu
    `<svg viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 L34 4 L34 24 Q34 36 22 36 Q10 36 10 24 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 10 L4 10 Q2 12 2 16 Q2 22 10 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M34 10 L40 10 Q42 12 42 16 Q42 22 34 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="36" x2="22" y2="44" stroke="currentColor" stroke-width="2.5"/><line x1="14" y1="44" x2="30" y2="44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    // Lápis
    `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 36 L30 8 Q34 4 38 8 Q42 12 38 16 L16 44 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="8" y1="36" x2="4" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="6" x2="38" y2="18" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/></svg>`,
  ];

  // Cores das marcas: verde, navy, branco — com opacidades calibradas
  const PALETTE = [
    { color: '#00E63C', op: 0.10 },
    { color: '#0D1B3E', op: 0.11 },
    { color: '#1A2F5A', op: 0.09 },
    { color: '#FFFFFF',  op: 0.18 },
    { color: '#00B030', op: 0.09 },
    { color: '#0D1B3E', op: 0.12 },
    { color: '#00E63C', op: 0.08 },
  ];

  const floatBg = document.getElementById('floatBg');

  function spawnSymbol() {
    const el  = document.createElement('div');
    el.className = 'fs';

    const svg  = SVGS[Math.floor(Math.random() * SVGS.length)];
    const pal  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    const x    = Math.random() * 100;
    const dur  = 8 + Math.random() * 10;
    const dly  = Math.random() * 3;
    const size = 28 + Math.floor(Math.random() * 38);

    el.innerHTML = svg;
    el.style.cssText =
      `left:${x}%;bottom:-80px;width:${size}px;height:${size}px;` +
      `color:${pal.color};--dur:${dur}s;--op:${pal.op};animation-delay:${dly}s;`;

    floatBg.appendChild(el);
    setTimeout(() => el.remove(), (dur + dly + 1.5) * 1000);
  }

  // Burst inicial + intervalo contínuo
  for (let i = 0; i < 10; i++) setTimeout(spawnSymbol, i * 350);
  setInterval(spawnSymbol, 900);

  /* ----------------------------------------------------------
     Scroll-reveal: hero (immediate stagger) + info (observer)
     ---------------------------------------------------------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Info section: reveal on scroll
  document.querySelectorAll('.s-info .reveal').forEach((el) => observer.observe(el));

  // Hero section: stagger-in right away
  setTimeout(() => {
    document.querySelectorAll('.s-hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 160);
    });
  }, 90);

  /* ----------------------------------------------------------
     CTA sparkle burst on click
     ---------------------------------------------------------- */
  const SPARKLE_COLORS = ['#00E63C', '#C9A227', '#E8C350', '#FFFFFF', '#0D1B3E', '#00B030', '#CCFFE0'];

  function spawnSparkles(clientX, clientY) {
    const count = 20;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';

      const angle = (i / count) * Math.PI * 2;
      const dist  = 40 + Math.random() * 90;
      const tx    = Math.cos(angle) * dist;
      const ty    = Math.sin(angle) * dist;
      const color = SPARKLE_COLORS[i % SPARKLE_COLORS.length];

      s.style.cssText =
        `left:${clientX}px;top:${clientY}px;background:${color};--tx:${tx}px;--ty:${ty}px;`;

      document.body.appendChild(s);
      setTimeout(() => s.remove(), 780);
    }
  }

  document.querySelectorAll('.cta-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => spawnSparkles(e.clientX, e.clientY));
  });

})();
