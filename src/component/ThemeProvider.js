import React, { createContext, useState } from 'react';

export const Theme = createContext();

export default function ThemeProvider( { children } ) {

  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <Theme.Provider value={[currentTheme, setCurrentTheme]}>
      { children }
    </Theme.Provider>
  )
}
