// cards.ts
import type { Card } from "./gameTypes";

export const cards: Card[] = [
  {
    id: "fake-news-viral",
    text: "Um vídeo distorcido sobre seu governo viralizou nas redes sociais.",
    effects: {
      left: {
        narrativa: +20,
        instituições: -20,
      },
      right: {
        instituições: +20,
        povo: -20,
      },
    },
  },

  {
    id: "apoio-congresso",
    text: "O congresso exige concessões em troca de apoio político.",
    effects: {
      left: {
        instituições: +20,
        economia: -20,
      },
      right: {
        economia: +20,
        instituições: -20,
      },
    },
  },

  {
    id: "protestos-rua",
    text: "Manifestações tomam as ruas do país.",
    effects: {
      left: {
        povo: +20,
        economia: -20,
      },
      right: {
        povo: -20,
        instituições: +20,
      },
    },
  },

  {
    id: "crise-economica",
    text: "Indicadores apontam uma desaceleração econômica preocupante.",
    effects: {
      left: {
        economia: +20,
        narrativa: -20,
      },
      right: {
        economia: -20,
        povo: -20,
      },
    },
  },

  {
    id: "ataque-imprensa",
    text: "A imprensa acusa o governo de autoritarismo.",
    effects: {
      left: {
        narrativa: +20,
        povo: -20,
      },
      right: {
        narrativa: -20,
        instituições: -20,
      },
    },
  },
];
