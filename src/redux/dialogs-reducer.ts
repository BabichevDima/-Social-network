import { DialogType, MessageType } from "../Type/Type";

const SEND_MESSAGE = "network/dialogsPage/SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

export const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      const newMessage = { id: 6, message: body };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

type ActionsTypes = SendMessageCreatorType;

type SendMessageCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
