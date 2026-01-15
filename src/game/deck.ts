//decks
import type { Card } from "./gameTypes";
import { cards } from "./cards";

export interface DeckState {
  history: string[];
}

export function drawNextCard(deckHistory: string[] = []): Card {
  const availableCards = cards.filter((card) => !deckHistory.includes(card.id));

  const pool = availableCards.length > 0 ? availableCards : cards;

  const randomIndex = Math.floor(Math.random() * pool.length);

  return pool[randomIndex];
}
