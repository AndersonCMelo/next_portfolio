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

  @media (max-width: 1080px) {
    h2 {
      width: 34%;
      font-size: 50px;
      margin-bottom: 70px;
    }
  }

  @media (max-width: 720px) {
    margin-bottom: 80px;
    
    h2 {
      font-size: 40px;
      position: relative;
      width: 100%;
      margin-bottom: 120px;
    }
  }
`;