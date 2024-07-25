import { useState, useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();
export const SetUserContext = createContext();

function AuthContext({ children }) {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      if (currentUser) setUser(currentUser);
      else {
        setUser(null);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <SetUserContext.Provider value={{ setUser }}>
      <UserContext.Provider value={{ user }}>
        {!isLoading && children}
      </UserContext.Provider>
    </SetUserContext.Provider>
  );
}

export default AuthContext;
