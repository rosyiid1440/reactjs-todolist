import FormToDoList from './components/FormToDoList';
import ListToDoList from './components/ListToDoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    'Belajar React Fundamental',
    'Ngoding Sampai Bisa',
  ]);

  const formSubmitHandler = (todo) => {
    console.log('todo dari parent', todo);
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <FormToDoList propsSubmitHandler={formSubmitHandler}/>
      <ListToDoList propsTodos={todos}/>
    </div>
  );
}

export default App;
