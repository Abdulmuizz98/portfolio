import { size, newPoint, Player } from "./snakeLinkedList";
import type { DivOrNull, PlayerOrNull } from "./gameTypes";
import { NodeInterface, GameInterface } from "./gameTypes";
import {
  nextLevel,
  reduceLeft,
  toggleInPlay,
  reset,
  incrementTimesPlayed,
} from "../store/gameSlice";
import { dispatchAsync } from "../store";

const rows = 48;
const cols = 25;
const posY = rows - 1;
const posX = cols - 1;
const initialSpeed = 100;

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
  node.move(newY, newX);
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
class Game implements GameInterface {
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
    const node = gameRef.player!.head!;

    if (!isNeckPosition(e.key, node)) {
      clearInterval(node.id);
      node.id = setInterval(
        () => doMove(node, e.key),
        initialSpeed / gameRef.level
      );
    }
  }
  async stop() {
    await dispatchAsync(toggleInPlay);
    if (this.player!.head) {
      clearInterval(this.player!.head.id);
      document.removeEventListener("keydown", this.handleKeyDown);
      this.start();
    }
  }

  start() {
    let startBtn = document.querySelector(".start-btn") as HTMLButtonElement;
    while (!startBtn) {
      // Ensuring the btn is in the DOM
      startBtn = document.querySelector(".start-btn") as HTMLButtonElement;
    }
    console.log("I got the button:", this.timesPlayed, startBtn);
    startBtn.addEventListener("click", () => {
      console.log("i got clicked");
      this.removeFood();
      this.reset();
      gameRef.play();
    });
    console.log("ive added the listener");
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
    this.foodRef = newPoint(position[0], position[1], "cyan", size);
    return { y: position[0], x: position[1] };
  }

  removeFood() {
    if (this.foodRef) this.foodRef.remove();
  }

  grow() {
    this.player!.append(this.player!.tail!.y, this.player!.tail!.x);
  }
  async play() {
    dispatchAsync(toggleInPlay);
    dispatchAsync(incrementTimesPlayed);
    this.timesPlayed++;

    this.initPlayer();
    this.move();

    let food = this.drawFood();

    const playInterval = setInterval(async () => {
      // condition when player eats the food
      if (this.player!.head!.x === food.x && this.player!.head!.y === food.y) {
        this.removeFood();
        console.log("before: ", gameRef.left);
        --gameRef.left;
        dispatchAsync(reduceLeft);
        console.log("after: ", gameRef.left);

        if (gameRef.left === 0) {
          // Stop when player wins
          clearInterval(playInterval);
          gameRef.stop();
        } else {
          food = this.drawFood();
          this.grow();

          if (gameRef.left === 45) {
            gameRef.nextLevel();
          }
          if (gameRef.left === 10) {
            gameRef.nextLevel();
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
        gameRef.stop();
      }
    }, 1);
  }
}

const gameRef: Game = new Game();
document.addEventListener("DOMContentLoaded", function () {
  gameRef.initPlayer();
  gameRef.start();
});
