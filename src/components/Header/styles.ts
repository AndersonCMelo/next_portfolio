import styled, { css } from 'styled-components';

interface ContainerProps {
  themeMode?: string;
}

export const Container = styled.header`
  position: fixed;
  z-index: 100;
  
  display: flex;
  align-items: center;
  
  width: 100vw;
  height: 100px;
  padding: 0 5%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 36px;
    width: 36px;
    background: var(--black);
    border: 1px solid var(--black);
    border-radius: 50%;
    color: var(--white);
    margin-left: auto;
    box-shadow: -10px -10px 20px var(--light_dropshadow_1), 10px 10px 20px var(--light_dropshadow_2), inset 4px 4px 6px var(--dark_innershadow_1), inset -4px -4px 6px var(--dark_innershadow_2);

    // transition: 10ms ease;

    &:active {
      box-shadow: -10px -10px 20px var(--light_dropshadow_1), 10px 10px 20px var(--light_dropshadow_2), inset -4px -4px 6px var(--dark_innershadow_1), inset 4px 4px 6px var(--dark_innershadow_2);

      ${(props: ContainerProps) => props.themeMode === 'dark' && css`
        box-shadow: -10px -10px 20px var(--dark_dropshadow_1), 10px 10px 20px var(--dark_dropshadow_2), inset -4px -4px 6px var(--dark_innershadow_1), inset 4px 4px 6px var(--dark_innershadow_3);
      `}
    }

    ${(props: ContainerProps) => props.themeMode === 'dark' && css`
      background: var(--white);
      border: 1px solid var(--white);
      color: var(--black);

      box-shadow: -10px -10px 20px var(--dark_dropshadow_1), 10px 10px 20px var(--dark_dropshadow_2), inset 4px 4px 6px var(--dark_innershadow_1), inset -4px -4px 6px var(--dark_innershadow_3);
    `}
  }
`;