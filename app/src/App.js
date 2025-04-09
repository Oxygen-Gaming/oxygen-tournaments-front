import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
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
      </Routes>
    </Router>
  );
}

export default App;
