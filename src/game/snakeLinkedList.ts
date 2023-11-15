import type { NodeOrNull, DivOrNull } from "./gameTypes";
import { NodeInterface, SnakeLinkedList, PointType } from "./gameTypes";

export const size = 6;

export const newPoint = (
  r: number,
  c: number,
  size: number,
  pointType: PointType,
  color: string = "#43D9AD"
) => {
  const point = document.createElement("div");
  const grid = document.querySelector(".game-grid") as HTMLDivElement;

  //size the pixel
  point.style.height = point.style.width = `${size}px`;
  point.style.backgroundColor = color;
  if (pointType == PointType.Head) {
    point.style.borderTopLeftRadius = "50%";
    point.style.borderTopRightRadius = "50%";
  }
  if (pointType == PointType.Food) {
    point.style.borderRadius = "50%";
    point.style.boxShadow =
      "0px 0px 0px 2px rgba(67, 217, 173, 0.5), 0px 0px 2px 5px rgba(67, 217, 173, 0.25)";
  }

  // position the pixel on the grid
  drawPoint(point, r, c, size);

  // display point on the grid
  grid.appendChild(point);

  return point;
};

export const drawPoint = (
  pointRef: HTMLDivElement,
  r: number,
  c: number,
  size: number
) => {
  pointRef.style.position = "absolute";
  pointRef.style.top = `${r * size}px`;
  pointRef.style.left = `${c * size}px`;
};

// Node class representing a node in the linked list
class Node implements NodeInterface {
  x: number;
  y: number;
  ref: DivOrNull;
  id: number;
  next: NodeOrNull;

  constructor(y: number, x: number) {
    (this.x = x), (this.y = y), (this.next = null);
    this.ref = null;
    this.id = 0;
    // this.drawNode();
  }

  drawNode(pointType: PointType) {
    this.ref = newPoint(this.y, this.x, size, pointType);
  }
  removeNode() {
    if (this.ref) this.ref.remove();
  }

  move(pY: number, pX: number, direction: string) {
    const tempY = this.y;
    const tempX = this.x;

    this.y = pY;
    this.x = pX;

    if (this.ref) drawPoint(this.ref, this.y, this.x, size);
    if (this.next) this.next.move(tempY, tempX, direction);
  }
}

// LinkedList class representing the linked list
export class Player implements SnakeLinkedList {
  head: NodeOrNull;
  tail: NodeOrNull;
  constructor() {
    this.head = this.tail = null;
  }

  // Method to add a new node to the end of the linked list
  append(x: number, y: number) {
    const newNode = new Node(x, y);
    // console.log(newNode);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.head.drawNode(PointType.Head);
      return;
    }

    this.tail!.next = newNode;
    this.tail = newNode;
    this.tail.drawNode(PointType.Body);
  }

  // Method to print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.x, current.y);
      current = current.next;
    }
  }

  getOccupied() {
    let current = this.head;
    const list = [];
    while (current) {
      list.push([current.y, current.x]);
      current = current.next;
    }
    return list;
  }
  removePlayer() {
    // Removes the player from the DOM
    let current = this.head;
    while (current) {
      current.removeNode();
      current = current.next;
    }
  }
}
