import {configureStore} from "@reduxjs/toolkit";
//import { cryptoApi } from "../services/cryptoApi";
import {cryptoApi} from "../services/cryptoApi";
import {cryptoNewsApi} from "../services/cryptoNewsApi";

// export default configureStore({
//     reducer: {
//       [cryptoApi.reducerPath]: cryptoApi.reducer},
// });
// [cryptoApi.reducerPath]: cryptoApi.reducer,

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware) && getDefaultMiddleware().concat(cryptoNewsApi.middleware),

  //
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});


