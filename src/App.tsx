import React, {useState} from 'react';
import './Components/List';
import AddItem from "./Components/AddItem";
import List from "./Components/List";

interface ListItemInterface {
    id: string
    name: string
}

function App() {

    const addItem = () => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newItem: ListItemInterface = {id: "test", name: "test"}
        setList([...list, newItem])
    }

    const [list, setList] = useState<ListItemInterface[]>(
        [
            {
                id: "testID",
                name: "testName"
            },
        ]
    )

  return (
    <div className="App">
      <header className="App-header">
          <AddItem addItem={addItem}/>
          <List list={list} setList={addItem}/>
      </header>
    </div>
  );
}

export default App;
