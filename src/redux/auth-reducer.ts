// import { authAPI } from "@api";
import { authAPI, ResultCodeEnum } from "../api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "network/auth/SET-USER-DATA";

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

  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const Login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe);

  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const loginOut = () => async (dispatch: any) => {
  const data = await authAPI.logOut();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
