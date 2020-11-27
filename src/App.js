import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { NavBar } from './Nav/NavBar';
import { Header } from './Header/Header';
import { Title } from './Title/Title'
import { BodyTitle } from './BodyTitle/BodyTitle';
import { Footer } from './Footer/Footer';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Farm from './Pages/Farm';
import Food from './Pages/Food';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/farm' component={Farm} />
      <Route path='/food' component={Food} />
    </Router>
  );
}

export default App;
