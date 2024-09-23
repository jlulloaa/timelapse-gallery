// Because I'm using them here, I have to import them from here, not in index.js
import {
  Routes,
  Route
} from 'react-router-dom';
import { HashRouter  as Router } from 'react-router-dom';

import Footer from './components/footer';
import NavBar from './components/navbar';

import Home from './components/home';
import Gallery from './components/gallery';

// import logo from './imgs/logo.svg';
import './styles/App.css';
import { Container } from 'react-bootstrap';



function App() {


  return (
    <Container className="App">
      <Router>
        <h1> 
          {/* <img className="img-fluid float-left" src="./bank_logo.png"  width="8%" alt="Bank Logo Left"/>   */}
          <span> <h3>Time Lapse Gallery</h3> </span>
          {/* <img className="img-fluid float-right" src="./bank_logo.png" width="8%" alt="Bank Logo Right"/>  */}
        </h1>
        {/* Add the navigation bar */}
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/gallery" exact element={<Gallery/>} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
