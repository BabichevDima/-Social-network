import React from "react";
import styled from "@emotion/styled";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <div>
        {hasError ? (
          <FieldError {...input} {...props} />
        ) : (
          <Field {...input} {...props} />
        )}
      </div>
      {hasError && <Span>"{meta.error}"</Span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <div>
        {hasError ? (
          <FieldInputError {...input} {...props} />
        ) : (
          <FieldInput {...input} {...props} />
        )}
      </div>
      {hasError && <Span>"{meta.error}"</Span>}
    </div>
  );
};

const Field = styled.textarea``;

const FieldError = styled.textarea`
  border: solid 2px red;
`;

const FieldInput = styled.input``;

const FieldInputError = styled.input`
  border: solid 2px red;
`;

const Span = styled.span`
  color: red;
`;
