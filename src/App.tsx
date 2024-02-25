import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Home from "./component/Home";
import NotePage from "./component/NotePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NotePage/:id" element={<NotePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
