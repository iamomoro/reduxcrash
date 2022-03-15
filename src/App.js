import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Postform from './components/postform';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
