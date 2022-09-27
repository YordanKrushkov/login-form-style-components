import { InputWrapper, StyledInput } from './index.styled';
import { BiUser, BiLockAlt } from 'react-icons/bi';


const RenderIcon = ({id}) => {

  if(id === 'email') return  <BiUser/>
  
  if(id === 'password') return <BiLockAlt/>

}

const Input = ({ type, placeholder, id, onChange}) => {
  return ( 
    <InputWrapper>
      <StyledInput type={type} placeholder={placeholder} id={id} onChange={onChange}/>
      <RenderIcon id={id}/>
    </InputWrapper>
   );
}
 
export default Input;