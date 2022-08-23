import React from "react";
import { signInWithGoogle } from "../../Firebase";
import { UserContext } from "../App.js";
import googleLogo from "../../assets/images/google.svg";

const SignInButton = () => {
  const [click, setClick] = React.useState(false);
  let { setUser } = React.useContext(UserContext);
  const SignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode} - Message: ${errorMessage}`);
      });
  };

  return (
    <>
      <h2 id="getStarted-button" onClick={() => setClick(true)}>
        Get Started {">"}
      </h2>
      <button
        className="button"
        id="signIn-button"
        onClick={SignIn}
        style={{ transform: click && "translateY(0%)" }}
      >
        <img src={googleLogo} alt="googleLogo" />
        Continue with Google
      </button>
    </>
  );
};

export { SignInButton };
