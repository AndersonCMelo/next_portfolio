import styled, { css } from 'styled-components';

interface ThemeProps {
  themeMode?: string;
}

export const Container = styled.div<ThemeProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;
  background: var(--popup_background);

  display: none;
`;

export const Content = styled.div<ThemeProps>`
  width: 80%;
  height: 80%;
  background:
    ${props => props.themeMode === 'light'
      ? 'var(--light_background)'
      : 'var(--dark_background)'
    };
  border-radius: 16px;
  padding: 50px 40px;
  position: relative;

  button {
    position: absolute;
    top: 30px;
    right: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    width: 36px;
    background: var(--light_button);
    border: 1px solid var(--light_button);
    border-radius: 50%;
    color: var(--white);
    margin-left: auto;
    box-shadow: -10px -10px 20px var(--light_dropshadow_1), 10px 10px 20px var(--light_dropshadow_2), inset 4px 4px 6px var(--dark_innershadow_1), inset -4px -4px 6px var(--dark_innershadow_3);

    &:active {
      box-shadow: -10px -10px 20px var(--light_dropshadow_1), 10px 10px 20px var(--light_dropshadow_2), inset -4px -4px 6px var(--dark_innershadow_1), inset 4px 4px 6px var(--dark_innershadow_3);

      ${(props: ThemeProps) => props.themeMode === 'dark' && css`
        box-shadow: -10px -10px 20px var(--dark_dropshadow_1), 10px 10px 20px var(--dark_dropshadow_2), inset -4px -4px 6px var(--dark_innershadow_1), inset 4px 4px 6px var(--dark_innershadow_3);
      `}
    }

    ${(props: ThemeProps) => props.themeMode === 'dark' && css`
      box-shadow: -10px -10px 20px var(--dark_dropshadow_1), 10px 10px 20px var(--dark_dropshadow_2), inset 4px 4px 6px var(--dark_innershadow_1), inset -4px -4px 6px var(--dark_innershadow_3);
    `}
  }

  h3 {
    font-size: 36px;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
  }

  p.description {
    font-size: 22px;
    font-weight: 300;
    margin-top: 20px;
    width: 100%;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--light_type)'
        : 'var(--dark_type)'
      };
  }

  @media (max-width: 1080px) {
    padding: 45px 35px;
    
    h3 {
      font-size: 34px;
    }
    
    p.description {
      font-size: 20px;
    }
  }

  @media (max-width: 720px) {
    padding: 40px 20px 30px;
    width: 86%;
    height: 86%;

    overflow: scroll;

    button {
      top: 20px;
      right: 20px;

      height: 30px;
      width: 30px;
    }

    h3 {
      font-size: 28px;
    }
    
    p.description {
      font-size: 18px;
      margin-top: 10px;
    }
  }
`;

export const Libraries = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  span {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 300;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--light_type)'
        : 'var(--dark_type)'
      };
  }
  
  strong {
    font-size: 22px;
    margin-right: 10px;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
  }

  a {
    font-weight: 300;
    text-decoration: underline;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
  }

  @media (max-width: 1080px) {
    span {
      font-size: 20px;
      margin-bottom: 20px;
    }

    strong {
      font-size: 20px;
    }

    div {
      a {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 720px) {
    margin-top: 30px;

    span {
      font-size: 18px;
      margin-bottom: 12px;
    }

    strong {
      font-size: 18px;
    }

    div {
      a {
        font-size: 18px;
      }
    }
  }
`;
