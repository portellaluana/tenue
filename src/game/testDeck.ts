// src/game/testDeck.ts
import { drawNextCard } from "./deck";

const first = drawNextCard();
const second = drawNextCard(first.id);

console.log("TEST DECK");
console.log("First:", first);
console.log("Second:", second);
