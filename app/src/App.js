import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/RegisterComponent";  
import Login from "./components/LoginComponent"
import Welcome from "./components/WelcomeComponent"
import Competition from "./components/CompetitionComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;