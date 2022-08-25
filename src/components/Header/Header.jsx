import React from "react";
import { signOutWithGoogle } from "../../Firebase";
import sunIcon from "../../assets/images/icon-sun.svg";
import moonIcon from "../../assets/images/icon-moon.svg";
import signOut from "../../assets/images/signout.svg";

const Header = ({ setTheme, theme, user }) => {
  return (
    <header>
      <h1>TODO</h1>
      <div id="header-meta">
        <img
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="theme icon"
        />
        {user && (
          <img onClick={signOutWithGoogle} src={signOut} alt="signout icon" />
        )}
      </div>
    </header>
  );
};

export { Header };
