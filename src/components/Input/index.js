import { InputWrapper, StyledInput } from './index.styled';
import { BiUser, BiLockAlt } from 'react-icons/bi';


const RenderIcon = ({id}) => {

  if(id === 'email') return  <BiUser/>
  
  if(id === 'password') return <BiLockAlt/>

}

const Input = ({ placeholder, id}) => {
  return ( 
    <InputWrapper>
      <StyledInput placeholder={placeholder} id={id}/>
      <RenderIcon id={id}/>
    </InputWrapper>
   );
}
 
export default Input;