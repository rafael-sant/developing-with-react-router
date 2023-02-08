import Inicio from "./paginas/inicio";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada></NaoEncontrada>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
