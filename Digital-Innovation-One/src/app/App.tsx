import { Home } from "../Pages/home";
import { Login } from '../Pages/login';
import { Feed } from '../Pages/feed';
import { Logout } from '../Pages/logout';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// ------------------------------------------

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
