# Fluvius Meter Card

Custom Lovelace card for the Belgian digital meter: live import/export, capacity tariff
(quarter-hour forecast), today's usage per tariff, gas/water, per-phase voltage/current and
meter readings. Follows the active Home Assistant theme, including the energy colours.

Built with **Vue 3 + TypeScript + Vite** and shipped as a single JavaScript module.

<p>
  <img src="docs/card-light.png" alt="Fluvius Meter Card, light theme, Dutch, three phases with gas" width="32%">
  <img src="docs/card-dark.png" alt="Fluvius Meter Card, dark theme" width="32%">
  <img src="docs/card-single-phase.png" alt="Fluvius Meter Card, English, single phase without gas" width="32%">
</p>

*Light and dark theme (Dutch, three phases with gas) and an English single-phase setup without gas.
Screenshots come from the dev page with mocked data; regenerate them with `npm run screenshots`.*

## Install in Home Assistant

### HACS (recommended)

[![Open your Home Assistant instance and open this repository inside HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=lieven121&repository=HA-digital-meter-card&category=plugin)

1. Click the button above (or in HACS: **⋮ → Custom repositories**, add
   `https://github.com/lieven121/HA-digital-meter-card` with type *Dashboard*).
2. Click **Download**. HACS adds the dashboard resource for you.
3. Hard-refresh the browser and add the card via **Add card → Fluvius Meter Card**.
   Everything (entities, fuse, language, …) can be set in the visual editor.

HACS shows new releases as updates. Pre-releases only appear after enabling
**Show beta versions** on the repository in HACS.

### Manual

1. Download `fluvius-meter-card.js` from the [latest release](https://github.com/lieven121/HA-digital-meter-card/releases)
   (or build it yourself: `npm install && npm run build` → `dist/fluvius-meter-card.js`).
2. Copy it to `/config/www/fluvius-meter-card.js`.
3. **Settings → Dashboards → ⋮ → Resources → Add resource**
   URL `/local/fluvius-meter-card.js?v=1.0.0`, type *JavaScript module*.
   Change the `?v=` on every update so browsers don't keep the old file.
4. Hard-refresh the browser and add the card via **Add card → Fluvius Meter Card**.

The browser console logs `FLUVIUS-METER-CARD v<version>` so you can see which version is loaded.

## Releasing

1. Bump `version` in `package.json`, run `npm run build`, and commit both together:
   `dist/fluvius-meter-card.js` is tracked so HACS can install from the branch when there is no
   full release yet. Tag the commit: `git tag -a v1.2.3 -m v1.2.3`.
2. Create a GitHub release for the tag with `dist/fluvius-meter-card.js` attached
   (`gh release create v1.2.3 dist/fluvius-meter-card.js`, add `--prerelease` to test first).
   HACS installs that release asset.

## Development

| Command             | What it does                                                   |
| ------------------- | -------------------------------------------------------------- |
| `npm run dev`       | Dev page with two cards on a mocked `hass` (no HA needed)     |
| `npm run build`     | Type-check + production bundle in `dist/`                     |
| `npm test`          | Unit tests for the calculations and the editor mapping       |
| `npm run typecheck` | `vue-tsc` only                                                |
| `npm run screenshots` | Regenerate `docs/*.png` (needs Edge or Chrome; `BROWSER=` to override) |

## Layout

```
src/
  main.ts                    registers the elements + the "Add card" entry
  elements.ts                Vue custom elements + HA card API (setConfig, getCardSize, …)
  FluviusMeterCard.vue       root: theme tokens, remounts the card on config change
  const.ts                   default entities/options, resolveConfig()
  i18n.ts                    nl/en strings for card and editor
  types.ts                   config + minimal Home Assistant types
  composables/
    useMeter.ts              shared context (config, t, entities, power, history, stats) via provide/inject
    useEntities.ts           has/num/unit/kw helpers for configured entities
    usePowerHistory.ts       import/export series for the sparkline + forecast
    useStatistics.ts         today's totals, gas/water mini charts, peak today
    useClock.ts              5 s tick so the quarter ring keeps moving
  logic/                     pure functions (unit-tested): capacity forecast, series maths, formatting
  components/                one component per card section
  editor/                    visual editor (ha-form schema + mapping)
dev/                         mock hass + dev page entry (?theme=dark, ?card=1)
tests/                       vitest
scripts/screenshots.mjs      README screenshots → docs/
legacy/                      the original single-file card, for reference
```

### Notes

- Every `.vue` file is compiled in custom-element mode (`customElement: true` in
  `vite.config.ts`), so each component's `<style>` lands in the card's shadow root.
  All styles share that one shadow root, so keep class names distinct.
- Clicking any element with a `data-k="<entity key>"` attribute opens that entity's
  more-info dialog (one delegated listener in `MeterCard.vue`).
- To add an entity: add it to `EntityKey` (`types.ts`), `DEFAULT_ENTITIES` (`const.ts`),
  the editor schema and labels, then use `ent.kw("my_key")` and the other helpers in a component.

## License

[MIT](LICENSE)
