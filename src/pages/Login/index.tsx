import React from "react";
import GoogleIcon from "../../images/google.png";
import AuthenticationService from "../../services/authentication";
import { Button } from "./styles";

const Login: React.FC = (): JSX.Element => {
  return (
    <>
      <Button onClick={() => AuthenticationService.loginWithGoogle()}>
        Login
        <img src={GoogleIcon} />
      </Button>
    </>
  );
};

export default Login;
