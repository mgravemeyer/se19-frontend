import React, {useEffect, useState} from 'react';
import AddItem from "./Components/AddItem";
import List from "./Components/List";
import './Style/AppStyle.sass';

interface ListItemInterface {
    id: number
    name: string
}

function App() {
    const convertJSON = (jsonObject: any): any => {
        const convertedJSON: ListItemInterface[] = []
        jsonObject.forEach((item:any) => {
            convertedJSON.push({id: item._id, name: item.name})
        });
        return convertedJSON;
    }

    useEffect(() => {
        fetch("https://dry-refuge-25840.herokuapp.com/list", {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => convertJSON(data))
            .then(dataFinal => setList(dataFinal))
    }, []);

    const addItem = (name: string) => {
        //updating backend
        fetch("https://dry-refuge-25840.herokuapp.com/listAdd", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name': name
            }),
        }).then(response => (response.json()))
            //updating frontend
            .then(jsonObject => setList([...list, {id: jsonObject.id, name: name}]))
    }

    const removeItem = (id: number) => {
        //updating backend
        fetch("https://dry-refuge-25840.herokuapp.com/listRemove", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'id' : id
            }),
        })
        //updating frontend
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
