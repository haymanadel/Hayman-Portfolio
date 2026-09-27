// Header behaviour: scrolled state, accessible mobile menu, active-section highlight.
const header = document.querySelector<HTMLElement>("[data-header]");
const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const menu = document.querySelector<HTMLElement>("[data-menu]");
const label = document.querySelector<HTMLElement>("[data-menu-label]");
const DESKTOP = matchMedia("(min-width: 920px)");

if (header && button && menu && label) {
  const setOpen = (open: boolean, restoreFocus = false) => {
    button.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close menu" : "Open menu";
    menu.hidden = !open;
    header.classList.toggle("open", open);
    if (!open && restoreFocus) button.focus();
  };

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("[data-menu-link]").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) setOpen(false, true);
  });
  DESKTOP.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Highlight the nav item of the section being read: the last nav section whose
// top has passed the middle of the viewport. Nothing is highlighted in the hero.
const tracked = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")]
  .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
  .filter((t): t is { link: HTMLAnchorElement; section: HTMLElement } => t.section !== null);

if (tracked.length) {
  let queued = false;
  const update = () => {
    queued = false;
    const line = window.innerHeight * 0.5;
    let active: HTMLAnchorElement | null = null;
    for (const { link, section } of tracked) if (section.getBoundingClientRect().top <= line) active = link;
    for (const { link } of tracked) link === active ? link.setAttribute("aria-current", "true") : link.removeAttribute("aria-current");
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}
