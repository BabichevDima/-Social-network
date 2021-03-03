import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators";
import { Input } from "../common/FormsControl";
import { Login } from "@redux/auth-reducer";
import { Redirect } from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Log = (props) => {
  const onSubmit = (formData) => {
    props.Login(formData.email, formData.password, formData.rememberMe);
    console.log(formData);
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export const LoginConnect = connect(
  (state) => ({
    isAuth: state.auth.isAuth,
  }),
  { Login }
)(Log);
