const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const yearNode = document.querySelector("#year");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const next = !nav.classList.contains("open");
    nav.classList.toggle("open", next);
    toggle.setAttribute("aria-expanded", String(next));
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
