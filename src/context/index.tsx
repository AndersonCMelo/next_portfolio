import React from 'react';

import { ProjectProvider } from './ProjectContext';
import { ThemeProvider } from './ThemeContext';

interface ContextProps {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: ContextProps) => (
  <ThemeProvider>
    <ProjectProvider>
      {children}
    </ProjectProvider>
  </ThemeProvider>
)
