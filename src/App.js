import logo from './logo.svg';
import './App.css';

// HeaderTag 컴포넌트 생성
function HeaderTag(){
  return (
    <header>
        <h1>
          <a href="index.html">WEB</a>
        </h1>
      </header>
  );
}

// NavTag 컴포넌트 생성
function NavTag(){
  return(
    <nav>
        <ul>
          <li><a href="1.html">html</a></li>
          <li><a href="2.html">css</a></li>
        </ul>
    </nav>
  );
}

// ArticleTag 컴포넌트 생성
function ArticleTag(){
  return(
    <article>
        <h2>Welcome</h2>
        Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderTag />
      <NavTag />
      <ArticleTag />
    </div>
  );
}

export default App;
