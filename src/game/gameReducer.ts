//gameReducer
import type { Axes, GameAction, GameOverType, GameState } from "./gameTypes";

export const initialState: GameState = {
  axes: {
    povo: 50,
    instituicoes: 50,
    narrativa: 50,
    economia: 50,
  },
  currentCard: null,
  decisionsCount: 0,
  isGameOver: false,
  gameOverReason: undefined,
  deckHistory: [],
};

function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}

function checkGameOver(
  axes: Axes
): { type: GameOverType; reason: string } | null {
  if (axes.povo <= 0) {
    return {
      type: "revolta-popular",
      reason: "A população perdeu completamente a confiança no governo.",
    };
  }

  if (axes.instituicoes <= 0) {
    return {
      type: "impeachment",
      reason: "As instituições romperam com o governo.",
    };
  }

  if (axes.economia <= 0) {
    return {
      type: "colapso-economico",
      reason: "O mercado entrou em colapso e o governo perdeu credibilidade.",
    };
  }

  if (axes.narrativa <= 0) {
    return {
      type: "perda-legitimidade",
      reason: "A verdade se fragmentou e ninguém acredita em mais nada.",
    };
  }

  return null;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START_GAME": {
      return {
        ...initialState,
        currentCard: action.card,
        deckHistory: [action.card.id],
      };
    }

    case "MAKE_DECISION": {
      if (!state.currentCard || state.isGameOver) {
        return state;
      }

      const effects = state.currentCard.effects[action.side];

      const newAxes: Axes = {
        povo: clamp(state.axes.povo + (effects.povo ?? 0)),
        instituicoes: clamp(
          state.axes.instituicoes + (effects.instituicoes ?? 0)
        ),
        narrativa: clamp(state.axes.narrativa + (effects.narrativa ?? 0)),
        economia: clamp(state.axes.economia + (effects.economia ?? 0)),
      };

      const gameOver = checkGameOver(newAxes);

      return {
        ...state,
        axes: newAxes,
        currentCard: gameOver ? null : action.nextCard,
        decisionsCount: state.decisionsCount + 1,
        isGameOver: Boolean(gameOver),
        gameOverReason: gameOver?.reason,
        gameOverType: gameOver?.type,
        deckHistory: gameOver
          ? state.deckHistory
          : [...state.deckHistory, action.nextCard.id],
      };
    }

    case "RESET_GAME": {
      return {
        ...initialState,
        currentCard: action.card,
      };
    }

    default:
      return state;
  }
}
