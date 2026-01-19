// deck.ts
import { cards } from "./cards";
import type { Card } from "./cardTypes";
import type { GameState, AxisKey } from "./gameTypes";

function checkAxisBelow(
  axes: GameState["axes"],
  conditions?: Partial<Record<AxisKey, number>>
) {
  if (!conditions) return true;

  return Object.entries(conditions).every(
    ([axis, value]) => axes[axis as AxisKey] < value
  );
}

function checkAxisAbove(
  axes: GameState["axes"],
  conditions?: Partial<Record<AxisKey, number>>
) {
  if (!conditions) return true;

  return Object.entries(conditions).every(
    ([axis, value]) => axes[axis as AxisKey] > value
  );
}

export function isCardAvailable(card: Card, state: GameState): boolean {
  if (!card.repeatable && state.deckHistory.includes(card.id)) {
    return false;
  }

  if (card.conditions?.axisBelow) {
    if (!checkAxisBelow(state.axes, card.conditions.axisBelow)) {
      return false;
    }
  }

  if (card.conditions?.axisAbove) {
    if (!checkAxisAbove(state.axes, card.conditions.axisAbove)) {
      return false;
    }
  }

  if (card.tensionLevel === "high" && state.decisionsCount < 6) {
    return false;
  }

  return true;
}

export function drawNextCard(state: GameState): Card {
  const availableCards = cards.filter((card) => isCardAvailable(card, state));

  if (availableCards.length === 0) {
    return cards[0];
  }

  return availableCards[Math.floor(Math.random() * availableCards.length)];
}
