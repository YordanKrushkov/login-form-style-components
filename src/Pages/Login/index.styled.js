import styled from "styled-components";
import { tablet, largeScreen, laptop } from "../../app/constants/mediaQueries";

const FormWrapper = styled.div` 
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Roboto';

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 0;

    ${tablet({ width: '60%', padding: '20px 0' })}
    ${laptop({ width: '25%' })}
    
  }
  h1{
    margin: 10px 0;
    font-family: 'RobotoBold';
    font-size: 36px;
    text-transform: capitalize;
    ${largeScreen({ margin: '36px 0' })}
  }
`

const BtnWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  ${tablet({ flexDirection: 'row', gap: '20px' })};
`

const ForgotPassword = styled.p`
  align-self: flex-end;
  margin: 5px 0 0;
  font-size: 14px;
  color: ${({theme}) => theme.colors.baseColor};

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.secondaryColor};
  }
`

const SocialMedia = styled.p`
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.textColor};

  ${tablet({ margin: '40px 0 36px' })};
`
const BottomText = styled.p`
  position: absolute;
  bottom: 20px;
  transform: translate(50% 50%);
  color: ${({theme}) => theme.colors.fieldColor};
  
  span {
    color: ${({theme}) => theme.colors.baseColor};

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.secondaryColor};
    }
  }
`

export {FormWrapper, BtnWrapper, ForgotPassword, SocialMedia, BottomText}