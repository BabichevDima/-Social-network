import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators";
import { Input } from "../common/FormsControl";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"Login"}
          component={Input}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"Password"}
          component={Input}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={"rememberMe"}
          component={Input}
        />
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

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
