import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '@components/RegisterComponent';
import Login from '@components/LoginComponent';
import Rewards from '@components/RewardsComponent';
import Missions from '@components/MissionsComponent';
import Welcome from '@components/WelcomeComponent';
import Content from '@components/ContentComponent';
import Competition from "./pages/CompetitionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/competition" element={<Competition />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
