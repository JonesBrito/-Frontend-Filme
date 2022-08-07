import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Filme from './pages/domain/Filme';

import CadastrarFilme from './pages/process/Filme/cadastrar';
import MostrarFilme from './pages/process/Filme/mostrarfilmes';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path='/criar-conta' element={<CreateAccount />} /> */}
                    <Route path='/entrar' element={<Login />} />

                    {/* Domain pages */}
                    <Route path='/filme' element={<Filme />} />
                    {/*<Route path='/localevento' element={<LocalEvento />} />
                    <Route path='/criar-localevento' element={<CreateLocalEvento />} />
                    <Route path='/atualizar-localevento' element={<UpdateLocalEvento />} />
                    <Route path='/veiculo' element={<Veiculo />} /> */}

                    {/* Process */}
                    <Route path='/cadastrar-filme' element={<CadastrarFilme />} />
                    <Route path='/mostrar-filme' element={<MostrarFilme />} />
                    {/* <Route path='/checkin' element={<CheckIn />} />
                    <Route path='/criar-checkin' element={<CreateCheckIn />} />
                    <Route path='/atualizar-checkin' element={<UpdateCheckIn />} />
                    <Route path='/localevento-reserva' element={<ReservaEvento />} />
                    <Route path='/criar-localevento-reserva' element={<CreateLocalEventoReserva />} />
                    <Route path='/atualizar-localevento-reserva' element={<UpdateLocalEventoReserva />} /> */}

                    {/* Report pages */}
                    {/* <Route path='/relatorio-checkin' element={<ReportCheckIn />} />
                    <Route path='/relatorio-checkout' element={<ReportCheckOut />} />
                    <Route path='/relatorio-veiculo' element={<ReportVeiculo />} />
                    <Route path='/relatorio-reserva-local-evento' element={<ReportLocalEvento />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;