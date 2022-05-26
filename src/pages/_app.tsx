// import { useState, useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
// import { Header } from '../components/Header';
// import { ThemeProvider } from 'styled-components';

import { AppProvider } from '../context'

import GlobalStyles from '../styles/global';

// import theme from '../theme';

// import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // const [cursorX, setCursorX] = useState(null);
  // const [cursorY, setCursorY] = useState(null);
  
  // const [cursorScale, setCursorScale] = useState(1);

  // const cursor = useRef(null);

  // const endX = useRef(cursorX);
  // const endY = useRef(cursorY);

  /* const mouseMoveEvent = (e: any) => {
    endY.current = e.pageY;
    endX.current = e.pageX;

    cursor.current.style.top = endY.current + 'px';
    cursor.current.style.left = endX.current + 'px';
  }; */

  /* useEffect(() => {
    setCursorX(window.innerWidth / 2);
    setCursorY(window.innerHeight / 2);

    window.addEventListener('mousemove', mouseMoveEvent);

    const a = window.document.querySelectorAll('a');
    const button = window.document.querySelectorAll('button');

    a.forEach(element => {
      element.addEventListener('mouseenter', () => {
        // cursor.current.style.display = 'flex';
        setCursorScale(3);
      });
      element.addEventListener('mouseleave', () => {
        // cursor.current.style.display = 'none';
        setCursorScale(1);
      });
    });

    button.forEach(element => {
      element.addEventListener('mouseenter', () => {
        // cursor.current.style.display = 'block';
        setCursorScale(0.3);
      });
      element.addEventListener('mouseleave', () => {
        // cursor.current.style.display = 'none';
        setCursorScale(1);
      });
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMoveEvent);
    };
    
    window.addEventListener('mousemove', (e) => {
      // setCursorX(e.clientX);
      // setCursorY(e.clientY);
      
    });

    return () => {
      window.removeEventListener('mousemove', (e) => {
        // setCursorX(e.clientX);
        // setCursorY(e.clientY);
      });
    }
  }, []); */

  return (
    <>
      <AppProvider>
        {/* <ThemeProvider theme={theme}> */}
          {/* <Header /> */}
          <Component {...pageProps} />

          <GlobalStyles />

          {/* <div
            ref={cursor}
            className="customCursor"
            style={{
              // display: 'none',
              // top: `${cursorY - 7}px`,
              // left: `${cursorX - 7}px`,
              transform: `scale(${cursorScale})`,
            }}
          >
            <span>View</span>
          </div> */}
        {/* </ThemeProvider> */}
      </AppProvider>
    </>
  )
}

export default MyApp
