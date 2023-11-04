import logo from './logo.svg';
import './App.css';
import './component/home.css'
import {
  BrowserRouter as Router,

  Route,
  Routes,
  Link
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home'
import About from './component/About'
import Form1 from './component/Form1';


function App(location) {
  return (

 


    <Router>
    <div>
   
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">User Data</Link>
        </li>  <li>
         <span><Link to="/user">User</Link></span>
        </li>
       
      </ul>

  
      <Routes>
    <Route path="/home" element={<Home/>} />
</Routes>
<Routes>
<Route path="/about" element={<About/>} />
</Routes>
<Routes>
<Route path="/user" element={<Form1/>} />
</Routes>
        
     
    </div>

    
  </Router>
  );
}

export default App;
