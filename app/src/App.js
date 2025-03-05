import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/RegisterComponent";  
import Login from "./components/LoginComponent"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
      </Routes>
    </BrowserRouter>

  );
}

export default App;