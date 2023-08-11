import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useDataContext } from "../context/dataContext";

import { Login } from "../screens/login";
import { Home } from "../screens/home";
import { UniDetail } from "../screens/uniDetail";
import { Navbar } from "../componets/navBar";

export const AppRouter = () => {
  const { state: { logged } } = useDataContext()

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* AUTH PUBLIC */}
        <Route
          path="/login"
          element={!logged ? <Login /> : <Navigate to="/" />}
        />

        {/* PRIVATE LOGGED */}
        <Route
          path="/"
          element={logged ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/detail/:id"
          element={logged ? <UniDetail /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};
