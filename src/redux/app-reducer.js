import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "network/app/INITIALIZED-SUCCESS";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
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

export const setInitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  const promise = await dispatch(getAuthUserData());
  dispatch(setInitializedSuccess());
};
