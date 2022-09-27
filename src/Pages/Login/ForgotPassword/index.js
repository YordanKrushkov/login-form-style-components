import img from '../../../app/assets/images/Forgot password illustration.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { FormWrapper, BottomText } from '../index.styled';

const ForgotPasswordForm = ({toggle}) => {

  return ( 
    <FormWrapper>
      <form>
        <img src={img} alt="login ilistration"/>
        <h1>Welcome back!</h1>
        <Input placeholder={'example@email.com'} id={'email'}/>
        <Button text={'RESET'} primary/>
        <BottomText>Already have an account? <span onClick={toggle}>Login here</span></BottomText>
      </form>
    </FormWrapper>
   );
}
 
export default ForgotPasswordForm;