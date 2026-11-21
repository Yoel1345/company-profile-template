(() => {
  "use strict";

  const WHATSAPP_NUMBER = "628114567890"; // GANTI: nomor WA klien (format 62, tanpa +)

  document.documentElement.classList.add("js-ready");

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Buka menu navigasi");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target instanceof Node && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) closeMenu();
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const quoteForm = document.querySelector("#quote-form");
  const formNotice = document.querySelector("#form-notice");

  if (quoteForm instanceof HTMLFormElement && formNotice instanceof HTMLElement) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;

      const formData = new FormData(quoteForm);
      const name = String(formData.get("name") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const service = String(formData.get("service") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const lines = [
        "Halo Samudra Karya Logistik, saya ingin meminta penawaran.",
        "",
        `Nama: ${name}`,
        `Perusahaan: ${company || "-"}`,
        `Email: ${email}`,
        `Telepon: ${phone}`,
        `Layanan: ${service}`,
        `Kebutuhan: ${message}`
      ];
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      const whatsappWindow = window.open(url, "_blank");
      if (whatsappWindow) whatsappWindow.opener = null;

      formNotice.replaceChildren();
      if (whatsappWindow) {
        formNotice.textContent = "Pesan penawaran telah disiapkan di WhatsApp pada tab baru.";
        formNotice.classList.add("form-success");
      } else {
        formNotice.classList.remove("form-success");
        formNotice.append("Tab WhatsApp tidak dapat dibuka. ");
        const fallbackLink = document.createElement("a");
        fallbackLink.href = url;
        fallbackLink.target = "_blank";
        fallbackLink.rel = "noopener noreferrer";
        fallbackLink.textContent = "Buka pesan WhatsApp";
        formNotice.append(fallbackLink);
      }
    });
  }
})();