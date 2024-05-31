import { Home } from "../Pages/home";
import { Login } from '../Pages/login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
