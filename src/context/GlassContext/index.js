import React, { useContext, useState } from "react";

const GlassContext = React.createContext();

export const useGlassContext = () => useContext(GlassContext);

export function GlassContextProvider({ children }) {
  const [glassStyle, setGlassStlye] = useState({
    blur: 50,
    shadow: 1,
    shadowTransparency: 1,
    outline: 1,
    outlineTransparency: 2,
    outlineColor: 256,
  });

  function updateBlur(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, blur: value };
    });
  }

  function updateShadow(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, shadow: value };
    });
  }
  function updateShadowTransparency(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, shadowTransparency: value };
    });
  }
  function updateOutline(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, outline: value };
    });
  }
  function updateOutlineTransparency(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, outlineTransparency: value };
    });
  }
  function updateOutlineColor(value) {
    setGlassStlye((prevstate) => {
      return { ...prevstate, outlineColor: value };
    });
  }

  return (
    <GlassContext.Provider
      value={{
        glassStyle,
        updateBlur,
        updateShadow,
        updateShadowTransparency,
        updateOutline,
        updateOutlineTransparency,
        updateOutlineColor,
      }}
    >
      {children}
    </GlassContext.Provider>
  );
}
