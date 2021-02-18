import { usersAPI } from "@api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 18 },
    { id: 4, message: "Dada", likesCount: 5 },
  ],
  newPostText: "TMS",
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload };

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };

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

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getUser(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};
