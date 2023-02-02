import Inicio from "./paginas/inicio";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<p> Página não encontrada </p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
