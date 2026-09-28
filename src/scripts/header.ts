// Header: floating state, sliding active-section indicator, accessible mobile
// menu, and remembering the chosen language.
const header = document.querySelector<HTMLElement>("[data-header]");
const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const menu = document.querySelector<HTMLElement>("[data-menu]");
const label = document.querySelector<HTMLElement>("[data-menu-label]");
const indicator = document.querySelector<HTMLElement>("[data-indicator]");
const DESKTOP = matchMedia("(min-width: 880px)");

// Remember the language the visitor picks (read before paint in BaseLayout).
document.querySelectorAll<HTMLAnchorElement>("[data-lang-switch]").forEach((a) =>
  a.addEventListener("click", () => {
    try {
      localStorage.setItem("lang", a.dataset.langSwitch ?? "en");
    } catch {
      /* not persisted */
    }
  }),
);

if (header && button && menu && label) {
  const setOpen = (open: boolean, restoreFocus = false) => {
    button.setAttribute("aria-expanded", String(open));
    label.textContent = (open ? button.dataset.labelClose : button.dataset.labelOpen) ?? "";
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
}

// Active section = the last nav section whose top has passed the upper third of the viewport.
const SECTION_ID: Record<string, string> = { home: "top" };
const tracked = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")]
  .map((link) => ({ link, section: document.getElementById(SECTION_ID[link.dataset.navLink ?? ""] ?? link.dataset.navLink ?? "") }))
  .filter((t): t is { link: HTMLAnchorElement; section: HTMLElement } => t.section !== null);

let queued = false;
function update() {
  queued = false;
  header?.classList.toggle("scrolled", window.scrollY > 12);
  const line = window.innerHeight * 0.35;
  let active: HTMLAnchorElement | null = null;
  for (const { link, section } of tracked) if (section.getBoundingClientRect().top <= line) active = link;
  for (const { link } of tracked) link === active ? link.setAttribute("aria-current", "true") : link.removeAttribute("aria-current");
  if (indicator) {
    if (active) {
      indicator.style.setProperty("--x", `${active.offsetLeft}px`);
      indicator.style.setProperty("--w", `${active.offsetWidth}px`);
    }
    indicator.classList.toggle("on", Boolean(active));
  }
}
const schedule = () => {
  if (!queued) {
    queued = true;
    requestAnimationFrame(update);
  }
};
update();
window.addEventListener("scroll", schedule, { passive: true });
window.addEventListener("resize", schedule, { passive: true });
document.fonts?.ready.then(schedule); // link widths change once the web font loads
