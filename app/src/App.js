import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";
import Perfil from "./components/PerfilComponent";
import Login from "./components/LoginComponent";
import Rewards from "./components/RewardsComponent";
import Missions from "./components/MissionsComponent";
import Welcome from "./components/WelcomeComponent";
import Profile from "./components/ContentComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/content" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
