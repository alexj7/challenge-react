import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { NavBar } from "../components/organism/NavBar/NavBar";
import { Login } from "../screens/login";
import { Home } from "../screens/home";
import { UniDetail } from "../screens/uniDetail";

export const AppRouter = () => {
  const logged = true;
  // const { state: { logged } } = useContext(DataContext)

  return (
    <Router>
      {/* {logged ? <NavBar /> : null} */}

      <Routes>
        {/* AUTH PUBLIC */}
        <Route
          path="/login"
          element={logged ? <Login /> : <Navigate to="/" />}
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
