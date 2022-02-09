import { BrowserRouter  } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";


const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />;
    </BrowserRouter>
  );
};

export default App;
