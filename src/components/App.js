import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { Header } from "../components/Header";
import { AuthenticatedScreen } from "../screens/AuthenticatedScreen";
import { UnauthenticatedScreen } from "../screens/UnauthenticatedScreen";

export const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  useEffect(() => {
    function getUser() {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }

    getUser();
  });

  return (
    <UserContext.Provider value={value}>
      <div className="ff-josefin" data-theme={theme}>
        <main>
          <Header theme={theme} setTheme={setTheme} />
          {user ? <AuthenticatedScreen /> : <UnauthenticatedScreen />}
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
