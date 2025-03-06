import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/RegisterComponent";  
import Login from "./components/LoginComponent";
import Rewards from "./components/RewardsComponents";
import Missions from "./components/MissionsComponent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;