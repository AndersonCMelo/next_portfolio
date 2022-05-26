import { useState, useEffect } from 'react';
// import styles from './styles.module.scss';

import { Card } from '../Card';

import { useTheme } from '../../context/ThemeContext';

import { Container } from './styles';

export function Projects() {
  const { appTheme } = useTheme();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
  }, []);

  return (
    <Container themeMode={appTheme}>
      <h2>Works I did</h2>

      {projects.map(project => (
        <Card project={project} key={project.id} />
      ))}
    </Container>
  )
}
