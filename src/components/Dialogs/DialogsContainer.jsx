import React from "react";
import { DialogItem } from "./DialogItem";
import { MessageFieldContainer } from "./MessageFieldContainer";
import styled from "@emotion/styled";
import { sendMessageCreator } from "@redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

const Dialog = (props) => {
  const onSendMessageClick = () => {
    props.sendMessageCreator();
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
          <MessageFieldContainer />
          <Button onClick={onSendMessageClick}>Add massage</Button>
        </div>
      </BossMessages>
    </WrapDialogs>
  );
};

const AuthRedirectComponent = withAuthRedirect(Dialog);

export const DialogsContainer = connect(
  (state) => ({
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth,
  }),
  { sendMessageCreator }
)(AuthRedirectComponent);

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

const Button = styled.button`
  width: 100px;
  height: 25px;
`;
