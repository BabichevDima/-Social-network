// import { authAPI } from "@api";
import { authAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "network/auth/SET-USER-DATA";

// export type InitialStateType = {
//   id: Number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
// };

const initialState = {
  id: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
};

export type InitialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataPayloadType;
};
export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch: any) => {
  const data = await authAPI.me();

  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const Login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const loginOut = () => async (dispatch: any) => {
  const data = await authAPI.logOut();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
