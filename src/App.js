import './App.css';

function App({ message, nome }) {

  const apertarBtn = () => {
    console.log("vamos ver!!!");
  }

  return (
    <div className="App">
      <h3> {message} </h3>
      <div> {nome} </div>
      <button type='btn' onClick={apertarBtn}>abrir</button>
    </div>
  );
}

export default App;
