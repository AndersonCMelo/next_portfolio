// import styles from './styles.module.scss';
import { Container } from './styles';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '../../context/ThemeContext';


export function Header() {
  const { appTheme, setAppTheme } = useTheme();

  return (
    // <header className={styles.headerContainer}>
    <Container themeMode={appTheme}>
      <button
        type='button'
        onClick={() => setAppTheme(appTheme === 'light' ? 'dark' : 'light')}
      >
        {appTheme === 'light' ? <FiMoon /> : <FiSun />}
      </button>
    </Container>
    // </header>
  )
}