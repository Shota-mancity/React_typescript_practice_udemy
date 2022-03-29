import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./advancedPractices/Todo";
import {TodoType} from "./advancedPractices/types/todo"
import { Text } from "./advancedPractices/Text";
import { UserProfile } from "./advancedPractices/UserProfile";
import { User } from "./advancedPractices/types/user";

const user: User={
    name: "Kate",
    hobbies: ["football", "dramas"]
}

function App2() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then(res => {
      setTodos(res.data);
      console.log(res.data)
    });
  };
  return (
    <div className="App">
    <UserProfile user={user} />
    <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>Get data</button>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App2;
