import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contador from './components/Contador';
import Pai from './Comunicacao/Pai';
import Imc from './projets/imc';
import Form from './Todo/Form';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <App message='hello tiago' nome={10 + 10} />
      <Contador />
      <Pai />
      <Imc />
      <Form />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
