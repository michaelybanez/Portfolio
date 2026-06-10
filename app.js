// ===================== APP =====================

(function () {
  'use strict';

  // ——— Navbar scroll behavior ———
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 16);
  }, { passive: true });

  mobileMenuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', String(!open));
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // ——— Scroll reveal ———
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observeReveal() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // ——— Pill component ———
  function renderPills(pills) {
    return pills.map(p => `<span class="pill bg-primary-50 text-primary-700">${p}</span>`).join('');
  }

  // ——— Case Study Cards ———
  function renderCaseCards() {
    const grid = document.querySelector('#work .grid');
    DB.caseStudies.forEach((cs, i) => {
      const card = document.createElement('div');
      card.className = 'case-card bg-white rounded-2xl border border-neutral-200 overflow-hidden cursor-pointer reveal flex flex-col';
      card.style.transitionDelay = `${i * 0.08}s`;
      card.innerHTML = `
        <div class="relative h-48 overflow-hidden bg-neutral-100 border-b border-neutral-200">
          <img src="${cs.image}" alt="${cs.title}" loading="lazy" decoding="async"
               class="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
               width="800" height="400" />
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex flex-wrap gap-1.5 mb-4">${renderPills(cs.pills)}</div>
          <h3 class="text-base font-semibold text-neutral-900 mb-2 leading-snug">${cs.title}</h3>
          <p class="text-sm text-neutral-400 leading-relaxed flex-1">${cs.tagline}</p>
          <div class="mt-5 pt-5 border-t border-neutral-100 mb-5">
            <div>
              <div class="text-xs font-medium text-neutral-500">${cs.role}</div>
              <div class="text-xs text-neutral-400 mt-0.5">${cs.tools}</div>
            </div>
          </div>
            <button class="card-cta text-xs font-semibold text-primary-600 border border-primary-200 px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap" data-id="${cs.id}">
              View Case Study
            </button>
        </div>
      `;
      card.addEventListener('click', () => openCaseModal(cs.id));
      grid.appendChild(card);
    });
    observeReveal();
  }

  // ——— Case Study Modal ———
  let currentModalIndex = 0;
  const caseModal = document.getElementById('case-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');
  const modalCounter = document.getElementById('modal-counter');

  function openCaseModal(id) {
    const idx = DB.caseStudies.findIndex(cs => cs.id === id);
    if (idx === -1) return;
    currentModalIndex = idx;
    renderModalContent(idx);
    caseModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function renderModalContent(idx) {
    const cs = DB.caseStudies[idx];
    modalCounter.textContent = `${idx + 1} / ${DB.caseStudies.length}`;
    modalPrev.disabled = idx === 0;
    modalNext.disabled = idx === DB.caseStudies.length - 1;

    const processHTML = cs.process.map(p => `
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-7 h-7 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-xs font-semibold text-primary-600">${p.step}</div>
        <div class="pb-5">
          <div class="text-sm font-semibold text-neutral-900 mb-1">${p.label}</div>
          <p class="text-sm text-neutral-500 leading-relaxed">${p.desc}</p>
        </div>
      </div>
    `).join('');

    const issuesHTML = cs.problem.issues.map(i => `
      <li class="text-sm text-neutral-500 leading-relaxed flex gap-2">
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
        ${i}
      </li>
    `).join('');

    const constraintsHTML = cs.constraints.map(c => `
      <li class="text-sm text-neutral-500 leading-relaxed flex gap-2">
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
        ${c}
      </li>
    `).join('');

    const outcomeHTML = cs.outcome.map(o => `
      <li class="text-sm text-neutral-500 leading-relaxed flex gap-2">
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
        ${o}
      </li>
    `).join('');

    modalBody.innerHTML = `
      <div class="h-52 overflow-hidden rounded-t-2xl bg-neutral-100 border-b border-neutral-200">
        <img src="${cs.image}" alt="${cs.title}" class="w-full h-full object-cover object-top" loading="eager" />
      </div>
      <div class="p-7">
        <div class="flex flex-wrap gap-1.5 mb-4">${renderPills(cs.pills)}</div>
        <h2 class="text-xl font-semibold text-neutral-900 mb-1">${cs.title}</h2>
        <div class="flex flex-wrap gap-4 text-xs text-neutral-400 font-medium mb-6">
          <span>Role: <span class="text-neutral-600">${cs.role}</span></span>
          <span>Industry: <span class="text-neutral-600">${cs.industry}</span></span>
          <span>Tools: <span class="text-neutral-600">${cs.tools}</span></span>
        </div>

        <div class="space-y-7">
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Overview</h4>
            <p class="text-sm text-neutral-600 leading-relaxed">${cs.overview}</p>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">The Problem</h4>
            <p class="text-sm text-neutral-600 leading-relaxed mb-3">${cs.problem.intro}</p>
            <ul class="space-y-2">${issuesHTML}</ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Constraints</h4>
            <ul class="space-y-2">${constraintsHTML}</ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Process</h4>
            <div class="space-y-0">${processHTML}</div>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Outcome</h4>
            <ul class="space-y-2">${outcomeHTML}</ul>
          </div>

          <div class="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">What I'd Do Differently</h4>
            <p class="text-sm text-neutral-600 leading-relaxed italic">"${cs.reflection}"</p>
          </div>
        </div>
      </div>
    `;
    modalBody.scrollTop = 0;
  }

  modalClose.addEventListener('click', closeCaseModal);
  caseModal.addEventListener('click', e => { if (e.target === caseModal) closeCaseModal(); });
  modalPrev.addEventListener('click', () => {
    if (currentModalIndex > 0) { currentModalIndex--; renderModalContent(currentModalIndex); }
  });
  modalNext.addEventListener('click', () => {
    if (currentModalIndex < DB.caseStudies.length - 1) { currentModalIndex++; renderModalContent(currentModalIndex); }
  });

  function closeCaseModal() {
    caseModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCaseModal();
      closeVisualModal();
    }
  });

  // ——— Design Process ———
  function renderProcess() {
    const grid = document.querySelector('#process .grid');
    DB.process.forEach((step, i) => {
      const el = document.createElement('div');
      el.className = 'reveal bg-white border border-neutral-200 rounded-2xl p-6 hover:border-primary-200 transition-colors duration-200';
      el.style.transitionDelay = `${i * 0.07}s`;
      el.innerHTML = `
        <div class="text-xs font-semibold text-primary-600 mb-4 font-mono">${step.step}</div>
        <h3 class="text-base font-semibold text-neutral-900 mb-3 leading-snug">${step.title}</h3>
        <p class="text-sm text-neutral-400 leading-relaxed">${step.desc}</p>
      `;
      grid.appendChild(el);
    });
    observeReveal();
  }

  // ——— Visual Works Bento ———
  const bentoGrid = document.getElementById('bento-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  let allLoaded = false;

  function renderBentoItems(items) {
    items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = `bento-item relative rounded-xl overflow-hidden bg-neutral-200 ${item.span || ''} reveal`;
      el.style.transitionDelay = `${(i % 4) * 0.06}s`;
      el.dataset.id = item.id;
      el.innerHTML = `
        <img src="${item.url}" alt="${item.title}" loading="lazy" decoding="async"
             class="w-full h-full object-cover" width="600" height="400" />
        <div class="bento-overlay absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 flex items-end p-4">
          <div>
            <div class="text-white text-sm font-semibold leading-tight">${item.title}</div>
            <div class="text-white/60 text-xs mt-0.5">${item.category}</div>
          </div>
        </div>
      `;
      el.addEventListener('click', () => openVisualModal(item));
      bentoGrid.appendChild(el);
      revealObserver.observe(el);
    });
  }

  function isMobileView() {
    return window.innerWidth < 768; // md breakpoint is 768px
  }

  function getSortedItems(items) {
    if (isMobileView()) {
      // Sort by category on mobile for better organization
      return [...items].sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  }

  function initBento() {
    const visible = DB.visualWorks.filter(v => !v.hidden);
    const sortedItems = getSortedItems(visible);
    renderBentoItems(sortedItems);

    const hasMore = DB.visualWorks.some(v => v.hidden);
    if (!hasMore) loadMoreBtn.style.display = 'none';
  }

  loadMoreBtn.addEventListener('click', () => {
    if (allLoaded) return;
    const hidden = DB.visualWorks.filter(v => v.hidden);
    const sortedHidden = getSortedItems(hidden);
    renderBentoItems(sortedHidden);
    allLoaded = true;
    loadMoreBtn.style.display = 'none';
  });

  // ——— Visual Works Modal ———
  const visualModal = document.getElementById('visual-modal');
  const visualModalImg = document.getElementById('visual-modal-img');
  const visualModalTitle = document.getElementById('visual-modal-title');
  const visualModalClose = document.getElementById('visual-modal-close');
  const visualModalPrev = document.getElementById('visual-modal-prev');
  const visualModalNext = document.getElementById('visual-modal-next');
  let currentVisualIndex = 0;

  function updateVisualModal() {
    const currentItem = DB.visualWorks[currentVisualIndex];
    visualModalImg.src = currentItem.url;
    visualModalImg.alt = currentItem.title;
    visualModalTitle.textContent = currentItem.title;
    
    // Update button states
    visualModalPrev.disabled = currentVisualIndex === 0;
    visualModalNext.disabled = currentVisualIndex === DB.visualWorks.length - 1;
  }

  function openVisualModal(item) {
    const itemIndex = DB.visualWorks.findIndex(v => v.id === item.id && v.url === item.url);
    if (itemIndex === -1) return;
    currentVisualIndex = itemIndex;
    updateVisualModal();
    visualModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeVisualModal() {
    if (!visualModal.classList.contains('hidden')) {
      visualModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  visualModalClose.addEventListener('click', closeVisualModal);
  visualModal.addEventListener('click', e => { if (e.target === visualModal) closeVisualModal(); });
  
  visualModalPrev.addEventListener('click', () => {
    if (currentVisualIndex > 0) {
      currentVisualIndex--;
      updateVisualModal();
    }
  });
  
  visualModalNext.addEventListener('click', () => {
    if (currentVisualIndex < DB.visualWorks.length - 1) {
      currentVisualIndex++;
      updateVisualModal();
    }
  });

  // ——— Init ———
  renderCaseCards();
  renderProcess();
  initBento();
  observeReveal();

})();
