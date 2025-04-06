import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SymptomChecker from "./SymptomChecker";
import MentalBot from "./MentalBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/mental" element={<MentalBot />} />
      </Routes>
    </Router>
  );
}

export default App;