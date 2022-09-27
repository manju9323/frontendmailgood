import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Gmail from './compo/gmail';
import Login from './Login'
import Register from './Register';
import Protectedrouter from './protectedrouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const url='https://gmailapp.onrender.com/api/auth/login';

//toast
//<Protectedrouter exact path="/home" component={Gmail}/>


function App() {
  return (
    
    <div className='App'>
      <Router>
<Route exact path="/" component ={Login}/>
<Route  exact path="/register" component ={Register}/>
<Protectedrouter exact path="/home" component={Gmail}/>
      </Router>
      <ToastContainer />
    </div>

  );
}

export default App;
