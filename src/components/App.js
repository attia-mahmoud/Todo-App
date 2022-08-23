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

  onAuthStateChanged(auth, (user) => {
    if (user) setUser(user);
    else setUser(null);
  });

  return (
    <div className="ff-josefin" data-theme={theme}>
      <UserContext.Provider value={value}>
        <main>
          <Header theme={theme} setTheme={setTheme} />
          {user ? <AuthenticatedScreen /> : <UnauthenticatedScreen />}
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
