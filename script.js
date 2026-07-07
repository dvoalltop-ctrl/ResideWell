/**
 * ResideWell landing page — lightweight interactions
 * CUSTOMIZE: Update CONTACT_EMAIL when you have a real inbox
 */

(function () {
  "use strict";

  // CUSTOMIZE: Replace with your real contact email
  var CONTACT_EMAIL = "hello@residewell.com";

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");
  var contactForm = document.getElementById("contact-form");
  var yearEl = document.getElementById("year");
  var mobileCtaBar = document.querySelector(".mobile-cta-bar");
  var contactSection = document.getElementById("contact");

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Mobile navigation */
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      siteNav.classList.toggle("is-open", !expanded);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        siteNav.classList.remove("is-open");
      });
    });
  }

  /* Contact form — mailto fallback (no backend) */
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var propertyName = document.getElementById("property-name").value.trim();
      var propertyLocation = document.getElementById("property-location").value.trim();
      var message = document.getElementById("message").value.trim();

      if (!name || !email || !propertyName || !propertyLocation) {
        contactForm.reportValidity();
        return;
      }

      var subject = encodeURIComponent("8-Week Pilot Inquiry — " + propertyName);
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "Property Name: " + propertyName,
        "Property Location: " + propertyLocation,
        "",
        "Message:",
        message || "(No additional message provided)",
      ];
      var body = encodeURIComponent(bodyLines.join("\n"));
      var mailtoUrl = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

      window.location.href = mailtoUrl;
    });
  }

  /* Hide mobile CTA bar when contact section is visible */
  if (mobileCtaBar && contactSection && "IntersectionObserver" in window) {
    var ctaObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          mobileCtaBar.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    ctaObserver.observe(contactSection);
  }

  /* Smooth scroll offset for sticky header */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      var headerHeight = document.querySelector(".site-header").offsetHeight;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
