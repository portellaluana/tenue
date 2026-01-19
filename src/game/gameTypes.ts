// gameTypes.ts
import type { Card } from "./cardTypes";

export type AxisKey = "povo" | "sistema" | "narrativa" | "economia";

export type Axes = Record<AxisKey, number>;

export type DecisionSide = "left" | "right";

export type GameOverType =
  | "revolta-popular"
  | "impeachment"
  | "colapso-economico"
  | "perda-legitimidade";

export interface GameState {
  axes: Axes;
  currentCard: Card | null;
  decisionsCount: number;
  isGameOver: boolean;
  gameOverReason?: string;
  gameOverType?: GameOverType;
  deckHistory: string[];
}

export type GameAction =
  | { type: "START_GAME"; card: Card }
  | { type: "MAKE_DECISION"; side: DecisionSide; nextCard: Card }
  | { type: "RESET_GAME"; card: Card };
