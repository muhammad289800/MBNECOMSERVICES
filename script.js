const pathname = window.location.pathname;
const isHtmlPath = pathname.endsWith(".html");

if (isHtmlPath) {
  const cleanPath = pathname.endsWith("/index.html")
    ? pathname.replace("/index.html", "/")
    : pathname.replace(".html", "/");

  const target = `${cleanPath}${window.location.search}${window.location.hash}`;
  window.location.replace(target);
}

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
