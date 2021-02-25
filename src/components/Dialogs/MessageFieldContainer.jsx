// import React from "react";
// import { connect } from "react-redux";
// import { updateNewMessageBodyCreator } from "@redux/dialogs-reducer";

// const MessageField = (props) => {

//   const onNewMessageChange = (e) => {
//     const body = e.target.value;
//     props.updateNewMessageBodyCreator(body);
//   };

//   return (
//     <div>
//       <textarea
//         onChange={onNewMessageChange}
//         value={props.newMessageBody}
//       ></textarea>
//     </div>
//   );
// };

// export const MessageFieldContainer = connect(
//   (state) => ({ newMessageBody: state.dialogsPage.newMessageBody }),
//   (dispatch) => ({
//     updateNewMessageBodyCreator: (payload) =>
//       dispatch(updateNewMessageBodyCreator(payload)),
//   })
// )(MessageField);
