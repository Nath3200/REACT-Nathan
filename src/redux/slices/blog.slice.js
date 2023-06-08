import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {

    objectBlog: [],
    articleSelected : null,
    theArticle : null
      

  },
  reducers: {
    setArticles: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.objectBlog = payload;
      let findObject= state.objectBlog.find((article)=>article.id===payload)
      state.theArticle = findObject;
    },
    setArticleSelected: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.objectBlog = payload;
    }

  },
});

// export quis servira pour mes fonctions
export const { setArticles, setArticleSelected } = blogSlice.actions;

export const getArticles = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.blog.objectBlog
}
export const getArticleSelected = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.blog.articleSelected
}

export default blogSlice.reducer;
