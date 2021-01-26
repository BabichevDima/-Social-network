import React from "react";
import { updateNewPostActionCreator } from "@redux/profile-reducer";
import { connect } from "react-redux";

const PostField = (props) => {

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostActionCreator(text);
  };

  return (
    <div>
      <textarea onChange={onPostChange} value={props.newPostText} />
    </div>
  );
};

export const PostFieldContainer = connect(
  (state) => ({ newPostText: state.profilePage.newPostText }),
  (dispatch) => ({
    updateNewPostActionCreator: (payload) =>
      dispatch(updateNewPostActionCreator(payload)),
  })
)(PostField);