import styled from "styled-components";
import { tablet } from "../../app/constants/mediaQueries";

const StyledButton = styled.button` 
  width: 100%;
  padding: ${({ primary }) => primary ? '15px 0' : '12px 57px'};
  margin-top: ${({ primary }) => primary && '20px'};
  box-sizing: border-box;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: white;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border: none;
  border-radius: 8px;
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme}) => theme.styles.boxShadow};
  }
  ${tablet({ fontSize: '16px' })}
  ${({ primary })=> primary && tablet({ marginTop: '40px' })}
`

export { StyledButton };