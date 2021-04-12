import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "network/app/INITIALIZED-SUCCESS";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: any
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

type SetInitializedSuccess = {
  type: typeof INITIALIZED_SUCCESS;
};
export const setInitializedSuccess = (): SetInitializedSuccess => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch: any) => {
  const promise = await dispatch(getAuthUserData());
  dispatch(setInitializedSuccess());
};
