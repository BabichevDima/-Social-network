import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "@common/FormsControl";
import { required } from "@utils/validators";
import styled from "@emotion/styled";

const ProfileDataForm = ({ handleSubmit, initialValues, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>

      {error && <FieldError>{error}</FieldError>}

      <div>
        <b>Full name:</b>
        <Field
          component={Input}
          placeholder={"Full name"}
          name={"fullName"}
          validate={[required]}
        ></Field>
      </div>

      <div>
        <b>Looking for a job:</b>
        <Field
          type={"checkbox"}
          component={Input}
          name={"lookingForAJob"}
        ></Field>
      </div>

      <div>
        <b>My profession skills:</b>
        <Field
          component={Textarea}
          placeholder={"My profession skills"}
          name={"lookingForAJobDescription"}
          validate={[required]}
        ></Field>
      </div>

      <div>
        <b>About me:</b>
        <Field
          component={Textarea}
          placeholder={"About me"}
          name={"aboutMe"}
          validate={[required]}
        ></Field>
      </div>

      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>{key}:</b>
              <Field
                component={Input}
                placeholder={key}
                name={"contacts." + key}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm({
  form: "editProfile",
})(ProfileDataForm);

const FieldError = styled.div`
  color: red;
  padding-left: 3px;
`;
