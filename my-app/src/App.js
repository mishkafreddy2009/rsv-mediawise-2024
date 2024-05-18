import './App.css';
import Header from './components/Header/header';
import Dropzone from './components/dropzone/Dropzone';
import Checkbox from './components/Categories/Categories';
import SelectFile from './components/SelectFile/SelectFile';
import Time from './components/Time/Time';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Checkbox />
      <Time />
      <Dropzone />
      <SelectFile />
    </div>
  );
}

export default App;
