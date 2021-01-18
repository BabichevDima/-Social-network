const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-POST-MESSAGE";

export const dialogsReduser = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      const newMessage = { id: 6, message: body };
      state.messages.push(newMessage);
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
