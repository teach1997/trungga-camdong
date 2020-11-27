import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { NavBar } from './Nav/NavBar';
import { Header } from './Header/Header';
import { Title } from './Title/Title'
import { BodyTitle } from './BodyTitle/BodyTitle';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Title />
      <BodyTitle />
    </div>
  );
}

export default App;
