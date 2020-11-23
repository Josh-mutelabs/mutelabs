import logo from './assets/images/MuteLabsIcon_Pink.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header padding">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mutelabs-label">
          <strong>mute</strong>labs.io
        </p>
      </header>
    </div>
  );
}

export default App;
