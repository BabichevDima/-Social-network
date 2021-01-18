import React from "react";
import { Post } from "./Post/Post";
import styled from "@emotion/styled";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reduser";

export const MyPosts = (props) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <Wrap>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <Posts>
        {props.posts.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} />
        ))}
      </Posts>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 10px;
`;

const Posts = styled.div`
  margin-top: 10px;
`;
