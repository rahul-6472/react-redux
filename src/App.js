import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound";
import { Routes, Route } from "react-router-dom";
import TodoItem from "./Components/Todo/TodoItem";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/TodoList/:id" element={<TodoItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
