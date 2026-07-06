const ICONS = {
  leaf: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M20 4c-8 0-15 5-15 13 0 1.5 1 3 3 3 8 0 13-7 13-15 0-.5-.4-1-1-1z"/><path d="M6 20c2-4 5-8 12-12"/></svg>',
  gem: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M6 4h12l4 6-10 11L2 10z"/><path d="M2 10h20M9 4l3 6-3 11M15 4l-3 6 3 11"/></svg>',
  sprout: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M12 21V10"/><path d="M12 10C12 6 9 4 5 4c0 4 2 7 7 7z"/><path d="M12 13c0-4 3-6 7-6 0 4-2 7-7 7z"/></svg>',
  handshake: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M2 12l5-5 4 3 3-3 5 5"/><path d="M6 10l5 6 3-2"/><path d="M14 12l2 2"/><path d="M17 10l3 3-3 3"/></svg>',
  star: '<svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" stroke-width="1.3" stroke-linejoin="round"><path d="M12 3.2l2.6 5.6 6 .8-4.4 4.3 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.3 6-.8z"/></svg>',
  clipboard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><rect x="6" y="4" width="12" height="17" rx="1.5"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M9 11h6M9 15h6"/></svg>',
  truck: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><rect x="2" y="7" width="12" height="9" rx="1"/><path d="M14 10h4l3.5 3.5V16h-7.5z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="16.5" cy="18" r="1.6"/></svg>',
  crane: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M4 21V6l14 3"/><path d="M18 9v5"/><path d="M18 14l3 3"/><path d="M4 21h9"/><path d="M13 21v-4"/></svg>',
  box: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8580c" stroke-width="1.4"><path d="M3 8l9-4.5L21 8v9l-9 4.5L3 17z"/><path d="M3 8l9 4.5L21 8M12 12.5V21"/></svg>',
};

let lang = 'sr';
let observer = null;

function bullets(list) {
  return `<div class="bullets">${list.map(b => `<div class="bullet"><span class="bullet-dot"></span><span class="bullet-text">${b}</span></div>`).join('')}</div>`;
}
function bulletsRow(list) {
  return `<div class="bullets-row">${list.map(b => `<div class="bullet"><span class="bullet-dot"></span><span class="bullet-text">${b}</span></div>`).join('')}</div>`;
}
function plantCards(items, opts) {
  const contain = opts && opts.contain;
  const small = opts && opts.small;
  return `<div class="${opts.gridClass}">${items.map(it => `
    <div class="plant-card${contain ? ' contain-img' : ''}">
      <img src="${it.image}" alt="${it.name}" />
      <div class="plant-card-body${small ? ' tight' : ''}">
        <div class="plant-name${small ? ' small' : ''}">${it.name}</div>
        <a href="#contact" class="price-link${small ? ' small' : ''}">${opts.priceLabel}</a>
      </div>
    </div>`).join('')}</div>`;
}

function buildHTML(t) {
  const year = new Date().getFullYear();
  return `
  <header id="site-header">
    <div class="header-inner">
      <a href="#home" class="logo-link"><img src="assets/logo.png" alt="ModuleXVB" /></a>
      <nav class="desktop-nav">
        <a href="#home" class="nav-link">${t.nav.home}</a>
        <a href="#about" class="nav-link">${t.nav.about}</a>
        <a href="#collection" class="nav-link">${t.nav.collection}</a>
        <a href="#inspiration" class="nav-link">${t.nav.inspiration}</a>
        <a href="#services" class="nav-link">${t.nav.services}</a>
        <a href="#contact" class="nav-link">${t.nav.contact}</a>
      </nav>
      <div class="header-right">
        <div class="lang-switch">
          <button class="lang-btn ${lang === 'sr' ? 'active' : ''}" data-lang-btn="sr">SR</button>
          <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang-btn="en">EN</button>
        </div>
        <button class="mobile-toggle" id="mobile-toggle"><span></span><span></span><span></span></button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <a href="#home" class="mnav-link">${t.nav.home}</a>
      <a href="#about" class="mnav-link">${t.nav.about}</a>
      <a href="#collection" class="mnav-link">${t.nav.collection}</a>
      <a href="#inspiration" class="mnav-link">${t.nav.inspiration}</a>
      <a href="#services" class="mnav-link">${t.nav.services}</a>
      <a href="#contact" class="mnav-link">${t.nav.contact}</a>
    </div>
  </header>

  <section id="home" class="hero">
    <img class="bg" src="assets/hero-mediterranean.jpg" alt="" />
    <div class="overlay"></div>
    <div class="glow"></div>
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">${t.hero.eyebrow}</div>
        <h1 class="hero-title-top">${t.hero.titleTop}</h1>
        <div class="hero-title-script">${t.hero.titleScript}</div>
        <p class="hero-sub">${t.hero.sub}</p>
        <div class="hero-ctas">
          <a href="#contact" class="cta-primary">${t.hero.ctaPrimary}</a>
          <a href="#collection" class="cta-secondary">${t.hero.ctaSecondary}</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="about-grid">
      <div>
        <div class="kicker">${t.about.kicker}</div>
        <h2 class="section-title">${t.about.title}</h2>
        <p class="about-p">${t.about.p1}</p>
        <p class="about-p" style="margin-bottom:36px;">${t.about.p2}</p>
        <div class="stats-row">
          ${t.about.stats.map(s => `
            <div class="stat-item">
              ${s.icon ? `<div class="stat-icon">${ICONS.star}</div>` : `<div class="stat-num">${s.num}</div>`}
              <div class="stat-label${s.icon ? ' icon-label' : ''}">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="about-image-wrap">
        <img src="assets/olive-old-l.jpg" alt="" />
        <div class="about-caption"><p>${t.about.highlight}</p></div>
      </div>
    </div>

    <div class="benefits-grid">
      ${t.benefits.map(b => `
        <div class="benefit">
          <div class="benefit-icon">${ICONS[b.icon] || ''}</div>
          <div class="benefit-title">${b.title}</div>
          <div class="benefit-text">${b.text}</div>
        </div>`).join('')}
    </div>

    <div class="why-box">
      <div class="why-head">
        <h3>${t.why.title}</h3>
        <div class="why-line"></div>
        <span class="why-brand">Modulex VB</span>
      </div>
      <div class="why-grid">
        ${t.why.items.map(w => `
          <div class="why-item">
            <div class="why-num">${w.num}</div>
            <div class="why-text">${w.text}</div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="collection" class="collection-section">
    <div class="collection-head">
      <div class="kicker">${t.collectionKicker}</div>
      <h2 class="collection-title">${t.collectionTitle}</h2>
    </div>

    <div class="sec-grid">
      <div><img class="olive-main-img" src="${t.sections.olives.image}" alt="${t.sections.olives.title}" /></div>
      <div>
        <div class="sec-num">${t.sections.olives.num}</div>
        <h3 class="sec-title">${t.sections.olives.title}</h3>
        <p class="sec-text">${t.sections.olives.text}</p>
        ${bullets(t.sections.olives.bullets)}
      </div>
    </div>

    <div class="sub-section">
      <div class="sub-head"><span class="sub-num">${t.sections.oldOlives.num}</span><h3 class="sub-title">${t.sections.oldOlives.title}</h3></div>
      <p class="sub-text">${t.sections.oldOlives.text}</p>
      ${plantCards(t.sections.oldOlives.items, { gridClass: 'cards-4', priceLabel: t.priceLabel })}
    </div>

    <div class="sub-section">
      <div class="sub-head"><span class="sub-num">${t.sections.exotic.num}</span><h3 class="sub-title">${t.sections.exotic.title}</h3></div>
      <p class="sub-text">${t.sections.exotic.text}</p>
      ${plantCards(t.sections.exotic.items, { gridClass: 'cards-4', priceLabel: t.priceLabel })}
      ${bulletsRow(t.sections.exotic.bullets)}
    </div>

    <div class="sub-section">
      <div class="sub-head"><span class="sub-num">${t.sections.palms.num}</span><h3 class="sub-title">${t.sections.palms.title}</h3></div>
      <p class="sub-text">${t.sections.palms.text}</p>
      ${plantCards(t.sections.palms.items, { gridClass: 'cards-5', priceLabel: t.priceLabel, contain: true, small: true })}
    </div>

    <div class="sub-section" style="margin-bottom:40px;">
      <div class="sub-head"><span class="sub-num">${t.sections.rental.num}</span><h3 class="sub-title">${t.sections.rental.title}</h3></div>
      <p class="sub-text">${t.sections.rental.text}</p>
      <div class="cards-3">
        ${t.sections.rental.cards.map(c => `
          <div class="rental-card">
            <img src="${c.image}" alt="${c.title}" />
            <div class="overlay"></div>
            <div class="caption">
              <div class="rental-title">${c.title}</div>
              <a href="#contact" class="price-link">${t.priceLabel}</a>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <section id="inspiration" class="inspiration-section">
    <div class="inspiration-head">
      <div class="kicker">${t.inspiration.kicker}</div>
      <h2 class="collection-title">${t.inspiration.title}</h2>
    </div>
    <div class="insp-grid">
      ${t.inspiration.items.map(ins => `
        <div class="insp-card">
          <img src="${ins.image}" alt="${ins.name}" />
          <div class="overlay"></div>
          <div class="name">${ins.name}</div>
        </div>`).join('')}
    </div>
  </section>

  <section id="services" class="services-section">
    <div class="services-head">
      <div class="kicker">${t.service.kicker}</div>
      <h2 class="collection-title">${t.service.title}</h2>
      <p class="services-sub">${t.service.sub}</p>
    </div>
    <div class="service-grid">
      ${t.service.steps.map(s => `
        <div class="service-step">
          <div class="service-icon">${ICONS[s.icon] || ''}</div>
          <div class="service-title">${s.title}</div>
        </div>`).join('')}
    </div>
  </section>

  <footer id="contact" class="contact-footer">
    <div class="contact-inner">
      <div class="kicker">${t.contact.kicker}</div>
      <h2 class="collection-title">${t.contact.title}</h2>
      <p class="contact-sub">${t.contact.sub}</p>
      <div class="contact-ctas">
        <a href="tel:+381658226672" class="cta-primary">${t.contact.ctaCall}</a>
        <a href="mailto:modulexRe@proton.me" class="cta-secondary">${t.contact.ctaEmail}</a>
      </div>
    </div>
    <div class="footer-grid">
      <div>
        <img class="footer-logo" src="assets/logo.png" alt="ModuleXVB" />
        <p class="footer-tagline">${t.footer.tagline}</p>
        <p class="footer-domain">modulexvbdecor.com</p>
      </div>
      <div class="footer-col">
        <a href="tel:+381658226672" class="footer-link">+381 65 822 6672</a>
        <a href="tel:+381659243544" class="footer-link">+381 65 9243 544</a>
        <a href="mailto:modulexRe@proton.me" class="footer-link">modulexRe@proton.me</a>
        <span class="footer-location">${t.contact.location}</span>
      </div>
      <div class="footer-col">
        <a href="#about" class="footer-link">${t.nav.about}</a>
        <a href="#collection" class="footer-link">${t.nav.collection}</a>
        <a href="#inspiration" class="footer-link">${t.nav.inspiration}</a>
        <a href="#services" class="footer-link">${t.nav.services}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${year} ModuleXVB. ${t.footer.rights}</span>
    </div>
  </footer>
  `;
}

function attachBehaviors() {
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.getElementById('mobile-toggle');
  const mnav = document.getElementById('mobile-nav');
  toggle.addEventListener('click', () => mnav.classList.toggle('open'));
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.langBtn;
      render();
    });
  });

  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

function render() {
  const t = lang === 'sr' ? window.SR : window.EN;
  document.getElementById('app').innerHTML = buildHTML(t);
  // mark reveal targets
  document.querySelectorAll('.about-grid, .benefits-grid, .why-box, .sec-grid, .sub-section, .insp-grid, .service-grid').forEach(el => el.setAttribute('data-reveal', ''));
  attachBehaviors();
}

render();
