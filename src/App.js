import logo from './logo.svg';
import './App.css';


function HeaderTag(){
  return (
    <header>
        <h1>
          <a href="index.html">WEB</a>
        </h1>
      </header>
  );
}


function App() {
  return (
    <div className="App">
      <HeaderTag />
      <nav>
        <ul>
          <li><a href="1.html">html</a></li>
          <li><a href="2.html">css</a></li>
        </ul>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
