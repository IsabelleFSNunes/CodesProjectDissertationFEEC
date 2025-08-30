import "./index.css";

import { BrowserRouter, Routes, Route, Link, defer } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Phase1 from './pages/Phase1';
import Phase2 from "./pages/Phase2";
import axios from "axios";


function App() {

  // const function_loader = (async {request}) => {
  //   const clain = axios.get("http://localhost:8000/api/ghi_sedes_munic/");
  //   return defer(clain);
  // }

  return (
    <BrowserRouter>
      <main>
        {/* Para testar descomente este bloco de código abaixo */}
        {/* <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/phase1">Phase 1</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/phase1" element={<Phase1 />} />
          <Route path="/phase2" element={<Phase2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
