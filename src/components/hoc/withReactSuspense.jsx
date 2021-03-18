import React, { Suspense } from "react";
import { Preloader } from "@common/Preloader";

export const withReactSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
