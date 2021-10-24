import './App.css';
import Login from './Frontend/Pages/Login/login'
import Registration from './Frontend/Pages/Registration/registration'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
	  <Route exact path="/" component={Login}/>
	  <Route path="/login" component={Login}/>
	  <Route path="/registration" component={Registration}/>
    </div>
  );
}

export default App;
