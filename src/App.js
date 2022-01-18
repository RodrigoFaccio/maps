import Login from "./Components/Login"
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Location from "./Location"

function App() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/map" element={<Location />} />
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
