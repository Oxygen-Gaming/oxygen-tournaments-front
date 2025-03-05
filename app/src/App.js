import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";  

function App() {
  console.log('Hola');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />  
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
