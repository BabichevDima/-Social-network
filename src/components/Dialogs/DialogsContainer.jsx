import React from "react";
import { DialogItem } from "./DialogItem";
import styled from "@emotion/styled";
import { sendMessageCreator } from "@redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "@hoc";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";

const Dialog = (props) => {
  const addNewMessage = (values) => {
    props.sendMessageCreator(values.newMessageBody);
  };

  return (
    <WrapDialogs>
      <DialogsItems>
        {props.dialogs.map((d) => (
          <DialogItem name={d.name} key={d.id} id={d.id} />
        ))}
      </DialogsItems>

      <BossMessages>
        {props.messages.map((m) => (
          <div key={m.id}>{m.message}</div>
        ))}

        <div>
          <AddMessageFormReduxForm onSubmit={addNewMessage} />
        </div>
      </BossMessages>
    </WrapDialogs>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          placeholder={"Enter your message"}
          name={"newMessageBody"}
        />
      </div>
      <div>
        <button>Add massage</button>
      </div>
    </form>
  );
};

const AddMessageFormReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export const DialogsContainer = compose(
  connect(
    (state) => ({
      messages: state.dialogsPage.messages,
      dialogs: state.dialogsPage.dialogs,
    }),
    { sendMessageCreator }
  ),
  withAuthRedirect
)(Dialog);

const WrapDialogs = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const DialogsItems = styled.div`
  padding: 10px;
  color: white;
  &:active {
    color: gold;
  }
`;

const BossMessages = styled.div`
  padding: 10px;
`;
