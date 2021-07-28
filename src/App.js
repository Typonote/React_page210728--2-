import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Header 컴포넌트 생성
function Header(props) {
  // console.log('Header', props)
  function onClickHandler(e) {
    // a 태그가 어딘가의 링크로 이동하므로 그 동작을 취소. a가 아닌 다른 태그에서의 onClick 이벤트에는 preventDefault가 필요없다.=> a태그의 원래 갖고있던 기능을 차단하고 내가 작성한 것만 구현
    e.preventDefault();
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

  function onClickHandler(e) {
    e.preventDefault();
    props.onChangeMode();
  }

  var d = props.data;
  var lis = [];

  for (var i = 0; i < d.length; i++) {
    lis.push(<li key={d[i].id}><a href={d[i].id} onClick={onClickHandler}>{d[i].title}</a></li>);
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

  var [mode, setMode] = useState('WELCOME');
  console.log('mode', mode);



  // topics배열생성 => NavTag에서 사용
  var topics = [
    { id: 1, title: 'html', description: 'html is....' },
    { id: 2, title: 'css', description: 'css is....' }
  ]

  function onChangeHeaderHandler() {
    // mode에 맞는 기능이 실행되도록 설정하는 핸들러
    console.log('Header!!!!');
    setMode('WELCOME');
  }

  function onChangeNavHandler() {
    // mode에 맞는 기능이 실행되도록 설정하는 핸들러
    console.log('Nav!!!!');
    setMode('READ');
  }

  var title;
  var desc;

  if (mode === 'WELCOME') {
    title = 'Welcome';
    desc = 'Hello, React'
  } else if (mode === 'READ') {
    title = 'Read Mode';
    desc = 'Hello, Read';
  }


  return (
    <div className="App">
      <Header title="I love WEB" onChangeMode={onChangeHeaderHandler} />
      <NavTag data={topics} onChangeMode={onChangeNavHandler} />
      <ArticleTag title={title} description={desc} />
    </div>
  );
}

export default App;
