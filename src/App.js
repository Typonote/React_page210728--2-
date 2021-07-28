import logo from './logo.svg';
import './App.css';

// HeaderTag 컴포넌트 생성
function HeaderTag(props) {
  return (
    <header>
      <h1>
        <a href="index.html">{props.title}</a>
      </h1>
    </header>
  );
}

// NavTag 컴포넌트 생성
function NavTag(props) {

  console.log('props', props.data);
  var d = props.data;
  var lis = [];

  for (var i = 0; i < d.length; i++) {
    console.log(i, d[i]);
    lis.push(<li>{d[i].title}</li>)
  }

  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  );
}

// ArticleTag 컴포넌트 생성
function ArticleTag(props) {
  return (
    <article>
      <h2 style={{ color: 'red' }}>{props.title}</h2>
      {props.description}
    </article>
  );
}

function App() {

  // topics배열생성 => NavTag에서 사용
  var topics = [
    { id: 1, title: 'html', description: 'html is....' },
    { id: 2, title: 'css', description: 'css is....' }
  ]

  return (
    <div className="App">
      <HeaderTag title="I love WEB" />
      <NavTag data={topics} />
      <ArticleTag title="Welcome" description="Hello, WEB" />
    </div>
  );
}

export default App;
