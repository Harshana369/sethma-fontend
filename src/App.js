import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appoimentcalendar from "./pages/Appoimentcalendar";
import Homepage from "./pages/Homepage";
import Patient from "./pages/Patient";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Patient/>}></Route>
        <Route path="/Home" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
