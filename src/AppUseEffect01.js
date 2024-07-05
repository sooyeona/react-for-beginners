import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const [keyword, setKeword] = useState("");
  const onSearchChange = (event) => {
    console.log(event.target.value);
    setKeword(event.target.value);
  };

  console.log("I run all the time");
  //처음 render할때만 코드를 실행하고싶어/ 다른 state 변화에는 실행되지 않도록
  // useEffect는 처음 한번만 실행되고 다시는 실행되지 않을 function을 넣어줌(두개의 argument를 받음 첫번쨰 argument에 한번실행될거넣음)
  useEffect(() => {
    console.log("Once");
  }, []);

  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]); //키워드가 변할때만 코드를 실행한다!

  useEffect(() => {
    console.log("카운터될때만 실행돼");
  }, [counter]);

  useEffect(() => {
    console.log("키워드 & 카운터 변할때");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onSearchChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>Welcome{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"버튼이다!"} />
    </div>
  );
}

export default App;
