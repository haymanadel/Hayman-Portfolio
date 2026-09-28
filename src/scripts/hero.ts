// Subtle pointer tilt on the hero portrait — desktop mouse only, never for
// touch or reduced-motion users. Card rotates ≤4°, photo drifts ≤6px, glow follows.
const card = document.querySelector<HTMLElement>("[data-tilt]");
const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (card && canHover && !calm) {
  const photo = card.querySelector<HTMLElement>("img");
  const glow = card.querySelector<HTMLElement>(".glow");
  let frame = 0;
  const set = (x: number, y: number) => {
    card.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
    photo?.style.setProperty("--ix", `${(x * 6).toFixed(1)}px`);
    photo?.style.setProperty("--iy", `${(y * 4).toFixed(1)}px`);
    glow?.style.setProperty("--gx", `${(x * 8).toFixed(1)}%`);
    glow?.style.setProperty("--gy", `${(y * 6).toFixed(1)}%`);
  };
  card.addEventListener("pointermove", (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = card.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / r.height - 0.5) * 2);
    });
  });
  card.addEventListener("pointerleave", () => {
    cancelAnimationFrame(frame);
    set(0, 0);
  });
}
