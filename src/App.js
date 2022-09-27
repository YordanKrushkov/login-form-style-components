import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './app/constants/theme';
import ForgotPasswordForm from './Pages/Login/ForgotPassword';
import Login from './Pages/Login/LoginPage';
function App() {
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  const toggle = () => setIsForgotPassword(!isForgotPassword)
  return (
    <ThemeProvider theme={theme}>
      {
        isForgotPassword
        ? <ForgotPasswordForm toggle={toggle}/>
        : <Login toggle={toggle}/>
      }
    </ThemeProvider>
    
  );
}

export default App;
