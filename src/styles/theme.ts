// Design tokens for the whole site. Navy comes from the logo; orange is the
// accent the site has always used.
export const theme = {
  color: {
    brand: "#18216d", // logo navy
    brandDeep: "#0e1446",
    brandSoft: "#2f3aa0",
    accent: "#ff825c",
    accentDeep: "#e9653c",
    accentText: "#b8461d", // orange dark enough for small text on white (WCAG AA)
    ink: "#141a3d", // headings
    text: "#474d6d", // body copy
    muted: "#676d8c", // ≥4.5:1 on white
    line: "#e3e6f1",
    surface: "#ffffff",
    bg: "#f6f7fb",
    tint: "#eef0fb",
    success: "#1f8a5b",
    danger: "#c4352b",
  },
  font: {
    sans: "'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(20, 26, 61, 0.06), 0 2px 8px rgba(20, 26, 61, 0.05)",
    md: "0 10px 30px rgba(24, 33, 109, 0.09)",
    lg: "0 24px 60px rgba(24, 33, 109, 0.16)",
  },
  width: {
    container: "1180px",
    narrow: "760px",
  },
  bp: {
    sm: "@media (max-width: 600px)",
    md: "@media (max-width: 900px)",
    lg: "@media (max-width: 1100px)",
  },
} as const;

export type Theme = typeof theme;
