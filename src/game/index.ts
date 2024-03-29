import { size, newPoint, Player } from "./snakeLinkedList";
import type { DivOrNull, PlayerOrNull } from "./gameTypes";
import { NodeInterface, GameInterface, PointType } from "./gameTypes";
import {
  nextLevel,
  reduceLeft,
  stopPlay,
  startPlay,
  reset,
  incrementTimesPlayed,
} from "../store/gameSlice";
import { dispatchAsync } from "../store";

const rows = 48;
const cols = 25;
const posY = rows - 1;
const posX = cols - 1;
const initialSpeed = 100;

const turnHead = (head: NodeInterface, key: string) => {
  const pointRef = head.ref;
  pointRef!.style.borderRadius = "0";
  switch (key) {
    case "ArrowUp":
      pointRef!.style.borderTopLeftRadius = "50%";
      pointRef!.style.borderTopRightRadius = "50%";
      break;
    case "ArrowDown":
      pointRef!.style.borderBottomLeftRadius = "50%";
      pointRef!.style.borderBottomRightRadius = "50%";
      break;
    case "ArrowLeft":
      pointRef!.style.borderTopLeftRadius = "50%";
      pointRef!.style.borderBottomLeftRadius = "50%";
      break;
    case "ArrowRight":
      pointRef!.style.borderTopRightRadius = "50%";
      pointRef!.style.borderBottomRightRadius = "50%";
      break;
  }
};

// SNAKE MOVEMENT HELPER
const doMove = (node: NodeInterface, key: string) => {
  let newY = 0,
    newX = 0;
  switch (key) {
    case "ArrowUp":
      newY = node.y == 0 ? posY : node.y - 1;
      newX = node.x;
      break;
    case "ArrowDown":
      newY = node.y == posY ? 0 : node.y + 1;
      newX = node.x;
      break;
    case "ArrowLeft":
      newY = node.y;
      newX = node.x == 0 ? posX : node.x - 1;
      break;
    case "ArrowRight":
      newY = node.y;
      newX = node.x == posX ? 0 : node.x + 1;
      break;
  }
  turnHead(node, key);
  node.move(newY, newX, key);
};

const isNeckPosition = (direction: string, node: NodeInterface) => {
  const child = node.next;
  let newY, newX;
  switch (direction) {
    case "ArrowUp":
      newY = node.y == 0 ? posY : node.y - 1;
      newX = node.x;
      break;
    case "ArrowDown":
      newY = node.y == posY ? 0 : node.y + 1;
      newX = node.x;
      break;
    case "ArrowLeft":
      newY = node.y;
      newX = node.x == 0 ? posX : node.x - 1;
      break;
    case "ArrowRight":
      newY = node.y;
      newX = node.x == posX ? 0 : node.x + 1;
      break;
  }
  return newY == child!.y && newX == child!.x;
};

// GAMEPLAY SECTION
export class Game implements GameInterface {
  player: PlayerOrNull;
  level: number;
  left: number;
  timesPlayed: number;
  foodRef: DivOrNull;

  constructor() {
    this.level = 1;
    this.left = 50;
    this.timesPlayed = 0;
    this.player = null;
    this.foodRef = null;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  initPlayer() {
    this.player = new Player();
    this.player.append(12, 7);
    this.player.append(13, 7);
    this.player.append(14, 7);
    this.player.append(15, 7);
    this.player.append(16, 7);
    this.player.append(17, 7);
    this.player.append(17, 8);
    this.player.append(17, 9);
    this.player.append(17, 10);
    this.player.append(17, 11);
    this.player.append(18, 11);
    this.player.append(19, 11);
    this.player.append(20, 11);
    this.player.append(21, 11);
  }
  async reset() {
    this.level = 1;
    this.left = 50;
    this.player?.removePlayer();
    await dispatchAsync(reset);
  }
  async reload() {
    this.level = 1;
    this.left = 50;
    this.timesPlayed = 0;
    this.player = null;
    this.foodRef = null;
  }
  async nextLevel() {
    this.level++;
    await dispatchAsync(nextLevel);
  }
  move() {
    const node = this.player!.head;
    if (node) {
      clearInterval(node.id);
      node.id = setInterval(
        () => doMove(node, "ArrowUp"),
        initialSpeed / this.level
      );
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }

  handleKeyDown(e: KeyboardEvent) {
    const node = this.player!.head!;
    if (!isNeckPosition(e.key, node)) {
      clearInterval(node.id);
      node.id = setInterval(
        () => doMove(node, e.key),
        initialSpeed / this.level
      );
    }
  }
  async stop(isFinal: boolean) {
    await dispatchAsync(stopPlay);

    if (this.player!.head) {
      clearInterval(this.player!.head.id);
      document.removeEventListener("keydown", this.handleKeyDown);
      if (!isFinal) this.start();
    }
  }

  start() {
    let startBtn = document.querySelector(".start-btn") as HTMLButtonElement;
    while (!startBtn) {
      // Ensuring the btn is in the DOM
      console.log("im stuck here");
      startBtn = document.querySelector(".start-btn") as HTMLButtonElement;
    }
    startBtn.addEventListener("click", () => {
      this.removeFood();
      this.reset();
      this.play();
    });
  }

  // FOOD GENERATION HELPERS
  getNextFoodCoord = () => {
    let y = Math.round(Math.random() * 100) % rows;
    let x = Math.round(Math.random() * 100) % cols;

    let occupied = this.player!.getOccupied();
    let isOccupied = occupied.find((e) => e.toString() === [y, x].toString());
    while (isOccupied) {
      x = Math.round(Math.random() * 10) % rows;
      y = Math.round(Math.random() * 10) % cols;

      occupied = this.player!.getOccupied();
      isOccupied = occupied.find((e) => e.toString() === [y, x].toString());
    }

    return [y, x];
  };

  drawFood() {
    const position = this.getNextFoodCoord();
    this.foodRef = newPoint(position[0], position[1], size, PointType.Food);
    return { y: position[0], x: position[1] };
  }

  removeFood() {
    if (this.foodRef) this.foodRef.remove();
  }

  grow() {
    this.player!.append(this.player!.tail!.y, this.player!.tail!.x);
  }
  async play() {
    dispatchAsync(startPlay);
    dispatchAsync(incrementTimesPlayed);
    this.timesPlayed++;

    this.initPlayer();
    this.move();

    let food = this.drawFood();

    const playInterval = setInterval(async () => {
      // condition when player eats the food
      if (this.player!.head!.x === food.x && this.player!.head!.y === food.y) {
        this.removeFood();
        --this.left;
        dispatchAsync(reduceLeft);

        if (this.left === 0) {
          // Stop when player wins
          clearInterval(playInterval);
          this.stop(false);
        } else {
          food = this.drawFood();
          this.grow();

          if (this.left === 45) {
            this.nextLevel();
          }
          if (this.left === 10) {
            this.nextLevel();
          }
        }
      }

      // condition for game over.
      const occupied = this.player!.getOccupied();
      occupied.shift();
      occupied.shift();
      if (
        occupied.find(
          (e) =>
            e.toString() ===
            [this.player!.head!.y, this.player!.head!.x].toString()
        )
      ) {
        clearInterval(playInterval);
        this.stop(false);
      }
    }, 1);
  }
}
