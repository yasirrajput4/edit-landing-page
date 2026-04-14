document.addEventListener("DOMContentLoaded", function () {
  // ════════════════════════════════════════
  // DEFAULT CONTENT (mirrors index.js)
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
  // FIELD MAP — input element ID → content key
  // ════════════════════════════════════════
  const FIELD_MAP = {
    "input-nav-brand": "nav-brand",
    "input-nav-link-1": "nav-link-1",
    "input-nav-link-2": "nav-link-2",
    "input-nav-link-3": "nav-link-3",
    "input-nav-link-4": "nav-link-4",

    "input-hero-badge": "hero-badge",
    "input-page-title": "page-title",
    "input-page-subtitle": "page-subtitle",
    "input-page-description": "page-description",
    "input-hero-cta": "hero-cta",

    "input-features-title": "features-title",
    "input-features-subtitle": "features-subtitle",
    "input-feature-1-icon": "feature-1-icon",
    "input-feature-1-title": "feature-1-title",
    "input-feature-1-desc": "feature-1-desc",
    "input-feature-2-icon": "feature-2-icon",
    "input-feature-2-title": "feature-2-title",
    "input-feature-2-desc": "feature-2-desc",
    "input-feature-3-icon": "feature-3-icon",
    "input-feature-3-title": "feature-3-title",
    "input-feature-3-desc": "feature-3-desc",

    "input-stat-1-number": "stat-1-number",
    "input-stat-1-label": "stat-1-label",
    "input-stat-2-number": "stat-2-number",
    "input-stat-2-label": "stat-2-label",
    "input-stat-3-number": "stat-3-number",
    "input-stat-3-label": "stat-3-label",

    "input-cta-title": "cta-title",
    "input-cta-desc": "cta-desc",
    "input-cta-button": "cta-button",

    "input-footer-brand": "footer-brand",
    "input-footer-tagline": "footer-tagline",
    "input-footer-copy": "footer-copy",
  };

  // ════════════════════════════════════════
  // LOAD & POPULATE FORM
  // ════════════════════════════════════════
  function loadSavedContent() {
    const saved = JSON.parse(localStorage.getItem("pageData")) || {};
    return Object.assign({}, DEFAULT_CONTENT, saved);
  }

  function populateFormFields(content) {
    Object.entries(FIELD_MAP).forEach(function ([inputId, contentKey]) {
      const inputEl = document.getElementById(inputId);
      if (inputEl) inputEl.value = content[contentKey] || "";
    });
  }

  populateFormFields(loadSavedContent());

  // ════════════════════════════════════════
  // SAVE BUTTON
  // ════════════════════════════════════════
  document.getElementById("btn-save").addEventListener("click", function () {
    const currentContent = loadSavedContent();

    Object.entries(FIELD_MAP).forEach(function ([inputId, contentKey]) {
      const inputEl = document.getElementById(inputId);
      if (inputEl) {
        const trimmedValue = inputEl.value.trim();
        currentContent[contentKey] =
          trimmedValue || DEFAULT_CONTENT[contentKey];
      }
    });

    localStorage.setItem("pageData", JSON.stringify(currentContent));
    showSaveNotification("✅ Changes saved successfully!");
  });

  // Prevent native form submission
  document
    .getElementById("editor-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });

  // ════════════════════════════════════════
  // RESET BUTTON
  // ════════════════════════════════════════
  document.getElementById("btn-reset").addEventListener("click", function () {
    const confirmed = confirm(
      "Reset all content to defaults? This cannot be undone.",
    );
    if (confirmed) {
      localStorage.removeItem("pageData");
      populateFormFields(DEFAULT_CONTENT);
      showSaveNotification("✅ Content reset to defaults.");
    }
  });

  // ════════════════════════════════════════
  // SAVE NOTIFICATION
  // ════════════════════════════════════════
  function showSaveNotification(message) {
    const notificationEl = document.getElementById("save-notification");
    notificationEl.textContent = message;
    notificationEl.style.display = "block";
    notificationEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

    clearTimeout(notificationEl._hideTimer);
    notificationEl._hideTimer = setTimeout(function () {
      notificationEl.style.display = "none";
    }, 2500);
  }

  // ════════════════════════════════════════
  // SIDEBAR PANEL NAVIGATION
  // ════════════════════════════════════════
  const sidebarNavBtns = document.querySelectorAll(".sidebar-nav-btn");
  const editorPanels = document.querySelectorAll(".editor-panel");

  sidebarNavBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetPanelId = "panel-" + btn.dataset.targetSection;

      // Update active states
      sidebarNavBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      editorPanels.forEach(function (p) {
        p.classList.remove("active");
      });

      btn.classList.add("active");

      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) targetPanel.classList.add("active");

      // Close sidebar drawer on mobile after selection
      if (window.innerWidth <= 640) closeSidebarDrawer();
    });
  });

  // ════════════════════════════════════════
  // MOBILE SIDEBAR DRAWER (toggle button is IN the topbar HTML)
  // ════════════════════════════════════════
  const sidebarEl = document.getElementById("editor-sidebar");
  const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  function openSidebarDrawer() {
    sidebarEl.classList.add("is-open");
    sidebarOverlay.classList.add("is-visible");
    document.body.style.overflow = "hidden"; // prevent scroll behind drawer
  }

  function closeSidebarDrawer() {
    sidebarEl.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  sidebarToggleBtn.addEventListener("click", function () {
    const isOpen = sidebarEl.classList.contains("is-open");
    isOpen ? closeSidebarDrawer() : openSidebarDrawer();
  });

  // Close when clicking the overlay backdrop
  sidebarOverlay.addEventListener("click", closeSidebarDrawer);
});
