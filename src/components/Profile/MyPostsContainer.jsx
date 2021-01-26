import React from "react";
import { addPostActionCreator } from "@redux/profile-reducer";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { PostFieldContainer } from "./PostFieldContainer";
import { Post } from "./Post";

const MyPosts = (props) => {
  const addPost = () => {
    props.addPostActionCreator();
  };

  return (
    <Wrap>
      <h3>My posts</h3>
      <div>
        <PostFieldContainer />
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <Posts>
        {props.posts.map((p) => (
          <Post message={p.message} key={p.id} likesCount={p.likesCount} />
        ))}
      </Posts>
    </Wrap>
  );
};

export const MyPostsContainer = connect(
  (state) => ({ posts: state.profilePage.posts }),
  (dispatch) => ({
    addPostActionCreator: () => dispatch(addPostActionCreator()),
  })
)(MyPosts);

const Wrap = styled.div`
  padding: 10px;
`;

const Posts = styled.div`
  margin-top: 10px;
`;
