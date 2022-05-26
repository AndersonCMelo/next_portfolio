import styled from 'styled-components';

interface ThemeProps {
  themeMode?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: right;
  margin-left: auto;

  padding-right: 5%;
  margin-bottom: 100px;
  width: 70%;

  position: relative;

  img {
    max-height: 520px;
    max-height: 36vw;
    height: 100%;
    /* height: auto; */
    /* max-width: 440px; */
    width: auto;
    /* width: 100vw; */
    border-radius: 16px;
    margin-left: auto;
  }
`;

export const Infos = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  position: absolute;
  left: 0;
  width: 50%;

  h3 {
    font-size: 57px;
    font-weight: 300;
    mix-blend-mode: difference;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary_difference)'
        : 'var(--white)'
      };
    // margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      margin-right: 15px;
      color:
        ${props => props.themeMode === 'light'
          ? 'var(--light_type)'
          : 'var(--dark_type)'
        };
    }
  }

  button {
    margin-top: 80px;
    background: transparent;
    border: none;
    color:
      ${props => props.themeMode === 'light'
        ? 'var(--primary)'
        : 'var(--secondary)'
      };
    font-size: 22px;
  }
`;
