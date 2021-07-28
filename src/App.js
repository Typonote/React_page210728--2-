import logo from './logo.svg';
import './App.css';

// HeaderTag 컴포넌트 생성
function HeaderTag(props){
  return (
    <header>
        <h1>
          <a href="index.html">{props.title}</a>
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
function ArticleTag(props){
  console.log('props',props.title);
  return(
    <article>
        <h2 style={{color:'red', fontSize: '100px'}}>{props.title}</h2>
        {props.description}
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderTag title="I love WEB"/>
      <NavTag />
      <ArticleTag title="Welcome" description="Hello, WEB"/>
      <ArticleTag title="Hi" description="Hello, REACT"/>
      <ArticleTag title="Hi2" description="Hello, REACT"/>
      <ArticleTag title="Hi3" description="Hello, REACT"/>
    </div>
  );
}

export default App;
