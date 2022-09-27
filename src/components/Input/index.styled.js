import styled from "styled-components";

const InputWrapper = styled.div` 
    position: relative;
    width: 100%;
    box-sizing: initial;

    svg {
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-size: 25px;
    color:${({theme})=> theme.colors.fieldColor};
  }
  
  &:hover,
  &:focus {
    color: ${({theme})=> theme.colors.baseColor};

    svg {
      color: ${({theme})=>theme.colors.baseColor};
    }
  }
`

const StyledInput = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 16px 23px 16px 47px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #C3C3C3;
  border-radius: 5px;
  color: ${({theme})=>theme.colors.baseColor};
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${({theme})=>theme.colors.fieldColor}
  }

  &:focus,
  &:hover {
    border: 1px solid ${({theme})=>theme.colors.baseColor};
    cursor: pointer;

    &::placeholder {
      color: ${({theme})=>theme.colors.baseColor};
    }
  }
`;

export {InputWrapper, StyledInput}