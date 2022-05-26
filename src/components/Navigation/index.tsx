/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '../../context/ThemeContext';

import { Container } from './styles';

export function Navigation({ onNavigate }) {
  const { appTheme } = useTheme();

  return (
    <Container themeMode={appTheme}>
      <div>
        <button type='button' onClick={() => onNavigate('about')}>About me</button>
        <button type='button' onClick={() => onNavigate('works')}>Works I did</button>
        <button type='button' onClick={() => onNavigate('contact')}>Let's talk</button>
      </div>
    </Container>
  );
};
