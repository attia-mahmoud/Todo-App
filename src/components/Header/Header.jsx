import React from "react";
import sunIcon from "../../assets/images/icon-sun.svg";
import moonIcon from "../../assets/images/icon-moon.svg";

const Header = ({ setTheme, theme }) => {
  return (
    <header>
      <h1>TODO</h1>
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        src={theme === "dark" ? sunIcon : moonIcon}
        alt="theme icon"
      />
    </header>
  );
};

export { Header };
