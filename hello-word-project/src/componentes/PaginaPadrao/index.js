import Banner from "componentes/Banner";
import React from "react";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <main>
      <Banner></Banner>
      {/* Renderizando conteúdo da rota*/}

      <Outlet></Outlet>
    </main>
  );
}
