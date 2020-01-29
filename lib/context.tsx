import { createContext, useState, FunctionComponent } from "react";

export const GlobalContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {}
});

export const GlobalContextProvider: FunctionComponent = props => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }
  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
