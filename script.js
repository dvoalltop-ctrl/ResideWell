/* ============================================================
   ResideWell — Landing Page Scripts
   Lightweight, no dependencies.
   ============================================================ */

// CUSTOMIZE: replace with your real inbox before launch.
// This is where the contact form's pre-filled email is sent.
const CONTACT_EMAIL = "hello@residewell.com";

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after tapping any link inside it
navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Contact form: mailto fallback ----------
   There is no backend, so submitting the form opens the
   visitor's email client with a pre-filled message.
   See README.md for how to replace this with Formspree,
   Netlify Forms, Tally, or HubSpot later.
----------------------------------------------------- */
const form = document.getElementById("pilot-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Use built-in browser validation for required fields
  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const property = data.get("property").trim();
  const location = data.get("location").trim();
  const message = data.get("message").trim();

  const subject = `Pilot inquiry — ${property}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Property Name: ${property}`,
    `Property Location: ${location}`,
    "",
    "Message:",
    message || "(none)",
    "",
    "— Sent from the ResideWell website contact form",
  ].join("\n");

  window.location.href =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
