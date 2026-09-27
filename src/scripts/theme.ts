// Theme toggle. The initial theme is applied before paint by an inline script
// in BaseLayout; this only handles switching, persistence and system changes.
type Theme = "light" | "dark";

const KEY = "theme";
const root = document.documentElement;
const systemDark = matchMedia("(prefers-color-scheme: dark)");

function stored(): Theme | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null; // storage blocked (private mode, strict settings)
  }
}

function current(): Theme {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function apply(theme: Theme, animate: boolean) {
  if (animate) {
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 320);
  }
  root.dataset.theme = theme;
  const next = theme === "dark" ? "light" : "dark";
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-label", `Switch to ${next} theme`);
  });
  // Keep the mobile browser chrome in sync with the chosen theme.
  const color = getComputedStyle(root).getPropertyValue("--bg").trim();
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((m) => (m.content = color));
}

apply(current(), false);

document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* preference just won't persist */
    }
    apply(next, true);
  });
});

// Follow the OS theme until the visitor makes an explicit choice.
systemDark.addEventListener("change", (e) => {
  if (!stored()) apply(e.matches ? "dark" : "light", true);
});
