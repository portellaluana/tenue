// cards.ts

import type { Card } from "./cardTypes";

export const cards: Card[] = [
  {
    id: "base-comunicado-oficial",
    text: "Você divulga um comunicado oficial para acalmar a população?",
    repeatable: true,
    effects: {
      left: { narrativa: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "base-acordo-politico",
    text: "Você aceita negociar acordos políticos para garantir estabilidade?",
    repeatable: true,
    effects: {
      left: { instituições: +20, narrativa: -20 },
      right: { narrativa: +20, instituições: -20 },
    },
  },

  {
    id: "base-investimento-social",
    text: "Você aprova investimentos em programas sociais emergenciais?",
    repeatable: true,
    effects: {
      left: { povo: +20, economia: -20 },
      right: { economia: +20, povo: -20 },
    },
  },

  {
    id: "base-ajuste-fiscal",
    text: "Você implementa um ajuste fiscal para conter gastos?",
    repeatable: true,
    effects: {
      left: { economia: +20, povo: -20 },
      right: { povo: +20, economia: -20 },
    },
  },

  {
    id: "base-coletiva-imprensa",
    text: "Você concede uma coletiva para responder críticas da imprensa?",
    repeatable: true,
    effects: {
      left: { narrativa: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "base-reforma-administrativa",
    text: "Você avança com uma reforma administrativa?",
    repeatable: true,
    effects: {
      left: { instituições: +20 },
      right: { instituições: -20 },
    },
  },

  {
    id: "base-campanha-midias",
    text: "Você investe em campanhas nas redes sociais?",
    repeatable: true,
    effects: {
      left: { narrativa: +20, economia: -20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "base-incentivo-empresas",
    text: "Você concede incentivos fiscais às empresas?",
    repeatable: true,
    effects: {
      left: { economia: +20, povo: -20 },
      right: { povo: +20, economia: -20 },
    },
  },

  {
    id: "base-dialogo-institucional",
    text: "Você prioriza o diálogo com líderes institucionais?",
    repeatable: true,
    effects: {
      left: { instituições: +20 },
      right: { narrativa: +20 },
    },
  },

  {
    id: "base-pronunciamento-nacional",
    text: "Você faz um pronunciamento em rede nacional?",
    repeatable: true,
    effects: {
      left: { narrativa: +20, povo: -20 },
      right: { povo: +20, narrativa: -20 },
    },
  },

  {
    id: "base-politica-precos",
    text: "Você mantém a política atual de preços?",
    repeatable: true,
    effects: {
      left: { economia: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "cond-fake-news",
    text: "Você reage publicamente a uma onda de fake news?",
    repeatable: true,
    conditions: { axisBelow: { narrativa: 80 } },
    effects: {
      left: { narrativa: +20, instituições: -20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "cond-protestos",
    text: "Você reprime manifestações nas ruas?",
    repeatable: true,
    conditions: { axisBelow: { povo: 80 } },
    effects: {
      left: { instituições: +20, povo: -20 },
      right: { povo: +20, instituições: -20 },
    },
  },

  {
    id: "cond-crise-economica",
    text: "Você admite publicamente uma crise econômica?",
    repeatable: false,
    conditions: { axisBelow: { economia: 80 } },
    effects: {
      left: { narrativa: +20 },
      right: { economia: -20 },
    },
  },

  {
    id: "cond-pressao-congresso",
    text: "Você cede às exigências do congresso?",
    repeatable: true,
    conditions: { axisBelow: { instituições: 80 } },
    effects: {
      left: { instituições: +20, economia: -20 },
      right: { narrativa: +20, instituições: -20 },
    },
  },

  {
    id: "cond-desinformacao-internacional",
    text: "Você confronta acusações internacionais contra o governo?",
    repeatable: false,
    conditions: { axisBelow: { narrativa: 70 } },
    effects: {
      left: { narrativa: +20, economia: -20 },
      right: { economia: +20, narrativa: -20 },
    },
  },

  {
    id: "cond-greve-setores",
    text: "Você negocia com setores em greve?",
    repeatable: true,
    conditions: { axisBelow: { povo: 70 } },
    effects: {
      left: { povo: +20, economia: -20 },
      right: { instituições: +20, povo: -20 },
    },
  },

  {
    id: "cond-queda-popularidade",
    text: "Você tenta recuperar sua popularidade?",
    repeatable: true,
    conditions: { axisBelow: { povo: 75 } },
    effects: {
      left: { povo: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "cond-desconfianca-institucional",
    text: "Você força decisões mesmo com resistência institucional?",
    repeatable: false,
    conditions: { axisBelow: { instituições: 70 } },
    effects: {
      left: { instituições: -20, narrativa: +20 },
      right: { instituições: +20 },
    },
  },

  {
    id: "cond-orcamento-pressionado",
    text: "Você corta gastos essenciais para equilibrar o orçamento?",
    repeatable: false,
    conditions: { axisBelow: { economia: 70 } },
    effects: {
      left: { economia: +20, povo: -20 },
      right: { povo: +20 },
    },
  },

  {
    id: "cond-narrativa-fragmentada",
    text: "Você escolhe uma versão oficial dos fatos?",
    repeatable: true,
    conditions: { axisBelow: { narrativa: 70 } },
    effects: {
      left: { narrativa: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "cond-crise-governabilidade",
    text: "Você centraliza decisões para evitar paralisia?",
    repeatable: false,
    conditions: { axisBelow: { instituições: 75 } },
    effects: {
      left: { instituições: +20, narrativa: -20 },
      right: { povo: +20, instituições: -20 },
    },
  },

  {
    id: "cond-fuga-capitais",
    text: "Você interfere para conter a fuga de capitais?",
    repeatable: false,
    conditions: { axisBelow: { economia: 65 } },
    effects: {
      left: { economia: +20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "cond-crise-comunicacao",
    text: "Você troca a equipe de comunicação do governo?",
    repeatable: false,
    conditions: { axisBelow: { narrativa: 75 } },
    effects: {
      left: { narrativa: +20 },
      right: { instituições: -20 },
    },
  },

  {
    id: "cond-pressao-popular",
    text: "Você atende às demandas imediatas da população?",
    repeatable: true,
    conditions: { axisBelow: { povo: 65 } },
    effects: {
      left: { povo: +20, economia: -20 },
      right: { economia: +20 },
    },
  },

  {
    id: "cond-erosao-institucional",
    text: "Você ignora alertas institucionais?",
    repeatable: false,
    conditions: { axisBelow: { instituições: 65 } },
    effects: {
      left: { narrativa: +20 },
      right: { instituições: -20 },
    },
  },

  {
    id: "cond-descredito-geral",
    text: "Você tenta reconstruir a confiança geral no governo?",
    repeatable: false,
    conditions: {
      axisBelow: { povo: 70, narrativa: 70 },
    },
    effects: {
      left: { povo: +20, narrativa: +20 },
      right: { economia: -20 },
    },
  },

  {
    id: "tensao-estado-alerta",
    text: "Você decreta estado de alerta nacional?",
    repeatable: false,
    tensionLevel: "high",
    conditions: { axisBelow: { povo: 50 } },
    effects: {
      left: { instituições: +20, povo: -20 },
      right: { povo: +20, instituições: -20 },
    },
  },

  {
    id: "tensao-crise-legitimidade",
    text: "Você contesta publicamente a legitimidade das críticas?",
    repeatable: false,
    tensionLevel: "high",
    conditions: { axisBelow: { narrativa: 50 } },
    effects: {
      left: { narrativa: +20, instituições: -20 },
      right: { narrativa: -20 },
    },
  },

  {
    id: "tensao-quebra-economia",
    text: "Você intervém drasticamente na economia?",
    repeatable: false,
    tensionLevel: "high",
    conditions: { axisBelow: { economia: 50 } },
    effects: {
      left: { economia: +20, povo: -20 },
      right: { economia: -20 },
    },
  },

  {
    id: "tensao-ruptura-institucional",
    text: "Você ignora decisões institucionais para seguir governando?",
    repeatable: false,
    tensionLevel: "high",
    conditions: { axisBelow: { instituições: 50 } },
    effects: {
      left: { instituições: -20 },
      right: { narrativa: +20 },
    },
  },

  {
    id: "tensao-caos-social",
    text: "Você usa força para conter o caos social?",
    repeatable: false,
    tensionLevel: "high",
    conditions: {
      axisBelow: { povo: 40, instituições: 60 },
    },
    effects: {
      left: { povo: -20 },
      right: { instituições: -20 },
    },
  },

  {
    id: "tensao-colapso-confianca",
    text: "Você tenta manter o governo mesmo sem apoio?",
    repeatable: false,
    tensionLevel: "high",
    conditions: {
      axisBelow: { povo: 40, narrativa: 40 },
    },
    effects: {
      left: { narrativa: -20 },
      right: { instituições: -20 },
    },
  },

  {
    id: "tensao-ultima-cartada",
    text: "Você faz uma última tentativa de controle absoluto?",
    repeatable: false,
    tensionLevel: "high",
    conditions: {
      axisBelow: { economia: 40, instituições: 40 },
    },
    effects: {
      left: { narrativa: +20 },
      right: { povo: -20 },
    },
  },

  {
    id: "tensao-sem-retorno",
    text: "Você insiste em continuar, custe o que custar?",
    repeatable: false,
    tensionLevel: "high",
    conditions: {
      axisBelow: { povo: 30, economia: 30, narrativa: 30 },
    },
    effects: {
      left: { instituições: -20 },
      right: { povo: -20 },
    },
  },
];
