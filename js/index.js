document.addEventListener("DOMContentLoaded", function () {
  // ════════════════════════════════════════
  // DEFAULT PAGE CONTENT
  // ════════════════════════════════════════
  const DEFAULT_CONTENT = {
    // Navbar
    "nav-brand": "Nexova",
    "nav-link-1": "Solutions",
    "nav-link-2": "Results",
    "nav-link-3": "Pricing",
    "nav-link-4": "Get Started",

    // Hero
    "hero-badge": "✦ Now in Public Beta",
    "page-title": "Scale Your Business with Confidence",
    "page-subtitle":
      "The all-in-one platform for modern teams to build, launch, and grow — faster than ever.",
    "page-description":
      "Nexova gives your team the tools to move at startup speed without sacrificing the reliability that enterprise demands. Trusted by over 25,000 teams worldwide.",
    "hero-cta": "Start for Free",

    // Features
    "features-title": "Why Teams Choose Nexova",
    "features-subtitle":
      "Built for speed, designed for scale, trusted by teams that ship.",
    "feature-1-icon": "⚡",
    "feature-1-title": "Blazing Performance",
    "feature-1-desc":
      "Sub-second load times and globally distributed infrastructure so your users always get the best experience.",
    "feature-2-icon": "🎯",
    "feature-2-title": "Built for Your Brand",
    "feature-2-desc":
      "Fully white-label and customizable. Match every pixel to your brand guidelines without writing a single line of CSS.",
    "feature-3-icon": "🔒",
    "feature-3-title": "Enterprise-Grade Security",
    "feature-3-desc":
      "SOC 2 Type II certified, end-to-end encrypted, and compliant with GDPR, HIPAA, and CCPA from day one.",

    // Stats
    "stat-1-number": "25K+",
    "stat-1-label": "Teams Onboarded",
    "stat-2-number": "99.9%",
    "stat-2-label": "Uptime SLA",
    "stat-3-number": "4.9★",
    "stat-3-label": "Customer Rating",

    // CTA Banner
    "cta-title": "Ready to Build Something Great?",
    "cta-desc":
      "Join 25,000+ teams already using Nexova to ship faster and scale smarter.",
    "cta-button": "Get Started Free",

    // Footer
    "footer-brand": "Nexova",
    "footer-tagline": "Where innovation meets simplicity.",
    "footer-copy": "© 2025 Nexova, Inc. All rights reserved.",
  };

  // ════════════════════════════════════════
  // LOAD SAVED CONTENT (merge with defaults)
  // ════════════════════════════════════════
  const savedContent = JSON.parse(localStorage.getItem("pageData")) || {};
  const pageContent = Object.assign({}, DEFAULT_CONTENT, savedContent);

  // Persist defaults if nothing was saved yet
  if (!localStorage.getItem("pageData")) {
    localStorage.setItem("pageData", JSON.stringify(pageContent));
  }

  // ════════════════════════════════════════
  // APPLY CONTENT TO DOM ELEMENTS
  // ════════════════════════════════════════
  function setElementText(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) el.textContent = text;
  }

  // Navbar
  setElementText("nav-brand", pageContent["nav-brand"]);
  setElementText("nav-link-1", pageContent["nav-link-1"]);
  setElementText("nav-link-2", pageContent["nav-link-2"]);
  setElementText("nav-link-3", pageContent["nav-link-3"]);
  setElementText("nav-link-4", pageContent["nav-link-4"]);

  // Hero
  setElementText("hero-badge", pageContent["hero-badge"]);
  setElementText("page-title", pageContent["page-title"]);
  setElementText("page-subtitle", pageContent["page-subtitle"]);
  setElementText("page-description", pageContent["page-description"]);
  setElementText("hero-cta", pageContent["hero-cta"]);

  // Features
  setElementText("features-title", pageContent["features-title"]);
  setElementText("features-subtitle", pageContent["features-subtitle"]);
  setElementText("feature-1-icon", pageContent["feature-1-icon"]);
  setElementText("feature-1-title", pageContent["feature-1-title"]);
  setElementText("feature-1-desc", pageContent["feature-1-desc"]);
  setElementText("feature-2-icon", pageContent["feature-2-icon"]);
  setElementText("feature-2-title", pageContent["feature-2-title"]);
  setElementText("feature-2-desc", pageContent["feature-2-desc"]);
  setElementText("feature-3-icon", pageContent["feature-3-icon"]);
  setElementText("feature-3-title", pageContent["feature-3-title"]);
  setElementText("feature-3-desc", pageContent["feature-3-desc"]);

  // Stats
  setElementText("stat-1-number", pageContent["stat-1-number"]);
  setElementText("stat-1-label", pageContent["stat-1-label"]);
  setElementText("stat-2-number", pageContent["stat-2-number"]);
  setElementText("stat-2-label", pageContent["stat-2-label"]);
  setElementText("stat-3-number", pageContent["stat-3-number"]);
  setElementText("stat-3-label", pageContent["stat-3-label"]);

  // CTA Banner
  setElementText("cta-title", pageContent["cta-title"]);
  setElementText("cta-desc", pageContent["cta-desc"]);
  setElementText("cta-button", pageContent["cta-button"]);

  // Footer
  setElementText("footer-brand", pageContent["footer-brand"]);
  setElementText("footer-tagline", pageContent["footer-tagline"]);
  setElementText("footer-copy", pageContent["footer-copy"]);

  // Browser tab title
  document.title = pageContent["page-title"] || "Nexova";

  // ════════════════════════════════════════
  // NAVBAR — SCROLL SHADOW
  // ════════════════════════════════════════
  const navbarEl = document.getElementById("navbar");

  window.addEventListener(
    "scroll",
    function () {
      navbarEl.classList.toggle("navbar--scrolled", window.scrollY > 10);
    },
    { passive: true },
  );

  // ════════════════════════════════════════
  // MOBILE MENU — HAMBURGER TOGGLE
  // ════════════════════════════════════════
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenuEl = document.getElementById("nav-menu");

  function openMobileMenu() {
    navMenuEl.classList.add("is-open");
    hamburgerBtn.classList.add("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    navMenuEl.classList.remove("is-open");
    hamburgerBtn.classList.remove("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", function () {
    const isCurrentlyOpen = navMenuEl.classList.contains("is-open");
    isCurrentlyOpen ? closeMobileMenu() : openMobileMenu();
  });

  // Close menu when any nav link is tapped
  navMenuEl.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const clickedInsideNav = navbarEl.contains(event.target);
    if (!clickedInsideNav) closeMobileMenu();
  });

  // ════════════════════════════════════════
  // SCROLL REVEAL — FEATURE & STAT CARDS
  // ════════════════════════════════════════
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".feature-card, .stat-card")
    .forEach(function (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      revealObserver.observe(card);
    });
});
