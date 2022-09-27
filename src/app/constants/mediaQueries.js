import { css } from 'styled-components';

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 650px ) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 1200px ) {
      ${props}
    }
  `;
};
export const largeScreen = (props) => {
  return css`
    @media only screen and (min-width: 1600px ) {
      ${props}
    }
  `;
};