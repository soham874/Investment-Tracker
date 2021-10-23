import './App.css';
import Login from 'Frontend/Pages/Login/login'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
	  <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
