import './App.css';
import Header from './components/Header/header';
import Dropzone from './components/dropzone/Dropzone';
import Checkbox from './components/Categories/Categories';
import SelectFile from './components/SelectFile/SelectFile';
import Time from './components/Time/Time';
import Kinds from './components/Kinds/Kinds';
import { ButtonToolbar } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


function App() {

  const [time, setTime] = useState('');
  const [kinds, setKinds] = useState('');



  return (
    <div className="App">
      <Header /> 
      <form >
      <Checkbox />
      <Time />
      <Kinds />
      <Dropzone />
      <SelectFile />
      <button>Отправить</button>
      </form>
    </div>
  );
}

export default App;
