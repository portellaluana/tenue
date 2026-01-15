import { useEffect, useState } from "react";
import gif from "../assets/gif/drag-instructions.gif";

interface Props {
  onClose: () => void;
}

export function TutorialModal({ onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(51, 62, 72, 0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,

        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",

          transform: visible ? "scale(1)" : "scale(0.95)",
          transition: "transform 0.4s ease",
        }}
      >
        <h3
          style={{
            marginBottom: 16,
            fontWeight: 100,
            fontFamily: "Ubuntu",
            textAlign: "center",
            color: "#f5f5f5",
          }}
        >
          Arraste a carta para decidir.
          <br />
          Algumas escolhas pesam mais
          <br />
          do que parecem.
        </h3>

        <img
          src={gif}
          alt="Arraste a carta"
          style={{
            width: 100,
            borderRadius: 8,
            marginBottom: 16,
          }}
        />

        <button
          onClick={onClose}
          style={{
            fontSize: 14,
            padding: "12px 24px",
            border: "none",
            backgroundColor: "#0980D3",
            color: "#f5f5f5",
            cursor: "pointer",
            borderRadius: 50,
          }}
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
