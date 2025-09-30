// Smooth-scroll është i aktivizuar nga CSS (scroll-behavior).
// Këtu thjesht theksojmë link-un aktiv kur skrollohet.
const sections = document.querySelectorAll("main section[id]");
const navLinks = [...document.querySelectorAll(".top-nav a")];

const onScroll = () => {
  let cur = null;
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) cur = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${cur}`);
  });
};

document.addEventListener("scroll", onScroll, { passive: true });
onScroll();
