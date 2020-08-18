import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import ProfilePage from "./profilePage";
import PasswordReset from "./passwordReset";
function User() {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default User;