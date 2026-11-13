/** Inner SVG markup of the 24×24 stroke icons (static, trusted). */
export const ICONS = {
  tower: '<path d="M12 2 7 22M12 2l5 20M6 8h12M7.5 14h9M9 8l6 6M15 8l-6 6"/>',
  home: '<path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5a6.5 6.5 0 0 0 10 10z"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4.5-3.5-6.5-4.5-10-1 2-2 3-3 3 0-2-1-4-3-6 0 4.5-3.5 6.5-3.5 13 0 4 3 7 7 7z"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
} as const;

export type IconName = keyof typeof ICONS;
