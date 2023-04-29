import Card from 'componentes/Card';
import Configuracao from 'pages/Configuracao';
import PaginaComum from 'pages/PaginaComum';
import Sorteio from 'pages/Sorteio';
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
              <Card titulo="Vamos começar!">
                <Configuracao />
              </Card>}
            />
            <Route path='sorteio' element={
              <Card titulo="Quem vai tirar o papelzinho?">
                <Sorteio />
              </Card>}
            />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
