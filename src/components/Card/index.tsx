/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

import project1 from '../../../public/project1.jpg'
import project2 from '../../../public/project2.jpg'
import project3 from '../../../public/project3.jpg'
import project4 from '../../../public/project4.jpg'
import project5 from '../../../public/project5.jpg'
import project6 from '../../../public/project6.jpg'
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

  function projectImage(project: ProjectProps) {
    console.log('projet', project);
    
    if (project.id === '1') {
      return project1;
    }
    if (project.id === '2') {
      return project2;
    }
    if (project.id === '3') {
      return project3;
    }
    if (project.id === '4') {
      return project4;
    }
    if (project.id === '5') {
      return project5;
    }
    if (project.id === '6') {
      return project6;
    }

    return projectLabel;
  }

  return (
    <Container>
      <Image src={projectImage(project)} alt={project.name} />

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