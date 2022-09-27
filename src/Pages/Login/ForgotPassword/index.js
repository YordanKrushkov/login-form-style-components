import { useState } from 'react';
import img from '../../../app/assets/images/Forgot password illustration.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { FormWrapper, BottomText } from '../index.styled';

const ForgotPasswordForm = ({toggle}) => {
  const [email, setEmeil] = useState('');

  const submitHandler = (e) => {
    //to be verified
    e.preventDefault();
    alert(`An email was sent to ${email}`);
  };
  return ( 
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <img src={img} alt="login ilistration"/>
        <h1>Welcome back!</h1>
        <Input type={'email'} placeholder={'example@email.com'} id={'email'} onChange={(e)=> setEmeil(e.target.value)}/>
        <Button text={'RESET'} primary/>
        <BottomText>Already have an account? <span onClick={toggle}>Login here</span></BottomText>
      </form>
    </FormWrapper>
   );
}
 
export default ForgotPasswordForm;