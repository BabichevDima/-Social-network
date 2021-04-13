import { usersAPI } from "../api/index";
import { profileAPI } from "../api/index";
import { stopSubmit } from "redux-form";

import { PostType, ProfileType } from "../Type/Type";

const ADD_POST = "network/profilePage/ADD-POST";
const SET_USER_PROFILE = "network/profilePage/SET-USER-PROFILE";
const SET_STATUS = "network/profilePage/SET-STATUS";
const DELETE_POST = "network/profilePage/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "network/profilePage/SAVE-PHOTO";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 18 },
    { id: 4, message: "Dada", likesCount: 5 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };

    case SET_STATUS:
      return { ...state, status: action.status };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPost: string;
};

export const addPostActionCreator = (
  newPost: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPost,
});

type DeletePostActionCreatorType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePostActionCreator = (
  postId: number
): DeletePostActionCreatorType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PostType;
};
export const savePhotoSuccess = (photos: PostType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type SetUsersProfileType = {
  type: typeof SET_USER_PROFILE;
  payload: string;
};
export const setUsersProfile = (profile: string): SetUsersProfileType => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(data));
};

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    // debugger;
    dispatch(stopSubmit("editProfile", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
    // dispatch(stopSubmit("editProfile", { contacts: { facebook: data.messages[0] }}));
  }
};
