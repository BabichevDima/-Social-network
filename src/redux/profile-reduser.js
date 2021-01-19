const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 18 },
    { id: 4, message: "Dada", likesCount: 5 },
  ],
  newPostText: "TMS",
};

export const profileReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      const newUser = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newUser);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = payload;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});
