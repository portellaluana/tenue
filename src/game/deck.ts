import { cards } from "./cards";
import type { Card } from "./cardTypes";
import type { AxisKey, GameState } from "./gameTypes";

export function isCardAvailable(card: Card, state: GameState): boolean {
  if (!card.conditions) return true;

  const { axisBelow, axisAbove, played } = card.conditions;

  if (played && !played.every((id) => state.deckHistory.includes(id))) {
    return false;
  }

  if (axisBelow) {
    for (const key of Object.keys(axisBelow) as AxisKey[]) {
      if (state.axes[key] > axisBelow[key]!) return false;
    }
  }

  if (axisAbove) {
    for (const key of Object.keys(axisAbove) as AxisKey[]) {
      if (state.axes[key] < axisAbove[key]!) return false;
    }
  }

  if (!card.repeatable && state.deckHistory.includes(card.id)) {
    return false;
  }

  return true;
}

export function drawNextCard(state: GameState): Card {
  const availableCards = cards.filter((card) => isCardAvailable(card, state));

  const highTensionCards = availableCards.filter(
    (card) => card.tensionLevel === "high"
  );

  if (highTensionCards.length > 0) {
    return highTensionCards[
      Math.floor(Math.random() * highTensionCards.length)
    ];
  }

  return availableCards[Math.floor(Math.random() * availableCards.length)];
}
