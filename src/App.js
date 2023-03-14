import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
          </Routes>
    </>
  );
};

export default App;