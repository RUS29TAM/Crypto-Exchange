import {configureStore} from "@reduxjs/toolkit";
//import { cryptoApi } from "../services/cryptoApi";
import {cryptoApi} from "../services/cryptoApi";

// export default configureStore({
//     reducer: {
//       [cryptoApi.reducerPath]: cryptoApi.reducer},
// });
// [cryptoApi.reducerPath]: cryptoApi.reducer,

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
