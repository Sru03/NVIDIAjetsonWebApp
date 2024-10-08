import logo from './Images/logo.png';
import './App.css';
import {  Link } from 'react-router-dom';

/* Home page  */

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div >
          <nav>
            <Link to="/Display"> WELCOME </Link>
          </nav>
          
        </div>

      </header>
    </div>



  );
}

export default App;
