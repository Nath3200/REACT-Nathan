import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {

    fetchAuth: {
      id : "",
      email: "",
      token: "",
      pseudo: "",
    },
    email : "",
    password : ""

  },
  reducers: {
    setAuth: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.fetchAuth = payload;
    },
    setEmail: (state, { payload }) => {
       console.log("Payload: ", payload);
      state.email = payload;
    },
    setPassword: (state, { payload }) => {
       console.log("Payload: ", payload);
      state.password = payload;
    },

  },
});

// export quis servira pour mes fonctions
export const { setAuth,setEmail,setPassword } = authSlice.actions;

export const getAuth = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.auth.fetchAuth
}

export const getEmail = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.auth.email
}
export const getPassword = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.auth.password
}

export const getPseudo = (state) => {
  // console.log("state in redux", state.auth.fetchAuth.pseudo)
  return state.auth.fetchAuth.pseudo
}
export const getToken = (state) => {
  // console.log("state in redux", state.auth.fetchAuth.pseudo)
  return state.auth.fetchAuth.token
}

export default authSlice.reducer;
