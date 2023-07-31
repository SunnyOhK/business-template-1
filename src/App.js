import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero></Hero>
        <Navbar></Navbar>
        <Header></Header>
        <p>
          Doris's Pressure Washin'
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;