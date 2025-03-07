import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";  
import Login from "./components/LoginComponent"
import Welcome from "./components/WelcomeComponent"
import Competition from "./components/CompetitionComponent";
import Rewards from "./components/RewardsComponent";
import Missions from "./components/MissionsComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/competition" element={<Competition />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/missions" element={<Missions />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;