import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from '@components/RegisterComponent';
import Login from '@components/LoginComponent';
import Rewards from './pages/RewardsPage';
import Missions from './pages/MissionsPage';
import Welcome from './pages/WelcomePage';
import Content from './pages/ContentPage';
import Competition from "./pages/CompetitionPage";
import SpecificGameComponent from './components/Componentes Competicion/SpecificGameComponent';
import TournamentDetailsPage from "./pages/TournamentDetailsPage";
import Perfil from './pages/PerfilPage';
import Ventajas from './pages/VentajasPage';
import ReportPlayerPage from "./pages/ReportPlayerPage";
import MissionDetailsPage from "./pages/MissionDetailsPage";
import RewardDetailsPage from "./pages/RewardDetailsPage";
import MaintenancePage from "./pages/MaintenancePage";
import Tienda from './pages/TiendaPage';
import Interior_Productos from '@components/Componentes Tienda/InteriorProductos_Component';
import SuperCheckout from './pages/CheckoutPage';



function App() {
  const [maintenance, setMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/mantenimiento.txt')
      .then(res => res.text())
      .then(data => {
        const flag = data.trim().toLowerCase();
        setMaintenance(flag === 'on');
        setLoading(false);
      })
      .catch(err => {
        console.error('Cargando', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando</div>;

  return (
    <Router>
      <Routes>
        {maintenance ? (
          <>
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="*" element={<Navigate to="/maintenance" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Welcome />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />   
            <Route path="/competition" element={<Competition />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/content" element={<Content />} />
            <Route path="/game" element={<SpecificGameComponent />} />
            <Route path="/tournament-details" element={<TournamentDetailsPage />} />
            <Route path="/ventajas" element={<Ventajas />} />
            <Route path="/report-player" element={<ReportPlayerPage />} />
            <Route path="/mission-details" element={<MissionDetailsPage />} />
            <Route path="/reward-details" element={<RewardDetailsPage />} />
            <Route path="/maintenance" element={<Navigate to="/" replace />} />
            <Route path="/producto" element={<Interior_Productos />} />
            <Route path="/checkout" element={<SuperCheckout />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

