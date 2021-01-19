import { combineReducers, createStore } from "redux";
import { sidebarReduser } from "./sidebar-reduser";
import { profileReduser } from "./profile-reduser";
import { dialogsReduser } from "./dialogs-reduser";

const reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
});

export const store = createStore(reducers);
