// cards.ts
import type { Card } from "./gameTypes";

export const cards: Card[] = [
  {
    id: "fake-news-viral",
    text: "Um vídeo distorcido sobre seu governo viralizou nas redes sociais.",
    effects: {
      left: {
        narrativa: +15,
        instituicoes: -10,
      },
      right: {
        instituicoes: +10,
        povo: -10,
      },
    },
  },

  {
    id: "apoio-congresso",
    text: "O congresso exige concessões em troca de apoio político.",
    effects: {
      left: {
        instituicoes: +15,
        economia: -10,
      },
      right: {
        economia: +10,
        instituicoes: -15,
      },
    },
  },

  {
    id: "protestos-rua",
    text: "Manifestações tomam as ruas do país.",
    effects: {
      left: {
        povo: +15,
        economia: -10,
      },
      right: {
        povo: -15,
        instituicoes: +10,
      },
    },
  },

  {
    id: "crise-economica",
    text: "Indicadores apontam uma desaceleração econômica preocupante.",
    effects: {
      left: {
        economia: +10,
        narrativa: -10,
      },
      right: {
        economia: -15,
        povo: -10,
      },
    },
  },

  {
    id: "ataque-imprensa",
    text: "A imprensa acusa o governo de autoritarismo.",
    effects: {
      left: {
        narrativa: +10,
        povo: -5,
      },
      right: {
        narrativa: -15,
        instituicoes: -10,
      },
    },
  },
];
