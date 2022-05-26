import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --black: #1E2225;

    --popup_background: rgba(0, 0, 0, 0.5);

    --gray_100: #f2f2f2;
    --gray_300: #a8a8b3;
    --gray_900: #1E2225;

    --primary: #261050;
    --primary_difference: #C4E2AD;
    --secondary: #eba417;

    --light_background: #EAF2FD;
    --light_type: #6E808E;
    --light_dropshadow_1: rgba(250, 251, 255, 1);
    --light_dropshadow_2: rgba(22, 27, 29, 0.27);
    --dark_dropshadow_1: rgba(250, 251, 255, 0.33);
    --dark_dropshadow_2: rgba(22, 27, 29, 0.8);
    // --light_innershadow_1: #FAFBFF;
    // --light_innerhadow_2: #161B1D;
    
    --dark_background: #31363A;
    --dark_type: #FFFFFF;
    // --dark_dropshadow_1: #31363A;
    // --dark_dropshadow_2: #31363A;
    --dark_innershadow_1: rgba(250, 251, 255, 0.33);
    --dark_innershadow_2: rgba(42, 45, 50, 1);
    --dark_innershadow_3: rgba(22, 27, 29, 0.23);

    --light_button: #84A2FF;

    --dark_background: #31363A;
    --dark_type: #F2F2F2;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    /* background: var(--light_background); */
    /* color: var(--light_type); */
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    /* color: var(--primary); */
  }
`;
