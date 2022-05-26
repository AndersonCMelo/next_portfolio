import React, { createContext, useState, useContext } from 'react';

interface ThemeContextData {
  appTheme?: string;
  setAppTheme?: any;
}

interface ContextProps {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider = ({ children }: ContextProps) => {
  const [appTheme, setAppTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  const { appTheme, setAppTheme } = context;
  return { appTheme, setAppTheme };
}

export { ThemeProvider, useTheme };
