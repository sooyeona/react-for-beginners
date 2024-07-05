import { useEffect, useState } from "react";

//새 컴포넌트
function Hello() {
  // 방법 1
  const hiFn = () => {
    console.log("Hi!");
    return byeFn;
  };
  const byeFn = () => {
    console.log("bye");
  };
  useEffect(hiFn, []);

  //방법2
  useEffect(() => {
    console.log("Hi2");
    return () => console.log("bye2");
  }, []);

  //방법 3
  useEffect(function () {
    console.log("Hi3");
    return function () {
      console.log("bye3");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const toggleBtn = () => {
    setShowing((current) => !current);
  };
  return (
    <div>
      <button onClick={toggleBtn}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
