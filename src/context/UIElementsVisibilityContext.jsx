import React, { createContext, useState } from "react";

const UIElementsVisibilityContext = createContext(null);

const UIElementsVisibilityContextProvider = ({ children }) => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(true);

  return (
    <UIElementsVisibilityContext.Provider
      value={{
        showMenuButton,
        showContactMenu,
        setShowMenuButton,
        setShowContactMenu,
      }}
    >
      {children}
    </UIElementsVisibilityContext.Provider>
  );
};

export { UIElementsVisibilityContext };
export default UIElementsVisibilityContextProvider;
