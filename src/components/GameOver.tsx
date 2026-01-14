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
      <h2>{titles[type]}</h2>

      {reason && <p style={{ marginTop: 16, opacity: 0.8 }}>{reason}</p>}

      <button
        onClick={onRestart}
        style={{
          marginTop: 32,
          padding: "12px 24px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        Recomeçar
      </button>
    </div>
  );
}
