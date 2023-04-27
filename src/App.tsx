import Card from 'componentes/Card';
import Formulario from 'componentes/Formulario';
import ListaDeParticipantes from 'componentes/ListaDeParticipantes';
import PaginaComum from 'pages/PaginaComum';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaComum />}>
            <Route index element={
              <Card>
                <Formulario />
                <ListaDeParticipantes />
              </Card>}
            />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
