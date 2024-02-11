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
    stopPlay(state) {
      state.isInPlay = false;
    },
    startPlay(state) {
      state.isInPlay = true;
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
    reload(state) {
      state.level = 1;
      state.left = 50;
      state.timesPlayed = 0;
      state.isInPlay = false;
      state.isWon = false;
    },
  },
});

export const {
  nextLevel,
  reduceLeft,
  stopPlay,
  startPlay,
  playerWon,
  reset,
  reload,
  incrementTimesPlayed,
} = gameSlice.actions;

export default gameSlice;
