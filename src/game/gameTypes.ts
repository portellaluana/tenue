//gameTypes

export type AxisKey = "povo" | "instituicoes" | "narrativa" | "economia";

export type Axes = Record<AxisKey, number>;

export type DecisionSide = "left" | "right";

export interface Card {
  id: string;
  text: string;
  effects: {
    left: Partial<Axes>;
    right: Partial<Axes>;
  };
}

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
