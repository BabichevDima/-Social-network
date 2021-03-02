import React from "react";
import styled from "@emotion/styled";
import Attention from "../../assets/images/Attention.png";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <div>
        {hasError ? (
          <FieldTextareaError {...input} {...props} />
        ) : (
          <FieldTextarea {...input} {...props} />
        )}
      </div>
      {hasError && (
        <div>
          <Span>"{meta.error}"</Span>
          <Img src={Attention} />
        </div>
      )}
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
      {hasError && (
        <div>
          <Span>"{meta.error}"</Span>
          <Img src={Attention} />
        </div>
      )}
    </div>
  );
};

const FieldTextarea = styled.textarea``;

const FieldTextareaError = styled.textarea`
  border: solid 2px red;
`;

const FieldInput = styled.input``;

const FieldInputError = styled.input`
  border: solid 2px red;
`;

const Span = styled.span`
  color: red;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;
