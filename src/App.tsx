import React, {useState} from 'react';
import AddItem from "./Components/AddItem";
import List from "./Components/List";

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

    const deleteItem = (id: number) => {
        setList(list.filter((item) => item.id !== id))
        // setTasks(tasks.filter((task) => task.id !== id))
    }

    const [list, setList] = useState<ListItemInterface[]>(
        [
            {
                id: 123,
                name: "testName"
            },
        ]
    )

  return (
    <div className="App">
      <header className="App-header">
          <AddItem addItem={addItem}/>
          <List list={list}/>
      </header>
    </div>
  );
}

export default App;
