import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

import { useProject } from '../../context/ProjectContext';
import { useTheme } from '../../context/ThemeContext';

import { Container, Content, Libraries } from './styles';

export function ProjectDetails() {
  const { appTheme } = useTheme();

  const { project, projectOpened, setProjectOpened } = useProject();

  const stringLibraries = projectOpened && project.libraries.join(', ');

  return (
    <Container style={{ display: projectOpened ? 'flex' : 'none' }}>
      <Content themeMode={appTheme}>
        <button type='button' onClick={() => setProjectOpened(false)}><FiX /></button>
        <h3>{projectOpened ? project.name : ''}</h3>
        <p className='description'>{projectOpened ? project.description : ''}</p>

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
            <span style={{ marginRight: 6 }}>
              {projectOpened ? `${project.libraries.join(', ')}, ...` : ''}
            </span>
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