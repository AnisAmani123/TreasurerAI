(function () {
  const config = window.REUNION_SITE_CONFIG || {};
  const checkoutUrl = (config.checkoutUrl || "").trim();
  const dialog = document.getElementById("setup-dialog");
  const note = document.getElementById("checkout-note");
  const price = config.price || "29";
  const currency = config.currencyLabel || "NZ$";
  if (config.productName) document.title = config.productName + " | Reunion Treasurer Made Easy";
  document.querySelectorAll(".price-number").forEach((el) => { el.textContent = price; });
  document.querySelectorAll(".currency-label").forEach((el) => { el.textContent = currency; });
  document.querySelectorAll(".price-text").forEach((el) => { el.textContent = "— " + currency + price; });
  document.querySelectorAll(".buy-link").forEach((link) => {
    if (checkoutUrl) {
      link.href = checkoutUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#buy";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (dialog && typeof dialog.showModal === "function") dialog.showModal();
        else if (note) { note.hidden = false; note.scrollIntoView({ behavior: "smooth", block: "center" }); }
      });
    }
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  if ((config.supportEmail || "").trim()) {
    const footerLinks = document.querySelector(".footer-links");
    if (footerLinks) {
      const contact = document.createElement("a");
      contact.href = "mailto:" + config.supportEmail.trim();
      contact.textContent = "Contact";
      footerLinks.appendChild(contact);
    }
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-header nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
  }
  const close = document.querySelector(".dialog-close");
  if (close && dialog) close.addEventListener("click", () => dialog.close());
  if (dialog) dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
})();
