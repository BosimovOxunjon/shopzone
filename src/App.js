import "./App.css";
import SignUp from "./containers/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import Search from "./containers/Search/Search";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
