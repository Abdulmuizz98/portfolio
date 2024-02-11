import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import checkedSlice from "./checkedSlice";
import menuSlice from "./menuSlice";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    checked: checkedSlice.reducer,
    menu: menuSlice.reducer,
    game: gameSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

export function dispatchAsync(action: () => PayloadAction<void | string | []>) {
  return new Promise((resolve) => {
    store.dispatch(action());
    resolve(1);
  });
}
