const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const email = contactForm.dataset.email || "hello@residewell.com";
    const subject = "ResideWell Pilot Inquiry";
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Property Name: ${formData.get("propertyName") || ""}`,
      `Property Location: ${formData.get("propertyLocation") || ""}`,
      "",
      "Message:",
      `${formData.get("message") || ""}`,
    ].join("\n");

    const mailtoHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoHref;
  });
}
