/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from 'next/link';
import Image from 'next/image';
import { relative } from 'path';
// import styles from './styles.module.scss';

import project1 from '../../../public/project1.jpg'
import project2 from '../../../public/project2.jpg'
import project3 from '../../../public/project3.jpg'
import project4 from '../../../public/project4.jpg'
import project5 from '../../../public/project5.jpg'
import project6 from '../../../public/project6.jpg'
import projectLabel from '../../../public/project_label.png'

import { useProject } from '../../context/ProjectContext';
import { useTheme } from '../../context/ThemeContext';

import { Container, Img, Infos } from './styles';

interface DataProps {
  name?: string;
  techs?: Array<string>;
  description?: string;
  language?: string;
  framework?: string;
  libraries?: Array<string>;
  link?: string | null;
  image?: string;
}

interface ProjectProps {
  data: DataProps;
  ref: any;
}

interface Projects {
  project: ProjectProps;
}

export function Card({ project }: Projects) {
  const { appTheme } = useTheme();

  const { setProject, setProjectOpened } = useProject();

  function open(ref: ProjectProps) {
    const id = ref["@ref"].id;
    
    fetch(`/api/projects/${id}`)
      .then(response => response.json())
      .then(data => {
        setProject(data.data);
        setProjectOpened(true);
      })
  }

  function projectImage(project: ProjectProps) {
    // console.log('projet', project);
    
    /* if (project.id === '1') {
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
    } */

    return projectLabel;
  }

  return (
    <Container>
      {/* <Image src={project.data.image} alt={project.data.name} /> */}
      <Img>
        <Image
          src={project.data.image}
          layout="fill"
          objectFit="cover"
          alt={project.data.name}
        />
      </Img>

      <Infos themeMode={appTheme}>
        <h3>{project.data.name}</h3>

        <div>
          {project.data.techs.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div>
          <button type='button' onClick={() => open(project.ref)}>
            View more
          </button>
        </div>
      </Infos>
    </Container>
  )
}