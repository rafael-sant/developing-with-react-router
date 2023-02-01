import Inicio from "./paginas/inicio";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SobreMim from "./paginas/sobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<p> Página não encontrada </p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
