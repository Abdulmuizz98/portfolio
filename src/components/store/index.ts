import { configureStore } from "@reduxjs/toolkit";
import checkedSlice from "./checkedSlice";
import menuSlice from "./menuSlice";
// ...

const store = configureStore({
  reducer: {
    checked: checkedSlice.reducer,
    menu: menuSlice.reducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
