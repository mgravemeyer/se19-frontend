import React, {useState} from 'react';
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
                id: "testID",
                name: "testName"
            },
        ]
    )

  return (
    <div className="App">
      <header className="App-header">
          <List list={list} setList={setList}/>
      </header>
    </div>
  );
}

export default App;
