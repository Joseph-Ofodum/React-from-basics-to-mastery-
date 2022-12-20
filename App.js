
import './App.css';

function App() {

  const tittle = 'odogwu aburo guy name';
  const liked = 50;
  const link = "http://www.Google.com"
  return (
    <div className="App">
      <div className="content">
        <h1> {tittle} </h1>
        <p> loved {liked} times </p>
        <p>{10}</p>
        <p>{"I have lived"}</p>
        <p>{[10, 25, 36, 44, 5]}</p>
        <p> { Math.random()*5 } </p>
        <a href = {link} > Google  </a>
      </div>
    </div>
  );
}

export default App;
