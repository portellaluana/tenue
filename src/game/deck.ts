// game/deck.ts
import { cards } from "./cards";
import type { GameState, AxisKey } from "./gameTypes";
import type { Card } from "./cardTypes";

export function drawNextCard(state: GameState): Card {
  const { axes, deckHistory } = state;

  const availableCards = cards.filter((card) => {
    if (deckHistory.includes(card.id)) {
      return false;
    }

    if (card.conditions?.axisBelow) {
      for (const axis in card.conditions.axisBelow) {
        const key = axis as AxisKey;
        if (axes[key] >= card.conditions.axisBelow[key]!) {
          return false;
        }
      }
    }

    if (card.conditions?.axisAbove) {
      for (const axis in card.conditions.axisAbove) {
        const key = axis as AxisKey;
        if (axes[key] <= card.conditions.axisAbove[key]!) {
          return false;
        }
      }
    }

    if (card.conditions?.played) {
      const hasAllRequired = card.conditions.played.every((id) =>
        deckHistory.includes(id)
      );
      if (!hasAllRequired) return false;
    }

    return true;
  });

  if (availableCards.length > 0) {
    return availableCards[Math.floor(Math.random() * availableCards.length)];
  }

  const emergencyPool = cards.filter((card) => !deckHistory.includes(card.id));

  if (emergencyPool.length > 0) {
    return emergencyPool[Math.floor(Math.random() * emergencyPool.length)];
  }

  return cards[Math.floor(Math.random() * cards.length)];
}
