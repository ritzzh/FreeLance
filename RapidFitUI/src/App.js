import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        
        <div className="main">
          <Routes>
            <Route exact path="/Hero" element={<Hero/>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/Calculator" element={<Calculator/>}></Route>
            <Route exact path="/Booking" element={<Booking/>}></Route>
          </Routes>
        </div>
        <div className="vertical-sidebar">
          <Navbar></Navbar>
        </div>
      </Router>
    </div>
  );
}

export default App;
