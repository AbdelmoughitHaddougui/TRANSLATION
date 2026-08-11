/* ═══════════════════════════════════════
   Cabinet Ouettassi — main.js (clean)
   ═══════════════════════════════════════ */

/* ── Theme Toggle ── */
const root    = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

// Apply saved theme or fallback to system preference
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initial);

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  // Small wiggle animation on toggle
  gsap.fromTo(toggleBtn,
    { rotate: -15, scale: .85 },
    { rotate: 0, scale: 1, duration: .4, ease: 'back.out(2)' }
  );
});

/* ── Lenis smooth scroll ── */
const lenis = new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

/* ── Smooth anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -70, duration: 1.2 }); }
  });
});

/* ── Navbar scroll state ── */
lenis.on('scroll', ({ scroll }) => {
  document.getElementById('nav').classList.toggle('scrolled', scroll > 20);
});

/* ── Hero entrance ── */
gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({ delay: 0.1 });

heroTl
  .to('#hero-eyebrow', { opacity: 1, y: 0, duration: .8, ease: 'power3.out' })
  .to('.h1-line', {
    opacity: 1, y: 0,
    stagger: .1, duration: .9, ease: 'power3.out',
    onStart() {
      gsap.set('.h1-line', { overflow: 'visible' });
    }
  }, '-=.4')
  .to('#hero-sub', { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, '-=.5')
  .to('#hero-actions', { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, '-=.4')
  .to('#hero-card', { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, '-=.7');

/* Set initial states */
gsap.set(['#hero-eyebrow', '#hero-sub', '#hero-actions'], { opacity: 0, y: 16 });
gsap.set('#hero-card', { opacity: 0, y: 24 });

/* ── Section reveals ── */
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 22 },
    {
      opacity: 1, y: 0, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
    }
  );
});

/* Service cards stagger */
gsap.fromTo('.svc-card',
  { opacity: 0, y: 24 },
  {
    opacity: 1, y: 0, stagger: .1, duration: .7, ease: 'power3.out',
    scrollTrigger: { trigger: '.services-grid', start: 'top 82%' }
  }
);

/* About section */
gsap.fromTo('.about-left',
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: '#about', start: 'top 80%' }
  }
);
gsap.fromTo('.stats-col',
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: '#about', start: 'top 80%' }
  }
);

/* ── Animated counters ── */
document.querySelectorAll('.stat-n[data-target]').forEach(el => {
  const target = +el.dataset.target;
  let started = false;
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    onEnter() {
      if (started) return;
      started = true;
      gsap.to({ v: 0 }, {
        v: target, duration: 1.8, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].v); }
      });
    }
  });
});

/* ── Subtle hero card hover tilt ── */
const card = document.getElementById('hero-card');
if (card) {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 6;
    const y = ((e.clientY - r.top) / r.height - .5) * -6;
    gsap.to(card, { rotateY: x, rotateX: y, duration: .4, ease: 'power2.out', transformPerspective: 800 });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: .6, ease: 'power3.out' });
  });
}
