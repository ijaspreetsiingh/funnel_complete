import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  palette: 'default_dark', // Options: 'default_dark', 'luxury_gold', 'cool_ocean', 'royal_purple'
  font: 'playfair_poppins', // Options: 'playfair_poppins', 'lato_merriweather', 'montserrat_opensans'
  hero: {
    type: 'default', // Options: 'default', 'image', 'video'
    url: ''
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPalette: (state, action) => {
      state.palette = action.payload;
    },
    setFont: (state, action) => {
      state.font = action.payload;
    },
    setHeroMedia: (state, action) => {
      state.hero = action.payload;
    },
  },
});

// Export actions
export const { setPalette, setFont, setHeroMedia } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
