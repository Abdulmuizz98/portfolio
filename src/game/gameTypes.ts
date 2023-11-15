import { Player } from "./snakeLinkedList";

export type NodeOrNull = NodeInterface | null;
export type DivOrNull = HTMLDivElement | null;
export type PlayerOrNull = Player | null;

export enum PointType {
  Body,
  Head,
  Food,
}
export interface NodeInterface {
  y: number;
  x: number;
  ref: DivOrNull;
  id: number;
  next: NodeOrNull;
  drawNode(pointType: PointType): void;
  removeNode(): void;
  move(x: number, y: number, direction: string): void;
}

export interface SnakeLinkedList {
  head: NodeOrNull;
  tail: NodeOrNull;
  append(x: number, y: number, c: string): void;
  print(): void;
  getOccupied(): number[][];
}

export interface GameInterface {
  player: PlayerOrNull;
  level: number;
  left: number;
  timesPlayed: number;
  foodRef: DivOrNull;
}
