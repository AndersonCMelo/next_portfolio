import styled, { css } from 'styled-components';

interface ThemeProps {
  themeMode?: string;
}

export const Container = styled.div<ThemeProps>`
  position: fixed;
  width: 50px;
  z-index: 100;
  height: 100vh;
  right: 3.6%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 360px;

    transform: rotate(90deg);
  }

  button {
    background: transparent;
    border: none;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;
