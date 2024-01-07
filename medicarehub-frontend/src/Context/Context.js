// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({});

  const updateState = (newValue) => {
    setUserState(newValue);
  };

  return (
    <UserContext.Provider value={{ userState, updateState }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

export { UserContextProvider, useUserContext };
