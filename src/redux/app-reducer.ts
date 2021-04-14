import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZED_SUCCESS = "network/app/INITIALIZED-SUCCESS";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type ActionsTypes = SetInitializedSuccess;

type SetInitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS;
};
export const setInitializedSuccess = (): SetInitializedSuccess => ({
  type: INITIALIZED_SUCCESS,
});

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(setInitializedSuccess());
};
