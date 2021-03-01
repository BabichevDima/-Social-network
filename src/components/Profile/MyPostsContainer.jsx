import React from "react";
import { addPostActionCreator } from "@redux/profile-reducer";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { Post } from "./Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators";
import { Textarea } from "../common/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  const addPost = (values) => {
    props.addPostActionCreator(values.newPost);
  };

  return (
    <Wrap>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormReduxForm onSubmit={addPost} />
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
  { addPostActionCreator }
)(MyPosts);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder={"Enter your post"}
          name={"newPost"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add massage</button>
      </div>
    </form>
  );
};

const AddNewPostFormReduxForm = reduxForm({
  form: "AddNewPostForm",
})(AddNewPostForm);

const Wrap = styled.div`
  padding: 10px;
`;

const Posts = styled.div`
  margin-top: 10px;
`;
