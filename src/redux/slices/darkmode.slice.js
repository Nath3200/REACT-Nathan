import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: {
    isDarkMode : false,
  },
  reducers: {
    setDarkMode: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.isDarkMode = payload;
    },

  },
});

// export quis servira pour mes fonctions
export const { setDarkMode } = darkModeSlice.actions;

export const getDarkMode = (state) => {
  // console.log("state in redux", state.darkmode.isDarkMode)
  return state.darkmode.isDarkMode
}

export default darkModeSlice.reducer;
