/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import styles from './homepage.module.scss';

// import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Projects } from '../components/Projects';
import { ProjectDetails } from '../components/ProjectDetails';

import { useTheme } from '../context/ThemeContext';

import { Container, Content, ContactSection } from '../styles/styles';

export default function Home() {
  const { appTheme } = useTheme();

  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);

  function scrollToSection(section: string) {
    if (section === 'about') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    if (section === 'works') {
      window.scrollTo({
        top: works.current.offsetTop,
        behavior: "smooth"
      })
    }

    if (section === 'contact') {
      window.scrollTo({
        top: contact.current.offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <Head>
        <title>Anderson Melo</title> 
      </Head>

      <Navigation onNavigate={(section: string) => scrollToSection(section)} />

      <Container themeMode={appTheme}>
        <Header />

        <Content themeMode={appTheme}>
          <div ref={about}>
            <h1>
              Hello,<br />I’m Anderson Melo!
            </h1>

            <p>
              I'm a Frontend Developer at Deixa no Azul living in João Pessoa, Brazil.
              I've been working with ReactJS and React Native building responsive web applications and mobile apps.
            </p>

            <p>
              I love to work closely with the design and tech team, seeking for an aesthetically pleasing interface and provides great usability.
            </p>

            <Link href="/">
              <a style={{ display: 'none' }}>Read more about me</a>
            </Link>
          </div>

          <div className='secondSection' ref={works}>
            <Projects />
          </div>

          <ContactSection themeMode={appTheme} ref={contact}>
            <h2>Let's talk</h2>

            <div>
              <a
                href="https://www.linkedin.com/in/andersoncordeirodemelo/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <div className="point" />
              <a
                href="mailto:andersonmelo13@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                E-mail
              </a>
              <div className="point" />
              <a
                href="https://wa.me/message/QKBB3Q6C4SEJK1"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </ContactSection>

          <ProjectDetails />
        </Content>
      </Container>
    </>
  )
}
