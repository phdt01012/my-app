// import logo from './logo.svg';
import logo from './profile-pic.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>My Portfolio</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bhagya
        </a>
      </header>
    </div>
  );
}

export default App;
