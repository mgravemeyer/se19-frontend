import React, {useState} from 'react';
import AddItem from "./Components/AddItem";
import List from "./Components/List";
import './Style/AppStyle.sass';

interface ListItemInterface {
    id: number
    name: string
}

function App() {

    const addItem = (name: string) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newItem: ListItemInterface = {id: id, name: name}
        setList([...list, newItem])
    }

    const removeItem = (id: number) => {
        setList(list.filter((item) => item.id !== id))
    }

    const [list, setList] = useState<ListItemInterface[]>(
        [
        ]
    )

  return (
    <div className="App">
      <header className="App-header">
          <AddItem addItem={addItem}/>
          <List list={list} removeItem={removeItem}/>
      </header>
    </div>
  );
}

export default App;
