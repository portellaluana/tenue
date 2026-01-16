//GameOver.tsx

import type { GameOverType } from "../game/gameTypes";

interface Props {
  type: GameOverType;
  reason?: string;
  onRestart: () => void;
}

const titles: Record<GameOverType, string> = {
  "revolta-popular": "O povo foi às ruas",
  impeachment: "O mandato terminou",
  "colapso-economico": "O mercado venceu",
  "perda-legitimidade": "A verdade se fragmentou",
};

export function GameOver({ type, reason, onRestart }: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 32,
      }}
    >
      <h1 style={{ color: "#f5f5f5", lineHeight: 0.8, marginBottom: 64 }}>
        game <br />
        over
      </h1>
      <h2 style={{ color: "#f5f5f5", margin: 0 }}>{titles[type]}</h2>

      {reason && (
        <p style={{ color: "#f5f5f5", margin: 0, width: 300 }}>{reason}</p>
      )}

      <button
        onClick={onRestart}
        style={{
          marginTop: 64,
          fontSize: 14,
          padding: "12px 32px",
          border: "solid 1px #f5f5f5",
          backgroundColor: "transparent",
          color: "#f5f5f5",
          fontWeight: "medium",
          cursor: "pointer",
          borderRadius: 50,
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
