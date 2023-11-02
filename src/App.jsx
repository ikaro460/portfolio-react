import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
    </Routes>
  );
}

export default App;
