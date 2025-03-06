import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/RegisterComponent";  
import Login from "./components/LoginComponent";
import Rewards from "./components/RewardsComponent";
import Missions from "./components/MissionsComponent";
import Welcome from "./components/WelcomeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;