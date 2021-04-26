import React, {useState} from 'react';
import './App.css';
import './Components/List';
import List from "./Components/List";

interface ListItemInterface {
    id: string
    name: string
}

function App() {

    const [list, setList] = useState<ListItemInterface[]>(
        [
            {
                id: "test",
                name: "test"
            }
        ]
    )

  return (
    <div className="App">
      <header className="App-header">
          <p>test</p>
          <List list={list}/>
      </header>
    </div>
  );
}

export default App;
