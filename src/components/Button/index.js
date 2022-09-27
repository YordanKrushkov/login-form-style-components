import { StyledButton } from './index.styled';

const Button = ({ type = 'submit',text, primary, color='baseColor', clickHandler}) => {
  return ( 
    <StyledButton type={type} primary={primary} color={color} onClick={clickHandler}>
      {text}
    </StyledButton>
   );
}
 
export default Button;