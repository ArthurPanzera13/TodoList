import {useState} from 'react';
import { Button } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { VscAdd } from "react-icons/vsc";
import { Input } from 'reactstrap';
import { item } from './types/itens'
import { ItemLista } from './components';
import AddTarefa from './components/AddTarefa';
import './App.css';
import { ListFormat } from 'typescript';

function App() {

  const [list, setlist] = useState<item[]>([]);

  const SaveNameTask = (nametask: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: nametask,
      done: false
    })
    setlist(newList);
  }

  const botao = (name: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: name,
      done: false
    })
    setlist(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='titulo'>
          To-do List
        </div>
        <div id='todo' className = 'container'>
          <div id = "teste" className = "col-12 ">
            <AddTarefa onEnter = {SaveNameTask}/>
          </div>
          <div className='col-12' id='itens'>
          {list.map((item, index)=> (
            <ItemLista key = {index} item={item}/>
          ))}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;