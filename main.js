/* ═══════════════════════════════════════
   Cabinet Ouettassi — main.js (Trilingual)
   ═══════════════════════════════════════ */

/* ── Translations Dictionary ── */
const translations = {
  en: {
    'nav.brandTitle': 'Translation Office',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Sworn Translator · Tangier, Morocco',
    'hero.titleLine1': 'Your documents',
    'hero.titleLine2': 'Translated with',
    'hero.titleLine3': 'precision.',
    'hero.sub': 'Ms. Fathia OUETTASSI — Sworn translator accredited by the courts, graduate of the King Fahd Higher School of Translation. Specialized in legal, official, and certified translations for individuals and businesses.',
    'hero.btnCall': 'Call Office',
    'hero.btnEmail': 'Send Email',
    'heroCard.name': 'Ms. Fathia<br/>OUETTASSI',
    'heroCard.role': 'Sworn Translator<br/><em>ترجمانة محلفة</em>',
    'heroCard.seal': 'Accredited by the Courts',
    'heroCard.langs': 'ENGLISH / ARABIC / FRENCH',
    'marquee.m1': 'Legal Translation',
    'marquee.m2': 'Official Documents',
    'marquee.m3': 'Civil Status',
    'marquee.m4': 'Certified Translation',
    'marquee.m5': 'Sworn Translator',
    'marquee.m6': 'Immigration',
    'marquee.m7': 'Contracts',
    'marquee.m8': 'Diplomas',
    'services.label': 'Our Expertise',
    'services.h2': 'What We<br/><em>Translate</em>',
    'services.svc1Title': 'Legal &<br/><em>Sworn Translation</em>',
    'services.svc1Desc': 'Court rulings, notarial acts, official contracts, criminal records. Officially certified and legalized translations.',
    'services.svc2Title': 'Civil Status<br/><em>Documents</em>',
    'services.svc2Desc': 'Birth certificates, marriages (including mixed marriages), divorces, passports, residency permits. For all consular procedures.',
    'services.svc3Title': 'Diplomas &<br/><em>Academic Records</em>',
    'services.svc3Desc': 'University degrees, academic transcripts, professional certifications recognized internationally.',
    'services.svc4Title': 'Commercial<br/><em>Translation</em>',
    'services.svc4Desc': 'Business contracts, tenders, financial reports, official professional correspondence.',
    'express.badge': '⚡ Urgent Requests',
    'express.h2': 'Need your documents urgently?<br/><em>Same-day translation available.</em>',
    'express.sub': 'For urgent legal, consular, or official deadlines, we offer instant express translation services completed on the very same day when required.',
    'express.btnCall': 'Call For Urgent Request',
    'about.label': 'About Us',
    'about.h2': 'A Trusted<br/><em>Translator</em>',
    'about.p1': 'Graduate of the King Fahd Higher School of Translation in Tangier, Ms. Fathia OUETTASSI has been practicing as a sworn translator accredited by Moroccan courts for several years.',
    'about.p2': 'Member of the Association of Sworn Translators before Courts (ATAJ), accredited by the Ministry of Justice of the Kingdom of Morocco.',
    'about.badge1': 'Accredited by Courts',
    'about.badge2': 'King Fahd School of Translation',
    'about.badge3': 'ATAJ Member',
    'about.badge4': 'Ministry of Justice · Morocco',
    'stats.s1Label': 'Working languages',
    'stats.s2Label': 'Files processed',
    'stats.s3Label': 'Average turnaround (h)',
    'stats.s4Label': 'Accepted documents',
    'footer.brandName': 'Ouettassi Translation Office',
    'footer.brandSub': 'Ms. Fathia OUETTASSI · Sworn Translator',
    'footer.ataj': '★ Member of the ATAJ Association — Accredited by the Ministry of Justice of the Kingdom of Morocco',
    'footer.contactUs': 'Contact Us',
    'footer.address': '32 Rue Zerktouni, Office No. 30, 1st floor<br/>Opposite Cinema Goya — Tangier 90000',
    'footer.hoursTitle': 'Opening Hours',
    'footer.hours': 'Monday – Friday: 9:00 AM – 4:30 PM',
    'footer.copy': '© 2026 Ouettassi Translation Office · Tangier, Morocco',
    'footer.gmaps': 'View on Google Maps ↗'
  },
  ar: {
    'nav.brandTitle': 'مكتب الترجمة',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'hero.eyebrow': 'ترجمانة محلفة · طنجة، المغرب',
    'hero.titleLine1': 'وثائقكم',
    'hero.titleLine2': 'مترجمة',
    'hero.titleLine3': 'بدقة عالية.',
    'hero.sub': 'الأستاذة فتحية الوطاسي — ترجمانة محلفة معتمدة لدى المحاكم، خريجة مدرسة الملك فهد العليا للترجمة. متخصصة في الترجمات القانونية، الرسمية والمعتمدة للأفراد والشركات.',
    'hero.btnCall': 'الاتصال بالمكتب',
    'hero.btnEmail': 'إرسال بريد إلكتروني',
    'heroCard.name': 'الأستاذة فتحية<br/>الوطاسي',
    'heroCard.role': 'ترجمانة محلفة<br/><em>Sworn Translator</em>',
    'heroCard.seal': 'معتمدة لدى المحاكم',
    'heroCard.langs': 'الإنكليزية / العربية / الفرنسية',
    'marquee.m1': 'ترجمة قانونية',
    'marquee.m2': 'وثائق رسمية',
    'marquee.m3': 'حالة مدنية',
    'marquee.m4': 'ترجمة معتمدة',
    'marquee.m5': 'ترجمانة محلفة',
    'marquee.m6': 'هجرة',
    'marquee.m7': 'عقود',
    'marquee.m8': 'شهادات',
    'services.label': 'خبراتنا',
    'services.h2': 'الترجمة التي<br/><em>ننجزها</em>',
    'services.svc1Title': 'ترجمة قانونية<br/><em>ومحلفة</em>',
    'services.svc1Desc': 'الأحكام، العقود التوثيقية، العقود الرسمية، السجلات العدلية. ترجمات معتمدة ومصادق عليها رسمياً.',
    'services.svc2Title': 'وثائق<br/><em>الحالة المدنية</em>',
    'services.svc2Desc': 'عقود الازدياد، الزواج بما فيها الزواج المختلط، الطلاق، جوازات السفر، بطاقات الإقامة. لجميع المعاملات القنصلية.',
    'services.svc3Title': 'الشهادات والوثائق<br/><em>الدراسية</em>',
    'services.svc3Desc': 'الشهادات الجامعية، كشوف النقاط، الشهادات المهنية المعترف بها دولياً.',
    'services.svc4Title': 'الترجمة<br/><em>التجارية</em>',
    'services.svc4Desc': 'عقود الأعمال، طلبات العروض، التقارير المالية، المراسلات المهنية الرسمية.',
    'express.badge': '⚡ طلبات عاجلة',
    'express.h2': 'هل تحتاج وثائقك بشكل عاجل؟<br/><em>خدمة الترجمة في نفس اليوم متوفرة.</em>',
    'express.sub': 'للمعاملات العاجلة والمواعيد القنصلية، نقدم خدمة ترجمة فورية ومستعجلة تنجز في نفس اليوم عند الضرورة.',
    'express.btnCall': 'الاتصال للطلبات العاجلة',
    'about.label': 'من نحن',
    'about.h2': 'مترجمة محل<br/><em>ثقة</em>',
    'about.p1': 'خريجة مدرسة الملك فهد العليا للترجمة بطنجة، تمارس الأستاذة فتحية الوطاسي مهنة ترجمانة محلفة معتمدة لدى المحاكم المغربية منذ عدة سنوات.',
    'about.p2': 'عضو في جمعية المترجمين المعتمدين لدى المحاكم (ATAJ)، ومعتمدة من وزارة العدل بالمملكة المغربية.',
    'about.badge1': 'معتمدة لدى المحاكم',
    'about.badge2': 'مدرسة الملك فهد للترجمة',
    'about.badge3': 'عضو ATAJ',
    'about.badge4': 'وزارة العدل · المغرب',
    'stats.s1Label': 'لغات العمل',
    'stats.s2Label': 'معاملة منجزة',
    'stats.s3Label': 'معدل الإنجاز (ساعة)',
    'stats.s4Label': 'وثائق مقبولة',
    'footer.brandName': 'مكتب الترجمة الوطاسي',
    'footer.brandSub': 'الأستاذة فتحية الوطاسي · ترجمانة محلفة',
    'footer.ataj': '★ عضو جمعية المترجمين المعتمدين ATAJ — معتمدة من وزارة العدل بالمملكة المغربية',
    'footer.contactUs': 'تواصل معنا',
    'footer.address': '32 زنقة الزرقطوني، مكتب رقم 30، الطابق الأول<br/>مقابل سينما غويا — طنجة 90000',
    'footer.hoursTitle': 'أوقات العمل',
    'footer.hours': 'من الاثنين إلى الجمعة: من 9:00 إلى 16:30',
    'footer.copy': '© 2026 مكتب الترجمة الوطاسي · طنجة، المغرب',
    'footer.gmaps': 'عرض على خرائط Google ↗'
  },
  fr: {
    'nav.brandTitle': 'Cabinet de Traduction',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Traductrice Assermentée · Tanger, Maroc',
    'hero.titleLine1': 'Vos documents',
    'hero.titleLine2': 'Traduits avec',
    'hero.titleLine3': 'précision.',
    'hero.sub': 'Me. Fathia OUETTASSI — traductrice assermentée agréée près les juridictions, lauréate de l\'École Supérieure Roi Fahd de Traduction. Spécialisée en traductions juridiques, officielles et certifiées pour particuliers et entreprises.',
    'hero.btnCall': 'Appeler le cabinet',
    'hero.btnEmail': 'Envoyer un email',
    'heroCard.name': 'Me. Fathia<br/>OUETTASSI',
    'heroCard.role': 'Traductrice Assermentée<br/><em>ترجمانة محلفة</em>',
    'heroCard.seal': 'Agréée près les juridictions',
    'heroCard.langs': 'ANGLAIS / ARABE / FRANÇAIS',
    'marquee.m1': 'Traduction Juridique',
    'marquee.m2': 'Documents Officiels',
    'marquee.m3': 'État Civil',
    'marquee.m4': 'Traduction Certifiée',
    'marquee.m5': 'Traduction Assermentée',
    'marquee.m6': 'Immigration',
    'marquee.m7': 'Contrats',
    'marquee.m8': 'Diplômes',
    'services.label': 'Nos expertises',
    'services.h2': 'Ce que nous<br/><em>traduisons</em>',
    'services.svc1Title': 'Traduction Juridique<br/><em>& Assermentée</em>',
    'services.svc1Desc': 'Jugements, actes notariés, contrats officiels, casiers judiciaires. Traductions officiellement certifiées et légalisées.',
    'services.svc2Title': 'Documents<br/><em>d\'État Civil</em>',
    'services.svc2Desc': 'Actes de naissance, mariages (y compris le mariage mixte), divorces, passeports, titres de séjour. Pour toutes démarches consulaires.',
    'services.svc3Title': 'Diplômes &<br/><em>Documents Scolaires</em>',
    'services.svc3Desc': 'Diplômes universitaires, relevés de notes, certifications professionnelles reconnus à l\'international.',
    'services.svc4Title': 'Traduction<br/><em>Commerciale</em>',
    'services.svc4Desc': 'Contrats d\'affaires, appels d\'offres, rapports financiers, correspondances professionnelles officielles.',
    'express.badge': '⚡ Demandes Urgentes',
    'express.h2': 'Besoin d\'une traduction urgente ?<br/><em>Service le jour même disponible.</em>',
    'express.sub': 'Pour vos démarches urgentes ou délais consulaires, nous proposons un service de traduction express réalisé le jour même si nécessaire.',
    'express.btnCall': 'Appeler pour une urgence',
    'about.label': 'À propos',
    'about.h2': 'Une traductrice<br/><em>de confiance</em>',
    'about.p1': 'Lauréate de l\'École Supérieure Roi Fahd de Traduction de Tanger, Me. Fathia OUETTASSI exerce en tant que traductrice assermentée agréée près les juridictions marocaines depuis plusieurs années.',
    'about.p2': 'Membre de l\'Association des Traducteurs Agréés près les Juridictions (ATAJ), accréditée par le Ministère de la Justice du Royaume du Maroc.',
    'about.badge1': 'Agréée près les juridictions',
    'about.badge2': 'École Roi Fahd de Traduction',
    'about.badge3': 'Membre ATAJ',
    'about.badge4': 'Ministère de la Justice · Maroc',
    'stats.s1Label': 'Langues de travail',
    'stats.s2Label': 'Dossiers traités',
    'stats.s3Label': 'Délai moyen (h)',
    'stats.s4Label': 'Documents acceptés',
    'footer.brandName': 'Cabinet de Traduction Ouettassi',
    'footer.brandSub': 'Me. Fathia OUETTASSI · Traductrice Assermentée',
    'footer.ataj': '★ Membre de l\'Association ATAJ — Accréditée par le Ministère de la Justice du Royaume du Maroc',
    'footer.contactUs': 'Contactez-nous',
    'footer.address': '32 Rue Zerktouni, Bureau n°30, 1er étage<br/>En face de Cinéma Goya — Tanger 90000',
    'footer.hoursTitle': 'Horaires d\'ouverture',
    'footer.hours': 'Du lundi au vendredi : 9h00 – 16h30',
    'footer.copy': '© 2026 Cabinet de Traduction Ouettassi · Tanger, Maroc',
    'footer.gmaps': 'Voir sur Google Maps ↗'
  }
};

/* ── Language Switcher Function ── */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.removeAttribute('dir');
  }

  // Update text content of all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state on language selector buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language selector buttons listeners
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('lang') || 'en';
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });
});

/* ── Theme Toggle ── */
const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initialTheme);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    gsap.fromTo(toggleBtn,
      { rotate: -15, scale: .85 },
      { rotate: 0, scale: 1, duration: .4, ease: 'back.out(2)' }
    );
  });
}

/* ── Navbar scroll state ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
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

