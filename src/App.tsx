//App
import { useEffect, useReducer, useState } from "react";
import { gameReducer, initialState } from "./game/gameReducer";
import { drawNextCard } from "./game/deck";
import { DecisionCard } from "./components/DecisionCard";
import { HUD } from "./components/HUD";
import type { DecisionSide } from "./game/gameTypes";
import { GameOver } from "./components/GameOver";
import { CardStack } from "./components/CardStack";
import styles from "./App.module.css";
import { TutorialModal } from "./components/TutorialModal";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [previewSide, setPreviewSide] = useState<DecisionSide | null>(null);
  const [stackStep, setStackStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);

  const backgroundColor = state.isGameOver
    ? "#0766A8"
    : state.currentCard
    ? "#f5f5f5"
    : "#333E48";

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

  useEffect(() => {
    if (!state.currentCard) return;
    if (state.decisionsCount !== 0) return;

    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
    if (hasSeenTutorial) return;

    const t = setTimeout(() => {
      setShowTutorial(true);
    }, 2000);

    return () => clearTimeout(t);
  }, [state.currentCard, state.decisionsCount]);

  return (
    <div
      style={{
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "98vw",
        height: "98vh",
        backgroundColor,
        transition: "background-color 0.6s ease",
        overflowX: "hidden",
      }}
    >
      {!state.currentCard && !state.isGameOver && (
        <h1 className={styles.title}>
          Manter tudo <span>funcionando</span> é mais difícil do que escolher{" "}
          <span>certo</span>.
        </h1>
      )}

      {!state.currentCard && !state.isGameOver && (
        <CardStack step={stackStep} />
      )}

      {state.currentCard && (
        <HUD
          axes={state.axes}
          currentCard={state.currentCard}
          previewSide={previewSide}
        />
      )}

      {!state.currentCard && !state.isGameOver && (
        <button
          onClick={startGame}
          style={{
            marginTop: 58,
            fontSize: 14,
            padding: "12px 24px",
            border: "none",
            backgroundColor: "#0980D3",
            color: "#f5f5f5",
            fontWeight: "medium",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          Começar jogo
        </button>
      )}

      {(state.currentCard || state.isGameOver) && (
        <div
          style={{
            position: "relative",
            margin: "40px auto",
          }}
        >
          {!state.isGameOver && <CardStack step={stackStep} />}

          {state.currentCard && !state.isGameOver && (
            <DecisionCard
              key={state.currentCard.id}
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
              onRestart={() => {
                setStackStep(0);
                setPreviewSide(null);
                startGame();
              }}
            />
          )}
          {showTutorial && (
            <TutorialModal
              onClose={() => {
                localStorage.setItem("hasSeenTutorial", "true");
                setShowTutorial(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
