import React, {useEffect, useState} from 'react';
import AddItem from "./Components/AddItem";
import List from "./Components/List";
import './Style/AppStyle.sass';

interface ListItemInterface {
    id: number
    name: string
}

function App() {
    const rename = (capitals: any): any => {
        const test: ListItemInterface[] = []
        capitals.forEach((item:any) => {
            test.push({id: item._id, name: item.name})
        });
        return test;
    }

    useEffect(() => {
        fetch("https://dry-refuge-25840.herokuapp.com/list", {
            "method": "GET",
        })
            .then(response => response.json())
            .then(data => rename(data))
            .then(dataFinal => setList(dataFinal))
    }, []);

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
          <h1> Web Technologies Basics </h1>
          <AddItem addItem={addItem}/>
          <List list={list} removeItem={removeItem}/>
      </header>
    </div>
  );
}

export default App;
