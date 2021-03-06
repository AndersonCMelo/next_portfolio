import styled from 'styled-components';

interface ThemeProps {
  themeMode?: string;
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  background-color: 
    ${props => props.themeMode === 'light'
      ? 'var(--light_background)'
      : 'var(--dark_background)'
    };
  
  background-image: url('/background_hero.png');
  background-repeat: no-repeat;
  background-position: -20% 0;
  background-size: 130%;
`;

export const Content = styled.div<ThemeProps>`
  max-width: 90%;
  width: 100%;
  margin-top: 120px;

  h1 {
    font-size: 64px;
    margin-top: 30px;
    margin-bottom: 50px;
    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--white)'
      };
  }

  p {
    font-size: 22px;
    width: 60%;
    margin-bottom: 30px;
    font-weight: 300;
    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--light_type)'
        : 'var(--dark_type)'
      };
  }

  a {
    font-size: 22px;
    color: var(--light_primary);
    font-weight: 600;
    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
  }

  div.secondSection {
    margin-top: 260px;
  }

  @media (max-width: 1080px) {
    h1 {
      font-size: 60px;
    }
    
    p {
      font-size: 20px;
      width: 80%;
    }

    div.secondSection {
      margin-top: 200px;
    }
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 46px;
      margin-bottom: 30px;
      line-height: 120%;
    }

    p {
      font-size: 18px;
      width: 100%;
    }

    div.secondSection {
      margin-top: 100px;
    }
  }
`;

export const ContactSection = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;
  margin-bottom: 200px;

  h2 {
    font-size: 56px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--white)'
      };
  }

  > div {
    display: flex;
    align-items: center;

    div.point {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: 
        ${props => props.themeMode === 'light'
          ? 'var(--primary)'
          : 'var(--white)'
        };

      margin: 0 10px;
    }
  }

  a {
    color: 
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
  }

  @media (max-width: 1080px) {
    margin-top: 200px;
    margin-bottom: 220px;

    h2 {
      font-size: 50px;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 720px) {
    margin-top: 150px;
    margin-bottom: 160px;

    h2 {
      font-size: 40px;
      margin-bottom: 25px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      div.point {
        margin: 10px 10px;
      }
    }
  }
`;
