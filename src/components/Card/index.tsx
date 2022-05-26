/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

import project1 from '../../../public/project01.jpg'
import projectLabel from '../../../public/project_label.png'

import { useProject } from '../../context/ProjectContext';
import { useTheme } from '../../context/ThemeContext';

import { Container, Infos } from './styles';

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

interface Projects {
  project: ProjectProps;
  // onOpen: Function;
}

export function Card({ project }: Projects) {
  const { appTheme } = useTheme();

  const { setProject, setProjectOpened } = useProject();

  function open(id: string) {
    fetch(`/api/projects/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data);
        setProject(data);
        setProjectOpened(true);
      })
  }

  return (
    <Container>
      <Image src={projectLabel} alt={project.name} />

      <Infos themeMode={appTheme}>
        <h3>{project.name}</h3>

        <div>
          {project.techs.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div>
          <button type='button' onClick={() => open(project.id)}>
            View more
          </button>
        </div>
      </Infos>
    </Container>
  )
}