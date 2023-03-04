import "bootstrap/dist/css/bootstrap.min.css";
import CV from "./components/CV";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import "./App.css";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      
    <Routes>
      <Route path="/Portafolio" element={<CV />} />
      <Route path="/Contacto" element={<Contacto />} />      
    </Routes>
    </div>
  );
}

export default App;
