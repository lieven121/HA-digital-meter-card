import "../src/main";
import type { DigitalMeterCardElement } from "../src/elements";
import type { CardConfig, HomeAssistant } from "../src/types";
import { startMockHass } from "./mock-hass";

const configs: CardConfig[] = [
  { language: "nl" },
  { language: "en", title: "Single phase, no gas", fuse_amps: 40, entities: { gas: "", voltage_l2: "", voltage_l3: "", current_l2: "", current_l3: "" } },
];

// ?theme=dark and ?card=<index> (used by `npm run screenshots`)
const params = new URLSearchParams(location.search);
if (params.has("theme")) {
  document.documentElement.dataset.theme = params.get("theme")!;
  document.querySelector("button")!.hidden = true;
}
const only = params.get("card");

const cards = configs.filter((_, i) => only == null || String(i) === only).map((config) => {
  const card = document.createElement("digital-meter-card") as DigitalMeterCardElement;
  card.setConfig(config);
  document.getElementById("cards")!.appendChild(card);
  return card;
});

startMockHass((hass: HomeAssistant) => cards.forEach((c) => { c.hass = hass; }));

document.addEventListener("hass-more-info", (ev) => {
  console.log("more-info", (ev as CustomEvent<{ entityId: string }>).detail.entityId);
});
