import { useEffect, useRef, useState } from "react";
import cardFront from "../assets/cards/front/cards_2.png";
import logo from "/white_icon.png";

type Decision = "left" | "right";
type DragEvent = Decision | "start" | null;
interface Props {
  text: string;
  count: number;
  onDecision: (decision: Decision) => void;
  onDragSideChange?: (event: DragEvent) => void;
  isActive: boolean;
}

const THRESHOLD = 120;
const PREVIEW_THRESHOLD = 40;

export function DecisionCard({
  text,
  count,
  onDecision,
  onDragSideChange,
  isActive,
}: Props) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState<Decision | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const startX = useRef(0);

  if (!isActive) return null;

useEffect(() => {
  // reset visual completo
  setDragX(0);
  setExitDirection(null);
  setIsFlipped(false);

  const t = setTimeout(() => {
    setIsFlipped(true);
  }, 600);

  return () => clearTimeout(t);
}, [text]);

function handlePointerDown(e: React.PointerEvent) {
  if (exitDirection) return;

  setIsDragging(true);
  startX.current = e.clientX;

  // 🔥 troca o topo no início do drag
  onDragSideChange?.("start");

  (e.target as HTMLElement).setPointerCapture(e.pointerId);
}

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging || exitDirection) return;

    const delta = e.clientX - startX.current;
    setDragX(delta);

    if (delta > PREVIEW_THRESHOLD) onDragSideChange?.("right");
    else if (delta < -PREVIEW_THRESHOLD) onDragSideChange?.("left");
    else onDragSideChange?.(null);
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (!isDragging || exitDirection) return;

    if (dragX > THRESHOLD) triggerExit("right");
    else if (dragX < -THRESHOLD) triggerExit("left");
    else setDragX(0);

    setIsDragging(false);
    onDragSideChange?.(null);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }

function triggerExit(direction: Decision) {
  setExitDirection(direction);

  setTimeout(() => {
    onDecision(direction);
  }, 300);
}

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: 320,
          height: 420,
          perspective: 1200,
          pointerEvents: "auto",
        }}
      >
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            transformStyle: "preserve-3d",
            backgroundSize: "cover",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none",
            transform: `
              translateX(${exitDirection
                ? exitDirection === "right"
                  ? "100vw"
                  : "-100vw"
                : `${dragX}px`})
              rotateY(${isFlipped ? 180 : 0}deg)
              rotateZ(${dragX * 0.05}deg)
            `,
transition: exitDirection
  ? "transform 0.3s ease-out"
  : isDragging
  ? "none"
  : "transform 0.4s ease",

          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "transparent",
              backgroundSize: "cover",
              backfaceVisibility: "hidden",
              borderRadius: 16,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${cardFront})`,
              backgroundSize: "cover",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: 16,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={logo} style={{ width: 32 }} />
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.4,
                textAlign: "center",
                color: "#f5f5f5",
              }}
            >
              {text}
            </p>
            <span
              style={{
                color: "#f5f5f5",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
