import logo from './logo.svg';
import './App.css';

// Header 컴포넌트 생성
function Header(props) {
  console.log('Header', props)
  function onClickHandler() {
    props.onChangeMode();
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={onClickHandler}>WEB</a>
      </h1>
    </header>
  );
}

// NavTag 컴포넌트 생성
function NavTag(props) {

  var d = props.data;
  var lis = [];

  for (var i = 0; i < d.length; i++) {
    lis.push(<li key={d[i].id}><a href={d[i].id}>{d[i].title}</a></li>);
    // key를 사용하는 이유: 렌더링 시 좀 더 빨라진다.
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

  function onChangeModeHandler() {
    // mode에 맞는 기능이 실행되도록 설정하는 핸들러
    console.log('onChangeMode!!!!')
  }

  return (
    <div className="App">
      <Header title="I love WEB" onChangeMode={onChangeModeHandler} />
      <NavTag data={topics} onChangeMode={onChangeModeHandler} />
      <ArticleTag title="Welcome" description="Hello, WEB" />
    </div>
  );
}

export default App;
