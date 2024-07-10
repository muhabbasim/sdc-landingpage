// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';


const localStorageLang = localStorage.getItem('SDC_language');
const currentLang = localStorageLang ? JSON.parse(localStorageLang) : null;

export const customizerSlice = createSlice({
  name: 'customizer',
  initialState: {
    activeDir: 'ltr',
    isLanguage: currentLang,
  },
  reducers: {
    setDir: (state, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state, action) => {
      state.isLanguage = action.payload;
    },
 
  },
});

export const { setDir, setLanguage } = customizerSlice.actions;

export default customizerSlice.reducer;
