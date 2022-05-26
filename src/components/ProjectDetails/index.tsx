import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

import { useProject } from '../../context/ProjectContext';
import { useTheme } from '../../context/ThemeContext';

import { Container, Content, Libraries } from './styles';

export function ProjectDetails() {
  const { appTheme } = useTheme();

  const { project, projectOpened, setProjectOpened } = useProject();

  return (
    <Container style={{ display: projectOpened ? 'flex' : 'none' }}>
      <Content themeMode={appTheme}>
        <button type='button' onClick={() => setProjectOpened(false)}><FiX /></button>
        <h3>{projectOpened ? project.name : ''}</h3>
        <p>{projectOpened ? project.description : ''}</p>

        <Libraries themeMode={appTheme}>
          <div>
            <strong>Language:</strong>
            <span>{projectOpened ? project.language : ''}</span>
          </div>

          <div style={{ display: projectOpened && project.framework === null ? 'none' : 'flex' }}>
            <strong>Framework:</strong>
            <span>{projectOpened ? project.framework : ''}</span>
          </div>

          <div style={{ display: projectOpened && project.libraries.length === 0 ? 'none' : 'flex' }}>
            <strong>Some libraries:</strong>
            {projectOpened ? project.libraries.map(item => (
              <span style={{ marginRight: 6 }} key={item}>
                {item}
                {project.libraries.indexOf(item) === project.libraries.length - 1 ? ', ...' : ', '}
              </span>
            )) : ''}
          </div>

          {/* Link */}
          <div style={{ display: projectOpened && project.link === null ? 'none' : 'flex' }}>
            <strong>View project:</strong>
            <a href={projectOpened ? project.link : '/'} target="_blank" rel="noreferrer">Click here</a>
          </div>
        </Libraries>
      </Content>
    </Container>
  )
}