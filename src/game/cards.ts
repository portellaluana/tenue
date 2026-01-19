import type { Card } from "./cardTypes";

export const cards: Card[] = [
  // introdução
  {
    id: "debate-secundario",
    text: "Um tema secundário domina temporariamente o debate público.",
    effects: {
      left: { narrativa: -20 },
      right: { narrativa: +20 },
    },
  },

  {
    id: "vazamento-parcial",
    text: "Um vazamento parcial gera especulações iniciais.",
    effects: {
      left: { sistema: +20 },
      right: { narrativa: +20, sistema: -20 },
    },
  },

  {
    id: "comparacao-governos",
    text: "Comparações com governos anteriores começam a surgir.",
    effects: {
      left: { narrativa: -20 },
      right: { povo: -20, narrativa: +20 },
    },
  },

  {
    id: "reacao-setorial",
    text: "Um setor reage com cautela a uma nova diretriz.",
    effects: {
      left: { economia: +20 },
      right: { narrativa: +20, economia: -20 },
    },
  },

  {
    id: "decisao-tecnica-politica",
    text: "Uma decisão técnica passa a ser tratada como escolha política.",
    effects: {
      left: { sistema: +20 },
      right: { narrativa: +20 },
    },
  },

  {
    id: "ruido-interno",
    text: "Um ruído interno aparece, mas sem repercussão imediata.",
    effects: {
      left: { sistema: +20 },
      right: { narrativa: +20 },
    },
  },

  {
    id: "medida-popular-divide",
    text: "Uma medida popular divide opiniões fora da base do governo.",
    effects: {
      left: { povo: +20 },
      right: { narrativa: +20, povo: -20 },
    },
  },

  {
    id: "silencio-notado",
    text: "Um silêncio estratégico começa a ser notado.",
    effects: {
      left: { narrativa: -20 },
      right: { sistema: +20 },
    },
  },

  // sinais de alerta
  {
    id: "base-cansaco",
    text: "A base demonstra sinais de cansaço.",
    conditions: {
      axisBelow: { povo: 70 },
    },
    effects: {
      left: { povo: +20 },
      right: { narrativa: +20, povo: -20 },
    },
  },

  {
    id: "episodio-resgatado",
    text: "Um episódio antigo é resgatado sob nova luz.",
    conditions: {
      axisBelow: { narrativa: 65 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: -20 },
    },
  },

  {
    id: "imprensa-antecipa",
    text: "A imprensa passa a antecipar crises antes de anúncios oficiais.",
    conditions: {
      axisBelow: { narrativa: 60 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: -20 },
    },
  },

  {
    id: "ausencia-resposta",
    text: "A ausência de resposta vira parte da narrativa.",
    conditions: {
      axisBelow: { narrativa: 60 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: +20 },
    },
  },

  {
    id: "setor-insatisfeito",
    text: "Um setor estratégico demonstra insatisfação contínua.",
    conditions: {
      axisBelow: { economia: 65 },
    },
    effects: {
      left: { economia: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "conflitos-somam",
    text: "Pequenos conflitos começam a se somar.",
    conditions: {
      axisBelow: { sistema: 65 },
    },
    effects: {
      left: { sistema: +20 },
      right: { narrativa: +20, sistema: -20 },
    },
  },

  {
    id: "oposicao-unifica",
    text: "A oposição encontra um tema comum.",
    conditions: {
      axisBelow: { sistema: 60 },
    },
    effects: {
      left: { sistema: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "mercado-tom",
    text: "O mercado reage mais ao tom do que ao conteúdo.",
    conditions: {
      axisBelow: { economia: 60 },
    },
    effects: {
      left: { economia: +20 },
      right: { narrativa: +20, economia: -20 },
    },
  },

  // conflito
  {
    id: "confianca-institucional",
    text: "A confiança nas instituições entra em debate aberto.",
    conditions: {
      axisBelow: { sistema: 60 },
    },
    effects: {
      left: { sistema: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "imprensa-confronto",
    text: "A imprensa adota um tom de confronto explícito.",
    conditions: {
      axisBelow: { narrativa: 55 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { sistema: -20 },
    },
  },

  {
    id: "manifestacoes-recorrentes",
    text: "Manifestações se tornam recorrentes e imprevisíveis.",
    conditions: {
      axisBelow: { povo: 55 },
    },
    effects: {
      left: { povo: +20 },
      right: { sistema: -20 },
    },
  },

  {
    id: "aliados-cobram",
    text: "Aliados estratégicos cobram definições imediatas.",
    conditions: {
      axisBelow: { sistema: 55 },
    },
    effects: {
      left: { sistema: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "base-fragmenta",
    text: "A base política começa a se fragmentar.",
    conditions: {
      axisBelow: { povo: 55 },
    },
    effects: {
      left: { povo: +20 },
      right: { sistema: -20 },
    },
  },

  //pré-gameover

  {
    id: "pedido-afastamento",
    text: "Um pedido formal de afastamento ganha apoio no sistema.",
    conditions: {
      axisBelow: { sistema: 45 },
      played: ["tensao-institucional"],
    },
    effects: {
      left: { sistema: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "ruas-fora-controle",
    text: "As ruas deixam de responder a qualquer sinal institucional.",
    conditions: {
      axisBelow: { povo: 40 },
    },
    effects: {
      left: { povo: +20 },
      right: { sistema: -20 },
    },
  },

  {
    id: "perda-narrativa",
    text: "Nenhuma versão oficial consegue se sustentar.",
    conditions: {
      axisBelow: { narrativa: 40 },
    },
    effects: {
      left: { narrativa: +20 },
      right: { sistema: -20 },
    },
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
  },

  {
    id: "ruptura-sistema",
    text: "O sistema entra em ruptura aberta.",
    conditions: {
      axisBelow: { sistema: 35 },
      played: ["pedido-afastamento"],
    },
    effects: {
      left: { sistema: +20 },
      right: { economia: -20 },
    },
  },
];
