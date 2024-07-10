// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import customizerReducer from './customizer/custoizerSlide';

const store = configureStore({
  reducer: {
    customizer: customizerReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default store;
