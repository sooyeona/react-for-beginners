import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {/*5버전에서는 Switch, 6버전에서는  Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/*:id는 변수값, detail화면에서 useParams로 받음*/}
      </Routes>
    </Router>
  );
}

export default App;
