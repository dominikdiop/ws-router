import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
