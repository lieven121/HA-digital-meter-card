/*
 * Fluvius Meter Card – custom Lovelace card for the Belgian digital meter.
 * Entry point of the bundle: registers the card + editor elements and announces
 * the card to the "Add card" picker.
 */
import { CARD_TYPE, EDITOR_TYPE } from "./const";
import { FluviusMeterCardEditorElement, FluviusMeterCardElement } from "./elements";

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, FluviusMeterCardElement);
if (!customElements.get(EDITOR_TYPE)) customElements.define(EDITOR_TYPE, FluviusMeterCardEditorElement);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Fluvius Meter Card",
    description: "Live vermogen, capaciteitstarief, dagverbruik, gas/water en fasen voor de Belgische digitale meter.",
    preview: true,
  });
}

console.info(`%c FLUVIUS-METER-CARD %c v${__VERSION__} `, "background:#488fc2;color:#fff", "");
