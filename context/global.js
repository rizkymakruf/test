import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [modal, setModal] = useState("");

  const [isFetch, setIsFetch] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const contextValue = {
    globalCtx: {
      modal,
      errorMsg,
      isFetch,
    },
    globalAct: {
      setModal,
      setErrorMsg,
      setIsFetch,
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
