import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '@components/RegisterComponent';
import Login from '@components/LoginComponent';
import Rewards from './pages/RewardsPage';
import Missions from './pages/MissionsPage';
import Welcome from '@components/WelcomeComponent';
import Content from './pages/ContentPage';
import Competition from "./pages/CompetitionPage";
import SpecificGameComponent from './components/Componentes Competicion/SpecificGameComponent';
import TournamentDetailsPage from "./pages/TournamentDetailsPage";
import Perfil from './pages/PerfilPage';


function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
