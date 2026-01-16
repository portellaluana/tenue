import type { AxisKey, Axes } from "./gameTypes";

export interface CardConditions {
  axisBelow?: Partial<Record<AxisKey, number>>;
  axisAbove?: Partial<Record<AxisKey, number>>;
  played?: string[];
}

export interface Card {
  id: string;
  text: string;
  effects: {
    left: Partial<Axes>;
    right: Partial<Axes>;
  };
  repeatable?: boolean;
  conditions?: CardConditions;
  tensionLevel?: "normal" | "high";
}
