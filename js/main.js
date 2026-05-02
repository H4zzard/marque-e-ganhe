(function () {
  'use strict';

  /* ----------------------------------------------------------
     Floating background icons — social media + money + discount
     Cada ícone já tem suas próprias cores (estilo 3D colorido).
     A opacidade global vem do --op da animação floatUp.
     ---------------------------------------------------------- */
  const ICONS = [
    /* ===== REDES SOCIAIS ===== */
    // Facebook (azul)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fb-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#1E40AF"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="12" fill="url(#fb-g)"/><path d="M37 22h5v-7h-6c-5 0-8 3-8 8v5h-5v7h5v17h7V35h5l1-7h-6v-4c0-1.5 .8-2 2-2z" fill="#fff"/></svg>`,

    // YouTube (vermelho)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="yt-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF1F1F"/><stop offset="1" stop-color="#B91C1C"/></linearGradient></defs><rect x="4" y="14" width="56" height="36" rx="10" fill="url(#yt-g)"/><polygon points="26,22 26,42 44,32" fill="#fff"/></svg>`,

    // Instagram (gradiente roxo/rosa/laranja)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ig-g" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FFD600"/><stop offset=".35" stop-color="#FF6A1A"/><stop offset=".7" stop-color="#D81B7A"/><stop offset="1" stop-color="#7B2FFF"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="14" fill="url(#ig-g)"/><rect x="14" y="14" width="36" height="36" rx="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="32" cy="32" r="9" fill="none" stroke="#fff" stroke-width="3"/><circle cx="44" cy="20" r="2.6" fill="#fff"/></svg>`,

    // WhatsApp (verde)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wa-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#25D366"/><stop offset="1" stop-color="#128C4A"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="14" fill="url(#wa-g)"/><path d="M32 16c-8.8 0-16 7-16 15.6 0 2.8 .8 5.5 2.2 7.8L16 48l9-2.2c2.2 1.2 4.6 1.8 7 1.8 8.8 0 16-7 16-15.6S40.8 16 32 16zm9 22c-.4 1-2 2-3 2-.8 .1-1.7 .1-2.7-.2-.6-.2-1.4-.5-2.4-.9-4.2-1.8-7-6-7.2-6.3-.2-.3-1.7-2.3-1.7-4.4 0-2.1 1.1-3.1 1.5-3.5 .4-.4 .8-.5 1.1-.5h.8c.3 0 .6 0 .9 .7 .3 .8 1.1 2.7 1.2 2.9 .1 .2 .2 .4 0 .7l-.5 .7c-.2 .2-.4 .5-.6 .7-.2 .2-.4 .4-.2 .8 .2 .4 1 1.6 2.1 2.6 1.4 1.2 2.6 1.6 3 1.8 .4 .2 .6 .1 .9-.2 .2-.3 1-1.1 1.2-1.5 .2-.4 .5-.3 .8-.2 .3 .1 2.2 1 2.6 1.2 .4 .2 .6 .3 .7 .5 .1 .2 .1 1-.3 2z" fill="#fff"/></svg>`,

    // X / Twitter (azul céu)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tw-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38BDF8"/><stop offset="1" stop-color="#0284C7"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="12" fill="url(#tw-g)"/><path d="M48 22.5c-1.2 .5-2.4 .9-3.7 1 1.3-.8 2.4-2 2.9-3.5-1.3 .7-2.7 1.3-4.2 1.6-1.2-1.3-2.9-2.1-4.8-2.1-3.7 0-6.6 3-6.6 6.6 0 .5 .1 1 .2 1.5-5.5-.3-10.4-2.9-13.7-7-.6 1-.9 2.1-.9 3.4 0 2.3 1.2 4.3 3 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.9 5.3 6.5-.6 .2-1.1 .2-1.7 .2-.4 0-.8 0-1.2-.1 .8 2.6 3.3 4.5 6.2 4.5-2.3 1.8-5.1 2.9-8.3 2.9-.5 0-1.1 0-1.6-.1 3 1.9 6.5 3 10.3 3 12.4 0 19.1-10.3 19.1-19.1v-.9c1.3-1 2.5-2.2 3.4-3.6z" fill="#fff"/></svg>`,

    // Pinterest (vermelho)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="pin-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E60023"/><stop offset="1" stop-color="#A4001B"/></linearGradient></defs><rect x="6" y="6" width="52" height="52" rx="14" fill="url(#pin-g)"/><path d="M32 14c-9.9 0-18 6.5-18 16.3 0 5.5 3 9.5 6.7 11 .5 .2 .9 0 1-.5l.4-1.7c.1-.5 .1-.7-.3-1.2-.8-1-1.4-2.3-1.4-4.1 0-5.3 4-10 10.4-10 5.7 0 8.8 3.5 8.8 8.1 0 6.1-2.7 11.3-6.7 11.3-2.2 0-3.9-1.8-3.3-4.1 .6-2.7 1.9-5.7 1.9-7.6 0-1.8-.9-3.2-2.9-3.2-2.3 0-4.1 2.4-4.1 5.6 0 2 .7 3.4 .7 3.4l-2.8 11.7c-.8 3.5-.1 7.7 0 8.2 0 .3 .4 .3 .6 .1 .3-.4 4.2-5.2 5.5-8.6 .4-1 2.1-8.1 2.1-8.1 1 1.9 4 3.6 7.2 3.6 9.5 0 16-8.6 16-20.2C50 20.5 42.6 14 32 14z" fill="#fff"/></svg>`,

    /* ===== DINHEIRO ===== */
    // Cédula 3D verde com cifrão
    `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5EE890"/><stop offset="1" stop-color="#1E9A4A"/></linearGradient></defs><rect x="6" y="10" width="68" height="42" rx="6" fill="url(#b-g)" stroke="#0F5C2A" stroke-width="1.5"/><circle cx="40" cy="31" r="11" fill="none" stroke="#0F5C2A" stroke-width="2.2"/><path d="M40 22v18M44 25c-1-1.2-2.4-2-4-2-2.5 0-4 1.3-4 3 0 1.6 1.2 2.4 4 3 2.8 .6 4 1.4 4 3 0 1.7-1.5 3-4 3-1.6 0-3-.8-4-2" stroke="#0F5C2A" stroke-width="2.2" stroke-linecap="round" fill="none"/><circle cx="14" cy="20" r="2" fill="#0F5C2A" opacity=".5"/><circle cx="66" cy="42" r="2" fill="#0F5C2A" opacity=".5"/></svg>`,

    // Saco de dinheiro com $
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bag-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5EE890"/><stop offset="1" stop-color="#0F8A3A"/></linearGradient></defs><path d="M22 16h20l-3 6c8 4 13 11 13 20 0 8-7 14-20 14s-20-6-20-14c0-9 5-16 13-20z" fill="url(#bag-g)" stroke="#0F5C2A" stroke-width="2"/><path d="M22 16l-2-4h24l-2 4" fill="#0F8A3A" stroke="#0F5C2A" stroke-width="2" stroke-linejoin="round"/><path d="M32 30v18M36 34c-1-1-2.4-1.6-4-1.6-2.4 0-3.6 1-3.6 2.6 0 1.4 1 2 3.6 2.6 2.6 .6 3.6 1.2 3.6 2.6 0 1.6-1.4 2.8-3.6 2.8-1.6 0-3-.6-4-1.6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>`,

    // Moeda dourada com $
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="coin-g" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFE680"/><stop offset=".55" stop-color="#F0B919"/><stop offset="1" stop-color="#A07B10"/></radialGradient></defs><circle cx="32" cy="32" r="24" fill="url(#coin-g)" stroke="#7A5C0A" stroke-width="1.5"/><circle cx="32" cy="32" r="18" fill="none" stroke="#7A5C0A" stroke-width="1.2" opacity=".55"/><path d="M32 19v26M37 23c-1.4-1.6-3-2.4-5-2.4-3 0-4.6 1.4-4.6 3.4 0 1.8 1.2 2.6 4.6 3.4 3.4 .8 4.8 1.6 4.8 3.6 0 2-1.8 3.6-4.8 3.6-2 0-3.6-.8-5-2.4" stroke="#7A5C0A" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>`,

    /* ===== DESCONTO ===== */
    // Selo "% OFF" estilo flor (vermelho)
    `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="d-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4D5E"/><stop offset="1" stop-color="#C81F32"/></linearGradient></defs><path d="M40 6
      L46 12 L54 10 L57 18 L65 20 L65 28 L72 33 L68 40 L72 47 L65 52 L65 60 L57 62 L54 70 L46 68 L40 74 L34 68 L26 70 L23 62 L15 60 L15 52 L8 47 L12 40 L8 33 L15 28 L15 20 L23 18 L26 10 L34 12 Z"
      fill="url(#d-g)" stroke="#7A0F1C" stroke-width="1.5"/><circle cx="32" cy="32" r="5" fill="none" stroke="#fff" stroke-width="3"/><circle cx="48" cy="48" r="5" fill="none" stroke="#fff" stroke-width="3"/><line x1="50" y1="26" x2="30" y2="54" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>`,

    // Tag de desconto inclinada (verde)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tag-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34D759"/><stop offset="1" stop-color="#0F8A3A"/></linearGradient></defs><path d="M8 32 L32 8 L56 8 L56 32 L32 56 Z" fill="url(#tag-g)" stroke="#0F5C2A" stroke-width="2" stroke-linejoin="round"/><circle cx="44" cy="20" r="4.5" fill="#fff"/><circle cx="44" cy="20" r="2" fill="#0F5C2A"/><text x="28" y="40" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="900" transform="rotate(-45 28 40)">%</text></svg>`,

    // Símbolo de % grande (estilo 3D)
    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="p-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF6A6A"/><stop offset="1" stop-color="#C81F32"/></linearGradient></defs><circle cx="32" cy="32" r="26" fill="url(#p-g)" stroke="#7A0F1C" stroke-width="1.5"/><circle cx="22" cy="22" r="6" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="42" cy="42" r="6" fill="none" stroke="#fff" stroke-width="3.5"/><line x1="46" y1="18" x2="18" y2="46" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  ];

  const floatBg = document.getElementById('floatBg');

  function spawnSymbol() {
    const el  = document.createElement('div');
    el.className = 'fs';

    const svg  = ICONS[Math.floor(Math.random() * ICONS.length)];
    const x    = Math.random() * 100;
    const dur  = 10 + Math.random() * 12;       // mais devagar = sensação calma
    const dly  = Math.random() * 3;
    const size = 36 + Math.floor(Math.random() * 42);  // 36–78px
    // opacidade visivelmente mais forte, mas não 100%
    const op   = 0.45 + Math.random() * 0.30;   // 0.45 – 0.75

    el.innerHTML = svg;
    el.style.cssText =
      `left:${x}%;bottom:-100px;width:${size}px;height:${size}px;` +
      `--dur:${dur}s;--op:${op};animation-delay:${dly}s;`;

    floatBg.appendChild(el);
    setTimeout(() => el.remove(), (dur + dly + 1.5) * 1000);
  }

  // Burst inicial + intervalo contínuo
  for (let i = 0; i < 12; i++) setTimeout(spawnSymbol, i * 320);
  setInterval(spawnSymbol, 750);

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

  /* ----------------------------------------------------------
     Top nav: mobile toggle + fechar ao clicar em link
     ---------------------------------------------------------- */
  const navToggle = document.getElementById('topnavToggle');
  const navLinks  = document.getElementById('topnavLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // fecha ao clicar em qualquer link (apenas mobile — desktop ignora .open)
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

})();
