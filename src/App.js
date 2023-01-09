import "./App.css";
import SignUp from "./containers/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
