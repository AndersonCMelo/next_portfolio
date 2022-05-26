import styled from 'styled-components';

interface ThemeProps {
  themeMode?: string;
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

  h2 {
    position: sticky;
    top: 20px;
    left: 0;

    width: 30%;

    font-size: 56px;
    margin-bottom: 100px;

    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--white)'
      };
  }
`;