import React, { createContext, useState, useContext } from 'react';

interface ProjectProps {
  id?: string;
  name?: string;
  techs?: Array<string>;
  description?: string;
  language?: string;
  framework?: string;
  libraries?: Array<string>;
  link?: string | null;
}

interface ProjectContextData {
  project?: ProjectProps;
  setProject?: any;
  projectOpened?: boolean;
  setProjectOpened?: any;
}

interface ContextProps {
  children: React.ReactNode;
};

const ProjectContext = createContext<ProjectContextData>({} as ProjectContextData);

const ProjectProvider = ({ children }: ContextProps) => {
  const [project, setProject] = useState();
  const [projectOpened, setProjectOpened] = useState(false);

  return (
    <ProjectContext.Provider value={{ project, setProject, projectOpened, setProjectOpened }}>
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);
  const { project, setProject, projectOpened, setProjectOpened } = context;
  return { project, setProject, projectOpened, setProjectOpened };
}

export { ProjectProvider, useProject };
