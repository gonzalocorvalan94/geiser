
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbarItems = document.querySelector(".navbar-items");
  const links = document.querySelectorAll(".navbar-items a");

  if (!hamburger || !navbarItems) return;

  // Abrir y cerrar menú
  hamburger.addEventListener("click", () => {
    const isOpen = navbarItems.classList.toggle("active");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });

  // Cerrar al seleccionar una sección
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navbarItems.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
    });
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener("click", (event) => {
    if (
      !hamburger.contains(event.target) &&
      !navbarItems.contains(event.target)
    ) {
      navbarItems.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navbarItems.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
    }
  });
});
