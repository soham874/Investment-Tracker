import './App.css';
import Login from './Frontend/Pages/Login/login'
import Registration from './Frontend/Pages/Registration/registration'
import Forgot_Password from './Frontend/Pages/Forgot Password/forgot_password'
import Reset_Password from './Frontend/Pages/Reset Password/reset_password'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
	  <Route exact path="/" component={Login}/>
	  <Route path="/login" component={Login}/>
    <Route path="/forgotpassword" component={Forgot_Password}/>
	  <Route path="/registration" component={Registration}/>
    <Route path="/resetpassword" component={Reset_Password}/>
    </div>
  );
}

export default App;
