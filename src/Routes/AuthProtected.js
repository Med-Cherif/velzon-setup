import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

const AuthProtected = (props) => {
  

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };