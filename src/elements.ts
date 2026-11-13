/*
 * Vue custom elements, extended with the methods Home Assistant expects on a
 * Lovelace card. HA sets `hass` as a property and calls `setConfig()`; both end
 * up as props of the root Vue component.
 *
 * Don't declare class fields here: with useDefineForClassFields they would
 * shadow the prop accessors that defineCustomElement puts on the prototype.
 */
import { defineCustomElement } from "vue";
import { EDITOR_TYPE, resolveConfig } from "./const";
import DigitalMeterCardEditorVue from "./editor/DigitalMeterCardEditor.vue";
import DigitalMeterCardVue from "./DigitalMeterCard.vue";
import type { CardConfig } from "./types";

export class DigitalMeterCardElement extends defineCustomElement(DigitalMeterCardVue) {
  static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TYPE);
  }

  static getStubConfig(): CardConfig {
    return {};
  }

  setConfig(config: CardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    this.config = resolveConfig(config);
  }

  getCardSize(): number {
    return 11;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }
}

export class DigitalMeterCardEditorElement extends defineCustomElement(DigitalMeterCardEditorVue) {
  setConfig(config: CardConfig): void {
    this.config = config ?? {};
  }
}
