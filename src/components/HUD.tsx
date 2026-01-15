//HUD

import type { Axes, AxisKey, Card, DecisionSide } from "../game/gameTypes";

interface Props {
  axes: Axes;
  previewSide: DecisionSide | null;
  currentCard: Card | null;
}

const TOTAL_SQUARES = 5;

function getPreviewEffect(
  axis: AxisKey,
  card: Card | null,
  side: DecisionSide | null
): number {
  if (!card || !side) return 0;
  return card.effects[side][axis] ?? 0;
}

function axisValueToSquares(value: number) {
  return Math.floor((value / 100) * TOTAL_SQUARES);
}

export function HUD({ axes, previewSide, currentCard }: Props) {
  return (
    <div
      style={{
        display: "inline-block",
        flexDirection: "column",
        gap: 16,
        marginBottom: 24,
        maxHeight: "108px",
      }}
    >
      {(Object.keys(axes) as AxisKey[]).map((axis) => {
        const preview = getPreviewEffect(axis, currentCard, previewSide);
        const filledSquares = axisValueToSquares(axes[axis]);

        return (
          <div
            key={axis}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              maxWidth: "400px",
              marginBottom: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                opacity: 0.8,
                marginRight: 16,
                alignItems: "anchor-center",
              }}
            >
              <span style={{ textTransform: "uppercase", color: "#333E48" }}>
                {axis}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
                height: 16,
              }}
            >
              {Array.from({ length: TOTAL_SQUARES }).map((_, i) => {
                const active = i < filledSquares;

                return (
                  <div
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 2,
                      backgroundColor: active ? "#0766A8" : "#A0ACBA",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                );
              })}
              {preview !== 0 && (
                <span style={{ color: "#333E48" }}>
                  {preview > 0 ? "↑" : "↓"}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
