import { createSlice } from "@reduxjs/toolkit";
// import store from /".";
// import type { RootState } from ".";

interface GameState {
  left: number;
  level: number;
  timesPlayed: number;
  isInPlay: boolean;
  isWon: boolean;
}

const initialState: GameState = {
  left: 50,
  level: 1,
  timesPlayed: 0,
  isInPlay: false,
  isWon: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    nextLevel(state) {
      state.level += 1;
    },
    reduceLeft(state) {
      state.left -= 1;
    },
    toggleInPlay(state) {
      state.isInPlay = !state.isInPlay;
    },
    playerWon(state) {
      state.isWon = true;
    },
    incrementTimesPlayed(state) {
      state.timesPlayed++;
    },
    reset(state) {
      state.level = 1;
      state.left = 50;
    },
  },
});

export const {
  nextLevel,
  reduceLeft,
  toggleInPlay,
  playerWon,
  reset,
  incrementTimesPlayed,
} = gameSlice.actions;

export default gameSlice;
