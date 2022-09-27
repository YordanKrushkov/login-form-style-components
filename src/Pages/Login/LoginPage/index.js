import img from '../../../app/assets/images/Login-illustration.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { BtnWrapper, FormWrapper, ForgotPassword, SocialMedia } from '../index.styled';

const Login = ({ toggle }) => {

  return ( 
    <FormWrapper>
      <form>
        <img src={img} alt="login ilistration"/>
        <h1>Welcome back!</h1>
        <Input placeholder={'example@email.com'} id={'email'}/>
        <Input placeholder={'password'} id={'password'}/>
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