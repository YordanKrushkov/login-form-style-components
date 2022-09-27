import { createGlobalStyle } from 'styled-components';
import Roboto from './Roboto-Regular.ttf';
import RobotoBold from './Roboto-Bold.ttf';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${Roboto});
  font-weigh: 400;
}
@font-face {
  font-family: 'RobotoBold';
  src: url(${RobotoBold});
}
`;

export default FontStyles;