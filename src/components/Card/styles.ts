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

  .image {
    /* max-height: 520px; */
    position: relative;
    max-height: 36vw;
    height: 100%;
    /* width: auto; */
    width: 100%;
    border-radius: 16px;
    margin-left: auto;
  }

  @media (max-width: 1080px) {
    width: 66%;

    img {
      max-height: 32vw;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 140px;
    padding-right: 0;

    img {
      max-height: 46vw;
    }
  }
`;

export const Img = styled.div`
  position: relative;
  max-height: 36vw;
  height: 36vw;
  /* width: auto; */
  width: 31vw;
  border-radius: 16px;
  margin-left: auto;
  
  span {
    border-radius: 16px;
  }

  @media (max-width: 1080px) {
    height: 32vw;
    width: 28vw;
  }

  @media (max-width: 720px) {
    height: 46vw;
    width: 34vw;
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

  @media (max-width: 1080px) {
    h3 {
      font-size: 46px;
    }

    div {
      span {
        font-size: 16px;
        margin-right: 10px;
      }
    }

    button {
      margin-top: 60px;
      font-size: 20px;
    }
  }

  @media (max-width: 720px) {
    width: 70%;

    h3 {
      font-size: 32px;
      line-height: 110%;
      margin-bottom: 10px;
    }

    div {
      flex-direction: column;
      align-items: baseline;
    }

    button {
      margin-top: 40px;
      font-size: 18px;
    }
  }
`;
