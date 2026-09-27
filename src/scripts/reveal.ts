// Subtle scroll reveal. Content is visible without JS; the hidden starting
// state only exists once `.reveal-ready` is set, and CSS skips it entirely
// for visitors who prefer reduced motion.
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (items.length && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  document.documentElement.classList.add("reveal-ready");
  items.forEach((el) => observer.observe(el));
}
