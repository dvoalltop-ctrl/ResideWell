(function () {
  const contactEmail = "hello@residewell.com"; // Customize before publishing.
  const form = document.querySelector("#pilot-form");
  const status = document.querySelector("#form-status");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const property = String(data.get("property") || "").trim();
    const location = String(data.get("location") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent("ResideWell pilot information request");
    const body = encodeURIComponent(
      [
        "Hi ResideWell,",
        "",
        "I would like to request information about an 8-week resident wellness pilot.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Property Name: ${property || "Not provided"}`,
        `Property Location: ${location || "Not provided"}`,
        "",
        "Message:",
        message || "Not provided",
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    document.body.classList.add("form-submitted");

    if (status) {
      status.textContent =
        "Opening your email app with a prepared pilot request. If it does not open, email hello@residewell.com directly.";
    }
  });
})();
