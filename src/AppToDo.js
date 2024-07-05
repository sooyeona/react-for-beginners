import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState(""); //개별의 todo
  const [toDos, setTodos] = useState([]); // todo들의 배열

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      //toDo 비어있으면 서브밋 하지마
      return;
    }
    setTodos((currentArray) => [...currentArray, toDo]); //arry에 방금 넣은 todo와 이전 todos 넣어  ** ...array
    setTodo(""); //서브밋 하면 투두 인풋 비워
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your To Do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/*  map은 하나의 array에 있는 item을 내가 원하는 것으로 바꿔줌 
      어레이 안의 것들을 item으로 받아와서 컨트롤
      */}
    </div>
  );
}

export default App;
