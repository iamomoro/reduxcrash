import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        
              
      </header>
      <Posts />
     
    </div>
  );
}

export default App;
