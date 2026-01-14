import type { Axes, AxisKey, Card, DecisionSide } from "../game/gameTypes";

interface Props {
  axes: Axes;
  previewSide: DecisionSide | null;
  currentCard: Card | null;
}

function getPreviewEffect(
  axis: AxisKey,
  card: Card | null,
  side: DecisionSide | null
): number {
  if (!card || !side) return 0;
  return card.effects[side][axis] ?? 0;
}

export function HUD({ axes, previewSide, currentCard }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 24,
      }}
    >
      {(Object.keys(axes) as AxisKey[]).map((axis) => {
        const preview = getPreviewEffect(axis, currentCard, previewSide);

        return (
          <div key={axis}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                marginBottom: 4,
                opacity: 0.8,
              }}
            >
              <span>{axis}</span>
              {preview !== 0 && <span>{preview > 0 ? "↑" : "↓"}</span>}
            </div>

            <div
              style={{
                height: 8,
                borderRadius: 4,
                background: "#f5f5f5",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${axes[axis]}%`,
                  height: "100%",
                  background: "#0980D3",
                  transition: previewSide
                    ? "width 0.15s ease"
                    : "width 0.4s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
