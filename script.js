/* ==========================================================================
   Omar Mohammed - Renewable Energy Engineer Portfolio
   JavaScript: Theme, Language (AR/EN RTL/LTR), Interactions
   ========================================================================== */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // Translations (Full AR / EN)
  // ------------------------------------------------------------------
  const translations = {
    ar: {
      logo: "عمر محمد",
      "nav.home": "الرئيسية",
      "nav.about": "من أنا",
      "nav.experience": "الخبرات",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.services": "الخدمات",
      "nav.why": "لماذا أنا",
      "nav.contact": "تواصل",

      "hero.kicker": "مهندس طاقة متجددة",
      "hero.name": "عمر محمد",
      "hero.title": "مهندس طاقة متجددة | Renewable Energy Engineer",
      "hero.desc":
        "أصمم وأطور حلول الطاقة المستدامة، وأحول الأفكار الهندسية إلى مشاريع واقعية تجمع بين الكفاءة والاعتمادية والاستدامة.",
      "hero.btn.explore": "استكشف أعمالي",
      "hero.btn.contact": "تواصل معي",
      "hero.scroll": "أسفل للمزيد",

      "about.title": "من أنا",
      "about.lead":
        "مهندس طاقة متجددة أمتلك خلفية هندسية متخصصة في قطاع الاتصالات، أعمل في صيانة الأنظمة ومتابعة جاهزية مواقع الاتصالات وأنظمة الطاقة والتشغيل، إلى جانب خبرة عملية في تصميم وتركيب وتنفيذ المنظومات الشمسية الكبيرة والمتكاملة.",
      "about.desc":
        "أجمع بين الخبرة الهندسية في البنية التحتية للطاقة والعمل الميداني في تنفيذ حلول الطاقة الشمسية، مع التركيز على الألواح الشمسية، البطاريات، العاكسات، وحلول التخزين المستدامة للمواقع والمنشآت.",
      "about.item1": "خبرة عملية في أنظمة الطاقة والبنية التحتية لمواقع الاتصالات",
      "about.item2": "تصميم وتركيب المنظومات الشمسية الكبيرة والمتكاملة",
      "about.item3": "تعامل احترافي مع العاكسات وأنظمة تخزين الطاقة بالبطاريات",
      "about.item4": "تنفيذ ميداني لمشاريع الطاقة المستدامة وفق معايير السلامة والجودة",

      "experience.title": "الخبرات المهنية",
      "exp.badge1": "العمل الحالي",
      "exp.job1": "مهندس في قطاع الاتصالات",
      "exp.desc1":
        "العمل في بيئة هندسية تشمل صيانة الأنظمة ومتابعة جاهزية مواقع الاتصالات وأنظمة الطاقة والتشغيل، مع ضمان استقرار البنية التحتية واستمرارية الخدمة.",
      "exp.badge2": "تنفيذ وتركيب",
      "exp.job2": "تنفيذ وتركيب المنظومات الشمسية",
      "exp.desc2":
        "تصميم وتنفيذ حلول الطاقة الشمسية للمشاريع، وتركيب الألواح والبطاريات والعاكسات وتجهيز الأنظمة وتشغيلها، مع التركيز على المنظومات الكبيرة والمتكاملة.",

      "skills.title": "التخصصات والمهارات",
      "skill.renewable": "Renewable Energy Systems",
      "skill.solar": "Solar PV Systems",
      "skill.large": "Large-Scale Solar Installations",
      "skill.inverter": "Solar Inverters",
      "skill.battery": "Battery Storage Systems",
      "skill.telecom": "Telecom Power Systems",
      "skill.maintenance": "Preventive Maintenance",
      "skill.electrical": "Electrical Systems",
      "skill.troubleshoot": "Technical Troubleshooting",
      "skill.execution": "Project Execution",

      "projects.title": "المشاريع والأعمال",
      "filter.all": "الكل",
      "filter.solar": "محطات الطاقة الشمسية",
      "filter.battery": "البطارية والتخزين",
      "filter.inverter": "العاكسات",
      "filter.telecom": "أنظمة الاتصالات",
      "projects.note":
        "المعرض مخصص لإضافة صورك ومشاريعك الحقيقية. استبدل صور المعاينة الحالية بصور مشاريعك المنفذة عند توفرها.",

      "services.title": "الخدمات",
      "service.design": "تصميم المنظومات الشمسية",
      "service.designDesc":
        "دراسة الجدوى والتصميم الهندسي للمنظومات الشمسية وفق احتياجات الموقع والحمل الكهربائي.",
      "service.install": "تركيب وتنفيذ الأنظمة الشمسية الكبيرة",
      "service.installDesc":
        "تنفيذ وتركيب المنظومات الشمسية المتكاملة للمشاريع الكبيرة والمنشآت التجارية والسكنية.",
      "service.battery": "تجهيز أنظمة تخزين الطاقة بالبطاريات",
      "service.batteryDesc":
        "تصميم وتركيب أنظمة تخزين الطاقة بالبطاريات لضمان استقرار الإمداد واستمرارية التشغيل.",
      "service.inverter": "تركيب وربط العاكسات",
      "service.inverterDesc":
        "تركيب وبرمجة وربط العاكسات الكهربائية مع الألواح والبطاريات وشبكة الطاقة.",
      "service.maintenance": "صيانة وفحص أنظمة الطاقة الشمسية",
      "service.maintenanceDesc":
        "الصيانة الوقائية والتشخيص الفني لأنظمة الطاقة الشمسية لضمان الكفاءة والأداء الأمثل.",
      "service.solutions": "تقديم الحلول الهندسية لأنظمة الطاقة",
      "service.solutionsDesc":
        "استشارات وحلول هندسية متكاملة لأنظمة الطاقة والبنية التحتية لمواقع الاتصالات والمنشآت.",

      "why.title": "لماذا تختارني",
      "why.item1": "خلفية هندسية متخصصة",
      "why.item1Desc":
        "تخصص في الطاقة المتجددة مع تركيز على الهندسة الكهربائية وأنظمة الطاقة المستدامة.",
      "why.item2": "خبرة عملية في قطاع الاتصالات",
      "why.item2Desc":
        "عمل ميداني في صيانة الأنظمة ومتابعة جاهزية مواقع الاتصالات والبنية التحتية للطاقة.",
      "why.item3": "اهتمام بالتفاصيل والجودة",
      "why.item3Desc":
        "تنفيذ دقيق لكل مرحلة من مراحل المشروع مع التركيز على الجودة والاعتمادية.",
      "why.item4": "تنفيذ ميداني للمشاريع",
      "why.item4Desc":
        "تصميم وتركيب وتشغيل المنظومات الشمسية الكبيرة من البداية حتى التشغيل الفعلي.",
      "why.item5": "حلول تركز على الكفاءة والاستدامة",
      "why.item5Desc":
        "حلول طاقة مستدامة تجمع بين الكفاءة التشغيلية والحفاظ على الموارد والبيئة.",
      "why.item6": "الالتزام بمعايير السلامة",
      "why.item6Desc":
        "التطبيق الصارم لمعايير السلامة المهنية والاعتمادية في جميع الأعمال والتنفيذات.",

      "contact.title": "تواصل معي",
      "contact.desc":
        "مستعد لمناقشة مشاريعك القادمة في الطاقة المتجددة والنظم الشمسية. تواصل معي عبر القنوات التالية.",
      "contact.label.phone": "الهاتف",
      "contact.value.phone": "+966 50 000 0000",
      "contact.label.email": "البريد الإلكتروني",
      "contact.value.email": "your@email.com",
      "contact.label.linkedin": "LinkedIn",
      "contact.value.linkedin": "رابط LinkedIn",
      "contact.label.facebook": "فيسبوك",
      "contact.value.facebook": "رابط فيسبوك",
      "contact.btn.whatsapp": "📱 تواصل عبر واتساب",
      "contact.formNote":
        "هذا القسم مخصص للتواصل المباشر. يمكن ربطه بنموذج إرسال لاحقًا.",

      "footer.tagline": "مهندس طاقة متجددة | حلول الطاقة المستدامة",
      "footer.copy": "© 2026 عمر محمد. جميع الحقوق محفوظة.",
      "float.whatsapp": "واتساب",
    },
    en: {
      logo: "Omar Mohammed",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.why": "Why Me",
      "nav.contact": "Contact",

      "hero.kicker": "Renewable Energy Engineer",
      "hero.name": "Omar Mohammed",
      "hero.title": "Renewable Energy Engineer",
      "hero.desc":
        "Engineering Sustainable Energy Solutions Through Innovation, Expertise, and Real-World Execution.",
      "hero.btn.explore": "Explore My Work",
      "hero.btn.contact": "Contact Me",
      "hero.scroll": "Scroll down for more",

      "about.title": "About Me",
      "about.lead":
        "A Renewable Energy Engineer with a specialized engineering background in the telecommunications sector, working in system maintenance, telecom site readiness, power systems, and operations — alongside hands-on experience designing and installing large-scale, integrated solar energy systems.",
      "about.desc":
        "I combine engineering expertise in power infrastructure and field work in executing solar energy solutions, focusing on solar panels, batteries, inverters, and sustainable storage solutions for sites and facilities.",
      "about.item1": "Practical experience in power systems and telecom site infrastructure",
      "about.item2": "Design and installation of large-scale, integrated solar systems",
      "about.item3": "Professional handling of inverters and battery energy storage systems",
      "about.item4": "Field execution of sustainable energy projects per safety and quality standards",

      "experience.title": "Professional Experience",
      "exp.badge1": "Current Role",
      "exp.job1": "Engineer — Telecommunications Sector",
      "exp.desc1":
        "Working in an engineering environment covering system maintenance, telecom site readiness, power systems, and operations — ensuring infrastructure stability and service continuity.",
      "exp.badge2": "Installation & Execution",
      "exp.job2": "Solar System Installation & Execution",
      "exp.desc2":
        "Designing and executing solar energy solutions for projects, installing panels, batteries, inverters, and commissioning systems — focusing on large-scale, integrated installations.",

      "skills.title": "Specializations & Skills",
      "skill.renewable": "Renewable Energy Systems",
      "skill.solar": "Solar PV Systems",
      "skill.large": "Large-Scale Solar Installations",
      "skill.inverter": "Solar Inverters",
      "skill.battery": "Battery Storage Systems",
      "skill.telecom": "Telecom Power Systems",
      "skill.maintenance": "Preventive Maintenance",
      "skill.electrical": "Electrical Systems",
      "skill.troubleshoot": "Technical Troubleshooting",
      "skill.execution": "Project Execution",

      "projects.title": "Projects & Works",
      "filter.all": "All",
      "filter.solar": "Solar Power Stations",
      "filter.battery": "Battery & Storage",
      "filter.inverter": "Inverters",
      "filter.telecom": "Telecom Systems",
      "projects.note":
        "This gallery is reserved for your real photos and projects. Replace the placeholder images with your executed projects when available.",

      "services.title": "Services",
      "service.design": "Solar System Design",
      "service.designDesc":
        "Feasibility studies and engineering design of solar systems based on site needs and electrical load.",
      "service.install": "Large-Scale Solar Installation & Execution",
      "service.installDesc":
        "Execution and installation of integrated solar systems for large projects and commercial and residential facilities.",
      "service.battery": "Battery Energy Storage Systems",
      "service.batteryDesc":
        "Design and installation of battery energy storage systems to ensure supply stability and operational continuity.",
      "service.inverter": "Solar Inverter Installation & Interconnection",
      "service.inverterDesc":
        "Installation, programming, and interconnection of electrical inverters with panels, batteries, and the power grid.",
      "service.maintenance": "Solar System Maintenance & Inspection",
      "service.maintenanceDesc":
        "Preventive maintenance and technical diagnosis of solar energy systems to ensure efficiency and optimal performance.",
      "service.solutions": "Engineering Solutions for Power Systems",
      "service.solutionsDesc":
        "Integrated engineering solutions and consultations for power systems and infrastructure of telecom sites and facilities.",

      "why.title": "Why Work With Me",
      "why.item1": "Specialized Engineering Background",
      "why.item1Desc":
        "Specialized in renewable energy with a focus on electrical engineering and sustainable power systems.",
      "why.item2": "Practical Experience in Telecommunications",
      "why.item2Desc":
        "Field work in system maintenance and telecom site readiness, and power infrastructure.",
      "why.item3": "Attention to Detail and Quality",
      "why.item3Desc":
        "Precise execution of every project stage with a focus on quality and reliability.",
      "why.item4": "Field Execution of Projects",
      "why.item4Desc":
        "Design, installation, and commissioning of large-scale solar systems from start to actual operation.",
      "why.item5": "Efficiency- and Sustainability-Focused Solutions",
      "why.item5Desc":
        "Sustainable energy solutions that combine operational efficiency with resource and environmental preservation.",
      "why.item6": "Commitment to Safety Standards",
      "why.item6Desc":
        "Strict application of occupational safety and reliability standards across all work and execution.",

      "contact.title": "Contact Me",
      "contact.desc":
        "Ready to discuss your upcoming renewable energy and solar projects. Reach me through the channels below.",
      "contact.label.phone": "Phone",
      "contact.value.phone": "+966 50 000 0000",
      "contact.label.email": "Email",
      "contact.value.email": "your@email.com",
      "contact.label.linkedin": "LinkedIn",
      "contact.value.linkedin": "LinkedIn Profile",
      "contact.label.facebook": "Facebook",
      "contact.value.facebook": "Facebook Profile",
      "contact.btn.whatsapp": "📱 Contact via WhatsApp",
      "contact.formNote":
        "This section is for direct contact. A submission form can be connected later.",

      "footer.tagline": "Renewable Energy Engineer | Sustainable Energy Solutions",
      "footer.copy": "© 2026 Omar Mohammed. All rights reserved.",
      "float.whatsapp": "WhatsApp",
    },
  };

  // ------------------------------------------------------------------
  // State
  // ------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const themeToggleText = document.getElementById("themeToggleText");
  const langToggle = document.getElementById("langToggle");
  const langLabel = langToggle.querySelector(".lang-label");

  // ------------------------------------------------------------------
  // Theme
  // ------------------------------------------------------------------
  function getSavedTheme() {
    return localStorage.getItem("omar-theme") || "dark";
  }
  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("omar-theme", theme);
    const isDark = theme === "dark";
    themeIcon.textContent = isDark ? "🌙" : "☀️";
    themeToggleText.textContent = isDark
      ? document.documentElement.lang === "ar"
        ? "الوضع الليلي"
        : "Dark Mode"
      : document.documentElement.lang === "ar"
        ? "الوضع النهاري"
        : "Light Mode";
    themeToggle.setAttribute(
      "title",
      document.documentElement.lang === "ar"
        ? isDark
          ? "الوضع النهاري"
          : "الوضع الليلي"
        : isDark
          ? "Light Mode"
          : "Dark Mode"
    );
    themeToggle.setAttribute("aria-label", themeToggle.getAttribute("title"));
  }
  themeToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // ------------------------------------------------------------------
  // Language
  // ------------------------------------------------------------------
  function getSavedLang() {
    return localStorage.getItem("omar-lang") || "ar";
  }
  function applyLang(lang) {
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("omar-lang", lang);

    // Update all [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update links hrefs that are translatable (phone/email remain same)
    // Update theme toggle text according to new lang
    const isDark = htmlEl.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "dark" : "light"); // re-applies to refresh text

    langLabel.textContent = lang === "ar" ? "AR" : "EN";
    langToggle.setAttribute("title", lang === "ar" ? "الإنجليزية" : "Arabic");
    langToggle.setAttribute("aria-label", langToggle.getAttribute("title"));

    // Update WhatsApp float text
    const waText = document.querySelector(".wa-text");
    if (waText) waText.textContent = translations[lang]["float.whatsapp"];
  }
  langToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("lang") || "ar";
    applyLang(current === "ar" ? "en" : "ar");
  });

  // ------------------------------------------------------------------
  // Init theme & lang
  // ------------------------------------------------------------------
  applyTheme(getSavedTheme());
  applyLang(getSavedLang());

  // ------------------------------------------------------------------
  // Navbar scroll effect
  // ------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = "var(--shadow-sm)";
    } else {
      navbar.style.boxShadow = "none";
    }
    // back to top button
    const btt = document.getElementById("backToTop");
    if (window.scrollY > 400) {
      btt.classList.add("visible");
    } else {
      btt.classList.remove("visible");
    }
    lastScrollY = window.scrollY;
  });

  // ------------------------------------------------------------------
  // Mobile menu toggle
  // ------------------------------------------------------------------
  const navMenuBtn = document.getElementById("navMenuBtn");
  const navLinks = document.getElementById("navLinks");
  navMenuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navMenuBtn.setAttribute("aria-expanded", open);
  });
  // Close mobile menu on link click
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // ------------------------------------------------------------------
  // Lightbox
  // ------------------------------------------------------------------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, title, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxCaption.textContent = caption;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // ------------------------------------------------------------------
  // Back to top
  // ------------------------------------------------------------------
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ------------------------------------------------------------------
  // Scroll reveal
  // ------------------------------------------------------------------
  const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // ------------------------------------------------------------------
  // WhatsApp float link (ensure number easy to edit)
  // ------------------------------------------------------------------
  const waLinks = document.querySelectorAll('a[href^="https://wa.me/"], a[href^="tel:"]');
  // Numbers are set in HTML; edit them there. Keep this block as a hook.
})();