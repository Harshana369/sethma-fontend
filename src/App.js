import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomer from "./pages/AddCustomer";
import  Customers from "./pages/Customers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customers />}></Route>
        <Route path="/add-customer" element={<AddCustomer />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
