import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styled from "@emotion/styled";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reduser";

export const Dialogs = (props) => {
  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <WrapDialogs>
      <DialogsItems>
        {props.state.dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </DialogsItems>

      <BossMessages>
        {props.state.messages.map((m) => (
          <Message message={m.message} />
        ))}

        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={props.state.newMessageBody}
            ></textarea>
          </div>

          <Button onClick={onSendMessageClick}>Add massage</Button>
        </div>
      </BossMessages>
    </WrapDialogs>
  );
};

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

const Messages = styled.div`
  color: white;
`;

const Button = styled.button`
  width: 100px;
  height: 25px;
`;
