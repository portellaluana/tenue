import type { Card } from "./cardTypes";

export const cards: Card[] = [
  {
    id: "fake-news-viral",
    text: "Um vídeo distorcido sobre seu governo viraliza nas redes.",
    effects: {
      left: { narrativa: -20 },
      right: { narrativa: +20, povo: -20 },
    },
  },

  {
    id: "apoio-congresso",
    text: "O sistema cobra concessões para manter apoio político.",
    effects: {
      left: { sistema: +20, economia: -20 },
      right: { narrativa: +20, sistema: -20 },
    },
  },

  {
    id: "pressao-mercado",
    text: "O mercado reage com cautela às decisões do governo.",
    effects: {
      left: { economia: +20, narrativa: -20 },
      right: { povo: +20, economia: -20 },
    },
  },

  {
    id: "ataque-imprensa",
    text: "A imprensa questiona a direção do governo.",
    effects: {
      left: { narrativa: -20 },
      right: { narrativa: +20, povo: -20 },
    },
  },

  {
    id: "aliados-insatisfeitos",
    text: "Aliados começam a demonstrar desconforto.",
    effects: {
      left: { sistema: +20 },
      right: { narrativa: +20, sistema: -20 },
    },
  },

  // desgaste

  {
    id: "queda-popularidade",
    text: "Pesquisas indicam queda na aprovação popular.",
    conditions: {
      axisBelow: { povo: 60 },
    },
    effects: {
      left: { povo: +20 },
      right: { economia: +20, narrativa: -20 },
    },
  },

  {
    id: "boato-crise",
    text: "Rumores de crise política se espalham.",
    conditions: {
      axisBelow: { narrativa: 60 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: -20, narrativa: +20 },
    },
  },

  {
    id: "escandalo-ministro",
    text: "Um ministro próximo vira alvo de denúncias.",
    conditions: {
      axisBelow: { sistema: 65 },
    },
    effects: {
      left: { sistema: +20, narrativa: -20 },
      right: { povo: -20 },
    },
  },

  {
    id: "greve-setor-chave",
    text: "Um setor estratégico entra em greve.",
    conditions: {
      axisBelow: { economia: 65 },
    },
    effects: {
      left: { povo: +20, economia: -20 },
      right: { economia: +20, povo: -20 },
    },
  },

  {
    id: "crise-comunicacao",
    text: "A comunicação do governo perde força.",
    conditions: {
      axisBelow: { narrativa: 55 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: +20, povo: -20 },
    },
  },

  // polarização

  {
    id: "rua-polarizada",
    text: "As ruas se dividem entre apoio e rejeição ao governo.",
    conditions: {
      axisBelow: { povo: 60 },
      played: ["queda-popularidade", "boato-crise"],
    },
    effects: {
      left: { povo: +20, narrativa: -20 },
      right: { sistema: +20, povo: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "discursos-radicais",
    text: "Discursos extremos dominam o debate público.",
    conditions: {
      axisBelow: { narrativa: 60 },
    },
    effects: {
      left: { sistema: +20 },
      right: { povo: -20, narrativa: +20 },
    },
    tensionLevel: "high",
  },

  // tensão

  {
    id: "tensao-institucional",
    text: "O clima entre os poderes se torna insustentável.",
    conditions: {
      axisBelow: { sistema: 55 },
    },
    effects: {
      left: { sistema: +20 },
      right: { economia: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "investigacao-avanca",
    text: "Investigações avançam sobre membros do governo.",
    conditions: {
      axisBelow: { sistema: 50 },
    },
    effects: {
      left: { sistema: +20, narrativa: -20 },
      right: { povo: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "pedido-impeachment",
    text: "Um pedido formal de afastamento ganha força.",
    conditions: {
      axisBelow: { sistema: 45 },
      played: ["tensao-institucional"],
    },
    effects: {
      left: { sistema: +20 },
      right: { povo: -20 },
    },
    tensionLevel: "high",
  },

  // gameover

  {
    id: "ruas-fora-controle",
    text: "As ruas saem completamente do controle.",
    conditions: {
      axisBelow: { povo: 40 },
    },
    effects: {
      left: { povo: +20, economia: -20 },
      right: { sistema: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "ruptura-institucional",
    text: "O sistema entra em ruptura aberta.",
    conditions: {
      axisBelow: { sistema: 40 },
      played: ["pedido-impeachment"],
    },
    effects: {
      left: { sistema: +20 },
      right: { economia: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "economia-paralisa",
    text: "A economia entra em paralisia.",
    conditions: {
      axisBelow: { economia: 40 },
    },
    effects: {
      left: { economia: +20 },
      right: { povo: -20 },
    },
    tensionLevel: "high",
  },

  {
    id: "perda-controle-narrativa",
    text: "O governo perde totalmente o controle da narrativa.",
    conditions: {
      axisBelow: { narrativa: 40 },
    },
    effects: {
      left: { narrativa: +20 },
      right: { sistema: -20 },
    },
    tensionLevel: "high",
  },
];
