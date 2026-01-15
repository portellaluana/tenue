//CardStack
import { cardBacks } from "../assets/cards";
import styles from "./CardStack.module.css";

const OFFSETS = [
  { x: -6, y: 8, r: -6 },
  { x: 6, y: -4, r: 4 },
  { x: -2, y: -10, r: -2 },
  { x: 10, y: 6, r: 7 },
  { x: 0, y: 0, r: 0 },
];

interface Props {
  step: number;
}

export function CardStack({ step }: Props) {
  const visibleCards = 5;

  return (
    <div className={styles.stack}>
      {Array.from({ length: visibleCards }).map((_, i) => {
        const index = (step + i) % cardBacks.length;
        const o = OFFSETS[i];

        return (
          <img
            key={`${step}-${i}`}
            src={cardBacks[index]}
            className={styles.card}
            style={{
              transform: `
                translate(${o.x}px, ${o.y}px)
                rotate(${o.r}deg)
              `,
              zIndex: i,
            }}
            draggable={false}
          />
        );
      })}
    </div>
  );
}
