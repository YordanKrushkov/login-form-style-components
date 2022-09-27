import { useState } from 'react';
import img from '../../../app/assets/images/Login-illustration.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { BtnWrapper, FormWrapper, ForgotPassword, SocialMedia } from '../index.styled';

const Login = ({ toggle }) => {
  const [user, setUser] = useState({ email: '' , password: '' });

  const changeHandler = (e) => {
  
    // to be validated
    setUser({
      ...user,
      [e.target.id] : e.target.value
    });
  };
  
  const submitHandler = (e) => {
    // to be validated
    e.preventDefault();
    alert(`Welcome, ${user.email}`);
  };
  
  return ( 
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <img src={img} alt="login ilistration"/>
        <h1>Welcome back!</h1>
        <Input type={'email'} placeholder={'example@email.com'} id={'email'} onChange={changeHandler}/>
        <Input type={'password'} placeholder={'password'} id={'password'} onChange={changeHandler}/>
        <ForgotPassword className='forgotten-password' onClick={toggle}>Forgot Password?</ForgotPassword>
        <Button text={'LOG IN'} primary/>
        <SocialMedia className='connect-social-media'>Or connect with social</SocialMedia>
        <BtnWrapper>
          <Button type='button' text={'Facebok'}/>
          <Button type='button' text={'Google'} color={'secondaryColor'}/>
        </BtnWrapper>
      </form>
    </FormWrapper>
   );
}
 
export default Login;