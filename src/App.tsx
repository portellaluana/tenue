//App
import { useReducer, useState } from "react";
import { gameReducer, initialState } from "./game/gameReducer";
import { drawNextCard } from "./game/deck";
import { DecisionCard } from "./components/DecisionCard";
import { HUD } from "./components/HUD";
import type { DecisionSide } from "./game/gameTypes";
import { GameOver } from "./components/GameOver";
import logo from "/logo.png";
import { CardStack } from "./components/CardStack";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [previewSide, setPreviewSide] = useState<DecisionSide | null>(null);
const [stackStep, setStackStep] = useState(0);

  function startGame() {
    const firstCard = drawNextCard([]);
    dispatch({ type: "START_GAME", card: firstCard });
  }

  function handleDecision(side: DecisionSide) {
    if (state.isGameOver) return;

    setPreviewSide(null);

    dispatch({
      type: "MAKE_DECISION",
      side,
      nextCard: drawNextCard(state.deckHistory),
    });
  }

  function handleDragEvent(event: DecisionSide | "start" | null) {
  if (event === "start") {
    setStackStep((s) => s + 1);
    return;
  }

  setPreviewSide(event as DecisionSide | null);
}

  return (
    <div
      style={{
        padding: 24,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ display: "flex", justifyContent: "center", marginBottom: 64 }}>
        <img src={logo} alt="tenue logo" style={{ maxWidth: 200 }} />
      </h1>

      <HUD
        axes={state.axes}
        currentCard={state.currentCard}
        previewSide={previewSide}
      />

      {!state.currentCard && !state.isGameOver && (
        <button
          onClick={startGame}
          style={{
            marginTop: 48,
            fontSize: 18,
            padding: "12px 24px",
            background: "none",
            border: "none",
            color: "#0980D3",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Começar jogo
        </button>
      )}

{(state.currentCard || state.isGameOver) && (
  <div
    style={{
      position: "relative",
      width: 320,
      height: 420,
      margin: "40px auto",
    }}
  >
    {/* Bolo de cartas */}
    {!state.isGameOver && <CardStack step={stackStep} />
}

 {state.currentCard && !state.isGameOver && (
  <DecisionCard
    key={state.currentCard.id} // 🔥 ISSO AQUI
    text={state.currentCard.text}
    count={state.decisionsCount + 1}
    onDecision={handleDecision}
    isActive={!!state.currentCard}
    onDragSideChange={handleDragEvent}
  />
)}

    {state.isGameOver && state.gameOverType && (
      <GameOver
        type={state.gameOverType}
        reason={state.gameOverReason}
        onRestart={startGame}
      />
    )}
  </div>
)}

    </div>
  );
}

export default App;
