/** Attributes for a link: external http(s) links open in a new tab, safely; mailto/tel/in-page links don't. */
export function linkAttrs(href: string, rel = "noopener noreferrer"): { target?: "_blank"; rel?: string } {
  return /^https?:\/\//.test(href) ? { target: "_blank", rel } : {};
}
